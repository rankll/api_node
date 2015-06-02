var ThingsHandler = require('./content');

module.exports = exports = function(app, db) {
    
    var thingsHandler = new ThingsHandler(db);
    
    app.get('/', thingsHandler.handleGetThings);
    app.post('/', thingsHandler.handleInsertThing);
    app.put('/', thingsHandler.handleUpdateThing);		    
};
