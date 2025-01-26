import React from 'react'

function Recommendation() {
  return (
    <section className="recommendations-section">
        <h2>Popular Destinations</h2>
        <div className="hotel-grid">
          <div className="hotel-card">
            <img src="/lasvegas.jpg" alt="Luxury Hotel" />
            <div className="hotel-info">
              <h3>The Venetian Resort</h3>
              <p className="location">Las Vegas, NV, USA</p>
              <div className="hotel-details">
                <span className="price">$200-$450 per night</span>
                <span className="rating">⭐ 4.5</span>
              </div>
            </div>
          </div>
          <div className="hotel-card">
            <img src="/london.jpg" alt="Luxury Hotel" />
            <div className="hotel-info">
              <h3>The Wynn Las Vegas</h3>
              <p className="location">Las Vegas, NV, USA</p>
              <div className="hotel-details">
                <span className="price">$300-$600 per night</span>
                <span className="rating">⭐ 5.0</span>
              </div>
            </div>
          </div>
          <div className="hotel-card">
            <img src="/Santorini.jpg" alt="Luxury Hotel" />
            <div className="hotel-info">
              <h3>The Cosmopolitan</h3>
              <p className="location">Las Vegas, NV, USA</p>
              <div className="hotel-details">
                <span className="price">$250-$500 per night</span>
                <span className="rating">⭐ 4.8</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Recommendation