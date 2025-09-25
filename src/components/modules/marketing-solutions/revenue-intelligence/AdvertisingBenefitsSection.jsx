import rightImg from "../../../../assets/images/marketing-solutions/revenue-intelligence/HS_Solo-24.2505122129550.jpg"
import SharedTitleSection from "../../../../shared/SharedTitleSection";
import Button from "../../../ui/Button";
export default function AdvertisingBenefitsSection() {
  return (
    <section className="py-16 md:py-30 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}

            <SharedTitleSection
              category="Marketing That Pays Off"
              title="How is your marketing generating revenue?"
              highlightText="generating revenue?"
              description="A simple question, but a difficult answer. Until now."
              descriptionSize="text-base md:text-3xl text-black  font-medium "
            />
            {/* Bullet Points */}
            <div className="space-y-6 -mt-12 ">
              <div className="flex items-start gap-4 mt-2">
                <div className="w-3 h-3 bg-blue-500 outline-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Know exactly where your revenue is coming from
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Clearly see the zip codes that are performing best, and
                    where you may want to focus.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Know exactly who your revenue is coming from
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Understand who is hiring you, and what’s driving them to
                    you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Know which jobs drive the highest value
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Advisor goes beyond leads, showing you exactly which jobs
                    and services are bringing you the best return on investment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Know exactly where your dollars need to go to get more
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    We’re on it. RevenueMAX uses this knowledge to go after more
                    of what’s working for you, so you see a better return on
                    investment.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className=" bg-blue-100 p-8 rounded-lg">
              <p className="text-gray-900 font-bold text-2xl ">
                Scorpion’s Revenue Intelligence tells you exactly how your
                marketing is turning into dollars (not clicks, not impressions,
                no vanity).
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Button text="Get More Jobs" to="/hvac/get-started" />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end ">
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
