import Seo from "../components/ui/Seo.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Gallery from "../components/home/Gallery.jsx";
import AdmissionCTA from "../components/AdmissionCTA.jsx";
import { images } from "../assets/images.js";

/** Dedicated Gallery page — reuses the home-page gallery (filters + lightbox). */
export default function GalleryPage() {
  return (
    <>
      <Seo
        title="Gallery | FAZEELAH ENGLISH MEDIUM SCHOOL"
        description="Campus moments from Fazeelah English Medium School, Dharmavaram — classrooms, library, science lab, sports arena, hostel, dining and school transport."
        path="/gallery"
      />
      <PageHero
        crumb="Gallery"
        label="Campus Life"
        title="Campus Moments at Fazeelah"
        description="Real views of our classrooms, facilities, hostel and everyday campus life."
        image={images.schoolFront}
        imageAlt="Fazeelah School building at dusk"
      />
      <Gallery source="cloud" />
      <AdmissionCTA />
    </>
  );
}
