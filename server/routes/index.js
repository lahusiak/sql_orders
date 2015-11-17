var express = require('express');
var router = express.Router();
var path = require('path');

var pg = require('pg');

var connectionString = 'postgres://localhost:5432/sql_orders';
//var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sql_orders';

router.get('/people', function(req,res){
    var results = [];
//console.log("Hi");
//    res.send("results", results);
    //SQL Query > SELECT data from table
    pg.connect(connectionString, function (err, client, done) {
        console.log("hello");
        var query = client.query("SELECT * FROM users");

        // Stream results back one row at a time, push into results array
        query.on('row', function (row) {
            results.push(row);
        });
        //
        //// After all data is returned, close connection and return results
        query.on('end', function () {
            client.end();
            return res.json(results);
        });

        // Handle Errors
        if (err) {
            console.log(err);
        }
    });
});

router.get("/*", function (req, res){
    var file = req.params[0] || "assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;