import React from 'react';
import { Link } from 'react-router-dom';
import { hardNavigate } from '../../utils/hardNavigation';
import useT from '../../hooks/useT';
import { useLang } from '../../hooks/useLang';
import { withLangPath } from '../../i18n/routing';

const baseCardClass = 'group rounded-xl border transition-all duration-300';

const themeClassMap = {
  light: {
    wrapper: 'max-w-4xl mx-auto mt-12',
    label: 'text-gray-400',
    title: 'text-black',
    line: 'bg-black/10 group-hover:bg-accent',
    card: 'bg-white/90 border-gray-200 hover:border-black/10 hover:shadow-[0_14px_32px_rgba(0,0,0,0.06)]',
    text: 'text-gray-500',
  },
  dark: {
    wrapper: 'max-w-4xl mx-auto',
    label: 'text-gray-600',
    title: 'text-white',
    line: 'bg-white/10 group-hover:bg-accent',
    card: 'bg-white/[0.02] border-white/8 hover:border-white/15 hover:bg-white/[0.04]',
    text: 'text-gray-400',
  },
};

const ContentPagerCard = ({ item, direction, theme, directionLabel, lang }) => {
  if (!item) return <div className="hidden md:block" />;

  const themeClass = themeClassMap[theme];
  const arrow = direction === 'prev' ? '\u2190' : '\u2192';
  const to = withLangPath(lang, item.to);

  const handleHardNavigate = (event) => {
    event.preventDefault();
    hardNavigate(to);
  };

  return (
    <Link
      to={to}
      onClick={handleHardNavigate}
      className={`${baseCardClass} ${themeClass.card} p-4 md:px-5 md:py-4 flex-1 min-h-[88px] flex items-center justify-between gap-4`}
    >
      <div className="min-w-0">
        <div className={`text-[9px] font-black uppercase tracking-[0.28em] mb-2 ${themeClass.label}`}>
          {directionLabel}
        </div>
        <div className={`text-sm md:text-base font-black uppercase tracking-[0.08em] ${themeClass.title}`}>
          {item.title}
        </div>
      </div>
      <div className="shrink-0 text-right">
        <div className={`w-8 md:w-10 h-px mb-3 ml-auto transition-all duration-300 ${themeClass.line} group-hover:w-14`} />
        <div className="text-accent text-xs font-black uppercase tracking-[0.15em]">{arrow}</div>
      </div>
    </Link>
  );
};

const ContentPager = ({ prev, next, theme = 'light', title }) => {
  const themeClass = themeClassMap[theme];
  const t = useT();
  const { lang } = useLang();
  const resolvedTitle = title || t('pager.defaultTitle');

  return (
    <section className={themeClass.wrapper}>
      <div className="text-center mb-5">
        <span className={`text-[9px] font-black uppercase tracking-[0.45em] mb-2 block ${themeClass.label}`}>
          {t('pager.navigation')}
        </span>
        <h2 className={`text-sm md:text-base font-bold uppercase tracking-[0.3em] ${themeClass.title}`}>
          {resolvedTitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <ContentPagerCard item={prev} direction="prev" directionLabel={t('pager.prev')} theme={theme} lang={lang} />
        <ContentPagerCard item={next} direction="next" directionLabel={t('pager.next')} theme={theme} lang={lang} />
      </div>
    </section>
  );
};

export default ContentPager;
