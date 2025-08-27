import img1 from "../../../../assets/images/hvac/team-of-experts/Team-of-Experts-1.jpg.2506092133408.webp"
import img2 from "../../../../assets/images/hvac/team-of-experts/Team-of-Experts-2.jpg.2506092148275.webp"
import img3 from "../../../../assets/images/hvac/team-of-experts/Team-of-Experts-3.jpg.2506092151515.webp"

export default function MarketingTeam() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4">
            MAXIMIZE YOUR REVENUE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Know every dollar{" "}
            <span className="bg-gray-900 text-white px-4 py-2 rounded-lg inline-block">
              earned
            </span>{" "}
            for every dollar spent
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Channel by Channel Card */}
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <img
                src={img1}
                alt="Channel analytics dashboard"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Channel by Channel
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Scorpion's AI shifts your budget to the channels that are driving
              results, away from the ones that aren't. So you show up where it
              matters, exactly when it matters.
            </p>
          </div>

          {/* Conversion by Conversion Card */}
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <img
                src={img2}
                alt="Conversion tracking dashboard"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Conversion by Conversion
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Not every call is a good one. We track which leads turn into real
              jobs. We fine-tune everything from your ads to landing pages to
              24/7 AI chat to get more of what actually fills your schedule.
            </p>
          </div>

          {/* Customer by Customer Card */}
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <img
                src={img3}
                alt="Customer analytics dashboard"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Customer by Customer
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              By integrating with your CRM, we see exactly what's turning into
              closed business, then shift your budget toward the channels
              bringing in the most revenue. No guesswork, just better results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
