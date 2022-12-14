 const express = require('express'); 
 const userControl = require('../controller/userControl')

const router = express.Router(); 

 //login route
 router.post('/login', userControl.loginUser); 

 //signup route
 router.post('/signup', userControl.signupUser)

 module.exports = router; 