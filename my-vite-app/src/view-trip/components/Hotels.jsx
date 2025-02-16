import React from 'react';

function Hotels({ trip }) {
    console.log("🔍 Full tripData:", trip?.tripData);
    console.log("📂 Checking tripData.travelPlan:", trip?.tripData?.travelPlan);
    console.log("🏨 Checking hotels in travelPlan:", trip?.tripData?.travelPlan?.hotels);

    // Extract hotels from the correct location
    const hotels = trip?.tripData?.travelPlan?.hotels || [];

    return (
        <div>
            <h2>Hotel Recommendations</h2>

            <div>
                {hotels.length > 0 ? (
                    hotels.map((item, index) => {
                        console.log(`📸 Hotel ${index} Data:`, item); // Log each hotel's data
                        
                        return (
                            <div key={index} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px", borderRadius: "8px" }}>
                                {/* Hotel Image */}
                                <img 
                                    src={item.image || "/highq.jpg"}  
                                    alt={item.name || `Hotel ${index}`} 
                                    style={{ width: "250px", height: "150px", objectFit: "cover", borderRadius: "8px" }} 
                                    onError={(e) => { e.target.src = "/highq.jpg"; }} // Fallback if image is broken
                                />

                                {/* Hotel Name */}
                                <h3 style={{ marginTop: "10px" }}>{item.name || `Hotel ${index}`}</h3>

                                {/* Hotel Price */}
                                <p><strong>Price:</strong> {item.price || "N/A"}</p>
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
