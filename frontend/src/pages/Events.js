import React, { useEffect, useState } from 'react';
import eventsData from '../data/events.json';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/event-register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, eventId: selectedEvent.id })
    });
    const data = await response.json();
    alert(data.message);
    setShowForm(false);
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div className="events-container">
      <h1>Upcoming Events</h1>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
            <button className="register-btn" onClick={() => handleRegisterClick(event)}>
              Register Now
            </button>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="modal">
          <form onSubmit={handleSubmit} className="registration-form">
            <h2>Register for {selectedEvent.title}</h2>
            <input name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
            <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} required />
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Events;
