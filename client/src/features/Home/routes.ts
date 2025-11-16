import { RouteObject } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import { PATHS } from "@/routes/paths";

export const homeRoutes: RouteObject[] = [
  {
    path: PATHS.DASHBOARD,
    Component: HomeLayout,
  },
];
