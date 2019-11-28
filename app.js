// APP.JS
const express = require('express');
const bodyParser = require('body-parser');

// IMPORTS ROUTES FOR THE PRODUCTS
const product = require('./routes/product.route');


// INITIALIZE EXPRESS APP
const app = express();
app.use('./products', product);

// ASSIGN A PORT NUMBER TO EXPRESS APP
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running ' + port);
});