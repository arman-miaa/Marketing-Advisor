const MarketingProsSection = () => {
  return (
    <section className="py-16 md:py-30 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-left mb-8">
   
          <p className="text-blue-400 text-sm font-semibold uppercase mb-6 tracking-[0.35em]">
            MARKETING MADE FOR PROS
          </p>
           <h2 className=" container mx-auto mt-3 text-2xl md:text-5xl font-semibold leading-18">
            Marketing solutions built for the{" "}
            <span className="bg-[#dad8e4] px-2 rounded">pros</span> who
            keep homes running
          </h2>
        </div>

        {/* Body Text */}
        <div className=" mb-12">
          <p className="text-lg md:text-3xl font-medium text-gray-700 leading-relaxed ">
            Home services businesses are the lifeblood of a community. From
            keeping the bugs and the weather outside to ensuring everything
            inside is running, a home isn't a home without you.
          </p>
        </div>

        {/* Call-out Box */}
        <div className="bg-blue-100 text-gray-900 p-8 rounded-lg ">
          <h3 className="text-xl md:text-3xl font-bold mb-4">
            What's making you the obvious choice?
          </h3>
          <p className="text-gray-900 text-xl font-bold leading-relaxed">
            Someone looking for your services typically hires a provider in
            under 4 hours. Make sure they find and choose you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketingProsSection;
