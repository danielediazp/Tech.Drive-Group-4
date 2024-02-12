const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient-controller');

// Get all patients
router.get('/', patientController.getPatients);

// Get a specific patient by ID
router.get('/:id', patientController.getPatientById);

// Create a new patient
router.post('/', patientController.createPatient);

// Update patient by ID
router.put('/:id', patientController.updatePatientById);

// Delete patient by ID
router.delete('/:id', patientController.deletePatientById);

module.exports = router;