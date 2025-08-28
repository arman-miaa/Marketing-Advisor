import { useState } from "react";

export default function GetStarted() {
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
    // console.log("Form Data:", formData); 
  };

  return (
    <div className=" bg-gray-900 text-white pt-20">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-40 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-blue-400 text-sm font-medium tracking-[0.4em] uppercase">
                GET STARTED
              </p>

              <h1 className="text-4xl md:text-5xl  font-bold leading-tight">
                Maximize Your{" "}
                <span className="inline-block bg-white text-gray-900 px-4  rounded-lg">
                  Revenue
                </span>
              </h1>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-300 text-lg">
                  <span className="text-white font-semibold">Marketing</span>{" "}
                  that brings you the right jobs at the right time.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-300 text-lg">
                  <span className="text-white font-semibold">Advertising</span>{" "}
                  that spends and targets intelligently to grow your business.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-300 text-lg">
                  <span className="text-white font-semibold">
                    Revenue-driven technology
                  </span>{" "}
                  specifically built for you.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-gradient-to-br from-indigo-800 to-blue-900 rounded-2xl p-8 lg:p-10">
            <h2 className="text-2xl md:text-4xl text-center font-bold text-white mb-8">
              Book Your Free Demo Today
            </h2>

            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-5 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-5 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-5 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-5 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name*"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-5 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full md:w-fit sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full transition-colors block text-center cursor-pointer"
              >
                Get Started
              </button>

              <p className="text-white/80 text-sm leading-relaxed">
                By providing a telephone number and submitting this form, you
                are consenting to be contacted by SMS text message. Message &
                data rates may apply. You can reply STOP to opt-out of further
                messaging.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
