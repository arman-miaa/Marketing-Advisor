import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import HomeServices from "../pages/HomeServices";
import HvacPage from "../pages/HvacPage";
import GetStarted from "../pages/hvac/GetStarted";
import MarketingSolutions from "../pages/hvac/Marketing-solutions";
import InsightsBlog from "../pages/hvac/InsightsBlog";
import AdvisorConnect from "../pages/hvac/AdvisorConnect";
import AdvertisingAi from "../pages/hvac/AdvertisingAi";
import Website from "../pages/hvac/Website";
import TeamOfExperts from "../pages/hvac/Team-of-experts";
import RankingAi from "../pages/hvac/Ranking-ai";
import ReputationAi from "../pages/hvac/Reputation-ai";

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
        path: "/hvac/advisor-connect",
        Component: AdvisorConnect,
      },
      {
        path: "/hvac/advertising-ai",
        Component: AdvertisingAi,
      },
      {
        path: "/hvac/website",
        Component: Website,
      },
      {
        path: "/hvac/team-of-experts",
        Component: TeamOfExperts,
      },
      {
        path: "/hvac/ranking-ai",
        Component: RankingAi,
      },
      {
        path: "/hvac/reputation-ai",
        Component: ReputationAi,
      },
      {
        path: "/hvac/marketing-solutions",
        Component: MarketingSolutions,
      },
      {
        path: "/hvac/insights/blog",
        Component: InsightsBlog,
      },
      {
        path: "/home-services",
        Component: HomeServices,
      },
    ],
  },
]);
