import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { hardNavigate } from '../../utils/hardNavigation';
import BrandLogo from './BrandLogo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const hasReportAnchor = [
    '/strategy-planning',
    '/content-creation-design',
    '/organic-paid-growth',
    '/automation-crm',
    '/analytics-conversion-retention',
    '/visual-showcase-preview',
  ].includes(location.pathname);

  useEffect(() => {
    const target = document.getElementById('report-section');
    if (!target) {
      setIsScrolled(false);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.boundingClientRect.top <= 80) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      });
    }, {
      root: null,
      threshold: Array.from({ length: 100 }, (_, i) => i / 100),
      rootMargin: '0px'
    });

    observer.observe(target);

    return () => observer.disconnect();
  }, [location.pathname]);

  // Determine base styles depending on whether we scrolled past the dark section
  const textColor = isScrolled ? 'text-black' : 'text-white';
  const bgColor = isScrolled ? 'bg-white/80' : 'bg-black/20';
  const borderColor = isScrolled ? 'border-black/5' : 'border-white/5';
  const navLinkClass = 'hover:text-accent transition-colors';
  const logoTone = isScrolled ? 'dark' : 'light';
  const handleHardLink = (to) => (event) => {
    event.preventDefault();
    hardNavigate(to);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md transition-all duration-300 ${bgColor} ${borderColor} border-b`}>
      <div className="relative group cursor-pointer transition-colors duration-300">
        <BrandLogo
          variant="full"
          size="sm"
          tone={logoTone}
          asLink
          to="/"
          onClick={handleHardLink('/')}
          className="hidden xl:inline-flex hover:opacity-85 transition-opacity"
        />
        <BrandLogo
          variant="compact"
          size="sm"
          tone={logoTone}
          asLink
          to="/"
          onClick={handleHardLink('/')}
          className="inline-flex xl:hidden hover:opacity-85 transition-opacity"
        />
      </div>
      
      <nav className={`hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase ${textColor} transition-colors duration-300`}>
        <Link to="/" onClick={handleHardLink('/')} className={navLinkClass}>Home</Link>
        <Link to="/marketing-systems" onClick={handleHardLink('/marketing-systems')} className={navLinkClass}>Systems</Link>
        {hasReportAnchor && (
          <a href="#report-section" className={navLinkClass}>Report</a>
        )}
      </nav>

      <div className={`md:hidden text-[10px] uppercase tracking-[0.35em] ${textColor} transition-colors duration-300`}>
        {isHome ? 'Portfolio' : 'System'}
      </div>
    </header>
  );
};

export default Header;
