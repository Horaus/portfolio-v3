# PDL Studio — Portfolio v3.0

Portfolio cá nhân dạng split-screen, trình bày hệ thống Marketing và R&D theo dạng báo cáo tương tác.

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v3**
- **Framer Motion** — page transitions & animations
- **Recharts** — data visualization
- **React Router v7**

## Cấu trúc dự án

```
src/
├── components/
│   ├── layout/          # Header, Footer, PageTransition, ContentPager...
│   └── BrandGuideline   # Brand guideline page (static)
├── pages/               # Các trang chính
│   ├── Home.jsx         # Split-screen landing
│   ├── MarketingSystems # Accordion marketing blocks
│   ├── StrategyPlanning
│   ├── ContentCreationDesign
│   ├── OrganicPaidGrowth
│   ├── AutomationCRM
│   ├── AnalyticsConversionRetention
│   └── ContentStrategy
├── utils/
│   └── hardNavigation   # SPA navigation helper
└── index.css            # Global styles + split-panel CSS
```

## Khởi động

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

---

*PDL Studio — Marketing & R&D Portfolio System v3.0*
