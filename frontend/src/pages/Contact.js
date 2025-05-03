import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      message,
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage("Your message has been submitted successfully!");
      } else {
        setResponseMessage(data.error || "Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="py-5" style={{ background: "#f8f9fa" }}>
      <Container>
        <h2 className="text-center mb-4">Contact Us</h2>
        <Row>
          {/* Contact Form */}
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            {responseMessage && (
              <div className="mt-3 alert alert-info">{responseMessage}</div>
            )}
          </Col>

          {/* Contact Info + Socials */}
          <Col md={6}>
            <h5>Address:</h5>
            <p>
              Campus Connect , Near Bedi,
              <br />
              Jamnagar, Gujarat - 361001
            </p>

            <h5>Email:</h5>
            <p>info@campusconnect.edu</p>

            <h5>Phone:</h5>
            <p>+91 98765 43210</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
