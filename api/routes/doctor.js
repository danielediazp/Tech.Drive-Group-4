const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor-controller');

// Define routes to handle doctor-related operations

// Route to fetch all doctors from the database
router.get('/', doctorController.getDoctors);

// Route to fetch a specific doctor by ID
router.get('/:id', doctorController.getDoctorId);

// Route to create a new doctor entry in the database
router.post('/', doctorController.createDoctor);

// Route to update details of a specific doctor by their ID
router.put('/:id', doctorController.updateDoctorId);

// Route to delete a doctor entry from the database by their ID
router.delete('/:id', doctorController.deleteDoctorId);

// Export the router to make it available for use in other modules
module.exports = router;
