import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';

const FloatingScrollTopButton = () => {
  const [visible, setVisible] = useState(false);
  const lastScrollableRef = useRef(null);

  useEffect(() => {
    const getDocumentScrollTop = () => {
      const scroller = document.scrollingElement || document.documentElement;
      return Math.max(
        window.scrollY || 0,
        scroller?.scrollTop || 0,
        document.documentElement?.scrollTop || 0,
        document.body?.scrollTop || 0
      );
    };

    const getCurrentScrollTop = () => {
      const docTop = getDocumentScrollTop();
      if (docTop > 0) return docTop;
      if (lastScrollableRef.current instanceof HTMLElement) {
        return lastScrollableRef.current.scrollTop || 0;
      }
      return 0;
    };

    const updateVisibility = (event) => {
      if (event?.target instanceof HTMLElement && event.target.scrollTop > 0) {
        lastScrollableRef.current = event.target;
      }
      const y = getCurrentScrollTop();

      // Keep it simple and reliable: show once user has scrolled down.
      setVisible(y > 1);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true, capture: true });
    window.addEventListener('resize', updateVisibility);
    const intervalId = window.setInterval(updateVisibility, 300);
    return () => {
      window.removeEventListener('scroll', updateVisibility, true);
      window.removeEventListener('resize', updateVisibility);
      window.clearInterval(intervalId);
    };
  }, []);

  const scrollToTop = () => {
    const rootScroller =
      document.scrollingElement || document.documentElement || document.body;

    if (lastScrollableRef.current instanceof HTMLElement) {
      lastScrollableRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (rootScroller instanceof HTMLElement) {
      rootScroller.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 14, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 14, scale: 0.92 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[9999] w-9 h-9 md:w-14 md:h-14 rounded-full bg-white text-black shadow-[0_16px_30px_rgba(0,0,0,0.28)] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5l-7 7m7-7l7 7m-7-7v14" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
    ,
    document.body
  );
};

export default FloatingScrollTopButton;
