import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/Home.jsx";

const About = lazy(() => import("./pages/About.jsx"));
const Vision = lazy(() => import("./pages/Vision.jsx"));
const Mission = lazy(() => import("./pages/Mission.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const GalleryPage = lazy(() => import("./pages/Gallerypage.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

function PageFallback() {
  return (
    <div
      className="flex min-h-[70vh] items-center justify-center bg-ivory"
      role="status"
      aria-live="polite"
    >
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-forest/20 border-t-forest" />
      <span className="sr-only">Loading page…</span>
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route
            path="about"
            element={
              <Suspense fallback={<PageFallback />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="vision"
            element={
              <Suspense fallback={<PageFallback />}>
                <Vision />
              </Suspense>
            }
          />
          <Route
            path="mission"
            element={
              <Suspense fallback={<PageFallback />}>
                <Mission />
              </Suspense>
            }
          />
          <Route
            path="gallery"
            element={
              <Suspense fallback={<PageFallback />}>
                <GalleryPage />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<PageFallback />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageFallback />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </MotionConfig>
  );
}
