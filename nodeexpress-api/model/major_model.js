const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let majorSchema = new Schema({
    major_name: {
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
    collection: 'majors'
});

module.exports = mongoose.model('MajorSchema', majorSchema)