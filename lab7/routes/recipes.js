const express = require('express');
const router = express.Router();
const recipes = require('../data/recipes');

router.get('/', (req, res) => {
    
    recipes.getAllRecipes().then((recipes) => {
    	res.json(recipes);
    }).catch((error) => {
    	res.status(404).json({ error: error });
    });
});

router.get('/:id', (req, res) => {
	
	const id = req.params.id;
	recipes.getRecipeById(id).then((recipe) => {
		res.json(recipe);
	}).catch((error) => {
    	res.status(404).json({ error: error });
    });
});

router.post('/', (req, res) => {

	const title = req.body.title
	const ingredients = req.body.ingredients;
	const steps = req.body.steps;

	recipes.add(title, ingredients, steps).then((recipe) => {
		res.json(recipe);
	}).catch((error) => {
    	res.status(404).json({ error: error });
    });
});

router.put('/:id', (req, res) => {

	const id = req.params.id;
	const title = req.body.title
	const ingredients = req.body.ingredients;
	const steps = req.body.steps;

	recipes.updateRecipe(id, title, ingredients, steps).then((recipe) => {
		res.json(recipe);
	}).catch((error) => {
    	res.status(404).json({ error: error });
    });
});

router.delete('/:id', (req, res) => {

	const id = req.params.id;
	recipes.removeRecipe(id).then(() => {
		res.sendStatus(200);
	}).catch((error) => {
    	res.status(404).json({ error: error });
    });
});


module.exports = router;