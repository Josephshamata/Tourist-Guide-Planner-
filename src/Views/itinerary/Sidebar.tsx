import React from "react";
import { SmartBudgetCard } from "./sidebar/SmartBudgetCard";
import { TripCalendarCard } from "./sidebar/TripCalendarCard";
import { TravelLogisticsCard } from "./sidebar/TravelLogisticsCard";

export function Sidebar() {
  return (
    <aside className="w-96 flex-shrink-0 space-y-8 sticky top-28 h-fit">
      <SmartBudgetCard />
      <TripCalendarCard />
      <TravelLogisticsCard />
    </aside>
  );
}