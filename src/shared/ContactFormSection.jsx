import { useState } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
                CONTACT US
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Let&apos;s Get Connected
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tell us about your ultimate goal and we&apos;ll help you reach
                it. Fill out a form or schedule a call.
              </p>
            </div>
          </div>

          {/* Right Form */}
          {/* Right Form */}
          <div className="bg-gradient-to-br from-indigo-800 to-blue-900 rounded-2xl p-8 lg:p-10 shadow-xl">
         

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="w-full px-4 py-4 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 
                   focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="w-full px-4 py-4 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 
                   focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                  required
                />
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-4 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 
                   focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full px-4 py-4 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 
                   focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                  required
                />
              </div>

            
              {/* Row 3 (Company + Industry same row) */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Company Name*"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="w-full px-4 py-4 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 
               focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                  required
                />

                <select
                  value={formData.industry}
                  onChange={(e) =>
                    handleInputChange("industry", e.target.value)
                  }
                  className="w-full px-4 py-4 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 
               focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
                  required
                >
                  <option value="">Select Industry*</option>
                  <option value="legal">Legal</option>
                  <option value="home-services">Home Services</option>
                  <option value="franchise">Franchise</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="dental">Dental</option>
                  <option value="private-equity">Private Equity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 
                 rounded-full transition-colors block text-center cursor-pointer"
              >
                Get Started
              </button>

              {/* Disclaimer */}
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
    </section>
  );
}
