import logo1 from "../../../assets/images/hvac/logo1.webp";
import logo2 from "../../../assets/images/hvac/logo2.webp";
import logo3 from "../../../assets/images/hvac/logo3.webp";
import logo4 from "../../../assets/images/hvac/logo5.png";
import logo5 from "../../../assets/images/hvac/logo5.png";
import logo6 from "../../../assets/images/hvac/logo6.png";
import logo7 from "../../../assets/images/hvac/logo7.png";
import logo8 from "../../../assets/images/hvac/logo8.png";
import logo9 from "../../../assets/images/hvac/logo9.png";
import logo10 from "../../../assets/images/hvac/logo10.png";
import logo11 from "../../../assets/images/hvac/logo11.png";
import logo12 from "../../../assets/images/hvac/logo12.png";
import logo13 from "../../../assets/images/hvac/logo13.png";
import logo14 from "../../../assets/images/hvac/logo14.png";
import logo15 from "../../../assets/images/hvac/logo15.png";
import logo16 from "../../../assets/images/hvac/logo16.png";
import logo17 from "../../../assets/images/hvac/logo17.png";
import logo18 from "../../../assets/images/hvac/logo18.png";
import logo19 from "../../../assets/images/hvac/logo19.png";
import logo20 from "../../../assets/images/hvac/logo20.png";
import logo21 from "../../../assets/images/hvac/logo21.png";

// ==== Groups ====
const row1 = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
const row2 = [logo8, logo9, logo10, logo11, logo12, logo13, logo14];
const row3 = [logo15, logo16, logo17, logo18, logo19, logo20, logo21];

export default function Nationwide() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20 md:py-36 overflow-hidden ">
      <h2 className="text-4xl lg:text-6xl text-center mb-12">
        Trusted by{" "} <br className="md:hidden" />
        <span className="bg-gradient-to-r from-blue-100 to-purple-100 px-3 rounded-md">
          HVAC companies
        </span>{" "}
        nationwide
      </h2>

      <div className="space-y-8">
        {/* Row 1 - Right to Left */}
        <Marquee logos={row1} direction="right-to-left" />

        {/* Row 2 - Left to Right */}
        <Marquee logos={row2} direction="left-to-right" />

        {/* Row 3 - Right to Left */}
        <Marquee logos={row3} direction="right-to-left" />
      </div>
    </div>
  );
}

function Marquee({ logos, direction }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex gap-4 md:gap-8 animate-marquee ${
          direction === "left-to-right" ? "reverse" : ""
        }`}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg min-w-[360px] py-2 flex items-center justify-center shadow-sm"
          >
            <img
              src={logo}
              alt="HVAC company logo"
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
