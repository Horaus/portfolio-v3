import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { hardNavigate } from '../../utils/hardNavigation';
import BrandLogo from './BrandLogo';
import useT from '../../hooks/useT';
import { useLang } from '../../hooks/useLang';
import { switchLangForCurrentUrl, withLangPath } from '../../i18n/routing';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSystemsOpen, setIsSystemsOpen] = useState(false);
  const location = useLocation();
  const t = useT();
  const { lang, pathnameWithoutLang } = useLang();

  const isHome = pathnameWithoutLang === '/';
  const hasReportAnchor = [
    '/strategy-planning',
    '/content-creation-design',
    '/organic-paid-growth',
    '/automation-crm',
    '/analytics-conversion-retention',
    '/visual-showcase-preview',
    '/team/horaus-minh',
    '/team/horaus-minh/cv/marketing',
  ].includes(pathnameWithoutLang);

  useEffect(() => {
    const target = document.getElementById('report-section');
    if (!target) {
      setIsScrolled(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.boundingClientRect.top <= 80) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        });
      },
      {
        root: null,
        threshold: Array.from({ length: 100 }, (_, i) => i / 100),
        rootMargin: '0px',
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSystemsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMobileMenuOpen]);

  const textColor = isScrolled ? 'text-black' : 'text-white';
  const bgColor = isScrolled ? 'bg-white/80' : 'bg-black/20';
  const borderColor = isScrolled ? 'border-black/5' : 'border-white/5';
  const navLinkClass = 'hover:text-accent transition-colors';
  const logoTone = isScrolled ? 'dark' : 'light';

  const homePath = withLangPath(lang, '/');
  const systemsPath = withLangPath(lang, '/marketing-systems');
  const teamPath = withLangPath(lang, '/team');

  const systemsBranches = [
    { to: withLangPath(lang, '/strategy-planning'), label: t('systems.blocks.strategy.title') },
    { to: withLangPath(lang, '/content-creation-design'), label: t('systems.blocks.visual.title') },
    { to: withLangPath(lang, '/organic-paid-growth'), label: t('systems.blocks.growth.title') },
    { to: withLangPath(lang, '/automation-crm'), label: t('systems.blocks.automation.title') },
    { to: withLangPath(lang, '/analytics-conversion-retention'), label: t('systems.blocks.analytics.title') },
  ];

  const handleHardLink = (to) => (event) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    hardNavigate(to);
  };

  const switchLanguage = (nextLang) => {
    const to = switchLangForCurrentUrl(nextLang, location);
    setIsMobileMenuOpen(false);
    hardNavigate(to);
  };

  const langBtnClass = (isActive) =>
    `text-[11px] uppercase tracking-[0.22em] transition-colors ${
      isActive ? 'text-accent' : `${textColor} hover:text-accent`
    }`;

  const mobileLinkClass =
    'block w-full text-left text-base font-semibold uppercase tracking-[0.16em] text-black hover:text-accent transition-colors py-3';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center backdrop-blur-md transition-all duration-300 ${bgColor} ${borderColor} border-b`}
      >
        <div className="relative group cursor-pointer transition-colors duration-300">
          <BrandLogo
            variant="full"
            size="sm"
            tone={logoTone}
            asLink
            to={homePath}
            onClick={handleHardLink(homePath)}
            className="inline-flex hover:opacity-85 transition-opacity"
          />
        </div>

        <nav
          className={`hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest uppercase ${textColor} transition-colors duration-300`}
        >
          <Link to={homePath} onClick={handleHardLink(homePath)} className={navLinkClass}>
            {t('header.home')}
          </Link>
          <Link to={systemsPath} onClick={handleHardLink(systemsPath)} className={navLinkClass}>
            {t('header.systems')}
          </Link>
          <Link to={teamPath} onClick={handleHardLink(teamPath)} className={navLinkClass}>
            {t('header.team')}
          </Link>
          {hasReportAnchor && (
            <a href="#report-section" className={navLinkClass}>
              {t('header.report')}
            </a>
          )}

          <div className="ml-2 pl-5 border-l border-current/20 flex items-center gap-2">
            <button type="button" className={langBtnClass(lang === 'vi')} onClick={() => switchLanguage('vi')}>
              VI
            </button>
            <span className="text-[10px] opacity-40">|</span>
            <button type="button" className={langBtnClass(lang === 'en')} onClick={() => switchLanguage('en')}>
              EN
            </button>
          </div>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <div className={`text-[10px] uppercase tracking-[0.28em] ${textColor}`}>
            {isHome ? t('header.portfolio') : t('header.brandShort')}
          </div>
          <button
            type="button"
            aria-label="Open navigation"
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
              isScrolled ? 'border-black/15 text-black' : 'border-white/25 text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="sr-only">Menu</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              initial={false}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.22 }}
            >
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </motion.svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[70] md:hidden">
            <motion.button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            <motion.aside
              className="absolute right-0 top-0 h-full w-[86%] max-w-[360px] bg-white text-black shadow-2xl border-l border-black/10 p-5 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            >
              <div className="flex items-center justify-between mb-6">
                <BrandLogo variant="compact" size="sm" tone="dark" asLink to={homePath} onClick={handleHardLink(homePath)} />
                <button
                  type="button"
                  aria-label="Close"
                  className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="border-t border-black/10 pt-3">
                <Link to={homePath} onClick={handleHardLink(homePath)} className={mobileLinkClass}>
                  {t('header.home')}
                </Link>

                <button
                  type="button"
                  className={`${mobileLinkClass} flex items-center justify-between`}
                  onClick={() => setIsSystemsOpen((prev) => !prev)}
                >
                  <span>{t('header.systems')}</span>
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    animate={{ rotate: isSystemsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <AnimatePresence initial={false}>
                  {isSystemsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pl-3 border-l border-black/10 ml-1"
                    >
                      <Link to={systemsPath} onClick={handleHardLink(systemsPath)} className="block py-2 text-xs font-bold uppercase tracking-[0.14em] text-black/75 hover:text-accent">
                        Overview
                      </Link>
                      {systemsBranches.map((branch, index) => (
                        <Link
                          key={branch.to}
                          to={branch.to}
                          onClick={handleHardLink(branch.to)}
                          className="block py-2 text-xs font-bold uppercase tracking-[0.14em] text-black/75 hover:text-accent"
                        >
                          {index + 1}. {branch.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link to={teamPath} onClick={handleHardLink(teamPath)} className={mobileLinkClass}>
                  {t('header.team')}
                </Link>
                {hasReportAnchor && (
                  <a href="#report-section" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                    {t('header.report')}
                  </a>
                )}
              </nav>

              <div className="mt-auto pt-5 border-t border-black/10">
                <div className="text-[10px] uppercase tracking-[0.3em] text-black/50 mb-3">Language</div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className={`px-3 py-2 rounded-full text-xs font-bold uppercase tracking-[0.16em] border min-h-[42px] ${
                      lang === 'vi' ? 'bg-black text-white border-black' : 'border-black/20 text-black'
                    }`}
                    onClick={() => switchLanguage('vi')}
                  >
                    VI
                  </button>
                  <button
                    type="button"
                    className={`px-3 py-2 rounded-full text-xs font-bold uppercase tracking-[0.16em] border min-h-[42px] ${
                      lang === 'en' ? 'bg-black text-white border-black' : 'border-black/20 text-black'
                    }`}
                    onClick={() => switchLanguage('en')}
                  >
                    EN
                  </button>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
