const mongoose = require('mongoose');

/**
 * Defines the schema for the Record table in the DB.
 */
const recordSchema = new mongoose.Schema({
	patientID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Patient',
	},
	doctorID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Doctor',
	},
	bmi: { type: Number, required: true },
	brixiaScore: { type: Number, required: true },
	imageURL: { type: String, required: false },
	note: { type: String, required: false },
	keyFinding: { type: String, required: false },
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Record', recordSchema);
