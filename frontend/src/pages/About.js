import React from "react";
import "./About.css"; // Import CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-header">About Campus Connect</h1>

        {/* Introduction */}
        <section className="about-section">
          <p>
            <strong>Campus Connect</strong> is a digital platform designed to
            bridge the gap between students, faculty, and administration. Our
            goal is to enhance communication, streamline event management, and
            provide easy access to campus resources.
          </p>
        </section>

        {/* International Opportunities */}
        <section className="about-section">
          <h2>🌍 International Opportunities</h2>
          <p>
            Our institution welcomes students from diverse backgrounds,
            including international students, creating a multicultural learning
            environment. We offer extensive support to ensure a smooth academic
            journey.
          </p>
        </section>

        {/* Campus Facilities & Policies */}
        <section className="about-section">
          <h2>🏫 Campus Facilities & Policies</h2>
          <p>
            Campus Connect provides information about various facilities
            including **smart classrooms, research labs, libraries, and hostels
            equipped with modern amenities** to support students' academic and
            personal growth.
          </p>
          <p className="important-note">
            🚫 Alcohol and drug consumption is strictly prohibited on campus.
          </p>
        </section>

        {/* Faculty and Leadership */}
        <section className="about-section">
          <h2>📌 Leadership & Faculty</h2>
          <ul className="about-list">
            <li>
              <strong>Dr. Krunal Vagehla</strong> – Dean of International Relations
            </li>
            <li>
              <strong>Prof. Kajal Mehta</strong> – Faculty, Computer Science Department
            </li>
            <li>
              <strong>Prof.Twinkle Bhatt</strong> – Faculty, Business Management
            </li>
          </ul>
          {/* Faculty Images */}
          <div className="faculty-images">
            <img src="/assets/alumni17.jpeg" alt="Dr. XYZ - Dean" />
            <img src="/assets/alumni16.jpeg" alt="Prof. ABC - Computer Science" />
            <img src="/assets/alumni18.jpeg" alt="Prof. DEF - Business Management" />
          </div>
        </section>

        {/* Contact Information */}
        <section className="about-section">
          <h2>📧 Contact Us</h2>
          <p>
            For any queries or support, feel free to reach out to our team:
          </p>
          <p className="contact-details">
            📩 <strong>Email:</strong>{" "}
            <a href="mailto:support@campusconnect.com">
              support@campusconnect.com
            </a>
          </p>
          <p className="contact-details">
            📞 <strong>Phone:</strong> +91 12345 67890
          </p>
          <p className="visit-site">
            🌐 <a href="#">Visit Official Website</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
