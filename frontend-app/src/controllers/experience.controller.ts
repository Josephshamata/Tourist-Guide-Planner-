import { useEffect, useState } from "react";
import type { Offer, OfferFilters } from "../models/offer.model";
import { getOffers } from "../services/offer.service";

export function useExperiencesController() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [filters, setFilters] = useState<OfferFilters>({
    type: "all",
    category: "all",
    search: "",
    sort: "recommended",
    page: 1,
    limit: 8,
  });

  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getOffers(filters);

        setOffers(response.data);
        setTotal(response.total || response.data.length);
        setTotalPages(response.totalPages || 1);
      } catch {
        setError("Could not load experiences");
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, [filters]);

  const updateFilter = (key: keyof OfferFilters, value: string | number) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      page: key === "page" ? Number(value) : 1,
    }));
  };

  return {
    offers,
    loading,
    error,
    filters,
    total,
    totalPages,
    updateFilter,
  };
}