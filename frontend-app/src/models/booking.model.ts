import type { Itinerary } from "./itinerary.model";

export type TripStatus = "upcoming" | "completed" | "cancelled";
export type BookingStatus = "pending" | "confirmed" | "cancelled";

export interface Booking {
  id: string;
  userId: string;
  itineraryId: Itinerary;

  tripStatus: TripStatus;
  bookingStatus: BookingStatus;

  startDate?: string;
  endDate?: string;

  guests?: number;
  totalPrice?: number;

  createdAt?: string;
  updatedAt?: string;
}

export interface MyBookingsResponse {
  success: boolean;
  upcomingTrips: Booking[];
  completedTrips: Booking[];
}