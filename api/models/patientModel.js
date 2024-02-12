const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema ({
    patientID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Patient',
	},
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
    address: {
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        zip_code: {
            type: String,
            match: /^\d{5}(?:-\d{4})?$/,
        },
    }, 
});

module.exports = mongoose.model('Patient', patientSchema);