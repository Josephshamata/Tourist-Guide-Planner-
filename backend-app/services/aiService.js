const { GoogleGenAI } = require("@google/genai");

const Hotel = require("../models/Hotel");
const Restaurant = require("../models/Restaurant");
const Activity = require("../models/Activity");
const Event = require("../models/events");
const Nightlife = require("../models/Nightlife");
const TransportService = require("../models/TransportService");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const cleanAIJson = (text) => {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
};

exports.generateTripWithAI = async (preferences) => {
  const hotels = await Hotel.find({ isPublished: true }).limit(8).lean();

  const restaurants = await Restaurant.find({ isPublished: true })
    .limit(10)
    .lean();

  const activities = await Activity.find({ isPublished: true })
    .limit(15)
    .lean();

  const events = await Event.find({ isPublished: true }).limit(8).lean();

  const nightlife = await Nightlife.find({ isPublished: true })
    .limit(8)
    .lean();

  const transportServices = await TransportService.find({
    isPublished: true,
  })
    .limit(5)
    .lean();

  const tourismData = {
    hotels,
    restaurants,
    activities,
    events,
    nightlife,
    transportServices,
  };

  const prompt = `
You are an AI travel planner for a Lebanon tourism platform.

Use ONLY the provided tourism data.
Do NOT invent hotels, restaurants, activities, nightlife places, events, or transport services.

User preferences:
${JSON.stringify(preferences)}

Available tourism data:
${JSON.stringify(tourismData)}

Generate a Lebanon itinerary as valid JSON only.

Rules:
- durationDays must match user tripDays if provided.
- Choose hotel from provided hotels.
- Choose activities/restaurants/nightlife/events only from provided data.
- estimatedTotalPrice should be realistic.
- No markdown.
- No explanation.

Return this exact JSON structure:
{
  "title": "string",
  "sourceType": "custom",
  "summary": "string",
  "durationDays": number,
  "estimatedTotalPrice": number,
  "categories": ["string"],
  "mainPlaces": ["string"],
  "hotel": {
    "name": "string",
    "location": "string",
    "stars": number,
    "imageUrl": "string"
  },
  "services": {
    "driverIncluded": boolean,
    "tourGuideIncluded": boolean,
    "airportPickup": boolean,
    "vipAccess": boolean
  },
  "costBreakdown": {
    "hotelCost": number,
    "foodCost": number,
    "transportCost": number,
    "activitiesCost": number,
    "totalCost": number
  },
  "days": [
    {
      "dayNumber": number,
      "title": "string",
      "region": "string",
      "estimatedDayPrice": number,
      "activities": [
        {
          "time": "string",
          "title": "string",
          "description": "string",
          "imageUrl": "string",
          "location": "string",
          "region": "string",
          "activityType": "culture",
          "estimatedPrice": number,
          "durationHours": number,
          "tags": ["string"],
          "booking": {
            "isReserved": false,
            "reservationStatus": "pending",
            "reservedFor": 2,
            "contactInfo": {
              "placeName": "string",
              "phone": "",
              "whatsapp": "",
              "instagram": "",
              "website": ""
            }
          }
        }
      ]
    }
  ]
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text;
  const cleaned = cleanAIJson(text);

  return JSON.parse(cleaned);
};