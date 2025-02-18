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
            <img src="/londonbridge.jpg" alt="Luxury Hotel" />
            <div className="hotel-info">
              <h3>The London Bridge</h3>
              <p className="location">United Kingdom, Europe</p>
              <div className="hotel-details">
                <span className="price">$300-$600 per night</span>
                <span className="rating">⭐ 5.0</span>
              </div>
            </div>
          </div>
          <div className="hotel-card">
            <img src="/santorinii.jpg" alt="Luxury Hotel" />
            <div className="hotel-info">
              <h3>Santoniri</h3>
              <p className="location">Greece, Europe</p>
              <div className="hotel-details">
                <span className="price">$250-$500 per night</span>
                <span className="rating">⭐ 4.8</span>
              </div>
            </div>
          </div>
          <div className="hotel-card">
            <img src="/finland.avif" alt="Luxury Hotel" />
            <div className="hotel-info">
              <h3>Aurora</h3>
              <p className="location">Finland, Europe</p>
              <div className="hotel-details">
                <span className="price">$250-$500 per night</span>
                <span className="rating">⭐ 4.8</span>
              </div>
            </div>
          </div>
          <div className="hotel-card">
            <img src="/bahamas.jpg" alt="Luxury Hotel" />
            <div className="hotel-info">
              <h3>Bahamas</h3>
              <p className="location">Bahamas, Cariibean</p>
              <div className="hotel-details">
                <span className="price">$250-$500 per night</span>
                <span className="rating">⭐ 4.8</span>
              </div>
            </div>
          </div>
          <div className="hotel-card">
            <img src="/annapurna.jpg" alt="Luxury Hotel" />
            <div className="hotel-info">
              <h3>Annapurna Mountain</h3>
              <p className="location">Pokhara, Nepal</p>
              <div className="hotel-details">
                <span className="price">$250-$500 per night</span>
                <span className="rating">⭐ 4.8</span>
              </div>
            </div>
          </div>
          <div className="hotel-card">
            <img src="/africa.jpg" alt="Luxury Hotel" />
            <div className="hotel-info">
              <h3>Mount Kilimanjaro</h3>
              <p className="location">Tanzania, Africa</p>
              <div className="hotel-details">
                <span className="price">$250-$500 per night</span>
                <span className="rating">⭐ 4.8</span>
              </div>
            </div>
          </div>
          <div className="hotel-card">
            <img src="/rara.jpg" alt="Luxury Hotel" />
            <div className="hotel-info">
              <h3>Rara Lake</h3>
              <p className="location">Mugu, Karnali, Nepal</p>
              <div className="hotel-details">
                <span className="price">$250-$500 per night</span>
                <span className="rating">⭐ 4.8</span>
              </div>
            </div>
          </div>
          <div className="hotel-card">
            <img src="/turkiye.jpg" alt="Luxury Hotel" />
            <div className="hotel-info">
              <h3>Blue Mosque</h3>
              <p className="location">Istanbul, Turkey</p>
              <div className="hotel-details">
                <span className="price">$250-$500 per night</span>
                <span className="rating">⭐ 4.8</span>
              </div>
            </div>
          </div>
          <div className="hotel-card">
            <img src="/brazil.avif" alt="Luxury Hotel" />
            <div className="hotel-info">
              <h3>Rio De Janerio</h3>
              <p className="location">Brazil, South America</p>
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