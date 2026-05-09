import React, { useEffect, useState } from "react";
import { ExperienceHero } from "../components/experiences/ExperienceHero";
import { ExperienceFilters } from "../components/experiences/ExperienceFilters";
import { ExperienceGrid } from "../components/experiences/ExperienceGrid";
import type { Offer } from "../../models/offer.model";
import { getOffers } from "../../services/offer.service";

export default function ExperiencesPage() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("any");
  const [sortBy, setSortBy] = useState("recommended");
  const [search, setSearch] = useState("");
  const [minDays, setMinDays] = useState("");
  const [maxDays, setMaxDays] = useState("");
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getOffers({
          search,
          category: selectedCategory,
          region: selectedRegion,
          minPrice,
          maxPrice,
          minDays,
          maxDays,
          sort: sortBy,
          page: 1,
          limit: 12,
        });
        setOffers(response.data);
      } catch {
        setError("Could not load experiences");
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, [
    search,
    selectedCategory,
    selectedRegion,
    minPrice,
    maxPrice,
    minDays,
    maxDays,
    sortBy,
  ]);

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("all");
    setSelectedRegion("All Regions");
    setMinPrice("");
    setMaxPrice("");
    setMinDays("");
    setMaxDays("");
    setSortBy("recommended");
  };

  return (
    <div className="min-h-screen bg-[#FAF8F6]">
      <ExperienceHero
        search={search}
        onSearchChange={setSearch}
        onToggleFilters={() => setShowFilters((prev) => !prev)}
      />

      <main className="mx-auto flex max-w-[1500px] gap-8 px-10 py-10">
        {showFilters && (
          <div className="sticky top-28 self-start">
            <ExperienceFilters
              selectedCategory={selectedCategory}
              selectedRegion={selectedRegion}
              minPrice={minPrice}
              maxPrice={maxPrice}
              minDays={minDays}
              maxDays={maxDays}
              sortBy={sortBy}
              onCategoryChange={setSelectedCategory}
              onRegionChange={setSelectedRegion}
              onMinPriceChange={setMinPrice}
              onMaxPriceChange={setMaxPrice}
              onMinDaysChange={setMinDays}
              onMaxDaysChange={setMaxDays}
              onSortChange={setSortBy}
              onClearFilters={clearFilters}
            />
          </div>
        )}

        <section className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-700">
              {loading
                ? "Loading experiences..."
                : `${offers.length} experiences found`}
            </p>
          </div>

          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm font-semibold text-red-600">
              {error}
            </div>
          )}

          {!loading && !error && offers.length > 0 && (
            <ExperienceGrid offers={offers} compact={showFilters} />
          )}

          {!loading && !error && offers.length === 0 && (
            <div className="rounded-3xl border border-dashed border-slate-200 bg-white/70 p-16 text-center">
              <h2 className="text-xl font-bold text-slate-900">
                No experiences found
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Try changing your filters or clearing them.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
