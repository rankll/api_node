var notifier = require('mail-notifier');
var config = require('./config.json');

var imap = {
  user: config.user,
  password: config.password,
  host: config.host,
  port: config.host, // imap port
  tls: config.tls,// use secure connection
  tlsOptions: config.tlsOption
};

//function emailService(){	   
  
  notifier(imap).on('mail',function(mail){console.log(mail);}).start();
  
//  this.start = function(callback){     
//   
//   notifier(imap).start();
//   
//   notifier.on("mail", function(mail){     
//     callback(mail);         
//   });
//   
//     notifier(imap).on('mail',function(mail){
//  		callback(mail)
//  	}).start();
    
//  };  	
//}

//module.exports.emailService = emailService;