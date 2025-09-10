import rightImg from "../../../../assets/images/marketing-solutions/video-advertising/Leads-Ai-HS-17.jpg.2505091048368.webp"
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
              category="Lights, Camera, Action "
              title="Great videos aren’t just for big brands. They’re for you."
              highlightText="for you."
            />
            {/* Bullet Points */}
            <div className="space-y-6 -mt-4 ">
              <div className="flex items-start gap-4 mt-2">
                <div className="w-3 h-3 bg-blue-500 outline-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Look like a pro—because you are
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    People don’t want to take chances with who they let into
                    their home. Our videos will make sure you’re the HVAC expert
                    they trust
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Feel it in the quality, see it in the results
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    We create video ads that tell your story and spotlight the
                    services your customers care about most. And with our lead
                    scoring technology, we know exactly which videos are
                    bringing in high-quality leads—so we can do more of what
                    works, faster.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Everything runs better with video
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Video drives results–and we make sure it performs.
                    Scorpion’s Advertising AI technology automatically places
                    your video where it gets the best results, turning views
                    into real jobs.
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
