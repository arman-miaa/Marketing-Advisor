import rightImg from "../../../../assets/images/marketing-solutions/landing-page-ai/Leads-Ai-HS-10.jpg.2505091048353.webp"
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
              category="Your Best PitcH"
              title="Turn clicks into customers."
              highlightText="customers."
              description="Get new landing pages automatically created and updated based on what people are searching for, so every visitor sees exactly what they need to hire you."
              descriptionSize="text-base md:text-3xl text-black  font-medium "
            />
            {/* Bullet Points */}
            <div className="space-y-6 -mt-12 ">
              <span className="text-3xl font-bold">revenue is. </span>
              <div className="flex items-start gap-4 mt-2">
                <div className="w-3 h-3 bg-blue-500 outline-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Always relevant
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Pages adapt to highlight videos, services, reviews, coupons,
                    and more—based on what’s most likely to convert.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Instant follow-up
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    <span className="text-blue-600">Scorpion’s Connect</span>
                    with AI Chat responds automatically 24/7 to visitor
                    inquiries to book your HVAC business more jobs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    No configuration needed
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Scorpion’s AI creates custom content, selects the best
                    layouts, and pulls in high-quality images for you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Built for speed
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Your landing page is designed to be fast and
                    mobile-friendly, so visitors find you and what they need
                    quickly, no matter where they are.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Know what’s working
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Paired with our lead scoring technology,{" "}
                    <span className="text-blue-600">Leads AI</span>, you know
                    which pages bring in the most business. Low-performing
                    layouts are removed, and new ones are introduced, so your
                    pages bring you more revenue.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className=" bg-blue-100 p-8 rounded-lg">
              <p className="text-gray-900 font-bold text-2xl ">
                Expanding to a new area? Adding services? Your pages update
                instantly, keeping your ads relevant, your costs down, and your
                new customers up—without any extra work.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Button text="Get Smarter Advertising" to="/hvac/get-started" />
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
