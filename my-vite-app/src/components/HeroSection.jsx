import React, { useState } from 'react';
import { Link } from 'react-router-dom'


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
            {/* <input
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
            /> */}

            <Link to="/create-trip">
              <button className="search-button">Plan My Trip</button>
            </Link> 
            {/* Crucial part of rendering into another page or tab screen for the planning of the trip! */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
