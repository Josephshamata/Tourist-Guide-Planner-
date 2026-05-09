import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { apiRequest } from "../../services/api";
import type { Itinerary, ItineraryDay } from "../../models/itinerary.model";


import DayHeaderCard from "../itinerary/days/DayHeaderCard";
import DaySummaryCard from "../itinerary/days/DaySummaryCard";
import DayActivityTimeline from "../itinerary/days/DayActivityTimeline";
import DayBreadcrumb from "../itinerary/days/DayBreadCrumb";

type OfferWithItineraryResponse = {
  success: boolean;
  offer: {
    title: string;
    slug: string;
    itineraryId: Itinerary;
  };
};

export default function ItineraryDayPage() {
  const { slug, dayNumber } = useParams();

  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [day, setDay] = useState<ItineraryDay | null>(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchDay = async () => {
      try {
        if (!slug || !dayNumber) return;

        const data = await apiRequest<OfferWithItineraryResponse>(
          `/offers/${slug}`
        );

        const fetchedItinerary = data.offer.itineraryId;
        const selectedDay = fetchedItinerary.days.find(
  (item) => item.dayNumber === Number(dayNumber)
);

        setItinerary(fetchedItinerary);
        setDay(selectedDay || null);
      } catch (error) {
        console.error("Failed to fetch day:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDay();
  }, [slug, dayNumber]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--bg-light)]">
        <p className="font-semibold text-[var(--text-dark)]">
          Loading day details...
        </p>
      </div>
    );
  }

  if (!itinerary || !day) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--bg-light)]">
        <p className="font-semibold text-[var(--text-dark)]">
          Day not found.
        </p>
      </div>
    );
  }

  const totalDuration =
    day.activities?.reduce(
      (sum, activity) => sum + (activity.durationHours || 0),
      0
    ) || 0;

  function fetchDay(): void {
    throw new Error("Function not implemented.");
  }
  

  return (
    <div className="min-h-screen bg-[var(--bg-light)]">
      <main className="mx-auto max-w-[1500px] px-6 py-10 xl:px-10">
        <DayBreadcrumb
          tripName={itinerary.title}
          itinerarySlug={slug || ""}
          dayNumber={day.dayNumber}
          source="experience"
        />

        <DayHeaderCard
          imageUrl={day.activities?.[0]?.imageUrl || itinerary.coverImage || "/images/sunset.png"}
          tripName={itinerary.title}
          dayNumber={day.dayNumber}
          title={day.title}
          region={day.region || "Lebanon"}
          durationLabel={`${itinerary.durationDays || 1} Days Itinerary`}
          estimatedCost={day.estimatedDayPrice || 0}
        />

        <DaySummaryCard
          description={`This day includes ${day.activities?.length || 0} curated experiences across ${day.region || "Lebanon"}.`}
          totalActivities={day.activities?.length || 0}
          totalDuration={totalDuration}
        />

        <DayActivityTimeline
  itineraryId={itinerary._id}
  onRefresh={fetchDay}
  activities={(day.activities || []).map((activity) => ({
    activityId: activity._id || "",
    time: activity.time || "",
    title: activity.title,
    description: activity.description || "",
    imageUrl: activity.imageUrl || "/images/sunset.png",
    location: activity.location || "Lebanon",
    region: activity.region,
    durationHours: activity.durationHours || 0,
    activityType: activity.activityType || "Experience",
    estimatedPrice: activity.estimatedPrice || 0,
    reservationReference: activity.booking?.reservationReference || "N/A",
    reservationStatus: activity.booking?.reservationStatus || "pending",
    reservedFor: activity.booking?.reservedFor || 2,
    placeName: activity.booking?.contactInfo?.placeName || activity.title,
    phone: activity.booking?.contactInfo?.phone || "Not available",
    whatsapp: activity.booking?.contactInfo?.whatsapp,
    instagram: activity.booking?.contactInfo?.instagram,
    website: activity.booking?.contactInfo?.website,
    meetingPoint: activity.location || "Meeting point to be confirmed",
    note: "Final confirmation will be shared before the trip.",
  }))}
/>
      </main>
    </div>
  );
}