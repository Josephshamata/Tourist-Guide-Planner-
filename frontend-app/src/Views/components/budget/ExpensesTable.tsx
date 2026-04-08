import React from "react";
import type { ExpenseItem } from "../../../models/budget.model";

const expenses: ExpenseItem[] = [
  {
    id: 1,
    activity: "Iris Beach Club",
    category: "Experiences",
    date: "July 15, 2024",
    cost: "$240.00",
    status: "Paid",
    icon: "beach_access",
  },
  {
    id: 2,
    activity: "Four Seasons Beirut",
    category: "Accommodation",
    date: "July 15, 2024",
    cost: "$1,200.00",
    status: "Paid",
    icon: "hotel",
  },
  {
    id: 3,
    activity: "Em Sherif Restaurant",
    category: "Dining",
    date: "July 16, 2024",
    cost: "$185.00",
    status: "Pending",
    icon: "restaurant",
  },
  {
    id: 4,
    activity: "Private Airport Transfer",
    category: "Transportation",
    date: "July 15, 2024",
    cost: "$95.00",
    status: "Paid",
    icon: "directions_car",
  },
];

export default function ExpensesTable() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_10px_30px_-5px_rgba(121,12,19,0.08)] border border-[var(--primary)]/5 overflow-hidden">
      <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h3 className="text-xl font-bold">Recent Expenses</h3>

        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
              search
            </span>
            <input
              className="pl-9 pr-4 py-2 bg-slate-50 border-none rounded-full text-sm focus:ring-2 focus:ring-[var(--primary)]/20 w-full md:w-64 outline-none"
              placeholder="Search activities..."
              type="text"
            />
          </div>

          <button className="p-2 bg-slate-50 rounded-lg text-slate-500 hover:text-[var(--primary)] transition-colors">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 text-slate-400 text-xs uppercase tracking-widest font-bold">
              <th className="px-8 py-4">Activity</th>
              <th className="px-8 py-4">Category</th>
              <th className="px-8 py-4">Date</th>
              <th className="px-8 py-4 text-right">Cost</th>
              <th className="px-8 py-4 text-center">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {expenses.map((expense) => (
              <tr
                key={expense.id}
                className="hover:bg-slate-50/50 transition-colors"
              >
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center text-[var(--primary)]">
                      <span className="material-symbols-outlined text-xl">
                        {expense.icon}
                      </span>
                    </div>
                    <span className="font-bold text-slate-800">
                      {expense.activity}
                    </span>
                  </div>
                </td>

                <td className="px-8 py-5 text-sm text-slate-500 font-medium">
                  {expense.category}
                </td>

                <td className="px-8 py-5 text-sm text-slate-500">
                  {expense.date}
                </td>

                <td className="px-8 py-5 text-right font-black text-slate-900">
                  {expense.cost}
                </td>

                <td className="px-8 py-5 text-center">
                  <span
                    className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full ${
                      expense.status === "Paid"
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-amber-100 text-amber-600"
                    }`}
                  >
                    {expense.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
        <button className="text-sm font-bold text-[var(--primary)] hover:underline">
          View All Expenses
        </button>
      </div>
    </div>
  );
}