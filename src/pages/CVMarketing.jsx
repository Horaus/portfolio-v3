import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../hooks/useLang';
import useT from '../hooks/useT';
import { withLangPath } from '../i18n/routing';

const CVMarketing = () => {
  const { lang } = useLang();
  const t = useT();

  const backTo = withLangPath(lang, '/team/horaus-minh');
  const cacheBust = '20260321-1';
  const cvSrc =
    lang === 'en'
      ? `/cv-edit/cv-preview-en.html?v=${cacheBust}`
      : `/cv-edit/cv-preview-vi.html?v=${cacheBust}`;

  return (
    <div className="w-full min-h-screen bg-[#f1f1f1] relative">
      <Link
        to={backTo}
        className="fixed top-5 left-5 z-50 px-4 py-2 rounded-full border border-black/20 bg-white/90 backdrop-blur text-[11px] font-bold uppercase tracking-[0.16em] text-black hover:text-accent hover:border-accent transition-colors"
      >
        {t('cv.back')}
      </Link>
      <iframe title="Horaus Minh - Marketing CV" src={cvSrc} className="w-full min-h-screen border-0" />
    </div>
  );
};

export default CVMarketing;
