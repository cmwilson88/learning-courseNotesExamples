const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
    email: {
        type: String,
        unique: true, // case sensitive
        lowercase: true // force email to be lowercase
    },
    password: String
})

// On Save Hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', function(next) {
    // Context of function is the User model.
    // Get access to user model
    const user = this;

    // Generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if(err) return next(err);

        // Hash (encrypt) our password using the salt
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if(err) return next(err);

            // overwrite plain text password with encrypted password
            user.password = hash;
            // Go ahead and save the model
            next();
        })
    })
})

userSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatched) {
        if(err) return callback(err)

        callback(null, isMatched)
    })
}

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model so other files can use
module.exports = ModelClass