const mongoose = require('mongoose');

const EventRegistrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  eventId: String,
  registeredAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EventRegistration', EventRegistrationSchema);
