const Patient = require('../models/patient-model');


/**
 * Creates a new patient and saves it to the database.
 *
 * This asynchronous function extracts data from the request body to create a new patient
 * document in the database. It expects `name`, `lname`, `pronouns`, `birth_date`, `sex`,
 * 'street', 'city', 'state', and 'zipcode' fields within the request body. Upon successful creation, it returns
 * the created patient object with a 201 HTTP status code. In case of errors during the
 * patient creation process, it responds with a 401 status code and the error message.
 *
 * @param {Object} req - The request object, containing the body with patient data.
 * @param {Object} res - The response object used to send back the HTTP response.
 * @async
 * @returns {Promise<void>} No explicit return value but sends a JSON response.
 *
 * @example
 * POST /patients
 * Request body:
 * {
 *   "name": "John",
 *   "lname": "Doe",
 *   "pronouns": "He/Him",
 *   "birth_date": "1970-01-01",
 *   "sex": "Male",
 *   "street": "123 Main St"
 *   "city": "New York City",
 *   "state": "NY",
 *   "zipcode": "10001"
 * }
 */
createPatient = async (req, res) => {
    try {
      const newPatient = new Patient(req.body);
      await newPatient.save();
      res.status(201).json(newPatient);
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};

/**
 * Find a specific patient by their ID in the database.
 *
 * This asynchronous function retrieves a specific patient by their unique ID that must be
 * provided as a parameter. If the patient is found, the data is returned as JSON. If not found,
 * the response returns a 404 HTTP status code and a "Patient not found" message. In case of any errors
 * the res returns a 500 HTTP status code with the error message.
 *
 * @param {Object} req - The request object, containing the parameters with ID.
 * @param {Object} res - The response object used to send back the HTTP response.
 * @async
 * @returns {Promise<void>} No explicit return value but sends a JSON response.
 *
 * @example
 * GET /patients/:id
 */
getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
  } catch (err) {
		res.status(500).json({ message: err.message });
	}
};


/**
 * Find all patients in the database.
 *
 * This asynchronous function retrieves all patient documents in the database. Returns
 * all the patients in a JSON response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object used to send back the HTTP response.
 * @async
 * @returns {Promise<void>} No explicit return value but sends a JSON response.
 *
 * @example
 * GET /patients
 */
getPatients = async (req, res) => {
  try {
      const patients = await Patient.find();
      res.json(patients);
  }   catch (err) {
      console.log(err);
      res.status(500).json({message: err.message});
  }
};

/**
 * Updates a specific patient by their ID in the database.
 *
 * This asynchronous function updates an existing patient by their unique ID that must be
 * provided as a parameter. It expects updated data within the request body. If the patient is
 * found and updated successfully, the updated patient data is returned as JSON. If not found,
 * the response returns a 404 HTTP status code and a "Patient not found" message.
 *
 * @param {Object} req - The request object, containing the parameters with ID and updated data in body.
 * @param {Object} res - The response object used to send back the HTTP response.
 * @async
 * @returns {Promise<void>} No explicit return value but sends a JSON response.
 *
 * @example
 * PUT /patients/:id
 * Request body:
 * {
 *   "name": "John Doe (Updated)",
 *   "address": "456 Main St"
 * }
 */
updatePatientById = async (req, res) => {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedPatient) {
          res.status(404).json({ message: 'Patient not found' });
        } else {
          res.json(updatedPatient);
        }
    } catch (err) {
        console.error(err);
        res.status(400).json({message: err.message});
    }
};

/**
 * Deletes a specific patient by its ID from the database.
 *
 * This asynchronous function retrieves deletes an specific patient by its unique ID
 * that must be provided as parameter. If the patient is found, a 204 HTTP status code is send
 * back as response. If not found, the response returns a 404 HTTP status code and a "patient not found" message.
 * In case of any errors, the res returns a 500 HTTP status code with the error message.
 *
 * @param {Object} req - The request object, containing the parameters with ID.
 * @param {Object} res - The response object used to send back the HTTP response.
 * @async
 * @returns {Promise<void>} No explicit return value but sends a JSON response.
 * */
deletePatientById = async (req, res) => {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
        if (!deletedPatient) {
          return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(204).json(); // No content
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};

module.exports = {
    createPatient,
    getPatientById,
    getPatients,
    updatePatientById,
    deletePatientById,
}