import type { Offer } from "../models/offer.model";
import { apiRequest } from "./api";

export type OffersResponse = {
  success: boolean;
  count: number;
  total: number;
  currentPage: number;
  totalPages: number;
  data: Offer[];
};

export type OfferResponse = {
  success: boolean;
  data: Offer;
};

export type OfferFilters = {
  search?: string;
  category?: string;
  region?: string;
  minPrice?: string;
  maxPrice?: string;
  minDays?: string;
  maxDays?: string;
  sort?: string;
  page?: number;
  limit?: number;
};

const buildQuery = (filters: OfferFilters = {}) => {
  const params = new URLSearchParams();

  if (filters.search) {
    params.append("search", filters.search);
  }

  if (filters.category && filters.category !== "all") {
    params.append("category", filters.category);
  }

  if (filters.region && filters.region !== "All Regions") {
    params.append("region", filters.region);
  }

  if (filters.minPrice) {
    params.append("minPrice", filters.minPrice);
  }

  if (filters.maxPrice) {
    params.append("maxPrice", filters.maxPrice);
  }

  if (filters.minDays) {
    params.append("minDays", filters.minDays);
  }

  if (filters.maxDays) {
    params.append("maxDays", filters.maxDays);
  }

  if (filters.sort) {
    params.append("sort", filters.sort);
  }

  if (filters.page) {
    params.append("page", String(filters.page));
  }

  if (filters.limit) {
    params.append("limit", String(filters.limit));
  }

  const query = params.toString();

  return query ? `?${query}` : "";
};

export async function getOffers(
  filters: OfferFilters = {},
): Promise<OffersResponse> {
  const query = buildQuery(filters);

  return apiRequest<OffersResponse>(`/offers${query}`, {
    method: "GET",
  });
}

export async function getSignatureOffers(): Promise<Offer[]> {
  const response = await apiRequest<OffersResponse>("/offers/signature", {
    method: "GET",
  });

  return response.data;
}

export async function getPersonalityOffers(): Promise<Offer[]> {
  const response = await apiRequest<OffersResponse>("/offers/personality", {
    method: "GET",
  });

  return response.data;
}

export async function getOfferBySlug(slug: string): Promise<Offer> {
  const response = await apiRequest<OfferResponse>(`/offers/${slug}`, {
    method: "GET",
  });

  return response.data;
}
