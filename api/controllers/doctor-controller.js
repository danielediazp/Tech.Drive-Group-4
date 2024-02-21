const Doctor = require('../models/doctor-model');

// Create a new doctor entry in the database
createDoctor = async (req, res) => {
    try {
        const requiredFields = ['name', 'lname', 'hospital'];
        for (const field of requiredFields) {
            if (!req.body[field]) {
                return res.status(400).json({ message: `Missing required field: ${field}` });
            }
        }
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.status(201).json(doctor);
    } catch (err) {
        console.error(err);
        if (err.name === 'ValidationError') {
            res.status(400).json({ message: err.message });
        } else {
            res.status(500).json({ message: 'Error creating doctor' });
        }
    }
};

// Retrieve all doctors from the database
getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error retrieving doctors' });
    }
};

// Retrieve a specific doctor by their ID
getDoctorId = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) {
            res.status(404).json({ message: 'Doctor not found' });
        } else {
            res.json(doctor);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving doctor' });
    }
};


// Update details of a specific doctor by their ID
updateDoctorId = async (req, res) => {
    try {
        const requiredFields = ['name', 'lname', 'hospital'];
        for (const field of requiredFields) {
            if (!req.body[field] || !req.body[field].trim()) {
                return res.status(400).json({ message: `Invalid value for required field: ${field}` });
            }
        }
        const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDoctor) {
            res.status(404).json({ message: 'Doctor not found' });
        } else {
            res.json(updatedDoctor);
        }
    } catch (err) {
        console.error(err); 
        res.status(500).json({ message: 'Error updating doctor' });
    }
};

// Delete a doctor entry from the database by their ID
deleteDoctorId = async (req, res) => {
    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
        if (!deletedDoctor) {
            res.status(404).json({ message: 'Doctor not found' });
        } else {
            res.status(204).json();
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting doctor' });
    }
};

module.exports = {
    createDoctor,
    getDoctors,
    getDoctorId,
    updateDoctorId,
    deleteDoctorId,
};