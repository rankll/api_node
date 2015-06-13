var StrategyGoogle = require('passport-google-openidconnect').Strategy;
var passport = require('passport');

passport.use(new StrategyGoogle({
    clientID: "301721251506-p1tsfanq9n0kkqcvsbr7tc79m9f50t97.apps.googleusercontent.com",
    clientSecret: "_oPAS5MDrbfzeiAh6chSa_wo",
    callbackURL: "http://127.0.0.1:3000/auth/google/callback",
    userInfoURL: "https://www.googleapis.com/plus/v1/people/me"
  },
  function(iss, sub, profile, accessToken, refreshToken, done) {
    		console.log(accessToken);    
  }
));