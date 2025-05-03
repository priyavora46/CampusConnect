// Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);

      localStorage.setItem("isAuthenticated", "true");

      // Debugging logs - KEEP THESE FOR TROUBLESHOOTING
      console.log("Login API Response:", res.data);
      if (res.data && res.data.user && res.data.user.name) {
        localStorage.setItem("userName", res.data.user.name);
        console.log("Username stored in localStorage:", res.data.user.name);
      } else {
        console.error("Username not found in API response:", res.data);
      }

      setMessage("Login successful! Redirecting...");
      setTimeout(() => navigate("/profile"), 1000);
    } catch (err) {
      console.error("Login error:", err);
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
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
        <button type="submit" className="btn btn-success w-100">
          Login
        </button>
      </form>

      {message && <div className="alert alert-info mt-3">{message}</div>}

      <p style={{ marginTop: "1rem" }}>
        Not registered yet?{" "}
        <button
          onClick={handleSignupRedirect}
          style={{
            color: "blue",
            textDecoration: "underline",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          Sign up here
        </button>
      </p>
    </div>
  );
}

export default Login;