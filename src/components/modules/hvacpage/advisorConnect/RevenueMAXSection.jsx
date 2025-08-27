import React from "react";

export default function RevenueMAXSection() {
  return (
    <section className="relative py-30 md:py-40 flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute -inset-x-20 top-1/2 -translate-y-1/2 h-46 w-full blur-3xl bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <p className="text-blue-400 text-sm tracking-widest uppercase mb-4">
          REVENUEMAX
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-lg text-shadow-glow">
          Advisor Connect
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 text-gray-300">
          Turn clicks into customers, customers into revenue, and revenue into
          lifetime value.
        </p>
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Get Started
        </button>
      </div>

      {/* Tailwind CSS for text-shadow-glow (custom utility if not already defined) */}
      <style jsx>{`
        .text-shadow-glow {
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.7),
            0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(25, 118, 210, 0.3),
            0 0 20px rgba(25, 118, 210, 0.2);
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: translateY(-50%) scaleX(1);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-50%) scaleX(1.05);
            opacity: 0.7;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
