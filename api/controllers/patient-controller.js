const Patient = require('../models/patientModel');


// GET all patients in the database
exports.getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    }   catch (err) {
        console.log(err);
        res.status(500).json({message: 'Error retriving patients'});
    }
};

// GET a specific patient by ID
exports.getPatientById = async (req, res) => {
    try {
      const patient = await Patient.findById(req.params.id);
      if (!patient) {
        res.status(404).json({ message: 'Patient not found' });
      } else {
        res.json(patient);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error retrieving patient' });
    }
};

// CREATE a new patient
exports.createPatient = async (req, res) => {
    try {
      // Validate required fields
      const requiredFields = ['name', 'lname', 'birth_date'];
      for (const field of requiredFields) {
        if (!req.body[field]) {
          return res.status(400).json({ message: `Missing required field: ${field}` });
        }
      }
  
      // Create the patient
      const patient = new Patient(req.body);
      await patient.save();
      res.status(201).json(patient);
    } catch (err) {
      console.error(err);
      if (err.name === 'ValidationError') {
        // Handle validation errors specifically
        res.status(400).json({ message: err.message });
      } else {
        res.status(500).json({ message: 'Error creating patient' });
      }
    }
};

// UPDATE a patient by ID
exports.updatePatientById = async (req, res) => {
    try {
        // Validate required fields
        const requiredFields = ['name', 'lname', 'birth_date'];
        for (const field of requiredFields) {
            if (!req.body[field] || !req.body[field].trim()) { // Check for missing or empty values
                return res.status(400).json({ message: `Invalid value for required field: ${field}` });
            }
        }
    
        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPatient) {
          res.status(404).json({ message: 'Patient not found' });
        } else {
          res.json(updatedPatient);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating patient' });
    }
};

//DELETE a patient by ID
exports.deletePatientById = async (req, res) => {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
        if (!deletedPatient) {
        res.status(404).json({ message: 'Patient not found' });
        } else {
        res.status(204).json(); // No content
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting patient' });
    }
};