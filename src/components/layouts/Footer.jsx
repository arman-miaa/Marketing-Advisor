import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Accessibility,
} from "lucide-react";
import { Link } from "react-router";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
      {/* Call to Action Section */}
      <div className="px-4 py-16 md:py-40 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl  font-bold mb-4">MAXIMIZE</h2>
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-light mb-20">
            Your Growth
          </h3>
          {/* btn */}
          <div className="flex justify-center">
            <Button text={` Schedule Consultation`} />
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className=" border-gray-700">
        <div className="max-w-7xl  mx-auto px-4 py-8">
          {/* Brand */}

          <div className="flex items-center w-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h4 className="text-2xl hidden md:flex font-bold tracking-wider cursor-pointer ">
                <Link>Marketing AdvisorN</Link>
              </h4>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1">
              <h4 className="text-2xl md:hidden text-center  font-bold tracking-wider cursor-pointer ">
                <Link>Marketing AdvisorN</Link>
              </h4>
              <ul className="flex flex-col md:flex-row justify-between w-full md:text-base  border-gray-700 md:border-0 pt-4 md:pt-0 gap-2 md:gap-0">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/careers", label: "Careers" },
                  { href: "/faq", label: "FAQ" },
                  { href: "/accommodations", label: "Accommodations" },
                  { href: "/acceptable-use", label: "Acceptable Use Policy" },
                  { href: "/privacy", label: "Privacy Policy" },
                ].map(({ href, label }) => (
                  <li
                    key={href}
                    className="text-center border-t md:border-t-0 border-gray-500 md:flex-1"
                  >
                    <Link
                      to={href}
                      className="hover:text-blue-400 transition-colors block py-2 md:py-0"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <hr className="pb-6 mt-6 border-gray-600" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright and Phone */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span>© 2025 All Rights Reserved.</span>
              <a
                href="tel:8663448852"
                className="hover:text-blue-400 transition-colors font-medium"
              >
                (866) 344-8852
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <Link
                  key={i}
                  to="#"
                  className="hover:text-blue-400 transition-colors"
                  aria-label={Icon.name}
                >
                  <Icon size={30} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
