// INCLUDE THE ROUTES OF THE PRODUCTS
// REQUIRE EXPRESS AND ROUTE
const express = require('express');
const router = express.Route();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = ('../controllers/product.controller');

// A SIMPLE TEST URL TO CHECK THAT ALL OF OUR FILES ARE COMMUNICATING CORRECTLY
router.get('/test', product_controller.test);

// EXPORT ROUTER MODULE
module.exports = router;