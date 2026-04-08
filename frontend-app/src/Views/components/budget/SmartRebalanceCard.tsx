import React from "react";
import type { RebalanceRecommendation } from "../../../Models/budget.model";

const recommendations: RebalanceRecommendation[] = [
  {
    id: 1,
    title: "Move $150 from Shopping to Dining",
    subtitle: "Recommended based on current spend",
    icon: "swap_horiz",
  },
  {
    id: 2,
    title: "Allocate $200 from Misc to Tours",
    subtitle: "Optimize activity bookings",
    icon: "account_balance_wallet",
  },
];

export default function SmartRebalanceCard() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(121,12,19,0.08)] border border-[var(--primary)]/5">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Smart Rebalance</h3>
        <span className="material-symbols-outlined text-[var(--primary)]">
          auto_fix_high
        </span>
      </div>

      <div className="space-y-4">
        {recommendations.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-5 bg-[var(--accent-soft)]/30 rounded-2xl border border-[var(--primary)]/10 gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl">
                  {item.icon}
                </span>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-800">{item.title}</p>
                <p className="text-[10px] font-medium text-slate-500 uppercase">
                  {item.subtitle}
                </p>
              </div>
            </div>

            <button className="bg-[var(--primary)] text-white text-[10px] font-black px-4 py-2 rounded-full hover:bg-[var(--primary)]/90 transition-colors">
              Apply Recommendation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}