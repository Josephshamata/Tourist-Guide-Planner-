import React from "react";
import { Icon } from "../common/Icon";

export type Personality = {
  tag: string; // Personality type name (e.g. "The Explorer")
  title: string; // Package name (e.g. "Rugged Landscapes") - optional use
  imageUrl: string;
  imageAlt: string;

  // NEW fields for the listing-like details
  priceUsd: number; // e.g. 890
  mainPlace: string; // e.g. "Bsharre • Cedars • Qadisha"
  days: number; // e.g. 5
  hotelName: string; // e.g. "Byblos Boutique Hotel"
};

export function PersonalityCard({ item }: { item: Personality }) {
  return (
    <article className="min-w-[300px] max-w-[300px]">
      <div className="rounded-[28px] overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        {/* Image (NO icons/text on it) */}
        <div className="p-4 pb-0">
          <div className="h-48 rounded-2xl overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.imageAlt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Details */}
        <div className="px-5 pt-5 pb-5">
          {/* Personality name */}
          <div className="text-sm font-extrabold text-slate-900">
            {item.tag}
          </div>

          {/* thin line */}
          <div className="mt-3 h-px w-full bg-slate-200" />

          {/* Price */}
          <div className="mt-4 text-2xl font-black text-slate-900 leading-none">
            ${item.priceUsd}
          </div>

          {/* Main place (trip details) */}
          <div className="mt-2 text-xs text-slate-600 font-medium line-clamp-2">
            {item.mainPlace}
          </div>

          {/* Days + Hotel row */}
          <div className="mt-4 flex items-center justify-between gap-3 text-xs text-slate-600">
            <div className="inline-flex items-center gap-2">
              <Icon name="schedule" className="text-sm" />
              <span className="font-semibold">{item.days} days</span>
            </div>

            <div className="inline-flex items-center gap-2">
              <Icon name="hotel" className="text-sm" />
              <span className="font-semibold line-clamp-1">
                {item.hotelName}
              </span>
            </div>
          </div>

          {/* thin line */}
          <div className="mt-4 h-px w-full bg-slate-200" />

          {/* CTA */}
          <div className="mt-5 flex items-center justify-end">
            {/* <span className="text-xs text-slate-500">
              Tailored for {item.tag}
            </span> */}

            <button className="text-sm font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore trips
              <Icon
                name="arrow_forward"
                className="text-base transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
