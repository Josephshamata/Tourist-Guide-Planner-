import React from "react";
import { Icon } from "../common/Icon";

export type Offer = {
  title: string;
  duration: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
};

export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-slate-100 group">
      <div className="relative h-56">
        <img className="w-full h-full object-cover" src={offer.imageUrl} alt={offer.imageAlt} />
        {offer.badge && (
          <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
            {offer.badge}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">
            {offer.title}
          </h4>
          <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
            <Icon name="schedule" className="text-sm" /> {offer.duration}
          </span>
        </div>
        <p className="text-slate-500 text-sm mb-6 line-clamp-2">{offer.description}</p>
        <button className="w-full bg-primary text-white py-3 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}