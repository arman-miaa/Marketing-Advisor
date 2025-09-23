import Button from "../../../ui/Button";


export default function CallToActionSection() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
      {/* Call to Action Section */}
      <div className="px-4 py-16 md:py-30 text-center">
        <div className=" md:px-60 mx-auto">
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-light">
            You keep your community running.
          </h3>
          <h2
            className="text-4xl md:text-7xl  font-bold mb-20"
            style={{ textShadow: "4px 4px 8px #3b82f6" }}
          >
            We’ll keep your revenue growing.
          </h2>
          {/* btn */}
          <div className="flex justify-center">
            <Button text={` Schedule Your Demo`} to="/electrical/get-started" />
          </div>
        </div>
      </div>
    </div>
  );
}
