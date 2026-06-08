/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  PDL STUDIO — LAYOUT PRESETS                                ║
 * ║  Tailwind class strings cho layout patterns lặp lại.        ║
 * ║  Import và dùng trực tiếp trong className.                  ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * Usage:
 *   import { container, card } from '@/design-system/layout';
 *   <section className={container.reportSection}>...</section>
 */

// ─────────────────────────────────────────────
// 1. CONTAINERS
// ─────────────────────────────────────────────
export const container = {
  /** Standard content section (dark bg) */
  section: 'px-6 md:px-12 max-w-6xl mx-auto',

  /** Report showcase wrapper (light bg) */
  reportSection: 'bg-[#f8f9fa] pt-20 pb-24 px-4 overflow-hidden shadow-inner',

  /** A4 page wrapper */
  a4Page: 'report-a4 bg-white text-black shadow-2xl w-full max-w-[210mm] min-h-[297mm] mx-auto mb-2 py-12 px-[70px] md:py-16 md:px-[100px] relative flex flex-col rounded-sm border border-gray-200',

  /** Full-screen page wrapper */
  fullPage: 'bg-darkBg min-h-screen pt-24 pb-0 overflow-x-hidden',

  /** Report pages stack */
  reportStack: 'flex flex-col gap-3',

  /** Grid 2-column */
  grid2: 'grid grid-cols-1 md:grid-cols-2 gap-6',

  /** Grid 3-column */
  grid3: 'grid grid-cols-1 md:grid-cols-3 gap-6',

  /** Grid 5-column asymmetric (3+2) */
  grid5Asymmetric: 'grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start',
};

// ─────────────────────────────────────────────
// 2. CARDS
// ─────────────────────────────────────────────
export const card = {
  /** Glass card (dark theme) */
  glass: 'bg-white/5 p-8 rounded-2xl border border-white/10 relative group hover:border-accent/40 transition-all shadow-2xl',

  /** Dark inset card */
  dark: 'bg-black/40 p-5 rounded-xl border border-white/5',

  /** Dark feature card (with hover) */
  darkHover: 'bg-black/40 p-5 rounded-xl border border-white/5 group-hover:bg-black/60 transition-colors',

  /** Light card (report) */
  light: 'p-6 border border-gray-200 bg-gray-50 rounded-lg relative',

  /** Light card emphasized */
  lightStrong: 'p-6 border border-black bg-white rounded-lg relative shadow-xl',

  /** Dark call-out block */
  callout: 'p-8 bg-[#111] text-white rounded-2xl relative overflow-hidden group',

  /** Dashed border card */
  dashed: 'p-8 border-2 border-dashed border-gray-300',

  /** Info card with left border */
  infoBorder: 'p-5 bg-[#f8f9fa] border-l-4 border-black',

  /** Stat card (dark) */
  stat: 'text-center p-6 bg-black text-white rounded-lg',

  /** Chart wrapper */
  chart: 'border border-gray-100 p-8 bg-[#ffffff] rounded-xl shadow-lg',
};

// ─────────────────────────────────────────────
// 3. REPORT A4 PAGE HEADER/FOOTER
// ─────────────────────────────────────────────
export const reportPage = {
  /** A4 page header bar */
  header: 'flex justify-between items-start border-b border-black pb-5 mb-10',

  /** A4 page header left — brand block */
  headerBrand: 'flex items-center gap-3',

  /** A4 page header brand icon */
  headerIcon: 'w-8 h-8 bg-black text-white flex items-center justify-center font-black text-lg',

  /** A4 page content area */
  content: 'flex-grow text-[13px] leading-[1.7] text-gray-900',

  /** A4 page footer bar */
  footer: 'mt-10 pt-5 border-t border-black/10 flex justify-between items-center text-[9px] font-black text-gray-400 uppercase tracking-[0.3em]',
};

// ─────────────────────────────────────────────
// 4. LIST ITEMS
// ─────────────────────────────────────────────
export const listItem = {
  /** Bullet point with accent dot */
  accentDot: 'flex gap-5 group',

  /** The dot itself */
  dot: 'mt-2 w-2 h-2 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform',

  /** Numbered circle (01, 02, 03) */
  numberedCircle: 'w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-black text-xl group-hover:scale-110 transition-transform',

  /** Submenu branch link */
  submenuLink: 'block py-2 text-xs font-bold uppercase tracking-[0.14em] text-black/75 hover:text-accent',
};

// ─────────────────────────────────────────────
// 5. APP SHELL
// ─────────────────────────────────────────────
export const shell = {
  /** App root container */
  appContainer: 'app-container selection:bg-accent selection:text-white',

  /** Header (scrolled state: dark text on white) */
  headerScrolled: 'fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center backdrop-blur-md transition-all duration-300 bg-white/80 border-black/5 border-b',

  /** Header (default state: light text on dark) */
  headerDefault: 'fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center backdrop-blur-md transition-all duration-300 bg-black/20 border-white/5 border-b',

  /** Mobile menu drawer */
  mobileDrawer: 'absolute right-0 top-0 h-full w-[86%] max-w-[360px] bg-white text-black shadow-2xl border-l border-black/10 p-5 flex flex-col',

  /** Footer */
  footer: 'border-t border-white/45 bg-[#050505] text-white mt-16',

  /** Footer grid */
  footerGrid: 'grid grid-cols-1 md:grid-cols-[1.35fr_1fr_1fr] gap-10 md:gap-14 items-end',
};

// ─────────────────────────────────────────────
// 6. SPLIT PANEL (HOME PAGE)
// ─────────────────────────────────────────────
export const splitPanel = {
  /** Panel container */
  container: 'flex panel-container bg-black',

  /** Dark panel (left — Marketing) */
  dark: 'split-panel h-full min-h-[52vh] md:min-h-0 bg-darkBg border-r border-white/10 flex items-center justify-center cursor-pointer group',

  /** Light panel (right — R&D) */
  light: 'split-panel h-full min-h-[48vh] md:min-h-0 bg-white flex items-center justify-center cursor-pointer group',

  /** Panel content wrapper */
  content: 'relative z-10 text-center px-5 md:px-10 py-14 md:py-0',

  /** Background image */
  bgImage: 'absolute inset-0 transition-opacity duration-700',

  /** Hover reveal content */
  hoverReveal: 'max-w-sm md:max-w-md mx-auto opacity-100 md:opacity-0 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 delay-100 pointer-events-auto md:pointer-events-none md:group-hover:pointer-events-auto md:group-hover:opacity-100',

  /** Direction arrow */
  arrow: 'hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 transition-colors',
};
