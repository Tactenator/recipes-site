const User = require('../models/users'); 
const mongoose = require('mongoose'); 

const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

const signupUser = async (req, res) => {
    res.json({mssg: 'signup user'})
}

module.exports = {
    loginUser, 
    signupUser
}