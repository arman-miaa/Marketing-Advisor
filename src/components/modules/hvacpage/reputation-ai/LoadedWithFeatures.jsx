import rightImg from "../../../../assets/images/hvac/reputation-ai/Reputation-HVAC1.jpg.2505271526020.webp";
import SharedTitleSection from "../../../../shared/SharedTitleSection";
import Button from "../../../ui/Button";
export default function LoadedWithFeatures() {
  return (
    <section className="py-16 md:py-30 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}

            <SharedTitleSection
              category="Bulletproof your online reputation  "
              title="Own your reputation. Control your results."
              highlightText="reputation."
            />
            {/* Bullet Points */}
            <div className="space-y-6 -mt-4 ">
              <div className="flex items-start gap-4 mt-2">
                <div className="w-3 h-3 bg-blue-500 outline-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Get valuable data
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Our AI-powered sentiment analysis shows you how people feel
                    about your business—what’s working, what’s not, and where to
                    improve.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Drive more Local Services Ads business
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Reputation is critical to Google Local Services Ads. We make
                    sure your reputation is working hard to make you the obvious
                    choice.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Take control over your reputation
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    When your reputation is at its strongest, it becomes a
                    revenue generator of its own. Own your reputation and turn
                    it into steady revenue
                  </p>
                </div>
              </div>
              <div className="bg-blue-100 p-8 rounded-2xl">
                <p className="text-2xl font-semibold">
                  On average, customers using Reputation AI see 2-5x more
                  reviews and a ½ star increase in reputation, the difference
                  between being a 4-½ star business or a 5-star business.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button text="Get More Jobs" to="/hvac/get-started" />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full lg:w-[100%]">
              <img
                src={rightImg}
                alt="Advertising AI Preview"
                className="w-full h-[750px] object-cover rounded-3xl shadow-2xl"
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
