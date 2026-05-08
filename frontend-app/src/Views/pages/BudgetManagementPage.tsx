import React from "react";
import BudgetHeader from "../components/budget/BudgetHeader";
import BudgetHero from "../components/budget/BudgetHero";
import OverviewCards from "../components/budget/OverviewCards";
import BudgetAlerts from "../components/budget/BudgetAlerts";
import ProjectedSpendCard from "../components/budget/ProjectedSpendCard";
import CategoryAllocationCard from "../components/budget/CategoryAllocationCard";
import CategoryShareCard from "../components/budget/CategoryShareCard";
import SavingsOpportunitiesCard from "../components/budget/SavingsOpportunitiesCard";
import SmartRebalanceCard from "../components/budget/SmartRebalanceCard";
import WhatIfPlannerCard from "../components/budget/WhatIfPlannerCard";
import ExpensesTable from "../components/budget/ExpensesTable";
import FooterNote from "../components/budget/FooterNote";

export default function BudgetManagementPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-light)] text-slate-900">
      <div className="flex min-h-screen flex-col">

     

        <main className="max-w-7xl mx-auto w-full px-6 md:px-12 py-10">

          {/* Hero */}
          <BudgetHero />

          {/* Overview Cards */}
          <div className="mt-6">
            <OverviewCards />
          </div>

          {/* Alerts */}
          <div className="mt-8">
            <BudgetAlerts />
          </div>

          {/* Charts + Category */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

            <div className="lg:col-span-2 space-y-10">
              <ProjectedSpendCard />
              <CategoryAllocationCard />
            </div>

            <div className="lg:col-span-1 space-y-10">
              <CategoryShareCard />
              <SavingsOpportunitiesCard />
            </div>

          </div>

          {/* Smart tools */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
            <SmartRebalanceCard />
            <WhatIfPlannerCard />
          </div>

          {/* Table */}
          <div className="mt-12">
            <ExpensesTable />
          </div>

        </main>

        <FooterNote />

      </div>
    </div>
  );
}