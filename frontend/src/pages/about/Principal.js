import React from 'react';
import "./common.css"; // Correct relative path

function Principal() {
  return (
    <div className="about-page">
      <h2 className="about-title">Principal's Message</h2>
      
      <p className="about-text">
        Welcome to College Connect — a place of inspiration, growth, and excellence. 
        As the principal, I am proud to lead an institution that prioritizes quality education, 
        character development, and the holistic well-being of our students.
      </p>
      
      <p className="about-text">
        Our mission is to cultivate a learning culture that blends academic rigor with innovation and 
        ethics. We believe in nurturing individuals who are not only skilled professionals 
        but also responsible citizens contributing positively to society.
      </p>
      
      <p className="about-text">
        We invite you to join us in this journey of discovery, learning, and transformation.
      </p>
      
      <p className="about-text" style={{ fontStyle: 'italic', textAlign: 'right' }}>
        – Dr. Priya Vora, Principal
      </p>
    </div>
  );
}

export default Principal;
