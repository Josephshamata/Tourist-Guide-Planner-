import React from "react";
import type { OverviewStat } from "../../../Models/budget.model";

const stats: OverviewStat[] = [
  {
    label: "Total Budget",
    value: "$8,500",
    helper: "+12% from estimate",
    helperColor: "text-[var(--primary)]",
  },
  {
    label: "Total Spent",
    value: "$1,720",
    highlighted: true,
    progress: 20,
  },
  {
    label: "Remaining",
    value: "$6,780",
    helper: "On Track",
    helperColor: "text-emerald-500",
  },
  {
    label: "Per Traveler",
    value: "$2,125",
    helper: "Based on 4 people",
    helperColor: "text-slate-400",
  },
];

export default function OverviewCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(121,12,19,0.08)] border border-[var(--primary)]/5 flex flex-col justify-between relative overflow-hidden"
        >
          {stat.highlighted && (
            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--primary)]/5 rounded-full -mr-12 -mt-12" />
          )}

          <p className="text-slate-500 font-semibold text-sm uppercase tracking-wider mb-4">
            {stat.label}
          </p>

          <div className="flex flex-col">
            <span
              className={`text-4xl font-bold ${
                stat.highlighted ? "text-[var(--primary)]" : "text-slate-900"
              }`}
            >
              {stat.value}
            </span>

            {typeof stat.progress === "number" && (
              <div className="mt-3 w-full bg-[var(--accent-soft)] rounded-full h-2">
                <div
                  className="bg-[var(--primary)] h-2 rounded-full"
                  style={{ width: `${stat.progress}%` }}
                />
              </div>
            )}

            {stat.helper && (
              <span className={`text-xs font-bold mt-1 ${stat.helperColor}`}>
                {stat.helper}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}