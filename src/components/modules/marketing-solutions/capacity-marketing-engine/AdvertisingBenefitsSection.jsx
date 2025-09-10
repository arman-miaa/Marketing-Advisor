import rightImg from "../../../../assets/images/marketing-solutions/capacity-marketing-engine/Capacity-Planner-HS.2505071929550.jpg"
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
              category="Spend with purpose"
              title="The right balance.
Automatically."
              highlightText="Automatically."
              description="Every HVAC business deserves a full schedule."
              descriptionSize="text-base md:text-3xl text-black  font-medium "
            />
            {/* Bullet Points */}
            <div className="space-y-6 -mt-12 ">
              <div className="flex items-start gap-4 mt-2">
                <div className="w-3 h-3 bg-blue-500 outline-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Dial it up.
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    When your technicians have open appointments, your business
                    isn’t making money. Scorpion's Capacity Marketing Engine
                    automatically increases your advertising spend to
                    efficiently fill those empty slots, even during seasonal
                    fluctuations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Dial it back.
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Sometimes your business can’t take more on. Capacity
                    Optimizer automatically decreases spending to make sure your
                    budget is used when it matters most.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    No wasted spend.
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    By monitoring your schedule each and every day, your spend
                    goes where (and when) you need it most.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    No wasted time.
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    No more sitting around, and no more wondering how you can
                    get to the houses you need to. Your schedule is now properly
                    balanced.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className=" bg-blue-100 p-8 rounded-lg">
              <p className="text-gray-900 font-bold text-2xl ">
                Scorpion’s Capacity Marketing Engine keeps you booked—not
                overfilled, not idle.
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
