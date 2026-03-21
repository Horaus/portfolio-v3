import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import PageTransition from '../components/layout/PageTransition';
import useT from '../hooks/useT';

const ComingSoon = () => {
  const t = useT();

  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen bg-[#050505] text-white px-6 md:px-12 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-[10px] md:text-xs uppercase tracking-[0.45em] text-accent mb-5"
            >
              R&D
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-4xl md:text-6xl font-black tracking-tight uppercase"
            >
              {t('comingSoon.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-6 text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mx-auto"
            >
              {t('comingSoon.desc')}
            </motion.p>
          </div>
        </main>
      </PageTransition>
    </>
  );
};

export default ComingSoon;
