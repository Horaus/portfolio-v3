import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/layout/Header';
import PageTransition from '../components/layout/PageTransition';
import { hardNavigate } from '../utils/hardNavigation';
import useT from '../hooks/useT';

const baseBlocks = [
  {
    id: 1,
    key: 'prix',
    link: '/rd/prix',
    // Using a deep azure/tech gradient for the Prix block
    bgClass: 'bg-gradient-to-br from-[#112031] to-[#0A111A]',
    accentColor: '#8EC9DB',
  },
  {
    id: 2,
    key: 'alpha',
    link: '/coming-soon',
    bgClass: 'bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]',
    accentColor: '#4b5563',
  },
  {
    id: 3,
    key: 'beta',
    link: '/coming-soon',
    bgClass: 'bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]',
    accentColor: '#4b5563',
  },
  {
    id: 4,
    key: 'gamma',
    link: '/coming-soon',
    bgClass: 'bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]',
    accentColor: '#4b5563',
  },
  {
    id: 5,
    key: 'delta',
    link: '/coming-soon',
    bgClass: 'bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]',
    accentColor: '#4b5563',
  },
];

const RDIndex = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth > 768;
  });
  const t = useT();

  const blocks = useMemo(
    () =>
      baseBlocks.map((block) => ({
        ...block,
        title: t(`rd.blocks.${block.key}.title`),
        desc: t(`rd.blocks.${block.key}.desc`),
      })),
    [t]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 769px)');
    const syncViewport = (event) => {
      setIsDesktop(event.matches);
    };

    mediaQuery.addEventListener('change', syncViewport);

    return () => mediaQuery.removeEventListener('change', syncViewport);
  }, []);

  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen md:h-screen w-full bg-[#0a0a0a] flex flex-col md:flex-row overflow-visible md:overflow-hidden pt-24 md:pt-0 pb-6 md:pb-0 font-['Space_Grotesk']">
          <div className="absolute top-32 left-8 md:left-12 z-20 pointer-events-none hidden md:block">
            <h1 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase text-white mix-blend-difference">
              {t('rd.titleLine1')} <br />
              <span className="text-[#8EC9DB] italic">{t('rd.titleLine2')}</span>
            </h1>
          </div>

          {isDesktop ? (
            <div className="flex flex-col md:flex-row w-full h-full mt-2 md:mt-0 p-3 md:p-4 gap-2">
              {blocks.map((block, index) => {
                const isActive = hoveredIndex === index;
                const isComingSoon = block.link === '/coming-soon';

                return (
                  <motion.div
                    key={block.id}
                    className={`relative flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border ${isActive ? 'border-white/10' : 'border-white/5'}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onClick={() => hardNavigate(block.link)}
                    animate={{
                      flex: isActive ? 4 : 1,
                      height: 'auto',
                    }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <div className="absolute inset-0 pointer-events-none">
                      <div
                        className={`absolute inset-0 transition-all duration-500 ${block.bgClass}`}
                        style={{
                          opacity: isActive ? 1 : 0.6,
                        }}
                      />
                      {/* Technical grid overlay */}
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CgkJPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz4KCQk8L3N2Zz4=')] opacity-30 mix-blend-overlay" />
                    </div>

                    <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none" animate={{ opacity: isActive ? 0 : 1 }} transition={{ duration: 0.3 }}>
                      <span className="md:-rotate-90 text-xl md:text-2xl font-black text-white/20 tracking-[0.2em] uppercase whitespace-nowrap">
                        {block.title}
                      </span>
                    </motion.div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end z-10"
                        >
                          <span className="text-[10px] font-black tracking-[0.4em] mb-4 uppercase" style={{ color: block.accentColor }}>
                            PROJECT 0{block.id} {isComingSoon && '— IN RESEARCH'}
                          </span>
                          <h3 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase text-white mb-4 md:mb-6 leading-none">
                            {block.title}
                          </h3>
                          <p className="text-gray-400 max-w-sm text-sm mb-5 md:mb-8 leading-relaxed font-['Inter']">
                            {block.desc}
                          </p>

                          <div className="flex gap-4 items-center">
                            <button
                              className="px-6 py-2.5 font-bold uppercase tracking-[0.15em] text-xs rounded transition-colors min-h-[44px]"
                              style={{
                                backgroundColor: isComingSoon ? 'transparent' : 'white',
                                color: isComingSoon ? 'white' : 'black',
                                border: isComingSoon ? '1px solid rgba(255,255,255,0.2)' : 'none'
                              }}
                            >
                              {isComingSoon ? 'Coming Soon' : t('rd.viewDetail')}
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="w-full mt-2 p-3 space-y-3">
              {blocks.map((block) => {
                const isComingSoon = block.link === '/coming-soon';
                return (
                  <button
                    key={block.id}
                    type="button"
                    onClick={() => hardNavigate(block.link)}
                    className="relative w-full min-h-[220px] rounded-2xl overflow-hidden border border-white/10 text-left"
                  >
                    <div
                      className={`absolute inset-0 ${block.bgClass}`}
                    />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CgkJPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz4KCQk8L3N2Zz4=')] opacity-20" />
                    
                    <div className="relative z-10 p-5 flex flex-col justify-end min-h-[220px]">
                      <span className="text-[10px] font-black tracking-[0.28em] uppercase mb-3" style={{ color: block.accentColor }}>
                        PROJECT 0{block.id}
                      </span>
                      <h3 className="text-3xl font-black tracking-tight uppercase text-white mb-2">{block.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 font-['Inter']">{block.desc}</p>
                      
                      {!isComingSoon && (
                        <span className="inline-flex items-center text-white text-xs font-bold uppercase tracking-[0.14em]">
                          {t('rd.viewDetail')} <span className="ml-2">→</span>
                        </span>
                      )}
                      {isComingSoon && (
                        <span className="inline-flex items-center text-gray-500 text-xs font-bold uppercase tracking-[0.14em]">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </main>
      </PageTransition>
    </>
  );
};

export default RDIndex;
