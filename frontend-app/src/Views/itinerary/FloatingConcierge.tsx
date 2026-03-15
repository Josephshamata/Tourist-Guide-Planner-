import React from "react";

export function FloatingConcierge() {
  return (
    <div className="fixed bottom-10 right-10 z-[100] group">
      <button
        type="button"
        className="w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 peer"
      >
        <span className="material-symbols-outlined text-3xl">smart_toy</span>
      </button>

      <div className="absolute bottom-20 right-0 w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="bg-primary p-6 text-white">
          <h4 className="text-xl font-extrabold flex items-center gap-2">
            <span className="material-symbols-outlined">auto_awesome</span>
            AI Concierge
          </h4>
          <p className="text-white/70 text-sm mt-1">
            Levantine Assistant at your service
          </p>
        </div>

        <div className="p-6">
          <div className="bg-slate-50 rounded-xl p-4 mb-6">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
              AI Summary
            </p>
            <p className="text-sm text-slate-600 leading-relaxed italic">
              "Your Monday is perfectly balanced between relaxation in Damour and
              fine dining in the city. Traffic alert: expect 15m delay around 6 PM."
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <QuickBtn>Find rooftop party</QuickBtn>
            <QuickBtn>Reserve chauffeur</QuickBtn>
            <QuickBtn>Weather update</QuickBtn>
          </div>

          <div className="relative">
            <input
              className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20"
              placeholder="Ask anything about your trip..."
              type="text"
            />
            <button
              type="button"
              className="absolute right-2 top-1.5 p-1.5 bg-primary text-white rounded-lg"
            >
              <span className="material-symbols-outlined text-lg">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickBtn({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="px-3 py-1.5 bg-slate-100 hover:bg-primary/10 hover:text-primary transition-colors rounded-lg text-xs font-bold text-slate-600"
    >
      {children}
    </button>
  );
}