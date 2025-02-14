import React from "react";
import { useNavigate } from "react-router-dom";
import { getTripPlan } from "../service/AI"; // Import AI service

const TripPlanner = () => {
  const navigate = useNavigate(); // ✅ Ensure navigate is in component

  const handlePlanTrip = async () => {
    const formData = {
      destination: "Paris",
      noOfDays: 5,
      travelWith: "Friends",
      budget: "Medium",
    };

    await getTripPlan(formData, navigate); // ✅ Pass navigate here
  };

  return (
    <button onClick={handlePlanTrip}>
      Plan My Trip
    </button>
  );
};

export default TripPlanner;

