


import rightImg from "../../../../assets/images/hvac/Partnerships/service-titan-integrations.png.2506061148345.webp"
import SharedTitleSection from "../../../../shared/SharedTitleSection";
import Button from "../../../ui/Button";
export default function ServiceTitan() {
  return (
    <section className="py-16 md:py-30 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}

            <SharedTitleSection
              category="Servicetitan + scorpion"
              title="Scorpion is ServiceTitan's only   preferred digital marketing partner"
              highlightText="only"
              description="Maximize ROI with ServiceTitan + Scorpion"
              descriptionSize="text-base md:text-3xl text-black  font-medium "
            />
            {/* Bullet Points */}
            <div className="space-y-6 -mt-12 ">
              <div className="flex items-start gap-4 mt-2">
                <div>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Through our strategic partnership with ServiceTitan,
                    plumbers are able to clearly see what’s driving revenue from
                    their marketing investment and see a better ROI. We work
                    together to provide best-in-class marketing solutions
                    including:
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="">
                  <p className="text-gray-900 text-lg leading-relaxed">
                    <span className="font-bold">
                      Customer Lifecycle Integration:
                    </span>{" "}
                    Gain clear visibility into your marketing effectiveness
                    through our integration with ServiceTitan. You know what’s
                    working. We eliminate what isn’t.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="">
                  <p className="text-gray-900 text-lg leading-relaxed">
                    <span className="font-bold">
                      Capacity Marketing Engine:
                    </span>{" "}
                    Automatically adjusts advertising spend based on real-time
                    business capacity information from ServiceTitan. When demand
                    is low, the system automatically boosts advertising spend to
                    fill the schedule; when capacity is high, spend is scaled
                    back.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="">
                  <p className="text-gray-900 text-lg leading-relaxed">
                    <span className="font-bold">
                      Direct Marketing Services:
                    </span>{" "}
                    Created to enhance your Marketing Pro efforts, Scorpion’s
                    Direct Marketing Services help you with email marketing,
                    direct mail, SMS, and reputation.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className=" bg-blue-100 p-8 rounded-lg">
              <p className="text-gray-900 font-bold text-2xl ">
                ServiceTitan customers using Direct Marketing Services see a 39x
                return on investment.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Button text="Let's Talk" to="/hvac/get-started" />
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
