import React from 'react';
import "./Display.css";

function Itinerary({ trip }) {
    console.log("🔍 Full tripData:", trip?.tripData); 
    console.log("📌 Checking itinerary:", trip?.tripData?.Itinerary); 

    // Extract itinerary from Firestore
    const itinerary = trip?.tripData?.Itinerary || [];  

    return (
        <div className="itinerary-container">
            <h2 className="itinerary-title">Places to Visit</h2>

            <div className="itinerary-grid">
                {itinerary.length > 0 ? (
                    itinerary.map((item, index) => {
                        console.log(`📌 Itinerary ${index}: ${item["Place Name"]}, 
                            Price: ${item["Ticket Pricing"]}, 
                            Travel Time: ${item["Travel Time"]}`);

                        // ✅ Construct Google Maps Link
                        const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item["Place Name"])}`;

                        return (
                            <a 
                                key={index}
                                href={googleMapsLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="itinerary-link"
                            >
                                <div className="itinerary-card">
                                    {/* Itinerary Image */}
                                    <img 
                                        src="/places.jpg" 
                                        alt={item["Place Name"] || `Place ${index}`} 
                                        className="itinerary-image"
                                    />

                                    {/* Itinerary Details */}
                                    <div className="itinerary-details">
                                        <h3 className="itinerary-name">{item["Place Name"] || `Place ${index}`}</h3>
                                        <p className="itinerary-info"><span>Ticket Pricing:</span> {item["Ticket Pricing"] || "Free"}</p>
                                        <p className="itinerary-info"><span>Travel Time:</span> {item["Travel Time"] || "N/A"}</p>
                                        <p className="itinerary-info"><span>Rating:</span> {item["Rating"] || "N/A"}</p>
                                        <p className="itinerary-info"><span>Details:</span> {item["Details"] || "No details available."}</p>

                                            {/* Blurry Click Info */}
                                            <p className="itinerary-click-info">Click for more details!!</p>
                                    </div>
                                </div>
                            </a>
                        );
                    })
                ) : (
                    <p>No itinerary found.</p>
                )}
            </div>
        </div>
    );
}

export default Itinerary;



//////////////////////Older css
// import React from 'react';
// import "./Display.css";

// function Itinerary({ trip }) {
//     console.log("🔍 Full tripData:", trip?.tripData); 
//     console.log("📌 Checking itinerary:", trip?.tripData?.Itinerary); 

//     // Extract itinerary from Firestore (Ensure correct key name)
//     const itinerary = trip?.tripData?.Itinerary || [];  // 🔹 Fixed Extraction

//     return (
//         <div className="hotels-container">
//             <h2 className="hotels-title">Itinery Recommendations</h2>

//             <div className="hotels-grid">
//                 {itinerary.length > 0 ? (
//                     itinerary.map((item, index) => {
//                         console.log(`📌 Itinerary ${index}: ${item["Place Name"]}, 
//                             Price: ${item["Ticket Pricing"]}, 
//                             Travel Time: ${item["Travel Time"]}`);

//                         return (
//                             <div key={index} className="hotel-card">
//                                 {/* Itinerary Image */}
//                                 <img 
//                                     // src={item["Image URL"] || "/placeholder.jpg"}  
//                                     src ="/hotell.jpg"
//                                     alt={item["Place Name"] || `Place ${index}`} 
//                                     className="hotel-image"
//                                 />

//                                 {/* Itinerary Details */}
//                                 <div className="hotel-details">
//                                     <h3 className="hotel-name">{item["Place Name"] || `Place ${index}`}</h3>
//                                     <p className="hotel-price"><strong>Ticket Pricing:</strong> {item["Ticket Pricing"] || "Free"}</p>
//                                     <p className="hotel-price"><strong>Travel Time:</strong> {item["Travel Time"] || "N/A"}</p>
//                                     <p className="hotel-price"><strong>Rating:</strong> {item["Rating"] || "N/A"}</p>
//                                     <p className="hotel-price"><strong>Details:</strong> {item["Details"] || "No details available."}</p>
//                                 </div>
//                             </div>
//                         );
//                     })
//                 ) : (
//                     <p>No itinerary found.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Itinerary;
