import React from "react";

const scenarios = [
  { label: "New Activity", icon: "add" },
  { label: "Upgrade Hotel", icon: "upgrade" },
  { label: "Add Traveler", icon: "group_add" },
  { label: "Extend Trip", icon: "flight_takeoff" },
];

export default function WhatIfPlannerCard() {
  return (
    <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(121,12,19,0.08)] border border-white/5 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 size-40 bg-[var(--primary)]/20 rounded-full blur-3xl" />

      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-6">What If Planner</h3>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
              Preview Scenario
            </label>

            <div className="grid grid-cols-2 gap-3">
              {scenarios.map((scenario) => (
                <button
                  key={scenario.label}
                  className="p-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">
                    {scenario.icon}
                  </span>
                  {scenario.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-400">
                Projected Total with Scenario:
              </span>
              <span className="text-2xl font-black text-[var(--primary)]">
                $8,950
              </span>
            </div>
            <p className="text-[10px] font-medium text-slate-500 italic">
              Adding "Byblos Day Trip" increases total by $450.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}