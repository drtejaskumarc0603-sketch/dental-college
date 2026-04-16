const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.create(req.body);
        res.status(201).json({
            message: "Appointment booked",
            id: appointment._id
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAppointmentStatus = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) return res.status(404).json({ message: "Not found" });

        res.json({
            status: appointment.status,
            data: appointment
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};