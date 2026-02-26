import React from "react";

export type Personality = {
  tag: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
};

export function PersonalityCard({ item }: { item: Personality }) {
  return (
    <div className="min-w-[300px] bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all border border-primary/5 group">
      <div className="h-40 rounded-lg overflow-hidden mb-4">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={item.imageUrl}
          alt={item.imageAlt}
        />
      </div>
      <span className="inline-block text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded mb-2 uppercase tracking-wide">
        {item.tag}
      </span>
      <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
      <a className="text-xs font-bold text-primary flex items-center gap-1" href="#">
        Explore Offers <span className="material-symbols-outlined text-xs">arrow_forward</span>
      </a>
    </div>
  );
}