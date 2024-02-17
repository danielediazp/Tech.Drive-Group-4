const express = require('express');
const recordController = require('../controllers/records-controller');
const router = express.Router();

router.post('/', recordController.createRecords);
router.get('/', recordController.getAllRecords);

module.exports = router;