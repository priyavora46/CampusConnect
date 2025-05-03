import React, { useState, useRef } from "react";
import axios from "axios";
import "./AdmissionForm.css";

const AdmissionForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    city: "",
    course: "",
    paymentMode: "",
  });

  const [documents, setDocuments] = useState([]);
  const [docType, setDocType] = useState("");
  const [docFile, setDocFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);
  const [formErrors, setFormErrors] = useState({}); // To store form validation errors

  const courseFees = {
    "B.Tech CE": 80000,
    "B.Tech AI & ML": 85000,
    "MBA": 120000,
    "BCA": 60000,
    "M.Sc IT": 70000,
    "B.Tech Civil": 75000,
    "B.Tech Mechanical": 78000,
    "B.Tech Electrical": 80000,
    "B.Tech CSE": 82000,
    "BBA": 65000,
    "M.A English": 55000,
    "M.Com": 60000,
    "M.Tech CE": 95000,
    "B.Sc Computer Science": 65000,
    "B.Sc Agriculture": 50000,
  };

  const courseOptions = ["B.Tech CE", "B.Tech AI & ML", "MBA", "BCA", "M.Sc IT", "B.Tech Civil", "B.Tech Mechanical", "B.Tech Electrical", "B.Tech CSE", "BBA", "M.A English", "M.Com", "M.Tech CE", "B.Sc Computer Science", "B.Sc Agriculture"];
  const paymentOptions = ["Online", "Offline"];
  const documentTypes = ["Aadhar", "10th Marksheet", "12th Marksheet", "Leaving Certificate"];

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" }); // Clear error on input change
  };

  const handleDocUpload = () => {
    if (docType && docFile) {
      if (documents.length < 4) {
        setDocuments((prev) => [...prev, { type: docType, file: docFile }]);
        setDocType("");
        setDocFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        alert("You can upload a maximum of 4 documents.");
      }
    } else {
      alert("Please select document type and file.");
    }
  };

  const handleRemoveDoc = (index) => {
    setDocuments(prev => prev.filter((_, i) => i !== index));
  };

  const getFileType = (filename) => {
    const extension = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
    switch (extension.toLowerCase()) {
      case 'jpg':
      case 'jpeg': return 'image/jpeg';
      case 'png': return 'image/png';
      case 'pdf': return 'application/pdf';
      default: return 'application/octet-stream'; //  generic type
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!form.fullName.trim()) errors.fullName = "Full Name is required";
    if (!form.email.trim()) errors.email = "Email is required";
    if (!form.phone.trim()) errors.phone = "Phone Number is required";
    if (!form.dob.trim()) errors.dob = "Date of Birth is required";
    if (!form.city.trim()) errors.city = "City is required";
    if (!form.course) errors.course = "Course is required";
    if (!form.paymentMode) errors.paymentMode = "Payment Mode is required";
    if (documents.length !== 4) errors.documents = "Please upload all required documents";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return; // Stop submission if form is invalid
    }

    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }

    // Prepare documents array for backend
    const documentsForBackend = documents.map(doc => ({ type: doc.type }));
    formData.append("documents", JSON.stringify(documentsForBackend));

    // Append files
    documents.forEach((doc, index) => {
      formData.append(`document_${index}_file`, doc.file);
    });

    try {
      setIsSubmitting(true);
      const res = await axios.post("http://localhost:5000/api/admission/admissions", formData, { // Corrected URL
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Admission form submitted successfully!");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        dob: "",
        city: "",
        course: "",
        paymentMode: "",
      });
      setDocuments([]);
      setFormErrors({}); // Clear errors on successful submission
    } catch (err) {
      alert("Submission failed. Try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="admission-form-section">
      <h2>📝 Admission Form</h2>
      <form onSubmit={(e) => e.preventDefault()} encType="multipart/form-data" className="admission-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" value={form.fullName} onChange={handleInputChange} required />
          {formErrors.fullName && <p className="error-message">{formErrors.fullName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleInputChange} required />
          {formErrors.email && <p className="error-message">{formErrors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleInputChange} required />
          {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="text" id="dob" name="dob" placeholder="DD-MM-YYYY" value={form.dob} onChange={handleInputChange} required />
          {formErrors.dob && <p className="error-message">{formErrors.dob}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={form.city} onChange={handleInputChange} required />
          {formErrors.city && <p className="error-message">{formErrors.city}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <select id="course" name="course" value={form.course} onChange={handleInputChange} required>
            <option value="">Select Course</option>
            {courseOptions.map(course => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
          {formErrors.course && <p className="error-message">{formErrors.course}</p>}
          {form.course && courseFees[form.course] && <p className="fee-info"><strong>💰 Fee:</strong> ₹{courseFees[form.course]}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="paymentMode">Payment Mode:</label>
          <select id="paymentMode" name="paymentMode" value={form.paymentMode} onChange={handleInputChange} required>
            <option value="">Select Payment Mode</option>
            {paymentOptions.map(mode => (
              <option key={mode} value={mode}>{mode}</option>
            ))}
          </select>
          {formErrors.paymentMode && <p className="error-message">{formErrors.paymentMode}</p>}
        </div>

        <div className="upload-documents">
          <h3>Upload Documents</h3>
          <div className="upload-controls">
            <select value={docType} onChange={(e) => setDocType(e.target.value)}>
              <option value="">Select Document Type</option>
              {documentTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <input type="file" onChange={(e) => setDocFile(e.target.files[0])} ref={fileInputRef} />
            <button type="button" onClick={handleDocUpload}>Upload Document</button>
          </div>
          <ul className="document-list">
            {documents.map((doc, idx) => (
              <li key={idx}>
                {doc.type} - {doc.file.name}
                <button type="button" onClick={() => handleRemoveDoc(idx)} className="remove-doc">Remove</button>
              </li>
            ))}
          </ul>
          {formErrors.documents && <p className="error-message">{formErrors.documents}</p>}
        </div>

        <button type="button" onClick={handleSubmit} disabled={isSubmitting} className="submit-button">
          {isSubmitting ? "Processing..." : "Submit Admission"}
        </button>
      </form>
    </section>
  );
};

export default AdmissionForm;
