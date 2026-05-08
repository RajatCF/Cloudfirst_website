import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      return;
    }

    const id = decodeURIComponent(hash.replace('#', ''));
    const el = document.getElementById(id);

    if (!el) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      return;
    }

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => window.scrollBy({ top: -96, left: 0, behavior: 'smooth' }), 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
