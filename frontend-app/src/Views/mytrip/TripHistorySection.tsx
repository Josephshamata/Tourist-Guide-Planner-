import { ChevronRight, History } from "lucide-react";
import HistoryTripCard from "./HistoryTripCard";
import type { Booking } from "../../models/booking.model";

type TripHistorySectionProps = {
  bookings: Booking[];
};


export default function TripHistorySection({ bookings }: TripHistorySectionProps) {
  return (
    <section className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-soft-red">
      <div className="mb-7 flex items-start justify-between gap-6">
        <div>
          <h2 className="flex items-center gap-3 text-2xl font-extrabold text-[var(--text-dark)]">
            <History size={24} className="text-[var(--primary)]" />
            Trip History
          </h2>

          <p className="mt-2 text-sm text-[var(--text-dark)]/60">
            Trips you’ve completed in the past.
          </p>
        </div>

        <button className="hidden items-center gap-2 text-sm font-bold text-[var(--primary)] md:flex">
          View all history
          <ChevronRight size={17} />
        </button>
      </div>

      <div className="space-y-4">
       {bookings.map((booking) => (
  <HistoryTripCard
    key={booking.id}
    title={booking.itineraryId.title}
    location={booking.itineraryId.mainPlaces?.join(", ") || "Lebanon"}
    dateRange={`${booking.startDate} - ${booking.endDate}`}
    days={booking.itineraryId.durationDays || 0}
    totalCost={booking.totalPrice || 0}
    imageUrl={booking.itineraryId.coverImage || ""}
  />
))}
      </div>
    </section>
  );
}
         