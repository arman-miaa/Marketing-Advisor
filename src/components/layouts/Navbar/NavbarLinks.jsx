import { useRef, useEffect } from "react";
import MarketingSolutions from "./dropwon/MarketingSolutions";
import Insights from "./dropwon/Insights";
import { Link, useLocation } from "react-router";

export default function NavbarLinks({ activeDropdown, setActiveDropdown, onLinkClick }) {
  const navRef = useRef(null);
  const location = useLocation();
  const isInsightsPage = location.pathname.startsWith("/hvac/insights");
 const isAboutDetailPage =
   location.pathname.startsWith("/about-us/") ||
   location.pathname.startsWith("/accommodations") ||
   location.pathname.startsWith("/privacy-policy") ||
   location.pathname.startsWith("/acceptable-use-policy");

  // common condition
  const isDarkTextPage = isInsightsPage || isAboutDetailPage;

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setActiveDropdown]);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const linkClass = (name) =>
    `cursor-pointer text-lg relative transition-colors  
     after:content-[''] after:absolute after:left-0 after:right-0 
     after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 
     after:opacity-0 hover:after:opacity-100 
     after:mt-[19px] after:top-full 
     ${activeDropdown === name ? "after:opacity-100" : ""}`;

  return (
    <nav
      ref={navRef}
      className={`hidden lg:flex items-center space-x-8 ${
        isDarkTextPage ? "text-black" : "text-white"
      }`}
    >
      {/* Home */}
      <div>
        <Link to="/hvac" className={linkClass("home")} onClick={onLinkClick}>
          Home
        </Link>
      </div>

      {/* Marketing Solutions */}
      <div>
        <button
          onClick={() => toggleDropdown("marketingSolutions")}
          className={linkClass("marketingSolutions")}
        >
          Marketing Solutions
        </button>
        {activeDropdown === "marketingSolutions" && (
          <MarketingSolutions onLinkClick={onLinkClick} />
        )}
      </div>

      {/* Partnerships */}
      <div>
        <Link
          to="/hvac/partnerships"
          className={linkClass("partnerships")}
          onClick={onLinkClick}
        >
          Partnerships
        </Link>
      </div>

      {/* Insights */}
      <div>
        <button
          onClick={() => toggleDropdown("insights")}
          className={linkClass("insights")}
        >
          Insights
        </button>
        {activeDropdown === "insights" && (
          <Insights onLinkClick={onLinkClick} />
        )}{" "}
        {/* ✅ pass onLinkClick */}
      </div>
    </nav>
  );
}
