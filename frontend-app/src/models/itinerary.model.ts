export type ReservationStatus = "pending" | "confirmed" | "cancelled";

export type ActivityType =
  | "food"
  | "hotel"
  | "beach"
  | "nightlife"
  | "nature"
  | "adventure"
  | "culture"
  | "shopping"
  | "transport"
  | "relaxation";

export interface ContactInfo {
  placeName?: string;
  phone?: string;
  whatsapp?: string;
  instagram?: string;
  website?: string;
}

export interface Booking {
  isReserved?: boolean;
  reservationStatus?: ReservationStatus;
  reservationReference?: string;
  reservedFor?: number;
  contactInfo?: ContactInfo;
}

export interface ItineraryActivity {
  _id?: string;
  time?: string;
  title: string;
  description?: string;
  imageUrl?: string;
  location?: string;
  region?: string;
  activityType?: ActivityType;
  estimatedPrice?: number;
  durationHours?: number;
  tags?: string[];
  placeId?: string;
  booking?: Booking;
}

export interface ItineraryDay {
  _id?: string;
  dayNumber: number;
  title: string;
  region?: string;
  estimatedDayPrice?: number;
  activities: ItineraryActivity[];
}

export interface ItineraryHotel {
  name?: string;
  location?: string;
  stars?: number;
  imageUrl?: string;
}

export interface ItineraryServices {
  driverIncluded?: boolean;
  tourGuideIncluded?: boolean;
  airportPickup?: boolean;
  vipAccess?: boolean;
}

export interface CostBreakdown {
  hotelCost?: number;
  foodCost?: number;
  transportCost?: number;
  activitiesCost?: number;
  totalCost?: number;
}

export interface ItineraryPreferences {
  travelParty?: string;
  ageRange?: string;
  month?: string;
  tripDays?: number;

  experiences?: string[];
  nightlifeVibes?: string[];

  foodPreferences?: string[];
  diningAtmosphere?: string;
  foodExplorationLevel?: string;

  comfortLevel?: string;
  stayType?: string;

  requestedServices?: string[];

  fullName?: string;
  email?: string;
  phone?: string;
}

export interface Itinerary {
  _id: string;

  title: string;
  slug?: string;

  sourceType: "experience" | "custom";

  coverImage?: string;
  summary?: string;

  durationDays?: number;
  estimatedTotalPrice?: number;

  categories?: string[];
  mainPlaces?: string[];

  hotel?: ItineraryHotel;
  services?: ItineraryServices;
  costBreakdown?: CostBreakdown;
  preferences?: ItineraryPreferences;

  days: ItineraryDay[];

  userId?: string;
  isPublished?: boolean;

  createdAt?: string;
  updatedAt?: string;
}

export interface ItineraryApiResponse {
  success: boolean;
  itinerary: Itinerary;
}

export interface ItinerariesApiResponse {
  success: boolean;
  itineraries: Itinerary[];
}