import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from '../service/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

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

    // Used to get trip information from Firebase 
    const GetTripData = async () => {
        // if (!tripId) {
        //     toast('Invalid trip ID!');
        //     return;
        // }

        const docRef = doc(db, 'AITrips', tripId); // Read data
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document:", docSnap.data());
            setTrip(docSnap.data())
        } else {
            console.log("No such document");
            toast('No trip found!');
        }
    };

    return (
        <div>Viewing Trip ID: {tripId}

        {/*Information section/component*/}
        {/*Recommended Hotels*/}
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

