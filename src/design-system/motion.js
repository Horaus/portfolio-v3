/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  PDL STUDIO — FRAMER MOTION PRESETS                         ║
 * ║  Các animation variants chuẩn dùng chung cho toàn bộ app.   ║
 * ║  Import variant cần dùng, truyền vào <motion.div>.          ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * Usage:
 *   import { fadeInUp, staggerContainer } from '@/design-system/motion';
 *   <motion.div variants={fadeInUp} initial="hidden" animate="visible">
 */

// ─────────────────────────────────────────────
// 1. BASIC TRANSITIONS
// ─────────────────────────────────────────────

/** Fade in từ opacity 0 → 1 */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

/** Fade in + trượt lên (dùng nhiều nhất trong report sections) */
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/** Fade in + trượt từ trái */
export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/** Fade in + trượt từ phải */
export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/** Scale in từ nhỏ → lớn */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

// ─────────────────────────────────────────────
// 2. STAGGER CONTAINERS
// ─────────────────────────────────────────────

/** Container stagger — con animate lần lượt */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/** Stagger chậm hơn (cho report sections lớn) */
export const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/** Item con trong stagger — dùng kèm staggerContainer */
export const staggerItem = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

// ─────────────────────────────────────────────
// 3. PAGE TRANSITIONS
// ─────────────────────────────────────────────

/** Page slide transition (matching PageTransition.jsx) */
export const pageSlide = {
  initial: { x: '100%', opacity: 1 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 1 },
  transition: { type: 'spring', stiffness: 200, damping: 20 },
};

/** Page fade transition (simpler, dùng cho lazy-loaded pages) */
export const pageFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

// ─────────────────────────────────────────────
// 4. REPORT / A4 PAGE ANIMATIONS
// ─────────────────────────────────────────────

/** A4 page reveal khi scroll vào viewport */
export const reportPageReveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, margin: '-50px' },
};

/** Report section block reveal */
export const reportBlockReveal = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: '-30px' },
};

// ─────────────────────────────────────────────
// 5. INTERACTIVE ELEMENTS
// ─────────────────────────────────────────────

/** Hover scale nhẹ (cho cards, buttons) */
export const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 400, damping: 25 },
};

/** Mobile menu slide-in (matching Header.jsx) */
export const mobileMenuSlide = {
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
  transition: { type: 'spring', damping: 28, stiffness: 280 },
};

/** Backdrop fade */
export const backdropFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

/** Accordion expand/collapse */
export const accordionExpand = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.25 },
};

// ─────────────────────────────────────────────
// 6. HERO SECTION PRESETS
// ─────────────────────────────────────────────

/** Hero heading entrance */
export const heroHeading = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

/** Hero description entrance (chậm hơn heading) */
export const heroDescription = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.2 },
  viewport: { once: true },
};
