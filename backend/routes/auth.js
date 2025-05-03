const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Signup
router.post("/signup", async (req, res) => {
  const { fullName, email, password, contact } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already exists" });

    const newUser = new User({ fullName, email, password, contact });
    await newUser.save();
    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ message: "Error signing up" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Login successful", user: { _id: user._id, email: user.email, fullName: user.fullName } });
  } catch (err) {
    res.status(500).json({ message: "Login error" });
  }
});

module.exports = router;
