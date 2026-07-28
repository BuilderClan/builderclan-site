import Header from "@components/Header";
import Footer from "@components/Footer";
import BackToTop from "@components/BackToTop";
import HomeSection from "@components/Home";
import AboutSection from "@components/About";
import OpportunitySection from "@components/Opportunity";
import FaqSection from "@components/Faq";
import CTA from "@components/CTA";

export default function Home() {
  return (
    <>
      <header className="fixed w-full top-4 sm:top-6 left-0 z-50 pointer-events-none">
        <Header />
      </header>
      <div className="pt-24 sm:pt-28">
        <HomeSection />
        <AboutSection />
        <OpportunitySection />
        <FaqSection />
        <CTA />
      </div>
      <Footer />
      <div className="fixed z-10">
        <BackToTop />
      </div>
    </>
  );
}

