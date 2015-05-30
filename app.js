var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var app = express();

app.get('/', function(req, res){
	res.send('Ola mundo 2!');
});

app.get('/things/:nome/:coisa/:local', function(req, res){
	var things = ["Naruto", "Quintas", "IMD", "Pastelanche"];
	var thingPass = req.params.nome;
	var thingPass2 = req.params.coisa;
	var thingPass3 = req.params.local;
	console.log('Thing Passado: '+thingPass + ', ' + thingPass2 + ', ' + thingPass3);
});

var server = app.listen(8080);
