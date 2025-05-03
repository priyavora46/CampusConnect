// Signup.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    contact: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      setMessage(res.data.message);

      // Debugging logs - KEEP THESE FOR TROUBLESHOOTING
      console.log("Signup API Response:", res.data);
      if (res.data && res.data.user && res.data.user.fullName) {
        localStorage.setItem("userName", res.data.user.fullName);
        console.log("Full Name stored in localStorage (signup):", res.data.user.fullName);
      } else {
        console.error("Full Name not found in signup API response:", res.data);
        localStorage.setItem("userName", "User"); // Default value if not found
      }

      setFormData({ fullName: "", email: "", password: "", contact: "" });
      setTimeout(() => navigate("/login"), 1000); // redirect to login
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="form-control mb-3"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-3"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          className="form-control mb-3"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary w-100">Signup</button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
}

export default Signup;