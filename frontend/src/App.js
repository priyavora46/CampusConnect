import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Vision from "./pages/about/Vision";
import Principal from "./pages/about/Principal";
import Faculty from "./pages/about/Faculty";
import Admission from "./pages/Admission";
import Courses from "./pages/Courses";
import Events from "./pages/Events";
import Placements from "./pages/Placements";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import AdmissionForm from "./pages/AdmissionForm";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/about/principal" element={<Principal />} />
          <Route path="/about/faculty" element={<Faculty />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/admissionform" element={<AdmissionForm />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
