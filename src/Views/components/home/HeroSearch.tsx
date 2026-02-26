import React from "react";
import { Icon } from "../common/Icon";

export function HeroSearch() {
  return (
    <section className="py-16 md:py-24 px-6 text-center max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8">
        Discover Lebanon, Your Way.
      </h2>

      <div className="relative max-w-2xl mx-auto group">
        <div className="flex items-center bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-primary/5 p-2 transition-all focus-within:ring-2 focus-within:ring-primary/20">
          <Icon name="search" className="text-primary/40 px-3" />
          <input
            className="flex-1 border-none focus:ring-0 text-slate-800 placeholder:text-slate-400 font-medium"
            placeholder="City, experience, or interest..."
            type="text"
          />
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}