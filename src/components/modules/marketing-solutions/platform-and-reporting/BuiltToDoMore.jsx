import rightImg from "../../../../assets/images/marketing-solutions/platform-and-reporting/HS_Solo-87.2505122129550.jpg"
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
              category="Know what's what  "
              title="Maximum transparency. Maximum revenue."
              highlightText="Maximum revenue."
            />
            {/* Bullet Points */}
            <div className="space-y-6 -mt-4 ">
              <div className="flex items-start gap-4 mt-2">
                <div className="w-3 h-3 bg-blue-500 outline-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    See how you stack up to the competition
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Owning your market means owning your competition. The
                    Scorpion platform shows you exactly how you compare and how
                    we're helping you dominate your service area.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    See the details of every lead
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Advisor's lead scoring technology,{" "}
                    <span className="text-blue-600">Leads AI</span>, immediately
                    tells you the quality of every lead so you know where to
                    focus to book more jobs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    See how it all works together
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    From{" "}
                    <span className="text-blue-600">Advisor's AI chat</span>{" "}
                    that responds 24/7, schedules appointments, and even accepts
                    payments, to where your money is being allocated daily,
                    you’ll see where and why every visitor turns into a closed
                    job. And how we’re getting you more of them.
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
