const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Get one user by ID
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// Update user by ID
router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({ message: "User updated", user });
});

// Delete user by ID
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

module.exports = router;
