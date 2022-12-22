const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')

const userSchema = new mongoose.Schema({
    "email": {
        type: String, 
        required: true, 
        unique: true
    }, 
    "password": {
        type: String, 
        required: true, 
        minLength: 6
    }
})

// static signup method
userSchema.statics.signup = async function (email, password) {

    //validation
    if(!email || !password)
    {
        throw Error('All fields are required.')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not a valid email.')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ email })

    if(exists){
        throw Error('Email already in use.'); 
    }

    // mypassword
    const salt = await bcrypt.genSalt(10); 
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash })

    return user; 
}

userSchema.statics.login = async function(email, password){
    if(!email || !password)
    {
        throw Error('All fields are required.')
    }

    const user = await this.findOne({ email })

    if(!user){
        throw Error('Incorrect Email'); 
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect password')
    }

    return user; 
}

const User = mongoose.model('user', userSchema); 

module.exports = User; 