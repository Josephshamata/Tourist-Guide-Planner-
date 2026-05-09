import { CalendarDays, History } from "lucide-react";

type TripStatsProps = {
  upcomingTrips: number;
  completedTrips: number;
};

export default function TripStats({
  upcomingTrips,
  completedTrips,
}: TripStatsProps) {
  return (
    <div className="flex gap-4">
      <div className="flex min-w-[220px] items-center gap-4 rounded-[1.5rem] bg-[var(--primary-10)] px-6 py-5 shadow-soft-red border border-[var(--primary-10)]">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[var(--primary)] shadow-sm">
          <CalendarDays size={28} />
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--text-dark)]/70">
            Upcoming Trips
          </p>

          <h3 className="mt-1 text-4xl font-extrabold text-[var(--text-dark)]">
            {upcomingTrips}
          </h3>

          <p className="text-sm text-[var(--text-dark)]/50">Confirmed</p>
        </div>
      </div>

      <div className="flex min-w-[220px] items-center gap-4 rounded-[1.5rem] bg-[var(--primary-10)] px-6 py-5 shadow-soft-red border border-[var(--primary-10)]">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[var(--primary)]">
          <History size={28} />
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--text-dark)]/70">
            Trips Completed
          </p>

          <h3 className="mt-1 text-4xl font-extrabold text-[var(--text-dark)]">
            {completedTrips}
          </h3>

          <p className="text-sm text-[var(--text-dark)]/50">In your history</p>
        </div>
      </div>
    </div>
  );
}