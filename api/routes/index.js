var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('API is working properly!');
});

// Import the patient router
const patientRouter = require('./routes/patient');

// Mount the patient router at the '/patients' path
application.use('/patients', patientRouter)

module.exports = router;
