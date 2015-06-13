var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var routes = require('./routes'); // Routes for our application
var cons = require('consolidate'); // Templating library adapter for Express
var bodyParser = require('body-parser');
var request = require('request');
var cache = require('memory-cache');
var StrategyGoogle = require('passport-google-openidconnect').Strategy;
var passport = require('passport');

var app = express();

MongoClient.connect('mongodb://localhost:27017/rankll', function(err, db) {
    "use strict";
    if(err) throw err;                
    
    
  passport.use(new LocalStrategy(
    function(username, password, done) {
      if (username = "teste") return done(null,"usuario");
      return done(null, false, {message: "error"});
    })
   );

            
    // parse application/json
    app.use(bodyParser.json());    
    app.use(passport.initialize());
    // Application routes
    routes(app, db);                  
    app.listen(8080);                  	
    
    console.log('Express server listening on port 8080');
});

