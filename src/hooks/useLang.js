import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getLangFromPathname, stripLangPrefix } from '../i18n/routing';

export const useLang = () => {
  const location = useLocation();

  return useMemo(() => {
    const lang = getLangFromPathname(location.pathname);
    const pathnameWithoutLang = stripLangPrefix(location.pathname);
    return { lang, pathnameWithoutLang };
  }, [location.pathname]);
};

export default useLang;
