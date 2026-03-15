import type { Offer } from "../models/offer.model";


const API_BASE_URL = "http://localhost:5000/api";

export async function getSignatureOffers(): Promise<Offer[]> {
  const response = await fetch(`${API_BASE_URL}/offers/signature`);

  if (!response.ok) {
    throw new Error("Failed to fetch signature offers");
  }

  return response.json();
}

export async function getPersonalityOffers(): Promise<Offer[]> {
  const response = await fetch(`${API_BASE_URL}/offers/personality`);

  if (!response.ok) {
    throw new Error("Failed to fetch personality offers");
  }

  return response.json();
}