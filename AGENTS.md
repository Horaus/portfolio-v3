# AGENTS.md

## Project Description
- **Name:** `folio-app` (PDL Studio Portfolio v3.0)
- **Type:** Frontend single-page application (SPA)
- **Purpose:** Interactive portfolio presenting a full-stack marketing system (Strategy, Visual, Growth, Automation, Analytics) with bilingual UX (`vi`/`en`) and narrative report pages.
- **Core stack:** React 19, Vite 8, Tailwind CSS v3, Framer Motion, Recharts, React Router v7.
- **Runtime scope:** Static frontend app; no backend service in this repository.

## Setup & Prerequisites
- **Node.js:** Recommended modern LTS (Node 20+).
- **Package manager:** `npm` (lockfile is `package-lock.json`).
- **Install dependencies:**
```bash
npm install
```

## Build / Run Commands
- **Development server (hot reload):**
```bash
npm run dev
```
- **Production build (outputs to `dist/`):**
```bash
npm run build
```
- **Preview production build locally:**
```bash
npm run preview
```
- **Lint source:**
```bash
npm run lint
```

## Test Commands
- There is currently **no dedicated unit/integration test suite** (`npm test` is not defined).
- Recommended verification workflow:
```bash
npm run lint
npm run build
```
- Manual smoke checks after build/dev:
- `/vi`
- `/en`
- `/vi/marketing-systems`
- `/vi/team`
- `/vi/team/horaus-minh/cv/marketing`

## Architecture Overview
## App Shell
- Entry: `src/main.jsx` mounts `<App />` with React `StrictMode`.
- Router is defined in `src/App.jsx` with:
- language-prefixed routes (`/vi/...`, `/en/...`)
- lazy loading for heavier pages (`React.lazy`)
- `Suspense` loading shell
- `AnimatePresence` route transitions
- hard redirects for legacy non-prefixed routes to default language (`vi`)

## Navigation & Routing Model
- Language routing helpers live in `src/i18n/routing.js`.
- URL language is derived from first pathname segment.
- `withLangPath`, `ensureLangPath`, `switchLangForCurrentUrl` enforce consistent localized URLs.
- `hardNavigate` (`src/utils/hardNavigation.js`) intentionally uses full-page navigation (`window.location.assign`) to avoid scroll-state issues on deep pages.

## Internationalization (i18n)
- Dictionaries:
- `src/i18n/messages/vi.js`
- `src/i18n/messages/en.js`
- Translation resolver: `src/i18n/index.js` (`translate` with fallback to default language).
- Hooks:
- `useLang` (`src/hooks/useLang.js`) for active language + normalized path.
- `useT` (`src/hooks/useT.js`) for keyed translation function.

## UI Composition Pattern
- Most pages follow:
- `<Header />`
- `<PageTransition />`
- page-specific content sections
- optional `<ContentPager />`
- `<SiteFooter />`
- Shared layout components are in `src/components/layout/`.
- Report-style pages (Strategy/Growth/Automation/Analytics/Visual) are long-form, sectioned pages with animated blocks and chart components (Recharts).

## Styling System
- Tailwind utility-first styling is primary (`src/index.css` + inline className usage).
- Global CSS in `src/index.css` also defines:
- split-screen behavior for Home
- report mobile adaptations (`.report-a4`, table overflow)
- utility keyframes (`fadeIn`, `slideUp`)
- Tailwind config (`tailwind.config.js`) extends:
- colors (`accent`, `darkBg`, `lightBg`)
- font family (`Space Grotesk`)
- custom radius (`rounded-custom`)
- PostCSS pipeline uses Tailwind + Autoprefixer (`postcss.config.js`).

## Key File Locations
- `package.json`: scripts and dependency manifest
- `vite.config.js`: Vite + React plugin config
- `eslint.config.js`: lint rules, ignores, React hooks/reload rules
- `src/App.jsx`: route map, lazy loading, redirect behavior, scroll restoration logic
- `src/pages/`: route-level screens
- `src/components/layout/`: shared layout primitives (header/footer/pager/transitions/logo)
- `src/hooks/`: language/translation hooks
- `src/i18n/`: routing helpers + locale dictionaries
- `src/utils/hardNavigation.js`: canonical navigation helper
- `public/`: static assets, including `cv-edit/` HTML-based CV viewer resources
- `docs/`: operational/deployment/process notes
- `Folio_Plan/`: internal planning/report reference material (not runtime app code)

## Coding Conventions
- **Language & formatting style**
- JS/JSX uses semicolon-terminated style in most source files.
- Prefer functional React components and hooks.
- Keep route-level content in `src/pages`, reusable UI in `src/components/layout`.

- **Navigation**
- Use `withLangPath(...)` for localized internal links.
- Prefer centralized `hardNavigate(...)` when behavior must match existing hard-navigation policy.
- Preserve legacy-to-localized redirect behavior in `App.jsx`.

- **i18n content**
- New user-facing strings should be keyed in both locale files (`vi.js` + `en.js`).
- Prefer `useT()` over hard-coded inline text when text is part of global UX.

- **Styling**
- Prefer Tailwind utility classes; add global CSS only for shared mechanics (layout behavior, animations, cross-page fixes).
- Reuse existing theme tokens (`accent`, `darkBg`, typography scales) for visual consistency.

- **Linting rules of note**
- Source lint target: `**/*.{js,jsx}`.
- Ignored by lint: `dist`, `Folio_Plan/**`, conversion scripts, `public/cv-edit/**`.
- `no-unused-vars` is strict, with ignore patterns:
- variables starting with uppercase or `_`
- args/errors starting with `_`

## Operational Notes
- This repo may include internal docs and backup folders; treat them as reference unless task explicitly targets them.
- Avoid committing build artifacts (`dist/`) or dependency directories (`node_modules/`).
- For release/deploy process details, refer to `docs/github-release-and-ci-guide.md` and `docs/file-structure-baseline.md`.

## Quick Start (Recommended Flow)
```bash
npm install
npm run lint
npm run build
npm run dev
```
