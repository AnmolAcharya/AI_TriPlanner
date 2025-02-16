import React from 'react';
import './Display.css'; // Import the CSS file

function About({ trip }) {
  return (
    <div className="about-container">
      <img src="/placeholder.jpg" alt="Trip" className="about-image" />
      <div>
      <h2>{trip?.userSelection?.destination}</h2> {/*check from the console and placed here accordingly!*/}
      </div>

    </div>
  );
}

export default About;
