import { useEffect, useState } from "react";
import {
  getItineraryById,
  getAllItineraries,
  createItinerary,
} from "../services/itinerary.service";
import type { Itinerary } from "../models/itinerary.model";

export const useItineraryById = (id?: string) => {
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!id) return;

    const fetchItinerary = async () => {
      try {
        setLoading(true);
        const data = await getItineraryById(id);
        setItinerary(data);
      } catch (err) {
        setError("Failed to fetch itinerary");
      } finally {
        setLoading(false);
      }
    };

    fetchItinerary();
  }, [id]);

  return {
    itinerary,
    loading,
    error,
  };
};

export const useAllItineraries = () => {
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        setLoading(true);
        const data = await getAllItineraries();
        setItineraries(data);
      } catch (err) {
        setError("Failed to fetch itineraries");
      } finally {
        setLoading(false);
      }
    };

    fetchItineraries();
  }, []);

  return {
    itineraries,
    loading,
    error,
  };
};

export const useCreateItinerary = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleCreateItinerary = async (
    itineraryData: Partial<Itinerary>
  ): Promise<Itinerary | null> => {
    try {
      setLoading(true);
      setError("");

      const itinerary = await createItinerary(itineraryData);
      return itinerary;
    } catch (err) {
      setError("Failed to create itinerary");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    create: handleCreateItinerary,
    loading,
    error,
  };
};