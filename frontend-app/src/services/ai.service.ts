import { apiRequest } from "./api";
import type { Itinerary } from "../models/itinerary.model";
import type { ItineraryPreferences } from "../models/itinerary.model";

type GenerateItineraryResponse = {
  success: boolean;
  message: string;
  itinerary: Itinerary;
};

export const generateAIItinerary = async (
  preferences: ItineraryPreferences
): Promise<Itinerary> => {
  const response = await apiRequest<GenerateItineraryResponse>(
    "/ai/generate-itinerary",
    {
      method: "POST",
      body: JSON.stringify({ preferences }),
    }
  );

  return response.itinerary;
};