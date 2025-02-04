import AboutSection from "./components/About";
import ContactSection from "./components/Contact";
import FaqSection from "./components/Faq";
import HomeSection from "./components/Home";
import OpportunitySection from "./components/Opportunity";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div className="mt-[93px]">
      <HomeSection />
      <hr />
      <AboutSection />
      <hr />
      <OpportunitySection />
      <hr />
      <ContactSection />
      <hr />
      <FaqSection />
      <hr />
      <CTA />
    </div>
  );
}
