import ContactFormSection from "../../shared/ContactFormSection";


export default function FaqPage() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="w-full h-screen flex justify-center items-center px-6 md:px-24 
                bg-gradient-to-r from-purple-200 to-blue-300"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-12">
          <div className="flex flex-col justify-center  text-center  ">
            <h1 className="text-blue-600 text-3xl md:text-8xl font-bold">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-4xl mt-8">
              You've got questions. We have answers.
            </p>
          </div>
        </div>
      </div>

      {/* faq section */}
      <div className="container mx-auto md:px-50 py-10 md:py-20 space-y-4">
        <div className="collapse collapse-plus bg-base-100 p-4 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl md:text-2xl font-semibold">
            Will I have a dedicated team working on my account?
          </div>
          <div className="collapse-content text-lg">
            Absolutely! When you partner with Scorpion, you don’t just get help
            when you need it—you get a proactive, dedicated account manager and
            a team of HVAC marketing experts who understand your business and
            your goals. We provide ongoing support, adjust strategies as needed,
            and ensure your campaigns drive more leads, calls, and booked jobs.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 p-4 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl md:text-2xl font-semibold">
            What makes Scorpion different from other HVAC marketing agencies?
          </div>
          <div className="collapse-content text-lg">
            We go beyond the traditional approach of just driving more leads—we
            get you more high-value jobs and revenue. Scorpion’s AI technology
            and integrations with CRM and FSM solutions help you seamlessly
            manage and track leads and revenue without the manual effort. Our
            20+ years of HVAC industry expertise also makes us a knowledgeable,
            collaborative marketing partner for your business, no matter where
            you are in your journey.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 p-4 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl md:text-2xl font-semibold">
            The market I’m in is really competitive. How does Scorpion help me
            stand out?
          </div>
          <div className="collapse-content text-lg">
            Scorpion helps your HVAC business stand out in a competitive market
            by getting you found first and chosen fast. Our RevenueMAX
            technology helps you capture and convert leads 24/7 by improving
            your SEO rankings, running targeted ads, managing reviews, and
            offering AI Chat to help customers engage with you. This helps your
            business deliver a superior customer experience that gets you more
            customers and more jobs.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 p-4 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl md:text-2xl font-semibold">
            How does Scorpion help my HVAC business attract more customers?
          </div>
          <div className="collapse-content text-lg">
            We don’t just get you more leads—we maximize your revenue. Our
            RevenueMAX technology ensures your HVAC business gets found online
            by the right customers, in the right places, at the right time. We
            combine industry-leading SEO, hyper-targeted advertising, and
            AI-driven insights to attract high-intent customers who are ready to
            book. Unlike other marketing providers, we go beyond clicks and
            impressions—we focus on what actually drives revenue for your
            business.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 p-4 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl md:text-2xl font-semibold">
            How does Scorpion make sure my marketing is on-brand?
          </div>
          <div className="collapse-content text-lg">
            Scorpion ensures your marketing is not only on-brand, but also built
            to drive real business growth. We go beyond basic branding by
            combining custom design, AI-driven insights, and data-backed
            strategies to create websites, ads, and content that reflect your
            unique voice while maximizing engagement. We also understand the
            seasonal and regional factors that impact your HVAC business,
            helping you stay ahead of competitors and attract more high-value
            customers
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 p-4 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl md:text-2xl font-semibold">
            What if I primarily offer HVAC services but also do other services
            like plumbing or electrical?
          </div>
          <div className="collapse-content text-lg">
            We have over 20 years of expertise in home services marketing,
            including trades like plumbing, HVAC and electrical. We tailor our
            strategies to meet the specific needs of each unique business. If
            your business does multiple trades, we can discuss this with you
            during our initial consultation, so we can ensure your investment
            supports the volume you’re looking for with respect to each trade.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 p-4 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl md:text-2xl font-semibold">
            How quickly will I see results?
          </div>
          <div className="collapse-content text-lg">
            Some marketing strategies like PPC advertising deliver fast results,
            while others such as SEO and reputation management require time to
            gain traction. Most HVAC businesses experience noticeable growth in
            website traffic, lead generation, and online visibility within the
            first 3-6 months of partnering with us.
          </div>
        </div>
      </div>

      {/* contact section */}
      <ContactFormSection />
    </div>
  );
}
