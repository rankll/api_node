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
}

module.exports = ContentHandler;
