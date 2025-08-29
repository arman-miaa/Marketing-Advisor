import SharedContentSection from "../../../../shared/SharedContentSection";

export default function ContentSection() {
  return (
    <section className="bg-slate-900 py-20 md:py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SharedContentSection
          subtitle="The Difference Between Being Hired and Not"
          description="A good reputation means more customers."
          descriptionSize="text-2xl md:text-5xl "
          buttonText="Get Started"
          buttonLink="/hvac/get-started"
        />
      </div>
    </section>
  );
}
