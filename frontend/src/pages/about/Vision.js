import React from 'react';
import "./common.css"; 

function Vision() {
  return (
    <div className="about-page">
      <h2 className="about-title">Our Vision</h2>
      <p className="about-text">
        At College Connect, our vision is to foster a dynamic academic environment that empowers students
        with knowledge, skills, and values essential to thrive in a competitive world.
      </p>

      <h2 className="about-title">Our Mission</h2>
      <p className="about-text">
        Our mission is to deliver holistic education by integrating academic excellence with
        character building, creativity, innovation, and social responsibility.
      </p>
      <p className="about-text">
        We strive to equip students with real-world knowledge and lifelong learning capabilities,
        preparing them to become contributors to a better future.
      </p>

      <h2 className="about-title">Our Core Values</h2>
      <ul className="about-text">
        <li>🎓 Excellence in teaching and learning</li>
        <li>🤝 Integrity and accountability</li>
        <li>🌱 Inclusivity and respect for diversity</li>
        <li>🔬 Innovation and continuous improvement</li>
        <li>🌍 Social and environmental responsibility</li>
      </ul>
    </div>
  );
}

export default Vision;
