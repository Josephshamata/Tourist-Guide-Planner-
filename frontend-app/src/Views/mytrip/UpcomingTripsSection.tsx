import { CalendarDays, ChevronRight } from "lucide-react";
import TripCard from "./TripCard";

export default function UpcomingTripsSection() {
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

      <div className="space-y-5">
        <TripCard
          title="The Socialite"
          location="Beirut, Lebanon"
          dateRange="May 24 – May 26, 2025"
          days={3}
          totalCost={600}
          slug="the-socialite"
          imageUrl="/images/sunset.png"
        />

        <TripCard
          title="Cedars Adventure Weekend"
          location="Bcharre, Lebanon"
          dateRange="Jun 10 – Jun 12, 2025"
          days={3}
          totalCost={430}
          slug="cedars-adventure-weekend"
          imageUrl="/images/cedars.png"
        />
      </div>
    </section>
  );
}