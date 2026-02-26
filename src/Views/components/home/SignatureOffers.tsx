import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import { OfferCard } from "./OfferCard";
import { Icon } from "../common/Icon";
type Offer = {
  title: string;
  duration: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
};

const OFFERS: Offer[] = [
  {
    badge: "Signature",
    title: "The Baalbek Heritage Tour",
    duration: "8h",
    description: "Journey through the Roman ruins and taste the finest local vineyards in the Bekaa Valley.",
    imageAlt: "Golden sunset over the ruins of Baalbek",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2YRYJtBCBqPW3ewB5CyGkhtLJChBKTbSw4XsuCyZffJqneZxyzgWD-VbWwWVuNbnAOgrQyJvAyglbTJXTAp1zK2K3mEGGgiC8oaFzjKRsRSIg1LUf-NP0kEAEtKeK8t2AsfgQrYI7NiQlvUIeovxO3kc1t7j9_x-DdGaJWqHtLJ0DdFnrH-t3EUEFjOmtG8L5u7B10ThdFfpFH03XV0V5vfoGrEQhfjtfeBaMTztUIrIaGAZsdwy3xkVEuYLrwZjujajvOsRs_3I",
  },
  {
    title: "Cedars of God Retreat",
    duration: "2 Days",
    description: "A spiritual and nature-filled weekend in the ancient forest of Bsharre.",
    imageAlt: "Snow capped cedar trees in Arz mountains",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzkwkb5h4cw8FlNCuN5ZFq3Bva9CY_8sIdq3QlgxgKnRCoz7ySc-YusFj7ZtOHuv99Ab299pfjaxKOg4XZDQJcZvZxMEFG5B3-P0IhISBOrKsBXztd2RxPANawVKaLmU7lReo9UMTh0pYXLKvjifMDe6be07DZxuCU6elkv_7sLzat-R4UhX9SFvWJvPHBYIDd0uuaLOLOQTGFbVhqDnvuB4kd1jt0vcuBukDUU5jL0FRqHvhCpg_0mhl6-s-wWRYp8-_UqeDZLSE",
  },
  {
    title: "Beirut Street Food Safari",
    duration: "4h",
    description: "Discover hidden culinary gems from Mar Mikhael to the bustling streets of Hamra.",
    imageAlt: "Traditional Lebanese food spread with mezze",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSNOYyuSRPuJDeL3Ju45qmI3X-ZyyzUxQ1ZcbP5o33DsGoC_DCpYZaJrkIK38-SJ48Uubp5ocqyrMVWwDRNHFpQSTz_pbeme7cL8Ib7Yennw5X4JkuQlShg9LB62YG-pxusmUDOqhqQD9bZPZaUQs_OtsUyl6KZ17ZvQVumtHlT0eNXl-L2qMeZ7QMO9no2OJxIHZi2gYaBqLYr8FwR79JLeB48H4wZblbe_f7UMS-OFGRQPdosez_4fS0ZRts9gEbYPlbyhAxkDo",
  },
];

export function SignatureOffers() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <SectionTitle title="Signature Offers" />
        <a className="text-primary font-bold text-sm flex items-center gap-1 group" href="#">
          View All <Icon name="arrow_forward" className="text-sm group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {OFFERS.map((offer) => (
          <OfferCard key={offer.title} offer={offer} />
        ))}
      </div>
    </section>
  );
}