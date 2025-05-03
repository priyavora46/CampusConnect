import React from "react";
import "./Courses.css";

const coursesData = [
  {
    id: 1,
    name: "B.Tech Computer Engineering",
    duration: "4 Years",
    eligibility: "10+2 with PCM",
    description: "This program covers programming, software development, and computer hardware fundamentals. It prepares students for careers in IT, software engineering, and research fields.",
  },
  {
    id: 2,
    name: "B.Tech AI & ML",
    duration: "4 Years",
    eligibility: "10+2 with PCM",
    description: "Focuses on artificial intelligence, machine learning algorithms, deep learning, and robotics, equipping students with the skills to work in automation and AI-driven applications.",
  },
  {
    id: 3,
    name: "B.Tech Cyber Security",
    duration: "4 Years",
    eligibility: "10+2 with PCM",
    description: "Teaches ethical hacking, data protection, digital forensics, and network security, helping students secure information systems against cyber threats.",
  },
  {
    id: 4,
    name: "B.Tech Data Science",
    duration: "4 Years",
    eligibility: "10+2 with PCM",
    description: "This course focuses on big data analytics, predictive modeling, and business intelligence, enabling students to analyze complex data and extract meaningful insights.",
  },
  {
    id: 5,
    name: "B.Tech IoT & Automation",
    duration: "4 Years",
    eligibility: "10+2 with PCM",
    description: "Integrates IoT with smart technology, automation, and industrial applications, preparing students for roles in smart city development, smart devices, and automation industries.",
  },
  {
    id: 6,
    name: "B.Tech Mechanical Engineering",
    duration: "4 Years",
    eligibility: "10+2 with PCM",
    description: "Covers design, thermodynamics, robotics, and advanced manufacturing, providing students with the skills needed for industrial and research applications.",
  },
  {
    id: 7,
    name: "B.Tech Civil Engineering",
    duration: "4 Years",
    eligibility: "10+2 with PCM",
    description: "Focuses on construction, structural analysis, and environmental engineering, helping students build infrastructure and urban development projects.",
  },
  {
    id: 8,
    name: "B.Tech Electrical Engineering",
    duration: "4 Years",
    eligibility: "10+2 with PCM",
    description: "Studies power generation, electrical circuits, and renewable energy solutions, making students industry-ready for electrical and energy sectors.",
  },
  {
    id: 9,
    name: "BBA - Business Administration",
    duration: "3 Years",
    eligibility: "10+2 Any Stream",
    description: "Covers management, marketing, finance, and entrepreneurship, preparing students for leadership roles in business and corporate sectors.",
  },
  {
    id: 10,
    name: "MBA - Master of Business Administration",
    duration: "2 Years",
    eligibility: "Graduation",
    description: "Offers specialization in finance, HR, marketing, and operations management, shaping future business leaders and strategists.",
  },
  {
    id: 11,
    name: "BCA - Bachelor of Computer Applications",
    duration: "3 Years",
    eligibility: "10+2 Any Stream",
    description: "Focuses on programming, databases, and software development, making students industry-ready in IT and tech domains.",
  },
  {
    id: 12,
    name: "MCA - Master of Computer Applications",
    duration: "2 Years",
    eligibility: "BCA or Equivalent",
    description: "Advanced computing and software engineering course, providing expertise in cloud computing, AI, and software development.",
  },
  {
    id: 13,
    name: "B.Sc IT - Information Technology",
    duration: "3 Years",
    eligibility: "10+2 Any Stream",
    description: "Specializes in networking, cybersecurity, and database management, preparing students for IT security and administration roles.",
  },
  {
    id: 14,
    name: "M.Sc IT - Information Technology",
    duration: "2 Years",
    eligibility: "B.Sc IT or Equivalent",
    description: "Covers cloud computing, big data analytics, and cybersecurity for advanced IT solutions and research opportunities.",
  },
  {
    id: 15,
    name: "B.Com - Bachelor of Commerce",
    duration: "3 Years",
    eligibility: "10+2 Any Stream",
    description: "Includes accounting, finance, taxation, and business law, preparing students for careers in finance and business management.",
  },
  {
    id: 16,
    name: "M.Com - Master of Commerce",
    duration: "2 Years",
    eligibility: "B.Com or Equivalent",
    description: "Advanced studies in financial markets, corporate law, and investment banking, designed for finance professionals and consultants.",
  },
];

const Courses = () => {
  return (
    <div className="courses-container">
      <h1 className="title">📚 College Courses</h1>

      <div className="courses-grid">
        {coursesData.map((course, index) => (
          <div key={course.id} className="course-card">
            <div className="course-info">
              <h2>{course.name}</h2>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Eligibility:</strong> {course.eligibility}</p>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
