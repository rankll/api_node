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
   
//   notifier(imap).start();
//   
//   notifier.on("mail", function(err,mail){ 
//     if (err) return callback(err, null);
//         
//     callback(err,mail);         
//   });
   
     notifier(imap).on('mail',function(err,mail){
        if (err) return callback(err, null);
        console.log(mail.text);
  		  //callback(err, mail.text);
  	}).start();
    
  };  	
}

module.exports.EmailService = EmailService;