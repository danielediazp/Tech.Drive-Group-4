const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient-controller');
const validConnection = require('../middleware/valid-connection');

// Create a new patient
router.post('/', validConnection, patientController.createPatient);

// Get a specific patient by ID
router.get('/:id', validConnection, patientController.getPatientById);

// Get all patients
router.get('/', validConnection, patientController.getPatients);

// Update patient by ID
router.put('/:id', validConnection, patientController.updatePatientById);

// Delete patient by ID
router.delete('/:id', validConnection, patientController.deletePatientById);

module.exports = router;