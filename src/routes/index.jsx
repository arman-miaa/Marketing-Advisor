import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import HomeServices from "../pages/HomeServices";
import HvacPage from "../pages/HvacPage";
import GetStarted from "../pages/GetStarted";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/hvac",
        Component: HvacPage,
      },
      {
        path: "/hvac/get-started",
        Component: GetStarted,
      },
      {
        path: "/home-services",
        Component: HomeServices,
      },
    ],
  },
]);
