import { useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";
import Button from "../../ui/Button";
import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileSection, setActiveMobileSection] = useState(null);

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isInsightsPage = location.pathname.startsWith("/hvac/insights");

  return (
    <>
      {/* Blue notification bar - only on home page */}
      {isHomePage && (
        <div className="bg-blue-500 flex flex-col md:flex-row items-center justify-center text-white text-center gap-1 py-2 text-sm md:text-lg font-bold">
          <span>
            <IoNotifications className="text-2xl" />
          </span>
          30-50% of calls go unanswered. Marketing Advisorn Convert helps you
          answer them all.
          <Link to="#" className="ml-2 underline hover:text-[#ffffffb4]">
            Learn more
          </Link>
        </div>
      )}

      {/* ✅ Extra Mobile Sticky Navbar ONLY for Home Page */}
      {isHomePage && (
        <header className="md:hidden sticky top-0 left-0 right-0 bg-black text-white z-50">
          <div className="flex items-center justify-between h-14 px-4">
            <Link to="/" className="text-xl font-bold tracking-wider">
              Marketing Advisor
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="tel:8663448852" className="hover:text-blue-400">
                <FaPhoneAlt size={22} />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="hover:text-blue-400"
              >
                <Menu size={30} />
              </button>
            </div>
          </div>
        </header>
      )}

      {/* 🔹 Main Navbar (for all pages) */}
      {!(isHomePage && window.innerWidth < 768) && (
        <header
          className={`absolute ${
            isHomePage ? "top-10" : "top-0"
          } left-0 py-4 right-0 w-full z-40 transition-colors duration-300 ${
            activeDropdown ? "bg-black text-white" : "bg-transparent text-white"
          }`}
        >
          <div className="px-6 md:px-12">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}

              <Link
                to="/"
                className={`text-3xl font-bold tracking-wider ${
                  isInsightsPage ? "text-black" : "text-white"
                }`}
              >
                Marketing Advisor
              </Link>

              {/* Desktop Navigation */}
              <NavbarLinks
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />

              {/* Desktop Right Side */}
              <div className="hidden lg:flex items-center text-lg space-x-6">
                <Link
                  to="/login"
                  className={`flex items-center text-xl font-medium space-x-1 hover:text-blue-400 transition-colors ${
                    isInsightsPage ? "text-black" : "text-white"
                  }`}
                >
                  <MdOutlineLogin size={20} />
                  <span>Login</span>
                </Link>
                <Link
                  to="tel:8663448852"
                  className={`font-extrabold ${
                    isInsightsPage ? "text-black" : "text-white"
                  }`}
                >
                  (866) 344-8852
                </Link>
                <Button text="Get Started" to="/hvac/get-started" />
              </div>

              {/* Mobile Menu Button (other pages only) */}
              <div className="lg:hidden flex items-center space-x-4 md:flex">
                <Link to="tel:8663448852" className="hover:text-blue-400">
                  <FaPhoneAlt size={28} />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="hover:text-blue-400"
                >
                  <Menu size={38} />
                </button>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => {
          setIsMobileMenuOpen(false);
          setActiveMobileSection(null);
        }}
        activeMobileSection={activeMobileSection}
        setActiveMobileSection={setActiveMobileSection}
      />
    </>
  );
}
