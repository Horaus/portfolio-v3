import React from 'react';
import { Link } from 'react-router-dom';
import { hardNavigate } from '../../utils/hardNavigation';
import BrandLogo from './BrandLogo';

const SiteFooter = () => {
  const handleHardLink = (to) => (event) => {
    event.preventDefault();
    hardNavigate(to);
  };

  return (
    <footer className="border-t border-white/45 bg-[#050505] text-white mt-16">
      <div className="max-w-none mx-auto px-6 md:px-8 lg:px-10 pt-20 md:pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr_1fr] gap-10 md:gap-14 items-end">
          <div className="max-w-sm">
            <div className="mb-5">
              <BrandLogo variant="compact" size="md" tone="light" className="inline-flex" />
            </div>
            <p className="text-[13px] md:text-[15px] text-gray-400 leading-relaxed">
              Full-stack marketing systems, portfolio narratives, and structured strategic delivery.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.45em] text-gray-500 mb-4">Contact</h3>
            <div className="space-y-2.5 text-[13px] md:text-[15px] text-gray-300">
              <p>Email: horaus.minh@gmail.com</p>
              <p>Phone: +84 88 626 8015</p>
              <p>Base: Ha Noi, Vietnam</p>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.45em] text-gray-500 mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-[13px] md:text-[15px]">
              <Link to="/" onClick={handleHardLink('/')} className="text-gray-300 hover:text-accent transition-colors">Home</Link>
              <Link to="/marketing-systems" onClick={handleHardLink('/marketing-systems')} className="text-gray-300 hover:text-accent transition-colors">Systems</Link>
              <Link to="/strategy-planning" onClick={handleHardLink('/strategy-planning')} className="text-gray-300 hover:text-accent transition-colors">Strategy</Link>
              <Link to="/content-creation-design" onClick={handleHardLink('/content-creation-design')} className="text-gray-300 hover:text-accent transition-colors">Visual</Link>
              <Link to="/organic-paid-growth" onClick={handleHardLink('/organic-paid-growth')} className="text-gray-300 hover:text-accent transition-colors">Growth</Link>
              <Link to="/analytics-conversion-retention" onClick={handleHardLink('/analytics-conversion-retention')} className="text-gray-300 hover:text-accent transition-colors">Analytics</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-none mx-auto px-6 md:px-8 lg:px-10 pt-8 pb-8 border-t border-white/45 flex flex-col md:flex-row md:items-center md:justify-end gap-3 text-[10px] uppercase tracking-[0.4em] text-gray-500">
        <div>Portfolio System v3.0</div>
      </div>
    </footer>
  );
};

export default SiteFooter;
