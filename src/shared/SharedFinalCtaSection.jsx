import Button from "../components/ui/Button";

export default function SharedFinalCtaSection({ title, highlight }) {

  const parts = title.split(highlight);

  return (
    <section className="py-16 md:py-52 px-4 bg-gradient-to-r from-purple-200 via-blue-100 to-blue-200">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
          {parts[0]}
          <span className="text-blue-500 px-4 py-2 rounded-lg inline-block ">
            {highlight}
          </span>
          {parts[1]}
        </h2>

        {/* Phone + Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="tel:8663448852"
            className="text-xl md:text-3xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            (866) 344-8852
          </a>

          <span className="text-gray-800 font-medium hidden sm:inline">OR</span>

          <Button text="Schedule an Appointment" to='/hvac/get-started' />
        </div>
      </div>
    </section>
  );
}
