import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import PageTransition from '../components/layout/PageTransition';
import SiteFooter from '../components/layout/SiteFooter';
import useT from '../hooks/useT';
import { useLang } from '../hooks/useLang';
import { withLangPath } from '../i18n/routing';

const Team = () => {
  const [leadImageError, setLeadImageError] = useState(false);
  const t = useT();
  const { lang } = useLang();

  const leadName = 'Horaus Minh';
  const leadRole = `${t('team.leadRole')} / ${t('team.leadTitle')}`;

  const members = [
    {
      id: 'horaus-minh',
      name: leadName,
      role: leadRole,
      summary: t('team.leadSummary'),
      isLead: true,
      profileTo: withLangPath(lang, '/team/horaus-minh'),
      cvTo: withLangPath(lang, '/team/horaus-minh/cv/marketing'),
    },
    {
      id: 'member-02',
      name: 'Team Member 02',
      role: 'Brand & Narrative Lead',
      summary: t('team.member2Summary'),
    },
    {
      id: 'member-03',
      name: 'Team Member 03',
      role: 'Performance & Media Lead',
      summary: t('team.member3Summary'),
    },
    {
      id: 'member-04',
      name: 'Team Member 04',
      role: 'Automation & CRM Lead',
      summary: t('team.member4Summary'),
    },
  ];

  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen bg-[#f6f6f4] text-black">
          <section className="bg-[#050505] text-white border-b border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pb-12 md:pb-16"
            >
              <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/60 mb-5">{t('team.heroTag')}</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[0.92] text-white">
                {t('team.heroTitle')}
              </h1>
              <p className="mt-6 max-w-3xl text-white/75 leading-relaxed text-sm md:text-base">{t('team.heroDesc')}</p>
            </motion.div>
          </section>

          <section id="report-section" className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14">
            <div className="mb-10 md:mb-12 bg-white border border-black/10 rounded-2xl p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.4em] text-black/50 mb-4">{t('team.inviteTag')}</p>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-5">{t('team.inviteTitle')}</h2>
              <div className="space-y-4 text-sm md:text-base text-black/75 leading-relaxed">
                <p>{t('team.inviteP1')}</p>
                <p>{t('team.inviteP2')}</p>
                <p className="font-medium text-black">{t('team.inviteContact')}</p>
              </div>
            </div>

            <div className="mb-8 md:mb-10">
              <p className="text-[10px] uppercase tracking-[0.4em] text-black/50 mb-4">{t('team.coreTag')}</p>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">{t('team.coreTitle')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {members.map((member, index) => (
                <motion.article
                  key={member.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="bg-white border border-black/10 rounded-2xl overflow-hidden"
                >
                  <div className="p-5 md:p-6 border-b border-black/10 flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border border-black/10 bg-black/5 grid place-items-center">
                      {member.isLead && !leadImageError ? (
                        <img
                          src="/cv-edit/assets/horaus-minh-lead.jpg"
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={() => setLeadImageError(true)}
                        />
                      ) : (
                        <span className="text-xs font-bold text-black/50">{member.isLead ? 'HM' : `0${index + 1}`}</span>
                      )}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold tracking-tight">{member.name}</h3>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-black/55">{member.role}</p>
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <p className="text-sm text-black/75 leading-relaxed">{member.summary}</p>

                    {member.isLead && (
                      <div className="mt-6 pt-4 border-t border-black/10">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-black/45 mb-3">{t('team.profile')}</p>
                        <div className="flex flex-wrap gap-2">
                          <Link
                            to={member.profileTo}
                            className="px-4 py-2 rounded-custom border border-black/15 text-xs font-bold uppercase tracking-[0.14em] hover:border-accent hover:text-accent transition-colors"
                          >
                            {t('team.leadRole')}
                          </Link>
                          <Link
                            to={member.cvTo}
                            className="px-4 py-2 rounded-custom border border-black bg-black text-white text-xs font-bold uppercase tracking-[0.14em] hover:bg-accent hover:border-accent transition-colors"
                          >
                            {t('lead.cvButtons.marketing')}
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <SiteFooter />
        </main>
      </PageTransition>
    </>
  );
};

export default Team;
