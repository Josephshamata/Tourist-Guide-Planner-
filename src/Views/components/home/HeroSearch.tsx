import React from "react";
import { Icon } from "../common/Icon";

export function HeroSearch() {
  return (
    <section className="relative overflow-hidden py-7 md:py-10 px-6 bg-[#fbf7f4]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="uppercase tracking-[0.25em] text-xs font-semibold text-primary mb-4">
            --------------- The curator’s choice
          </p>

          <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-black tracking-tight font-normal text-slate-900 mb-6">
            Lebanon, Tailored for
            <br />
            the{" "}
            <span className="italic font-serif text-red-900">
              Discerning
            </span>{" "}
            Traveler
          </h1>

          <p className="max-w-lg text-slate-600 mb-10">
            Uncover a narrative of elegance through our bespoke private
            itineraries, from the sun-drenched coast to ancient mountain
            retreats.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-8">
            <button
              className={[
                "px-7 py-3 rounded-lg bg-primary text-white font-semibold shadow",
                "hover:bg-primary/90 transition",
                // press effect
                "active:scale-[0.98] active:translate-y-[1px]",
              ].join(" ")}
            >
              Custom experience
            </button>

            <button
              className={[
                "px-7 py-3 rounded-lg border border-primary text-primary font-semibold",
                "hover:bg-primary/5 transition",
                // press effect
                "active:scale-[0.98] active:translate-y-[1px]",
              ].join(" ")}
            >
              Browse experiences
            </button>
          </div>

          {/* Search */}
          <div className="max-w-xl">
            <div
              className={[
                "flex items-center bg-white rounded-xl",
                "shadow-md border border-primary/10 px-3 py-2",
                "transition-shadow duration-300",
                "hover:shadow-lg",
                "focus-within:ring-2 focus-within:ring-primary/20",
              ].join(" ")}
            >
              <Icon name="search" className="text-primary/40 mr-2" />

              <input
                type="text"
                placeholder="Where should we take you next?"
                className="flex-1 border-none focus:ring-0 outline-none text-slate-800 placeholder:text-slate-400 font-medium"
              />

              <button
                className={[
                  "bg-primary text-white px-6 py-2.5 rounded-lg font-semibold",
                  "hover:bg-primary/90 transition",
                  // press effect
                  "active:scale-[0.98] active:translate-y-[1px]",
                ].join(" ")}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT – scattered postcard cluster (keep your look) */}
        <div className="relative h-[500px] md:h-[560px]">
          {/* postcard 1 */}
          <div
            className={[
              "absolute top-0 left-10 w-52 bg-white rounded-xl p-2",
              "shadow-md transition duration-300 ease-out",
              "hover:shadow-lg hover:-translate-y-1 hover:rotate-[-3deg]",
              "rotate-[-8deg]",
            ].join(" ")}
          >
            <div className="h-56 rounded-md overflow-hidden">
              <img
                src="https://www.sophiesworld.net/wp-content/uploads/2018/07/IMG_E3312.jpg"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                alt=""
              />
            </div>
            <p className="text-xs text-slate-500 italic text-center mt-1">
              Cedars of God
            </p>
          </div>

          {/* postcard 2 */}
          <div
            className={[
              "absolute top-8 right-4 w-52 bg-white rounded-xl p-2",
              "shadow-md transition duration-300 ease-out",
              "hover:shadow-lg hover:-translate-y-1 hover:rotate-[2deg]",
              "rotate-[6deg]",
            ].join(" ")}
          >
            <div className="h-56 rounded-md overflow-hidden">
              <img
                src="https://img.freepik.com/premium-photo/aerial-view-byblos-also-known-as-jbeil-coastal-town-lebanon_261932-16927.jpg"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                alt=""
              />
            </div>
            <p className="text-xs text-slate-500 italic text-center mt-1">
              Byblos coast
            </p>
          </div>

          {/* postcard 3 */}
          <div
            className={[
              "absolute bottom-5 left-24 w-52 bg-white rounded-xl p-2",
              "shadow-md transition duration-300 ease-out",
              "hover:shadow-lg hover:-translate-y-1 hover:rotate-[3deg]",
              "rotate-[12deg]",
            ].join(" ")}
          >
            <div className="h-56 rounded-md overflow-hidden">
              <img
                src="https://cdn.n-idea.net/eyJidWNrZXQiOiJiYW1sZWIiLCJrZXkiOiI5ZjEzOTI0MDcyY2NjYmFiLXNvdWtzLmpwZyIsImVkaXRzIjp7IndlYnAiOnRydWUsImpwZWciOnRydWUsInNoYXJwZW4iOnRydWUsInJlc2l6ZSI6eyJ3aWR0aCI6NTAwLCJoZWlnaHQiOjUwMH19fQ=="
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                alt=""
              />
            </div>
            <p className="text-xs text-slate-500 italic text-center mt-1">
              Old souks
            </p>
          </div>

          {/* postcard 4 */}
          <div
            className={[
              "absolute bottom-0 right-10 w-52 bg-white rounded-xl p-2",
              "shadow-md transition duration-300 ease-out",
              "hover:shadow-lg hover:-translate-y-1 hover:rotate-[-2deg]",
              "rotate-[-5deg]",
            ].join(" ")}
          >
            <div className="h-56 rounded-md overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDA5Gpq54ROABEQdQxai3MCbgZGoLfCGvnIw&s"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                alt=""
              />
            </div>
            <p className="text-xs text-slate-500 italic text-center mt-1">
              Mountain road
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
