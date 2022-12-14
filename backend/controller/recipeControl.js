const Recipe = require('../models/recipes'); 
const mongoose = require('mongoose'); 

const getAllRecipes = async (req, res) => {

    res.json({mssg: 'All recipes retrieved'})
    // const quiz = await Recipe.find({}).sort({ name: 1 })

    // res.status(200).json(quiz); 
}

const getRecipe = async (req, res) => {
    const { id } = req.params; 

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: "No quiz can be found"});
    }

    const recipe = await Recipe.findById(id);
    if(!recipe)
    {
        return res.status(404).json({error: "No quiz can be found"});
    }
    res.status(200).json(recipe);
}

const createRecipe = async (req, res) => {
    const { name, author, description, cooktime, ingredients, instructions, notes } = req.body; 

    try{
        const recipe = await Recipe.create({ name, author, description, cooktime, ingredients, instructions, notes })
        res.status(200).json(recipe);
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteRecipe = async (req, res) => {
    const { id } = req.params; 

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: "No recipe can be found"});
    }

    const recipe = await Recipe.findOneAndDelete(id); 
    if(!recipe) {
        return res.status(404).json({ error: "No such recipe exists" })
    }

    res.status(200).json(recipe); 
}

const editRecipe = async (req, res) => {
    const { id } = req.params; 

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: "No recipe can be found"});
    }

    const recipe = await Recipe.findOneAndUpdate({_id: id}, {
        ...req.body
    });
    
    if(!recipe)
    {
        return res.status(404).json({ error: "No recipe can be found" })
    }

    res.status(200).json(recipe);
}

module.exports = {
    getAllRecipes, 
    getRecipe, 
    createRecipe, 
    deleteRecipe, 
    editRecipe
}