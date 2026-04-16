const express = require('express');
const router = express.Router();

const {
    createAppointment,
    getAppointmentStatus
} = require('../controllers/appointmentController');

router.post('/book', createAppointment);
router.get('/status/:id', getAppointmentStatus);

module.exports = router;