const express = require('express');
const router = express.Router();
const EventRegistration = require('../models/EventRegistration');

router.post('/event-register', async (req, res) => {
  try {
    const { name, email, phone, eventId } = req.body;

    const registration = new EventRegistration({ name, email, phone, eventId });
    await registration.save();

    res.status(200).json({ message: 'Registration successful!' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering for event', error });
  }
});

module.exports = router;
