import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from '../service/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import About from "./components/About";
import Hotels from "./components/Hotels";

function ViewTrip() {
    const { tripId } = useParams();
    const [trip, setTrip] = useState([])

    useEffect(() => {
        const fetchTripData = async () => {
            if (tripId) {
                await GetTripData();
            }
        };
        fetchTripData();
    }, [tripId]);


    const GetTripData = async () => {
        const docRef = doc(db, 'AITrips', tripId);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
            let tripData = docSnap.data();
            console.log("🔥 Firestore Data (Raw):", tripData);
    
            // If tripData is stored as a string, parse it dynamically
            if (typeof tripData.tripData === "string") {
                try {
                    tripData.tripData = JSON.parse(tripData.tripData);
                } catch (error) {
                    console.error("❌ Error parsing tripData:", error);
                    return;
                }
            }
    
            console.log("✅ Parsed tripData:", tripData);
            console.log("🔑 Available keys in tripData:", Object.keys(tripData.tripData));
    
            setTrip(tripData);
        } else {
            console.log("❌ No such document found");
            toast('No trip found!');
        }
    };
    
    
    
    

    return (
        <div>Viewing Trip ID: {tripId}

        {/*Information section/component*/}
        <About trip={trip} />

        {/*Recommended Hotels*/}
        <Hotels trip={trip}/>

        {/*Itineries 1/2/3/....*/}

        {/*Maps..........if needed */}

        {/*Footer */}
        
        
        </div>
    );
}

export default ViewTrip;



//as the dynamic route syntax did not work out directly in the folder 
// i.e view-trip/ [tripId],
//I created it inside the page directly over here with the trip id number mentioned 
//it is handling and routing as needed for a new id everytime 

