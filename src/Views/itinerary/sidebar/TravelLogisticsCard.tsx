import React from "react";

export function TravelLogisticsCard() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-soft-red">
      <h3 className="font-extrabold text-lg mb-6">Travel Logistics</h3>

      <div className="space-y-3">
        <details className="group bg-slate-50 rounded-xl overflow-hidden" open>
          <summary className="flex items-center justify-between p-4 cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">flight</span>
              <span className="text-sm font-bold">International Flights</span>
            </div>
            <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">
              expand_more
            </span>
          </summary>

          <div className="p-4 pt-0 text-xs space-y-3 border-t border-white/50">
            <div className="flex justify-between">
              <span className="text-slate-500">Departure (MEA 202)</span>
              <span className="font-bold">LHR → BEY • 09:30 AM</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">Return (MEA 201)</span>
              <span className="font-bold">BEY → LHR • 04:15 PM</span>
            </div>
          </div>
        </details>

        <details className="group bg-slate-50 rounded-xl overflow-hidden">
          <summary className="flex items-center justify-between p-4 cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">hotel</span>
              <span className="text-sm font-bold">Accommodation</span>
            </div>
            <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">
              expand_more
            </span>
          </summary>

          <div className="p-4 pt-0 text-xs">
            <p className="font-bold">Albergo Hotel, Beirut</p>
            <p className="text-slate-500">Suite Junior Terrace • 7 Nights</p>
          </div>
        </details>
      </div>
    </div>
  );
}