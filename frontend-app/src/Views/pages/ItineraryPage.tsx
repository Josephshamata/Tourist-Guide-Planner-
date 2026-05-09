import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItineraryHero from "../itinerary/ItineraryHero";
import ItineraryTabs from "../itinerary/ItineraryTabs";
import TripDaysList from "../itinerary/TripDaysList";
import TripOverviewCard from "../itinerary/sidebar/TripOverviewCard";
import { apiRequest } from "../../services/api";
import type { Itinerary } from "../../models/itinerary.model";

type ActiveTab = "itinerary" | "inclusions" | "hotel" | "info";

type OfferWithItineraryResponse = {
  success: boolean;
  offer: {
    _id: string;
    title: string;
    slug: string;
    type: string;
    imageUrl: string;
    totalPrice: number;
    days: number;
    mainPlaces: string[];
    hotelName: string;
    categories: string[];
    itineraryId: Itinerary;
  };
};

export default function ItineraryPage() {
  const { slug } = useParams();

  const [activeTab, setActiveTab] = useState<ActiveTab>("itinerary");
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        if (!slug) return;

        const data = await apiRequest<OfferWithItineraryResponse>(
          `/offers/${slug}`
        );

        setItinerary(data.offer.itineraryId);
      } catch (error) {
        console.error("Failed to fetch itinerary:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItinerary();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--bg-light)]">
        <p className="text-lg font-semibold text-[var(--text-dark)]">
          Loading itinerary...
        </p>
      </div>
    );
  }

  if (!itinerary) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--bg-light)]">
        <p className="text-lg font-semibold text-[var(--text-dark)]">
          Itinerary not found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-light)]">
      <ItineraryHero
        title={itinerary.title}
        summary={itinerary.summary}
        durationDays={itinerary.durationDays}
        location={itinerary.mainPlaces?.[0] || "Lebanon"}
        category={itinerary.categories?.[0] || "Experience"}
        price={itinerary.estimatedTotalPrice || 0}
      />

      <ItineraryTabs activeTab={activeTab} onChange={setActiveTab} />

      <main className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-6 py-10 lg:grid-cols-[1fr_330px] xl:px-10">
        <section className="min-w-0">
          {activeTab === "itinerary" && (
            <TripDaysList
              itinerarySlug={slug || ""}
              days={itinerary.days || []}
            />
          )}

          {activeTab === "inclusions" && (
            <div className="rounded-[2rem] bg-white p-10 shadow-soft-red">
              <h2 className="text-3xl font-extrabold text-[var(--text-dark)]">
                Included Services
              </h2>

              <ul className="mt-8 space-y-4 text-lg text-[var(--text-dark)]/70">
                {itinerary.services?.airportPickup && <li>✔ Airport Pickup</li>}
                {itinerary.services?.driverIncluded && <li>✔ Private Driver</li>}
                {itinerary.services?.tourGuideIncluded && <li>✔ Tour Guide</li>}
                {itinerary.services?.vipAccess && <li>✔ VIP Access</li>}
              </ul>
            </div>
          )}

          {activeTab === "hotel" && (
            <div className="rounded-[2rem] bg-white p-10 shadow-soft-red">
              <h2 className="text-3xl font-extrabold text-[var(--text-dark)]">
                Hotel Stay
              </h2>

              <h3 className="mt-6 text-2xl font-bold text-[var(--text-dark)]">
                {itinerary.hotel?.name}
              </h3>

              <p className="mt-2 text-[var(--text-dark)]/60">
                {itinerary.hotel?.location}
              </p>

              <p className="mt-2 font-semibold text-[var(--primary)]">
                {itinerary.hotel?.stars} Stars
              </p>
            </div>
          )}

          {activeTab === "info" && (
            <div className="rounded-[2rem] bg-white p-10 shadow-soft-red">
              <h2 className="text-3xl font-extrabold text-[var(--text-dark)]">
                Important Information
              </h2>

              <p className="mt-6 text-[var(--text-dark)]/70">
                Booking confirmations and final reservation details will be
                shared with the traveler before the trip.
              </p>
            </div>
          )}
        </section>

        <aside className="lg:justify-self-end">
          <TripOverviewCard
            durationDays={itinerary.durationDays || 0}
            nights={(itinerary.durationDays || 1) - 1}
            mainPlaces={itinerary.mainPlaces || []}
            hotelName={itinerary.hotel?.name || "Hotel included"}
            hotelStars={itinerary.hotel?.stars || 0}
            groupSize={itinerary.preferences?.requestedServices ? 2 : 2}
            categories={itinerary.categories || []}
            hotelCost={itinerary.costBreakdown?.hotelCost || 0}
            foodCost={itinerary.costBreakdown?.foodCost || 0}
            transportCost={itinerary.costBreakdown?.transportCost || 0}
            activitiesCost={itinerary.costBreakdown?.activitiesCost || 0}
            totalCost={
              itinerary.costBreakdown?.totalCost ||
              itinerary.estimatedTotalPrice ||
              0
            }
          />
        </aside>
      </main>
    </div>
  );
}