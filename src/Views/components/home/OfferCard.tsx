import React from "react";
import { Icon } from "../common/Icon";

export type Offer = {
  id: string;
  title: string;
  days: number;
  imageUrl: string;
  imageAlt: string;

  // main selling info
  totalPriceUsd?: number; // more important than "from"
  details: string; // e.g. "Beirut • Byblos • Jeita • Harissa • Private driver + guide"
  tag?: string; // optional pill like "Romantic" / "Culture"
  badge?: string; // optional
};

export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article className="group relative rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-[450px] w-full">
        {/* Image */}
        <img
          src={offer.imageUrl}
          alt={offer.imageAlt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* ✅ Bigger dark blend area (strong + tall, still smooth) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[420px] bg-gradient-to-t from-black/95 via-black/55 to-transparent" />

        {/* Badge (optional) */}
        {offer.badge && (
          <span className="absolute top-5 left-5 rounded-full bg-white/12 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white ring-1 ring-white/15">
            {offer.badge}
          </span>
        )}

        {/* Bookmark */}
        <button
          type="button"
          aria-label="Save"
          className="absolute top-5 right-5 h-12 w-12 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-white hover:bg-white/15 transition active:scale-[0.98]"
        >
          <Icon name="bookmark" className="text-base" />
        </button>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 px-6 pb-7">
          {/* Title + PRICE (make price stand out) */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-white text-[20px] font-extrabold leading-snug line-clamp-2">
              {offer.title}
            </h3>

            {offer.totalPriceUsd != null && (
              <div className="text-right shrink-0">
                <div className="text-white/70 text-[10px] font-bold uppercase tracking-widest">
                  Total
                </div>
                <div className="text-white text-[20px] font-black leading-none">
                  ${offer.totalPriceUsd}
                </div>
              </div>
            )}
          </div>

          <p className="mt-3 text-white/80 text-[12px] leading-relaxed line-clamp-2">
            {offer.details}
          </p>

          {/* Pills: tag + duration */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {offer.tag && (
              <span className="rounded-full bg-white/12 px-3 py-1.5 text-[11px] font-semibold text-white ring-1 ring-white/10">
                {offer.tag}
              </span>
            )}

            <span className="rounded-full bg-white/12 px-3 py-1.5 text-[11px] font-semibold text-white ring-1 ring-white/10">
              {offer.days} Night Trip
            </span>
          </div>

          {/* CTA with icon */}
          <button className="mt-6 w-full h-12 rounded-full bg-white text-slate-900 py-3.5 text-[13px] font-extrabold hover:bg-white/95 transition active:scale-[0.99] active:translate-y-[1px] inline-flex items-center justify-center gap-2">
            <Icon name="calendar_month" className="text-base" />
            Book now
          </button>
        </div>
      </div>
    </article>
  );
}