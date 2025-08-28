

export default function RevenueMAXSection() {
  return (
    <section className="relative py-30 md:py-40 flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute -inset-x-20 top-3/7 -translate-y-1/2 h-36 w-3/5 mx-auto blur-3xl bg-gradient-to-r from-blue-500 via-blue-500 to-blue-400 animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <p className="text-blue-400 text-sm tracking-[0.4em] uppercase mb-4">
          REVENUEMAX
        </p>
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-lg text-shadow-glow"
          style={{ textShadow: "4px 4px 8px #3b82f6" }}
        >
          Advisor Connect
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 text-gray-300">
          Turn clicks into customers, customers into revenue, and revenue into
          lifetime value.
        </p>
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-lg transition-all cursor-pointer duration-300 transform hover:scale-105 shadow-lg">
          Get Started
        </button>
      </div>

      {/* Tailwind CSS for text-shadow-glow (custom utility if not already defined) */}

    </section>
  );
}
