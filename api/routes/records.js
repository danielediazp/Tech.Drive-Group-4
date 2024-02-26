const express = require('express');
const recordController = require('../controllers/records-controller');
const router = express.Router();
const validConnection = require('../middleware/valid-connection');

// Create a new record in the DB.
router.post('/', validConnection, recordController.createRecords);

// Read all records from the DB.
router.get('/', validConnection, recordController.getAllRecords);

// Read an specific record from the DB.
router.get('/:id', validConnection, recordController.getRecordById);

// Update a specific record from the DB.
router.put('/:id', validConnection, recordController.updateRecordById);

// Delete an specific record from the DB.
router.delete('/:id', validConnection, recordController.deleteRecordById);

module.exports = router;