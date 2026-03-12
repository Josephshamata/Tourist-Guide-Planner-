import React from "react";

export function SmartBudgetCard() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft-red">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-extrabold text-lg">Smart Budget</h3>
        <span className="material-symbols-outlined text-primary">
          account_balance_wallet
        </span>
      </div>

      <div className="space-y-5">
        <BudgetRow label="STAY & RESORTS" value="$4,200 / $6,000" percent="70%" />
        <BudgetRow label="FINE DINING" value="$1,850 / $3,000" percent="62%" />
        <BudgetRow label="EXPERIENCES" value="$940 / $2,500" percent="38%" />
      </div>
    </div>
  );
}

function BudgetRow({
  label,
  value,
  percent,
}: {
  label: string;
  value: string;
  percent: string; // e.g. "70%"
}) {
  return (
    <div>
      <div className="flex justify-between text-[11px] font-bold text-slate-400 mb-2">
        <span>{label}</span>
        <span className="text-slate-900">{value}</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-primary" style={{ width: percent }} />
      </div>
    </div>
  );
}