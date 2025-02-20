import React from "react";
import "./Display.css";

function Hotels({ trip }) {
    console.log("🔍 Full tripData:", trip?.tripData); 
    console.log("🏨 Checking hotels:", trip?.tripData?.Hotels); 

    // Extract hotels from the new Firestore format
    const hotels = trip?.tripData?.Hotels || [];  // 🔹 Fixed Extraction

    return (
        <div className="hotels-container">
            <h2 className="hotels-title">Hotel Recommendations</h2>

            <div className="hotels-grid">
                {hotels.length > 0 ? (
                    hotels.map((item, index) => {
                        console.log(`🏨 Hotel ${index} Name: ${item.Name}, Price: ${item.Price}`);

                        return (
                            <div key={index} className="hotel-card">
                                {/* Common Hotel Image */}
                                <img 
                                    src="/hotel.avif"  
                                    alt={`Hotel ${index}`} 
                                    className="hotel-image"
                                />

                                {/* Hotel Details */}
                                <div className="hotel-details">
                                    <h3 className="hotel-name">{item.Name || `Hotel ${index}`}</h3>
                                    <p className="hotel-price"><strong>Price:</strong> {item.Price || "N/A"}</p>
                                    <p className="hotel-price"><strong> Rating ⭐ :</strong> {item.Rating || "N/A"}</p>
                                    <p className="hotel-price"><strong> Description:</strong> {item.Description || "N/A"}</p>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>No hotels found.</p>
                )}
            </div>
        </div>
    );
}

export default Hotels;














/////////////////////////////code before we modified the firebase structure 
// import React from 'react';
// import './Display.css';

// function Hotels({ trip }) { 
//     console.log("🔍 Full tripData:", trip?.tripData); //works one-twice and doesn't work after that
//     console.log("📂 Checking tripData.travelPlan:", trip?.tripData?.travelPlan);
//     console.log("🏨 Checking hotels in travelPlan:", trip?.tripData?.travelPlan?.hotels);

//     // Extract hotels from the correct location
//     const hotels = trip?.tripData?.travelPlan?.hotels || [];

//     return (
//         <div className="hotels-container">
//             <h2 className="hotels-title">Hotel Recommendations</h2>

//             <div className="hotels-grid">
//                 {hotels.length > 0 ? (
//                     hotels.map((item, index) => {
//                         console.log(`🏨 Hotel ${index} Name: ${item.name}, Price: ${item.price}`);

//                         return (
//                             <div key={index} className="hotel-card">
//                                 {/* Common Hotel Image */}
//                                 <img 
//                                     src="/hotel.avif"  
//                                     alt={`Hotel ${index}`} 
//                                     className="hotel-image"
//                                 />

//                                 {/* Hotel Details */}
//                                 <div className="hotel-details">
//                                     <h3 className="hotel-name">{item.name || `Hotel ${index}`}</h3>
//                                     <p className="hotel-price"><strong>Price:</strong> {item.price || "N/A"}</p>
//                                 </div>
//                             </div>
//                         );
//                     })
//                 ) : (
//                     <p>No hotels found.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Hotels;


