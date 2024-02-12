const express = require('express');
const router = express.Router();

// Define a route handler for the root path
router.get('/', function (req, res, next) {
    // Send a message indicating that the API is working properly
    res.send('API is operational!');
});

// Import the doctor router module
const doctorRouter = require('./doctor');

// Mount the doctor router at the /doctors path
router.use('/doctors', doctorRouter);

// Export the router to make it available for use in other modules
module.exports = router;
