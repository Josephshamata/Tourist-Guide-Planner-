import React from "react";

export default function CategoryShareCard() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(121,12,19,0.08)] border border-[var(--primary)]/5">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-bold">Category Share</h3>
        <span className="material-symbols-outlined text-slate-400">
          pie_chart
        </span>
      </div>

      <div className="relative size-48 mx-auto flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-[18px] border-[var(--primary)]/10" />
        <div className="absolute inset-0 rounded-full border-[18px] border-[var(--primary)] border-r-transparent border-b-transparent rotate-12" />
        <div className="absolute inset-0 rounded-full border-[18px] border-[var(--primary)]/40 border-l-transparent border-t-transparent -rotate-45" />

        <div className="text-center">
          <span className="block text-2xl font-black text-[var(--primary)]">
            20%
          </span>
          <span className="text-[10px] uppercase font-bold text-slate-400">
            Used
          </span>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {[
          { label: "Accommodation", value: "$1,200", color: "bg-[var(--primary)]" },
          { label: "Dining", value: "$340", color: "bg-[var(--primary)]/60" },
          { label: "Experiences", value: "$180", color: "bg-[var(--primary)]/30" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <div className={`size-2 rounded-full ${item.color}`} />
              <span className="font-medium text-slate-600">{item.label}</span>
            </div>
            <span className="font-bold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}