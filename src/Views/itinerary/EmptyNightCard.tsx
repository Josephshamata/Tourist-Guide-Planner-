import React from "react";

export function EmptyNightCard() {
  return (
    <div className="group relative bg-slate-50/50 border-2 border-dashed border-slate-200 rounded-2xl p-10 flex flex-col items-center justify-center text-center transition-all hover:bg-slate-50 hover:border-primary/20">
      <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-4">
        <span className="material-symbols-outlined text-slate-300 text-3xl">
          nights_stay
        </span>
      </div>

      <h5 className="text-sm font-bold text-slate-500 mb-2">
        No activities planned yet
      </h5>

      <p className="text-xs text-slate-400 mb-6 max-w-[240px]">
        Would you like to explore Beirut&apos;s legendary nightlife or prefer a
        quiet evening at the hotel?
      </p>

      <button className="flex items-center gap-2 px-6 py-2 bg-white text-primary border border-primary/20 rounded-full text-[11px] font-bold shadow-sm hover:shadow-md transition-all">
        <span className="material-symbols-outlined text-sm">auto_awesome</span>
        Generate this day
      </button>
    </div>
  );
}