import React, { Suspense, lazy, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import MarketingSystems from './pages/MarketingSystems';
import Team from './pages/Team';
import TeamLeadHorausMinh from './pages/TeamLeadHorausMinh';
import CVMarketing from './pages/CVMarketing';

const ContentStrategy = lazy(() => import('./pages/ContentStrategy'));
const StrategyPlanning = lazy(() => import('./pages/StrategyPlanning'));
const OrganicPaidGrowth = lazy(() => import('./pages/OrganicPaidGrowth'));
const ContentCreationDesign = lazy(() => import('./pages/ContentCreationDesign'));
const AutomationCRM = lazy(() => import('./pages/AutomationCRM'));
const AnalyticsConversionRetention = lazy(() => import('./pages/AnalyticsConversionRetention'));
const VisualShowcase = lazy(() => import('./pages/VisualShowcase'));
import { legacyToViPath } from './i18n/routing';
import FloatingScrollTopButton from './components/layout/FloatingScrollTopButton';

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

  const withLang = (path) => [`/vi${path}`, `/en${path}`];
  const LegacyRedirect = ({ toPath }) => (
    <Navigate
      replace
      to={`${legacyToViPath(toPath)}${location.search || ''}${location.hash || ''}`}
    />
  );

  const legacyRedirect = (legacyPath) => (
    <Route path={legacyPath} element={<LegacyRedirect toPath={legacyPath} />} />
  );

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<RouteLoadingShell />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate replace to="/vi" />} />
          {withLang('').map((path) => <Route key={path} path={path} element={<Home />} />)}
          {withLang('/marketing-systems').map((path) => <Route key={path} path={path} element={<MarketingSystems />} />)}
          {withLang('/team').map((path) => <Route key={path} path={path} element={<Team />} />)}
          {withLang('/team/horaus-minh').map((path) => <Route key={path} path={path} element={<TeamLeadHorausMinh />} />)}
          {withLang('/team/horaus-minh/cv/marketing').map((path) => <Route key={path} path={path} element={<CVMarketing />} />)}
          {withLang('/content-strategy').map((path) => <Route key={path} path={path} element={<ContentStrategy />} />)}
          {withLang('/strategy-planning').map((path) => <Route key={path} path={path} element={<StrategyPlanning />} />)}
          {withLang('/organic-paid-growth').map((path) => <Route key={path} path={path} element={<OrganicPaidGrowth />} />)}
          {withLang('/content-creation-design').map((path) => <Route key={path} path={path} element={<ContentCreationDesign />} />)}
          {withLang('/automation-crm').map((path) => <Route key={path} path={path} element={<AutomationCRM />} />)}
          {withLang('/analytics-conversion-retention').map((path) => <Route key={path} path={path} element={<AnalyticsConversionRetention />} />)}
          {withLang('/visual-showcase-preview').map((path) => <Route key={path} path={path} element={<VisualShowcase />} />)}

          {legacyRedirect('/marketing-systems')}
          {legacyRedirect('/team')}
          {legacyRedirect('/team/horaus-minh')}
          {legacyRedirect('/team/horaus-minh/cv/marketing')}
          {legacyRedirect('/content-strategy')}
          {legacyRedirect('/strategy-planning')}
          {legacyRedirect('/organic-paid-growth')}
          {legacyRedirect('/content-creation-design')}
          {legacyRedirect('/automation-crm')}
          {legacyRedirect('/analytics-conversion-retention')}
          {legacyRedirect('/visual-showcase-preview')}

          <Route path="*" element={<Navigate replace to="/vi" />} />
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
        <FloatingScrollTopButton />
      </div>
    </Router>
  );
}

export default App;
