var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var routes = require('./routes'); // Routes for our application
var cons = require('consolidate'); // Templating library adapter for Express
var bodyParser = require('body-parser');

var nodemailer = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');

var transporter = nodemailer.createTransport(sesTransport({
    accessKeyId: "AKIAJ7SYB25YO56ZDWVA",
    secretAccessKey: "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",
    rateLimit: 5 // do not send more than 5 messages in a second
}));

transporter.sendMail({
        from: 'andremirannda@gmail.com',
        to: 'andremirannda@gmail.com',
        subject: 'servidor',
        text: 'Olá, o servidor está rodando!!.'
    }, function(error,info){
        if(error) return console.log(error);
                
    	console.log('Message sent: ' + info.response);
    });

var app = express();

MongoClient.connect('mongodb://localhost:27017/rankll', function(err, db) {
    "use strict";
    if(err) throw err;                

    // Application routes
    routes(app, db);        
    // parse application/json
    app.use(bodyParser.json());
    //Instanciando o servidor  ehuhe  
    app.listen(8080);                  	
    
    console.log('Express server listening on port 8080');
});

