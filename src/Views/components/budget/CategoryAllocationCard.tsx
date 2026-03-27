import React from "react";
import type { CategoryAllocation } from "../../../Models/budget.model";

const categories: CategoryAllocation[] = [
  { name: "Accommodation", spent: "$1,200", allocated: "$3,500", progress: 34 },
  { name: "Dining", spent: "$340", allocated: "$1,500", progress: 22 },
  { name: "Activities & Tours", spent: "$180", allocated: "$2,000", progress: 9 },
];

export default function CategoryAllocationCard() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(121,12,19,0.08)] border border-[var(--primary)]/5">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-bold">Category Allocation</h3>
        <div className="flex gap-2">
          <span className="text-xs font-bold text-[var(--primary)] bg-[var(--accent-soft)] px-3 py-1 rounded-full">
            Spent
          </span>
          <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
            Allocated
          </span>
        </div>
      </div>

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category.name}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-bold text-slate-700">
                {category.name}
              </span>
              <span className="text-sm font-bold text-[var(--primary)]">
                {category.spent}{" "}
                <span className="text-slate-400">/ {category.allocated}</span>
              </span>
            </div>

            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-[var(--primary)] h-full rounded-full"
                style={{ width: `${category.progress}%` }}
              />
            </div>
          </div>
        ))}

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-bold text-slate-700">
              Transportation
            </span>
            <span className="text-sm font-bold text-[var(--primary)]">
              $0 <span className="text-slate-400">/ $1,500</span>
            </span>
          </div>

          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden" />
        </div>
      </div>
    </div>
  );
}