const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    pronouns: {
        type: String,
    },
    birth_date: {
        type: Date,
        required: true,
    },
    sex: {
        type: String,
    },
    street: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    state: {
        type: String,
        require: true,
    },
    zipcode: {
        type: String,
        require: true,
    }
        
});

module.exports = mongoose.model('Patient', patientSchema);