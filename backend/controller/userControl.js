const User = require('../models/users'); 
const mongoose = require('mongoose'); 

const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

const signupUser = async (req, res) => {

    const {email, password} = req.body; 

    try {
        const user = await User.signup(); 
    }
    catch (error){

    }

    res.json({mssg: 'signup user'})
}


module.exports = {
    loginUser, 
    signupUser
}