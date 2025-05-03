import React from 'react';
import"./common.css";
import { Card, Row, Col } from 'react-bootstrap';

const facultyMembers = [
  {
    name: 'Dr. Aarti Shah',
    title: 'Head of Computer Engineering',
    image:"/assets/alumni10.jpeg",
  },
  {
    name: 'Prof. Rahul Mehta',
    title: 'Assistant Professor, IT Department',
    image: "/assets/alumni11.jpeg",
  },
  {
    name: 'Dr. Kavita Patel',
    title: 'Associate Professor, Electronics',
    image: "/assets/alumni12.jpeg",
  },
  {
    name: 'Prof. Sanjay Rao',
    title: 'Head of Mechanical Engineering',
    image: "/assets/alumni13.jpeg",
  },
  {
    name: 'Dr. Neha Desai',
    title: 'Dean of Academics',
    image: "/assets/alumni14.jpeg",
  },
  {
    name: 'Prof. Ankit Bhatt',
    title: 'Lecturer, Civil Engineering',
    image: "/assets/alumni15.jpeg",
  },
];

function Faculty() {
  return (
    <div className="faculty-page">
      <h2 className="faculty-title">Our Esteemed Faculty</h2>
      <Row xs={1} sm={2} md={3} className="g-4">
        {facultyMembers.map((member, index) => (
          <Col key={index}>
            <Card className="faculty-card h-100 shadow-sm">
              <Card.Img variant="top" src={member.image} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Faculty;
