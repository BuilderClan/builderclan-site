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
      <header className="fixed w-full top-3 sm:top-0 left-0 z-50">
        <Header />
      </header>
      <div className="mt-[93px]">
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

