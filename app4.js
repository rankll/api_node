var StrategyGoogle = require('passport-google-openidconnect').Strategy;
var passport = require('passport');

passport.use(new StrategyGoogle({
    clientID: "301721251506-p1tsfanq9n0kkqcvsbr7tc79m9f50t97.apps.googleusercontent.com",
    clientSecret: "_oPAS5MDrbfzeiAh6chSa_wo",
    callbackURL: "localhost:8080/auth/google/callback",
    userInfoURL: "https://www.googleapis.com/plus/v1/people/me"
  },
  function(token, tokenSecret, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      if (err) console.log(err);
      console.log(user);
      return done(err, user);
    });
  }
));