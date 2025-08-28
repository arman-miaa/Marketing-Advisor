import { useState } from "react";
import SharedTitleSection from "./SharedTitleSection";

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
    <section className="py-16 md:py-30 bg-gradient-to-b from-white to-blue-50 ">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}

          <SharedTitleSection
            category="CONTACT US"
            title="Let's Get Connected"
            description="Tell us about your ultimate goal and we'll help you reach it. Fill out a form or schedule a call."
            descriptionSize="text-base md:text-xl mt-8"
          />

          {/* Right Form */}
          <div className="bg-gradient-to-br from-purple-100 to-blue-200 rounded-2xl p-8 md:p-14 shadow">
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
              <p className="text-gray-600 text-sm leading-relaxed">
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
