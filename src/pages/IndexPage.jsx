import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';
import Header from '../components/layout/Header';

const blocks = [
  {
    id: 1,
    title: 'Strategy',
    desc: 'Nghiên cứu thị trường sâu, định vị thương hiệu và hoạch định ngân sách tổng thể.',
    framework: '',
    showcase: 'Strategy Report',
    link: '/strategy-planning',
    isUpdating: false
  },
  {
    id: 2,
    title: 'Visual',
    desc: 'Xây dựng bản dạng thương hiệu, Moodboard và quy chuẩn Visual Identity.',
    framework: '',
    showcase: 'Brand Visual System',
    link: '/content-creation-design',
    isUpdating: false
  },
  {
    id: 3,
    title: 'Growth',
    desc: 'Thực thi ngân sách quảng cáo, lập Media Plan và các chiến dịch Performance.',
    framework: '',
    showcase: 'Growth Report',
    link: '/organic-paid-growth',
    isUpdating: false
  },
  {
    id: 4,
    title: 'Automation',
    desc: 'Mapping luồng dữ liệu khách hàng qua Make.com, Zapier và tích hợp CRM.',
    framework: '',
    showcase: 'Automation Workflow',
    link: '/automation-crm',
    isUpdating: false
  },
  {
    id: 5,
    title: 'Analytics',
    desc: 'Hệ thống Databox đo lường, tối ưu tỷ lệ chuyển đổi cuối (CRO) và báo cáo ROI.',
    framework: '',
    showcase: 'ROI Intelligence Dashboard',
    link: '/analytics-conversion-retention',
    isUpdating: false
  }
];

const IndexPage = () => {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen w-full pt-32 px-6 md:px-12 flex flex-col justify-center max-w-[1400px] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-16 md:mb-24"
          >
            <span className="text-xs uppercase tracking-[0.5em] text-accent mb-4 block">Aurelia Yachts Case Study</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase mb-6 leading-none">
              Strategic <br/><span className="text-gray-500">Systems.</span>
            </h1>
            <p className="text-gray-400 max-w-2xl text-lg mt-8 font-light leading-relaxed">
              Bản đồ điều hướng hệ thống quản trị dự án Folio_Plan. Chứa toàn bộ tư duy chiến lược và thực thi thực tế, được tổ chức theo 5 key sections.
            </p>
          </motion.div>

          {/* 5 Strategic Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10 overflow-hidden">
            {blocks.map((block) => (
              <Link to={block.link} key={block.id} className="group relative block bg-darkBg hover:bg-white transition-colors duration-500 min-h-[380px] p-8 flex flex-col justify-between overflow-hidden">
                <div className="relative z-10">
                  <span className="inline-block px-2 py-1 bg-white/10 group-hover:bg-black/10 text-accent text-xs font-bold tracking-widest mb-6 rounded-sm uppercase transition-colors">
                    0{block.id}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase group-hover:text-black transition-colors duration-500 mb-4 whitespace-pre-line">
                    {block.title}
                  </h3>
                  <p className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors duration-500 line-clamp-3">
                    {block.desc}
                  </p>
                </div>
                
                <div className="mt-8 relative z-10">
                  <div className="text-xs text-gray-400 group-hover:text-gray-500 mb-2 uppercase tracking-wide">
                    <span className="text-white group-hover:text-black"></span>
                  </div>
                  <div className={`text-xs uppercase tracking-wide flex items-center ${block.isUpdating ? 'text-gray-500 group-hover:text-gray-400' : 'text-accent'}`}>
                    Showcase: {block.showcase}
                    {!block.isUpdating && (
                      <svg className="h-4 w-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    )}
                  </div>
                </div>
                
                {/* BG Accent line on hover for ready blocks */}
                {!block.isUpdating && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-accent transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                )}
                {/* Subtle gradient for updating blocks */}
                {block.isUpdating && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/0 group-hover:from-gray-100/50 transition-colors duration-500"></div>
                )}
              </Link>
            ))}
          </div>
        </main>
      </PageTransition>
    </>
  );
};

export default IndexPage;
