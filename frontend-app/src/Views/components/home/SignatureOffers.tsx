
import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import { OfferCard } from "./OfferCard";
import { Icon } from "../common/Icon";
import { useSignatureOffersController } from "../../../controllers/offer.controller";

export function SignatureOffers() {
  const { offers, loading, error } = useSignatureOffersController();

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <SectionTitle title="Signature Offers" />
        <a className="text-primary font-bold text-sm flex items-center gap-1 group" href="#">
          View All{" "}
          <Icon
            name="arrow_forward"
            className="text-sm group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>

      {loading && <p>Loading offers...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {offers.map((offer) => (
            <OfferCard key={offer._id} offer={offer} />
          ))}
        </div>
      )}
    </section>
  );
}