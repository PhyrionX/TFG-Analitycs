const router = require('express').Router();
const passport = require('passport');
const TwitterStrategy  = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
  consumerKey: 'pYGaMnp0f5HroAUdxNyZhhZLT',
  consumerSecret: 'LSjwvq2AJnec2OKLylIM0v5VS4ql4B4yDONnz3K0Er0VETqrax',
  callbackURL: "http://localhost:8000/twitter-auth/callback"
},
function(token, tokenSecret, profile, cb) {
  console.log('a');
  
  User.findOrCreate({ twitterId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));

//GET current route (required, only authenticated users have access)
router.get('/', passport.authenticate('twitter'));

router.get('/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

  module.exports = router;