import rightImg from "../../../../assets/images/hvac/ranking-ai/RevenueApp-Hvac.jpg.2505091048450.webp"
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
              category="Enjoy the view from the top "
              title="If they can’t find you, they can’t call you."
              highlightText="call you."
            />
            {/* Bullet Points */}
            <div className="space-y-6 -mt-4 ">
              <div className="flex items-start gap-4 mt-2">
                <div className="w-3 h-3 bg-blue-500 outline-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Stay ahead. Always.
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Search engines and what matters to them change constantly.
                    Ranking AI adapts in real-time, so no matter the update, you
                    keep showing up on top
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Maximize every dollar
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    SEO is only one piece of the puzzle. By knowing the search
                    terms driving results across both SEO and paid advertising,
                    we ensure every dollar works hard.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    You see the results
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Higher rankings mean more visibility, more calls, and more
                    revenue. With real-time tracking, you’ll always know how
                    your marketing is delivering results.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button text="Start Ranking" to="/hvac/get-started" />
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
