const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student = new Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    year: {
        type: Number
    },
    major: {
        type: Number
    }
}, {
    collation: 'studens'
})

module.exports = mongoose.model('Student', Student);