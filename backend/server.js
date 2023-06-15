const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({path:__dirname+'/.env'});
const cors = require('cors')
const morgan = require('morgan');

const recipesRoutes = require('./router/recipes');
const userRoutes = require('./router/users'); 


const app = express(); 

//middleware
app.use(cors());
app.use(morgan('dev'));


app.use(express.json({limit: '50mb', extended: true}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json());


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });


app.use('/recipes', recipesRoutes);
app.use('/users', userRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(process.versions.node) 
            console.log('Port', process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })