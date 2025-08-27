import rightImg from "../../../../assets/images/hvac/website/Leads-Ai-HS-10.jpg.2505091048353.webp"
export default function BuiltToDoMore() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
                SMARTER SPEND. BIGGER IMPACT.
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Ads that fill your{" "}
                <span className="bg-purple-200 text-purple-900 px-3 py-1 rounded-lg inline-block">
                  schedule
                </span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                For years, digital advertising was judged by{" "}
                <span className="text-blue-600 font-semibold">
                  getting leads
                </span>
                . But leads aren't the goal—{" "}
                <span className="text-orange-600 font-semibold">
                  revenue is
                </span>
                .
              </p>
            </div>

            {/* Bullet Points */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Be where it matters.
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Turn pay-per-click (PPC) to social media to listings, all of
                    your advertising works together to drive your business more
                    revenue by putting you everywhere that matters when someone
                    needs you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Be one-choice strong.
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Turn <span className="text-blue-600">landing pages</span>{" "}
                    that automatically serve up the answers people are looking
                    for to <span className="text-blue-600">24/7 AI chat</span>,
                    we make your business the clear choice— no matter the
                    competition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Be in the know, always.
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Scorpion goes beyond leads, showing you exactly which jobs
                    and services are bringing you the best return on investment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Be certain of the results.
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Scorpion's advertising AI learns what drives revenue, then
                    trains the AI on your data (like Google, Microsoft, and
                    Meta) to bring you more of the right customers,
                    automatically.
                  </p>
                </div>
              </div>
            </div>


            {/* CTA Button */}
            <div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full lg:w-[90%]">
              <img
                src={rightImg}
                alt="Advertising AI Preview"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              {/* Optional overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
