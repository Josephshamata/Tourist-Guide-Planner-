import React from "react";
import { Icon } from "../common/Icon";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="travel_explore" className="text-3xl" />
              <h2 className="text-xl font-extrabold tracking-tight">Guided Lebanon</h2>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Curating authentic, premium travel experiences in the heart of the Mediterranean. Discover the soul of Lebanon with local experts.
            </p>
          </div>

          <div>
            <h6 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Explore</h6>
            <ul className="space-y-4 text-sm font-medium">
              {["All Destinations", "Private Tours", "Cultural Heritage", "Wine Routes"].map((x) => (
                <li key={x}>
                  <a className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all" href="#">
                    {x}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">About</h6>
            <ul className="space-y-4 text-sm font-medium">
              {["Our Story", "Sustainability", "Careers", "Contact Us"].map((x) => (
                <li key={x}>
                  <a className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all" href="#">
                    {x}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Newsletter</h6>
            <p className="text-xs text-white/70 mb-4">Join our community for curated travel stories and offers.</p>
            <div className="flex">
              <input
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-l-lg text-sm w-full focus:ring-1 focus:ring-white/30 border-r-0"
                placeholder="Email address"
                type="email"
              />
              <button className="bg-white text-primary px-4 rounded-r-lg font-bold hover:bg-white/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© 2024 Guided Lebanon. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
          </div>
          <div className="flex gap-4">
            <Icon name="public" className="cursor-pointer hover:text-white transition-colors" />
            <Icon name="share" className="cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}