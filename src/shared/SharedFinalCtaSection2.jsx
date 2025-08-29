import Button from "../components/ui/Button";

export default function SharedFinalCtaSection2({ title,subtitle, highlight, category }) {
  const parts = title.split(highlight);

  return (
    <section className="py-16 md:py-52 px-4 bg-gradient-to-r from-purple-200 via-blue-100 to-blue-200">
      <div className="container mx-auto text-center">
        {/* Category */}
        {category && (
          <p
            className={` uppercase text-sm text-blue-700 font-semibold  tracking-[0.4em] mb-8`}
          >
            {category}
          </p>
        )}
        {/* Title */}
        <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-8">
          {parts[0]}
          <span className="text-blue-500 px-4 py-2 rounded-lg inline-block ">
            {highlight}
          </span>
          {parts[1]}
              </h2>
              
              <h3 className="text-3xl font-medium">{ subtitle}</h3>

        {/* Phone + Button */}
        <div className="flex justify-center mt-8">


          <Button text="Learn How" to="/hvac/get-started" />
        </div>
      </div>
    </section>
  );
}
