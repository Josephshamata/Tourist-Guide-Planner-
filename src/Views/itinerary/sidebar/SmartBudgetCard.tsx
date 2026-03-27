import React from "react";
import { Link } from "react-router-dom";

export function SmartBudgetCard() {
  return (
    <Link to="/budget" className="group block">
      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft-red cursor-pointer transition-all hover:bg-slate-50/50 hover:shadow-xl">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <div className="flex items-center gap-2">
            <h3 className="font-extrabold text-lg">Smart Budget</h3>

            <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-primary transition-colors">
              arrow_forward
            </span>
          </div>

          <span className="material-symbols-outlined text-primary">
            account_balance_wallet
          </span>

        </div>

        {/* Budget rows */}
        <div className="space-y-5">
          <BudgetRow label="STAY & RESORTS" value="$4,200 / $6,000" percent="70%" />
          <BudgetRow label="FINE DINING" value="$1,850 / $3,000" percent="62%" />
          <BudgetRow label="EXPERIENCES" value="$940 / $2,500" percent="38%" />
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between group/link">

          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            Manage Full Budget
          </span>

          <span className="material-symbols-outlined text-sm text-slate-300 group-hover/link:text-primary transition-colors">
            arrow_forward_ios
          </span>

        </div>
      </div>
    </Link>
  );
}

function BudgetRow({
  label,
  value,
  percent,
}: {
  label: string;
  value: string;
  percent: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-[11px] font-bold text-slate-400 mb-2">
        <span>{label}</span>
        <span className="text-slate-900">{value}</span>
      </div>

      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-primary transition-all duration-500" style={{ width: percent }} />
      </div>
    </div>
  );
}