import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls to top on route change, or to an element when the URL carries a #hash. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      let tries = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (tries++ < 20) {
          setTimeout(tryScroll, 60);
        }
      };
      tryScroll();
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
