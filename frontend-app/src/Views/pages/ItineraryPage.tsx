import { useState } from "react";

import ItineraryHero from "../itinerary/ItineraryHero";
import ItineraryTabs from "../itinerary/ItineraryTabs";
import TripDaysList from "../itinerary/TripDaysList";
import TripOverviewCard from "../itinerary/sidebar/TripOverviewCard";

type ActiveTab = "itinerary" | "inclusions" | "hotel" | "info";

export default function ItineraryPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("itinerary");

  return (
    <div className="min-h-screen bg-[var(--bg-light)]">
      <ItineraryHero
        title="The Socialite"
        summary="A luxury nightlife-focused experience in Beirut. Rooftops, beach clubs, fine dining and the best nightlife districts."
        durationDays={3}
        location="Beirut"
        category="Luxury Experience"
        price={590}
      />

      <ItineraryTabs activeTab={activeTab} onChange={setActiveTab} />

     <main className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-6 py-10 lg:grid-cols-[1fr_330px] xl:px-10">
  <section className="min-w-0">
    {activeTab === "itinerary" && (
      <TripDaysList itinerarySlug="the-socialite" />
    )}

    {activeTab === "inclusions" && (
      <div className="rounded-[2rem] bg-white p-10 shadow-soft-red">
        <h2 className="text-3xl font-extrabold text-[var(--text-dark)]">
          Included Services
        </h2>

        <ul className="mt-8 space-y-4 text-lg text-[var(--text-dark)]/70">
          <li>✔ VIP Airport Pickup</li>
          <li>✔ Luxury Hotel Stay</li>
          <li>✔ Private Driver Coordination</li>
          <li>✔ Beach Club Reservations</li>
          <li>✔ Rooftop Lounge Reservations</li>
          <li>✔ Nightlife VIP Access</li>
        </ul>
      </div>
    )}

    {activeTab === "hotel" && (
      <div className="rounded-[2rem] bg-white p-10 shadow-soft-red">
        <h2 className="text-3xl font-extrabold text-[var(--text-dark)]">
          Hotel Stay
        </h2>
      </div>
    )}

    {activeTab === "info" && (
      <div className="rounded-[2rem] bg-white p-10 shadow-soft-red">
        <h2 className="text-3xl font-extrabold text-[var(--text-dark)]">
          Important Information
        </h2>
      </div>
    )}
  </section>

<aside className="lg:justify-self-end">
  <TripOverviewCard
    durationDays={3}
    nights={2}
    mainPlaces={["Beirut", "Rooftops", "Nightlife Districts"]}
    hotelName="City Hotel Downtown"
    hotelStars={5}
    groupSize={2}
    categories={["nightlife", "city", "luxury"]}
    hotelCost={250}
    foodCost={120}
    transportCost={70}
    activitiesCost={150}
    totalCost={590}
  />
</aside>
</main>
    </div>
  );
}