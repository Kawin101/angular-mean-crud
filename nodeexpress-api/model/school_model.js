const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schoolSchema = new Schema({
    school_name: {
        type: String 
    },
    description: {
        type: String
    },
    count: {
        type: Number
    },
    year: {
        type: Number
    },

}, {
    collection: 'schools'
});

module.exports = mongoose.model('SchoolSchema', schoolSchema)