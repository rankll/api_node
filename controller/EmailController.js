var EmailService = require('../email').EmailService;

var CronJob = require('cron').CronJob;


function EmailController() {
	
	var email = new EmailService();
	
	this.getEmail = function(req, res, next){
		
		email.start(function(email){
			console.log('entrou email');						
			res.send(email);
			email.stop();
		});
		
	};
	
	this.sendEmailCron = function(req, res, next){
		
		new CronJob('*/10 * * * * *', function() {
			email.sendEmail();			
		}, null, true, 'America/Los_Angeles');						
	};	
}

module.exports = EmailController;