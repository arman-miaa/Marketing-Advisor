import SharedTitleSection from "../../../../shared/SharedTitleSection";
import CardImg from "../../../../assets/images/hvac/advisorConnect/Scorpion-Connect-Side-Display-HVAC.jpg.2506040910585.webp"

export default function OpportunityHub() {
  return (
    <div className="container mx-auto py-10 md:py-30">
      <SharedTitleSection
        category="Connect. Convert. Grow Revenue."
        title="One little window, so many opportunities."
        highlightText="opportunities."
        description="Scorpion Connect is your 24/7 AI customer service rep that can answer questions, book appointments, accept payments, and educate customers. When you maximize every opportunity to engage with website visitors, you’re able to turn those clicks into customers."
        descriptionSize="text-base md:text-lg  " 
          />
          <div>
              <img src={CardImg} alt="" />
          </div>
    </div>
  );
}
