import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="travel-app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/logo.jpg" alt="TravelAI" className="logo-img" />
            <span>TravelAI</span>
          </Link>
        </div>
          <button className="sign-in-btn">Sign In</button>
      </nav>
    </div>
  )
}

export default Navbar