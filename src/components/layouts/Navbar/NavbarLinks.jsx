import { useRef, useEffect } from "react";
import About from "./dropwon/AboutUs";
import MarketingSolutions from "./dropwon/MarketingSolutions";
import WhoWeHelp from "./dropwon/WhoWeHelp";
import Insights from "./dropwon/Insights";
import { Link } from "react-router";

export default function NavbarLinks({ activeDropdown, setActiveDropdown }) {
  const navRef = useRef(null);

  // Outside click handler
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
    <nav ref={navRef} className="hidden lg:flex items-center space-x-8">
      {/* Home */}
      <div>
        <Link to="/hvac" className={linkClass("home")}>
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
        {activeDropdown === "marketingSolutions" && <MarketingSolutions />}
      </div>

      {/* Partnerships */}
      <div>
        <Link to="/Partnerships" className={linkClass("partnerships")}>
          Partnerships
        </Link>
      </div>

      {/* Insights */}
      <div>
        <button
          onClick={() => toggleDropdown("aboutUs")}
          className={linkClass("aboutUs")}
        >
          Insights
        </button>
        {activeDropdown === "aboutUs" && <Insights />}
      </div>
    </nav>
  );
}
