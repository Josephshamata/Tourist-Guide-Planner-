import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import { EventCard, type EventItem } from "./EventCard";
const EVENTS: EventItem[] = [
  {
    day: "15",
    month: "JUL",
    title: "Byblos International Festival",
    location: "Byblos Citadel",
    time: "8:30 PM",
    entry: "$45 +",
    imageUrl:
      "https://www.lbcgroup.tv/uploadImages/DocumentImages/Doc-P-717009-638269342287398521.jpg",
    imageAlt: "Festival crowd",
  },
  {
    day: "03",
    month: "AUG",
    title: "Beiteddine Art Festival",
    location: "Beiteddine Palace",
    time: "9:00 PM",
    entry: "100$",
    imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    imageAlt: "Palace concert",
  },
  {
    day: "22",
    month: "SEP",
    title: "Wine & Dine Harvest",
    location: "Bekaa Valley",
    time: "6:00 PM",
    entry: "30$+",
    imageUrl: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
    imageAlt: "Vineyard event",
  },
];

export function UpcomingEvents() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <SectionTitle title="Upcoming Events" />
          <button className="text-slate-500 font-bold text-sm">
            See Calendar
          </button>
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
