import { Calendar, MapPin, Star } from "lucide-react";
import PriceCard from "./PriceCard";

type ItineraryHeroProps = {
  title: string;
  summary?: string;
  durationDays?: number;
  location?: string;
  category?: string;
  price?: number;
  onBook?: () => void;
  bookingLoading?: boolean;
  alreadyBooked?: boolean;
};

export default function ItineraryHero({
  title,
  summary,
  durationDays,
  location,
  category,
  price,
  onBook,
  bookingLoading,
  alreadyBooked
}: ItineraryHeroProps) {
  return (
    <section className="relative min-h-[290px] overflow-hidden bg-[var(--bg-light)]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("/images/sunset.png")`,
        }}
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/5" />

     <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-light)] via-[rgba(248,245,245,0.45)] to-transparent" />
<div className="absolute inset-0 bg-gradient-to-t from-[rgba(248,245,245,0.45)] via-transparent to-transparent" />
      {/* Content */}
<div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-10 px-6 py-8 lg:grid-cols-[1fr_340px] xl:px-10">        {/* Left */}
        <div className="max-w-2xl">
          <span className="mb-3 inline-flex rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[var(--primary)]">
            Experience
          </span>

          <h1 className="text-5xl font-extrabold leading-none text-[var(--text-dark)]">
            {title}
          </h1>

          {summary && (
            <p className="mt-4 max-w-xl text-[15px] leading-6 text-[var(--text-dark)]/70">
              {summary}
            </p>
          )}

          {/* Meta */}
          <div className="mt-6 flex flex-wrap gap-8 text-sm font-semibold text-[var(--text-dark)]">
            <div className="flex items-center gap-2">
              <Calendar
                size={17}
                className="text-[var(--primary)]"
              />

              <span>{durationDays} Days</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin
                size={17}
                className="text-[var(--primary)]"
              />

              <span>{location}</span>
            </div>

            <div className="flex items-center gap-2">
              <Star
                size={17}
                className="text-[var(--primary)]"
              />

              <span>{category}</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <PriceCard price={price || 0} onBook={onBook} alreadyBooked={alreadyBooked} />
      </div>
    </section>
  );
}