import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import { OfferCard, type Offer } from "./OfferCard";
import { Icon } from "../common/Icon";

const OFFERS: Offer[] = [
  {
    id: "classic-lebanon-5d",
    badge: "Signature",
    title: "Classic Lebanon Discovery",
    days: 5,
    totalPriceUsd: 890,
    tag: "Culture",
    details:
      "Beirut • Byblos • Jeita Grotto • Harissa • Baalbek • Private driver + boutique hotel",
    imageAlt: "Byblos harbor at sunset",
    imageUrl:
      "https://img.freepik.com/premium-photo/aerial-view-byblos-also-known-as-jbeil-coastal-town-lebanon_261932-16927.jpg",
  },
  {
    id: "mountain-cedars-retreat",
    badge: "Nature",
    title: "Cedars & Mountain Retreat",
    days: 4,
    totalPriceUsd: 760,
    tag: "Mountains",
    details:
      "Cedars of God • Qadisha Valley • Bsharre • Scenic hikes • Mountain lodge stay",
    imageAlt: "Cedars forest in Lebanon",
    imageUrl:
      "https://www.sophiesworld.net/wp-content/uploads/2018/07/IMG_E3312.jpg",
  },
  {
    id: "baalbek-wine-route",
    badge: "Heritage",
    title: "Baalbek & Bekaa Wine Escape",
    days: 3,
    totalPriceUsd: 620,
    tag: "Wine & History",
    details:
      "Roman temples of Baalbek • Zahle • Vineyard tasting • Countryside boutique stay",
    imageAlt: "Baalbek Roman ruins",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2YRYJtBCBqPW3ewB5CyGkhtLJChBKTbSw4XsuCyZffJqneZxyzgWD-VbWwWVuNbnAOgrQyJvAyglbTJXTAp1zK2K3mEGGgiC8oaFzjKRsRSIg1LUf-NP0kEAEtKeK8t2AsfgQrYI7NiQlvUIeovxO3kc1t7j9_x-DdGaJWqHtLJ0DdFnrH-t3EUEFjOmtG8L5u7B10ThdFfpFH03XV0V5vfoGrEQhfjtfeBaMTztUIrIaGAZsdwy3xkVEuYLrwZjujajvOsRs_3I",
  },
  // {
  //   id: "beirut-food-weekend",
  //   badge: "Best Seller",
  //   title: "Beirut Food & City Weekend",
  //   days: 3,
  //   totalPriceUsd: 540,
  //   tag: "Foodie",
  //   details:
  //     "Mar Mikhael • Hamra • Downtown • Street food tour • Rooftop dinner experience",
  //   imageAlt: "Lebanese mezze table",
  //   imageUrl:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuDSNOYyuSRPuJDeL3Ju45qmI3X-ZyyzUxQ1ZcbP5o33DsGoC_DCpYZaJrkIK38-SJ48Uubp5ocqyrMVWwDRNHFpQSTz_pbeme7cL8Ib7Yennw5X4JkuQlShg9LB62YG-pxusmUDOqhqQD9bZPZaUQs_OtsUyl6KZ17ZvQVumtHlT0eNXl-L2qMeZ7QMO9no2OJxIHZi2gYaBqLYr8FwR79JLeB48H4wZblbe_f7UMS-OFGRQPdosez_4fS0ZRts9gEbYPlbyhAxkDo",
  // },
  // {
  //   id: "south-lebanon-coast",
  //   badge: "Adventure",
  //   title: "South Lebanon Coastal Journey",
  //   days: 4,
  //   totalPriceUsd: 710,
  //   tag: "Coastal",
  //   details:
  //     "Sidon • Tyre • Ancient ruins • Mediterranean beaches • Private coastal transfers",
  //   imageAlt: "Tyre beach Lebanon",
  //   imageUrl: "https://images.unsplash.com/photo-1583241800698-1c1f39c6d42f",
  // },
  {
    id: "romantic-honeymoon",
    badge: "Luxury",
    title: "Lebanon Romantic Honeymoon",
    days: 6,
    totalPriceUsd: 1290,
    tag: "Luxury",
    details:
      "Private chauffeur • Boutique seaside hotel • Sunset cruise • Fine dining reservations",
    imageAlt: "Lebanon romantic sunset",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
];

export function SignatureOffers() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <SectionTitle title="Ready-to-book Offers" />
        <a
          className="text-primary font-bold text-sm flex items-center gap-1 group"
          href="#"
        >
          View All{" "}
          <Icon
            name="arrow_forward"
            className="text-sm group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>

      {/* More cards: 2 on small, 3 on large, 4 on xl */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {OFFERS.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  );
}
