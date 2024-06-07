import { RouteObject } from "react-router-dom";

import { BaseApp } from "./BaseApp";
import { AuthRoutes } from "@/features/auth/route";
import { Downtime } from "@/common/components/downtime";
import { NotFound } from "@/common/components/notfound";
import { DashboardRoutes } from "@/features/dashboard/route";

export const routesList: RouteObject[] = [
  {
    path: "",
    element: <BaseApp />,
    errorElement: <Downtime />,
    children: [AuthRoutes, DashboardRoutes],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
