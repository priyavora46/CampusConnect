import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to Campus Connect</h1>
        <br />
        <p>Your Gateway to College Information, Events & Resources</p>
        <br />
        <Link to="/courses" className="cta-button">
          Explore Courses
        </Link>
      </header>
   



      {/* Featured Courses */}
      <section className="featured-courses">
        <h2>📚 Featured Courses</h2>
        <p>Explore courses tailored to shape your career.</p>
        <div className="course-list">
          <div className="course-item">
            <h3>B.Tech Computer Science</h3>
            <p>AI, cloud computing, cybersecurity, and more.</p>
            <Link to="/courses">View Details</Link>
          </div>
          <div className="course-item">
            <h3>MBA in Marketing</h3>
            <p>Master business strategies, digital marketing, and branding.</p>
            <Link to="/courses">View Details</Link>
          </div>
          <div className="course-item">
            <h3>BBA in Finance</h3>
            <p>Gain expertise in financial management and investment strategies.</p>
            <Link to="/courses">View Details</Link>
          </div>
          <div className="course-item">
            <h3>M.Tech in Data Science</h3>
            <p>Learn machine learning, big data analytics, and AI applications.</p>
            <Link to="/courses">View Details</Link>
          </div>
        </div>
        <Link to="/courses" className="view-all">View All Courses</Link>
      </section>

      {/* Why Choose Our Courses? */}
      <section className="why-courses">
        <h2>🎓 Why Choose Our Courses?</h2>
        <p>✔ Industry-aligned curriculum with real-world applications</p>
        <p>✔ Taught by expert faculty & industry professionals</p>
        <p>✔ Hands-on learning with projects & internships</p>
        <p>✔ Global career opportunities with top companies</p>
      </section>

      {/* Upcoming Events */}
      <section className="events-section">
        <h2>🎉 Upcoming Events</h2>
        <p>Engage in exciting events, competitions, and fests.</p>
        <div className="event-list">
          <div className="event-card">
            <h3>🚀 Hackathon 2025</h3>
            <p>March 27th | Compete with top coders!</p>
            <Link to="/events">View Details</Link>
          </div>
          <div className="event-card">
            <h3>🎭 Cultural Fest</h3>
            <p>April 15th | Showcase your talents!</p>
            <Link to="/events">View Details</Link>
          </div>
          <div className="event-card">
            <h3>📢 Entrepreneurship Summit</h3>
            <p>May 5th | Learn from top business leaders!</p>
            <Link to="/events">View Details</Link>
          </div>
          <div className="event-card">
            <h3>🎵 Music Night</h3>
            <p>April 25th | Enjoy live music performances!</p>
            <Link to="/events">View Details</Link>
          </div>
        </div>
        <Link to="/events" className="view-all">View All Events</Link>
      </section>

      {/* Placement Updates */}
      <section className="placement-section">
        <h2>💼 Placement Updates</h2>
        <p>Discover job opportunities and career guidance.</p>
        <div className="placement-list">
          <div className="placement-card">
            <h3>Google - Software Engineer</h3>
            <p>Package: 25 LPA | Apply before April 10</p>
            <Link to="/placements">View Details</Link>
          </div>
          <div className="placement-card">
            <h3>Microsoft - Data Analyst</h3>
            <p>Package: 18 LPA | Apply before April 15</p>
            <Link to="/placements">View Details</Link>
          </div>
          <div className="placement-card">
            <h3>Amazon - Cloud Architect</h3>
            <p>Package: 22 LPA | Apply before May 1</p>
            <Link to="/placements">View Details</Link>
          </div>
          <div className="placement-card">
            <h3>Goldman Sachs - Financial Analyst</h3>
            <p>Package: 20 LPA | Apply before April 20</p>
            <Link to="/placements">View Details</Link>
          </div>
        </div>
        <Link to="/placements" className="view-all">View All Placements</Link>
      </section>

      {/* Alumni Network */}
      <section className="alumni-network">
        <h2>🎓 Alumni Success Stories</h2>
        <p>Our alumni are making an impact worldwide.</p>
        <div className="alumni-list">
          <div className="alumni-card">
            <h3>Priya Patel</h3>
            <p>Software Engineer at Google</p>
          </div>
          <div className="alumni-card">
            <h3>Rahul Sharma</h3>
            <p>Data Scientist at Microsoft</p>
          </div>
          <div className="alumni-card">
            <h3>Neha Verma</h3>
            <p>Product Manager at Apple</p>
          </div>
          <div className="alumni-card">
            <h3>Arjun Mehta</h3>
            <p>Blockchain Developer at Binance</p>
          </div>
        </div>
        <Link to="/alumni" className="view-all">Meet Our Alumni</Link>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>📞 Contact Us</h2>
        <p>For inquiries, support, or any assistance, reach out to us.</p>
        <Link to="/contact" className="contact-btn">Contact Now</Link>
      </section>
    </div>
  );
};

export default Home;
