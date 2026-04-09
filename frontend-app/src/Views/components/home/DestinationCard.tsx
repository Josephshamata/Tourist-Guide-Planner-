import React from "react";
import { Icon } from "../common/Icon";

export type Destination = {
  label: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  className?: string; 
  count?: number; 
};

export function DestinationCard({ item }: { item: Destination }) {
  const isBig = item.className?.includes("col-span-2");

  return (
    <div
      className={`relative rounded-[18px] overflow-hidden group cursor-pointer
  border border-white/15
  shadow-[0_25px_60px_-30px_rgba(0,0,0,0.6)]
  transition-transform duration-300
  hover:-translate-y-1
  ${item.className ?? ""}`.trim()}
    >
 
      <img
        className={[
          "w-full h-full object-cover",
          "transition-transform duration-1000 ease-out",
          "group-hover:scale-[1.12] group-hover:rotate-[0.3deg]",
        ].join(" ")}
        src={item.imageUrl}
        alt={item.imageAlt}
      />

      {/* Base gradient (your original) */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22/></filter><rect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.4%22/></svg>')",
        }}
      />
      {/* Spotlight overlay (adds depth) */}
      <div
        className={[
          "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-[radial-gradient(80%_80%_at_30%_20%,rgba(255,255,255,0.18)_0%,transparent_55%)]",
        ].join(" ")}
      />

      {/* Light sweep shimmer */}
      <div
        className={[
          "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.16),transparent)]",
          "-translate-x-[120%] group-hover:translate-x-[120%]",
          "transition-transform duration-1000 ease-out",
        ].join(" ")}
      />

      {/* Optional experiences count (top-right) */}
      {typeof item.count === "number" && (
        <div className="absolute top-4 right-4">
          <span className="bg-white/10 backdrop-blur px-3 py-1 rounded-full text-white text-[11px] font-semibold ring-1 ring-white/15">
            {item.count} experiences
          </span>
        </div>
      )}
      <div className="absolute top-4 left-4">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[11px] font-semibold text-white ring-1 ring-white/15">
          <Icon name="location_on" className="text-sm" />
          {item.title}
        </span>
      </div>
      {/* Bottom-left text (your original, but animated slightly) */}
      <div className="absolute bottom-4 left-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider mb-1 inline-block transition-all duration-300 group-hover:scale-[1.03]">
          {item.label}
        </span>

        {/* <h4
          className={`font-bold text-white ${isBig ? "text-3xl" : "text-xl"}`}
        >
          {item.title}
        </h4> */}

        {/* Underline grow (nice touch) */}
        <div className="mt-2 h-[2px] w-0 bg-white/70 group-hover:w-14 transition-all duration-300" />
      </div>

      {/* Bottom-right Explore CTA (appears on hover) */}
      <div className="absolute bottom-4 right-4 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <span className="bg-white/10 backdrop-blur px-3 py-2 rounded-full text-white text-xs font-bold inline-flex items-center gap-2 ring-1 ring-white/15">
          Explore <span className="text-sm">→</span>
        </span>
      </div>
    </div>
  );
}
