//console.developers.google.com -> register our app to utilize google oauth
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // The Model Class

passport.serializeUser((user, done) => { // Take the user model & generate a unique id (to set up a cookie)
    done(null, user.id);                 // Use our (mongo) oid not profile.
});

passport.deserializeUser((id, done) => { // Search our collection for this user. Turn user id into user model instance
     User.findById(id)
    .then(user => done(null, user));          
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback', // GoogleStrategy assigns the domain, deploying to prod may cause problems. Declare an absolute path instead of relative to fix
    proxy: true                           // If we deploy behind a proxy trust it
}, 
async (accessToken, refreshToken, profile, done) => {    
    //Use the Model Class to search if a User has signed up before.
    const existingUser = await User.findOne({ googleId: profile.id })  
        if (existingUser) {
            return done(null, existingUser); 
        }
        
    const user = await new User({ googleId: profile.id }).save() // creates a record (model instance)
    done(null, user);   
           
}));
