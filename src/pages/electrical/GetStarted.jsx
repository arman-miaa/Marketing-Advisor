import CallToActionSection from "../../components/modules/electrical/get-started/CallToActionSection";
import ClientSuccessSection from "../../components/modules/electrical/get-started/ClientSuccessSection";
import GetHero from "../../components/modules/electrical/get-started/GetHero";
import PartnershipsSection from "../../components/modules/electrical/get-started/PartnershipsSection";
import RevenueSection from "../../components/modules/electrical/get-started/RevenueSection";


export default function GetStarted2() {
  return (
      <div>
          <GetHero />
          <RevenueSection/>
          <ClientSuccessSection />
          <PartnershipsSection/>
          <CallToActionSection />
    </div>
  )
}
