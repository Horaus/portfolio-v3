import React, { Suspense, lazy, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import MarketingSystems from './pages/MarketingSystems';

const ContentStrategy = lazy(() => import('./pages/ContentStrategy'));
const StrategyPlanning = lazy(() => import('./pages/StrategyPlanning'));
const OrganicPaidGrowth = lazy(() => import('./pages/OrganicPaidGrowth'));
const ContentCreationDesign = lazy(() => import('./pages/ContentCreationDesign'));
const AutomationCRM = lazy(() => import('./pages/AutomationCRM'));
const AnalyticsConversionRetention = lazy(() => import('./pages/AnalyticsConversionRetention'));
const VisualShowcase = lazy(() => import('./pages/VisualShowcase'));

const RouteLoadingShell = () => (
  <div className="min-h-screen w-full bg-darkBg text-white flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-px bg-accent mx-auto mb-4" />
      <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500">Loading Portfolio</p>
    </div>
  </div>
);

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    const getScrollElement = () =>
      document.scrollingElement || document.documentElement || document.body;

    const scrollToPageTop = () => {
      const scroller = getScrollElement();
      if (scroller) scroller.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    const scrollToHashTarget = () => {
      if (!location.hash) return false;

      const rawHash = location.hash.slice(1);
      if (!rawHash) return false;

      let decodedHash = rawHash;
      try {
        decodedHash = decodeURIComponent(rawHash);
      } catch {
        decodedHash = rawHash;
      }

      const escapedHash =
        typeof CSS !== 'undefined' && typeof CSS.escape === 'function'
          ? CSS.escape(decodedHash)
          : decodedHash.replace(/["\\#.:()[\]']/g, '\\$&');
      const safeSelector = `#${escapedHash}`;
      const target =
        document.getElementById(decodedHash) ||
        document.querySelector(safeSelector) ||
        document.querySelector(location.hash);

      if (!target) return false;

      target.scrollIntoView({ block: 'start', behavior: 'auto' });
      return true;
    };

    const syncScroll = () => {
      if (scrollToHashTarget()) return;
      scrollToPageTop();
    };

    syncScroll();

    let frameB = 0;
    const frameA = window.requestAnimationFrame(() => {
      syncScroll();
      frameB = window.requestAnimationFrame(syncScroll);
    });

    const timeoutA = window.setTimeout(syncScroll, 0);
    const timeoutB = window.setTimeout(syncScroll, 120);

    return () => {
      window.cancelAnimationFrame(frameA);
      window.cancelAnimationFrame(frameB);
      window.clearTimeout(timeoutA);
      window.clearTimeout(timeoutB);
    };
  }, [location.key, location.pathname, location.hash]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<RouteLoadingShell />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/marketing-systems" element={<MarketingSystems />} />
          <Route path="/content-strategy" element={<ContentStrategy />} />
          <Route path="/strategy-planning" element={<StrategyPlanning />} />
          <Route path="/organic-paid-growth" element={<OrganicPaidGrowth />} />
          <Route path="/content-creation-design" element={<ContentCreationDesign />} />
          <Route path="/automation-crm" element={<AutomationCRM />} />
          <Route path="/analytics-conversion-retention" element={<AnalyticsConversionRetention />} />
          <Route path="/visual-showcase-preview" element={<VisualShowcase />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container selection:bg-accent selection:text-white">
        <ScrollToTop />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
