import { apiRequest } from "./api";

import type { MyBookingsResponse } from "../models/booking.model";
export const getMyBookings = async (): Promise<MyBookingsResponse> => {
  return apiRequest<MyBookingsResponse>("/bookings/my-bookings");
};