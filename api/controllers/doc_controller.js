const Doctor = require('../model/doc_model');

// Retrieve all doctors from the database
exports.getDoctors = async (req, res) => {
    try {
        // Retrieve all doctors from the database
        const doctors = await Doctor.find();
        // Send the retrieved doctors as a JSON response
        res.json(doctors);
    } catch (err) {
        console.log(err);
        // If an error occurs during retrieval, send an error response
        res.status(500).json({ message: 'Error retrieving doctors' });
    }
};

// Retrieve a specific doctor by their ID
exports.getDoctorId = async (req, res) => {
    try {
        // Find the doctor in the database by ID
        const doctor = await Doctor.findById(req.params.id);
        // If the doctor is not found, 404 error
        if (!doctor) {
            res.status(404).json({ message: 'Doctor not found' });
        } else {
            // If the doctor is found, send the doctor details
            res.json(doctor);
        }
    } catch (err) {
        console.error(err);
        // If an error occurs during retrieval, send an error
        res.status(500).json({ message: 'Error retrieving doctor' });
    }
};

// Create a new doctor entry in the database
exports.createDoctor = async (req, res) => {
    try {
        // Validate required fields
        const requiredFields = ['name', 'lname', 'hospital'];
        for (const field of requiredFields) {
            if (!req.body[field]) {
                // If any required field is missing, 400 error
                return res.status(400).json({ message: `Missing required field: ${field}` });
            }
        }
        // Create a new doctor instance with the provided data
        const doctor = new Doctor(req.body);
        // Save the new doctor to the database
        await doctor.save();
        // Send the newly created doctor details as a JSON response
        res.status(201).json(doctor);
    } catch (err) {
        console.error(err);
        if (err.name === 'ValidationError') {
            // If the provided data fails validation, 400 error response with validation error details
            res.status(400).json({ message: err.message });
        } else {
            // If an unexpected error occurs, 500 error
            res.status(500).json({ message: 'Error creating doctor' });
        }
    }
};

// Update details of a specific doctor by their ID
exports.updateDoctorId = async (req, res) => {
    try {
        // Validate required fields
        const requiredFields = ['name', 'lname', 'hospital'];
        for (const field of requiredFields) {
            if (!req.body[field] || !req.body[field].trim()) { // Check for missing or empty values
                // If any required field is missing or empty, 400 error 
                return res.status(400).json({ message: `Invalid value for required field: ${field}` });
            }
        }

        // Find the doctor by ID and update its details with the provided data
        const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // If the doctor is not found, 404 error 
        if (!updatedDoctor) {
            res.status(404).json({ message: 'Doctor not found' });
        } else {
            // If the doctor is successfully updated, send the updated doctor details
            res.json(updatedDoctor);
        }
    } catch (err) {
        console.error(err);
        // If an unexpected error occurs, 500 error 
        res.status(500).json({ message: 'Error updating doctor' });
    }
};

// Delete a doctor entry from the database by their ID
exports.deleteDoctorId = async (req, res) => {
    try {
        // Find the doctor by ID and delete it from the database
        const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
        // If the doctor is not found, 404 error
        if (!deletedDoctor) {
            res.status(404).json({ message: 'Doctor not found' });
        } else {
            // If the doctor is successfully deleted, 204 (no content) response
            res.status(204).json(); // No content
        }
    } catch (err) {
        console.error(err);
        // If an unexpected error occurs, 500 error
        res.status(500).json({ message: 'Error deleting doctor' });
    }
};
