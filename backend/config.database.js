// CREATE DATABASE
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/JOBS";

// CONNECT TO THE DATABASE
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log('Database Created');
    db.close;
});