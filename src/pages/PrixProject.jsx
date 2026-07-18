import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import Header from '../components/layout/Header';
import PageTransition from '../components/layout/PageTransition';
import SiteFooter from '../components/layout/SiteFooter';
import ReportClosing from '../components/layout/ReportClosing';
import { hardNavigate } from '../utils/hardNavigation';
import useLang from '../hooks/useLang';
import { motion, AnimatePresence } from 'framer-motion';
import { Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, LineChart, Line } from 'recharts';

// ============================================================
// CONSTANTS & DATA
// ============================================================

const workflowData = [
  { step: 'Calculator', clarity: 64, risk: 35 },
  { step: 'Onboarding', clarity: 74, risk: 28 },
  { step: 'Product', clarity: 88, risk: 18 },
  { step: 'Promotion', clarity: 82, risk: 24 },
  { step: 'AI Explain', clarity: 78, risk: 14 },
];

const engineScenarioData = [
  { scenario: 'Store', margin: 41, recommended: 118 },
  { scenario: 'Food app', margin: 24, recommended: 163 },
  { scenario: 'Freeship', margin: 18, recommended: 178 },
  { scenario: 'Discount', margin: 7, recommended: 196 },
];

const snapshotTimelineData = [
  { month: 'T1', margin: 38, cost: 100 },
  { month: 'T2', margin: 35, cost: 108 },
  { month: 'T3', margin: 29, cost: 119 },
  { month: 'T4', margin: 33, cost: 112 },
  { month: 'T5', margin: 24, cost: 132 },
  { month: 'T6', margin: 31, cost: 118 },
];

const aiGuardrailData = [
  { area: 'Tính toán', engine: 100, ai: 0 },
  { area: 'Giải thích', engine: 40, ai: 60 },
  { area: 'Khuyến mãi', engine: 70, ai: 30 },
  { area: 'Thiếu dữ liệu', engine: 55, ai: 45 },
];

const deploymentData = [
  { layer: 'Web', readiness: 90 },
  { layer: 'API', readiness: 88 },
  { layer: 'DB', readiness: 86 },
  { layer: 'Deploy', readiness: 82 },
  { layer: 'Tests', readiness: 62 },
];

const prixShellCopy = {
  vi: {
    roadmapTitle: 'R&D Roadmap',
    glossaryTitle: 'Chú thích & Thuật ngữ',
    annotationLabel: 'Chú thích',
    kicker: 'Project 01 — R&D Document',
    subtitle: 'Tài liệu nghiên cứu và phát triển kiến trúc kỹ thuật — giai đoạn beta',
    metadataTitle: 'Project Metadata',
    metadata: {
      project: ['Dự án', 'Prix. Beta'],
      timeline: ['Thời gian R&D', 'T3—T6/2026'],
      unit: ['Đơn vị', 'R&D Division'],
      scope: ['Phạm vi', 'SME F&B Pricing'],
    },
    readerNoteTitle: 'Lưu ý đọc:',
    readerNote:
      'Bộ tài liệu này được viết như một hồ sơ R&D sản phẩm, không phải brochure giới thiệu tính năng. Mỗi báo cáo có thể đọc độc lập, nhưng nên đi theo thứ tự từ khảo sát bài toán, engine tính giá, mô hình dữ liệu, ranh giới AI đến kiến trúc triển khai. Các thuật ngữ chuyên ngành sẽ được giải thích trong panel chú thích khi trang hiện tại có nội dung cần làm rõ.',
    layersTitle: 'Architecture Layers',
    layers: [
      ['Product Research', 'Khảo sát & Vấn đề: xác định bài toán, đối tượng sử dụng và phạm vi kiểm chứng.'],
      ['Pricing Engine', 'Thuật toán lõi: cấu trúc tính toán, công thức giá và guardrail tài chính.'],
      ['Data Model', 'Cấu trúc CSDL: schema, snapshot tính toán và ingredient master.'],
      ['Intelligence', 'Chiến lược AI: vai trò diễn giải, contract API và fallback mode.'],
      ['Architecture', 'Triển khai & Tầm nhìn: full-stack architecture, deployment và roadmap.'],
    ],
    tabs: [
      '1. Khảo sát & Vấn đề',
      '2. Thuật toán Lõi (Engine)',
      '3. Cấu trúc CSDL (Data)',
      '4. Chiến lược AI (Intelligence)',
      '5. Triển khai & Tầm nhìn',
    ],
    reportEyebrow: 'Prix Pricing Intelligence',
    reportTitle: 'Architecture Report',
    mobileBack: '← Về Danh sách Dự án',
    liveAccess: {
      eyebrow: 'Truy cập nhanh',
      cta: 'prix.pdl.io.vn',
      status: 'Live beta',
      url: 'https://prix.pdl.io.vn/',
    },
  },
  en: {
    roadmapTitle: 'R&D Roadmap',
    glossaryTitle: 'Notes & Terms',
    annotationLabel: 'Note',
    kicker: 'Project 01 — R&D Document',
    subtitle: 'Technical research and architecture document — beta stage',
    metadataTitle: 'Project Metadata',
    metadata: {
      project: ['Project', 'Prix. Beta'],
      timeline: ['R&D Timeline', 'Mar—Jun 2026'],
      unit: ['Unit', 'R&D Division'],
      scope: ['Scope', 'SME F&B Pricing'],
    },
    readerNoteTitle: 'Reader note:',
    readerNote:
      'This document is written as a product R&D dossier, not as a feature brochure. Each report can be read independently, but the intended order is problem research, pricing engine, data model, AI boundaries, and deployment architecture. Technical terms are explained in the notes panel when the active page contains concepts that need clarification.',
    layersTitle: 'Architecture Layers',
    layers: [
      ['Product Research', 'Problem research: define the business pain, target users, and validation scope.'],
      ['Pricing Engine', 'Core algorithm: calculation structure, pricing formulas, and financial guardrails.'],
      ['Data Model', 'Database structure: schema, calculation snapshots, and ingredient master data.'],
      ['Intelligence', 'AI strategy: explanation role, API contract, and fallback mode.'],
      ['Architecture', 'Delivery path: full-stack architecture, deployment, and roadmap.'],
    ],
    tabs: [
      '1. Research & Problem',
      '2. Core Pricing Engine',
      '3. Data Model',
      '4. AI Strategy',
      '5. Delivery & Roadmap',
    ],
    reportEyebrow: 'Prix Pricing Intelligence',
    reportTitle: 'Architecture Report',
    mobileBack: '← Back to Projects',
    liveAccess: {
      eyebrow: 'Quick access',
      cta: 'prix.pdl.io.vn',
      status: 'Live beta',
      url: 'https://prix.pdl.io.vn/',
    },
  },
};

const PrixLiveAccess = ({ copy }) => (
  <motion.a
    href={copy.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative block overflow-hidden rounded-xl border border-[#007bff]/35 bg-[#080808] px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.34)] outline-none transition-all duration-300 hover:-translate-y-1 hover:border-[#007bff] hover:shadow-[0_24px_70px_rgba(0,123,255,0.16)] focus-visible:ring-2 focus-visible:ring-[#007bff]"
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}
  >
    <div className="pointer-events-none absolute inset-0 opacity-60">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#007bff] to-transparent" />
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#007bff]/15 blur-3xl transition-transform duration-500 group-hover:scale-125" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(0,123,255,0.08),transparent)] translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
    </div>

    <div className="relative flex items-center justify-between gap-4">
      <div className="min-w-0">
        <div className="text-[9px] font-black uppercase tracking-[0.3em] text-[#007bff]">{copy.eyebrow}</div>
        <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#007bff]/35 bg-[#007bff]/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-[#007bff]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#007bff] shadow-[0_0_16px_rgba(0,123,255,0.95)] motion-safe:animate-pulse" />
          {copy.status}
        </div>
      </div>

      <div className="inline-flex min-h-[42px] shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 text-[11px] font-black uppercase tracking-[0.14em] text-[#080808] transition-transform duration-300 group-hover:translate-x-1">
        {copy.cta}
        <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
      </div>
    </div>
  </motion.a>
);

// ============================================================
// FLOATING COMPONENTS (A4 Page Position)
// ============================================================

/**
 * Floating R&D Roadmap - luôn hiển thị ở vị trí cố định theo trang A4
 * Vị trí: bên trái, ở giữa chiều cao viewport
 */
const FloatingRoadmap = ({ tabs, activeTab, onTabChange, isVisible = true, title = 'R&D Roadmap' }) => (
  <div className={`fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-[80] hidden lg:block transition-opacity duration-300 ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
    <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-xl shadow-black/10">
      <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-3 text-center">{title}</div>
      <ul className="flex flex-col gap-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <li key={tab.id}>
              <button
                onClick={() => onTabChange(tab.id)}
                className={`block text-left text-[11px] uppercase font-bold tracking-wider transition-all duration-300 px-3 py-2 rounded-lg w-full ${
                  isActive 
                    ? 'bg-[#111111] text-white' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

/**
 * Floating Chú thích & Thuật ngữ - luôn xuất hiện ở giữa bên phải vùng nhìn
 * Chỉ hiển thị khi có thuật ngữ cho trang hiện tại
 */
const FloatingGlossary = ({ entries, pageTitle, isVisible = true, title = 'Chú thích & Thuật ngữ' }) => {
  if (!entries || entries.length === 0) return null;
  
  return (
    <div className={`fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-[80] hidden xl:block transition-opacity duration-300 ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <motion.div
        key={pageTitle}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-xl shadow-black/10 max-w-[260px]"
      >
        <div className="flex items-center gap-2 mb-3">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{title}</span>
        </div>
        <div className="space-y-3">
          {entries.map((entry, i) => (
            <div key={i} className="border-l-2 border-[#007bff] pl-3">
              <div className="text-[10px] font-bold text-[#111111] leading-tight">{entry.term}</div>
              <div className="text-[9px] text-gray-500 mt-0.5 leading-tight">{entry.definition}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// ============================================================
// ANNOTATION SYSTEM
// ============================================================

const AnnotationPopup = ({ content, position, onClose }) => {
  if (!content) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 10 }}
      className="fixed z-50 bg-white border border-[#007bff] shadow-2xl rounded-xl p-5 max-w-sm"
      style={{
        left: Math.min(position.x, window.innerWidth - 350),
        top: Math.min(position.y, window.innerHeight - 200),
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="absolute top-3 left-3 flex items-center gap-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span className="text-[10px] font-black uppercase tracking-widest text-[#111111]">Note</span>
      </div>
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <div className="mt-8 text-[12px] text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
    </motion.div>
  );
};

const AnnotatedText = ({ children, annotation, onActivate }) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <>
      <span
        className="border-b-2 border-dashed border-[#007bff] cursor-help hover:bg-[#007bff]/10 transition-colors px-1 -mx-1"
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(!isActive);
          if (onActivate) onActivate(e, annotation);
        }}
        title="View note"
      >
        {children}
      </span>
      {isActive && (
        <AnnotationPopup
          content={annotation}
          position={{ x: 100, y: 100 }}
          onClose={() => setIsActive(false)}
        />
      )}
    </>
  );
};

// ============================================================
// A4 PAGE COMPONENT
// ============================================================

const A4Page = ({ children, pageNumber, totalPages, docId, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-50px" }}
    className="report-a4 bg-white text-black shadow-2xl w-full max-w-[210mm] mx-auto mb-8 py-12 px-[50px] md:py-16 md:px-[70px] relative flex flex-col rounded-sm border border-gray-200 min-h-[297mm]"
    style={{ fontFamily: "'Inter', sans-serif" }}
  >
    {/* Page Header */}
    <div className="flex justify-between items-start border-b border-black pb-4 mb-8">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#111111] text-white flex items-center justify-center font-black text-lg font-['Space_Grotesk']">P</div>
        <div className="font-['Space_Grotesk']">
          <h3 className="text-[11px] sm:text-[13px] font-black uppercase tracking-[0.2em] text-[#111111]">PRIX R&D DOCUMENT</h3>
          <p className="text-[8px] text-gray-400 uppercase font-bold tracking-widest mt-1">DOC ID: {docId}</p>
        </div>
      </div>
      <div className="text-right shrink-0 pl-2">
        <span className="inline-block whitespace-nowrap text-[7px] sm:text-[8px] font-black border-2 border-black px-2 py-1 tracking-tighter text-black bg-gray-50 font-['Space_Grotesk']">
          CONFIDENTIAL / R&D ONLY
        </span>
      </div>
    </div>

    {/* Page Title */}
    {title && (
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-[32px] leading-tight font-black uppercase tracking-tight text-[#111111] font-['Space_Grotesk'] mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-[0.3em] font-['Space_Grotesk']">
            {subtitle}
          </p>
        )}
      </div>
    )}

    {/* Content Area */}
    <div className="flex-grow text-[12px] leading-[1.7] text-gray-800">
      {children}
    </div>

    {/* Page Footer */}
    <div className="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] font-['Space_Grotesk']">
      <div>Prix. R&D — Pricing Intelligence System</div>
      <div>Page {pageNumber} of {totalPages}</div>
    </div>
  </motion.div>
);

// ============================================================
// SECTION COMPONENTS
// ============================================================

const SectionHeader = ({ number, title }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className="w-10 h-10 bg-[#111111] text-white rounded-full flex items-center justify-center font-black text-sm">{number}</div>
    <h2 className="text-[16px] md:text-[18px] font-black uppercase tracking-wide text-[#111111] font-['Space_Grotesk']">
      {title}
    </h2>
  </div>
);

const InfoBox = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-gray-50 border-l-4 border-gray-300',
    highlight: 'bg-[#007bff]/10 border-l-4 border-[#007bff]',
    warning: 'bg-red-50 border-l-4 border-red-400',
    success: 'bg-green-50 border-l-4 border-green-400',
  };
  
  return (
    <div className={`p-4 rounded-r-lg ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

const DataCard = ({ label, value, subtext, color = '#111111' }) => (
  <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
    <div className="text-[9px] uppercase tracking-widest text-gray-500 mb-2">{label}</div>
    <div className="text-2xl font-black" style={{ color }}>{value}</div>
    {subtext && <div className="text-[10px] text-gray-500 mt-1">{subtext}</div>}
  </div>
);

const ReportLead = ({ children }) => (
  <p className="text-[13px] leading-[1.85] text-justify text-gray-700 mb-6 first-letter:text-4xl first-letter:font-black first-letter:text-[#111111] first-letter:mr-1 first-letter:float-left">
    {children}
  </p>
);

const ReportList = ({ items }) => (
  <ul className="space-y-3 my-5">
    {items.map((item, index) => (
      <li key={index} className="flex gap-3 text-[12px] leading-relaxed text-gray-700">
        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#007bff]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const FormulaBlock = ({ lines }) => (
  <div className="bg-[#111111] text-gray-300 p-5 rounded-md font-mono text-[11px] leading-loose overflow-x-auto shadow-inner my-6">
    {lines.map((line, index) => (
      <div key={index} className={line.startsWith('//') ? 'text-gray-400' : 'text-white'}>
        {line}
      </div>
    ))}
  </div>
);

const ChartFrame = ({ children, className = 'h-52' }) => {
  const frameRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return undefined;

    const syncReady = () => {
      const rect = frame.getBoundingClientRect();
      setSize({
        width: Math.max(260, Math.floor(rect.width)),
        height: Math.max(180, Math.floor(rect.height)),
      });
    };

    syncReady();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', syncReady);
      return () => window.removeEventListener('resize', syncReady);
    }

    const observer = new ResizeObserver(syncReady);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={frameRef} className={`${className} mb-4 min-h-[180px] min-w-0 overflow-hidden`}>
      {size.width > 0 && size.height > 0 ? children(size) : <div className="h-full w-full bg-gray-50" />}
    </div>
  );
};

const MiniTable = ({ columns, rows }) => (
  <div className="overflow-x-auto my-6">
    <table className="w-full text-[11px] border-collapse">
      <thead>
        <tr className="bg-[#111111] text-white">
          {columns.map((column) => (
            <th key={column} className="p-3 text-left font-bold">{column}</th>
          ))}
        </tr>
      </thead>
      <tbody className="border border-gray-200">
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="p-3 align-top">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const EncryptedBlock = ({ rows }) => (
  <div className="bg-[#111111] text-gray-300 p-5 rounded-md font-mono text-[11px] leading-loose overflow-x-auto shadow-inner my-6 border border-[#262626]">
    <div className="text-[9px] text-[#007bff] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
      Encoded Configuration
    </div>
    <div className="border border-[#262626] rounded overflow-hidden">
      {rows.map((row, index) => (
        <div key={index} className={`flex justify-between px-4 py-2 ${index % 2 === 0 ? 'bg-[#101010]' : 'bg-[#111111]'}`}>
          <span className="text-gray-400">{row.label}</span>
          <span className="text-[#007bff] font-bold">{row.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const EnglishBriefSection = ({ title, children }) => (
  <section className="mb-8">
    <h3 className="text-[13px] font-black uppercase tracking-[0.16em] text-[#111111] mb-3">{title}</h3>
    <div className="space-y-3 text-[12px] leading-relaxed text-gray-700">
      {children}
    </div>
  </section>
);

const EnglishReportPage = ({ activeTab }) => {
  const sections = {
    research: {
      title: 'Margin Safety Discovery Report',
      subtitle: 'Problem framing for SME pricing decisions',
      body: (
        <>
          <EnglishBriefSection title="Problem statement">
            <p>Prix. starts from a practical operating issue: many small F&B and handmade businesses can see revenue, but cannot reliably see product-level profit by sales channel. A product may be profitable in-store while becoming risky on delivery apps, marketplaces, freeship campaigns, or direct discount programs.</p>
            <p>The beta scope therefore stays narrow. Prix. is not positioned as POS, inventory, accounting, or ERP software. It focuses on margin safety, channel pricing, and promotion simulation so the owner can understand the cost base before changing price or campaign mechanics.</p>
          </EnglishBriefSection>
          <EnglishBriefSection title="Inside the beta scope">
            <ReportList items={[
              'Business profile, industry context, selling channels, and default target margin.',
              'Manufactured or trading products, ingredient master data, production cost, and selling/transaction cost.',
              'Recommended price, channel-specific price, promotion scenarios, combo scenarios, and AI explanations based on engine output.',
            ]} />
          </EnglishBriefSection>
          <EnglishBriefSection title="Outside the beta scope">
            <ReportList items={[
              'Inventory operations, production planning, complex multi-branch management, and advanced tax accounting.',
              'Competitor pricing as an engine input unless the user provides a clear data source.',
              'AI intervention in source financial data or deterministic engine results.',
            ]} />
          </EnglishBriefSection>
        </>
      ),
    },
    engine: {
      title: 'Deterministic Pricing Engine',
      subtitle: 'Calculation structure and financial guardrails',
      body: (
        <>
          <EnglishBriefSection title="Cost separation rule">
            <p>The engine does not collapse every cost into one generic cost column. It separates production cost, selling/transaction cost, and pricing decision logic. This separation allows the same product to be recalculated across channels without changing the underlying production economics.</p>
          </EnglishBriefSection>
          <EnglishBriefSection title="Formula discipline">
            <p>Percentage-based fees such as commission, payment fee, tax, and affiliate commission depend on selling price. Break-even price and recommended price therefore need to be solved from the denominator rather than estimated by adding a fixed markup.</p>
            <FormulaBlock lines={[
              'break_even_price = (production_cost + fixed_selling_cost) / (1 - selling_fee_rate)',
              'recommended_price = (production_cost + fixed_selling_cost) / (1 - selling_fee_rate - target_margin)',
              'if denominator <= 0, return infeasible scenario',
            ]} />
          </EnglishBriefSection>
          <EnglishBriefSection title="Operational output">
            <p>Each calculation should return profit, margin, status, warning, max safe discount, and formula breakdown. AI can explain these outputs, but the source of truth remains the deterministic engine.</p>
          </EnglishBriefSection>
        </>
      ),
    },
    data: {
      title: 'Relational Data Model',
      subtitle: 'Business scope, ingredient master, and pricing snapshots',
      body: (
        <>
          <EnglishBriefSection title="Business-scoped data ownership">
            <p>Business is the boundary for data ownership. Products, ingredients, selling channels, combos, snapshots, AI recommendations, and repricing jobs must be read and written through that scope to prevent cross-workspace leakage.</p>
          </EnglishBriefSection>
          <EnglishBriefSection title="Ingredient master before product BOM">
            <p>Prix. stores ingredient master data first. A product BOM then references ingredients and records quantity used, unit, and waste override if needed. This reduces repeated manual input and allows affected products to be recalculated when purchase price changes.</p>
          </EnglishBriefSection>
          <EnglishBriefSection title="Snapshot as calculation evidence">
            <p>A pricing snapshot stores the engine output at a specific point in time: selling price, production cost, selling cost, fee rate, profit, margin, break-even, recommended price, discount threshold, status, confidence score, input, and formula breakdown. Historical reports should not change when ingredient prices or channel policies are updated later.</p>
          </EnglishBriefSection>
        </>
      ),
    },
    ai: {
      title: 'AI Guardrail Report',
      subtitle: 'AI explains engine output; it does not calculate financial truth',
      body: (
        <>
          <EnglishBriefSection title="Valid AI role">
            <p>AI is not the pricing engine in Prix. Its valid role is to normalize input, ask for missing cost items, explain calculated results, suggest promotion or combo scenarios, summarize risk, and draft practical next actions. Profit, margin, break-even, and recommended price must come from the backend engine.</p>
          </EnglishBriefSection>
          <EnglishBriefSection title="Backend-to-AI contract">
            <p>AI receives a calculated object containing product, channel, calculation, and missingInputs. The prompt does not query the database directly and has no permission to modify financial figures.</p>
          </EnglishBriefSection>
          <EnglishBriefSection title="Fallback mode">
            <p>External AI is an optional explanation layer. Rule-based fallback remains the safe default when API access is unavailable, because margin calculation and risk warnings must continue to work without conversational AI.</p>
          </EnglishBriefSection>
        </>
      ),
    },
    dev: {
      title: 'Full-Stack Architecture',
      subtitle: 'From R&D to an operable beta system',
      body: (
        <>
          <EnglishBriefSection title="System architecture">
            <p>Prix. separates frontend, backend, shared pricing engine, and database schema. The frontend uses React and Vite; the backend uses Fastify; the database layer uses PostgreSQL through Prisma ORM. Pricing logic lives in a shared module so preview, persistence, and tests follow the same formulas.</p>
          </EnglishBriefSection>
          <EnglishBriefSection title="Deployment principle">
            <p>The system is designed for containerized deployment with separate web and API services behind a reverse proxy. Security configuration, endpoints, and environment variables need to be managed per environment to prevent demo data or development settings from leaking into production.</p>
          </EnglishBriefSection>
          <EnglishBriefSection title="Next R&D priorities">
            <p>The next stage should keep Prix. inside pricing intelligence instead of expanding prematurely into ERP. Priority should go to route guard reliability, Product Builder preview, backend validation, production-clean mode, automated tests, and RBAC.</p>
          </EnglishBriefSection>
        </>
      ),
    },
  };

  const current = sections[activeTab] || sections.research;

  return (
    <A4Page pageNumber={1} totalPages={1} docId="PRX-EN" title={current.title} subtitle={current.subtitle}>
      {current.body}
    </A4Page>
  );
};



// ============================================================
// PHASE 1: PRODUCT RESEARCH
// ============================================================

const Phase1Pages = ({ totalPages }) => [
  <A4Page key="p1-1" pageNumber={1} totalPages={totalPages} docId="PRX-001" title="Margin Safety Discovery Report" subtitle="Khảo sát bài toán lợi nhuận SME">
    <SectionHeader number="I" title="Tuyên bố vấn đề" />
    <ReportLead>
      Prix. bắt đầu từ một quan sát rất cụ thể: nhiều SME không thiếu doanh thu, nhưng thiếu khả năng nhìn thấy lợi nhuận thật theo từng sản phẩm và từng kênh bán. Khi tiệm bánh, F&B handmade, đồ uống nhỏ, nến thơm hoặc mỹ phẩm thủ công mở rộng đa kênh, cùng một sản phẩm có thể lãi khi bán tại cửa hàng nhưng rơi vào vùng nguy hiểm khi đưa lên sàn, food delivery hoặc chạy freeship.
    </ReportLead>
    <InfoBox variant="highlight">
      <strong className="text-[#111111]">Định vị R&D:</strong> Prix. không được thiết kế để thay Excel, POS, phần mềm kế toán hoặc ERP. Giai đoạn beta tập trung vào ba năng lực: <strong>Margin Safety + Channel Pricing + Promotion Simulator</strong>, nhằm giúp chủ doanh nghiệp thấy giá vốn thật, giá bán an toàn và kịch bản khuyến mãi có nguy cơ làm hỏng biên lợi nhuận.
    </InfoBox>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      <DataCard label="Trọng tâm beta" value="SME" subtext="Bakery, F&B, handmade" />
      <DataCard label="Đơn vị tiền" value="VND" subtext="Mặc định thị trường VN" color="#007bff" />
      <DataCard label="Kênh bán" value="Multi" subtext="Store, food app, marketplace" />
      <DataCard label="Nguyên tắc" value="Engine trước" subtext="AI không can thiệp vào số liệu gốc" color="#C1292E" />
    </div>
    <SectionHeader number="II" title="Các giả định bị loại bỏ" />
    <ReportList
      items={[
        'Một sản phẩm không có một giá vốn duy nhất khi đem đi bán; nó có production cost, selling/transaction cost và pricing decision riêng theo kênh.',
        'Margin hiện tại không phải dữ liệu người dùng tự khai. Margin phải được engine tính từ selling price, production hoặc COGS và chi phí kênh.',
        'Giảm giá không phải công cụ tăng trưởng mặc định. Với SME biên mỏng, discount trực tiếp thường nguy hiểm hơn combo hoặc quà tặng có kiểm soát.',
      ]}
    />
    <InfoBox variant="success">
      <strong>Luận điểm R&D:</strong> Bài toán không phải "làm phần mềm tính giá" mà là tạo một lớp kiểm soát quyết định giá đủ rõ để SME không bán dưới vùng an toàn.
    </InfoBox>
  </A4Page>,

  <A4Page key="p1-2" pageNumber={2} totalPages={totalPages} docId="PRX-001">
    <SectionHeader number="III" title="Luồng sản phẩm chính thức" />
    <ReportLead>
      Theo phạm vi beta, Prix. được chia thành sáu luồng vận hành: public calculator, onboarding, tạo sản phẩm, kiểm tra sản phẩm đang lỗ, tạo khuyến mãi và tạo combo. Thứ tự này phản ánh một hành trình ra quyết định thực tế: người dùng thử tính nhanh trước, lưu dữ liệu khi cần quản trị lâu dài, sau đó dùng snapshot và scenario để so sánh các phương án giá.
    </ReportLead>
    <ChartFrame>
      {({ width, height }) => (
        <BarChart width={width} height={height} data={workflowData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="step" tick={{ fontSize: 9, fill: '#6B7280' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: '#6B7280' }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ fontSize: '12px', border: 'none' }} />
          <Legend />
          <Bar dataKey="clarity" name="Độ rõ quyết định" fill="#111111" radius={[4, 4, 0, 0]} />
          <Bar dataKey="risk" name="Rủi ro còn lại" fill="#007bff" radius={[4, 4, 0, 0]} />
        </BarChart>
      )}
    </ChartFrame>
    <p className="text-[8px] text-center text-gray-400 uppercase font-bold tracking-wider mb-6">
      Fig 1.1: Mức độ rõ quyết định tăng khi dữ liệu đi từ calculator sang sản phẩm lưu trữ.
    </p>
    <MiniTable
      columns={['Luồng', 'Dữ liệu nhập', 'Kết quả hệ thống']}
      rows={[
        ['Public Calculator', 'Giá bán, nguyên liệu, bao bì, nhân công, hao hụt, kênh bán', 'Production cost, selling cost, margin, recommended price, max safe discount'],
        ['Tạo sản phẩm', 'Thông tin sản phẩm, BOM/recipe, direct cost, kênh được gán', 'Realtime preview, product detail, pricing snapshot'],
        ['Promotion/Combo', 'Discount, gift, freeship, affiliate rate hoặc danh sách item combo', 'Profit, margin, status, warning và khuyến nghị phương án tốt hơn'],
      ]}
    />
    <InfoBox variant="success">
      <strong>Ghi chú vận hành:</strong> UX của Prix. cần làm rõ hơn một form nhập liệu thông thường. Mỗi bước phải phân biệt dữ liệu người dùng cung cấp, con số engine tính ra và phần AI diễn giải để tránh nhầm lẫn giữa dữ kiện và khuyến nghị.
    </InfoBox>
  </A4Page>,

  <A4Page key="p1-3" pageNumber={3} totalPages={totalPages} docId="PRX-001">
    <SectionHeader number="IV" title="Phạm vi beta" />
    <ReportLead>
      Phạm vi beta của Prix. được khóa rõ để sản phẩm giữ đúng bài toán pricing intelligence, thay vì mở rộng sớm sang vận hành ERP. Hệ thống tập trung vào tính giá, mô phỏng kênh bán, cảnh báo khuyến mãi và giải thích kết quả. Những phần như tồn kho realtime, nhập xuất tồn, POS, kế toán thuế chuyên sâu hoặc tự crawl giá thị trường chưa thuộc phạm vi kiểm chứng hiện tại.
    </ReportLead>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
      <InfoBox variant="highlight">
        <strong>Beta phải có:</strong>
        <ReportList items={[
          'Tài khoản, business profile, ngành, kênh bán và target margin mặc định.',
          'Sản phẩm manufactured hoặc trading; ingredient master; production cost; selling/transaction cost.',
          'Recommended price, channel-specific price, promotion scenario, combo scenario và AI explanation dựa trên kết quả engine.',
        ]} />
      </InfoBox>
      <InfoBox variant="warning">
        <strong>Ngoài phạm vi beta:</strong>
        <ReportList items={[
          'Quản lý tồn kho, sản xuất, nhiều chi nhánh phức tạp và kế toán thuế chuyên sâu.',
          'Dữ liệu giá đối thủ chưa được đưa vào engine nếu người dùng chưa cung cấp nguồn đáng tin cậy.',
          'AI chỉ diễn giải và gợi ý hành động; lớp này không can thiệp vào số liệu gốc hoặc kết quả engine.',
        ]} />
      </InfoBox>
    </div>
    <SectionHeader number="V" title="Kết luận và bước tiếp theo" />
    <p className="text-justify mb-5">
      Báo cáo Khảo sát kết luận rằng Prix. cần giải quyết một vấn đề hẹp nhưng đủ sâu: giúp SME nhìn thấy lợi nhuận thật trước khi quyết định giá, kênh bán hoặc khuyến mãi. Phạm vi beta vì vậy được giữ có chủ đích: POS, ERP và kế toán được tách khỏi giai đoạn này để nguồn lực tập trung vào an toàn biên lợi nhuận và quyết định giá theo kênh.
    </p>
    <p className="text-justify mb-5">
      Phần tiếp theo là một báo cáo độc lập về Thuật toán lõi. Báo cáo đó sẽ giải thích cách Prix. chuyển các kết luận trên thành một engine tất định: nhận dữ liệu sản phẩm, chi phí sản xuất, chi phí bán hàng và mục tiêu margin; sau đó trả về giá hòa vốn, giá đề xuất, cảnh báo và các kịch bản quyết định.
    </p>
    <InfoBox variant="success">
      <strong>Kết luận báo cáo 1:</strong> Nghiên cứu khảo sát cho thấy vấn đề cốt lõi của SME F&B không nằm ở doanh thu đơn thuần, mà ở khả năng nhìn thấy lợi nhuận thật trên từng sản phẩm và từng kênh bán. Phạm vi beta được khóa vào ba trụ: Margin Safety, Channel Pricing và Promotion Simulator; các mảng POS, kho bãi và kế toán thuế được tách ra khỏi giai đoạn này. Cách khóa phạm vi này giúp R&D tránh feature creep và tập trung vào giá trị cần kiểm chứng trước: chủ doanh nghiệp có thể biết giá vốn thật, vùng giá an toàn và kịch bản khuyến mãi có nguy cơ phá margin. Báo cáo tiếp theo trình bày cách chuyển phạm vi này thành engine tính toán tất định.
    </InfoBox>
  </A4Page>,
];

// ============================================================
// PHASE 2: PRICING ENGINE
// ============================================================

const Phase2Pages = ({ totalPages }) => [
  <A4Page key="p2-1" pageNumber={1} totalPages={totalPages} docId="PRX-002" title="Deterministic Pricing Engine" subtitle="Cấu trúc tính toán lõi">
    <SectionHeader number="I" title="Luật phân tách bắt buộc" />
    <ReportLead>
      Engine của Prix. không cộng mọi thứ vào một cột "giá vốn". Nó tách chi phí thành ba lớp: production cost, selling/transaction cost và pricing decision. Đây là nền tảng để cùng một sản phẩm có thể được tính lại theo nhiều kênh mà không làm sai bản chất chi phí sản xuất.
    </ReportLead>
    <MiniTable
      columns={['Lớp', 'Thành phần chính', 'Vai trò trong quyết định']}
      rows={[
        ['Production Cost', 'Nguyên liệu, bao bì trực tiếp, nhân công, utility, overhead, waste buffer', 'Cho biết sản phẩm tốn bao nhiêu để tạo ra trước khi đem đi bán.'],
        ['Selling/Transaction Cost', 'Commission, payment fee, tax, fixed fee, voucher, freeship, rent/staff allocation', 'Cho biết kênh bán ăn bao nhiêu vào mỗi đơn hàng.'],
        ['Pricing Layer', 'Break-even, recommended price, max safe discount, channel-specific price', 'Biến dữ liệu chi phí thành quyết định giá và khuyến mãi.'],
      ]}
    />
    <FormulaBlock
      lines={[
        '// Material line',
        'material_line_cost = purchase_price_per_base_unit * quantity_used * (1 + waste_rate)',
        '// Production',
        'production_cost = material_cost + packaging + labor + utility + overhead + waste_buffer',
        '// Selling',
        'fixed_selling_cost = fixed_fee + voucher + shipping + rent + staff + other',
        'selling_fee_rate = commission + payment_fee + tax + affiliate_commission',
      ]}
    />
    <InfoBox variant="success">
      <strong>Phát hiện kỹ thuật:</strong> Tách lớp chi phí giúp Prix. không bị khóa vào một ngành duy nhất. Bakery, handmade F&B, đồ uống hoặc sản phẩm trading đều có thể đi qua cùng một engine nếu input được chuẩn hóa đúng.
    </InfoBox>
  </A4Page>,

  <A4Page key="p2-2" pageNumber={2} totalPages={totalPages} docId="PRX-002">
    <SectionHeader number="II" title="Vì sao không cộng thẳng phí phần trăm" />
    <ReportLead>
      Sai lầm phổ biến khi tính phí sàn là lấy production cost cộng thêm một số tiền ước lượng. Nhưng commission, payment fee, tax và affiliate commission đều phụ thuộc vào chính selling price. Vì vậy break-even price và recommended price phải được giải ngược từ mẫu số, nếu không hệ thống sẽ đánh giá sai kênh có phí cao.
    </ReportLead>
    <FormulaBlock
      lines={[
        '// Break-even',
        'break_even_price = (production_cost + fixed_selling_cost) / (1 - selling_fee_rate)',
        '// Recommended price by target margin',
        'recommended_price = (production_cost + fixed_selling_cost) / (1 - selling_fee_rate - target_margin)',
        '// Guardrail',
        'if (1 - selling_fee_rate - target_margin <= 0) target is not feasible',
      ]}
    />
    <ChartFrame className="h-56">
      {({ width, height }) => (
        <BarChart width={width} height={height} data={engineScenarioData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="scenario" tick={{ fontSize: 10, fill: '#6B7280' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: '#6B7280' }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ fontSize: '12px', border: 'none' }} />
          <Legend />
          <Bar dataKey="margin" name="Margin hiện tại (%)" fill="#111111" radius={[4, 4, 0, 0]} />
          <Bar dataKey="recommended" name="Giá đề xuất index" fill="#007bff" radius={[4, 4, 0, 0]} />
        </BarChart>
      )}
    </ChartFrame>
    <InfoBox variant="warning">
      <strong>Guardrail quan trọng:</strong> Nếu selling fee rate cộng target margin làm mẫu số nhỏ hơn hoặc bằng 0, Prix. phải trả về scenario không khả thi thay vì cố sinh ra một giá đề xuất vô nghĩa.
    </InfoBox>
  </A4Page>,

  <A4Page key="p2-3" pageNumber={3} totalPages={totalPages} docId="PRX-002">
    <SectionHeader number="III" title="Từ phép tính sang quyết định vận hành" />
    <ReportLead>
      Engine cần trả về nhiều hơn một chỉ số margin. Mỗi kết quả phải đi kèm profit, status, warning, max safe discount và formula breakdown để UI và AI có đủ dữ kiện giải thích. Promotion scenario và combo scenario đều chạy lại trên cùng nguyên tắc, chỉ khác cách biến đổi giá bán, fixed selling cost hoặc selling fee rate.
    </ReportLead>
    <MiniTable
      columns={['Scenario', 'Biến đổi input', 'Điểm cần cảnh báo']}
      rows={[
        ['Percent/fixed discount', 'Giảm scenario price trước khi tính lại margin', 'Âm profit hoặc margin thấp hơn watch threshold.'],
        ['Free shipping/gift/voucher', 'Tăng fixed selling cost bằng shipping subsidy, gift cost hoặc expected voucher cost', 'Có thể giữ perceived value tốt hơn discount nhưng vẫn cần giới hạn chi phí.'],
        ['Affiliate/reseller', 'Tăng selling_fee_rate bằng affiliate commission', 'Tác động mạnh vì phí tính theo phần trăm selling price.'],
        ['Combo', 'Cộng production cost của nhiều item, thêm bao bì/quà tặng, áp phí kênh combo', 'So sánh với bán lẻ để biết tăng AOV hay chỉ đang bào margin.'],
      ]}
    />
    <InfoBox variant="success">
      <strong>Kết luận báo cáo 2:</strong> Pricing engine là nguồn sự thật tính toán duy nhất trong toàn bộ hệ thống Prix. Bằng cách tách chi phí thành ba lớp rõ ràng (production, selling, pricing) và giải ngược break-even từ mẫu số thay vì cộng thẳng, engine đảm bảo không kênh bán nào bị đánh giá sai. Mọi kịch bản khuyến mãi và combo đều chạy lại trên cùng nguyên tắc, chỉ khác cách biến đổi input. Dữ liệu từ engine cần được lưu có lịch sử và có quan hệ rõ giữa sản phẩm, nguyên liệu, kênh và snapshot — đây là chủ đề của báo cáo tiếp theo.
    </InfoBox>
  </A4Page>,
];

// ============================================================
// PHASE 3: DATABASE
// ============================================================

const Phase3Pages = ({ totalPages }) => [
  <A4Page key="p3-1" pageNumber={1} totalPages={totalPages} docId="PRX-003" title="Relational Data Model" subtitle="Business scope và product taxonomy">
    <SectionHeader number="I" title="Đơn vị cô lập dữ liệu" />
    <ReportLead>
      Schema chính thức của Prix. đặt business làm biên sở hữu dữ liệu. User sở hữu business; business sở hữu products, ingredients, selling channels, combos, AI recommendations và repricing jobs. Mọi tính toán phải luôn đi qua business scope để một workspace không đọc nhầm dữ liệu của workspace khác.
    </ReportLead>
    <MiniTable
      columns={['Entity', 'Trường quyết định', 'Ý nghĩa R&D']}
      rows={[
        ['Business', 'currency, defaultTargetMargin, safe/watch thresholds, tax profile', 'Là cấu hình tài chính mặc định của workspace.'],
        ['Product', 'productKind, salesStatus, currentPrice, targetMargin, primaryChannelId', 'Phân biệt sản phẩm đang bán và sản phẩm R&D; manufactured và trading.'],
        ['ProductChannel', 'sellingPrice, isPrimary', 'Một sản phẩm có nhiều giá theo kênh, không còn chỉ một primary channel đơn giản.'],
        ['SellingChannel', 'presetId, feePolicyVersion, commission, payment, tax, fixed costs', 'Lưu chính sách phí theo kênh và cho phép chỉnh theo hợp đồng thật.'],
      ]}
    />
    <InfoBox variant="highlight">
      <strong>Quy tắc vận hành:</strong> sản phẩm mới chỉ tự gán kênh `offline_store`/`Tại cửa hàng`. Shopee, TikTok Shop hoặc food delivery chỉ tham gia pricing sau khi người dùng chủ động thêm tab kênh đó.
    </InfoBox>
  </A4Page>,

  <A4Page key="p3-2" pageNumber={2} totalPages={totalPages} docId="PRX-003">
    <SectionHeader number="II" title="Ingredient master trước product BOM" />
    <ReportLead>
      Prix. thiết kế luồng nguyên liệu theo hướng lưu ingredient master trước. Khi tạo product BOM, người dùng chỉ chọn nguyên liệu và nhập lượng dùng thay vì nhập lại toàn bộ thông tin thủ công cho từng sản phẩm. Cách này giảm lỗi nhập liệu, cho phép sửa giá mua ở thư viện và tái tính những sản phẩm bị ảnh hưởng.
    </ReportLead>
    <FormulaBlock
      lines={[
        '// Ingredient master',
        'purchase_price, purchase_unit, base_unit, conversion_rate, default_waste_rate',
        '// Product ingredient line',
        'quantity_used + unit + optional waste_rate_override',
        '// Example',
        '28.000 VND/kg sugar, product uses 100g, waste 2%',
        'line_cost = 28.000 / 1000 * 100 * 1.02',
      ]}
    />
    <ReportList
      items={[
        'Ingredient có group_name để gom bột, sữa, topping, bao bì hoặc hàng nhập; nếu chưa có nhóm thì UI hiển thị dấu gạch ngang thay vì tự sinh dữ liệu thay thế.',
        'Unit type quyết định đơn vị hợp lệ. Nguyên liệu kg/g không được hiển thị l/ml hoặc cái/chiếc trong dòng BOM.',
        'Direct cost được lưu riêng: packaging, labor minutes, labor rate, utility, overhead và production waste buffer.',
      ]}
    />
    <InfoBox variant="success">
      <strong>Ghi chú dữ liệu:</strong> Dữ liệu nguyên liệu là lớp master data quan trọng của Prix. Khi dữ liệu này đổi, hệ thống giữ nguyên lịch sử cũ và tạo bối cảnh cho snapshot mới.
    </InfoBox>
  </A4Page>,

  <A4Page key="p3-3" pageNumber={3} totalPages={totalPages} docId="PRX-003">
    <SectionHeader number="III" title="Snapshot là bằng chứng tính toán" />
    <ReportLead>
      Pricing snapshot lưu kết quả engine tại một thời điểm: selling price, production cost, fixed selling cost, selling fee rate, total effective cost, profit, margin, break-even, recommended price, max safe discount, status, confidence score, calculation input và formula breakdown. Đây là lý do báo cáo lợi nhuận quá khứ không bị nhảy khi nguyên liệu hoặc thuế thay đổi.
    </ReportLead>
    <ChartFrame>
      {({ width, height }) => (
        <LineChart width={width} height={height} data={snapshotTimelineData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#6B7280' }} axisLine={false} tickLine={false} />
          <YAxis yAxisId="left" tick={{ fontSize: 10, fill: '#6B7280' }} axisLine={false} tickLine={false} />
          <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10, fill: '#6B7280' }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ fontSize: '12px', border: 'none' }} />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="margin" name="Margin snapshot (%)" stroke="#111111" strokeWidth={3} dot={{ r: 4, fill: '#111111' }} />
          <Line yAxisId="right" type="monotone" dataKey="cost" name="Cost index" stroke="#C1292E" strokeWidth={2} strokeDasharray="5 5" />
        </LineChart>
      )}
    </ChartFrame>
    <InfoBox variant="highlight">
      <strong>Repricing job:</strong> Khi channel fee, tax profile hoặc input liên quan thay đổi, hệ thống có `RepricingJob` để xếp hàng tính lại phạm vi bị ảnh hưởng. Snapshot cũ vẫn là lịch sử; snapshot mới là quyết định hiện tại.
    </InfoBox>
    <InfoBox variant="success" className="mt-5">
      <strong>Kết luận báo cáo 3:</strong> Kiến trúc dữ liệu của Prix. chọn snapshot-first thay vì chỉ lưu trạng thái hiện tại. Quyết định này giải quyết một vấn đề cốt lõi: khi nguyên liệu hoặc phí kênh thay đổi, lịch sử tính toán cũ không bị viết đè, và hệ thống có đủ bối cảnh để so sánh trước-sau. Ingredient master tách rời khỏi product BOM giúp giảm lỗi nhập liệu và cho phép tái tính hàng loạt khi giá mua biến động. Cấu trúc dữ liệu đã đủ vững để engine vận hành có lịch sử — báo cáo tiếp theo sẽ trình bày vai trò của AI trong việc diễn giải kết quả.
    </InfoBox>
  </A4Page>,
];

// ============================================================
// PHASE 4: AI STRATEGY
// ============================================================

const Phase4Pages = ({ totalPages }) => [
  <A4Page key="p4-1" pageNumber={1} totalPages={totalPages} docId="PRX-004" title="AI Guardrail Report" subtitle="AI chỉ diễn giải số liệu đã tính">
    <SectionHeader number="I" title="Vai trò hợp lệ của AI trong bản beta" />
    <ReportLead>
      Trong Prix., AI không giữ vai trò pricing engine. Lớp AI chỉ chuẩn hóa input, hỏi thêm các khoản chi phí còn thiếu, giải thích kết quả tính toán, gợi ý kịch bản khuyến mãi/combo, tóm tắt rủi ro và soạn đề xuất hành động. Các chỉ số như profit, margin, break-even và recommended price phải đến từ backend engine.
    </ReportLead>
    <ChartFrame>
      {({ width, height }) => (
        <BarChart width={width} height={height} data={aiGuardrailData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis type="number" tick={{ fontSize: 10, fill: '#6B7280' }} axisLine={false} tickLine={false} />
          <YAxis type="category" dataKey="area" tick={{ fontSize: 10, fill: '#111111', fontWeight: 'bold' }} axisLine={false} tickLine={false} width={90} />
          <Tooltip contentStyle={{ fontSize: '12px', border: 'none' }} />
          <Legend />
          <Bar dataKey="engine" name="Engine quyết định" stackId="a" fill="#111111" />
          <Bar dataKey="ai" name="AI diễn giải" stackId="a" fill="#007bff" />
        </BarChart>
      )}
    </ChartFrame>
    <InfoBox variant="warning">
      <strong>Ranh giới AI:</strong> AI không được tạo giá thị trường khi chưa có nguồn, sửa kết quả backend, kết luận chắc chắn khi dữ liệu còn thiếu, thay công thức tài chính bằng cảm tính hoặc dùng competitor price nếu người dùng chưa cung cấp nguồn dữ liệu.
    </InfoBox>
  </A4Page>,

  <A4Page key="p4-2" pageNumber={2} totalPages={totalPages} docId="PRX-004">
    <SectionHeader number="II" title="Contract giữa backend và AI" />
    <ReportLead>
      AI chỉ nhận một object đã được backend tính sẵn. Object này chứa product, calculation, channel và missingInputs. Cách thiết kế này giúp prompt không cần truy cập database trực tiếp, không tự chạy query và không có quyền thay đổi số liệu. Vai trò của AI là chuyển kết quả kỹ thuật thành ngôn ngữ vận hành để chủ doanh nghiệp hiểu được tình trạng sản phẩm.
    </ReportLead>
    <FormulaBlock
      lines={[
        '// AI receives calculated result',
        'product: name, currentPrice, targetMargin',
        'calculation: productionCost, fixedSellingCost, sellingFeeRate',
        'calculation: profit, margin, breakEvenPrice, recommendedPrice',
        'calculation: maxSafeDiscountRate, status, confidenceScore',
        'channel: name, commissionRate, paymentFeeRate',
        'missingInputs: []',
      ]}
    />
    <MiniTable
      columns={['Output AI', 'Mục đích', 'Ràng buộc']}
      rows={[
        ['Summary', 'Tóm tắt tình trạng sản phẩm trong 2-3 câu', 'Giữ nguyên số liệu từ engine, tránh diễn giải phóng đại.'],
        ['Risks', 'Nêu rủi ro chính như phí kênh cao hoặc discount quá sâu', 'Phải bám vào calculation/status.'],
        ['Recommendations', 'Đề xuất tăng giá, đổi kênh, tạo combo hoặc gift', 'Chỉ dùng benchmark khi có nguồn dữ liệu được cung cấp rõ.'],
        ['Plain language explanation', 'Giải thích cho chủ SME không chuyên tài chính', 'Thuật ngữ phải được giải thích nếu dùng.'],
      ]}
    />
  </A4Page>,

  <A4Page key="p4-3" pageNumber={3} totalPages={totalPages} docId="PRX-004">
    <SectionHeader number="III" title="Khi external AI chưa khả dụng" />
    <ReportLead>
      Trạng thái hiện tại của Prix. xem external AI provider là lớp bổ trợ; rule-based fallback vẫn là mặc định an toàn khi chưa có API key. Với sản phẩm tài chính cho SME, luồng cốt lõi là tính margin và cảnh báo rủi ro phải chạy ổn định trước, còn phần diễn giải bằng AI có thể được bật sau khi hạ tầng sẵn sàng.
    </ReportLead>
    <ReportList
      items={[
        'Explain pricing: backend gửi calculation JSON; AI hoặc fallback diễn giải tình trạng, rủi ro, 3 hành động và giới hạn dữ liệu.',
        'Suggest promotion: backend tính sẵn danh sách scenario; AI hoặc fallback chỉ xếp hạng và giải thích vì sao combo/gift có thể tốt hơn giảm trực tiếp.',
        'Confidence score thấp phải nói rõ dữ liệu còn thiếu, ví dụ thiếu labor, overhead, waste hoặc phí kênh.',
      ]}
    />
    <InfoBox variant="success">
      <strong>Kết luận báo cáo 4:</strong> AI trong Prix. được thiết kế với một nguyên tắc rõ ràng: lớp này không can thiệp vào số liệu gốc hoặc kết quả tài chính do engine trả về. Vai trò hợp lệ là diễn giải kết quả engine thành ngôn ngữ kinh doanh dễ hiểu, gợi ý kịch bản và cảnh báo rủi ro. Rule-based fallback giữ cho luồng cốt lõi không bị phụ thuộc vào external AI provider. Kiến trúc này phù hợp với sản phẩm tài chính SME, nơi độ tin cậy của con số quan trọng hơn trải nghiệm hội thoại.
    </InfoBox>
  </A4Page>,
];

// ============================================================
// PHASE 5: DEPLOYMENT & VISION
// ============================================================

const Phase5Pages = ({ totalPages }) => [
  <A4Page key="p5-1" pageNumber={1} totalPages={totalPages} docId="PRX-005" title="Full-Stack Architecture" subtitle="Từ R&D sang bản beta vận hành">
    <SectionHeader number="I" title="Kiến trúc tổng thể" />
    <ReportLead>
      Prix. ở giai đoạn beta đã tách rõ frontend, backend, shared pricing engine và database schema. Frontend là React + Vite SPA; backend là Fastify API; database dùng PostgreSQL qua Prisma ORM. Logic tính toán nằm ở shared pricing engine để frontend, backend và test cùng bám một nguồn công thức.
    </ReportLead>
    <MiniTable
      columns={['Lớp', 'Công nghệ', 'Trách nhiệm']}
      rows={[
        ['Frontend', 'React 19 + Vite + TypeScript', 'Route có locale, workspace, form sản phẩm, dashboard, product detail, real-time preview.'],
        ['Backend', 'Fastify + Node.js + TypeScript', 'Auth/session, REST API, validation, business scope, gọi pricing engine.'],
        ['Database', 'PostgreSQL + Prisma ORM', 'Users, businesses, products, ingredients, channels, snapshots, promotions, combos.'],
        ['Engine', 'Shared TypeScript Module', 'Công thức deterministic, confidence score, warning, scenario, combo calculation.'],
      ]}
    />
    <InfoBox variant="highlight">
      <strong>Nguyên tắc kiến trúc:</strong> Pricing engine là shared module dùng chung giữa frontend preview và backend persist. Cách tổ chức này giảm rủi ro lệch công thức giữa màn hình nhập liệu và dữ liệu lưu vào database. Stateless API cũng giúp việc mở rộng service về sau đơn giản hơn, miễn là auth scope và business scope được kiểm soát chặt.
    </InfoBox>
  </A4Page>,

  <A4Page key="p5-2" pageNumber={2} totalPages={totalPages} docId="PRX-005">
    <SectionHeader number="II" title="Triển khai & Vận hành" />
    <ReportLead>
      Hệ thống được đóng gói theo hướng containerized deployment. Frontend và API được tách thành các service độc lập, giao tiếp qua reverse proxy. Cấu hình bảo mật, endpoint và biến môi trường cần được quản lý riêng theo từng môi trường để tránh lẫn dữ liệu thử nghiệm vào production.
    </ReportLead>
    <EncryptedBlock rows={[
      { label: 'Container Registry', value: '[INTERNAL]' },
      { label: 'Auth Provider', value: '[OAUTH_2.0]' },
      { label: 'Session Security', value: '[ENCRYPTED]' },
      { label: 'Environment Config', value: '[PRODUCTION]' },
      { label: 'CDN / Tunnel', value: '[CLOUDFLARE]' },
    ]} />
    <MiniTable
      columns={['Component', 'Vai trò', 'Đặc điểm']}
      rows={[
        ['Web Service', 'Phục vụ frontend SPA + reverse proxy API', 'Static files + proxy routing tự động'],
        ['API Service', 'Business logic, auth, pricing calculation', 'Stateless, session qua signed cookies'],
        ['Database', 'PostgreSQL với schema migration', 'Snapshot-first, business-scoped queries'],
        ['CI/CD Pipeline', 'Build, test, deploy tự động', 'Container image → registry → orchestrator'],
      ]}
    />
    <ReportList
      items={[
        'Production environment phải sạch dữ liệu demo. Demo fixtures chỉ được tạo trong môi trường development khi flag được bật rõ ràng.',
        'Hệ thống đã cleanup toàn bộ demo data trong production, bao gồm demo user, business, products và combos.',
        'Traffic được route qua CDN tunnel đến web service; API đi qua proxy nội bộ thay vì mở endpoint trực tiếp ra internet.',
      ]}
    />
  </A4Page>,

  <A4Page key="p5-3" pageNumber={3} totalPages={totalPages} docId="PRX-005">
    <SectionHeader number="III" title="Đánh giá & Tầm nhìn" />
    <ReportLead>
      Giai đoạn R&D tiếp theo nên giữ Prix. trong phạm vi pricing intelligence thay vì mở rộng sớm thành ERP. Ưu tiên trước mắt là tăng độ tin cậy quanh route guard, Product Builder preview, backend validation và production-clean mode. Các backlog như catalog, product family, variants, nhiều role, POS/order hoặc inventory chỉ nên đưa vào module riêng khi dữ liệu vận hành chứng minh nhu cầu.
    </ReportLead>
    <ChartFrame className="h-48">
      {({ width, height }) => (
        <BarChart width={width} height={height} data={deploymentData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis type="number" tick={{ fontSize: 10, fill: '#6B7280' }} axisLine={false} tickLine={false} />
          <YAxis type="category" dataKey="layer" tick={{ fontSize: 10, fill: '#111111', fontWeight: 'bold' }} axisLine={false} tickLine={false} width={70} />
          <Tooltip contentStyle={{ fontSize: '12px', border: 'none' }} />
          <Bar dataKey="readiness" name="Readiness" fill="#111111" radius={[0, 4, 4, 0]}>
            {deploymentData.map((entry, index) => (
              <Cell key={`deploy-${entry.layer}`} fill={index < 3 ? '#111111' : index === 3 ? '#007bff' : '#f59e0b'} />
            ))}
          </Bar>
        </BarChart>
      )}
    </ChartFrame>
    <MiniTable
      columns={['Tiêu chí', 'Đánh giá', 'Ghi chú']}
      rows={[
        ['Độ tin cậy (Reliability)', '●●●●○ Cao', 'Engine deterministic + unit testable + snapshot history'],
        ['Khả năng mở rộng (Scalability)', '●●●●○ Tốt', 'Stateless API + container orchestration + shared logic'],
        ['Bảo mật (Security)', '●●●○○ Trung bình', 'Business scope + session auth; cần bổ sung RBAC chi tiết'],
        ['Hiệu năng (Performance)', '●●●●○ Cao', 'Fastify framework + optimized database queries'],
      ]}
    />
    <MiniTable
      columns={['Ưu tiên', 'Hạng mục', 'Lý do']}
      rows={[
        ['P0', 'Frontend tests cho route guard, loading/error/empty state, Product Builder preview', 'Bảo vệ luồng tạo sản phẩm và workspace có locale/businessId.'],
        ['P0', 'Backend tests cho auth scope, CRUD validation, soft delete, recalculate snapshot', 'Tránh rò dữ liệu business và bảo vệ tính đúng snapshot.'],
        ['P1', 'Acceptance test production-clean mode', 'Đảm bảo demo fixture không quay lại production.'],
        ['P1', 'Catalog, product family, variants, product-channel UX nâng cao', 'Phục vụ bakery/handmade có nhiều size, batch và dòng sản phẩm.'],
      ]}
    />
    <InfoBox variant="success">
      <strong>Kết luận báo cáo 5:</strong> Prix. đã có nền tảng kỹ thuật phù hợp cho giai đoạn beta: engine tất định tách rời khỏi AI, schema hỗ trợ lịch sử tính toán qua snapshot, AI có guardrail rõ ràng và deployment không phụ thuộc dữ liệu demo. Giai đoạn tiếp theo nên tập trung vào kiểm thử tự động, RBAC và mở rộng module có kiểm soát thay vì thêm tính năng mới khi chưa có tín hiệu vận hành đủ rõ.
    </InfoBox>
    <div className="mt-8">
      <ReportClosing
        title="Kết luận R&D tổng thể"
        summary="Năm báo cáo R&D này trình bày hành trình từ khảo sát bài toán, thiết kế engine tính toán, cấu trúc dữ liệu, chiến lược AI đến kiến trúc triển khai. Ở giai đoạn beta, Prix. được định vị như một Financial Intelligence System cho SME F&B: hệ thống giúp chủ doanh nghiệp nhìn thấy lợi nhuận thật trước khi quyết định giá, kênh bán hoặc khuyến mãi."
        signatureRole="R&D Technical Lead"
      />
    </div>
  </A4Page>,
];

// ============================================================
// GLOSSARY DATA (Per A4 Page)
// ============================================================

const pageGlossary = {
  'p1-1': [
    { term: 'Margin Safety', definition: 'Ngưỡng lợi nhuận tối thiểu mà sản phẩm phải đạt để không rơi vào vùng nguy hiểm về tài chính.' },
    { term: 'Channel Pricing', definition: 'Cơ chế định giá khác nhau cho cùng một sản phẩm theo từng kênh bán (cửa hàng, sàn TMĐT, food delivery).' },
    { term: 'COGS', definition: 'Cost of Goods Sold — Giá vốn hàng bán, bao gồm toàn bộ chi phí trực tiếp để sản xuất sản phẩm.' },
  ],
  'p1-2': [
    { term: 'Beta Scope', definition: 'Phạm vi beta dùng để kiểm chứng giả thuyết sản phẩm với chức năng đủ rõ, chưa mở rộng thành hệ thống vận hành đầy đủ.' },
    { term: 'BOM', definition: 'Bill of Materials — Danh sách nguyên vật liệu cần thiết để sản xuất một sản phẩm, bao gồm định lượng.' },
    { term: 'Public Calculator', definition: 'Công cụ tính giá mở, cho phép dùng thử trước khi đăng ký tài khoản hệ thống.' },
  ],
  'p1-3': [
    { term: 'ERP', definition: 'Enterprise Resource Planning — Hệ thống quản trị tổng thể doanh nghiệp (kho, kế toán, nhân sự).' },
    { term: 'Scope Lock', definition: 'Khóa phạm vi sản phẩm, ngăn việc mở rộng tính năng ngoài kế hoạch R&D ban đầu.' },
    { term: 'POS', definition: 'Point of Sale — Hệ thống bán hàng tại quầy, xử lý giao dịch và thanh toán trực tiếp.' },
  ],
  'p2-1': [
    { term: 'Production Cost', definition: 'Tổng chi phí sản xuất: nguyên liệu, bao bì, nhân công, năng lượng, overhead và hao hụt.' },
    { term: 'Selling Cost', definition: 'Chi phí bán hàng theo kênh: commission, phí thanh toán, thuế, phí cố định, voucher, ship.' },
    { term: 'Pricing Layer', definition: 'Lớp quyết định giá: break-even, giá đề xuất, discount tối đa an toàn theo kênh.' },
  ],
  'p2-2': [
    { term: 'Break-even Price', definition: 'Giá hòa vốn — mức giá bán tối thiểu để không lỗ, tính bằng (production + fixed selling) / (1 - fee rate).' },
    { term: 'Selling Fee Rate', definition: 'Tổng phí phần trăm trên giá bán: commission + payment fee + tax + affiliate.' },
    { term: 'Target Margin', definition: 'Biên lợi nhuận mục tiêu mà chủ doanh nghiệp đặt ra cho sản phẩm.' },
  ],
  'p2-3': [
    { term: 'Promotion Scenario', definition: 'Kịch bản khuyến mãi: giảm giá, freeship, quà tặng hoặc voucher — mỗi loại biến đổi input engine khác nhau.' },
    { term: 'Combo Scenario', definition: 'Kịch bản bán gộp nhiều sản phẩm, cộng production cost và so sánh với bán lẻ.' },
    { term: 'AOV', definition: 'Average Order Value — Giá trị đơn hàng trung bình, thước đo hiệu quả upsell/combo.' },
  ],
  'p3-1': [
    { term: 'Multi-tenancy', definition: 'Kiến trúc cho phép nhiều doanh nghiệp dùng chung hệ thống mà dữ liệu hoàn toàn cô lập.' },
    { term: 'Business Scope', definition: 'Biên sở hữu dữ liệu — mọi query phải đi qua businessId để ngăn rò rỉ dữ liệu.' },
    { term: 'Product Channel', definition: 'Quan hệ giữa sản phẩm và kênh bán, mỗi kênh có giá bán và phí riêng.' },
  ],
  'p3-2': [
    { term: 'Ingredient Master', definition: 'Thư viện nguyên liệu dùng chung: giá mua, đơn vị, tỷ lệ quy đổi, hao hụt mặc định.' },
    { term: 'Unit Conversion', definition: 'Quy đổi đơn vị: kg→g, l→ml. Nguyên liệu weight không hiển thị đơn vị volume.' },
    { term: 'Direct Cost', definition: 'Chi phí trực tiếp ngoài nguyên liệu: bao bì, nhân công, năng lượng, overhead.' },
  ],
  'p3-3': [
    { term: 'Pricing Snapshot', definition: 'Bản ghi kết quả engine tại một thời điểm, lưu toàn bộ input và output để không mất lịch sử.' },
    { term: 'Repricing Job', definition: 'Tác vụ tính lại giá hàng loạt khi master data thay đổi (phí kênh, giá nguyên liệu).' },
    { term: 'Confidence Score', definition: 'Điểm tin cậy của kết quả tính toán, thấp khi thiếu dữ liệu đầu vào quan trọng.' },
  ],
  'p4-1': [
    { term: 'AI Guardrail', definition: 'Rào chắn xác định rõ AI chỉ diễn giải, không tính toán hoặc sửa số liệu tài chính.' },
    { term: 'Deterministic Engine', definition: 'Hệ thống tính toán tất định: cùng input luôn cho cùng output, không có yếu tố ngẫu nhiên.' },
    { term: 'Rule-based Fallback', definition: 'Chế độ dự phòng dùng luật cố định khi AI provider không khả dụng.' },
  ],
  'p4-2': [
    { term: 'System Prompt', definition: 'Hướng dẫn nền gửi cho AI để kiểm soát vai trò, giới hạn và format đầu ra.' },
    { term: 'Structured Output', definition: 'Đầu ra AI theo cấu trúc cố định: summary, risks, recommendations, explanation.' },
    { term: 'Contract API', definition: 'Giao kèo dữ liệu giữa backend và AI: AI chỉ nhận object đã tính sẵn, không truy cập DB.' },
  ],
  'p4-3': [
    { term: 'External AI Provider', definition: 'Dịch vụ AI bên ngoài (OpenAI, Anthropic...) — optional, không bắt buộc.' },
    { term: 'Fallback Mode', definition: 'Chế độ vận hành khi không có AI: dùng template text thay cho natural language generation.' },
    { term: 'Prompt Template', definition: 'Mẫu câu lệnh có placeholder, điền dữ liệu engine vào trước khi gửi cho AI.' },
  ],
  'p5-1': [
    { term: 'Full-stack Architecture', definition: 'Kiến trúc đầy đủ từ frontend đến database, tất cả trong một monorepo.' },
    { term: 'Shared Logic', definition: 'Code dùng chung giữa frontend và backend, đảm bảo kết quả tính toán nhất quán.' },
    { term: 'ORM', definition: 'Object-Relational Mapping — công cụ ánh xạ database schema sang object trong code.' },
  ],
  'p5-2': [
    { term: 'Container Orchestration', definition: 'Hệ thống quản lý container: tự phục hồi, cân bằng tải, scale ngang.' },
    { term: 'CI/CD Pipeline', definition: 'Continuous Integration/Delivery — quy trình tự động build, test và deploy ứng dụng.' },
    { term: 'Reverse Proxy', definition: 'Server trung gian chuyển tiếp request từ client đến service nội bộ.' },
  ],
  'p5-3': [
    { term: 'Route Guard', definition: 'Cơ chế bảo vệ route: kiểm tra auth, locale và businessId trước khi cho truy cập.' },
    { term: 'Acceptance Test', definition: 'Kiểm thử chấp nhận: xác nhận hệ thống đáp ứng đúng yêu cầu business.' },
    { term: 'Production-clean', definition: 'Chế độ đảm bảo production không chứa dữ liệu demo hoặc test fixtures.' },
  ],
};

// ============================================================
// MAIN COMPONENT
// ============================================================

const createTabsData = (copy) => [
  { id: 'research', title: copy.tabs[0], pages: Phase1Pages, pageKeys: ['p1-1', 'p1-2', 'p1-3'] },
  { id: 'engine', title: copy.tabs[1], pages: Phase2Pages, pageKeys: ['p2-1', 'p2-2', 'p2-3'] },
  { id: 'data', title: copy.tabs[2], pages: Phase3Pages, pageKeys: ['p3-1', 'p3-2', 'p3-3'] },
  { id: 'ai', title: copy.tabs[3], pages: Phase4Pages, pageKeys: ['p4-1', 'p4-2', 'p4-3'] },
  { id: 'dev', title: copy.tabs[4], pages: Phase5Pages, pageKeys: ['p5-1', 'p5-2', 'p5-3'] },
];

const PrixProject = () => {
  const { lang } = useLang();
  const copy = prixShellCopy[lang] || prixShellCopy.vi;
  const tabsData = useMemo(() => createTabsData(copy), [copy]);
  const [activeTab, setActiveTab] = useState('research');
  const [currentPageKey, setCurrentPageKey] = useState('p1-1');
  const [isAtLastPage, setIsAtLastPage] = useState(false);
  const [isReportSectionVisible, setIsReportSectionVisible] = useState(false);
  
  const pageRefs = useRef({});
  const contentRef = useRef(null);
  const reportSectionRef = useRef(null);
  const scrollHandlerRef = useRef(null);
  const scrollFrameRef = useRef(0);
  const currentPageKeyRef = useRef(currentPageKey);
  const isAtLastPageRef = useRef(isAtLastPage);
  const isReportSectionVisibleRef = useRef(isReportSectionVisible);

  const currentTabData = tabsData.find(t => t.id === activeTab) || tabsData[0];
  const totalPages = currentTabData.pageKeys.length;
  const visiblePageKeys = currentTabData.pageKeys;
  
  // Get glossary entries for current A4 page
  const currentGlossary = lang === 'en' ? [] : pageGlossary[currentPageKey] || [];

  const getPageScroller = useCallback(() => {
    const root = document.getElementById('root');
    if (root && root.scrollHeight > root.clientHeight) return root;
    return document.scrollingElement || document.documentElement;
  }, []);

  const setCurrentPageKeySafe = useCallback((nextPageKey) => {
    if (currentPageKeyRef.current === nextPageKey) return;
    currentPageKeyRef.current = nextPageKey;
    setCurrentPageKey(nextPageKey);
  }, []);

  const setIsAtLastPageSafe = useCallback((nextValue) => {
    if (isAtLastPageRef.current === nextValue) return;
    isAtLastPageRef.current = nextValue;
    setIsAtLastPage(nextValue);
  }, []);

  const setIsReportSectionVisibleSafe = useCallback((nextValue) => {
    if (isReportSectionVisibleRef.current === nextValue) return;
    isReportSectionVisibleRef.current = nextValue;
    setIsReportSectionVisible(nextValue);
  }, []);

  useEffect(() => {
    currentPageKeyRef.current = currentPageKey;
  }, [currentPageKey]);

  useEffect(() => {
    isAtLastPageRef.current = isAtLastPage;
  }, [isAtLastPage]);

  useEffect(() => {
    isReportSectionVisibleRef.current = isReportSectionVisible;
  }, [isReportSectionVisible]);

  // Track visible A4 page with one DOM read pass per animation frame.
  useEffect(() => {
    const syncScrollState = () => {
      scrollFrameRef.current = 0;
      const viewportCenter = window.innerHeight / 2;
      
      let closestPage = null;
      let closestDistance = Infinity;
      
      // Find the page whose center is closest to viewport center
      visiblePageKeys.forEach((pageKey) => {
        const el = pageRefs.current[pageKey];
        if (el) {
          const rect = el.getBoundingClientRect();
          const pageCenter = rect.top + rect.height / 2;
          const distance = Math.abs(pageCenter - viewportCenter);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestPage = pageKey;
          }
        }
      });
      
      if (closestPage) {
        setCurrentPageKeySafe(closestPage);
      }
      
      // Check if at last page
      const lastPageEl = pageRefs.current['p5-3'];
      if (activeTab === 'dev' && lastPageEl) {
        const rect = lastPageEl.getBoundingClientRect();
        const isLastVisible = rect.top < viewportCenter && rect.bottom > viewportCenter;
        setIsAtLastPageSafe(isLastVisible);
      } else {
        setIsAtLastPageSafe(false);
      }

      // Show floating panels only when the white report section is actually
      // behind their fixed midpoint position.
      const viewportAnchor = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
      const isVisible = Boolean(viewportAnchor?.closest?.('#report-section'));
      setIsReportSectionVisibleSafe(isVisible);
    };

    const handleScroll = () => {
      if (scrollFrameRef.current) return;
      scrollFrameRef.current = window.requestAnimationFrame(syncScrollState);
    };

    // Add scroll listener with passive flag for better performance
    scrollHandlerRef.current = handleScroll;
    const pageScroller = getPageScroller();
    pageScroller.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    syncScrollState(); // Initial call
    
    return () => {
      pageScroller.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (scrollFrameRef.current) {
        window.cancelAnimationFrame(scrollFrameRef.current);
        scrollFrameRef.current = 0;
      }
    };
  }, [
    activeTab,
    visiblePageKeys,
    getPageScroller,
    setCurrentPageKeySafe,
    setIsAtLastPageSafe,
    setIsReportSectionVisibleSafe,
  ]);

  // Handle tab change
  const handleTabChange = (tabId) => {
    const nextTab = tabsData.find(t => t.id === tabId) || tabsData[0];
    setActiveTab(tabId);
    pageRefs.current = {};
    setCurrentPageKeySafe(nextTab.pageKeys[0] || 'p1-1');
    setIsAtLastPageSafe(false);

    const pageScroller = getPageScroller();
    const scrollerRect = pageScroller === document.scrollingElement
      ? { top: 0 }
      : pageScroller.getBoundingClientRect();
    const reportTop = reportSectionRef.current
      ? reportSectionRef.current.getBoundingClientRect().top - scrollerRect.top + pageScroller.scrollTop
      : 0;
    pageScroller.scrollTo({ top: Math.max(reportTop - 24, 0), behavior: 'smooth' });
  };

  // Wrap A4Page to add ref and data attribute
  const wrapA4Page = (pageElement) => {
    const pageKey = pageElement.key;
    return (
      <div
        key={pageKey}
        ref={(el) => { 
          if (el) {
            pageRefs.current[pageKey] = el;
          } else {
            delete pageRefs.current[pageKey];
          }
        }}
        data-page-key={pageKey}
      >
        {pageElement}
      </div>
    );
  };

  return (
    <>
      <Header />
      <PageTransition>
        <div className="bg-darkBg min-h-screen pt-20 pb-0 overflow-x-hidden font-['Space_Grotesk']">
          
          {/* SECTION 1: R&D OVERVIEW (DARK HERO) */}
          <section className="px-6 md:px-12 max-w-5xl mx-auto mb-16 pt-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-10 text-center"
            >
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#007bff] block mb-3">{copy.kicker}</span>
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4 leading-tight text-white">
                Prix. Pricing Intelligence <br className="md:hidden" /><span className="text-gray-500 italic lowercase">System.</span>
              </h1>
              <p className="text-gray-400 text-[11px] md:text-xs max-w-2xl mx-auto leading-relaxed uppercase tracking-widest font-['Inter']">
                {copy.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Left Column: Metadata */}
              <div className="space-y-6 mt-2">
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] flex items-center gap-4 text-white">
                  <span className="w-8 h-px bg-[#007bff]"></span> {copy.metadataTitle}
                </h2>
                
                <div className="grid grid-cols-2 gap-4 text-[10px] font-black uppercase tracking-wider text-gray-300">
                  {Object.values(copy.metadata).map(([label, value]) => (
                    <div key={label} className="border-l border-white/10 pl-3">
                      <span className="text-gray-500 block mb-1">{label}</span> {value}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <div className="p-4 bg-[#111111]/50 border-l-2 border-[#007bff] rounded-r-lg">
                    <p className="text-[10px] font-['Inter'] text-gray-300 leading-relaxed text-justify">
                      <strong className="text-white">{copy.readerNoteTitle}</strong> {copy.readerNote}
                    </p>
                  </div>
                </div>

                <PrixLiveAccess copy={copy.liveAccess} />
              </div>

              {/* Right Column: 5 Layers */}
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 relative group hover:border-[#007bff]/40 transition-all shadow-2xl">
                <div className="absolute top-4 right-6 text-[#007bff]/10 select-none pointer-events-none group-hover:text-[#007bff]/20 transition-colors">
                   <span className="text-6xl font-black italic">5</span>
                </div>
                <h3 className="text-[10px] font-black mb-4 text-[#007bff] uppercase tracking-[0.4em] flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#007bff] animate-pulse"></div> {copy.layersTitle}
                </h3>
                
                <div className="space-y-2 relative z-10 font-['Inter']">
                  {copy.layers.map(([title, desc], index) => (
                    <div key={title} className="bg-black/40 p-3 rounded-lg border border-white/5 hover:bg-black/60 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[9px] font-black text-gray-500">{String(index + 1).padStart(2, '0')}</span>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">{title}</span>
                      </div>
                      <p className="text-[9px] text-gray-500 leading-relaxed uppercase">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FLOATING R&D ROADMAP */}
          <FloatingRoadmap 
            tabs={tabsData} 
            activeTab={activeTab} 
            onTabChange={handleTabChange}
            isVisible={!isAtLastPage && isReportSectionVisible}
            title={copy.roadmapTitle}
          />

          {/* FLOATING GLOSSARY */}
          <FloatingGlossary 
            entries={currentGlossary} 
            pageTitle={currentPageKey}
            isVisible={!isAtLastPage && isReportSectionVisible}
            title={copy.glossaryTitle}
          />

          {/* SECTION 2: THE A4 REPORT SHOWCASE */}
          <section ref={reportSectionRef} className="report-section bg-[#f8f9fa] pt-16 pb-24 px-4 overflow-hidden shadow-inner" id="report-section">
            <div className="text-center mb-12">
              <span className="text-gray-400 text-[9px] font-black tracking-[0.5em] uppercase mb-4 block">{copy.reportEyebrow}</span>
              <h2 className="text-2xl font-black text-black uppercase tracking-tighter shadow-sm inline-block">{copy.reportTitle}</h2>
            </div>

            {/* Main Content Area - A4 Pages */}
            <div className="max-w-[900px] mx-auto px-4 md:px-6" ref={contentRef}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col gap-3"
                >
                  {lang === 'en'
                    ? <EnglishReportPage activeTab={activeTab} />
                    : currentTabData.pages({ totalPages }).map(wrapA4Page)}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Back to Projects Button - Mobile only */}
            <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
              <button
                onClick={() => hardNavigate('/rd')}
                className="bg-[#111111] text-white text-[11px] font-black uppercase tracking-widest px-6 py-3 rounded-full shadow-xl flex items-center gap-2"
              >
                {copy.mobileBack}
              </button>
            </div>
          </section>

          <SiteFooter />
        </div>
      </PageTransition>
    </>
  );
};

export default PrixProject;
