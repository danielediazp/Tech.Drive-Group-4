const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient-controller');

// Create a new patient
router.post('/', patientController.createPatient);

// Get a specific patient by ID
router.get('/:id', patientController.getPatientById);

// Get all patients
router.get('/', patientController.getPatients);

// Update patient by ID
router.put('/:id', patientController.updatePatientById);

// Delete patient by ID
router.delete('/:id', patientController.deletePatientById);

module.exports = router;