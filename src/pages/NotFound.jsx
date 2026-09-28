import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuArrowLeft, LuPhone } from 'react-icons/lu';
import Seo from '../components/ui/Seo.jsx';
import { images } from '../assets/images.js';
import { navigation, school } from '../data/schoolData.js';

export default function NotFound() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  return (
    <>
      <Seo title={`Page Not Found | ${school.name}`} description="The page you are looking for could not be found." path="/404" />
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ivory pb-20 pt-36">
        <div className="absolute inset-0 paper-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" aria-hidden="true" />
        <div className="container-site relative text-center">
          <motion.div
            className="relative mx-auto flex h-52 w-44 items-end justify-center overflow-hidden rounded-b-[20px] rounded-t-[104px] border border-forest/15 bg-sage sm:h-64 sm:w-52"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={images.schoolFront} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25" />
            <p className="relative pb-6 font-serif text-7xl font-medium text-forest sm:text-8xl">404</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}>
            <p className="eyebrow eyebrow-center mt-10">Page Not Found</p>
            <h1 className="mx-auto mt-4 max-w-2xl text-3xl font-medium sm:text-5xl">This page seems to have wandered off campus.</h1>
            <p className="mx-auto mt-6 max-w-lg text-ink-soft">The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back to the classroom.</p>
            <div className="mt-10 flex flex-col justify-center gap-3 min-[420px]:flex-row">
              <Link to="/" className="btn-primary">
                <LuArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Home
              </Link>
              <Link to="/contact" className="btn-outline">
                <LuPhone className="h-4 w-4" aria-hidden="true" /> Contact Us
              </Link>
            </div>
            <nav aria-label="Helpful links" className="mt-12">
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-soft">
                {navigation.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="hover:text-clay">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </div>
      </section>
    </>
  );
}
