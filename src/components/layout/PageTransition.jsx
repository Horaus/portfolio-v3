import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ x: '100%', opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="w-full min-h-screen bg-darkBg text-white pb-0"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
