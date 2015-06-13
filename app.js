var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var routes = require('./routes'); // Routes for our application
var cons = require('consolidate'); // Templating library adapter for Express
var bodyParser = require('body-parser');
var request = require('request');
var cache = require('memory-cache');

var app = express();

MongoClient.connect('mongodb://localhost:27017/rankll', function(err, db) {
    "use strict";
    if(err) throw err;                
            
    // parse application/json
    app.use(bodyParser.json());
    // Application routes
    routes(app, db);         
    
//    request('http://servicos.cptec.inpe.br/XML/cidade/235/previsao.xml', function (error, response, body) {
//      if (!error && response.statusCode == 200) {
//          cache.put('previsao', body, 100);
//          console.log(cache.get('previsao'));
//          
//          setTimeout(function() {
//              console.log('dados da previsao' + cache.get('previsao'));
//          }, 200);
//          
//          //console.log(body);  
//      }
//    });
//
//    request.post('http://tinyurl.com/create.php', {form: {url:'www.globo.com'}}, function(err, response, body){
//        console.log(response);
//    });
    
              
    //Instanciando o servidor  ehuhe  
    app.listen(8080);                  	
    
    console.log('Express server listening on port 8080');
});

