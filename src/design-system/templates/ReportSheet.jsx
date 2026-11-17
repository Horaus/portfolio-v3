import { motion, useReducedMotion } from 'framer-motion';
import { reportPageReveal } from '../motion';
import { fontFamily } from '../tokens';
import { reportSheet } from '../layout';

// Preserve each report's established density while sharing page mechanics.
export default function ReportSheet({ children, variant = 'standard' }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      {...(reducedMotion ? {} : reportPageReveal)}
      className={reportSheet[variant]}
      style={{ fontFamily: fontFamily.report }}
    >
      {children}
    </motion.div>
  );
}
