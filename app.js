var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var routes = require('./routes'); // Routes for our application
var cons = require('consolidate'); // Templating library adapter for Express
var bodyParser = require('body-parser');

var app = express();

MongoClient.connect('mongodb://localhost:27017/rankll', function(err, db) {
    "use strict";
    if(err) throw err;                

    // Application routes
    routes(app, db);        
    // parse application/json
    app.use(bodyParser.json());
    //Instanciando o servidor    
    app.listen(8080);
    
    console.log('Express server listening on port 8080');
});

