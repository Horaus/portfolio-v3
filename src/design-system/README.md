# PDL Studio — Design System

> Hệ thống quy chuẩn UI/UX cho `folio-app` (Portfolio v3.0).
> Đảm bảo mọi page mới đều nhất quán về visual, interaction, và cấu trúc.

## Quick Start

```jsx
// 1. Import tokens/presets cần dùng
import { colors, fadeInUp, heading, container, card } from '../design-system';

// 2. Hoặc dùng template có sẵn
import ReportPageTemplate, { A4Page } from '../design-system/templates/ReportPageTemplate';
import StandardPageTemplate from '../design-system/templates/StandardPageTemplate';
```

## Cấu trúc

| File | Mô tả |
|---|---|
| [`tokens.js`](./tokens.js) | Colors, spacing, typography scale, shadows, z-index, breakpoints, transitions |
| [`motion.js`](./motion.js) | Framer Motion variants: fadeIn, slideUp, stagger, page transitions, report reveals |
| [`typography.js`](./typography.js) | Tailwind class strings cho headings, body, labels, buttons |
| [`layout.js`](./layout.js) | Class strings cho containers, cards, report pages, lists, app shell |
| [`patterns.md`](./patterns.md) | Documentation chi tiết: page patterns, navigation, i18n, animation, responsive |
| [`templates/`](./templates/) | React component templates sẵn sàng dùng |

## Nguyên tắc cốt lõi

### 1. Tokens là source of truth
Mọi giá trị visual (color, spacing, shadow) đều nằm trong `tokens.js`. Không hardcode.

### 2. Dùng presets thay vì tự viết class
```jsx
// ✅ Đúng
import { heading, body } from '../design-system/typography';
<h1 className={heading.displayLg}>Title</h1>

// ❌ Sai — hardcode class
<h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-tight text-white italic">
```

### 3. Dùng template cho page mới
```jsx
// ✅ Report page
<ReportPageTemplate heroTitle="..." reportSectionTitle="...">
  <A4Page pageNumber={1} totalPages={3}>content</A4Page>
</ReportPageTemplate>

// ✅ Standard page
<StandardPageTemplate>
  <section>content</section>
</StandardPageTemplate>
```

### 4. Animation consistency
Dùng motion presets từ `motion.js` thay vì tự khai báo inline.

### 5. i18n bắt buộc
Mọi user-facing text phải qua `useT()` hoặc `tx()`. Thêm keys vào cả `vi.js` và `en.js`.

## Tham khảo nhanh

### Color tokens
- `accent` → `#0B74E5` (brand blue)
- `darkBg` → `#0a0a0a` (page background)
- `lightBg` → `#ffffff` (report background)
- `lightSurface` → `#f8f9fa` (report section background)

### Typography scale
- `display-xl` → 96px (home splash)
- `display-lg` → 64px (page hero)
- `display-md` → 44px (report cover)
- `h1` → 36px | `h2` → 20px | `h3` → 14px
- `body` → 14px | `caption` → 11px | `label` → 10px

### Font families
- **App UI**: `Space Grotesk`
- **Report body**: `Inter`

## Xem thêm
- [patterns.md](./patterns.md) — Hướng dẫn chi tiết từng pattern
