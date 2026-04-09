import React from "react";
import type { BudgetAlert } from "../../../models/budget.model";


const alerts: BudgetAlert[] = [
  {
    id: 1,
    type: "critical",
    title: "Accommodation exceeded by $250",
    subtitle: "High priority: Review upcoming bookings",
    icon: "warning",
  },
  {
    id: 2,
    type: "warning",
    title: "Dining is running low",
    subtitle: "85% of category budget used",
    icon: "error_outline",
  },
  {
    id: 3,
    type: "success",
    title: "Transportation On Track",
    subtitle: "Only 12% of budget utilized",
    icon: "check_circle",
  },
];

const styles = {
  critical: {
    wrapper: "bg-rose-50 border border-rose-100",
    icon: "bg-rose-500",
    title: "text-rose-900",
    subtitle: "text-rose-700/70",
  },
  warning: {
    wrapper: "bg-amber-50 border border-amber-100",
    icon: "bg-amber-500",
    title: "text-amber-900",
    subtitle: "text-amber-700/70",
  },
  success: {
    wrapper: "bg-emerald-50 border border-emerald-100",
    icon: "bg-emerald-500",
    title: "text-emerald-900",
    subtitle: "text-emerald-700/70",
  },
};

export default function BudgetAlerts() {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-[var(--primary)]">
          notifications_active
        </span>
        Budget Alerts
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {alerts.map((alert) => {
          const current = styles[alert.type];

          return (
            <div
              key={alert.id}
              className={`${current.wrapper} p-5 rounded-2xl flex items-start gap-4`}
            >
              <div
                className={`size-10 rounded-full ${current.icon} flex items-center justify-center text-white shrink-0`}
              >
                <span className="material-symbols-outlined text-xl">
                  {alert.icon}
                </span>
              </div>

              <div>
                <p className={`${current.title} font-bold text-sm`}>
                  {alert.title}
                </p>
                <p className={`${current.subtitle} text-xs font-medium`}>
                  {alert.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}