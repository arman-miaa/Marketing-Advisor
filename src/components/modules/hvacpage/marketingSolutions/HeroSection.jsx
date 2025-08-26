import HeroImg from "../../../../assets/images/hvac/marketing-solutions/RevMax-Mainstage-Desktop-HVAC.jpg.webp";
import Button from "../../../ui/Button";

function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <img src={HeroImg} alt="Hero" className="w-full h-full object-cover" />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-between items-center px-6 md:px-56 h-full text-white text-center">
        {/* Top Content (Heading + CTA) */}
        <div className="flex flex-col justify-center items-center flex-grow pt-20">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-[90px] font-bold tracking-tight">
            Revenue <span className="text-blue-600">MAX</span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl lg:text-3xl mb-10 py-4 max-w-2xl leading-relaxed">
            HVAC marketing that maximizes your revenue.
          </p>

          {/* CTA Button */}
          <div className="mb-12 md:mb-16 w-full flex justify-center">
            <Button text="Get Started" to="/hvac/get-started" />
          </div>
        </div>

        {/* Bottom Stats (Fixed at Bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:justify-items-center pb-10">
          {[
            { value: "20k+", label: "Businesses", extra: "helped succeed" },
            { value: "$100B+", label: "Revenue", extra: "generated" },
            { value: "200M+", label: "Leads", extra: "driven for clients" },
            { value: "Countless", label: "Records", extra: "broken" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-5xl md:text-5xl font-meduim mb-4">
                {stat.value}
              </h3>
              <span className="text-lg">
                {stat.label}{" "}
                <span className="text-white ml-2">{stat.extra}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
