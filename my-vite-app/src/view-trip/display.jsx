import { useParams } from "react-router-dom";

function ViewTrip() {
    const { tripId } = useParams();
    return <div>Viewing Trip ID: {tripId}</div>;
}

export default ViewTrip;
