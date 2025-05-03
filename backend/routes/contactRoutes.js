const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact"); // Import Contact model

// POST /api/contact - Save message
router.post("/", async (req, res) => {
  const { fullName, email, message } = req.body;

  if (!fullName || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Create a new contact message
    const newMessage = new Contact({ fullName, email, message });
    await newMessage.save(); // Save to MongoDB

    return res.status(201).json({ message: "Contact form submitted successfully!" });
  } catch (err) {
    console.error("Error saving message:", err);
    return res.status(500).json({ error: "Failed to submit contact form." });
  }
});

module.exports = router;
