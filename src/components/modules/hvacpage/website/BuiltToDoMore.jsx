import rightImg from "../../../../assets/images/hvac/website/Leads-Ai-HS-10.jpg.2505091048353.webp"
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
              category="More Than Just a Pretty Page "
              title="Loaded with features"
              highlightText="features"
            />
            {/* Bullet Points */}
            <div className="space-y-6 -mt-4 ">
              <div className="flex items-start gap-4 mt-2">
                <div className="w-3 h-3 bg-blue-500 outline-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Connect with more customers
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    With Scorpion Connect, you’ll get a 24/7 AI customer service
                    rep that can answer questions, book services, accept
                    payments, and never miss an opportunity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Allow people to book online
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Your customers can easily book open time slots on your
                    calendar or request a time that works for them.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Track everything
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Running effective marketing campaigns requires countless
                    tools: call recording, number pooling, source tracking, and
                    more. With Scorpion, you’ll have them all.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Understand every lead
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    With Leads AI, you’ll know exactly what happened with every
                    single lead, automatically.
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
