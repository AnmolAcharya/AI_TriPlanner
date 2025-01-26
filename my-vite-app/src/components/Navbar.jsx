import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="travel-app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="TravelAI" className="logo-img" />
            <span>TravelAI</span>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/create-trip" className="nav-link">Create Trip</Link>
          <button className="sign-in-btn">Sign In</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar