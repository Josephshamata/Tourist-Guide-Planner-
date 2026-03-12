import React from "react";

const FILTERS = ["Overview", "Beach Clubs", "Dining", "Nightlife"] as const;

export function DayFilter() {
  return (
    <div className="flex gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
      {FILTERS.map((label, idx) => {
        const active = idx === 0;
        return (
          <button
            key={label}
            className={
              active
                ? "px-6 py-3 rounded-full bg-primary text-white font-bold whitespace-nowrap"
                : "px-6 py-3 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary transition-all whitespace-nowrap"
            }
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}