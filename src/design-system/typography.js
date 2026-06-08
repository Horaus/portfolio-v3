/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  PDL STUDIO — TYPOGRAPHY PRESETS                            ║
 * ║  Tailwind class strings chuẩn cho mọi text element.         ║
 * ║  Dùng bằng cách spread vào className.                       ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * Usage:
 *   import { heading, body, label } from '@/design-system/typography';
 *   <h1 className={heading.displayLg}>Title</h1>
 *   <p className={body.default}>Content</p>
 */

// ─────────────────────────────────────────────
// 1. HEADING STYLES (Dark theme — app pages)
// ─────────────────────────────────────────────
export const heading = {
  /** 96px — Hero splash text (Home panels) */
  displayXl: 'text-[44px] sm:text-6xl md:text-8xl font-bold tracking-tight md:tracking-tighter uppercase',

  /** 64px — Page hero title */
  displayLg: 'text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-tight text-white italic',

  /** 44px — Section hero / Report cover */
  displayMd: 'text-[44px] font-black uppercase tracking-tighter leading-none italic',

  /** Section title with accent bar */
  section: 'text-xl font-bold uppercase tracking-[0.3em] flex items-center gap-4 text-white',

  /** Sub-section title */
  subsection: 'text-base font-black uppercase',

  /** Small header (report cards, sidebar) */
  small: 'text-[12px] font-black uppercase tracking-[0.4em] flex items-center gap-3',
};

// ─────────────────────────────────────────────
// 2. BODY TEXT STYLES
// ─────────────────────────────────────────────
export const body = {
  /** Default body text (dark theme) */
  default: 'text-gray-400 text-sm leading-relaxed',

  /** Larger body text (footer, descriptions) */
  large: 'text-[13px] md:text-[15px] text-gray-400 leading-relaxed',

  /** Report body text (light theme, A4 pages) */
  report: 'text-[13px] leading-[1.7] text-gray-900',

  /** Report body smaller */
  reportSm: 'text-[11px] leading-relaxed',

  /** Quote / italic emphasis */
  quote: 'italic border-l-4 border-black pl-5 py-2 bg-gray-50',

  /** Justified text (used in report pages) */
  justified: 'text-justify',
};

// ─────────────────────────────────────────────
// 3. LABEL / META TEXT STYLES
// ─────────────────────────────────────────────
export const label = {
  /** Page tag (above hero titles) */
  tag: 'text-[10px] md:text-xs uppercase tracking-[0.5em] text-accent mb-4 block',

  /** Section pre-title */
  preTitle: 'text-gray-400 text-[9px] font-black tracking-[0.5em] uppercase mb-4 block',

  /** Accent label with dot */
  accentDot: 'text-[12px] font-black mb-6 text-accent uppercase tracking-[0.4em] flex items-center gap-3',

  /** Meta info (dates, IDs, status) */
  meta: 'text-[8px] text-gray-400 uppercase font-bold tracking-widest',

  /** Footer text */
  footer: 'text-[10px] uppercase tracking-[0.4em] text-gray-500',

  /** Footer section heading */
  footerHeading: 'text-[10px] font-black uppercase tracking-[0.45em] text-gray-500 mb-4',

  /** Nav link */
  navLink: 'text-sm font-medium tracking-widest uppercase',

  /** Badge / stamp */
  badge: 'text-[7px] sm:text-[8px] font-black border-2 border-black px-2 py-1 tracking-tighter',

  /** Mobile menu link */
  mobileLink: 'block w-full text-left text-base font-semibold uppercase tracking-[0.16em] text-black hover:text-accent transition-colors py-3',

  /** Tool/tech label (report cards) */
  tool: 'text-[9px] font-black text-white px-2 py-1 border border-white/20',

  /** Inline item label */
  itemLabel: 'text-[10px] font-black uppercase tracking-[0.2em] text-white',
};

// ─────────────────────────────────────────────
// 4. REPORT-SPECIFIC TYPOGRAPHY
// ─────────────────────────────────────────────
export const report = {
  /** A4 page header brand name */
  headerBrand: 'text-[11px] sm:text-[13px] font-black uppercase tracking-[0.2em] text-black',

  /** A4 page section title */
  sectionTitle: 'text-xl font-black uppercase',

  /** A4 page footer */
  pageFooter: 'text-[9px] font-black text-gray-400 uppercase tracking-[0.3em]',

  /** Chart caption */
  chartCaption: 'text-[8px] text-center text-gray-400 mt-4 uppercase font-black tracking-[0.3em]',

  /** Table header */
  tableHeader: 'bg-black text-white uppercase tracking-widest font-black',

  /** Stat large number */
  statNumber: 'text-2xl font-black',

  /** Stat label */
  statLabel: 'text-[8px] uppercase font-bold opacity-60 block mb-2',

  /** Big stat (40px numbers) */
  bigStat: 'text-[40px] font-black leading-none mb-2',

  /** Big stat caption */
  bigStatCaption: 'text-[9px] uppercase font-bold text-gray-400',
};

// ─────────────────────────────────────────────
// 5. BUTTON STYLES
// ─────────────────────────────────────────────
export const button = {
  /** Primary CTA (accent bg) */
  primary: 'px-7 py-3 md:px-8 md:py-3 bg-accent text-white rounded-custom font-bold hover:bg-blue-600 transition-colors uppercase text-xs md:text-sm tracking-[0.14em] md:tracking-widest translate-z-0 min-h-[44px]',

  /** Outline CTA (dark border) */
  outline: 'px-7 py-3 md:px-8 md:py-3 border-2 border-black text-black rounded-custom font-bold hover:bg-black hover:text-white transition-all uppercase text-xs md:text-sm tracking-[0.14em] md:tracking-widest translate-z-0 min-h-[44px]',

  /** Language toggle (active) */
  langActive: 'px-3 py-2 rounded-full text-xs font-bold uppercase tracking-[0.16em] border min-h-[42px] bg-black text-white border-black',

  /** Language toggle (inactive) */
  langInactive: 'px-3 py-2 rounded-full text-xs font-bold uppercase tracking-[0.16em] border min-h-[42px] border-black/20 text-black',

  /** Header round button */
  headerRound: 'w-10 h-10 rounded-full border flex items-center justify-center transition-colors',

  /** Scroll to top floating button base */
  floating: 'fixed bottom-6 right-6 z-30 w-12 h-12 rounded-full flex items-center justify-center transition-all',
};
