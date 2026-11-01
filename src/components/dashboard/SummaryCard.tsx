import type { ReactNode } from "react";

interface SummaryCardProps {
  title: string;
  amount: number;
  icon: ReactNode;
  description: string;
}

export const SummaryCard = ({
  title,
  amount,
  icon,
  description,
}: SummaryCardProps) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2>{title}</h2>
        {icon}
      </div>
      <div>
        <p className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
          <span className="mr-2 text-sm font-medium text-gray-500">ETB</span>
          {amount.toLocaleString("en-US")}
        </p>
      </div>
      <p>{description}</p>
    </div>
  );
};
