import { RouteObject } from "react-router-dom";
import { Product } from "..";
import { ProductId } from "../:id";

export const ProductRoutes: Array<RouteObject> = [
  { index: true, element: <Product /> },
  { path: ":id", element: <ProductId /> },
];
