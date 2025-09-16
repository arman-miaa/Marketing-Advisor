import img from "../../../assets/images/hvac/hvac-houses.png.2506041957058.webp";
import Button from "../../ui/Button";

const KeepTechsBusySection = () => {
  return (
    <section
      className="relative bg-black bg-no-repeat bg-center overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[700px] lg:min-h-[800px]"
      style={{ backgroundImage: `url(${img})`, backgroundSize: "contain" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[700px] lg:min-h-[800px] px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Keep Your Techs Busy
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-2xl mx-auto">
            And your job board full.
          </p>

          {/* Button Center Fix */}
          <div className="flex justify-center">
            <Button text="Learn How" className="w-full md:w-auto" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
    </section>
  );
};

export default KeepTechsBusySection;
