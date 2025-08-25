export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-blue-400 text-sm font-medium tracking-wider uppercase">
                GET STARTED
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Maximize Your{" "}
                <span className="inline-block bg-white text-gray-900 px-4 py-2 rounded-lg">
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
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 lg:p-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">
              Book Your Free Demo Today
            </h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company Name*"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
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
