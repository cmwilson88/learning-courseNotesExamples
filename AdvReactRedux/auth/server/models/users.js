const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const userSchema = new Schema({
    email: {
        type: String,
        unique: true, // case sensitive
        lowercase: true // force email to be lowercase
    },
    password: String
})

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model so other files can use
module.exports = ModelClass