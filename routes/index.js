var ContentHandler = require('./content');

module.exports = exports = function(app, db) {
    
    var contentHandler = new ContentHandler(db);

    // The main page of the blog
    app.get('/', contentHandler.displayMainPage);
    app.post('/', contentHandler.handleInsertThing);		    
};
