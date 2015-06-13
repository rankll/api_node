var ThingsDAO = require('../things').ThingsDAO
var ObjectID = require('mongodb').ObjectID

/* The ContentHandler must be constructed with a connected db  */
function ThingsHandler (db) {
    "use strict";

    var things = new ThingsDAO(db);

    this.handleGetThings = function(req, res, next) {
                     
        var client_id = req.params.id;        
        
        things.getAll(client_id, function(err, results) {
            "use strict";
            if (err) return next(err);
            res.json(results);
        });                
    };

    this.handleInsertThing = function(req, res, next) {
        "use strict";

        var name = req.body.name;
        var description = req.body.description;

        console.log("ID: "+req.body.id);

        if (req.body.id != 'null') {

                console.log("ID NAO é NULLOOOOOO");

                var id = ObjectID(req.body.id);
                console.log("updated");
                console.log("id: "+id);
                console.log("name: "+name);
                console.log("descr: "+description);

                things.update(id, name, description, function(err){
                    if (err) return next(err);
                    res.send("Registro atualizado com sucesso");
                });

        } else {

                console.log("ID é NULLOOOOOO");
                console.log("inserted");
                things.insert(name, description, function(err) {
                    "use strict";

                    if (err) return next(err);
                    res.send("Registro inserido com sucesso");
                });

        }
    };

	/*
    this.handleInsertThing = function(req, res, next) {
        "use strict";

        var name = req.body.name;
        var description = req.body.description;
        var client = req.body.client_id;                     

        things.insert(name, description, client, function(err) {
            "use strict";

            if (err) return next(err);
            res.send("Registro inserido com sucesso");
        });
    };
	*/
    
    this.handleUpdateThing = function(req, res, next){
        "use strict";
        
        var id = ObjectID(req.body.id);        
        var name = req.body.name;
        var description = req.body.description;                
        
        things.update(id, name, description, function(err){
            if (err) return next(err);
            res.send("Registro atualizado com sucesso");      
        });
    };   
    
    this.handleRemoveThing = function(req, res, next){
        var id = ObjectID(req.body.id); 
        
        things.remove(id, function(err){
            if (err) return next(err);
            res.send("Registro removido com sucesso");
        });
    };            
}

module.exports = ThingsHandler;
