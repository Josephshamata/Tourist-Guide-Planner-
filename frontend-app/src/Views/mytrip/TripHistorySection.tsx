import { ChevronRight, History } from "lucide-react";
import HistoryTripCard from "./HistoryTripCard";

export default function TripHistorySection() {
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
        <HistoryTripCard
          title="Batroun Coastal Escape"
          location="Batroun, Lebanon"
          dateRange="Mar 2 – Mar 4, 2025"
          days={3}
          totalCost={520}
          imageUrl="/images/batroun.png"
        />

        <HistoryTripCard
          title="Bekaa Wine Weekend"
          location="Bekaa, Lebanon"
          dateRange="Jan 15 – Jan 17, 2025"
          days={3}
          totalCost={390}
          imageUrl="/images/wine.png"
        />
      </div>
    </section>
  );
}