import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Navigation for redirection
import "./LandingPage.css";

function LandingPage() {
  const [startAnimation, setStartAnimation] = useState(false);
  const navigate = useNavigate(); // ✅ Navigation hook

  const handleClick = () => {
    setStartAnimation(true);
    setTimeout(() => {
      navigate("/create-trip"); // ✅ Navigate after animation completes
    }, 3200); // ✅ Extended animation time (6s for smooth effect)
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Discover Your Next Adventure with AI</h1>
        <h2>Personalized Itineraries at Your Fingertips</h2>
        <p>Your personal trip planner, creating custom itineraries tailored to your interests and budget.</p>
        
        {/* ✅ Only Button Inside Blurred Box */}
        <div className="blurred-button-container">
          <button className="plan-trip-btn" onClick={handleClick}>
            Plan My Trip
          </button>
        </div>
      </div>

      {/* ✈️ Plane Animation */}
      {startAnimation && (
        <div className="plane-container">
          <img src="/planed_processed.webp" alt="Plane" className="plane" />
          <div className="dotted-path"></div>
        </div>
      )}
    </section>
  );
}

export default LandingPage;



