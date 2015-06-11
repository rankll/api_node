var EmailService = require('../email').EmailService;

function EmailController() {
	
	var email = new EmailService();
	
	this.getEmail = function(req, res, next){
		
		email.start(function(email){						
			res.send(email);
		});
		
	};	
}

module.exports = EmailController;