import Button from "../../components/ui/Button";

export default function Accommodations() {
  return (
    <div>
      {/* banner */}
      <div className="w-full h-[50vh] md:h-screen bg-gradient-to-l from-blue-200 to-purple-200 flex justify-center items-center px-6 md:px-24">
        <h1 className="text-blue-700 text-4xl md:text-6xl lg:text-7xl text-center font-bold">
          Reasonable Accommodations
        </h1>
      </div>

      {/* bottom content */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left Text */}
          <div className="md:col-span-2 space-y-6 text-gray-800 font-medium text-base md:text-xl leading-relaxed">
            <p className="">
              Scorpion is committed to providing an inclusive and accessible
              recruiting experience for all applicants and candidates with
              disabilities or other physical or mental health conditions.
            </p>
            <p>
              If you require an accommodation for any part of the application or
              recruitment process, please let us know by emailing{" "}
              <a
                href="mailto:info@advisorppc.com"
                className="text-blue-600 underline"
              >
                info@advisorppc.com
              </a>{" "}
              and a member of our People Team will respond as soon as possible.
            </p>
            <p>
              This email is only used by individuals with disabilities who
              require assistance or adjustments in applying and interviewing for
              a job. This email is not for inquiring about a position or the
              status of an application.
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
              Have questions?
            </h2>
            <p className="text-gray-900 mb-6 text-xl">
              For accommodation questions and/or requests, please email us.
            </p>
       
            <Button text={`Contact Us`} to={`/hvac/get-started`} />
          </div>
        </div>
      </div>
    </div>
  );
}
