import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ScrollManager from './ScrollManager.jsx';
import FloatingWidget from '../widget/FloatingWidget.jsx';

export default function Layout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-clay focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
      <FloatingWidget />
    </>
  );
}
