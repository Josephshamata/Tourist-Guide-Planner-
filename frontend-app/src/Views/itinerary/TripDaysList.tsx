import { CalendarDays, ChevronRight, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

type TripDay = {
  dayNumber: number;
  title: string;
  region: string;
  estimatedDayPrice: number;
  activitiesCount: number;
  summary: string;
};

type TripDaysListProps = {
  itinerarySlug: string;
};

const tripDays: TripDay[] = [
  {
    dayNumber: 1,
    title: "Arrival & Rooftop Sunset",
    region: "Beirut",
    estimatedDayPrice: 180,
    activitiesCount: 2,
    summary:
      "Start your experience with a smooth airport pickup, hotel arrival, and a premium sunset rooftop lounge in Beirut.",
  },
  {
    dayNumber: 2,
    title: "Beach Club & Beirut Nightlife",
    region: "Beirut",
    estimatedDayPrice: 240,
    activitiesCount: 2,
    summary:
      "Spend the day at a luxury beach club before enjoying VIP nightlife access in one of Beirut’s most energetic districts.",
  },
  {
    dayNumber: 3,
    title: "Brunch & Departure",
    region: "Beirut",
    estimatedDayPrice: 170,
    activitiesCount: 2,
    summary:
      "End the trip with a stylish rooftop brunch, relaxed city moments, and a private transfer back to the airport.",
  },
];

export default function TripDaysList({ itinerarySlug }: TripDaysListProps) {
  const navigate = useNavigate();

  return (
    <section className="w-full rounded-[2rem] bg-white p-8 shadow-soft-red">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-[var(--text-dark)]">
          Full Trip Itinerary
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-dark)]/60">
          A quick overview of each day. Open a day to view the full schedule,
          booking details, contacts, and reservation status.
        </p>
      </div>

      <div className="space-y-6">
        {tripDays.map((day) => (
          <article
            key={day.dayNumber}
            className="grid gap-6 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--primary-20)] hover:shadow-soft-red md:grid-cols-[90px_1fr_190px]"
          >
            <div className="flex justify-start md:justify-center">
              <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-soft-red">
                <span className="text-[10px] font-bold uppercase leading-none">
                  Day
                </span>
                <span className="text-2xl font-extrabold leading-none">
                  {day.dayNumber}
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-[var(--text-dark)]">
                {day.title}
              </h3>

              <div className="mt-2 flex flex-wrap gap-5 text-sm text-[var(--text-dark)]/55">
                <span className="flex items-center gap-1.5">
                  <MapPin size={15} className="text-[var(--primary)]" />
                  {day.region}
                </span>

                <span className="flex items-center gap-1.5">
                  <CalendarDays size={15} className="text-[var(--primary)]" />
                  {day.activitiesCount} activities
                </span>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-dark)]/65">
                {day.summary}
              </p>
            </div>

            <div className="flex flex-col items-start justify-between gap-5 md:items-end">
              <p className="text-sm font-extrabold text-[var(--primary)]">
                Estimated Cost: ${day.estimatedDayPrice}
              </p>

              <button
                type="button"
                onClick={() =>
                  navigate(`/experiences/${itinerarySlug}/day/${day.dayNumber}`)
                }
                className="flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
              >
                Open Day
                <ChevronRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}