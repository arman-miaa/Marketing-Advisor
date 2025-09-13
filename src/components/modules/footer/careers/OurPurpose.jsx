import rightImg from "../../../../assets/images/footer/careers/scorp-building-content.jpg.2506111628301.webp";
import SharedTitleSection from "../../../../shared/SharedTitleSection";
import Button from "../../../ui/Button";
export default function OurPurpose() {
  return (
    <section className="py-16 md:py-30 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}

            <SharedTitleSection
              category="Our Mission "
              title="We exist to help local businesses succeed"
              highlightText="succeed"
            />
            {/* Bullet Points */}
            <div className="space-y-6 -mt-4 ">
              <div className="flex items-start gap-4 mt-2">
              
                <div className="space-y-6">
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Being an employee of Scorpion means taking part in work that
                    enables business owners to build their dream. We take being
                    others-focused to the next level and infuse this mindset
                    into our working dynamic.
                  </p>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    We do this by leaning into our inherent strengths and
                    allowing our mission and values to guide how we work.
                  </p>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    When we empower local business owners, we improve the lives
                    of the community members they serve - the impact of which is
                    exponential. Scorpion empowers small businesses to expand
                    their reach doing our part to cultivate a community of
                    entrepreneurs and consumer choice in service-based
                    industries.
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
