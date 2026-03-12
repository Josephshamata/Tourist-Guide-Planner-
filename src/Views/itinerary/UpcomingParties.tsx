import React from "react";
import { Icon } from "../components/common/Icon";

export function UpcomingParties() {
  return (
    <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-700">
      <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-slate-400">Upcoming Parties</h4>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              alt="Crowded nightlife dance floor"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7invSUw1PpiHtUUFK4_3rBl91OK0GqzAqVNHvCGz3VaLj4Iim_ljg-a5gGZLs1WJA52MRMsrU4aGh5fuoLc6xAZdnoO2HYQzunn45FjY7ZYdE0IGnOn-Q131HPUuDcW5KHW0TiflEGnTiKSdqfPAh5ciUgA6qfVoCSUjiIKxBNxwXcKTUJTlj8PfGxmnGOzjLhislUaGktNdrPPayqYQWWd_pFIxPFuPg_LYwiGQ2BXZtDrDW53kJ1SYVHKqpOz7hFU8WFHuah94V"
            />
          </div>
          <div>
            <p className="text-sm font-bold">Akyz Rooftop Night</p>
            <p className="text-[10px] text-primary font-bold">JULY 17 • 10:00 PM</p>
          </div>
          <button className="ml-auto text-slate-300">
            <Icon name="bookmark_border" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              alt="Outdoor festival stage"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaIIj6KcMXpKjq7Dkaxp3hR4Dz4wdVlw4_FAyt1wbS6kXPTs2a6PGMPGjvltwtoX96JtQg7R22iNCHLym5jobjwbAZ6utAVPn_KH050WmnrP8LTpwCnY9hYOa9NzhVBQhgKQihMxbtg_AMA40tV6CXN1FqZU7Vfh_ikuhRCbgPtGW-7Y5JSaP1Iu2CmRFuN00eeH4kagM-Qfcnhakxs9V31WklBme-wkM0fafOdfwfp8YY-urHpwYFvPECg5x_Aq5gygCeEaRYXktB"
            />
          </div>
          <div>
            <p className="text-sm font-bold">Grand Factory Live</p>
            <p className="text-[10px] text-primary font-bold">JULY 19 • 11:30 PM</p>
          </div>
          <button className="ml-auto text-slate-300">
            <Icon name="bookmark_border" />
          </button>
        </div>
      </div>
    </div>
  );
}