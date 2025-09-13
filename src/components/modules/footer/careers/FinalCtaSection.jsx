import Button from "../../../ui/Button";


export default function FinalCtaSection() {
  return (
    <div>
      <section className="py-16 md:py-52 px-4 bg-gradient-to-r from-purple-200 via-blue-100 to-blue-200">
        <div className="container mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-8">
            Find Your Next{" "}
            <span className="text-blue-500 px-4 py-2 rounded-lg inline-block ">
              Career
            </span>{" "}
            Move
          </h2>
          <p className="text-lg md:text-xl">
            Explore our open positions and discover how you can be part of
            something bigger. Let’s build success together.
          </p>

          {/* Phone + Button */}
          <div className="flex flex-col mt-8 sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button text="Schedule an Appointment" to="/hvac/get-started" />
          </div>
        </div>
      </section>
    </div>
  );
}
