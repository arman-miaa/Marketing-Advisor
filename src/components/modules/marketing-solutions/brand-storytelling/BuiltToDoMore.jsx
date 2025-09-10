import rightImg from "../../../../assets/images/marketing-solutions/brand-storytelling/Brand-Story-HS.jpg.2505071929310.webp"
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
              title="A finished video is just the beginning"
              highlightText="beginning"
            />
            {/* Bullet Points */}
            <div className="space-y-6 -mt-4 ">
              <div className="flex items-start gap-4 mt-2">
                <div className="w-3 h-3 bg-blue-500 outline-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Bring your site to life
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    With video and photography that help tell everyone all that
                    you are, your site will turn visitors into leads and leads
                    into jobs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Create connections on every level
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    From your website to ads to social content, your new assets
                    need to be everywhere people are looking for you. We’ll make
                    sure they are.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Great video and photography, great results
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Marketing your story is one of the key ways to make your
                    HVAC business the obvious choice when someone is considering
                    who to choose. They’ll feel like they already know you.
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
