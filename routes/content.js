var ThingsDAO = require('../things').ThingsDAO
var ObjectID = require('mongodb').ObjectID

/* The ContentHandler must be constructed with a connected db  */
function ThingsHandler (db) {
    "use strict";

    var things = new ThingsDAO(db);

    this.handleGetThings = function(req, res, next) {
        
        things.getAll(function(err, results) {
            "use strict";
            if (err) return next(err);
            res.json(results);
        });                
    };
    
    this.handleInsertThing = function(req, res, next) {
        "use strict";

        var name = req.body.name;
        var description = req.body.description;                     

        things.insert(name, description, function(err) {
            "use strict";

            if (err) return next(err);
            res.send("Registro inserido com sucesso");
        });
    };
    
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
