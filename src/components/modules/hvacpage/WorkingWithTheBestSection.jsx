import sampleImage from "../../../assets/images/hvac/HVAC-Logos.png.webp";

export default function WorkingWithTheBestSection() {
  return (
    <section className=" py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Working with the <span className="text-primary">Best</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base-content/70 mt-3 text-lg">
          Connected with the providers that matter to maximize your revenue
        </p>

        {/* Image */}
        <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src={sampleImage}
            alt="Working with the best providers"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
