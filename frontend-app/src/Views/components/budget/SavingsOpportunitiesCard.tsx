import React from "react";
import type { SavingsOpportunity } from "../../../models/budget.model";

const opportunities: SavingsOpportunity[] = [
  {
    id: 1,
    title: "Switch fine-dining to local premium",
    subtitle: "Save up to $60 per person",
    actionLabel: "Explore",
  },
  {
    id: 2,
    title: "Group tour vs Private car",
    subtitle: "Save up to $120 total",
    actionLabel: "View",
  },
];

export default function SavingsOpportunitiesCard() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-[0_10px_30px_-5px_rgba(121,12,19,0.08)] border border-[var(--primary)]/5">
      <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-emerald-500 text-lg">
          lightbulb
        </span>
        Savings Opportunities
      </h3>

      <div className="space-y-4">
        {opportunities.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-emerald-50 rounded-xl border border-emerald-100"
          >
            <p className="text-xs font-bold text-emerald-900 mb-1">
              {item.title}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-[10px] font-medium text-emerald-700/80">
                {item.subtitle}
              </span>
              <button className="text-[10px] font-black text-emerald-600 uppercase hover:underline">
                {item.actionLabel}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}