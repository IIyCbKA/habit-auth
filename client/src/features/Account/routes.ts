import { RouteObject } from "react-router-dom";
import AccountLayout from "./AccountLayout";
import { PATHS } from "@/routes/paths";
import RootAccount from "@/features/Account/pages/Root";

export const accountRoutes: RouteObject[] = [
  {
    path: PATHS.ACCOUNT,
    Component: AccountLayout,
    children: [{ index: true, Component: RootAccount }],
  },
];
