import React from "react";
import { Icon } from "../components/common/Icon";

export function ShareButton() {
  return (
    <button className="w-full mt-6 py-4 rounded-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
      <Icon name="ios_share" className="text-sm" />
      Share Itinerary
    </button>
  );
}