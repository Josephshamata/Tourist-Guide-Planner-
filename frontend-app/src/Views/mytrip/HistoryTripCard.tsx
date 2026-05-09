import { CalendarDays, CheckCircle2, MapPin } from "lucide-react";

type HistoryTripCardProps = {
  title: string;
  location: string;
  dateRange: string;
  days: number;
  totalCost: number;
  imageUrl: string;
};

export default function HistoryTripCard({
  title,
  location,
  dateRange,
  days,
  totalCost,
  imageUrl,
}: HistoryTripCardProps) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-white p-4 shadow-sm">
      <div className="grid items-center gap-5 md:grid-cols-[190px_1fr_240px_140px_160px]">
        <img
          src={imageUrl}
          alt={title}
          className="h-24 w-full rounded-xl object-cover"
        />

        <div>
          <h3 className="text-lg font-extrabold text-[var(--text-dark)]">
            {title}
          </h3>

          <p className="mt-2 flex items-center gap-2 text-sm text-[var(--text-dark)]/60">
            <MapPin size={15} className="text-[var(--primary)]" />
            {location}
          </p>
        </div>

        <p className="flex items-center gap-2 text-sm text-[var(--text-dark)]/60">
          <CalendarDays size={15} className="text-[var(--primary)]" />
          {dateRange}
        </p>

        <span className="w-fit rounded-full bg-[var(--accent-soft)] px-4 py-1 text-xs font-bold text-[var(--primary)]">
          {days} Days
        </span>

        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-[var(--text-dark)]/50">
              Total Cost
            </p>

            <p className="text-lg font-extrabold text-[var(--text-dark)]">
              ${totalCost}
            </p>
          </div>

          <span className="flex items-center gap-1 rounded-full bg-[var(--bg-light)] px-3 py-1 text-xs font-bold text-[var(--text-dark)]/50">
            <CheckCircle2 size={14} />
            Completed
          </span>
        </div>
      </div>
    </article>
  );
}