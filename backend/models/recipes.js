const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    "name": {
        type: String, 
        required: true, 
        unique: true
    }, 
    "author": {
        type: String, 
        required: true
    }, 
    "description": {
        type: String, 
        required: true
    },
    "cooktime": {
        type: String, 
        required: true
    },
    "ingredients": [{
        type: String, 
        required: true
    }],
    "instructions": [{
        type: String,
        required: true
    }],
    "notes":
    {
        type: String, 
        required: false
    }
})

const Recipes = mongoose.model('recipe', recipeSchema); 

module.exports = Recipes; 