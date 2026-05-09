import { CalendarDays, ChevronRight, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

type TripCardProps = {
  title: string;
  location: string;
  dateRange: string;
  days: number;
  totalCost: number;
  imageUrl: string;
  slug: string;
};

export default function TripCard({
  title,
  location,
  dateRange,
  days,
  totalCost,
  imageUrl,
  slug,
}: TripCardProps) {
  const navigate = useNavigate();

  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-white shadow-sm transition hover:shadow-soft-red">
      <div className="grid gap-5 md:grid-cols-[320px_1fr_170px_210px]">
        <img
          src={imageUrl}
          alt={title}
          className="h-44 w-full object-cover md:h-full"
        />

        <div className="p-6 md:px-2">
          <h3 className="text-2xl font-extrabold text-[var(--text-dark)]">
            {title}
          </h3>

          <p className="mt-3 flex items-center gap-2 text-sm font-medium text-[var(--text-dark)]/60">
            <MapPin size={16} className="text-[var(--primary)]" />
            {location}
          </p>

          <p className="mt-5 flex items-center gap-2 text-sm font-medium text-[var(--text-dark)]/60">
            <CalendarDays size={16} className="text-[var(--primary)]" />
            {dateRange}
          </p>

          <span className="mt-5 inline-flex rounded-full bg-[var(--accent-soft)] px-4 py-1 text-xs font-bold text-[var(--primary)]">
            {days} Days
          </span>
        </div>

        <div className="flex flex-col justify-center px-6 md:px-2">
          <span className="w-fit rounded-full bg-green-50 px-4 py-1 text-sm font-bold text-green-700">
            ✓ Confirmed
          </span>

          <p className="mt-6 text-sm text-[var(--text-dark)]/50">
            Total Cost
          </p>

          <p className="mt-1 text-3xl font-extrabold text-[var(--primary)]">
            ${totalCost}
          </p>
        </div>

        <div className="flex items-center p-6">
          <button
            onClick={() => navigate(`/experiences/${slug}`)}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-[var(--primary)] px-5 py-3 text-sm font-bold text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
          >
            View Itinerary
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </article>
  );
}