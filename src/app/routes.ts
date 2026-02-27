import { createBrowserRouter } from "react-router";
import { DashboardLayout } from "./components/dashboard/DashboardLayout";
import { Overview } from "./components/dashboard/Overview";
import { Analytics } from "./components/dashboard/Analytics";
import { Customers } from "./components/dashboard/Customers";
import { Products } from "./components/dashboard/Products";
import { Settings } from "./components/dashboard/Settings";
import { NotFound } from "./components/dashboard/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Overview },
      { path: "analytics", Component: Analytics },
      { path: "customers", Component: Customers },
      { path: "products", Component: Products },
      { path: "settings", Component: Settings },
      { path: "*", Component: NotFound },
    ],
  },
]);
