import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="wrapper">
      <p>Auth Layout</p>
      <Outlet />
    </div>
  );
}
