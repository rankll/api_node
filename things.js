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

    this.insertThing = function (name, description, callback) {
        "use strict";
        console.log("inserting thing" + name + description);

        // fix up the permalink to not include whitespace        

        // Build a new post
        var post = {"name": name,
                "description": description}

        things.insert(post, function (err, result) {
            "use strict";

            if (err) return callback(err, null);

            console.log("Inserted new thing");
            callback(err);
        });
    };

    this.getThings = function(callback) {
        "use strict";

        things.find().toArray(function(err, items) {
            "use strict";

            if (err) return callback(err, null);

            console.log("Found " + items.length + " things");

            callback(err, items);
        });
    };    
}

module.exports.ThingsDAO = ThingsDAO;
