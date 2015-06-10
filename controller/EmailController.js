var EmailService = require('../email').EmailService;

function EmailController() {
	
	var email = new EmailService();
	
	this.getEmail = function(req, res, next){
		
		email.start(function(err, email){						
			res.json(email);
		});
		
	};	
}

module.exports = EmailController;