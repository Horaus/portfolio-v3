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
    bgClass: 'bg-gradient-to-br from-[#112031] to-[#0A111A]',
    accentColor: '#8EC9DB',
    status: 'published',
  },
  {
    id: 2,
    key: 'alpha',
    link: '/coming-soon',
    bgClass: 'bg-gradient-to-br from-[#181818] via-[#111827] to-[#0D0D0D]',
    accentColor: '#9CA3AF',
    status: 'research',
  },
  {
    id: 3,
    key: 'beta',
    link: '/coming-soon',
    bgClass: 'bg-gradient-to-br from-[#1A1A1A] via-[#121212] to-[#0D0D0D]',
    accentColor: '#9CA3AF',
    status: 'prototype',
  },
  {
    id: 4,
    key: 'gamma',
    link: '/coming-soon',
    bgClass: 'bg-gradient-to-br from-[#171717] via-[#101820] to-[#0D0D0D]',
    accentColor: '#9CA3AF',
    status: 'research',
  },
  {
    id: 5,
    key: 'delta',
    link: '/coming-soon',
    bgClass: 'bg-gradient-to-br from-[#1A1A1A] via-[#111111] to-[#050505]',
    accentColor: '#9CA3AF',
    status: 'backlog',
  },
];

const StatusPill = ({ children, tone = 'muted' }) => (
  <span
    className={`inline-flex min-h-[28px] items-center rounded-full border px-3 text-[9px] font-black uppercase tracking-[0.22em] ${
      tone === 'published'
        ? 'border-[#8EC9DB]/50 bg-[#8EC9DB]/10 text-[#8EC9DB]'
        : 'border-white/15 bg-white/[0.04] text-gray-400'
    }`}
  >
    {children}
  </span>
);

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
        statusLabel: t(`rd.status.${block.status}`),
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
        <main className="relative min-h-[100dvh] w-full overflow-hidden bg-[#080A0D] pt-24 pb-6 font-['Space_Grotesk'] md:h-screen md:pt-0 md:pb-0">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
            <div className="absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_20%_20%,rgba(142,201,219,0.18),transparent_36%)]" />
          </div>

          <div className="relative z-20 mx-auto mb-5 flex w-full max-w-7xl flex-col gap-4 px-5 md:absolute md:left-8 md:top-28 md:mx-0 md:mb-0 md:max-w-[420px] md:px-0 lg:left-12">
            <StatusPill tone="published">{t('rd.kicker')}</StatusPill>
            <div>
              <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-5xl lg:text-6xl">
                {t('rd.titleLine1')} <br />
                <span className="text-[#8EC9DB] italic leading-[1.1]">{t('rd.titleLine2')}</span>
              </h1>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400 font-['Inter']">
                {t('rd.desc')}
              </p>
            </div>
          </div>

          {isDesktop ? (
            <div className="relative z-10 flex h-full w-full flex-row gap-2 p-4 pt-36">
              {blocks.map((block, index) => {
                const isActive = hoveredIndex === index;
                const isComingSoon = block.link === '/coming-soon';

                return (
                  <motion.div
                    key={block.id}
                    className={`relative flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border ${isActive ? 'border-white/15' : 'border-white/5'}`}
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
                          <div className="mb-4 flex flex-wrap items-center gap-3">
                            <span className="text-[10px] font-black tracking-[0.32em] uppercase" style={{ color: block.accentColor }}>
                              PROJECT 0{block.id}
                            </span>
                            <StatusPill tone={block.status === 'published' ? 'published' : 'muted'}>{block.statusLabel}</StatusPill>
                          </div>
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
                              {isComingSoon ? t('rd.comingSoon') : t('rd.viewDetail')}
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
            <div className="relative z-10 w-full p-3 space-y-3">
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
                      <div className="mb-3">
                        <StatusPill tone={block.status === 'published' ? 'published' : 'muted'}>{block.statusLabel}</StatusPill>
                      </div>
                      <h3 className="text-3xl font-black tracking-tight uppercase text-white mb-2 leading-none">{block.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 font-['Inter']">{block.desc}</p>
                      
                      {!isComingSoon && (
                        <span className="inline-flex min-h-[32px] items-center text-white text-xs font-bold uppercase tracking-[0.14em]">
                          {t('rd.viewDetail')} <span className="ml-2" aria-hidden="true">→</span>
                        </span>
                      )}
                      {isComingSoon && (
                        <span className="inline-flex min-h-[32px] items-center text-gray-500 text-xs font-bold uppercase tracking-[0.14em]">
                          {t('rd.comingSoon')}
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
