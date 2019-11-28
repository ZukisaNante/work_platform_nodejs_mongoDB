// PLACEHOLDER FOR OUR CONTROLLERS
const Product = require('../models/product.model');

//SIMPLE VERSION, WITHOUT VALIDATION OR SANITATION (will be changed later)
exports.test = function(req, res) {
    res.send('Greeting from the Test Controller8');
};