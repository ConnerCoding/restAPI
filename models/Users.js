const mongoose = require('mongoose');

// Create table/scheme in database
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


// Can now access this table from other files
module.exports = mongoose.model('Users', UserSchema);