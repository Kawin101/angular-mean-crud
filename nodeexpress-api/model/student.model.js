const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    year: {
        type: Number
    },
    major: {
        type: Number
    },

}, {
    collection: 'students'
});

module.exports = mongoose.model('StudentSchema', studentSchema)