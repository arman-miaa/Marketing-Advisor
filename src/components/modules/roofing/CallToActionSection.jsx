import Button from "../../ui/Button";


export default function CallToActionSection() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
      {/* Call to Action Section */}
      <div className="px-4 py-16 md:py-30 text-center">
        <div className=" md:px-60 mx-auto">
          <h2
            className="text-4xl md:text-7xl  font-bold mb-4"
            style={{ textShadow: "4px 4px 8px #3b82f6" }}
          >
            What if you could get more
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-light mb-20">
            high-quality, high-intent leads, ready to book?
          </h3>
          {/* btn */}
          <div className="flex justify-center">
            <Button text={` Learn How Today`} to="/hvac/get-started" />
          </div>
        </div>
      </div>
    </div>
  );
}
