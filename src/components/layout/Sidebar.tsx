import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ChartNoAxesCombined,
  Wallet,
  ArrowLeftRight,
} from "lucide-react";

export const Sidebar = () => {
  const navigationItems = [
    { name: "Overview", path: "/dashboard", icon: LayoutDashboard },
    { name: "Analytics", path: "/analytics", icon: ChartNoAxesCombined },
    { name: "Budgets", path: "/budgets", icon: Wallet },
    { name: "Transactions", path: "/transactions", icon: ArrowLeftRight },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white px-5 py-6">
      {/* Branding */}
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
          <Wallet size={22} />
        </div>

        <h1 className="text-xl font-bold tracking-tight text-gray-900">
          FinTrack
        </h1>
      </div>

      {/* Navigation */}
      <nav aria-label="Main navigation" className="flex flex-col gap-2">
        <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Menu
        </p>

        {navigationItems.map((navigationItem) => {
          const Icon = navigationItem.icon;

          return (
            <NavLink
              key={navigationItem.name}
              to={navigationItem.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-orange-50 text-orange-600"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              <Icon size={20} strokeWidth={2} />
              <span>{navigationItem.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="mt-auto border-t border-gray-100 pt-5">
        <p className="px-3 text-xs text-gray-400">Personal Finance Manager</p>
      </div>
    </aside>
  );
};
