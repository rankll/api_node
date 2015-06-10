var ThingsHandler = require('./content');
var EmailController = require('../controller/emailController');

module.exports = exports = function(app, db) {
    
    var thingsHandler = new ThingsHandler(db);
    var emailController = new EmailController();
    
    app.get('/', thingsHandler.handleGetThings);
    app.post('/', thingsHandler.handleInsertThing);
    app.put('/', thingsHandler.handleUpdateThing);
    app.delete('/', thingsHandler.handleRemoveThing);	
    
    app.get('/email', emailController.getEmail);	    
};
