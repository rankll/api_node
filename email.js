var notifier = require('mail-notifier');
var config = require('./config.json');
var nodemailer = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');

var transporter = nodemailer.createTransport(sesTransport({
        //accessKeyId: "chave de acesso",
        //secretAccessKey: "chave de cesso",
        rateLimit: 5 // do not send more than 5 messages in a second
    }));

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
          var email = {"body": mail.text};
          callback(email);          
       }).start();
   
  };  
  
  this.stop = function(){
      notifier(imap).stop();      
  };
  
  this.sendEmail = function(){        
    transporter.sendMail({
            from: 'andremirannda@gmail.com',
            to: 'andremirannda@gmail.com',
            subject: 'servidor',
            text: 'Olá, o servidor está rodando!!.'
        }, function(error,info){
            if(error) return console.log(error);
                    
        	console.log('Message sent: ' + info.response);
        });
   };	
}

module.exports.EmailService = EmailService;