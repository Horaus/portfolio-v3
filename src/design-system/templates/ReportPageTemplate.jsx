import React from 'react';
import Header from '../../components/layout/Header';
import PageTransition from '../../components/layout/PageTransition';
import ContentPager from '../../components/layout/ContentPager';
import SiteFooter from '../../components/layout/SiteFooter';
import ReportClosing from '../../components/layout/ReportClosing';
import { motion } from 'framer-motion';
import { reportPageReveal } from '../motion';
import { container, reportPage } from '../layout';
import { report as reportTypo } from '../typography';

/**
 * ╔══════════════════════════════════════════════════╗
 * ║  A4Page — Report page block wrapper              ║
 * ║  Extracted từ StrategyPlanning.jsx               ║
 * ╚══════════════════════════════════════════════════╝
 *
 * @param {object} props
 * @param {React.ReactNode} props.children — nội dung A4
 * @param {number} props.pageNumber
 * @param {number} props.totalPages
 * @param {string} [props.brandName="Aurelia Strategy Board"]
 * @param {string} [props.docId="AZ-2026-NATIONAL-CAMPAIGN"]
 * @param {string} [props.confidentialLabel="CONFIDENTIAL / BOARD ONLY"]
 * @param {string} [props.footerLeft="Aurelia Yachts Strategy — 2026"]
 */
export const A4Page = ({
  children,
  pageNumber,
  totalPages,
  brandName = 'Aurelia Strategy Board',
  docId = 'AZ-2026-NATIONAL-CAMPAIGN',
  confidentialLabel = 'CONFIDENTIAL / BOARD ONLY',
  footerLeft = 'Aurelia Yachts Strategy — 2026',
}) => (
  <motion.div
    {...reportPageReveal}
    className={container.a4Page}
    style={{ fontFamily: "'Inter', sans-serif" }}
  >
    {/* Page Header */}
    <div className={reportPage.header}>
      <div className={reportPage.headerBrand}>
        <div className={reportPage.headerIcon}>A</div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <h3 className={reportTypo.headerBrand}>{brandName}</h3>
          <p className="text-[8px] text-gray-400 uppercase font-bold tracking-widest mt-1">
            Document ID: {docId}
          </p>
        </div>
      </div>
      <div className="text-right shrink-0 pl-2">
        <span
          className="inline-block whitespace-nowrap text-[7px] sm:text-[8px] font-black border-2 border-black px-2 py-1 tracking-tighter text-black bg-gray-50"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {confidentialLabel}
        </span>
      </div>
    </div>

    {/* Content Area */}
    <div className={reportPage.content}>{children}</div>

    {/* Page Footer */}
    <div className={reportPage.footer}>
      <div>{footerLeft}</div>
      <div>Page {pageNumber} of {totalPages}</div>
    </div>
  </motion.div>
);

/**
 * ╔══════════════════════════════════════════════════╗
 * ║  ReportPageTemplate                              ║
 * ║  Template chuẩn cho report pages:                ║
 * ║  Strategy / Growth / Automation / Analytics      ║
 * ╚══════════════════════════════════════════════════╝
 *
 * @param {object} props
 * @param {string} props.heroTitle — tiêu đề lớn
 * @param {string} props.heroSubtitle — sub text
 * @param {string} [props.heroQuote] — quote mở đầu (italic)
 * @param {React.ReactNode} [props.heroExtra] — nội dung thêm trước report section
 * @param {React.ReactNode} props.children — A4Pages bên trong report section
 * @param {string} [props.reportSectionTitle="Report"]
 * @param {string} [props.reportSectionTag]
 * @param {object} [props.pager] — { prev, next } cho ContentPager
 */
const ReportPageTemplate = ({
  heroTitle,
  heroSubtitle,
  heroQuote,
  heroExtra,
  children,
  reportSectionTitle,
  reportSectionTag,
  pager,
}) => {
  return (
    <>
      <Header />
      <PageTransition>
        <div className={container.fullPage}>

          {/* HERO SECTION */}
          <section className={`${container.section} mb-24 pt-12`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 leading-tight text-white italic">
                {heroTitle}
                {heroSubtitle && (
                  <>
                    <br />
                    <span className="text-gray-500 text-2xl md:text-4xl italic lowercase">
                      {heroSubtitle}
                    </span>
                  </>
                )}
              </h1>
              {heroQuote && (
                <p className="text-gray-500 text-[11px] md:text-xs max-w-2xl mx-auto border-t border-white/10 pt-8 mt-4 leading-relaxed italic uppercase tracking-widest">
                  {heroQuote}
                </p>
              )}
            </motion.div>

            {heroExtra}
          </section>

          {/* REPORT SECTION */}
          <section
            className={container.reportSection}
            id="report-section"
          >
            {(reportSectionTag || reportSectionTitle) && (
              <div className="text-center mb-16">
                {reportSectionTag && (
                  <span className="text-gray-400 text-[9px] font-black tracking-[0.5em] uppercase mb-4 block">
                    {reportSectionTag}
                  </span>
                )}
                {reportSectionTitle && (
                  <h2 className="text-3xl font-black text-black uppercase tracking-tighter shadow-sm inline-block">
                    {reportSectionTitle}
                  </h2>
                )}
              </div>
            )}

            <div className={container.reportStack}>
              {children}
            </div>

            {pager && <ContentPager {...pager} />}
          </section>

          <SiteFooter />
        </div>
      </PageTransition>
    </>
  );
};

export default ReportPageTemplate;
