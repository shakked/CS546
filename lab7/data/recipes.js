const mongoCollections = require("../config/mongoCollection");
const recipes = mongoCollections.recipes;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllRecipes() {
        return recipes().then((recipeCollection) => {
            return recipeCollection.find({}).toArray();
        })
    },
    getRecipeById(id) {
    	if (!id) {
    		return Promise.reject('Invalid recipeId.');
    	}
        return recipes().then((recipeCollection) => {
            return recipeCollection.findOne({ _id: id }).then((recipe) => {
                if (!recipe) return Promise.reject("Recipe not found");
                return recipe;
            });
        });
    },
    add(title, ingredients, steps) {
    	if (!title || !ingredients || !steps) {
    		return Promise.reject('You must provide a title, ingredients, and steps.');
    	}
        return recipes().then((recipeCollection) => {
            let newRecipe = {
                title: title,
                ingredients: ingredients,
                steps: steps,
                comments: [],
                _id: uuid.v4()
            };

            return recipeCollection.insertOne(newRecipe).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getRecipeById(newId);
            });
        });
    },
    removeRecipe(id) {
    	if (!id) {
    		return Promise.reject('Invalid id.');
    	}

        return recipes().then((recipeCollection) => {
            return recipeCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    return Promise.reject(`Could not delete recipe with id of ${id}`);
                } else { 
                	return;
                }
            });
        });
    },
    updateRecipe(id, title, ingredients, steps) {

    	if (!id && !title && !ingredients && !steps) {
    		return Promise.reject('You must provide an id, title, ingredients, or steps.');
    	}
    	
    	let updates = {};

    	if (id) {
    		updates.id = id;
    	}

    	if (title) {
    		updates.title = title;
    	}

    	if (ingredients) {
    		updates.ingredients = ingredients;
    	}

    	if (steps) {
    		updates.steps = steps;
    	}

        return recipes().then((recipeCollection) => {
            
	        return recipeCollection.update({ _id: id }, { $set: updates }).then((result) => {
	            return this.getRecipeById(id);
	        });
        })
    },
    getComments(recipeId) {

    	if (!recipeId) {
    		return Promise.reject('You must provide a recipeId.');
    	}

    	return this.getRecipeById(recipeId).then(recipe => {
    		return recipe.comments.map( comment => { 
    			return {
    				_id: comment._id,
    				recipeId: recipe._id,
    				recipeTitle: recipe.title,
    				poster: comment.poster,
    				comment: comment.comment,
    			}
    		});	
    	});
    },
    getCommentById(commentId) {

    	if (!commentId) {
    		return Promise.reject('You must provide a commentId.');
    	}

    	return this.getAllRecipes().then(recipes => {
    		var theComment;
    		recipes.forEach(recipe => {
    			if (recipe.comments) {
	    			recipe.comments.forEach( comment => {
	    				if (comment._id == commentId) {
	    					theComment = {
	            				_id: comment._id,
	            				recipeId: recipe._id,
	            				recipeTitle: recipe.title,
	            				poster: comment.poster,
	            				comment: comment.comment,
	            			};
	    				}
	    			});
	    		}
    		});
    		return theComment;
    	})

    },
    addComment(recipeId, poster, comment) {

    	if (!recipeId || !poster || !comment) {
    		return Promise.reject('You must provide poster and comment.');
    	}

    	const newComment = {
    		_id: uuid.v4(),
    		poster: poster,
    		comment: comment,
    	}
    	return recipes().then((recipeCollection) => {
	        return recipeCollection.update({ _id: recipeId }, { $push: { "comments": newComment } }).then((result) => {
	            return newComment;
	        }).catch(error => {
	        	console.log(error);

	        })
        });
    },
    updateComment(recipeId, commentId, poster, comment) {

    	if (!recipeId || !commentId) {
    		return Promise.reject('You must provide a recipeId and a commentId');
    	}

    	return recipes().then(recipeCollection => {
    		return this.getRecipeById(recipeId).then((recipe) => {

    				for (var i = 0; i < recipe.comments.length; ++i) {
    					if (recipe.comments[i]._id == commentId) {
    						recipe.comments[i].poster = poster ? poster : recipe.comments[i].poster;
    						recipe.comments[i].comment = comment ? comment : recipe.comments[i].comment;
    						
    						return recipeCollection.updateOne({ _id: recipeId }, { comments: recipe.comments }).then( (info) => {
    							return this.getCommentById(commentId);
    						})
    					}
    				}

    		});
    	})
    },
    deleteComment(commentId) {
    	return recipes().then(recipeCollection => {
	    	return this.getCommentById(commentId).then( comment => {
	    		if (!comment) {
	    			return Promise.reject("Comment couldn't be found.");
	    		}
	    		const recipeId = comment.recipeId;

	    		return this.getRecipeById(recipeId).then(recipe => {

	    			for (var i = 0; i < recipe.comments.length; ++i) {
						if (recipe.comments[i]._id == commentId) {
							break;
						}
					}
					console.log(recipe.comments.length);
					recipe.comments.splice(i, 1);
					console.log(recipe.comments.length);
					return recipeCollection.updateOne({ _id: recipeId }, { comments: recipe.comments }).then( (info) => {
						return this.getCommentById(commentId);
					});				
	    		});	
	    	});
	    })
    },

}

module.exports = exportedMethods;

