var notifier = require('mail-notifier');
var config = require('./config.json');

var imap = {
  user: config.user,
  password: config.password,
  host: config.host,
  port: config.port, // imap port
  tls: config.tls,// use secure connection
  tlsOptions: config.tlsOption
};

function EmailService(){	   
  
  //notifier(imap).on('mail',function(mail){console.log(mail);}).start( );
  
  this.start = function(callback){     
   
   notifier(imap).on('mail',function(mail){     
      var email = {"texto": mail.text};
      callback(email);
   }).start();
   
  };  	
}

module.exports.EmailService = EmailService;