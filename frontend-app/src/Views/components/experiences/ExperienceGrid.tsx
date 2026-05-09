import type { Offer } from "../../../models/offer.model";
import { ExperienceCard } from "./ExperienceCard";

type Props = {
  offers: Offer[];
  compact?: boolean;
};

export function ExperienceGrid({ offers, compact = false }: Props) {
  return (
    <div
      className={
        compact
          ? "grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3"
          : "grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      }
    >
      {offers.map((offer) => (
        <ExperienceCard key={offer._id} offer={offer} />
      ))}
    </div>
  );
}