export type OfferType = "signature" | "personality";

export type Offer = {
  _id: string;
  title: string;
  slug: string;
  type: OfferType;
  imageUrl: string;
  totalPrice: number;
  days: number;
  mainPlaces: string[];
  hotelName: string;
  categories: string[];
  isPublished: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type OffersResponse = {
  success: boolean;
  count: number;
  total?: number;
  currentPage?: number;
  totalPages?: number;
  data: Offer[];
};

export type OfferResponse = {
  success: boolean;
  data: Offer;
};

export type OfferFilters = {
  type?: "all" | OfferType;
  category?: string;
  search?: string;
  sort?: "recommended" | "price-low" | "price-high" | "days-low" | "days-high";
  page?: number;
  limit?: number;
};