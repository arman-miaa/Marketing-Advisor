import img from "../../../assets/images/hvac/hvac-houses.png.2506041957058.webp";

const KeepTechsBusySection = () => {
  return (
    <section
      className="relative  bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-[800px] px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Keep Your Techs Busy
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            And your job board full.
          </p>
          <button className="px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 border-none rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
            Learn How
          </button>
        </div>
      </div>

      {/* Optional bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
    </section>
  );
};

export default KeepTechsBusySection;
