import React from "react";

export default function BudgetHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--primary-10)] bg-white/50 backdrop-blur-md px-6 md:px-12 py-4">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-[var(--primary)] flex items-center justify-center rounded-lg text-white">
            <span className="material-symbols-outlined">explore</span>
          </div>

          <div>
            <h2 className="text-[var(--primary)] text-xl font-extrabold tracking-tight">
              Guided Lebanon
            </h2>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary-60)]">
              Premium Travel
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-[var(--accent-soft)]/50 rounded-full border border-[var(--primary-10)]">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--primary)]">
              Protection Mode
            </span>

            <div className="relative inline-block w-10">
              <input
                id="budget-protection"
                type="checkbox"
                className="peer sr-only toggle-checkbox"
              />
              <label
                htmlFor="budget-protection"
                className="toggle-label block h-5 rounded-full bg-slate-300 cursor-pointer"
              />
              <span className="toggle-dot absolute left-0 top-0 size-5 rounded-full bg-white shadow-sm" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center rounded-full size-10 bg-[var(--accent-soft)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-xl">
                ios_share
              </span>
            </button>

            <button className="flex items-center justify-center rounded-full size-10 bg-[var(--accent-soft)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-xl">
                picture_as_pdf
              </span>
            </button>
          </div>

          <button className="ml-2 flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-2.5 text-sm font-bold text-white shadow-lg hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-sm">edit</span>
            Edit Total Budget
          </button>
        </div>
      </div>
    </header>
  );
}