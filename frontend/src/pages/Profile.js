// Profile.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Loading..."); // Initial loading message

  useEffect(() => {
    const name = localStorage.getItem("userName");
    setUserName(name || "User");
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="auth-container" style={styles.container}>
      <h2 style={styles.heading}>Welcome, {userName}! 🎉</h2>
      <p style={styles.text}>
        You are now logged in. You can proceed with the admission process.
      </p>

      <div>
        <button
          style={{ ...styles.button, backgroundColor: "#0d6efd" }}
          onClick={() => navigate("/admissionform")}
        >
          Go to Admission
        </button>

        <button
          style={{ ...styles.button, backgroundColor: "#dc3545" }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "100px auto",
    textAlign: "center",
    padding: "30px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "12px",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
  },
  text: {
    marginBottom: "30px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    margin: "0 10px",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Profile;