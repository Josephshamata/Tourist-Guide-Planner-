import React from "react";

export type EventItem = {
  day: string;
  month: string;
  title: string;
  location: string;
  description: string;
};

export function EventCard({ item }: { item: EventItem }) {
  return (
    <div className="bg-white border-l-4 border-primary p-6 rounded-r-xl shadow-sm hover:translate-y-[-4px] transition-transform">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-center">
          <span className="block text-primary font-black text-xl leading-none">{item.day}</span>
          <span className="block text-slate-400 font-bold text-[10px] uppercase">{item.month}</span>
        </div>
        <div className="h-8 w-px bg-slate-200" />
        <div>
          <h4 className="font-bold text-slate-900">{item.title}</h4>
          <p className="text-xs text-slate-500">{item.location}</p>
        </div>
      </div>
      <p className="text-sm text-slate-600 mb-4">{item.description}</p>
      <a className="text-xs font-bold text-primary" href="#">
        Learn More
      </a>
    </div>
  );
}