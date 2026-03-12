import React from "react";

export function CompactActivityCard() {
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-soft-red hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-slate-50 rounded-xl text-primary font-bold text-sm border border-slate-100">
              03:30 PM
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Gemmayze Cultural Walk
            </h3>
          </div>

          <span className="px-3 py-1 bg-amber-50 text-amber-600 text-[11px] font-bold rounded-full border border-amber-100 flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">pending</span>
            Pending
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-grow">
            <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 font-medium">
              Guided exploration of the art galleries and heritage buildings of Gemmayze.
              Experience the architectural soul of Beirut through its traditional mansions
              and creative hubs.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400">
              <div className="flex items-center gap-1 text-primary">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Gemmayze, Beirut
              </div>

              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">schedule</span>
                2 Hours
              </div>

              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">payments</span>
                $30 / person
              </div>

              <div className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded">#Heritage</div>
              <div className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded">#Art</div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-50">
          <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-[11px] font-bold hover:bg-black transition-colors">
            View Details
          </button>

          <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl text-[11px] font-bold hover:border-primary hover:text-primary transition-colors">
            Replace
          </button>

          <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl text-[11px] font-bold hover:border-red-500 hover:text-red-500 transition-colors">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}