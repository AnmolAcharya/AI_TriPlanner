import { useParams } from "react-router-dom";

function ViewTrip() {
    const { tripId } = useParams();
    return <div>Viewing Trip ID: {tripId}</div>; 
}

export default ViewTrip;


//as the dynamic route syntax did not work out directly in the folder 
// i.e view-trip/ [tripId],
//I created it inside the page directly over here with the trip id number mentioned 
//it is handling and routing as needed for a new id everytime 
 