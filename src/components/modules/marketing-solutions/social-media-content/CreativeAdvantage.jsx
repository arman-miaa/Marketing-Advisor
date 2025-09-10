import SharedContentSection from "../../../../shared/SharedContentSection";

export default function CreativeAdvantage() {
  return (
    <section className="bg-slate-900 py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}

        <SharedContentSection
          subtitle="Turn Scrolls Into Calls"
          description="As an HVAC business, you don’t need to be a content creator. You just need one who knows HVAC. That’s where we come in."
          descriptionSize="text-2xl md:text-5xl "
          buttonText="Get Started"
          buttonLink="/hvac/get-started"
        />
      </div>
    </section>
  );
}
