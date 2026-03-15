import React from "react";
import { TimelineDay } from "./TimelineDay";

export function Timeline() {
  const days = [
    {
      dayNumber: "01",
      title: "Beirut Mediterranean Spirit",
      subtitle: "Monday, July 15 • Start of your premium getaway",
      weather: { label: "31°C Sunny", icon: "wb_sunny" as const },
      confirmedCount: 2,
      totalCount: 3,
    },
  ];

  return (
    <main className="max-w-[1440px] mx-auto px-8 py-12 flex gap-12">
      <div className="flex-grow space-y-16">
        {days.map((d) => (
          <TimelineDay
            key={d.dayNumber}
            dayNumber={d.dayNumber}
            title={d.title}
            subtitle={d.subtitle}
            weather={d.weather}
            confirmedCount={d.confirmedCount}
            totalCount={d.totalCount}
            onRegenerateDay={() => console.log("Regenerate day", d.dayNumber)}
            onAddSurprise={() => console.log("Add surprise", d.dayNumber)}
          />
        ))}
      </div>
    </main>
  );
}