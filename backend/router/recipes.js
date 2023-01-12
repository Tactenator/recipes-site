const express = require('express')
const recipeControl = require('../controller/recipeControl')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router(); 
 
router.use(requireAuth)

//get recipes 
router.get('/', recipeControl.getAllRecipes);

//get one recipe
router.get('/:id', recipeControl.getRecipe); 

//add new recipe 
router.post('/', recipeControl.createRecipe); 

//delete recipe
router.delete('/:id', recipeControl.deleteRecipe); 

//patch recipe
router.patch('/:id', recipeControl.editRecipe); 

module.exports = router; 
