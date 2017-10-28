const express = require('express');
const router = express.Router();
const recipes = require('../data/recipes');

router.get('/recipe/:recipeId', (req, res) => {
    
    const recipeId = req.params.recipeId;
    recipes.getComments(recipeId).then(comments => {
        res.json(comments);
    }).catch(error => {
        res.status(404).json({ error: error });
    });
});

router.get('/:commentId', (req, res) => {
    
    const commentId = req.params.commentId;
    recipes.getCommentById(commentId).then((comment) => {
        res.json(comment);
    }).catch((error) => {
        console.error(error);
        res.status(404).json({ error: error });
    });
});

router.post('/:recipeId', (req, res) => {

    const recipeId = req.params.recipeId;
    const poster = req.body.poster;
    const comment = req.body.comment;
    
    recipes.addComment(recipeId, poster, comment).then((comment) => {
        console.log(comment);
        res.json(comment);
    }).catch((error) => {
        res.status(404).json({ error: error });
    });
});

router.put('/:recipeId/:commentId', (req, res) => {

    const commentId = req.params.commentId;
    const recipeId = req.params.recipeId
    const poster = req.body.poster;
    const comment = req.body.comment;

    recipes.updateComment(recipeId, commentId, poster, comment).then((comment) => {
        console.log(comment);
        res.json(comment);
    }).catch((error) => {
        console.error(error);
        res.status(404).json({ error: error });
    });
});

router.delete('/:commentId', (req, res) => {

    const commentId = req.params.commentId;

    recipes.deleteComment(commentId).then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        console.error(error);
        res.status(404).json({ error: error });
    });
});


module.exports = router;