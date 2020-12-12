const express = require('express');
const mongoose = require('mongoose');
//para instansias post request, podes tenes un nombre del post
const bodyParser = require('body-parser');

const app = express();

//Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongodb
mongoose
    .connect(db)
    .then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));