import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import { EventCard } from "./EventCard";
import { useEventsController } from "../../../controllers/event.controller";

export function UpcomingEvents() {
  const { events, loading, error } = useEventsController();

  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <SectionTitle title="Upcoming Events" />
          <button className="text-slate-500 font-bold text-sm">
            See Calendar
          </button>
        </div>

        {loading && <p>Loading events...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((item) => (
              <EventCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}