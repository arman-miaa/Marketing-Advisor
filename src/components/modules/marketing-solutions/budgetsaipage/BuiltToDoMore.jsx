import rightImg from "../../../../assets/images/marketing-solutions/budgets-ai/HS_Solo-34.2505122129550.jpg"
import SharedTitleSection from "../../../../shared/SharedTitleSection";
import Button from "../../../ui/Button";

export default function BuiltToDoMore() {
  return (
    <section className="py-16 md:py-30 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}

            <SharedTitleSection
              category="Dynamic Budgets, Real-Time Wins "
              title="Marketing that works harder for you"
              highlightText="works harder"
            />
            {/* Bullet Points */}
            <div className="space-y-6 -mt-4 ">
              <div className="flex items-start gap-4 mt-2">
                <div className="w-3 h-3 bg-blue-500 outline-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Automatically smarter
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    From Google Local Services Ads to Thumbtack to Angi (and so
                    much more), your budget goes to the places it will drive
                    revenue
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Set it, then reset it
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    There is no set-it-and-forget-it. Your market changes. So
                    does your spend. Budgets AI updates daily to keep you ahead,
                    not catching up.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Built to work together
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    We don’t just manage your budget effectively–we align it
                    with every part of your marketing to drive better results,
                    faster.
                  </p>
                </div>
              </div>


            </div>

            {/* CTA Button */}
            <div>
              <Button text="Get More Jobs" to="/hvac/get-started" />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full lg:w-[100%] hidden md:flex">
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
