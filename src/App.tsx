import { Route, Navigate, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { Analytics } from "./pages/Analytics";
import { Budgets } from "./pages/Budgets";
import { Transactions } from "./pages/Transactions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="budgets" element={<Budgets />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
