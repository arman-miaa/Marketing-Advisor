

import { useState } from "react";
import { Menu, Phone, User } from "lucide-react";
import { Link } from "react-router";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";


export default function Navbar() {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const [activeDropdown, setActiveDropdown] = useState(null);
 const [activeMobileSection, setActiveMobileSection] = useState(null);
  return (
    <>
      {/* Blue notification bar */}
      <div className="bg-blue-600 text-white text-center py-2 px-4 text-sm">
        <span className="mr-2">📞</span>
        30-50% of calls go unanswered. Scorpion Convert helps you answer them
        all.
        <Link href="#" className="ml-2 underline hover:no-underline">
          Learn more
        </Link>
      </div>

      {/* Desktop Header */}
      <header
        className={`absolute top-9 left-0 right-0 w-full z-50 transition-colors duration-300 ${
          activeDropdown ? "bg-black text-white" : "bg-transparent text-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold tracking-wider">
              SCORPION
            </Link>

            {/* Desktop Navigation */}
            <NavbarLinks
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                href="/login"
                className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
              >
                <User size={16} />
                <span>Login</span>
              </Link>
              <Link
                href="tel:8663448852"
                className="hover:text-blue-400 transition-colors"
              >
                (866) 344-8852
              </Link>
              <Link
                href="/get-started"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <Link
                href="tel:8663448852"
                className="hover:text-blue-400 transition-colors"
              >
                <Phone size={20} />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="hover:text-blue-400 transition-colors"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

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
