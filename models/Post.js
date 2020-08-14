const mongoose = require('mongoose');

// Create table/scheme in database
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


// Can now access this table from other files
module.exports = mongoose.model('Posts', PostSchema);