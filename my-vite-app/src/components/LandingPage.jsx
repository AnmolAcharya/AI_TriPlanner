import React, { useState } from "react";
import "./LandingPage.css";

function LandingPage() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setStartAnimation(true);
    setTimeout(() => {
      setShowForm(true); // Show the form after animation completes
    }, 3000); // Match animation duration
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Discover Your Next Adventure with AI</h1>
        <h2>Personalized Itineraries at Your Fingertips</h2>
        <p>
          Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
        </p>
        <button className="plan-trip-btn" onClick={handleClick}>
          Plan My Trip
        </button>
      </div>

      {/* Plane Animation */}
      {startAnimation && (
        <div className="plane-container">
          <img src="/plane.jpg" alt="Plane" className="plane" />
          <div className="dotted-path"></div>
        </div>
      )}

      {/* Form Section (Hidden until animation completes) */}
      {showForm && (
        <div className="trip-form">
          <h2>Plan Your Trip</h2>
          <form>
            <input type="text" placeholder="Enter Destination" required />
            <input type="date" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </section>
  );
}

export default LandingPage;
