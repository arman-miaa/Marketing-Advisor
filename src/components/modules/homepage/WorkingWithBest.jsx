import sampleImage from "../../../assets/images/Home Page/logo.webp";

export default function WorkingWithBest() {
  return (
    <section className="bg-base-100 pt-30 px-4">
      <div className=" mx-auto text-center">
        {/* Title */}
        <p className="text-blue-400 text-sm font-semibold uppercase mb-6 tracking-[0.35em]">
          working with the Best54
        </p>

        {/* Subtitle */}
        <h3 className=" container mx-auto mt-3 text-2xl md:text-6xl font-semibold leading-20">
          Connected with the providers that matter to maximize your revenue
        </h3>

        {/* Image */}
        <div className="mt-20 rounded-xl bg-blue-50 overflow-hidden ">
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
