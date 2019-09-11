const router = require('express').Router();
const passport = require('passport');
const FacebookStrategy  = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
  clientID: '2395237920716795',
  clientSecret: '6efcfef22b8f21092356f2fb3a1f17e4',
  callbackURL: "http://localhost:8000/login/facebook/callback"
},
function(token, tokenSecret, profile, cb) {
  console.log('a');
  
  User.findOrCreate({ twitterId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));

//GET current route (required, only authenticated users have access)
router.get('/', passport.authenticate('facebook'));

router.get('/callback', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

  module.exports = router;