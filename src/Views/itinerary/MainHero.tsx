import React from "react";

export function MainHero() {
  return (
    <div className="mb-12">
      <span className="text-primary font-bold uppercase tracking-widest text-sm">Personalized for Elias</span>
      <h1 className="text-5xl font-extrabold mt-2 mb-4 leading-tight">
        Your 7-Day <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
          Beirut Summer
        </span>
      </h1>
      <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl">
        A curated blend of hidden coastal escapes, high-octane nightlife, and the authentic flavors of the Levant.
      </p>
    </div>
  );
}