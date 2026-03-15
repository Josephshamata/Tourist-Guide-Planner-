import React from "react";

export function TripCalendarCard() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft-red">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-extrabold text-lg">Trip Calendar</h3>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          July 2024
        </span>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-4">
        {["M", "T", "W", "T", "F", "S", "S"].map((d) => (
          <span key={d} className="text-[10px] text-slate-300 font-bold">
            {d}
          </span>
        ))}

        <Day active>15</Day>
        <Day>16</Day>
        <Day dot>17</Day>
        <Day>18</Day>
        <Day dot>19</Day>
        <Day>20</Day>
        <Day>21</Day>
      </div>
    </div>
  );
}

function Day({
  children,
  active,
  dot,
}: {
  children: React.ReactNode;
  active?: boolean;
  dot?: boolean;
}) {
  if (active) {
    return (
      <span className="py-2.5 text-xs font-bold rounded-xl bg-primary text-white shadow-soft-red cursor-pointer relative">
        {children}
      </span>
    );
  }

  return (
    <span className="py-2.5 text-xs font-bold rounded-xl hover:bg-slate-50 cursor-pointer text-slate-900 relative">
      {children}
      {dot && (
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
      )}
    </span>
  );
}