import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import PageTransition from '../components/layout/PageTransition';
import SiteFooter from '../components/layout/SiteFooter';
import { hardNavigate } from '../utils/hardNavigation';
import useT from '../hooks/useT';

const projectKeys = ['prix', 'alpha', 'beta', 'gamma', 'delta'];

const RDLibrary = () => {
  const t = useT();

  const projects = projectKeys.map((key, index) => ({
    key,
    number: `0${index + 1}`,
    title: t(`rd.blocks.${key}.title`),
    desc: t(`rd.blocks.${key}.desc`),
    link: key === 'prix' ? '/rd/prix' : '/coming-soon',
    state: key === 'prix' ? t('rd.library.published') : t('rd.library.researching'),
  }));

  return (
    <>
      <Header />
      <PageTransition>
        <main className="relative min-h-screen overflow-hidden bg-black pt-28 text-white">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20 blur-[1px]"
              style={{ backgroundImage: 'url(/images/rd/research-lab.svg)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/88 to-black" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-25" />
          </div>

          <section className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="max-w-3xl"
            >
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.42em] text-accent">{t('rd.library.kicker')}</p>
              <h1 className="text-4xl font-bold uppercase leading-none tracking-tight md:text-6xl">
                {t('rd.library.title')}
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/62 md:text-base">
                {t('rd.library.desc')}
              </p>
            </motion.div>

            <div className="mt-12 grid gap-3 md:grid-cols-2">
              {projects.map((project, index) => {
                const isPublished = project.key === 'prix';

                return (
                  <motion.button
                    key={project.key}
                    type="button"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.06 * index }}
                    onClick={() => hardNavigate(project.link)}
                    className="group relative min-h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition-colors hover:border-accent/45"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-0 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-25"
                      style={{ backgroundImage: 'url(/images/rd/research-lab.svg)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/55 to-black/88" />
                    <div className="relative z-10 flex min-h-[212px] flex-col justify-between">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent">{project.number}</span>
                        <span className={`rounded-full border px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] ${
                          isPublished
                            ? 'border-accent/45 bg-accent/10 text-accent'
                            : 'border-white/15 bg-white/[0.04] text-white/45'
                        }`}
                        >
                          {project.state}
                        </span>
                      </div>
                      <div>
                        <h2 className="mb-3 text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">{project.title}</h2>
                        <p className="max-w-md text-sm leading-relaxed text-white/62">{project.desc}</p>
                        <span className="mt-6 inline-flex text-xs font-bold uppercase tracking-[0.16em] text-white">
                          {isPublished ? t('rd.viewDetail') : t('rd.comingSoon')} <span className="ml-2" aria-hidden="true">-&gt;</span>
                        </span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </section>
        </main>
        <SiteFooter />
      </PageTransition>
    </>
  );
};

export default RDLibrary;
