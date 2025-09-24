import { useState } from "react";
import heroImg from "../../../../assets/images/electrical/get-started/GS-HS.jpg.2508191547130.webp";
import SharedTitleSection from "../../../../shared/SharedTitleSection";

export default function GetHero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      {/* Overlay */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-40 items-center">
          {/* Left Content */}
          <div className="">
            <SharedTitleSection
              category=""
              title="We Bring You Revenue, Not Just Leads."
              highlightText="Not Just Leads."
              description="Stop chasing leads. Start booking high-value jobs.
"
              descriptionSize="text-base md:text-4xl"
              theme="dark"
            />

            <div className="-mt-10">
              <p className="text-gray-300 text-lg">
                With decades of experience and millions of leads tracked to real
                revenue, we make your business easy to hire and impossible to
                ignore.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-gradient-to-br from-indigo-800 to-blue-900 rounded-3xl p-8 lg:p-10 shadow-2xl backdrop-blur-md">
            <h2 className="text-2xl md:text-4xl text-center font-bold mb-8">
              Book Your Free Demo Today
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                required
              />

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name*"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white px-10 py-3 rounded-full transition-colors block text-center"
              >
                Get Started
              </button>

              <p className="text-white/80 text-sm leading-relaxed mt-2">
                By providing a telephone number and submitting this form, you
                consent to be contacted by SMS text message. Rates may apply.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
