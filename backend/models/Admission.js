const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  dob: { type: String, required: true },
  city: { type: String, required: true },
  course: { type: String, required: true },
  paymentMode: { type: String, required: true },
  documents: [{
    type: { type: String, required: true },
    file: { type: String, required: true }, // Path to the uploaded file
  }],
  submissionDate: { type: Date, default: Date.now },
});

const Admission = mongoose.model('Admission', admissionSchema);

module.exports = Admission;
