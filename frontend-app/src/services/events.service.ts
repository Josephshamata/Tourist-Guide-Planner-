import type { EventItem } from "../models/event.model";

const API_BASE_URL = "http://localhost:5000/api";

export async function getEvents(): Promise<EventItem[]> {
  const response = await fetch(`${API_BASE_URL}/events`);

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  return response.json();
}