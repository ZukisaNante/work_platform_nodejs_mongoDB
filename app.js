// APP.JS
const express = require('express');
const bodyParser = require('body-parser');

// INITIALIZE EXPRESS APP
const app = express();

// ASSIGN A PORT NUMBER TO EXPRESS APP
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running ' + port);
});