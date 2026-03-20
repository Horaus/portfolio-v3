export const SUPPORTED_LANGS = ['vi', 'en'];
export const DEFAULT_LANG = 'vi';

const stripHashAndSearch = (path) => {
  const hashIndex = path.indexOf('#');
  const searchIndex = path.indexOf('?');
  const splitIndex =
    hashIndex === -1
      ? searchIndex
      : searchIndex === -1
        ? hashIndex
        : Math.min(hashIndex, searchIndex);

  if (splitIndex === -1) {
    return { pathname: path || '/', suffix: '' };
  }

  return {
    pathname: path.slice(0, splitIndex) || '/',
    suffix: path.slice(splitIndex),
  };
};

export const isSupportedLang = (lang) => SUPPORTED_LANGS.includes(lang);

export const getLangFromPathname = (pathname = '/') => {
  const segment = pathname.split('/').filter(Boolean)[0];
  return isSupportedLang(segment) ? segment : DEFAULT_LANG;
};

export const stripLangPrefix = (pathname = '/') => {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length && isSupportedLang(segments[0])) {
    const rest = segments.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  return pathname || '/';
};

export const withLangPath = (lang, path = '/') => {
  const safeLang = isSupportedLang(lang) ? lang : DEFAULT_LANG;
  const { pathname, suffix } = stripHashAndSearch(path);
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const withoutLang = stripLangPrefix(normalized);
  const joined = withoutLang === '/' ? `/${safeLang}` : `/${safeLang}${withoutLang}`;
  return `${joined}${suffix}`;
};

export const ensureLangPath = (path, fallbackLang = DEFAULT_LANG) => {
  if (!path) return path;

  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }

  if (path.startsWith('#')) {
    const currentBase = stripHashAndSearch(window.location.pathname + window.location.search).pathname;
    return `${currentBase}${path}`;
  }

  const { pathname } = stripHashAndSearch(path);
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  if (isSupportedLang(firstSegment)) {
    return path;
  }

  const currentLang = typeof window !== 'undefined' ? getLangFromPathname(window.location.pathname) : fallbackLang;
  return withLangPath(currentLang, path);
};

export const switchLangForCurrentUrl = (targetLang, locationLike) => {
  const safeLang = isSupportedLang(targetLang) ? targetLang : DEFAULT_LANG;
  const pathname = locationLike?.pathname || '/';
  const search = locationLike?.search || '';
  const hash = locationLike?.hash || '';
  const withoutLang = stripLangPrefix(pathname);
  const base = withoutLang === '/' ? `/${safeLang}` : `/${safeLang}${withoutLang}`;
  return `${base}${search}${hash}`;
};

export const legacyToViPath = (pathname = '/') => withLangPath(DEFAULT_LANG, pathname);
