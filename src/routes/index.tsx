import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routesList } from "./RouteList";

const router = createBrowserRouter([...routesList]);

export const AppRouter = () => {
  return (
    <RouterProvider router={router} fallbackElement={<p>Loading ...</p>} />
  );
};
