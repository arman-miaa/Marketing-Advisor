

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

  const handleInputChange = (
    e
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="bg-gradient-to-br from-blue-0 to-blue-100 py-16 md:py-30 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Heading */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-blue-600 tracking-wider uppercase">
              Ready to talk now?
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Let's do it.
            </h2>
          </div>

          {/* Right side - Form */}
          <div className="bg-gradient-to-r from-purple-200 to-blue-200 rounded-2xl p-14 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="form-control">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 text-lg focus:outline-none focus:ring-0 focus:border-gray-200"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 text-lg focus:outline-none focus:ring-0 focus:border-gray-200"
                    required
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 text-lg focus:outline-none focus:ring-0 focus:border-gray-200"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 text-lg focus:outline-none focus:ring-0 focus:border-gray-200"
                    required
                  />
                </div>
              </div>

              {/* Company & Industry */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="form-control">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 text-lg focus:outline-none focus:ring-0 focus:border-gray-200"
                    required
                  />
                </div>
                <div className="form-control">
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 text-lg focus:outline-none focus:ring-0 focus:border-gray-200"
                    required
                  >
                    <option value="" disabled>
                      Industry
                    </option>
                    <option value="hvac">HVAC</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrical">Electrical</option>
                    <option value="roofing">Roofing</option>
                    <option value="landscaping">Landscaping</option>
                    <option value="cleaning">Cleaning Services</option>
                    <option value="other">Other</option>
                  </select>
                  <p className=" text-gray-600 mt-1">This field is required.</p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-blue-500 cursor-pointer text-white px-8 py-3 rounded-full transition-colors "
                >
                  Get Started
                </button>
              </div>

              {/* Disclaimer */}
              <div className="pt-2">
                <p className=" text-gray-500 leading-relaxed">
                  By providing a telephone number and submitting this form, you
                  are consenting to be contacted by SMS text message. Message &
                  data rates may apply. You can reply STOP to opt-out of further
                  messaging.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
