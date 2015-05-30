var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var routes = require('./routes'); // Routes for our application
var cons = require('consolidate') // Templating library adapter for Express

var app = express();

MongoClient.connect('mongodb://localhost:27017/rankll', function(err, db) {
    "use strict";
    if(err) throw err;

    // Register our templating engine
    app.engine('html', cons.swig);
    app.set('view engine', 'html');    

    // Express middleware to populate 'req.cookies' so we can access cookies
//    app.use(express.cookieParser());

    // Express middleware to populate 'req.body' so we can access POST variables
//    app.use(express.bodyParser());

    // Application routes
    routes(app, db);

    app.listen(8080);
    console.log('Express server listening on port 8080');
});

//app.get('/', function(req, res){
//	res.send('Ola mundo 2!');
//});
//
//app.get('/things/:nome/:coisa/:local', function(req, res){
//	var things = ["Naruto", "Quintas", "IMD", "Pastelanche"];
//	var thingPass = req.params.nome;
//	var thingPass2 = req.params.coisa;
//	var thingPass3 = req.params.local;
//	console.log('Thing Passado: '+thingPass + ', ' + thingPass2 + ', ' + thingPass3);
//});
//
//var server = app.listen(8080);
