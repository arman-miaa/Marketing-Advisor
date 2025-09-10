import rightImg from "../../../../assets/images/marketing-solutions/social-advertising/Leads-Ai-HS-14.jpg.2505091048437.webp"
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
              category="Show up and show off "
              title="The right ad. The right jobs."
              highlightText="right jobs."
            />
            {/* Bullet Points */}
            <div className="space-y-6 -mt-4 ">
              <div className="flex items-start gap-4 mt-2">
                <div className="w-3 h-3 bg-blue-500 outline-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Keep people interested with video
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Video isn’t optional—it’s essential.{" "}
                    <span className="font-bold">it’s essential.</span> Social
                    platforms prioritize it, and your audience engages with it.
                    We create high-performing videos that tell your story, build
                    trust, and keep your HVAC business top of mind. From script
                    to screen, we{" "}
                    <span className="font-bold">handle it all.</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Immediately know what’s working
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    With our lead-scoring tech, Leads AI, you’ll instantly see
                    which leads are worth your time. No more guessing—just clear
                    insights that help us{" "}
                    <span className="font-bold">
                      double down on what’s working.
                    </span>{" "}
                    Better measurement, better ads,{" "}
                    <span className="font-bold">better results.</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Our AI. Your success.
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Social is a critical part of the overall advertising
                    strategy, but it’s just one piece. Our advertising AI
                    technology puts your HVAC business{" "}
                    <span className="font-bold">everywhere that matters,</span>
                    making sure you’re not just spending on advertising, but
                    earning
                    <span className="font-bold">off advertising.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button text="Maximize My Social Ads" to="/hvac/get-started" />
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
