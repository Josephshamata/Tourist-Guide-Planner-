import type { ItineraryPreferences } from "./models/itinerary.model";


const STORAGE_KEY = "tripPlannerPreferences";

export const getTripPreferences = (): ItineraryPreferences => {
  const stored = localStorage.getItem(STORAGE_KEY);

  return stored ? JSON.parse(stored) : {};
};

export const saveTripPreferences = (
  data: Partial<ItineraryPreferences>
) => {
  const existing = getTripPreferences();

  const updated = {
    ...existing,
    ...data,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const clearTripPreferences = () => {
  localStorage.removeItem(STORAGE_KEY);
};