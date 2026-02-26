import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import { EventCard, EventItem } from "./EventCard";

const EVENTS: EventItem[] = [
  {
    day: "15",
    month: "JUL",
    title: "Byblos International Festival",
    location: "Byblos Citadel",
    description: "A month-long celebration of music and culture in the world's oldest inhabited city.",
  },
  {
    day: "03",
    month: "AUG",
    title: "Beiteddine Art Festival",
    location: "Beiteddine Palace",
    description: "Global artists perform in the stunning courtyard of a 19th-century palace.",
  },
  {
    day: "22",
    month: "SEP",
    title: "Wine & Dine Harvest",
    location: "Bekaa Valley",
    description: "Experience the grape harvest season with exclusive tastings and dinner in the vines.",
  },
];

export function UpcomingEvents() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <SectionTitle title="Upcoming Events" />
          <button className="text-slate-500 font-bold text-sm">See Calendar</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTS.map((item) => (
            <EventCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}