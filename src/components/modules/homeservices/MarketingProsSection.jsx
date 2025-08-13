const MarketingProsSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4">
            MARKETING MADE FOR PROS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Marketing solutions built for the{" "}
            <span className="bg-purple-200 px-2 py-1 rounded">pros</span> who
            keep homes running
          </h2>
        </div>

        {/* Body Text */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Home services businesses are the lifeblood of a community. From
            keeping the bugs and the weather outside to ensuring everything
            inside is running, a home isn't a home without you.
          </p>
        </div>

        {/* Call-out Box */}
        <div className="bg-blue-600 text-white p-8 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">
            What's making you the obvious choice?
          </h3>
          <p className="text-blue-100 leading-relaxed">
            Someone looking for your services typically hires a provider in
            under 4 hours. Make sure they find and choose you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketingProsSection;
