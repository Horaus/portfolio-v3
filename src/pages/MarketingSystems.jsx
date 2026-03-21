import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/layout/Header';
import PageTransition from '../components/layout/PageTransition';
import { hardNavigate } from '../utils/hardNavigation';
import useT from '../hooks/useT';

const baseBlocks = [
  {
    id: 1,
    key: 'strategy',
    link: '/strategy-planning',
    image: '/images/systems/strategy.jpg',
  },
  {
    id: 2,
    key: 'visual',
    link: '/content-creation-design',
    image: '/images/systems/visual.jpg',
  },
  {
    id: 3,
    key: 'growth',
    link: '/organic-paid-growth',
    image: '/images/systems/growth.jpg',
  },
  {
    id: 4,
    key: 'automation',
    link: '/automation-crm',
    image: '/images/systems/automation.jpg',
  },
  {
    id: 5,
    key: 'analytics',
    link: '/analytics-conversion-retention',
    image: '/images/systems/analytics.jpg',
  },
];

const MarketingSystems = () => {
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
        title: t(`systems.blocks.${block.key}.title`),
        desc: t(`systems.blocks.${block.key}.desc`),
      })),
    [t]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 769px)');
    setIsDesktop(mediaQuery.matches);
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
        <main className="min-h-screen md:h-screen w-full bg-black flex flex-col md:flex-row overflow-visible md:overflow-hidden pt-24 md:pt-0 pb-6 md:pb-0">
          <div className="absolute top-32 left-8 md:left-12 z-20 pointer-events-none hidden md:block">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter uppercase text-white mix-blend-difference">
              {t('systems.titleLine1')} <br />
              <span className="text-accent">{t('systems.titleLine2')}</span>
            </h1>
          </div>

          {isDesktop ? (
            <div className="flex flex-col md:flex-row w-full h-full mt-2 md:mt-0 p-3 md:p-4 gap-2">
              {blocks.map((block, index) => {
                const isActive = hoveredIndex === index;

                return (
                  <motion.div
                    key={block.id}
                    className="relative flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/5"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onClick={() => hardNavigate(block.link)}
                    animate={{
                      flex: isActive ? 4 : 1,
                      height: 'auto',
                    }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    style={{ backgroundColor: isActive ? '#111' : '#050505' }}
                  >
                    <div className="absolute inset-0 pointer-events-none">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                        style={{
                          backgroundImage: `url(${block.image})`,
                          opacity: isActive ? 0.32 : 0,
                          transform: isActive ? 'scale(1.04)' : 'scale(1)',
                        }}
                      />
                      <div
                        className="absolute inset-x-0 top-0 h-40 bg-cover bg-center blur-2xl transition-opacity duration-500"
                        style={{
                          backgroundImage: `url(${block.image})`,
                          opacity: isActive ? 0.35 : 0,
                        }}
                      />
                      <div
                        className="absolute inset-x-0 bottom-0 h-40 bg-cover bg-center blur-2xl transition-opacity duration-500"
                        style={{
                          backgroundImage: `url(${block.image})`,
                          opacity: isActive ? 0.35 : 0,
                        }}
                      />
                      <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                      <div className={`absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                      <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                    </div>

                    <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none" animate={{ opacity: isActive ? 0 : 1 }} transition={{ duration: 0.3 }}>
                      <span className="md:-rotate-90 text-xl md:text-2xl font-bold text-white/30 tracking-[0.2em] uppercase whitespace-nowrap">
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
                          className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end"
                        >
                          <span className="text-accent text-[10px] font-bold tracking-[0.3em] mb-4 rounded-sm uppercase">0{block.id}</span>
                          <h3 className="text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-white mb-4 md:mb-6">{block.title}</h3>
                          <p className="text-gray-400 max-w-sm text-sm mb-5 md:mb-8 leading-relaxed">{block.desc}</p>

                          <div className="flex gap-4 items-center">
                            <button className="px-6 py-2.5 bg-white text-black font-bold uppercase tracking-[0.15em] text-xs rounded hover:bg-accent hover:text-white transition-colors min-h-[44px]">
                              {t('systems.viewDetail')}
                            </button>
                            <span className="text-gray-600 text-xs uppercase tracking-widest" />
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
              {blocks.map((block) => (
                <button
                  key={block.id}
                  type="button"
                  onClick={() => hardNavigate(block.link)}
                  className="relative w-full min-h-[220px] rounded-2xl overflow-hidden border border-white/10 text-left"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${block.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/85" />
                  <div className="relative z-10 p-5 flex flex-col justify-end min-h-[220px]">
                    <span className="text-accent text-[10px] font-bold tracking-[0.28em] uppercase mb-3">0{block.id}</span>
                    <h3 className="text-2xl font-bold tracking-tight uppercase text-white mb-2">{block.title}</h3>
                    <p className="text-gray-200/85 text-sm leading-relaxed mb-4">{block.desc}</p>
                    <span className="inline-flex items-center text-white text-xs font-bold uppercase tracking-[0.14em]">
                      {t('systems.viewDetail')} <span className="ml-2">→</span>
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </main>
      </PageTransition>
    </>
  );
};

export default MarketingSystems;
