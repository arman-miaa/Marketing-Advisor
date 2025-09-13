import { useState } from "react";


export default function PrivacyPolicy() {
  const [active, setActive] = useState("overview");

const menuItems = [
  { id: "scope", label: "Scope of this Privacy Policy" },
  { id: "information-collect", label: "Information We Collect" },
  { id: "use-information", label: "Use of Information" },
  { id: "data-retention", label: "Data Retention" },
  { id: "sharing-disclosure", label: "Sharing and Disclosure of Information" },
  { id: "security", label: "Security" },
  { id: "cookies", label: "Cookies and Similar Technologies" },
  { id: "changes-policy", label: "Changes to this Privacy Policy" },
  { id: "rights", label: "Your Rights Under U.S. State Privacy Laws" },
  { id: "contact", label: "Contacting Scorpion" },
];


  return (
    <div>
      {/* banner */}
      <div className="w-full h-[50vh] md:h-screen bg-gradient-to-l from-blue-200 to-purple-200 flex justify-center items-center px-6 md:px-24">
        <h1 className="text-blue-700 text-4xl md:text-6xl lg:text-7xl text-center font-bold">
          Advisor's Privacy Policy
        </h1>
      </div>

      {/* bottom section */}
      <div className="md:flex container mx-auto py-10 md:py-32 ">
        {/* Sidebar */}
        <div className="w-72 md:sticky top-0 self-start h-[calc(100vh-200px)] overflow-y-auto">
          <ul className="flex flex-col gap-3">
            {" "}
            {/* li এর মাঝে space */}
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between px-4 py-3 cursor-pointer transition rounded-xl bg-blue-100 hover:bg-blue-600 hover:text-white font-bold"
                onClick={() => {
                  setActive(item.id);
                  document
                    .getElementById(item.id)
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                {/* Text */}
                <span>{item.label}</span>

                {/* Arrow */}
                <span className="ml-2 text-lg">➝</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side content */}
        <div className="flex-1 p-8 space-y-12 text-lg md:text-xl ">
          {/* Overview */}
          <section id="scope" className="scroll-mt-24  ">
            <p className="mt-2 text-gray-900 leading-relaxed">
              Effective Date: August 15, 2024
            </p>
            <p className="mt-4 text-gray-900 leading-relaxed">
              Scorpion (“we,” “us,” “our”) is committed to protecting your
              privacy. This Privacy Policy outlines how we collect, use, and
              disclose your information, and your choices regarding your data.
            </p>
            <h3 className="mt-4 text-2xl md:text-4xl  text-gray-900 leading-relaxed">
              Scope of this Privacy Policy
            </h3>
            <p className="mt-4 text-gray-900 leading-relaxed">
              This Privacy Policy applies to Scorpion’s websites, online
              marketing tools, platforms, including the Scorpion mobile and
              desktop applications (collectively, the “Services”), and websites
              including Scorpion.co and Field Services (collectively, the
              “Websites”). It also covers other interactions you may have with
              Scorpion, such as customer service inquiries and participation in
              user conferences. By using our Services, you agree to the terms
              outlined in this policy.
            </p>
            <p className="mt-4 text-gray-900 leading-relaxed">
              This policy does not apply to third-party applications or software
              that integrate with the Services through the Scorpion platform
              (“Third-Party Services”), or to any other third-party products,
              services, or businesses.
            </p>
          </section>

          {/* Prohibited Content */}
          <section id="information-collect" className="scroll-mt-24">
            <div className="mt-6">
              <h3 className="mt-4 text-2xl md:text-4xl  text-gray-900 leading-relaxed">
                Scope of this Privacy Policy
              </h3>
              <p className="mt-6">
                Scorpion collects and receives several types of data, including:
              </p>

              <div className="space-y-6 mt-4">
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Client Data: Information submitted by clients (individuals or
                  organizations) when using our Services.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Other Information: Additional data collected, generated, or
                  received, such as:
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Account Information: Details such as email addresses, phone
                  numbers, passwords, and billing information provided to create
                  or update accounts.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Usage Information: Metadata generated during interactions with
                  our Services, including IP addresses, browser types, and
                  settings.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Device Information: Data about the devices accessing our
                  Services, including device types, and operating systems.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Location Information: GPS coordinates and other location data,
                  if enabled.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Third-Party Services: Data shared by providers of integrated
                  Third-Party Services.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Contact Information: Imported data like address books from
                  devices or APIs, with user consent.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Recruiting Information: Data collected as part of the
                  recruitment process, including resumes, cover letters,
                  employment history, education, interview notes, and
                  references. This information may be obtained directly from
                  candidates, or from third parties, such as recruitment
                  agencies or background check providers.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Third-Party Data: Information received from partners,
                  affiliates, and other sources to enhance our services.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Additional Information: Data received from website
                  submissions, focus groups, contests, job applications, or
                  interactions with our social media.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  No mobile information is shared with third parties or
                  affiliates for marketing purposes, except as specified.
                </p>
              </div>
            </div>
            {/* 1 */}
            <div id="use-information" className="mt-6">
              <h3 className="mt-4 text-2xl md:text-4xl  text-gray-900 leading-relaxed">
                Use of Information
              </h3>
              <p className="mt-6">
                Client Data is used according to client instructions, applicable
                terms in the client agreement, and legal requirements. Scorpion
                acts as a processor, while the client is the data controller.
              </p>
              <p className="mt-6">Scorpion uses Other Information to:</p>

              <div className="space-y-6 mt-4">
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Provide, update, and maintain our Services and Websites.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Communicate with users and respond to inquiries.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Develop and improve features, tools, and additional
                  functionalities.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Send administrative and marketing communications, subject to
                  user preferences.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Manage billing, accounting, and administrative tasks.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Investigate and prevent security issues.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Conduct recruitment and hiring processes, including evaluating
                  candidates, conducting interviews, and communicating with
                  applicants. This includes using recruitment information to
                  improve our hiring processes and to comply with applicable
                  employment laws.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Aggregated or de-identified data may be used for any business
                  purpose.
                </p>
              </div>
            </div>
            {/* 2*/}
            <div id="data-retention" className="mt-6">
              <h3 className="mt-4 text-2xl md:text-4xl  text-gray-900 leading-relaxed">
                Data Retention
              </h3>
              <p className="mt-6">
                Scorpion retains client data as per client instructions and
                legal requirements.
              </p>
              <h3
                id="sharing-disclosure"
                className="mt-4 text-2xl md:text-4xl  text-gray-900 leading-relaxed"
              >
                Sharing and Disclosure of Information
              </h3>
              <p className="mt-6">
                Scorpion may share and disclose Information as follows:
              </p>

              <div className="space-y-6 mt-4">
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Client Instructions: According to client consent and legal
                  requirements.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Client Access: Authorized client personnel may access and
                  manage Information.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Third-Party Providers and Partners: To support our business
                  operations, including service providers that assist with
                  recruitment, such as applicant tracking systems, background
                  check providers, and recruitment agencies.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Corporate Affiliates: Sharing with parent and subsidiary
                  entities.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Business Changes: During mergers, acquisitions, or similar
                  transactions.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Aggregated or De-identified Data: For business and research
                  purposes.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Legal Compliance: As required by law.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Protective Measures: To enforce rights and prevent fraud or
                  safety issues.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Recruitment and Employment: With relevant stakeholders
                  involved in the hiring process, including hiring managers and
                  HR personnel. We may also share recruitment information with
                  third parties involved in recruitment, such as background
                  check providers or recruitment agencies.
                </p>

                <h3
                  id="security"
                  className="mt-4 text-2xl md:text-4xl  text-gray-900 leading-relaxed"
                >
                  Security
                </h3>
                <p className="ml-4">
                  Scorpion takes the security of your data seriously and employs
                  measures to protect it from unauthorized access or disclosure.
                  However, no method of transmission or storage is entirely
                  secure, and we cannot guarantee absolute security.
                </p>
                <h3
                  id="cookies"
                  className="mt-4 text-2xl md:text-4xl  text-gray-900 leading-relaxed"
                >
                  Cookies and Similar Technologies
                </h3>
                <p className="ml-4">
                  We use cookies and similar technologies to authenticate users,
                  track information, and improve our websites. Users can control
                  cookie settings through their browser. Disabling cookies may
                  affect website functionality.
                </p>
                <h3
                  id="changes-policy"
                  className="mt-4 text-2xl md:text-4xl  text-gray-900 leading-relaxed"
                >
                  Changes to this Privacy Policy
                </h3>
                <p className="ml-4">
                  Scorpion may update this Privacy Policy as laws and services
                  evolve. Changes will be posted on this page, and significant
                  changes may be communicated through email or the Services.
                </p>
                <h3 id="rights" className="mt-4 text-2xl md:text-4xl  text-gray-900 leading-relaxed">
                  Your Rights Under U.S. State Privacy Laws
                </h3>
                <p className="ml-4">
                  Consumers residing in various U.S. states may have specific
                  rights under applicable state privacy laws. These rights may
                  include the ability to access, correct, delete, and limit the
                  sharing of personal information. To exercise these rights,
                  please contact us at{" "}
                  <span className="text-blue-700">infoadvisor@gamil.com</span>{" "}
                  or{" "}
                  <span className="text-blue-700">
                    please fill out the form.
                  </span>
                </p>
                <h3 id="contact" className="mt-4 text-2xl md:text-4xl  text-gray-900 leading-relaxed">
                  Contacting Scorpion
                </h3>
                <p className="ml-4">
                  For questions about this Privacy Policy or to exercise your
                  data rights, please contact us at{" "}
                  <span className="text-blue-700">infoadvisor@mgail.com</span>{" "}
                  or at our mailing address:
                </p>
                <p className="text-lg">27750 Entertainment Dr,</p>
                <p className="text-lg">Valencia, CA.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
