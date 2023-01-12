const User = require('../models/users'); 
const mongoose = require('mongoose'); 
const jwt = require('jsonwebtoken');
const { create } = require('../models/users');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

const loginUser = async (req, res) => {
    const {email, password} = req.body; 

    try {
        const user = await User.login(email, password); 
        
        const token = createToken(user._id)
        res.status(200).json({ email, token })
    }
    catch (error){
        res.status(400).json({error: error.message})
    }
}

const signupUser = async (req, res) => {

    const {username, firstName, lastName, email, password} = req.body; 

    try {
        const user = await User.signup(username, firstName, lastName, email, password); 
        
        const token = createToken(user._id)
        res.status(200).json({ email, token })
    }
    catch (error){
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    loginUser, 
    signupUser
}