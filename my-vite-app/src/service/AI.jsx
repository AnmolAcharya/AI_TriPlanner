import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { AI_PROMPT } from "./AIPrompt";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig.jsx"; // ✅ Ensure `db` is imported

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

// 🔹 Function to generate a formatted prompt with user input
export const generatePrompt = (formData) => {
  if (!formData?.destination || !formData?.noOfDays || !formData?.travelWith || !formData?.budget) {
    console.error("Missing required trip information.");
    return null;
  }

  return AI_PROMPT
    .replace("{location}", formData.destination)
    .replace("{totalDays}", formData.noOfDays)
    .replace("{traveler}", formData.travelWith)
    .replace("{budget}", formData.budget);
};

// 🔹 Function to send the generated prompt to the AI model
export const getTripPlan = async (formData) => {
  const finalPrompt = generatePrompt(formData);
  
  if (!finalPrompt) {
    return { error: "Invalid trip details. Please complete all fields." };
  }

  try {
    console.log("🚀 Sending Prompt to AI: ", finalPrompt);

    const chatSession = model.startChat({
      generationConfig,
      history: [{ role: "user", parts: [{ text: finalPrompt }] }],
    });

    const result = await chatSession.sendMessage(finalPrompt);
    const responseText = await result.response.text();

    console.log("🤖 AI Response: ", responseText);

    // ✅ Save the AI-generated trip plan in Firebase
    await SaveAiTrip(formData, responseText);

    return responseText;
  } catch (error) {
    console.error("❌ Error in AI Model:", error);
    return { error: "Failed to generate trip. Please try again later." };
  }
};

// 🔹 Function to Save AI-generated Trip to Firebase
const SaveAiTrip = async (formData, TripData) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user?.email) {
      console.error("User not logged in.");
      return;
    }

    const docId = Date.now().toString(); // Unique ID for each trip

    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: TripData,
      userEmail: user.email,
      id: docId,
      createdAt: new Date(),
    });

    console.log("✅ Trip saved to Firestore:", docId);
  } catch (error) {
    console.error("❌ Error saving trip:", error);
  }
};


/////////////////////////firebase contents  //feb14 commits - valentines day big dawg 

// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { AI_PROMPT } from "./AIPrompt"; // ✅ Fixed import path
// import { doc, setDoc } from "firebase/firestore";

// const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const [loading,setLoading]=useState(false);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: "application/json",
// };

// // 🔹 Function to generate a formatted prompt with user input
// export const generatePrompt = (formData) => {
//   if (!formData?.destination || !formData?.noOfDays || !formData?.travelWith || !formData?.budget) {
//     console.error("Missing required trip information.");
//     setLoading(true);
//     return null;
//   }

//   return AI_PROMPT
//     .replace("{location}", formData.destination)
//     .replace("{totalDays}", formData.noOfDays)
//     .replace("{traveler}", formData.travelWith)
//     .replace("{budget}", formData.budget);

//     // setLoading(false);
//     // SaveAiTrip(result?.response?.text())
// };

// // 🔹 Function to send the generated prompt to the AI model
// export const getTripPlan = async (formData) => {
//   const finalPrompt = generatePrompt(formData);
  
//   if (!finalPrompt) {
//     return { error: "Invalid trip details. Please complete all fields." };
//   }

//   try {
//     console.log("🚀 Sending Prompt to AI: ", finalPrompt); // ✅ Log Prompt for Debugging
    
//     const chatSession = model.startChat({
//       generationConfig,
//       history: [{ role: "user", parts: [{ text: finalPrompt }] }],
//     });

//     const result = await chatSession.sendMessage(finalPrompt);
//     const responseText = await result.response.text();

//     console.log("🤖 AI Response: ", responseText); // ✅ Log AI Response
//     return responseText;
//   } catch (error) {
//     console.error("❌ Error in AI Model:", error);
//     return { error: "Failed to generate trip. Please try again later." };
//   }
// };
