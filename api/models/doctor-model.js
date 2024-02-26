const mongoose = require('mongoose');

// Define the structure of the Doctor model schema
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    pronouns: {
        type: String
    },
    hospital: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Doctor', doctorSchema);
