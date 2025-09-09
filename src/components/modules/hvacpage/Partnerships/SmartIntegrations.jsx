import leftImg from "../../../../assets/images/hvac/Partnerships/service-titan-housecallpro-integrations.png.2506061148312.webp"
import Button from "../../../ui/Button";

export default function SmartIntegrations() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left side cards */}
      <div className="grid grid-cols-1 gap-6">
        <img src={leftImg} alt="" />
      </div>

      {/* Right side content */}
      <div>
        <p className="uppercase tracking-widest text-sm text-blue-600 font-semibold mb-4">
          Integrations
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-100 to-purple-100  px-2 rounded">
            Connecting
          </span>{" "}
          the Dots
        </h2>
        <p className="text-lg md:text-xl text-gray-900 leading-relaxed mb-6">
          To clearly understand marketing performance, Scorpion works with
          leading CRMs and FSMs to connect marketing performance to revenue
          generation. Our integration partners work with our complete digital
          marketing solution,{" "}
          <span className="text-blue-600 font-semibold">RevenueMAX</span> to
          clearly show your return on advertising spend and overall performance.
        </p>

        <div className="bg-gradient-to-r from-blue-100 to-purple-100  rounded-xl p-6 mb-6">
          <p className="text-xl md:text-3xl text-center font-semibold text-gray-900">
            See how <span className="text-blue-600">RevenueMAX</span> uses
            integration data to drive better results and a higher ROI
          </p>
        </div>

     
        <Button text={`Get Started`} to='/hvac/get-started' />
      </div>
    </section>
  );
}
