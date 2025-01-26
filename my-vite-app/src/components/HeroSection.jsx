import React, { useState } from 'react';

function HeroSection() {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Discover Your Next Adventure with AI</h1>
        <h2>Personalized Itineraries at Your Fingertips</h2>
        <p>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
        
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="destination-input"
            />
            <input
              type="text"
              placeholder="When do you plan to travel?"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              className="date-input"
            />
            <button className="search-button">Plan My Trip</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
