import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import PageTransition from '../components/layout/PageTransition';
import { hardNavigate } from '../utils/hardNavigation';
import useT from '../hooks/useT';

const Home = () => {
  const t = useT();

  return (
    <>
      <Header />
      <PageTransition>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full min-h-screen">
          <main className="flex panel-container bg-black">
            <section
              className="split-panel h-full min-h-[52vh] md:min-h-0 bg-darkBg border-r border-white/10 flex items-center justify-center cursor-pointer group"
              onClick={() => hardNavigate('/marketing-systems')}
            >
              <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                <img
                  alt="Marketing Abstract"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="/images/home/marketing-bg.png"
                />
              </div>

              <div className="relative z-10 text-center px-5 md:px-10 py-14 md:py-0">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-accent mb-4 block">{t('home.strategyTag')}</span>
                <h2 className="text-[44px] sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight md:tracking-tighter uppercase whitespace-nowrap">Marketing</h2>

                <div className="max-w-sm md:max-w-md mx-auto opacity-100 md:opacity-0 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 delay-100 pointer-events-auto md:pointer-events-none md:group-hover:pointer-events-auto md:group-hover:opacity-100">
                  <p className="text-gray-400 mb-8 text-sm md:text-base">{t('home.marketingDesc')}</p>
                  <button className="px-7 py-3 md:px-8 md:py-3 bg-accent text-white rounded-custom font-bold hover:bg-blue-600 transition-colors uppercase text-xs md:text-sm tracking-[0.14em] md:tracking-widest translate-z-0 min-h-[44px]">
                    {t('systems.viewDetail')}
                  </button>
                </div>
              </div>

              <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 group-hover:text-accent transition-colors">
                <svg className="h-10 w-10 md:h-12 md:w-12 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </div>
            </section>

            <section className="split-panel h-full min-h-[48vh] md:min-h-0 bg-white flex items-center justify-center cursor-pointer group" onClick={() => hardNavigate('/coming-soon')}>
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                <img
                  alt="R&D Abstract"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="/images/home/rd-bg.png"
                />
              </div>

              <div className="relative z-10 text-center px-5 md:px-10 py-14 md:py-0 text-black">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-accent mb-4 block">{t('home.innovationTag')}</span>
                <h2 className="text-[44px] sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight md:tracking-tighter uppercase whitespace-nowrap">R&D</h2>

                <div className="max-w-sm md:max-w-md mx-auto opacity-100 md:opacity-0 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 delay-100 pointer-events-auto md:pointer-events-none md:group-hover:pointer-events-auto md:group-hover:opacity-100">
                  <p className="text-gray-600 mb-8 text-sm md:text-base">{t('home.rdDesc')}</p>
                  <button className="px-7 py-3 md:px-8 md:py-3 border-2 border-black text-black rounded-custom font-bold hover:bg-black hover:text-white transition-all uppercase text-xs md:text-sm tracking-[0.14em] md:tracking-widest translate-z-0 min-h-[44px]">
                    {t('home.rdCta')}
                  </button>
                </div>
              </div>

              <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 text-black/20 group-hover:text-accent transition-colors">
                <svg className="h-10 w-10 md:h-12 md:w-12 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                </svg>
              </div>
            </section>
          </main>
        </motion.div>
      </PageTransition>
    </>
  );
};

export default Home;
