

import { X, ChevronRight } from "lucide-react"
import WhoWeHelp from "./dropwon/WhoWeHelp"
import MarketingSolutions from "./dropwon/MarketingSolutions"
import About from "./dropwon/AboutUs"



export default function MobileMenu({ isOpen, onClose, activeMobileSection, setActiveMobileSection }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black text-white bg-opacity-95 z-50 lg:hidden">
      <div className="flex flex-col h-full">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="text-xl font-bold">SCORPION</span>
          <button onClick={onClose} className="hover:text-blue-400 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex-1 overflow-y-auto">
          {activeMobileSection === null && (
            <nav className="p-4 space-y-4">
              <button
                onClick={() => setActiveMobileSection("whoWeHelp")}
                className="flex items-center justify-between w-full text-left hover:text-blue-400 transition-colors"
              >
                <span>Who We Help</span>
                <ChevronRight size={20} />
              </button>
              <button
                onClick={() => setActiveMobileSection("marketingSolutions")}
                className="flex items-center justify-between w-full text-left hover:text-blue-400 transition-colors"
              >
                <span>Marketing Solutions</span>
                <ChevronRight size={20} />
              </button>
              <button
                onClick={() => setActiveMobileSection("aboutUs")}
                className="flex items-center justify-between w-full text-left hover:text-blue-400 transition-colors"
              >
                <span>About Us</span>
                <ChevronRight size={20} />
              </button>
            </nav>
          )}

          {activeMobileSection === "whoWeHelp" && <WhoWeHelp isMobile onBack={() => setActiveMobileSection(null)} />}

          {activeMobileSection === "marketingSolutions" && (
            <MarketingSolutions isMobile onBack={() => setActiveMobileSection(null)} />
          )}

          {activeMobileSection === "aboutUs" && <About isMobile onBack={() => setActiveMobileSection(null)} />}
        </div>
      </div>
    </div>
  )
}
