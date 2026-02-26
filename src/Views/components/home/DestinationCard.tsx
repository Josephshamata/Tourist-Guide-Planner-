import React from "react";

export type Destination = {
  label: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  className?: string; // for grid spans
};

export function DestinationCard({ item }: { item: Destination }) {
  return (
    <div className={`relative rounded-xl overflow-hidden group cursor-pointer ${item.className ?? ""}`.trim()}>
      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={item.imageUrl} alt={item.imageAlt} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4">
        <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider mb-1 inline-block">
          {item.label}
        </span>
        <h4 className={`font-bold text-white ${item.className?.includes("col-span-2") ? "text-3xl" : "text-xl"}`}>
          {item.title}
        </h4>
      </div>
    </div>
  );
}