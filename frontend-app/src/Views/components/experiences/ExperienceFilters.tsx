import React from "react";
import { AppSelect } from "../common/AppSelect";
import { SearchableSelect } from "../common/SearchableSelect";

const categories = [
  { label: "All Experiences", value: "all", count: 8, icon: "apps" },
  { label: "Luxury", value: "luxury", count: 3, icon: "diamond" },
  { label: "Adventure", value: "adventure", count: 2, icon: "hiking" },
  { label: "Culture", value: "culture", count: 4, icon: "museum" },
  { label: "Food & Wine", value: "food", count: 2, icon: "restaurant" },
  { label: "Nature", value: "nature", count: 3, icon: "forest" },
  { label: "Beach", value: "beach", count: 2, icon: "beach_access" },
  { label: "Romantic", value: "romantic", count: 1, icon: "favorite" },
  { label: "Nightlife", value: "nightlife", count: 2, icon: "nightlife" },
];

const regionOptions = [
  { label: "All Regions", value: "All Regions" },
  { label: "Beirut", value: "Beirut" },
  { label: "North Lebanon", value: "North Lebanon" },
  { label: "South Lebanon", value: "South Lebanon" },
  { label: "Mount Lebanon", value: "Mount Lebanon" },
  { label: "Bekaa", value: "Bekaa" },
];

const sortOptions = [
  { label: "Recommended", value: "recommended" },
  { label: "Price: Low to High", value: "price-low" },
  { label: "Price: High to Low", value: "price-high" },
  { label: "Shortest Trips", value: "days-low" },
  { label: "Longest Trips", value: "days-high" },
];

type Props = {
  selectedCategory: string;
  selectedRegion: string;
  minPrice: string;
  maxPrice: string;
  minDays: string;
  maxDays: string;
  sortBy: string;
  onCategoryChange: (value: string) => void;
  onRegionChange: (value: string) => void;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
  onMinDaysChange: (value: string) => void;
  onMaxDaysChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onClearFilters: () => void;
};

export function ExperienceFilters({
  selectedCategory,
  selectedRegion,
  minPrice,
  maxPrice,
  minDays,
  maxDays,
  sortBy,
  onCategoryChange,
  onRegionChange,
  onMinPriceChange,
  onMaxPriceChange,
  onMinDaysChange,
  onMaxDaysChange,
  onSortChange,
  onClearFilters,
}: Props) {
  return (
    <aside className="w-[280px] rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Categories */}
      <div>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-800">Categories</h2>
          <span className="material-symbols-outlined text-lg text-slate-600">
            keyboard_arrow_up
          </span>
        </div>

        <div className="space-y-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category.value;

            return (
              <button
                key={category.value}
                type="button"
                onClick={() => onCategoryChange(category.value)}
                className={`flex w-full items-center justify-between text-sm transition ${
                  isActive
                    ? "text-[var(--primary)]"
                    : "text-slate-600 hover:text-[var(--primary)]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`material-symbols-outlined text-[18px] ${
                      isActive ? "text-[var(--primary)]" : "text-slate-400"
                    }`}
                  >
                    {category.icon}
                  </span>

                  {category.label}
                </span>

                <span className="text-xs text-slate-400">{category.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="my-5 border-t border-slate-100" />

      {/* Location */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-sm font-bold text-slate-800">
            <span className="material-symbols-outlined text-[18px] text-[var(--primary)]">
              location_on
            </span>
            Location
          </h3>
        </div>

        <SearchableSelect
          value={selectedRegion}
          options={regionOptions}
          onChange={onRegionChange}
          placeholder="Search region..."
        />
      </div>

      <div className="my-5 border-t border-slate-100" />

      {/* Price */}
      <div>
        <h3 className="mb-3 text-sm font-bold text-slate-800">Price Range</h3>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-400">
              Min
            </label>

            <input
              type="number"
              min="0"
              placeholder="$0"
              value={minPrice}
              onChange={(event) => onMinPriceChange(event.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none focus:border-[var(--primary)]"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-400">
              Max
            </label>

            <input
              type="number"
              min="0"
              placeholder="$5000"
              value={maxPrice}
              onChange={(event) => onMaxPriceChange(event.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none focus:border-[var(--primary)]"
            />
          </div>
        </div>
      </div>

      <div className="my-5 border-t border-slate-100" />

      {/* Sort */}
      <div>
        <h3 className="mb-3 text-sm font-bold text-slate-800">Sort by</h3>

        <AppSelect
          value={sortBy}
          options={sortOptions}
          onChange={onSortChange}
          placeholder="Sort by"
        />
      </div>
      <div className="my-5 border-t border-slate-100" />

      {/* Duration */}
      <div>
        <h3 className="mb-3 text-sm font-bold text-slate-800">Duration</h3>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-400">
              Min Days
            </label>

            <input
              type="number"
              min="1"
              placeholder="Any"
              value={minDays}
              onChange={(event) => onMinDaysChange(event.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none focus:border-[var(--primary)]"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-400">
              Max Days
            </label>

            <input
              type="number"
              min="1"
              placeholder="Any"
              value={maxDays}
              onChange={(event) => onMaxDaysChange(event.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none focus:border-[var(--primary)]"
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={onClearFilters}
        className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 text-sm font-bold text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
      >
        <span className="material-symbols-outlined text-lg">restart_alt</span>
        Clear Filters
      </button>
    </aside>
  );
}
