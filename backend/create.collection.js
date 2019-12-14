// CREATE A COLLECTION
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("VACANIES");

    // CREATE
    dbo.createCollection("vacancies", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});

// INSERT DATA TO DATABASE
/* MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("VACANIES");
    var myobj = [
        { _id: 1, title: 'web developer', description: 'programming', skills: 'html, css', education: 'hbo', contact: '039494', company: 'panda' },

        { _id: 2, title: 'manager', description: 'Description', skills: 'skills', education: 'education', contact: 'contact', company: 'company' },

        { _id: 3, title: 'software engineering', description: 'engineering', skills: 'design', education: 'wso', contact: '3435435', company: 'purple' },

        { _id: 4, title: 'sales', description: 'sell', skills: 'sales and marketing', education: 'hbo', contact: '676767', company: 'purple panda' }

    ];
    dbo.collection("vacancies").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
}); */

// FIND DOCUMENT 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("VACANIES");
    dbo.collection("vacancies").find({}).toArray(function(err, result) {
        // TO BE INSERTED AFTER .find({}, { projection: { _id: 0 } })
        if (err) throw err;
        //console.log(result[2].title);
        console.log(result);
        db.close();
    });
});

// QUERY
/* s */

// DELETE ONE DOCUMENT
/* MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("VACANCIES");
    var myquery = { title: 'sales' };
    dbo.collection("vacancies").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    });
}); */
// UPDATE DOCUMENT
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("VACANCIES");
    var myquery = { title: "sales" };
    var newvalues = { $set: { title: "engineer", description: "construct and design" } };
    dbo.collection("vacanies").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});