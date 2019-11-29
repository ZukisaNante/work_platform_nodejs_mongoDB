// APP.JS
const express = require('express');
const bodyParser = require('body-parser');

// IMPORTS ROUTES FOR THE PRODUCTS
//const product = require('./routes/product.route');


// INITIALIZE EXPRESS APP
const app = express();

// PARSE REQUESTS OF CONTENT-TYPE - APPLICATION/X-WWW-FORM-URLENCODED
app.use(bodyParser.urlencoded({ extended: true }));

// PARSE REQUESTS OF CONTENT-TYPE - APPLICATION/JSON
app.use(bodyParser.json());

// CONFIGURING THE DATABASE
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// CONNECTING TO THE DATABASE
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// DEFINE A SIMPLE ROUTE
app.get('/', (reg, res) => {
    res.json({ 'message': 'Welcome to our Job Platform!' });
});

// ASSIGN A PORT NUMBER TO EXPRESS APP AND LISTEN FOR REQUESTS
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running ' + port);
});