

import { useState } from "react";
import { Menu, Phone, User } from "lucide-react";
import { Link } from "react-router";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";
import Button from "../../ui/Button";


export default function Navbar() {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const [activeDropdown, setActiveDropdown] = useState(null);
 const [activeMobileSection, setActiveMobileSection] = useState(null);
  return (
    <>
      {/* Blue notification bar */}
      <div className="bg-blue-500 flex items-center justify-center text-white text-center gap-1 py-2  text-sm md:text-lg font-bold">
        <span className="">
          <IoNotifications className="text-2xl" />
        </span>
        30-50% of calls go unanswered. Scorpion Convert helps you answer them
        all.
        <Link href="#" className="ml-2 underline hover:text-[#ffffffb4] ">
          Learn more
        </Link>
      </div>

      {/* Desktop Header */}
      <header
        className={`absolute top-10 left-0 py-4 right-0 w-full z-50 transition-colors duration-300 ${
          activeDropdown ? "bg-black text-white" : "bg-transparent text-white"
        }`}
      >
        <div className=" px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl md:text-3xl font-bold tracking-wider"
            >
              SCORPION
            </Link>

            {/* Desktop Navigation */}
            <NavbarLinks
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center text-lg space-x-6">
              <Link
                href="/login"
                className="flex items-center text-xl font-medium space-x-1 hover:text-blue-400 transition-colors"
              >
                <MdOutlineLogin size={20} />
                <span>Login</span>
              </Link>
              <Link href="tel:8663448852" className="font-extrabold">
                (866) 344-8852
              </Link>

              {/* button */}
      <Button/>
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
