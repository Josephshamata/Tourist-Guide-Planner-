import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
    itineraryId: Itinerary;
  };
};

type BookingCheckResponse = {
  success: boolean;
  alreadyBooked: boolean;
};

export default function ItineraryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<ActiveTab>("itinerary");
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [alreadyBooked, setAlreadyBooked] = useState(false);

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        if (!slug) return;

        const data = await apiRequest<OfferWithItineraryResponse>(
          `/offers/${slug}`
        );

        const fetchedItinerary = data.offer.itineraryId;
        setItinerary(fetchedItinerary);

        if (fetchedItinerary?._id) {
          const bookingCheck = await apiRequest<BookingCheckResponse>(
            `/bookings/check/${fetchedItinerary._id}`
          );

          setAlreadyBooked(bookingCheck.alreadyBooked);
        }
      } catch (error) {
        console.error("Failed to fetch itinerary:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItinerary();
  }, [slug]);

  const handleBookExperience = async () => {
    if (!itinerary?._id || alreadyBooked) return;

    try {
      setBookingLoading(true);

      await apiRequest("/bookings", {
        method: "POST",
        body: JSON.stringify({
          itineraryId: itinerary._id,
          startDate: itinerary.startDate,
          endDate: itinerary.endDate,
          guests: 2,
        }),
      });

      setAlreadyBooked(true);
      navigate("/my-trip");
    } catch (error) {
      console.error("Failed to book experience:", error);
      alert(error instanceof Error ? error.message : "Failed to book experience");
    } finally {
      setBookingLoading(false);
    }
  };

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
        onBook={handleBookExperience}
        bookingLoading={bookingLoading}
        alreadyBooked={alreadyBooked}
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

                {!itinerary.services?.airportPickup &&
                  !itinerary.services?.driverIncluded &&
                  !itinerary.services?.tourGuideIncluded &&
                  !itinerary.services?.vipAccess && (
                    <li>No included services listed.</li>
                  )}
              </ul>
            </div>
          )}

          {activeTab === "hotel" && (
            <div className="rounded-[2rem] bg-white p-10 shadow-soft-red">
              <h2 className="text-3xl font-extrabold text-[var(--text-dark)]">
                Hotel Stay
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-[320px_1fr]">
                {itinerary.hotel?.imageUrl && (
                  <img
                    src={itinerary.hotel.imageUrl}
                    alt={itinerary.hotel?.name || "Hotel"}
                    className="h-72 w-full rounded-3xl object-cover"
                  />
                )}

                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-dark)]">
                    {itinerary.hotel?.name || "Hotel included"}
                  </h3>

                  <p className="mt-3 leading-8 text-[var(--text-dark)]/60">
                    {itinerary.hotel?.location || "Lebanon"}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {itinerary.hotel?.stars && (
                      <span className="rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--primary)]">
                        {itinerary.hotel.stars} Stars
                      </span>
                    )}

                    {itinerary.hotel?.location && (
                      <span className="rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--primary)]">
                        {itinerary.hotel.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "info" && (
            <div className="rounded-[2rem] bg-white p-10 shadow-soft-red">
              <h2 className="text-3xl font-extrabold text-[var(--text-dark)]">
                Important Information
              </h2>

              <div className="mt-8 space-y-6 text-[var(--text-dark)]/70">
                <p>• Final booking confirmation will be sent to the traveler.</p>
                <p>• Some reservations may remain pending until the place confirms.</p>
                <p>• Estimated costs may vary slightly depending on availability.</p>
                <p>• Partner contacts are shown inside each day’s activity details.</p>
              </div>
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
            groupSize={2}
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