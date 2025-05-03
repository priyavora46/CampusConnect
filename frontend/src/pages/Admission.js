import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AdmissionForm from "./AdmissionForm";
import "./Admissions.css";

const Admissions = () => {
  const [showForm, setShowForm] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [user, setUser] = useState(null);
  const [showSubmittedData, setShowSubmittedData] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleApplyNow = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userData = JSON.parse(localStorage.getItem("user"));

    if (!isLoggedIn || isLoggedIn === "false" || !userData) {
      alert("Please login first to apply for admission!");
      navigate("/login");
    } else {
      setUser(userData);
      setShowForm(true);
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  }, []);

  const handleViewSubmittedData = () => {
    setShowSubmittedData((prev) => !prev);
  };

  return (
    <div className="admissions-container">
      <section className="hero">
        <h1>🎓 Admissions Open for 2025!</h1>
        <p>Apply now to secure your spot at our prestigious college.</p>
        <button className="apply-btn" onClick={handleApplyNow}>Apply Now</button>
      </section>

      <section className="content-section">
        <h2>🌟 Why Choose Us?</h2>
        <ul>
          <li>✅ Industry-relevant curriculum and hands-on learning</li>
          <li>✅ Experienced faculty from IITs & NITs</li>
          <li>✅ Strong placement support with 500+ recruiters</li>
          <li>✅ Hi-tech infrastructure and digital classrooms</li>
          <li>✅ Cultural diversity, innovation & growth-focused environment</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>📚 Programs Offered</h2>
        <ul>
          <li>B.Tech: CE, AI & ML, Cyber Security, Data Science</li>
          <li>BBA, MBA, BCA, MCA</li>
          <li>B.Sc IT, M.Sc IT</li>
          <li>Diplomas: Mechanical, Civil, Electrical</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>🎓 Scholarship Opportunities</h2>
        <ul>
          <li>Merit-based: Up to 100% fee waiver</li>
          <li>Sports quota scholarships</li>
          <li>Support for economically weaker sections (EWS)</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>📝 Admission Process</h2>
        <ol>
          <li>Register/login to the portal</li>
          <li>Fill out the online application form</li>
          <li>Upload required documents</li>
          <li>Entrance exam or interview (if applicable)</li>
          <li>Verification & fee payment</li>
        </ol>
      </section>

      <section className="content-section">
        <h2>📑 Documents Required</h2>
        <ul>
          <li>Aadhar Card</li>
          <li>School Leaving Certificate</li>
          <li>10th Marksheet</li>
          <li>12th Marksheet</li>
        </ul>
        <p><em>Please keep digital copies ready for upload during application.</em></p>
      </section>

      <section className="content-section">
        <h2>📞 Contact Us</h2>
        <p>Email: admissions@college.com</p>
        <p>Phone: +91 9876543210</p>
      </section>

      {user && (
        <section className="content-section user-profile">
          <h2>👤 Profile Information</h2>
          <p><strong>Name:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </section>
      )}

      {showForm && (
        <AdmissionForm
          formRef={formRef}
          setSubmittedData={setSubmittedData}
          user={user}
        />
      )}

      {user && submittedData && (
        <button className="view-submitted-btn" onClick={handleViewSubmittedData}>
          {showSubmittedData ? "Hide Submitted Data" : "View Submitted Data"}
        </button>
      )}

      {showSubmittedData && submittedData && user && submittedData.email === user.email && (
        <section className="content-section submitted-data">
          <h2>📄 Submitted Admission Details</h2>
          <p><strong>Name:</strong> {submittedData.fullName}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Phone:</strong> {submittedData.phone}</p>
          <p><strong>Course:</strong> {submittedData.course}</p>
          <p><strong>DOB:</strong> {submittedData.dob}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <h3>Uploaded Documents:</h3>
          <ul>
            {submittedData.documents.map((doc, index) => (
              <li key={index}>
                <strong>{doc.type}:</strong> {doc.file.name}{" "}
                {doc.file.type.startsWith("image/") && (
                  <img
                    src={URL.createObjectURL(doc.file)}
                    alt={doc.type}
                    width="100"
                    style={{ marginTop: "5px" }}
                  />
                )}
                {doc.file.type === "application/pdf" && (
                  <a
                    href={URL.createObjectURL(doc.file)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📄 View PDF
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Admissions;
