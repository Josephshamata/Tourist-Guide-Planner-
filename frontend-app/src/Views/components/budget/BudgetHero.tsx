import React from "react";

export default function BudgetHero() {
  return (
    <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <nav className="flex mb-4 gap-2 text-sm font-medium text-[var(--primary)]/60">
          <span>Dashboard</span>
          <span>/</span>
          <span className="text-[var(--primary)]">Budget Management</span>
        </nav>

        <h1 className="text-5xl font-black tracking-tighter text-slate-900 mb-2">
          Beirut Summer Escape
        </h1>

        <div className="flex items-center gap-4 text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-lg">
              calendar_today
            </span>
            July 15–22, 2024
          </div>

          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />

          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-lg">group</span>
            4 Travelers
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-[0_10px_30px_-5px_rgba(121,12,19,0.08)] border border-[var(--primary)]/5 flex items-center gap-4">
        <div className="size-12 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center text-[var(--primary)]">
          <span className="material-symbols-outlined">today</span>
        </div>

        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Today's Status
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-slate-900">$355</span>
            <span className="text-xs font-medium text-rose-500">
              Planned: $280
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}