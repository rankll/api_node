/* The PostsDAO must be constructed with a connected database object */
function ThingsDAO(db) {
    "use strict";

    /* If this constructor is called without the "new" operator, "this" points
     * to the global object. Log a warning and call it correctly. */
    if (false === (this instanceof ThingsDAO)) {
        console.log('Warning: PostsDAO constructor called without "new" operator');
        return new ThingsDAO(db);
    }

    var things = db.collection("things");

    this.insert = function (name, description, client, callback) {
        "use strict";
        console.log("inserting thing" + name + description);  

        var thing = {"name": name, "description": description, "client_id": client};

        things.insert(thing, function (err, result) {
            "use strict";

            if (err) return callback(err);

            console.log("Inserted new thing");
            callback(err);
        });
    };

    this.getAll = function(client_id, callback) {
        "use strict a";        

        var where = {"client_id": parseInt(client_id)};
                
        things.find(where).toArray(function(err, items) {
            "use strict";            
            if (err) return callback(err, null);

            console.log("Found " + items.length + " things");

            callback(err, items);
        });
    };    
    
    this.update = function(id, name, description, callback){
        "use strict";
	
        things.update({"_id":id}, {$set:{name: name, description: description}}, function(err){
            if (err) return callback(err, null);    	    
            
            callback(err);
        });
    };
    
    this.remove = function(id, callback){
        "use strict";
        
        things.remove({'_id': id}, function(err){
            if (err) return callback(err, null)
            
            callback(err);
        });
    };
}

module.exports.ThingsDAO = ThingsDAO;
