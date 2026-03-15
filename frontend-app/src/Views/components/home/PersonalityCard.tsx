import React from "react";
import { Icon } from "../common/Icon";
import type { Offer } from "../../../models/offer.model";

export function PersonalityCard({ item }: { item: Offer }) {
  const mainPlace = item.mainPlaces?.join(" • ") ?? "";

  return (
    <article className="min-w-[300px] max-w-[300px] group">
      <div className="rounded-[28px] overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="p-4 pb-0">
          <div className="h-48 rounded-2xl overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Details */}
        <div className="px-5 pt-5 pb-5">
          {/* Personality name */}
          <div className="text-sm font-extrabold text-slate-900">
            {item.title}
          </div>

          {/* thin line */}
          <div className="mt-3 h-px w-full bg-slate-200" />

          {/* Price */}
          <div className="mt-4 text-2xl font-black text-slate-900 leading-none">
            ${item.totalPrice}
          </div>

          {/* Main place */}
          <div className="mt-2 text-xs text-slate-600 font-medium line-clamp-2">
            {mainPlace}
          </div>

          {/* Days + Hotel row */}
          <div className="mt-4 flex items-center justify-between gap-3 text-xs text-slate-600">
            <div className="inline-flex items-center gap-2">
              <Icon name="schedule" className="text-sm" />
              <span className="font-semibold">{item.days} days</span>
            </div>

            <div className="inline-flex items-center gap-2 min-w-0">
              <Icon name="hotel" className="text-sm shrink-0" />
              <span className="font-semibold line-clamp-1">
                {item.hotelName}
              </span>
            </div>
          </div>

          {/* thin line */}
          <div className="mt-4 h-px w-full bg-slate-200" />

          {/* CTA */}
          <div className="mt-5 flex items-center justify-end">
            <a
              href={`/offers/${item.slug}`}
              className="text-sm font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              Explore trips
              <Icon
                name="arrow_forward"
                className="text-base transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}