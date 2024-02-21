const express = require('express');
const recordController = require('../controllers/records-controller');
const router = express.Router();

// Create a new record in the DB.
router.post('/', recordController.createRecords);

// Read all records from the DB.
router.get('/', recordController.getAllRecords);

// Read an specific record from the DB.
router.get('/:id', recordController.getRecordById);

// Update a specific record from the DB.
router.put('/:id', recordController.updateRecordById);

// Delete an specific record from the DB.
router.delete('/:id', recordController.deleteRecordById);

module.exports = router;