import SharedContentSection from "../../../../shared/SharedContentSection";

export default function CreativeFirepower() {
  return (
    <section className="bg-slate-900 py-20 md:py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SharedContentSection
          subtitle="Show up first. Win big."
          description="When someone’s heating or cooling system breaks down, they need you now. Show up where it matters most, when it matters most."
          descriptionSize="text-2xl md:text-4xl "
          buttonText="Get Started"
          buttonLink="/hvac/get-started"
        />
      </div>
    </section>
  );
}
