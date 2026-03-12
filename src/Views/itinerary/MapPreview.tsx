import React from "react";
import { Icon } from "../components/common/Icon";

export function MapPreview() {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-12">
      <div className="w-full h-64 rounded-xl overflow-hidden relative shadow-inner">
        <img
          className="w-full h-full object-cover grayscale opacity-40"
          alt="Abstract stylized map of Lebanon coast"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB2TWtyeyJa5CBIEcCkBcIBq6-T7mLrH3Eqr5qxArRB3Qt-D8pfjwHsIpDjZZat-s6oZ4zn2cm5FvNOLxtknG_ui6gaakIGOjaHT0WPI2OSqK1bptqXrDy6BzznkppXQXxYQhKN7mS5_cePLjwJsY2GozdLNeAKmF4ZdC_SNZYk0pNcb3kBxx1-TFdi9jJvNl2jd8KXX3e9gIl9s7iiUIVH8Ma1OmtToeBgwmtEOVY4snkgEJ1aS4O2U5bI5YVQ6k6RDZSy5Nz_8zA"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent" />
        <div className="absolute bottom-6 left-6">
          <div className="flex items-center gap-2 text-primary">
            <Icon name="map" />
            <span className="font-bold uppercase tracking-widest text-sm">Interactive Map</span>
          </div>
          <h3 className="text-xl font-bold">Track your 7-day movement</h3>
        </div>

        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 backdrop-blur px-8 py-3 rounded-full text-sm font-bold shadow-xl border border-primary/20">
          Open Live Map
        </button>
      </div>
    </div>
  );
}