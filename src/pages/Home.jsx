import Seo from "../components/ui/Seo.jsx";
import HomeHero from "../components/home/HomeHero.jsx";
import CoreValuesStrip from "../components/home/CoreValuesStrip.jsx";
import IntroSection from "../components/home/IntroSection.jsx";
import WhyChoose from "../components/home/WhyChoose.jsx";
import PrincipalMessage from "../components/home/PrincipalMessage.jsx";
import ClassesSection from "../components/home/ClassesSection.jsx";
import HostelSection from "../components/home/HostelSection.jsx";
import FacilitiesShowcase from "../components/home/FacilitiesShowcase.jsx";
import Gallery from "../components/home/Gallery.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import AdmissionCTA from "../components/AdmissionCTA.jsx";

export default function Home() {
  return (
    <>
      <Seo
        title="FAZEELAH ENGLISH MEDIUM SCHOOL | Education With Values"
        description="FAZEELAH ENGLISH MEDIUM SCHOOL — Education With Values. Dharmavaram, Sri Sathya Sai District, Andhra Pradesh."
        path="/"
      />
      <HomeHero />
      <CoreValuesStrip />
      <IntroSection />
      <WhyChoose />
      <PrincipalMessage />
      <ClassesSection />
      <HostelSection />
      <FacilitiesShowcase />
      <Gallery source="builtin" />
      <Testimonials />
      <AdmissionCTA />
    </>
  );
}
