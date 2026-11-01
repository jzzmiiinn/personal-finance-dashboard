import { Wallet, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";
import { SummaryCard } from "../components/dashboard/SummaryCard";
import { RecentTransactions } from "../components/dashboard/RecentTransactions";

export const Dashboard = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          title="Total Balance"
          amount={45250}
          icon={<Wallet className="text-orange-500" size={22} />}
          description="+12.5% this month"
        />
        <SummaryCard
          title="Total Income"
          amount={65000}
          icon={<TrendingUp className="text-green-500" size={22} />}
          description="+8.5% this month"
        />
        <SummaryCard
          title="Total Expenses"
          amount={19750}
          icon={<TrendingDown className="text-red-500" size={22} />}
          description="This month"
        />
        <SummaryCard
          title="Savings"
          amount={45250}
          icon={<PiggyBank className="text-blue-500" size={22} />}
          description="69.6% of income"
        />
      </div>
      <RecentTransactions />
    </section>
  );
};
