export default function FinalCtaSection() {
  return (
    <section className="py-16 md:py-30 px-4 bg-gradient-to-r from-purple-200 via-blue-100 to-blue-200">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-blue-600 mb-12 tracking-[0.4em]">
          MAXIMIZE YOUR RESULTS
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
          Ready to
          <span className="bg-blue-500 text-white px-4 py-2 rounded-lg inline-block">
            maximize
          </span>{" "}
          how you show up?
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="tel:8663448852"
            className="text-xl md:text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            (866) 344-8852
          </a>

          <span className="text-gray-500 font-medium hidden sm:inline">OR</span>

          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            Schedule an Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
