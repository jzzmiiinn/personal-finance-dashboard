import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const MainLayout = () => {
  const location = useLocation();

  const pageTitles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/analytics": "Analytics",
    "/budgets": "Budgets",
    "/transactions": "Transactions",
  };

  const title = pageTitles[location.pathname] ?? "Dashboard";

  return (
    <main className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header title={title} />

        <section className="flex-1 p-8">
          <Outlet />
        </section>
      </div>
    </main>
  );
};
