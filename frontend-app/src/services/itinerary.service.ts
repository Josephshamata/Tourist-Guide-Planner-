import type { ItinerariesApiResponse, Itinerary, ItineraryApiResponse } from "../models/itinerary.model";
import { apiRequest } from "./api";



export const getAllItineraries = async (): Promise<Itinerary[]> => {
  const response = await apiRequest<ItinerariesApiResponse>(
    "/itineraries"
  );

  return response.itineraries;
};

export const getItineraryById = async (
  id: string
): Promise<Itinerary> => {
  const response = await apiRequest<ItineraryApiResponse>(
    `/itineraries/${id}`
  );

  return response.itinerary;
};

export const createItinerary = async (
  itineraryData: Partial<Itinerary>
): Promise<Itinerary> => {
  const response = await apiRequest<ItineraryApiResponse>(
    "/itineraries",
    {
      method: "POST",

      body: JSON.stringify(itineraryData),
    }
  );

  return response.itinerary;
};