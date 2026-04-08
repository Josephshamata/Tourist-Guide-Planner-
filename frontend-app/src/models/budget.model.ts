export interface OverviewStat {
  label: string;
  value: string;
  helper?: string;
  helperColor?: string;
  progress?: number;
  highlighted?: boolean;
}

export interface BudgetAlert {
  id: number;
  type: "critical" | "warning" | "success";
  title: string;
  subtitle: string;
  icon: string;
}

export interface CategoryAllocation {
  name: string;
  spent: string;
  allocated: string;
  progress: number;
}

export interface SavingsOpportunity {
  id: number;
  title: string;
  subtitle: string;
  actionLabel: string;
}

export interface RebalanceRecommendation {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
}

export interface ExpenseItem {
  id: number;
  activity: string;
  category: string;
  date: string;
  cost: string;
  status: "Paid" | "Pending";
  icon: string;
}