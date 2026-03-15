
import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import { PersonalityCard } from "./PersonalityCard";
import { usePersonalityOffersController } from "../../../controllers/offer.controller";

export function TravelByPersonality() {
  const { offers, loading, error } = usePersonalityOffersController();

  return (
    <section className="bg-primary/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <SectionTitle title="Travel by Personality" />
        </div>

        {loading && <p>Loading personality offers...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15">
            {offers.map((item) => (
              <PersonalityCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}