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
import InsightsBlog2 from "../pages/hvac/InsightsBlog2";
import InsightsBlog3 from "../pages/hvac/InsightsBlog3";
import InsightsBlog4 from "../pages/hvac/InsightsBlog4";
import Partnerships from "../pages/Partnerships";
import FaqPage from "../pages/hvac/FaqPage";

import LandingPageAi from "../pages/hvac/marketing-solutions/LandingPageAi";
import SocialAdvertising from "../pages/hvac/marketing-solutions/SocialAdvertising";
import VideoAdvertising from "../pages/hvac/marketing-solutions/VideoAdvertising";
import BrandStorytelling from "../pages/hvac/marketing-solutions/BrandStorytelling";
import SocialMediaContent from "../pages/hvac/marketing-solutions/SocialMediaContent";
import CapacityMarketingEngine from "../pages/hvac/marketing-solutions/CapacityMarketingEngine";
import LeadsAi from "../pages/hvac/marketing-solutions/LeadsAi";
import RevenueIntelligence from "../pages/hvac/marketing-solutions/RevenueIntelligence";
import PlatformAndReporting from "../pages/hvac/marketing-solutions/PlatformAndReporting";
import BudgetsAi from "../pages/hvac/marketing-solutions/Budgets-ai";
import AboutUs from "../pages/footer/AboutUs";
import Careers from "../pages/footer/Careers";
import Accommodations from "../pages/footer/Accommodations";
import AcceptableUsePolicy from "../pages/footer/AcceptableUsePolicy";
import PrivacyPolicy from "../pages/footer/PrivacyPolicy";
import LeadershipDetail from "../components/modules/footer/about/LeadershipDetail";
import Electrical from "../pages/electrical/Electrical";

import Landscaping from "../pages/landscaping/Landscaping";
import PestControl from "../pages/pest-control/PestControl";
import Plumbing from "../pages/plumbing/Plumbing";
import Roofing from "../pages/roofing/Roofing";
import MarketingSolutions2 from "../pages/electrical/marketing-solutions/MarketingSolutions";
import AdvisorConnect2 from "../pages/electrical/AdvisorConnect";
import AdvertisingAi2 from "../pages/electrical/AdvertisingAi";

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
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/about-us/:id",
        Component: LeadershipDetail,
      },
      {
        path: "/about/careers",
        Component: Careers,
      },
      {
        path: "/accommodations",
        Component: Accommodations,
      },
      {
        path: "/acceptable-use-policy",
        Component: AcceptableUsePolicy,
      },
      {
        path: "/privacy-policy",
        Component: PrivacyPolicy,
      },

      // electrical page
      {
        path: "/electrical",
        Component: Electrical,
      },
      {
        path: "/electrical/marketing-solutions",
        Component: MarketingSolutions2,
      },
      {
        path: "/electrical/advertising-ai",
        Component: AdvertisingAi2,
      },
      {
        path: "/electrical/advisor-connect",
        Component: AdvisorConnect2,
      },

      // hvac page
      {
        path: "/hvac",
        Component: HvacPage,
      },
      {
        path: "/hvac/budgets-ai",
        Component: BudgetsAi,
      },
      {
        path: "/hvac/insights/faq",
        Component: FaqPage,
      },
      {
        path: "/hvac/partnerships",
        Component: Partnerships,
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
        path: "/hvac/landing-page-ai",
        Component: LandingPageAi,
      },
      {
        path: "/hvac/social-advertising",
        Component: SocialAdvertising,
      },
      {
        path: "/hvac/video-advertising",
        Component: VideoAdvertising,
      },
      {
        path: "/hvac/brand-storytelling",
        Component: BrandStorytelling,
      },
      {
        path: "/hvac/social-media-content",
        Component: SocialMediaContent,
      },
      {
        path: "/hvac/capacity-marketing-engine",
        Component: CapacityMarketingEngine,
      },
      {
        path: "/hvac/leads-ai",
        Component: LeadsAi,
      },
      {
        path: "/hvac/revenue-intelligence",
        Component: RevenueIntelligence,
      },
      {
        path: "/hvac/platform-and-reporting",
        Component: PlatformAndReporting,
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
        path: "/hvac/insights/blog2",
        Component: InsightsBlog2,
      },
      {
        path: "/hvac/insights/blog3",
        Component: InsightsBlog3,
      },
      {
        path: "/hvac/insights/blog4",
        Component: InsightsBlog4,
      },
      {
        path: "/home-services",
        Component: HomeServices,
      },

      // landscaping page
      {
        path: "/landscaping",
        Component: Landscaping,
      },

      // pest-control
      {
        path: "/pest-control",
        Component: PestControl,
      },

      // plumbing page
      {
        path: "/plumbing",
        Component: Plumbing,
      },

      // roofing page
      {
        path: "/roofing",
        Component: Roofing,
      },
    ],
  },
]);
