/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  PDL STUDIO — DESIGN TOKENS                                 ║
 * ║  Single source of truth cho mọi giá trị visual.             ║
 * ║  Sync với tailwind.config.js — thay đổi ở đây là thay đổi   ║
 * ║  toàn bộ hệ thống.                                          ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

// ─────────────────────────────────────────────
// 1. COLOR PALETTE
// ─────────────────────────────────────────────
export const colors = {
  // Brand
  accent: '#007bff',
  accentHover: '#0056b3',
  accentLight: 'rgba(0, 123, 255, 0.15)',
  accentMuted: 'rgba(0, 123, 255, 0.4)',

  // Dark theme (primary)
  darkBg: '#0a0a0a',
  darkSurface: '#111111',
  darkElevated: '#1a1a1a',
  darkBorder: 'rgba(255, 255, 255, 0.1)',
  darkBorderStrong: 'rgba(255, 255, 255, 0.2)',

  // Light theme (reports/A4)
  lightBg: '#ffffff',
  lightSurface: '#f8f9fa',
  lightElevated: '#ffffff',
  lightBorder: 'rgba(0, 0, 0, 0.1)',
  lightBorderStrong: 'rgba(0, 0, 0, 0.2)',

  // Text — dark theme
  textPrimary: '#ffffff',
  textSecondary: '#9ca3af',    // gray-400
  textMuted: '#6b7280',        // gray-500
  textDisabled: '#4b5563',     // gray-600

  // Text — light theme (reports)
  textPrimaryLight: '#000000',
  textSecondaryLight: '#4b5563',
  textMutedLight: '#9ca3af',

  // Neutral scale (for charts, tables, data viz)
  neutral: {
    900: '#000000',
    700: '#4B5563',
    400: '#9CA3AF',
    200: '#D1D5DB',
    100: '#E5E7EB',
    50:  '#F9FAFB',
  },

  // Semantic
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',

  // Selection
  selection: '#007bff',
  selectionText: '#ffffff',
};

// Chart colors (matching existing usage)
export const chartColors = ['#000000', '#4B5563', '#9CA3AF', '#D1D5DB'];

// ─────────────────────────────────────────────
// 2. TYPOGRAPHY
// ─────────────────────────────────────────────
export const fontFamily = {
  primary: "'Space Grotesk', sans-serif",
  report: "'Inter', sans-serif",
};

export const fontSize = {
  // Headings
  'display-xl': '6rem',     // 96px — hero splash
  'display-lg': '4rem',     // 64px — page hero
  'display-md': '2.75rem',  // 44px — section hero
  'h1': '2.25rem',          // 36px
  'h2': '1.25rem',          // 20px
  'h3': '0.875rem',         // 14px
  'h4': '0.75rem',          // 12px

  // Body
  'body-lg': '0.9375rem',   // 15px
  'body': '0.875rem',       // 14px
  'body-sm': '0.8125rem',   // 13px

  // Meta / labels
  'caption': '0.6875rem',   // 11px
  'label': '0.625rem',      // 10px
  'micro': '0.5625rem',     // 9px
  'nano': '0.5rem',         // 8px
};

export const fontWeight = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900,
};

export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.05em',
  wider: '0.1em',
  widest: '0.2em',
  ultra: '0.3em',
  extreme: '0.4em',
  mega: '0.5em',
};

export const lineHeight = {
  none: 1,
  tight: 1.15,
  snug: 1.35,
  normal: 1.5,
  relaxed: 1.7,
  loose: 2,
};

// ─────────────────────────────────────────────
// 3. SPACING (4px base unit)
// ─────────────────────────────────────────────
export const spacing = {
  0: '0',
  0.5: '2px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
};

// ─────────────────────────────────────────────
// 4. BORDER RADIUS
// ─────────────────────────────────────────────
export const borderRadius = {
  none: '0',
  sm: '4px',
  default: '8px',      // rounded-custom
  md: '10px',
  lg: '12px',
  xl: '16px',
  '2xl': '20px',
  full: '9999px',
};

// ─────────────────────────────────────────────
// 5. SHADOWS
// ─────────────────────────────────────────────
export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  default: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
};

// ─────────────────────────────────────────────
// 6. BREAKPOINTS
// ─────────────────────────────────────────────
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// ─────────────────────────────────────────────
// 7. Z-INDEX SCALE
// ─────────────────────────────────────────────
export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  headerBackdrop: 40,
  header: 50,
  mobileMenu: 70,
  modal: 80,
  popover: 90,
  tooltip: 100,
};

// ─────────────────────────────────────────────
// 8. TRANSITIONS
// ─────────────────────────────────────────────
export const duration = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slower: '700ms',
  page: '800ms',
};

export const easing = {
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.4, 0, 0.2, 1)',
  panel: 'cubic-bezier(0.4, 0, 0.2, 1)',  // split-panel hover
};

// ─────────────────────────────────────────────
// 9. REPORT / A4 PAGE CONSTANTS
// ─────────────────────────────────────────────
export const report = {
  maxWidth: '210mm',
  minHeight: '297mm',
  paddingX: '100px',
  paddingY: '64px',
  paddingXMobile: '10px',
  paddingYMobile: '14px',
  headerFont: fontFamily.primary,
  bodyFont: fontFamily.report,
  bodyFontSize: '13px',
  bodyLineHeight: 1.7,
  footerFontSize: '9px',
};
