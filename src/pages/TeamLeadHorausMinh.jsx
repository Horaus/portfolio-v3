import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import PageTransition from '../components/layout/PageTransition';
import SiteFooter from '../components/layout/SiteFooter';
import useT from '../hooks/useT';
import { useLang } from '../hooks/useLang';
import { withLangPath } from '../i18n/routing';

const TeamLeadHorausMinh = () => {
  const [imageError, setImageError] = useState(false);
  const t = useT();
  const { lang } = useLang();

  const profile = {
    name: 'Horaus Minh',
    role: t('lead.role'),
    title: t('lead.title'),
    shortBio: t('lead.shortBio'),
    email: 'horaus.minh@gmail.com',
    phone: '+84 886 268 015',
    instagram: 'https://www.instagram.com/pre.v.horaus/',
    portfolio: 'https://studio.pdl.io.vn/',
    photoSrc: '/cv-edit/assets/horaus-minh-lead.jpg',
    cvButtons: [
      { id: 'marketing', label: t('lead.cvButtons.marketing'), to: withLangPath(lang, '/team/horaus-minh/cv/marketing'), enabled: true },
      { id: 'brand', label: t('lead.cvButtons.brand'), to: '#', enabled: false },
      { id: 'strategy', label: t('lead.cvButtons.strategy'), to: '#', enabled: false },
      { id: 'operations', label: t('lead.cvButtons.operations'), to: '#', enabled: false },
    ],
  };

  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen bg-[#f6f6f4] text-black">
          <section className="bg-[#050505] text-white border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pb-12 md:pb-16">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 md:gap-10 items-center"
              >
                <div className="w-44 h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-white/15 bg-white/5">
                  {profile.photoSrc && !imageError ? (
                    <img
                      src={profile.photoSrc}
                      alt={profile.name}
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full grid place-items-center text-white/70 text-4xl font-bold">HM</div>
                  )}
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-4">{t('lead.heroTag')}</p>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[0.92]">{profile.name}</h1>
                  <p className="mt-3 text-sm md:text-base uppercase tracking-[0.18em] text-white/70">{profile.role} / {profile.title}</p>
                  <p className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-white/75">{profile.shortBio}</p>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="report-section" className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-10 lg:gap-16">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-black/50 mb-4">{t('lead.libraryTag')}</p>
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">{t('lead.libraryTitle')}</h2>
                <p className="mt-4 text-sm text-black/70 leading-relaxed">{t('lead.libraryDesc')}</p>
              </div>

              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {profile.cvButtons.map((button) =>
                    button.enabled ? (
                      <Link
                        key={button.id}
                        to={button.to}
                        className="px-4 py-3 rounded-custom border border-black/20 bg-black text-white text-xs font-bold uppercase tracking-[0.16em] text-center hover:bg-accent hover:border-accent transition-colors"
                      >
                        {button.label}
                      </Link>
                    ) : (
                      <div
                        key={button.id}
                        className="px-4 py-3 rounded-custom border border-black/10 bg-black/[0.03] text-black/45 text-xs font-bold uppercase tracking-[0.16em] text-center"
                        title={t('lead.comingSoon')}
                      >
                        {button.label}
                      </div>
                    )
                  )}
                </div>

                <div className="mt-8 border border-black/10 rounded-2xl p-6 bg-white/70">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-black/55 mb-3">{t('lead.contactTag')}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <a className="hover:text-accent" href={`mailto:${profile.email}`}>Email: {profile.email}</a>
                    <span>Phone: {profile.phone}</span>
                    <a className="hover:text-accent" href={profile.instagram} target="_blank" rel="noreferrer">Instagram</a>
                    <a className="hover:text-accent" href={profile.portfolio} target="_blank" rel="noreferrer">Portfolio</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <SiteFooter />
        </main>
      </PageTransition>
    </>
  );
};

export default TeamLeadHorausMinh;
