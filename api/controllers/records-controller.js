const Record = require('../models/records-model');

/**
 * Creates a new medical record and saves it to the database.
 *
 * This asynchronous function extracts data from the request body to create a new record
 * in the database. It expects `patientID`, `doctorID`, `bmi`, `brixiaScore`, `imageURL`,
 * `note`, and `keyFinding` fields within the request body. Upon successful creation, it
 * returns the created record with a 201 HTTP status code. In case of errors during the
 * record creation process, it responds with a 401 status code and the error message.
 *
 * @param {Object} req - The request object, containing the body with record data.
 * @param {Object} res - The response object used to send back the HTTP response.
 * @async
 * @returns {Promise<void>} No explicit return value but sends a JSON response.
 *
 * @example
 * //TODO:
 */
createRecords = async (req, res) => {
	try {
		const newRecord = new Record({
			patientID: req.body.patientID,
			doctorID: req.body.doctorID,
			bmi: req.body.bmi,
			brixiaScore: req.body.brixiaScore,
			imageURL: req.body.imageURL,
			note: req.body.note,
			keyFinding: req.body.keyFinding,
		});

		const savedRecord = await newRecord.save();
		res.status(201).json(newRecord);
	} catch (err) {
		res.status(401).json({ message: err.message });
	}
};

/**
 * Find a specific medical record by its ID in the database.
 *
 * This asynchronous function retrieves an specific medical record by its unique ID that must be
 * provided as a parameter. If the record is found, the data is returned as JSON. If not found,
 * the response returns a 404 HTTP status code and a "Record not found message". In case of any errors
 * the res returns a 500 HTTP status code with the error message.
 *
 * @param {Object} req - The request object, containing the parameters with ID.
 * @param {Object} res - The response object used to send back the HTTP response.
 * @async
 * @returns {Promise<void>} No explicit return value but sends a JSON response.
 *
 * @example
 * //TODO:
 */
getRecordById = async (req, res) => {
	try {
		const record = await Record.findById(req.params.id)
			.populate('patientID')
			.populate('doctorID');
		if (!record) return res.status(404).json({ message: 'Record not found' });
		res.json(record);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

/**
 * Find all the records in the database.
 *
 * This asynchronous function retrieves all the recorded records in the database. Returns
 * all the records in a JSON response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object used to send back the HTTP response.
 * @async
 * @returns {Promise<void>} No explicit return value but sends a JSON response.
 *
 * @example
 * //TODO:
 */
getAllRecords = async (req, res) => {
	try {
		const records = await Record.find();
		res.json(records);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

/**
 * Find and updates a specific medical record by its ID in the database.
 *
 * This asynchronous function updates an specific medical record by its unique ID that must be
 * provided as a parameter. If the record is found, the data is returned as JSON. If not found,
 * the response returns a 404 HTTP status code and a "Record not found message". In case of any errors
 * the res returns a 400 HTTP status code with the error message.
 *
 * @param {Object} req - The request object, containing the parameters with ID.
 * @param {Object} res - The response object used to send back the HTTP response.
 * @async
 * @returns {Promise<void>} No explicit return value but sends a JSON response.
 *
 * @example
 * //TODO:
 */
updateRecordById = async (req, res) => {
	try {
		const updatedRecord = await Record.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!updatedRecord)
			return res.status(404).json({ message: 'Record not found' });
		res.json(updatedRecord);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

/**
 * Deletes a specific medical record by its ID from the database.
 *
 * This asynchronous function retrieves deletes an specific medical record by its unique ID
 * that must be provided as parameter. If the record is found, a 204 HTTP status code is send
 * back as response. If not found, the response returns a 404 HTTP status code and a "Record not found message".
 * In case of any errors, the res returns a 500 HTTP status code with the error message.
 *
 * @param {Object} req - The request object, containing the parameters with ID.
 * @param {Object} res - The response object used to send back the HTTP response.
 * @async
 * @returns {Promise<void>} No explicit return value but sends a JSON response.
 *
 * @example
 * //TODO:
 */
deleteRecordById = async (req, res) => {
	try {
		const record = await Record.findByIdAndDelete(req.params.id);
		if (!record) return res.status(404).json({ message: 'Record not found' });
		res.status(204).send();
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = {
	createRecords,
	getRecordById,
	getAllRecords,
	updateRecordById,
	deleteRecordById,
};
