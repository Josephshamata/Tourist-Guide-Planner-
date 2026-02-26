import React from "react";
import { Icon } from "../common/Icon";
import { Button } from "../common/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/95 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <Icon name="travel_explore" className="text-4xl" />
          </div>
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900">Guided Lebanon</h1>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Destinations", "Experiences", "Personalities", "Events"].map((item) => (
            <a key={item} className="text-sm font-semibold hover:text-primary transition-colors" href="#">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost">Sign In</Button>
          <Button>Build My Trip</Button>
        </div>
      </div>
    </header>
  );
}