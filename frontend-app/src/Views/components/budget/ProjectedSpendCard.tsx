import React from "react";

export default function ProjectedSpendCard() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-soft-red transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold">Projected Spend</h3>
        <span className="text-xs font-bold text-rose-500 bg-rose-50 px-3 py-1 rounded-full">
          $840 Overrun Warning
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">
            Current Spend
          </p>
          <p className="text-2xl font-black text-slate-900">$1,720</p>
        </div>

        <div>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">
            Projected Final
          </p>
          <p className="text-2xl font-black text-rose-600">$9,340</p>
        </div>

        <div>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">
            Planned Budget
          </p>
          <p className="text-2xl font-black text-slate-900">$8,500</p>
        </div>
      </div>

      <div className="relative h-4 bg-slate-100 rounded-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-[var(--primary)] w-[80%]" />
        <div className="absolute inset-y-0 left-[80%] bg-rose-300 w-[15%]" />
        <div className="absolute inset-y-0 right-0 w-[5%] border-l-2 border-dashed border-slate-400" />
      </div>

      <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
        <span>$0</span>
        <span>Planned Budget ($8,500)</span>
        <span>$10,000+</span>
      </div>
    </div>
  );
}