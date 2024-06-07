import { Navigate, RouteObject } from "react-router-dom";
import { Downtime } from "@/common/components/downtime";
import { DashboardLayout } from "@/common/components/layouts/dashboard-layout";
import { Overview } from "../overview";
import { ProductRoutes } from "../product/routes";
import { ProtectedRoutes } from "@/routes/ProtectedRoutes";
import { RouteEnum } from "@/common/enum/Route";

// eslint-disable-next-line react-refresh/only-export-components
const DashboardRouteList: RouteObject[] = [
  { path: RouteEnum.OVERVIEW, element: <Overview /> },
  { path: RouteEnum.PRODUCT, children: ProductRoutes },
];

export const DashboardRoutes = {
  path: "",
  element: (
    <ProtectedRoutes>
      <DashboardLayout />
    </ProtectedRoutes>
  ),
  errorElement: <Downtime />,
  children: [
    { path: "/", element: <Navigate to={RouteEnum.OVERVIEW} /> },
    ...DashboardRouteList,
  ],
};
