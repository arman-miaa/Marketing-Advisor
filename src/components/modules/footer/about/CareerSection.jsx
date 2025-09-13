import img1 from "../../../../assets/images/footer/about/careers.png.2506101506140.webp";
import Button from "../../../ui/Button";

export default function CareerSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-100 to-blue-100 container mx-auto py-16 md:py-0  rounded-2xl">
      <div className="container mx-auto pl-6 md:pl-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Bring Your Passion to Scorpion
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            At Scorpion, we show up for each other and for the businesses we
            serve. This is a place where ideas move fast, teammates have your
            back, and growth is part of the job. If you're ready to take on
            meaningful work with people who care, you're in the right place.
          </p>

          <Button text={` See Open Positions`} to={`/about/careers`} />
        </div>

        {/* Right Image (hidden on mobile) */}
        <div className="hidden md:flex flex-1  ">
          <img
            src={img1}
            alt="Team"
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
