import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { routeMetadata, getRouteMetadata } from '../src/i18n/routeMetadata.js';

const template = await readFile('dist/index.html', 'utf8');
const escape = (s) => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
for (const lang of ['vi', 'en']) {
  for (const route of Object.keys(routeMetadata)) {
    const path = `/${lang}${route}`;
    const meta = getRouteMetadata(path);
    const head = `<title>${escape(meta.title)}</title>
    <meta name="description" content="${escape(meta.description)}" />
    <meta property="og:title" content="${escape(meta.title)}" />
    <meta property="og:description" content="${escape(meta.description)}" />
    <meta property="og:url" content="${meta.canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="${lang === 'vi' ? 'vi_VN' : 'en_US'}" />
    <link rel="canonical" href="${meta.canonical}" />
    <link rel="alternate" hreflang="vi" href="https://studio.pdl.io.vn/vi${route}" />
    <link rel="alternate" hreflang="en" href="https://studio.pdl.io.vn/en${route}" />`;
    const html = template.replace('lang="vi"', `lang="${lang}"`).replace(/<title>.*?<\/title>/, head);
    await mkdir(`dist${path}`, { recursive: true });
    await writeFile(`dist${path}/index.html`, html);
  }
}
console.log(`Generated ${Object.keys(routeMetadata).length * 2} localized HTML entry points.`);
