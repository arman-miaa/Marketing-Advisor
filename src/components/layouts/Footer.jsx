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
          <h2 className="text-4xl md:text-7xl  font-bold mb-4">
            MAXIMIZE
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-light mb-20">
            Your Growth
          </h3>
{/* btn */}
          <Button text={` Schedule Consultation`} />
        </div>
      </div>

      {/* Footer Content */}
      <div className=" border-gray-700">
        <div className="max-w-7xl  mx-auto px-4 py-8">
          {/* Brand */}

          <div className="flex items-center w-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h4 className="text-2xl font-bold tracking-wider cursor-pointer ">
                <Link>SCORPION</Link>
              </h4>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1">
              <ul className="flex justify-between w-full md:text-base">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/careers", label: "Careers" },
                  { href: "/faq", label: "FAQ" },
                  { href: "/accommodations", label: "Accommodations" },
                  { href: "/acceptable-use", label: "Acceptable Use Policy" },
                  { href: "/privacy", label: "Privacy Policy" },
                ].map(({ href, label }) => (
                  <li key={href} className="flex-1 text-center">
                    <Link
                      to={href}
                      className="hover:text-blue-400 transition-colors"
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
