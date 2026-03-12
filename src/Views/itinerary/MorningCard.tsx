import React from "react";

export function MorningCard() {
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-soft-red hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-slate-50 rounded-xl text-primary font-bold text-sm border border-slate-100">
              10:00 AM
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Iris Beach Club
            </h3>
          </div>

          <span className="px-3 py-1 bg-green-50 text-green-600 text-[11px] font-bold rounded-full border border-green-100 flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] fill-1">
              check_circle
            </span>
            Confirmed
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-full md:w-56 h-40 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm">
            <img
              alt="Iris Beach Club"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBG867jhgB0zIjK8kMek5fxxUpVfX_ZXNCKI3EAFcbOh8O1q2n4pdTJdqSKF_dEym2RJaBq2wREqF2CKbs2yyoaFVRjBTmk1T9IvWEAop4i2ha9fXjaxK4Xzm9ESnxvyimLidKz4U1FrCi9yaVVfBx6L_1iYH_-gtixH-L37jhM3RPCwCYIkoz3NTF-3kMF3_2A-XOh7yat0zFdS_rmsyhbIRIT3QbUTCNR31qXkoCxwlKsdnCwnUW20uO57u0TqomQEiYuLBQiRTx"
            />
          </div>

          <div className="flex-grow">
            <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 font-medium">
              Private sea-view cabana with exclusive access to the upper pool deck.
              VIP entrance and welcome fruit platter included. Perfect spot for sunset
              cocktails and refined relaxation by the Mediterranean.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400">
              <div className="flex items-center gap-1 text-primary">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Damour, South Beirut
              </div>

              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">schedule</span>
                4 Hours
              </div>

              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">payments</span>
                $60 / person
              </div>

              <div className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                #BeachClub
              </div>
              <div className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                #VIPAccess
              </div>
            </div>
          </div>
        </div>

        <details className="group/details mb-8">
          <summary className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest cursor-pointer hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-sm transition-transform group-open/details:rotate-180">
              expand_more
            </span>
            Reservation Details
          </summary>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-6 p-6 bg-slate-50/50 rounded-2xl border border-slate-100">
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mb-1">
                Booking ID
              </p>
              <p className="text-xs font-extrabold text-slate-900">IRIS-8842-X</p>
            </div>

            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mb-1">
                Guests
              </p>
              <p className="text-xs font-extrabold text-slate-900">4 Adults (VIP)</p>
            </div>

            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mb-1">
                Payment Status
              </p>
              <p className="text-xs font-extrabold text-green-600">Fully Paid</p>
            </div>

            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mb-1">
                Meeting Point
              </p>
              <p className="text-xs font-extrabold text-slate-900">Main Entrance Valet</p>
            </div>

            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mb-1">
                Contact
              </p>
              <p className="text-xs font-extrabold text-slate-900">+961 3 000 000</p>
            </div>
          </div>
        </details>

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

          <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl text-[11px] font-bold hover:border-slate-400 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">sticky_note_2</span>
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
}