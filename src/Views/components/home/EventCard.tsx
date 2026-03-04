import React from "react";
import { Icon } from "../common/Icon";

export type EventItem = {
  day: string;
  month: string;
  title: string;
  location: string;
  time: string;
  entry: string;
  imageUrl: string;
  imageAlt: string;
};

export function EventCard({ item }: { item: EventItem }) {
  return (
    <div className="bg-white border-l-4 border-primary p-6 rounded-r-xl shadow-sm hover:translate-y-[-4px] transition-transform flex gap-6 items-start">
      {/* LEFT CONTENT */}
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-5">
          <div className="text-center">
            <span className="block text-primary font-black text-xl leading-none">
              {item.day}
            </span>
            <span className="block text-slate-400 font-bold text-[10px] uppercase">
              {item.month}
            </span>
          </div>

          <div className="h-8 w-px bg-slate-200" />

          <div>
            <h4 className="font-bold text-slate-900">{item.title}</h4>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[12px] text-slate-600">
          <div className="flex items-center gap-2">
            <Icon
              name="location_on"
              className="text-[16px] text-slate-400 shrink-0"
            />
            <span className="leading-snug">{item.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Icon
              name="schedule"
              className="text-[16px] text-slate-400 shrink-0"
            />
            <span className="leading-snug">{item.time}</span>
          </div>

          <div className="flex items-center gap-2">
            <Icon
              name="confirmation_number"
              className="text-[16px] text-slate-400 shrink-0"
            />
            <span className="leading-snug">{item.entry}</span>
          </div>

          <div className="flex items-center gap-2">
            <Icon
              name="event"
              className="text-[16px] text-slate-400 shrink-0"
            />
            <span className="leading-snug">Open</span>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-28 h-28 rounded-lg overflow-hidden shrink-0 group">
        <img
          src={item.imageUrl}
          alt={item.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
      </div>
    </div>
  );
}
