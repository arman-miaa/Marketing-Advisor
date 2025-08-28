import rightImg from "../../../../assets/images/hvac/advertising-ai/Leads-Ai-HS-17.jpg.2505091048368.webp"
import SharedTitleSection from "../../../../shared/SharedTitleSection";
import Button from "../../../ui/Button";
export default function AdvertisingBenefitsSection() {
  return (
    <section className="py-16 md:py-30 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}

            <SharedTitleSection
              category="Smarter Spend. Bigger Impact."
              title="Ads that fill your schedule"
              highlightText="schedule"
              description="For years, digital advertising was judged by one thing: leads. But leads aren’t the goal—"
              descriptionSize="text-base md:text-3xl text-black  font-medium "
            />
            {/* Bullet Points */}
            <div className="space-y-6 -mt-12 ">
              <span className="text-3xl font-bold">revenue is. </span>
              <div className="flex items-start gap-4 mt-2">
                <div className="w-3 h-3 bg-blue-500 outline-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Be where it matters.
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Turn pay-per-click (PPC) to social media to listings, all of
                    your advertising works together to drive your business more
                    revenue by putting you everywhere that matters when someone
                    needs you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Be one-choice strong.
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Turn <span className="text-blue-600">landing pages</span>{" "}
                    that automatically serve up the answers people are looking
                    for to <span className="text-blue-600">24/7 AI chat</span>,
                    we make your business the clear choice— no matter the
                    competition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Be in the know, always.
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Scorpion goes beyond leads, showing you exactly which jobs
                    and services are bringing you the best return on investment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Be certain of the results.
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Scorpion's advertising AI learns what drives revenue, then
                    trains the AI on your data (like Google, Microsoft, and
                    Meta) to bring you more of the right customers,
                    automatically.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className=" bg-blue-100 p-8 rounded-lg">
              <p className="text-gray-900 font-bold text-2xl ">
                Scorpion's Advertising AI puts your money where it brings in
                more.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Button text="Get Smarter Advertising" to="/hvac/get-started" />
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
