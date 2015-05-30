var ThingsDAO = require('../things').ThingsDAO
/* The ContentHandler must be constructed with a connected db */
function ContentHandler (db) {
    "use strict";

    var things = new ThingsDAO(db);

    this.displayMainPage = function(req, res, next) {
        
        things.getThings(function(err, results) {
            "use strict";
            if (err) return next(err);
            res.json(results);

        });                
    };
    
    this.handleInsertThing = function(req, res, next) {
        "use strict";

        var name = req.body.name;
        var description = req.body.description;                     

        things.insertThing(name, description, function(err, permalink) {
            "use strict";

            if (err) return next(err);
            res.send("Registro inserido com sucesso");
//            return res.redirect("/post/" + permalink)
        });
    };               
}

module.exports = ContentHandler;
