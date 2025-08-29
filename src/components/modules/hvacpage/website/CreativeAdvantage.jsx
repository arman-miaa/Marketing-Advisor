import SharedContentSection from "../../../../shared/SharedContentSection";

export default function CreativeAdvantage() {
  return (
    <section className="bg-slate-900 py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}

        <SharedContentSection
          subtitle="Grow your HVAC business faster."
          description="Get a creative team from a company that has more experience building websites for HVAC companies than any other company on Earth."
          descriptionSize="text-2xl md:text-5xl "
          buttonText="Get Started"
          buttonLink="/hvac/get-started"
        />
      </div>
    </section>
  );
}
