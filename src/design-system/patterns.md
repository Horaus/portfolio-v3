# PDL Studio — Design System Patterns

> Hướng dẫn pattern chuẩn khi tạo page/component mới cho `folio-app`.

---

## 1. Page Structure Patterns

### 1.1 Report Page (Strategy / Growth / Automation / Analytics / Visual)

```
<Header />
<PageTransition>
  <div className={container.fullPage}>
    
    <section hero>
      <motion.div> heading + quote </motion.div>
      <grid> content cards </grid>
    </section>

    <section id="report-section" className={container.reportSection}>
      <report title>
      <A4Page pageNumber={1} totalPages={N}> content </A4Page>
      <A4Page pageNumber={2} totalPages={N}> content </A4Page>
      ...
      <ContentPager next={...} prev={...} />
    </section>

    <SiteFooter />
  </div>
</PageTransition>
```

**Hoặc dùng template:**
```jsx
import ReportPageTemplate, { A4Page } from '../design-system/templates/ReportPageTemplate';

const MyReport = () => (
  <ReportPageTemplate
    heroTitle="Growth Strategy"
    heroSubtitle="Strategy & Planning."
    heroQuote="..."
    reportSectionTitle="Growth Strategy Report"
    reportSectionTag="Strategic Portfolio v2.0"
    pager={{ next: { to: '/next-page', title: 'Next', description: '...' } }}
  >
    <A4Page pageNumber={1} totalPages={3}>
      ...content...
    </A4Page>
  </ReportPageTemplate>
);
```

### 1.2 Standard Page (Team / MarketingSystems / ComingSoon)

```jsx
import StandardPageTemplate from '../design-system/templates/StandardPageTemplate';

const MyPage = () => (
  <StandardPageTemplate>
    <section className="pt-24 pb-16 px-6 md:px-12 max-w-6xl mx-auto">
      ...content...
    </section>
  </StandardPageTemplate>
);
```

### 1.3 Home Page (Split Panel — special case)

Home page dùng layout split-panel riêng biệt. Tham khảo `layout.splitPanel.*` presets.

---

## 2. Navigation Patterns

### Khi nào dùng `hardNavigate` vs `<Link>`

| Trường hợp | Sử dụng | Lý do |
|---|---|---|
| Menu link | `hardNavigate()` | Tránh scroll-state issues trên deep pages |
| Inline content link | `<Link>` | SPA navigation bình thường |
| Language switch | `hardNavigate()` | Full-page reload đảm bảo state reset |
| Anchor link (#) | `<a href="#section">` | Scroll nội trang |

### Luôn dùng `withLangPath` cho internal links

```jsx
import { withLangPath } from '../i18n/routing';
import { useLang } from '../hooks/useLang';

const { lang } = useLang();
const href = withLangPath(lang, '/marketing-systems');
```

---

## 3. I18n Patterns

### Pattern A: `useT()` — cho shared UI text (header, footer, buttons)

```jsx
import useT from '../hooks/useT';
const t = useT();
// Dùng key từ vi.js / en.js
<span>{t('header.home')}</span>
```

### Pattern B: `tx()` inline — cho report content dài

```jsx
const { lang } = useLang();
const isEn = lang === 'en';
const tx = (vi, en) => (isEn ? en : vi);
// Dùng trực tiếp
<p>{tx('Nội dung tiếng Việt', 'English content')}</p>
```

### Key naming convention

```
header.home           → Header component
footer.tagline        → Footer component  
systems.blocks.*.title → MarketingSystems page
home.marketingDesc    → Home page
```

---

## 4. Animation Patterns

### Import từ design system

```jsx
import { fadeInUp, staggerContainer, staggerItem, reportPageReveal } from '../design-system/motion';
```

### Section reveal (scroll vào viewport)

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
```

### Stagger children

```jsx
<motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
  {items.map(item => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## 5. Responsive Patterns

### Mobile-first approach

```
Base (mobile) → md:768px (tablet) → lg:1024px (desktop)
```

### Common breakpoint rules

| Element | Mobile | Desktop |
|---|---|---|
| Container padding | `px-6` | `md:px-12` |
| Grid | `grid-cols-1` | `md:grid-cols-2` hoặc `lg:grid-cols-5` |
| Font size | `text-4xl` | `md:text-6xl` |
| Panel direction | `flex-col` | `flex-row` (implicit) |
| Hover effects | Hidden/disabled | `md:group-hover:...` |
| Touch targets | `min-h-[44px]` | Default |

### Report A4 responsive

Report pages dùng `.report-a4` class (defined in `index.css`) — tự động co nhỏ trên mobile.

---

## 6. Component Composition Checklist

Khi tạo page mới, đảm bảo:

- [ ] Import `Header` + `PageTransition` + `SiteFooter` (hoặc dùng template)
- [ ] Wrap content trong `<PageTransition>`
- [ ] Dùng `useT()` hoặc `tx()` cho mọi user-facing text
- [ ] Thêm i18n keys vào cả `vi.js` và `en.js`
- [ ] Dùng `withLangPath()` cho internal links
- [ ] Dùng `hardNavigate()` cho menu/nav links
- [ ] Thêm Framer Motion animations cho sections
- [ ] Test responsive trên mobile (768px breakpoint)
- [ ] Dùng design tokens thay vì hardcode colors/spacing
- [ ] Register route trong `App.jsx` với `withLang()`

---

## 7. File Organization

```
src/
├── design-system/          ← QUY CHUẨN (bạn đang ở đây)
│   ├── index.js            ← barrel export
│   ├── tokens.js           ← color, spacing, shadows, z-index
│   ├── motion.js           ← Framer Motion variants
│   ├── typography.js       ← text class presets
│   ├── layout.js           ← container, card, layout presets
│   ├── patterns.md         ← pattern documentation (file này)
│   ├── README.md           ← quick start guide
│   └── templates/
│       ├── ReportPageTemplate.jsx  ← report page wrapper + A4Page
│       └── StandardPageTemplate.jsx ← standard page wrapper
├── components/
│   └── layout/             ← shared layout primitives
├── hooks/                  ← language/translation hooks
├── i18n/                   ← routing helpers + locale dicts
├── pages/                  ← route-level screens
└── utils/                  ← navigation helpers
```
