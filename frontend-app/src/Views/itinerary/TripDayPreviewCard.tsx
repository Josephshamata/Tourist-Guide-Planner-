import {
  ChevronRight,
  Clock,
  MapPin,
  Check,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

type ActivityPreview = {
  time: string;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  durationHours: number;
  activityType: string;
  reservationStatus: "confirmed" | "pending" | "cancelled";
  placeName: string;
  phone: string;
};

type TripDayPreviewCardProps = {
  itinerarySlug: string;
  dayNumber: number;
  title: string;
  region: string;
  estimatedDayPrice: number;
  activities: ActivityPreview[];
};

export default function TripDayPreviewCard({
  itinerarySlug,
  dayNumber,
  title,
  region,
  estimatedDayPrice,
  activities,
}: TripDayPreviewCardProps) {
  const navigate = useNavigate();

  return (
    <article className="relative grid grid-cols-[72px_1fr] gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-soft-red">
          <span className="text-[10px] font-bold uppercase leading-none">
            Day
          </span>
          <span className="text-2xl font-extrabold leading-none">
            {dayNumber}
          </span>
        </div>

        <div className="mt-2 h-full w-px bg-[var(--primary-20)]" />
      </div>

      <div>
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-extrabold text-[var(--text-dark)]">
              {title}
            </h3>

            <p className="mt-1 text-sm text-[var(--text-dark)]/55">
              {region}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p className="hidden text-sm font-extrabold text-[var(--primary)] sm:block">
              Estimated Cost: ${estimatedDayPrice}
            </p>

            <button
              type="button"
              onClick={() =>
                navigate(`/experiences/${itinerarySlug}/day/${dayNumber}`)
              }
              className="flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-bold text-white transition hover:scale-[1.02]"
            >
              Open Day
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-soft-red">
          {activities.map((activity, index) => (
            <div
              key={`${activity.time}-${activity.title}`}
              className={[
                "grid items-center gap-4 px-4 py-3",
                "md:grid-cols-[90px_220px_1fr_190px]",
                index !== activities.length - 1
                  ? "border-b border-[var(--border)]"
                  : "",
              ].join(" ")}
            >
              <span className="w-fit rounded-xl border border-[var(--border)] bg-white px-4 py-2 text-sm font-extrabold text-[var(--text-dark)] shadow-sm">
                {activity.time}
              </span>

              <img
                src={activity.imageUrl}
                alt={activity.title}
                className="h-24 w-full rounded-2xl object-cover"
              />

              <div>
                <h4 className="text-lg font-extrabold text-[var(--text-dark)]">
                  {activity.title}
                </h4>

                <p className="mt-1 line-clamp-2 text-sm leading-5 text-[var(--text-dark)]/65">
                  {activity.description}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-[var(--text-dark)]/55">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-[var(--primary)]" />
                    {activity.location}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[var(--primary)]" />
                    {activity.durationHours}h
                  </span>

                  <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 font-bold text-[var(--primary)]">
                    {activity.activityType}
                  </span>
                </div>
              </div>

              <div className="flex h-full flex-col justify-center border-t border-[var(--border)] pt-3 md:border-l md:border-t-0 md:pl-5 md:pt-0">
                <span
                  className={[
                    "mb-3 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold",
                    activity.reservationStatus === "confirmed"
                      ? "bg-green-50 text-green-700"
                      : activity.reservationStatus === "pending"
                        ? "bg-orange-50 text-orange-700"
                        : "bg-red-50 text-red-700",
                  ].join(" ")}
                >
                  {activity.reservationStatus === "confirmed" && (
                    <Check size={14} />
                  )}
                  {activity.reservationStatus}
                </span>

                <p className="text-sm font-extrabold text-[var(--text-dark)]">
                  {activity.placeName}
                </p>

                <p className="mt-1 text-sm text-[var(--text-dark)]/60">
                  {activity.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}