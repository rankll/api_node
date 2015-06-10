var emailService = require('../email').emailService

function EmailController() {
	
	var email = new emailService();
	
	this.getEmail = function(req, res, next){
		
		email.start(function(email){						
			res.json(email);
		});
		
	};	
}

module.exports = EmailController