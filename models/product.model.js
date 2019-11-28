// DEFINING THE MODEL
// REQUIRE MONGOOSE
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// DEFINE PRODUCT SCHEMA
let ProductSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    price: { type: Number, required: true },
});

// EXPORT THE MODEL, SO IT CAN BE USED BY OTHER FILES IN OUR PROJECT
module.exports = mongoose.model('Product', ProductSchema);