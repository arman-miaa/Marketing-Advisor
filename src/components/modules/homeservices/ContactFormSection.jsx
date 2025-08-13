"use client";



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

const handleInputChange = (e) => {
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
    <section className="bg-gradient-to-br from-purple-100 to-blue-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
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
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="input input-bordered w-full bg-white border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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
                    className="input input-bordered w-full bg-white border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input input-bordered w-full bg-white border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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
                    className="input input-bordered w-full bg-white border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>
              </div>

              {/* Company & Industry */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="input input-bordered w-full bg-white border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>
                <div className="form-control">
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="select select-bordered w-full bg-white border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="btn bg-blue-600 hover:bg-blue-700 text-white border-none w-full md:w-auto px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 hover:shadow-lg"
                >
                  Get Started
                </button>
              </div>

              {/* Disclaimer */}
              <div className="pt-2">
                <p className="text-xs text-gray-500 leading-relaxed">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                  . We may contact you about our services and you can opt out at
                  any time.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
