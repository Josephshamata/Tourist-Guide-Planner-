import { useNavigate } from "react-router-dom";
import type { Offer } from "../../../models/offer.model";

type Props = {
  offer: Offer;
};

export function ExperienceCard({ offer }: Props) {
  const navigate = useNavigate();

  return (
    <article className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-[180px] overflow-hidden">
        <img
          src={offer.imageUrl}
          alt={offer.title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />

        <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
          {offer.days} Days
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-[24px] font-semibold tracking-tight text-slate-900">
          {offer.title}
        </h3>

        <p className="mt-2 flex items-center gap-1 text-[14px] text-slate-500">
          <span className="material-symbols-outlined text-[17px] text-[var(--primary)]">
            location_on
          </span>
          {offer.mainPlaces.join(" • ")}
        </p>

        <p className="mt-3 line-clamp-2 text-[14px] leading-6 text-slate-500">
          {offer.hotelName
            ? `Stay at ${offer.hotelName} while exploring ${offer.mainPlaces.join(", ")}.`
            : `Explore ${offer.mainPlaces.join(", ")} through a curated Lebanon experience.`}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {offer.categories.slice(0, 3).map((category) => (
            <span
              key={category}
              className="rounded-full bg-[var(--primary)]/5 px-2.5 py-1 text-[11px] font-medium capitalize text-[var(--primary)]"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-end gap-1">
            <span className="text-[28px] font-bold tracking-tight text-[var(--primary)]">
              ${offer.totalPrice}
            </span>

            <span className="mb-[2px] text-[13px] text-slate-400">
              / person
            </span>
          </div>

          <button
            type="button"
            onClick={() => navigate(`/experiences/${offer.slug}`)}
            className="h-11 rounded-2xl bg-[var(--primary)] px-5 text-[13px] font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            View Experience
          </button>
        </div>
      </div>
    </article>
  );
}