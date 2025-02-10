import { GoogleGenerativeAI } from "@google/generative-ai";

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

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: `Generate a travel plan for location: Las Vegas, for 3 days 
          for a couple with a cheap budget. 
          Give me a hotel options list with:
            - Hotel Name
            - Hotel Address
            - Price
            - Hotel Image URL
            - Geo Coordinates
            - Rating
            - Descriptions
          
          Also, suggest an itinerary with:
            - Place Name
            - Place Details
            - Place Image URL
            - Geo Coordinates
            - Ticket Pricing
            - Rating
            - Time to travel to each location
            
          Format everything in JSON format.`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `I cannot directly access and display images or real-time pricing 
          for hotels. Hotel prices are extremely dynamic and change constantly. 
          Also, I cannot provide geo coordinates directly. You'll need to use a map 
          service like Google Maps to obtain those after I provide addresses.

          This JSON response will therefore focus on textual information, and leave 
          the image URLs and geo coordinates for you to find using online search engines.
          
          {
            "tripName": "Las Vegas Budget Trip for Couples (3 Days)",
            "budget": "Cheap",
            "travelers": 2,
            "hotels": [
              {
                "hotelName": "Circus Circus Hotel & Casino",
                "hotelAddress": "2880 Las Vegas Blvd S, Las Vegas, NV 89109",
                "priceRange": "$$$ (Check online for current rates)",
                "hotelImageUrl": "Find on Google Images: Circus Circus Las Vegas",
                "rating": "3.5 stars (variable, check review sites)",
                "description": "A classic Vegas hotel with a circus theme, often 
                offering lower prices than others on the Strip."
              },
              {
                "hotelName": "Excalibur Hotel & Casino",
                "hotelAddress": "3850 Las Vegas Blvd S, Las Vegas, NV 89109",
                "priceRange": "$$$ (Check online for current rates)",
                "hotelImageUrl": "Find on Google Images: Excalibur Las Vegas",
                "rating": "3 stars (variable, check review sites)",
                "description": "A themed hotel with a medieval castle aesthetic, known 
                for its affordability and location on the Strip."
              }
            ],
            "itinerary": {
              "day1": [
                {
                  "placeName": "Fremont Street Experience",
                  "placeDetails": "Free walking area with live entertainment, zip lines, and a vibrant atmosphere.",
                  "placeImageUrl": "Find on Google Images: Fremont Street Experience",
                  "ticketPricing": "Free (unless doing zip line or other activities)",
                  "rating": "4 stars",
                  "travelTime": "30-60 minutes"
                }
              ]
            }
          }

          Remember to replace the placeholder image URLs with actual URLs you find 
          through online searches. Always check for the most up-to-date pricing 
          and hours of operation on the official websites of hotels and attractions 
          before your trip. Enjoy Las Vegas!`,
        },
      ],
    },
  ],
});
