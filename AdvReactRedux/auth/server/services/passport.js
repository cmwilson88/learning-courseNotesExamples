const passport = require('passport');
const User = require('../models/users');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy
// This verifies username/password login information
const localOptions = {usernameField: 'email'}
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
    // Verify this username and password, call done with the user
    // if it is the correct username and password
    // otherwise, call done with false
    User.findOne({email: email}, function(err, user) {
        if (err) return done(err);
        if (!user) {
            return done(null, false);
        }

        // compare passwords - is 'password' equal to user.password
        user.comparePassword(password, function(err, isMatched) {
            if (err) return done(err);
            if (!isMatched) {
                return done(null, false);
            } else {
                return done(null, user);
            }
        })
    })
})

// Set up options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

// Create JWT strategy
// This verifies JWT 
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    
    
    User.findById(payload.sub, function(err, user) {
        if(err) return done(err, false);
        
        // See if the user ID in the payload exists in our database
        if(user) {
            // If it does, call 'done' with that user
            done(null, user);
        } else {
            // Otherwise call done without a user object
            done(null, false);
        }
    })
})

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);