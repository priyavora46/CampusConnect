import React from 'react';
import './Alumni.css';
import { Card, Row, Col } from 'react-bootstrap';

const alumni = [
  { name: "Priya Patel", batch: "2018", company: "Microsoft", image: "/assets/priya.jpeg" },
  { name: "Rahul Sharma", batch: "2019", company: "Amazon", image: "/assets/alumini2.jpeg" },
  { name: "Sneha Desai", batch: "2020", company: "Google", image: "/assets/alumini3.jpeg" },
  { name: "Jay Mehta", batch: "2021", company: "TCS", image: "/assets/alumni4.jpeg" },
  { name: "Isha Rana", batch: "2017", company: "Infosys", image: "/assets/alumni5.jpeg" },
  { name: "Arjun Verma", batch: "2016", company: "Capgemini", image: "/assets/alumni6.jpeg" },
  { name: "Meera Shah", batch: "2015", company: "Adobe", image: "/assets/alumni7.jpeg" },
  { name: "Dev Patel", batch: "2022", company: "Meta", image: "/assets/alumni8.jpeg" },
  { name: "Diya Patel", batch: "2023", company: "Wipro", image: "/assets/alumni9.jpeg" },
];

function Alumni() {
  return (
    <div className="alumni-container">
      <h2 className="alumni-title">Meet Our Proud Alumni</h2>
      <p className="alumni-subtitle">
        Our alumni are shaping the future at top companies around the globe.
      </p>
      <Row xs={1} md={2} lg={3} className="g-4">
        {alumni.map((a, index) => (
          <Col key={index}>
            <Card className="alumni-card shadow-sm h-100 text-center">
              <Card.Img
                variant="top"
                src={a.image}
                alt={a.name}
                className="alumni-image"
                onError={(e) => {
                  e.target.src = "/assets/default-alumni.png";
                }}
              />
              <Card.Body>
                <Card.Title>{a.name}</Card.Title>
                <Card.Text><strong>Batch:</strong> {a.batch}</Card.Text>
                <Card.Text><strong>Company:</strong> {a.company}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Alumni;
