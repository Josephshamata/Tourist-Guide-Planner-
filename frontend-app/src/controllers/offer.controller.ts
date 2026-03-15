import { useEffect, useState } from "react";
import type { Offer } from "../models/offer.model";
import { getPersonalityOffers, getSignatureOffers } from "../services/offer.service";

export function useSignatureOffersController() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const data = await getSignatureOffers();
        setOffers(data);
      } catch (err) {
        setError("Could not load signature offers");
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  return { offers, loading, error };
}

export function usePersonalityOffersController() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const data = await getPersonalityOffers();
        setOffers(data);
      } catch (err) {
        setError("Could not load personality offers");
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  return { offers, loading, error };
}