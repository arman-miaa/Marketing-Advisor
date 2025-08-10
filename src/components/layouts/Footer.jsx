import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Accessibility,
} from "lucide-react";
import { Link } from "react-router"; 

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
      {/* Call to Action Section */}
      <div className="px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            MAXIMIZE
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8">
            Your Growth
          </h3>
          <button className="btn btn-primary px-8 py-3 rounded-full text-lg font-medium transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Brand */}
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold tracking-wider">SCORPION</h4>
          </div>

          {/* Navigation Links */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base">
              {[
                { href: "/about", label: "About Us" },
                { href: "/careers", label: "Careers" },
                { href: "/faq", label: "FAQ" },
                { href: "/accommodations", label: "Accommodations" },
                { href: "/acceptable-use", label: "Acceptable Use Policy" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map(({ href, label }) => (
                <li key={href}>
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

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
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
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>


    </footer>
  );
}
