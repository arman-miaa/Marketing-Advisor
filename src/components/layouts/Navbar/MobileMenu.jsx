import { X, ChevronRight, ChevronLeft } from "lucide-react";
import WhoWeHelp from "./dropwon/WhoWeHelp";
import About from "./dropwon/AboutUs";
import Insights from "./dropwon/Insights";
import MarketingSolutions from "./dropwon/MarketingSolutions";
import { Link } from "react-router";
import { useState } from "react";

export default function MobileMenu({
  isOpen,
  onClose,
  activeMobileSection,
  setActiveMobileSection,
}) {
  const [showCategory, setShowCategory] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black text-white bg-opacity-95 z-50 lg:hidden">
      {/* 🔹 Bottom Blue Shadow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-60 bg-gradient-to-t from-blue-800/60 via-blue-700/30 to-transparent blur-2xl"></div>

      <div className="flex flex-col h-full">
        {/* 🔹 Mobile Header */}
        <div
          className={`flex items-center justify-between p-6 ${
            activeMobileSection !== null ? "border-b border-blue-700" : ""
          }`}
        >
          {/* Back button */}
          {activeMobileSection !== null ? (
            <button
              onClick={() => {
                if (showCategory) {
                  setShowCategory(null);
                } else {
                  setActiveMobileSection(null);
                }
              }}
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <ChevronLeft size={28} />
              <span className="text-lg">Back</span>
            </button>
          ) : (
            <span className="text-xl font-bold"></span>
          )}

          {/* Close (X) */}
          <button
            onClick={onClose}
            className="hover:text-blue-400 transition-colors"
          >
            <X size={32} />
          </button>
        </div>

        {/* 🔹 Mobile Navigation */}
        <div className="flex-1 overflow-y-auto text-2xl ml-4 mr-4">
          {activeMobileSection === null && (
            <nav className="p-4 space-y-4">
              <Link to="/hvac" className="block cursor-pointer">
                Home
              </Link>
              <hr className="border-t border-gray-500" />

              <button
                onClick={() => {
                  setActiveMobileSection("marketingSolutions");
                  setShowCategory(null);
                }}
                className="flex items-center justify-between w-full text-left cursor-pointer"
              >
                <span>Marketing Solutions</span>
                <ChevronRight size={28} />
              </button>
              <hr className="border-t border-gray-500" />

              <Link to="/Partnerships" className="block cursor-pointer">
                Partnerships
              </Link>
              <hr className="border-t border-gray-500" />

              <button
                onClick={() => setActiveMobileSection("Insights")}
                className="flex items-center justify-between w-full text-left cursor-pointer"
              >
                <span>Insights</span>
                <ChevronRight size={28} />
              </button>
              <hr className="border-t border-gray-500" />
            </nav>
          )}

          {/* 🔹 Nested Menus */}
          {activeMobileSection === "marketingSolutions" && (
            <MarketingSolutions
              isMobile
              onBack={() => setActiveMobileSection(null)}
              showCategory={showCategory}
              setShowCategory={setShowCategory}
            />
          )}

          {activeMobileSection === "Insights" && (
            <Insights isMobile onBack={() => setActiveMobileSection(null)} />
          )}
          {activeMobileSection === "whoWeHelp" && (
            <WhoWeHelp isMobile onBack={() => setActiveMobileSection(null)} />
          )}
          {activeMobileSection === "aboutUs" && (
            <About isMobile onBack={() => setActiveMobileSection(null)} />
          )}
        </div>
      </div>
    </div>
  );
}
