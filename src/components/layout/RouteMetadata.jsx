import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteMetadata, siteOrigin } from '../../i18n/routeMetadata';

export default function RouteMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = getRouteMetadata(pathname);
    document.documentElement.lang = meta.lang;
    document.title = meta.title;
    const set = (selector, tag, attrs) => {
      let node = document.head.querySelector(selector);
      if (!node) { node = document.createElement(tag); document.head.appendChild(node); }
      Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    };
    set('meta[name="description"]', 'meta', { name: 'description', content: meta.description });
    for (const [property, content] of Object.entries({ 'og:title': meta.title, 'og:description': meta.description, 'og:url': meta.canonical, 'og:locale': meta.lang === 'vi' ? 'vi_VN' : 'en_US', 'og:type': 'website' })) {
      set(`meta[property="${property}"]`, 'meta', { property, content });
    }
    set('link[rel="canonical"]', 'link', { rel: 'canonical', href: meta.canonical });
    for (const lang of ['vi', 'en']) set(`link[hreflang="${lang}"]`, 'link', { rel: 'alternate', hreflang: lang, href: `${siteOrigin}/${lang}${meta.route}` });
  }, [pathname]);
  return null;
}
