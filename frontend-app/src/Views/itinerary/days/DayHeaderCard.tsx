import { CalendarDays, MapPin } from "lucide-react";

type DayHeaderCardProps = {
  imageUrl: string;
  tripName: string;
  dayNumber: number;
  title: string;
  region: string;
  durationLabel: string;
  estimatedCost: number;
};

export default function DayHeaderCard({
  imageUrl,
  tripName,
  dayNumber,
  title,
  region,
  durationLabel,
  estimatedCost,
}: DayHeaderCardProps) {
  return (
    <section className="rounded-[1.5rem] border border-[var(--border)] bg-white p-5 shadow-soft-red">
      <div className="grid items-center gap-6 md:grid-cols-[280px_1fr_240px]">
        <img
          src={imageUrl}
          alt={title}
          className="h-36 w-full rounded-2xl object-cover"
        />

        <div>
          <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-bold text-[var(--primary)]">
            {tripName}
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-[var(--text-dark)]">
            Day {dayNumber}
          </h1>

          <h2 className="mt-2 text-2xl font-extrabold text-[var(--text-dark)]">
            {title}
          </h2>

          <div className="mt-5 flex flex-wrap gap-6 text-sm font-medium text-[var(--text-dark)]/65">
            <span className="flex items-center gap-2">
              <MapPin size={17} className="text-[var(--primary)]" />
              Region: {region}
            </span>

            <span className="flex items-center gap-2">
              <CalendarDays size={17} className="text-[var(--primary)]" />
              {durationLabel}
            </span>
          </div>
        </div>

        <div className="hidden h-24 border-l border-[var(--border)] md:block">
          <div className="flex h-full flex-col justify-center pl-12">
            <p className="text-sm font-bold text-[var(--text-dark)]">
              Estimated Cost
            </p>

            <p className="mt-2 text-4xl font-extrabold text-[var(--primary)]">
              ${estimatedCost}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}