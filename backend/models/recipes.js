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
    "time": {
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
    },
    "user_id": {
        type: String, 
        required: true
    }
})

const Recipes = mongoose.model('recipe', recipeSchema); 

module.exports = Recipes; 