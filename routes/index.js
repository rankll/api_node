var ThingsHandler = require('./content');
var EmailController = require('../controller/EmailController');

module.exports = exports = function(app, db) {
    
    var thingsHandler = new ThingsHandler(db);
    var emailController = new EmailController();
       
    app.get('/things/:id?', thingsHandler.handleGetThings);    
    app.post('/things', thingsHandler.handleInsertThing);
    app.put('/things', thingsHandler.handleUpdateThing);
    //app.delete('/things', thingshandler.handleremovething);	
    app.post('/things/del', thingsHandler.handleRemoveThing);	
    
    app.get('/email/emails', emailController.getEmail);	    
    app.get('/email/sendemailcron', emailController.sendEmailCron);
    
//    app.post('/login',
//          passport.authenticate('local', { successRedirect: '/',
//                                           failureRedirect: '/login',
//                                           failureFlash: true })
//        );
};
