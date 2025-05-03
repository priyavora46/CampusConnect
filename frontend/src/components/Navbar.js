import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          Campus Connect
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => navigate("/about")}
              >
                About
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/about/vision">Vision</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about/principal">Principal's Message</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about/faculty">Faculty</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admission">Admission</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/placements">Placements</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/alumni">Alumni</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
