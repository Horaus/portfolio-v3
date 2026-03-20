import React from 'react';
import { Link } from 'react-router-dom';
import { hardNavigate } from '../../utils/hardNavigation';
import BrandLogo from './BrandLogo';
import useT from '../../hooks/useT';
import { useLang } from '../../hooks/useLang';
import { withLangPath } from '../../i18n/routing';

const SiteFooter = () => {
  const t = useT();
  const { lang } = useLang();
  const handleHardLink = (to) => (event) => {
    event.preventDefault();
    hardNavigate(to);
  };

  const links = {
    home: withLangPath(lang, '/'),
    systems: withLangPath(lang, '/marketing-systems'),
    team: withLangPath(lang, '/team'),
    strategy: withLangPath(lang, '/strategy-planning'),
    visual: withLangPath(lang, '/content-creation-design'),
    growth: withLangPath(lang, '/organic-paid-growth'),
    analytics: withLangPath(lang, '/analytics-conversion-retention'),
  };

  return (
    <footer className="border-t border-white/45 bg-[#050505] text-white mt-16">
      <div className="max-w-none mx-auto px-6 md:px-8 lg:px-10 pt-20 md:pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr_1fr] gap-10 md:gap-14 items-end">
          <div className="max-w-sm">
            <div className="mb-5">
              <BrandLogo variant="compact" size="md" tone="light" className="inline-flex" />
            </div>
            <p className="text-[13px] md:text-[15px] text-gray-400 leading-relaxed">{t('footer.tagline')}</p>
          </div>

          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.45em] text-gray-500 mb-4">{t('footer.contact')}</h3>
            <div className="space-y-2.5 text-[13px] md:text-[15px] text-gray-300">
              <p>Email: horaus.minh@gmail.com</p>
              <p>Phone: +84 88 626 8015</p>
              <p>{t('footer.base')}</p>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.45em] text-gray-500 mb-4">{t('footer.quickLinks')}</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-[13px] md:text-[15px]">
              <Link to={links.home} onClick={handleHardLink(links.home)} className="text-gray-300 hover:text-accent transition-colors">{t('footer.home')}</Link>
              <Link to={links.systems} onClick={handleHardLink(links.systems)} className="text-gray-300 hover:text-accent transition-colors">{t('footer.systems')}</Link>
              <Link to={links.team} onClick={handleHardLink(links.team)} className="text-gray-300 hover:text-accent transition-colors">{t('footer.team')}</Link>
              <Link to={links.strategy} onClick={handleHardLink(links.strategy)} className="text-gray-300 hover:text-accent transition-colors">{t('footer.strategy')}</Link>
              <Link to={links.visual} onClick={handleHardLink(links.visual)} className="text-gray-300 hover:text-accent transition-colors">{t('footer.visual')}</Link>
              <Link to={links.growth} onClick={handleHardLink(links.growth)} className="text-gray-300 hover:text-accent transition-colors">{t('footer.growth')}</Link>
              <Link to={links.analytics} onClick={handleHardLink(links.analytics)} className="text-gray-300 hover:text-accent transition-colors">{t('footer.analytics')}</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-none mx-auto px-6 md:px-8 lg:px-10 pt-8 pb-8 border-t border-white/45 flex flex-col md:flex-row md:items-center md:justify-end gap-3 text-[10px] uppercase tracking-[0.4em] text-gray-500">
        <div>{t('footer.version')}</div>
      </div>
    </footer>
  );
};

export default SiteFooter;
