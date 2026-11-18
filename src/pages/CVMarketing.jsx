import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../hooks/useLang';
import useT from '../hooks/useT';
import { withLangPath } from '../i18n/routing';

const CVMarketing = ({ variant = 'marketing' }) => {
  const { lang } = useLang();
  const t = useT();
  const iframeRef = useRef(null);

  const backTo = withLangPath(lang, '/team/horaus-minh');
  const cacheBust = '20261118-2';
  const isAutomation = variant === 'ai-automation';
  const cvSrc = isAutomation
    ? `/cv-edit/cv-ai-automation-${lang}.html?v=${cacheBust}`
    : lang === 'en'
      ? `/cv-edit/cv-preview-en.html?v=${cacheBust}`
      : `/cv-edit/cv-preview-vi.html?v=${cacheBust}`;

  const handleIframeLoad = () => {
    const frame = iframeRef.current;
    if (!frame || !frame.contentWindow) return;

    try {
      const frameUrl = new URL(frame.contentWindow.location.href);
      if (!frameUrl.pathname.startsWith('/cv-edit/')) {
        window.location.assign(`${frameUrl.pathname}${frameUrl.search}${frameUrl.hash}`);
      }
    } catch (_error) {
      // Keep default behavior for non-readable iframe origins.
    }
  };

  return (
    <div className="w-full h-dvh bg-[#f1f1f1] flex flex-col overflow-hidden">
      <div className="shrink-0 flex items-center gap-5 px-5 py-3 border-b border-black/10 bg-white">
        <Link
          to={backTo}
          className="text-xs font-semibold text-black hover:text-accent"
        >
          {lang === 'vi' ? 'Về hồ sơ' : t('cv.back')}
        </Link>
        <span className="text-xs text-black/50">{isAutomation ? 'AI & Automation' : 'Marketing'} · A4</span>
      </div>
      <iframe
        ref={iframeRef}
        title={`Horaus Minh - ${isAutomation ? 'AI & Automation' : 'Marketing'} CV`}
        src={cvSrc}
        onLoad={handleIframeLoad}
        className="w-full flex-1 min-h-0 border-0"
      />
    </div>
  );
};

export default CVMarketing;
