import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div className="wrapper">
      <p>Dashboard Layout</p>
      <Outlet />
    </div>
  );
}
