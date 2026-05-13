import { CalendarDays, ChevronRight } from "lucide-react";

import TripCard from "./TripCard";
import type { Booking } from "../../models/booking.model";

type UpcomingTripsSectionProps = {
  bookings: Booking[];
};

function formatDateRange(startDate?: string, endDate?: string) {
  if (!startDate || !endDate) return "Dates not selected";

  const start = new Date(startDate);
  const end = new Date(endDate);

  return `${start.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })} – ${end.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })}`;
}

export default function UpcomingTripsSection({
  bookings,
}: UpcomingTripsSectionProps) {
  return (
    <section className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-soft-red">
      <div className="mb-7 flex items-start justify-between gap-6">
        <div>
          <h2 className="flex items-center gap-3 text-2xl font-extrabold text-[var(--text-dark)]">
            <CalendarDays size={24} className="text-[var(--primary)]" />
            Upcoming Trips
          </h2>

          <p className="mt-2 text-sm text-[var(--text-dark)]/60">
            Trips you have booked and confirmed.
          </p>
        </div>

        <button className="hidden items-center gap-2 text-sm font-bold text-[var(--primary)] md:flex">
          View all upcoming
          <ChevronRight size={17} />
        </button>
      </div>

      {bookings.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-[var(--border)] bg-[var(--bg-light)] p-8 text-center">
          <h3 className="text-xl font-extrabold text-[var(--text-dark)]">
            No upcoming trips yet
          </h3>

          <p className="mt-2 text-sm text-[var(--text-dark)]/60">
            Book an experience and it will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {bookings.map((booking) => {
            const itinerary = booking.itineraryId;

            return (
              <TripCard
                key={booking.id}
                title={itinerary.title}
                location={itinerary.mainPlaces?.join(", ") || "Lebanon"}
                dateRange={formatDateRange(
                  booking.startDate,
                  booking.endDate
                )}
                days={itinerary.durationDays || 0}
                totalCost={booking.totalPrice || itinerary.estimatedTotalPrice || 0}
                slug={
                        itinerary.slug?.replace("-itinerary", "") || ""
                      }
                imageUrl={itinerary.coverImage || "/images/sunset.png"}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}