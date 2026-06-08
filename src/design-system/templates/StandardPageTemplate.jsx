import React from 'react';
import Header from '../../components/layout/Header';
import PageTransition from '../../components/layout/PageTransition';
import SiteFooter from '../../components/layout/SiteFooter';

/**
 * ╔══════════════════════════════════════════════════╗
 * ║  StandardPageTemplate                            ║
 * ║  Template cho các page thông thường:              ║
 * ║  Team, MarketingSystems, ComingSoon, etc.        ║
 * ╚══════════════════════════════════════════════════╝
 *
 * @param {object} props
 * @param {React.ReactNode} props.children — nội dung page
 * @param {boolean} [props.showFooter=true]
 * @param {boolean} [props.showHeader=true]
 * @param {string} [props.className] — thêm class cho content wrapper
 */
const StandardPageTemplate = ({
  children,
  showFooter = true,
  showHeader = true,
  className = '',
}) => {
  return (
    <>
      {showHeader && <Header />}
      <PageTransition>
        <div className={`bg-darkBg min-h-screen text-white ${className}`}>
          {children}
        </div>
        {showFooter && <SiteFooter />}
      </PageTransition>
    </>
  );
};

export default StandardPageTemplate;
