import { CalendarDays, MapPin, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

type TripCardProps = {
  title: string;
  location: string;
  dateRange: string;
  days: number;
  totalCost: number;
  slug: string;
  imageUrl: string;
};

export default function TripCard({
  title,
  location,
  dateRange,
  days,
  totalCost,
  slug,
  imageUrl,
}: TripCardProps) {
  const navigate = useNavigate();

  return (
    <article className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-soft-red">
      <div className="grid gap-0 lg:grid-cols-[340px_1fr]">
        
        {/* IMAGE */}
        <div className="h-full">
          <img
            src={imageUrl}
            alt={title}
            className="h-full min-h-[260px] w-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-between p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_220px]">
            
            {/* LEFT */}
            <div>
              <h3 className="text-4xl font-extrabold text-[var(--text-dark)]">
                {title}
              </h3>

              <div className="mt-5 flex flex-col gap-4 text-[15px] text-[var(--text-dark)]/65">
                <div className="flex items-center gap-3">
                  <MapPin
                    size={18}
                    className="text-[var(--primary)]"
                  />

                  {location}
                </div>

                <div className="flex items-center gap-3">
                  <CalendarDays
                    size={18}
                    className="text-[var(--primary)]"
                  />

                  {dateRange}
                </div>
              </div>

              <div className="mt-6">
                <span className="rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm font-bold text-[var(--primary)]">
                  {days} Days
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-start justify-between lg:items-end">
              <div className="rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
                ✓ Confirmed
              </div>

              <div className="mt-8 lg:text-right">
                <p className="text-sm text-[var(--text-dark)]/50">
                  Total Cost
                </p>

                <h4 className="mt-1 text-5xl font-extrabold text-[var(--primary)]">
                  ${totalCost}
                </h4>
              </div>

              <button
                type="button"
                onClick={() => navigate(`/experiences/${slug}`)}
                className="mt-8 flex items-center gap-2 rounded-full border border-[var(--primary)] px-6 py-4 text-sm font-bold text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
              >
                View Itinerary
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}