import React, { useEffect, useState } from 'react';
import placementsData from '../data/placements.json';
import './Placements.css';

const Placements = () => {
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    setPlacements(placementsData); // Load data only once
  }, []);

  return (
    <div className="placements-container">
      <h1>Top Campus Placements</h1>
      <div className="placements-list">
        {placements.length > 0 ? (
          placements.map((placement) => (
            <div key={placement.id} className="placement-card">
              <img
                src={placement.image}
                alt={placement.company}
                className="company-logo"
                onError={(e) => {
                  if (!e.target.src.includes('default-placeholder.png')) {
                    e.target.src = '/images/default-placeholder.png';
                  }
                }}
              />
              <h2>{placement.company}</h2>
              <p><strong>Role:</strong> {placement.role}</p>
              <p><strong>Package:</strong> {placement.package}</p>
              <p><strong>Location:</strong> {placement.location}</p>
            </div>
          ))
        ) : (
          <p>No placement records available.</p>
        )}
      </div>
    </div>
  );
};

export default Placements;
