const User = require('../models/users');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    // sub stands for subject aka who this token is about
    // iat stands for issued at time
    return jwt.encode(
        { 
            sub: user.id, 
            iat: timestamp,
            exp: timestamp+6000
        }, config.secret);
}

exports.signin = function(req, res, next) {
    // User has already had their email and password auth'd
    // We just need to give them a token

    // passport (via done(null, user)) places user on req.user
    res.send({token: tokenForUser(req.user)})
}   

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password) {
        return res.status(422).send({ error: 'You must provide an email or a password' })
    }
    // See if user with given email exists
    User.findOne({ email: email }, function(err, existingUser) {
       if(err) return next(err);
       
       // If a user with email does exist, return an error
       if(existingUser) {
         return res.status(422).send({ error: 'Email is in use' })
       }
       
       // If a user with email does NOT exist, create and save user record
       const user = new User({
           email: email,
           password: password
       })

       user.save(err => {
           if(err) return next(err);
           
           // Respond to request indicating user was created
            res.json({ token: tokenForUser(user) });
        });
    })
}