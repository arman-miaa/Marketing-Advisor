import { useState } from "react";

export default function AcceptableUsePolicy() {
  const [active, setActive] = useState("overview");

  const menuItems = [
    { id: "requirements", label: "General Policies/Requirements" },
    { id: "prohibited", label: "Prohibited Content" },
    {
      id: "message-abuse",
      label: "Message Abuse; Falsification of Identity or Origin",
    },
    { id: "evasion", label: "Evasion" },
    { id: "reverse", label: "Reverse Engineering and Related Restrictions" },
    { id: "monitoring", label: "Our Monitoring and Enforcement" },
    { id: "reporting", label: "Reporting Violations" },
  ];

  return (
    <div>
      {/* banner */}
      <div className="w-full h-[50vh] md:h-screen bg-gradient-to-l from-blue-200 to-purple-200 flex justify-center items-center px-6 md:px-24">
        <h1 className="text-blue-700 text-4xl md:text-6xl lg:text-7xl text-center font-bold">
          Acceptable Use Policy
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
          <section id="overview" className="scroll-mt-24  ">
            <p className="mt-2 text-gray-900 leading-relaxed">
              This Acceptable Use Policy (the “Policy”) sets out rules
              applicable to your use of the Scorpion Enterprises, LLC.
              (“Scorpion”, “we”, “us” or “our”) Services and Scorpion
              Technology, including via our clients’ websites and/or platforms
              (the “Services”). The examples described in this Policy are not
              exhaustive.
            </p>
            <p className="mt-4 text-gray-900 leading-relaxed">
              We may suspend, terminate, or take other interim action regarding
              your access to or use of the Services, if, in our sole judgment,
              we believe you, directly or indirectly, violated this Policy or
              authorize or help others to do so.
            </p>
            <p className="mt-4 text-gray-900 leading-relaxed">
              We may modify this Policy from time to time by posting a revised
              version on our Website. By using the Services, you agree to the
              latest version of this Policy.
            </p>
          </section>

          {/* Requirements */}
          <section id="requirements" className="scroll-mt-24">
            <p className="mt-2 text-gray-900 leading-relaxed">
              {" "}
              <span className="font-bold">General Policies/Requirements </span>
              We all expect that the messages and communications we want to send
              and receive will reach the intended recipient(s), unhindered by
              filtering or other blockers. An important step you can take to
              make that expectation a reality is to prevent unwanted
              communications by only sending messages and communications that
              comply with applicable laws and communications-industry
              guidelines/standards. To that end, all communications originating
              from your use of the Services (including but not limited to SMS,
              MMS, webchat, voice, and similar messaging channels available
              through the Services) are subject to, and must comply with this
              Policy, which sets out certain rules and/or prohibitions
              regarding: Consent (“opt-in”); Revocation of Consent (“opt-out”);
              Sender identification; Messaging Usage; Prohibited Content;
              Filtering Evasion; and Enforcement.
            </p>
            <h3 className="text-xl font-semibold mt-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-600 rounded-full inline-block"></span>
              Consent Requirements
            </h3>

            <p className="ml-4 mt-2">
              {" "}
              <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
              Standard Consent Requirements. Prior to sending the first message
              to an individual, you must obtain agreement from the message
              recipient to communicate with them -- this is referred to as
              "consent." You must make clear to the individual they are agreeing
              to receive messages of the type you're going to send.
            </p>
            <p className="ml-6 mt-2">
              {" "}
              <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
              You need to keep a record of the consent, such as a copy of the
              document or form that the message recipient signed, or a timestamp
              of when the customer completed a sign-up flow or otherwise
              provided consent. This record of consent must be retained as set
              forth by local regulations or best practices after the end user
              opts out of receiving messages.
            </p>
            <p className="ml-6 mt-2">
              {" "}
              <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
              If you do not send an initial message to that individual within a
              reasonable period after receiving consent (or as set forth by
              local regulations or best practices), then you will need to
              reconfirm consent in the first message you send to that recipient.
            </p>
            <p className="ml-6 mt-2">
              {" "}
              <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
              The consent applies only to you, and to the specific use that the
              recipient has consented to. Consent can't be bought, sold, or
              exchanged. For example, you can't obtain the consent of message
              recipients by purchasing a phone list from another party. You also
              can't treat it as blanket consent allowing you to send messages
              from other brands or companies you may have, or additional
              messages about other uses for which you haven’t received consent.
            </p>
          </section>

          {/* Prohibited Content */}
          <section id="prohibited" className="scroll-mt-24">
            <p>
              {" "}
              <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
              The consent applies only to you, and to the specific use that the
              recipient has consented to. Consent can't be bought, sold, or
              exchanged. For example, you can't obtain the consent of message
              recipients by purchasing a phone list from another party. You also
              can't treat it as blanket consent allowing you to send messages
              from other brands or companies you may have, or additional
              messages about other uses for which you haven’t received consent.
            </p>

            <div>
              <p className="mt-6">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                <i>Alternative Consent Requirements.</i> While consent is always
                required and the consent requirements noted above are generally
                the safest path, there are two scenarios where consent can be
                received differently.
              </p>
              <p className="mt-6 ml-4">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                <i>Contact initiated by an individual</i>
              </p>
              <p className="mt- ml-6">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                If an individual sends a message to you, you may respond in an
                exchange with that individual. For example, if an individual
                texts your phone number asking for your hours of operation, you
                can respond directly to that individual, relaying your open
                hours. In such a case, the individual’s inbound message to you
                constitutes both consent and proof of consent. Remember that the
                consent is limited only to that particular conversation. Unless
                you obtain additional consent, don't send messages that are
                outside that conversation.
              </p>
            </div>
            <div>
              <p className="mt-6 ml-4">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                <i> Contact initiated by an individual</i>
              </p>
              <p className=" ml-6">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                If an individual sends a message to you, you may respond in an
                exchange with that individual. For example, if an individual
                texts your phone number asking for your hours of operation, you
                can respond directly to that individual, relaying your open
                hours. In such a case, the individual’s inbound message to you
                constitutes both consent and proof of consent. Remember that the
                consent is limited only to that particular conversation. Unless
                you obtain additional consent, don't send messages that are
                outside that conversation.
              </p>
              <p className="mt-6">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                If an individual sends a message to you, you may respond in an
                exchange with that individual. For example, if an individual
                texts your phone number asking for your hours of operation, you
                can respond directly to that individual, relaying your open
                hours. In such a case, the individual’s inbound message to you
                constitutes both consent and proof of consent. Remember that the
                consent is limited only to that particular conversation. Unless
                you obtain additional consent, don't send messages that are
                outside that conversation.
              </p>
            </div>
            <div>
              <p className="mt-6">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                <i> Periodic Messages and Ongoing Consent.</i>
              </p>
              <p className=" ml-4">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                If you intend to send messages to a recipient on an ongoing
                basis, you should confirm the recipient’s consent by offering
                them a clear reminder of how to unsubscribe from those messages
                using standard opt-out language (defined below). You must also
                respect the message recipient’s preferences in terms of
                frequency of contact. You also need to proactively ask
                individuals to reconfirm their consent as set forth by local
                regulations and best practices.
              </p>
            </div>
            <div className="mt-6">
              <p className="font-bold">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                Identifying Yourself as the Sender
              </p>
              <p className="ml-4 mt-2">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                Every message you send must clearly identify you (the party that
                obtained the opt-in from the recipient) as the sender, except in
                follow-up messages of an ongoing conversation.
              </p>
            </div>
            <div className="mt-6">
              <p className="font-bold">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                Opt-out
              </p>
              <p className="ml-4 mt-2">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                The initial message that you send to an individual needs to
                include the following language: “Reply STOP to unsubscribe,” or
                the equivalent using another standard opt-out keyword, such as
                STOP, STOPALL, UNSUBSCRIBE, and QUIT.
              </p>
              <p className="ml-4 mt-2">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                The initial message that you send to an individual needs to
                include the following language: “Reply STOP to unsubscribe,” or
                the equivalent using another standard opt-out keyword, such as
                STOP, STOPALL, UNSUBSCRIBE, and QUIT.
              </p>
              <p className="ml-4 mt-2">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                Individuals must have the ability to revoke consent at any time
                by replying with a standard opt-out keyword. When an individual
                opts out, you may deliver one final message to confirm that the
                opt-out has been processed, but any subsequent messages are not
                allowed. An individual must once again provide consent before
                you can send any additional messages.
              </p>
              <p className="ml-4 mt-2">
                {" "}
                <span className="font-bold">Prohibited Content.</span> You agree
                that you will not use the Services, or encourage, promote,
                facilitate, or instruct others to use the Services, to send
                messages that contain, offer, promote, reference, or link to any
                information or content related to any of the following:
              </p>
              <p className="mt-4">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                <i> Solicitations or Advertising.</i> Any messages,
                communication, promotions, advertising, or solicitations (like
                “spam”), including commercial advertising and informational
                announcements or otherwise, that are unsolicited or for which
                you do not have the proper consent from the intended recipient.
                If you are a Customer of any Scorpion Client, this includes
                using the Services to send any such message, communication, or
                announcement to a Scorpion Client or any other person or entity.
              </p>
              <p className=" mt-4">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                <i>Illegal, Harmful, or Fraudulent Activities.</i> Any
                activities that are illegal, that violate the rights of others,
                or that may be harmful to others, our operations, or reputation,
                including but not limited to offering, promoting, disseminating,
                or facilitating:
              </p>
              <div className="space-y-6">
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  child pornography, child sexual abuse material, or other
                  sexually exploitative content; fraudulent goods, services,
                  schemes, or promotions;
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  make-money-fast or “get-rich-quick” schemes (including
                  work-from-home programs, risk investment opportunities, ponzi
                  and pyramid schemes);
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  high-risk financial services (including payday loans,
                  short-term high-interest loans, third-party auto or mortgage
                  loans, student loans, or cryptocurrency);
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  third-party lead generation services (such as companies that
                  buy, sell, or share consumer information);
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  debt collection or forgiveness services (including third-party
                  debt collection, debt consolidation, debt reduction, or credit
                  repair programs)
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  illegal or regulated substances ((including, but not limited
                  to, Cannabis, CBD, or offers for (or payment transactions
                  relating to) Prescription Drugs that cannot be sold
                  over-the-counter));
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Gambling;
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  “SHAFT” use cases (Sex, Hate, Alcohol, Firearms, Tobacco,
                  including vaping-related activities);
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  phishing or pharming.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Infringing Content. Content that infringes on or
                  misappropriates the intellectual property or proprietary
                  rights of others.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Offensive Content. Content that is harassing, defamatory,
                  obscene, abusive, invasive of privacy, or otherwise
                  objectionable.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Harmful Content. Content or other computer technology that may
                  damage, interfere with, surreptitiously intercept, or
                  expropriate any system, program, or data, or otherwise effect
                  a security breach, including viruses, Trojan horses, worms,
                  time bombs, or cancelbots.
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Evasive Content. Content that is designed to intentionally
                  evade filters, detection, or monitoring (see below).
                </p>
                <p className="ml-4">
                  {" "}
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                  Prohibited Industries. If you are using Scorpion’s Payment
                  Services, you may not use the services in conjunction with any
                  activities identified as Prohibited Industries, as defined in
                  your respective Services agreement.
                </p>
              </div>
            </div>
            <div id="message-abuse" className="space-y-6">
              <p>
                <span className="font-bold">
                  Message Abuse; Falsification of Identity or Origin.
                </span>{" "}
                You will not send messages using spam bots or other similar
                systems, alter or obscure mail headers, provide false
                identification, or assume a sender’s identity without the
                sender’s explicit permission. You will also not create a false
                identity or attempt to mislead others as to the identity of the
                sender or the origin of any data or communications.
              </p>
              <p>
                <span id="evasion" className="font-bold">
                  Evasion.
                </span>{" "}
                You may not use the Services to evade Scorpion’s (including our
                subcontractor’s) or a telecommunications provider’s unwanted
                messaging detection and prevention mechanisms. Examples of
                prohibited practices include:
              </p>
              <p className="">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                Content designed to evade detection. As noted above, we do not
                allow content which has been specifically designed to evade
                detection by unwanted messaging detection and prevention
                mechanisms. This includes intentionally misspelled words or
                non-standard opt-out phrases which have been specifically
                created with the intent to evade these mechanisms.
              </p>
              <p className="">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                Snowshoeing. We do not permit snowshoeing, which is defined as
                spreading similar or identical messages across many phone
                numbers with the intent or effect of evading unwanted messaging
                detection and prevention mechanisms.
              </p>
              <p className="">
                {" "}
                <span className="w-3 h-3 bg-blue-600 rounded-full inline-block mr-2"></span>
                Use of shared public URL shorteners. Where a web address (i.e.,
                Uniform Resource Locator (URL)) shortener is used, you should
                not use links that have been shortened using shared public URL
                shorteners like Bitly or TinyURL. If you want to include
                shortened URLs in your messages, we recommend using a dedicated
                short domain.
              </p>
            </div>
            <div id="reverse" className="space-y-6 mt-6">
              <p>
                <span className="font-bold">
                  Reverse Engineering and Related Restrictions.
                </span>{" "}
                You will not (a) modify or create a derivative work of the
                Services or any portion thereof; (b) reverse engineer,
                disassemble, decompile, translate, or otherwise seek to obtain
                or derive the source code, underlying ideas, algorithms, file
                formats, or non-public APIs to any Services, except to the
                extent expressly permitted by applicable law and then only upon
                advance notice to Scorpion; (c) break or circumvent any security
                measures or rate limits for the Services; or (d) remove or
                obscure any proprietary or other notices contained in the
                Services, including in any reports or output obtained from the
                Services.
              </p>
              <p>
                <span id="monitoring" className="font-bold">
                  Our Monitoring and Enforcement.
                </span>{" "}
                We reserve the right, but do not assume the obligation, to
                monitor content on and sent through the Services and to
                investigate any violations of this Policy, or misuse of the
                Services. We may remove or disable access to any user, content,
                or resource that violates this Policy or any other agreement we
                have with you for use of the Services. We may report any
                activity that we suspect violates any law or regulation to
                appropriate law enforcement officials, regulators, or other
                appropriate third parties. Our reporting may include disclosing
                appropriate customer information. We may also cooperate with
                appropriate law enforcement agencies, regulators, or other
                appropriate third parties to help with the investigation and
                prosecution of illegal conduct by providing network and systems
                information related to alleged violations of this Policy.
              </p>
              <p id="reporting" className="">
                <span className="font-bold">Reporting Violations.</span> If you
                become aware of any violation of this Policy, you will
                immediately notify us and provide us with assistance, as
                requested, to stop or remedy the violation.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
