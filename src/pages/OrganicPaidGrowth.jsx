import React from 'react';
import Header from '../components/layout/Header';
import PageTransition from '../components/layout/PageTransition';
import ContentPager from '../components/layout/ContentPager';
import SiteFooter from '../components/layout/SiteFooter';
import ReportClosing from '../components/layout/ReportClosing';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { useLang } from '../hooks/useLang';

const adsBudgetData = [
  { name: 'Meta (FB/IG)', value: 360 },
  { name: 'Google Search/Display', value: 270 },
  { name: 'TikTok', value: 90 },
  { name: 'CRM/Retarget', value: 30 },
];
const COLORS = ['#000000', '#4B5563', '#9CA3AF', '#D1D5DB'];

const seasonalityData = [
  { name: 'T1-T3', booking: 20, search: 100 },
  { name: 'T4', booking: 60, search: 250 },
  { name: 'T5', booking: 80, search: 350 },
  { name: 'T6', booking: 95, search: 450 },
  { name: 'T7', booking: 90, search: 400 },
  { name: 'T8', booking: 70, search: 300 },
  { name: 'T9-T12', booking: 30, search: 150 },
];
const platformIntentData = [
  { name: 'Meta', interest: 68, intent: 42 },
  { name: 'Google', interest: 54, intent: 78 },
  { name: 'TikTok', interest: 72, intent: 35 },
  { name: 'CRM', interest: 46, intent: 62 },
];
const phase2SpendVsPlan = [
  { name: 'Meta', plan: 360, actual: 335 },
  { name: 'Google', plan: 270, actual: 295 },
  { name: 'TikTok', plan: 90, actual: 80 },
  { name: 'CRM', plan: 30, actual: 40 },
];
const phase2ChannelPerf = [
  { name: 'Meta', ctr: 2.3, cvr: 2.8, cpa: 240 },
  { name: 'Google', ctr: 4.2, cvr: 3.6, cpa: 220 },
  { name: 'TikTok', ctr: 1.6, cvr: 2.1, cpa: 270 },
  { name: 'CRM', ctr: 6.8, cvr: 4.1, cpa: 180 },
];

const A4Page = ({ children, pageNumber, totalPages }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-50px" }}
    className="report-a4 bg-white text-black shadow-lg w-full max-w-[210mm] min-h-[297mm] mx-auto mb-4 py-10 px-[53px] md:py-14 md:px-[75px] relative flex flex-col rounded-sm border border-gray-200"
    style={{ fontFamily: "'Inter', sans-serif" }}
  >
    {/* Page Header */}
    <div className="flex justify-between items-start border-b border-black pb-4 mb-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-black text-white flex items-center justify-center font-black text-sm">A</div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-black">Organic & Paid Growth</h3>
          <p className="text-[7px] text-gray-500 uppercase font-bold tracking-widest mt-0.5">Document ID: AZ-2026-NATIONAL-CAMPAIGN</p>
        </div>
      </div>
      <div className="text-right">
        <span className="text-[7.5px] font-black border border-black px-1.5 py-0.5 tracking-tight text-gray-600" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>EXECUTIVE SUMMARY / BOARD ONLY</span>
      </div>
    </div>

    {/* Content Area */}
    <div className="flex-grow text-sm leading-relaxed text-gray-800">
      {children}
    </div>

    {/* Page Footer */}
    <div className="mt-8 pt-4 border-t border-black/10 flex justify-between items-center text-[8px] font-bold text-gray-400 uppercase tracking-widest">
      <div>Aurelia Yachts National Launch — 2026</div>
      <div>Page {pageNumber} of {totalPages}</div>
    </div>
  </motion.div>
);

const OrganicPaidGrowth = () => {
  const { lang } = useLang();
  const isEn = lang === 'en';
  const tx = (vi, en) => (isEn ? en : vi);

  return (
    <>
      <Header />
      <PageTransition>
        <div className="bg-darkBg min-h-screen pt-24 pb-0 overflow-x-hidden">
            
          {/* OVERVIEW SECTION (60/40 Layout) */}
          <section className="px-6 md:px-12 max-w-6xl mx-auto mb-24 pt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4 leading-tight text-white italic">
                Organic & Paid Growth <br/><span className="text-gray-500 text-xl md:text-3xl italic lowercase">Optimization & Scaling.</span>
              </h1>
              <p className="text-gray-500 text-[11px] md:text-xs max-w-2xl mx-auto border-t border-white/10 pt-6 mt-2 leading-relaxed italic uppercase tracking-widest">
                {tx(
                  '"Quảng cáo không phải là chi tiền để mua lượt hiển thị, mà là đầu tư để mua dữ liệu và lợi nhuận. Chúng tôi tiếp cận Growth Marketing bằng tư duy thử nghiệm liên tục và tối ưu hóa dựa trên số liệu thực tế."',
                  '"Advertising is not spending to buy impressions, but investing to buy data and profit. We approach Growth Marketing with continuous experimentation and evidence-based optimization."'
                )}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-3 space-y-6">
                <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-3 text-white">
                  <span className="w-6 h-px bg-accent"></span> {tx('Mindset: Hiệu quả đo lường & ROI', 'Mindset: Measurable Performance & ROI')}
                </h2>
                
                <div className="text-gray-400 text-sm leading-relaxed space-y-4 text-justify">
                  <p>
                    {tx('Tại đây, ', 'In this layer, ')}<strong>{tx('ngân sách là nhiên liệu', 'budget is the fuel')}</strong>{tx(', nhưng dữ liệu là bánh lái. **Chúng tôi** không "đốt tiền" để lấy Reach ảo, mà tập trung vào việc tối ưu hóa ', ', while data is the steering wheel. We do not burn budget for vanity reach; we optimize ')}<strong className="text-white">Customer Acquisition Cost (CAC)</strong>{tx(' thông qua việc đẩy mạnh quảng cáo vào đúng các "điểm rơi" tâm lý và mùa vụ.', ' by activating campaigns at the right psychological and seasonal inflection points.')}
                  </p>
                  
                  <p>
                    {tx('Chiến lược Growth & Ads của chúng tôi dựa trên 3 trụ cột thực thi:', 'Our Growth & Ads strategy is built on three execution pillars:')}
                  </p>
                </div>

                <ul className="space-y-3 text-xs">
                  <li className="flex gap-4 group">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="text-gray-400 leading-snug">
                      <strong className="text-white uppercase tracking-widest text-xs block mb-1">Dynamic Budgeting:</strong> {tx('Linh hoạt điều chuyển ngân sách giữa các vùng miền theo biến động thời tiết.', 'Reallocate budget dynamically across regions based on weather shifts and demand windows.')}
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="text-gray-400 leading-snug">
                      <strong className="text-white uppercase tracking-widest text-xs block mb-1">Multichannel Attribution:</strong> {tx('Ghi nhận công lao đa điểm chạm để hiểu chính xác khách hàng đến từ đâu.', 'Capture multi-touch attribution to identify true source contribution across channels.')}
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="text-gray-400 leading-snug">
                      <strong className="text-white uppercase tracking-widest text-xs block mb-1">High-Ticket Funnel:</strong> {tx('Xây dựng phễu hứng Lead khép kín từ Awareness đến Concierge Booking.', 'Build an end-to-end lead funnel from awareness to concierge booking conversion.')}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2 bg-[#111111] p-6 rounded-2xl border border-white/5 relative group hover:border-accent/20 transition-colors shadow-2xl">
                <div className="absolute top-4 right-4 text-accent/5 select-none pointer-events-none group-hover:text-accent/10 transition-colors">
                   <span className="text-7xl font-black italic">g</span>
                </div>

                <h3 className="text-[11px] font-bold mb-5 text-accent uppercase tracking-[0.3em] flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div> Performance Stack
                </h3>
                
                <div className="space-y-3 relative z-10">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2.5 mb-1.5">
                       <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                       <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Media Buy</span>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-snug uppercase">Meta Business, Google Ads Search/Display.</p>
                  </div>

                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2.5 mb-1.5">
                       <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                       <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Data Analytics</span>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-snug uppercase">GA4, Looker Studio, TripleWhale Tracking.</p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/5 flex justify-between gap-1 grayscale opacity-30 group-hover:opacity-60 transition-all">
                  <div className="text-[8px] font-bold text-white tracking-widest">FACEBOOK</div>
                  <div className="text-[8px] font-bold text-white tracking-widest">GOOGLE</div>
                  <div className="text-[8px] font-bold text-white tracking-widest">TIKTOK</div>
                  <div className="text-[8px] font-bold text-white tracking-widest">CRM</div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: THE A4 BOARD REPORT */}
          <section className="report-section bg-[#f2f2f2] pt-16 pb-24 px-4 overflow-hidden shadow-inner" id="report-section">
            <div className="text-center mb-12">
               <span className="text-gray-400 text-[9px] font-black tracking-[0.4em] uppercase mb-2 block">Ads Execution Suite v2.0</span>
               <h2 className="text-3xl font-black text-black uppercase tracking-tighter">Attention‑Led Advertising Report</h2>
               <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest">Phase 01: Market Attention Audit • Phase 02: 5‑Month Ads Performance</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="max-w-[210mm] mx-auto w-full">
                <div className="text-[9px] font-black text-gray-500 uppercase tracking-[0.4em] mb-2">Phase 01 — Market Attention Audit (Pre‑launch)</div>
              </div>
              
              {/* PAGE 1: COVER & SEASONALITY */}
              <A4Page pageNumber={1} totalPages={4}>
                <div className="mb-10 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <h1 className="text-3xl md:text-5xl font-black uppercase mb-4 tracking-tighter leading-none italic">Market Attention Audit</h1>
                  <h2 className="text-[14px] font-bold text-gray-400 uppercase tracking-[0.3em]">Objective: Measure Interest & Message Fit</h2>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8 text-xs border-y border-black/10 py-4 font-medium">
                  <div><span className="font-bold">{tx('Dự án:', 'Project:')}</span> Aurelia Yachts (Luxury Charter)</div>
                  <div><span className="font-bold">{tx('Giai đoạn:', 'Phase:')}</span> {tx('Tiền chiến dịch (T‑30 → T‑1)', 'Pre-campaign (T-30 -> T-1)')}</div>
                  <div><span className="font-bold">{tx('Nền tảng:', 'Platforms:')}</span> Meta / Google / TikTok / CRM</div>
                  <div><span className="font-bold">{tx('Mục tiêu:', 'Objective:')}</span> {tx('Xác định thông điệp & mức độ quan tâm', 'Validate messaging and demand intensity')}</div>
                </div>

                <h3 className="text-base font-black uppercase mb-4 mt-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{tx('1. Mức độ quan tâm theo nền tảng', '1. Platform-Level Interest Intensity')}</h3>
                <p className="text-xs mb-4 text-justify lowercase">
                  {tx('Đường quan tâm đi lên do mùa nghỉ hè kéo nhu cầu du lịch biển tăng mạnh. Tuy nhiên tệp cao cấp phản hồi khác: họ ưu tiên “private & exclusive”, không nhạy giá. Điều này buộc thông điệp phải tập trung vào riêng tư, concierge và số lượng suất giới hạn.', 'Interest curves rose with summer demand, while premium cohorts responded differently: they prioritized “private & exclusive” over price sensitivity. This required messaging focused on privacy, concierge value, and limited slots.')}
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-[10px]">
                  <div className="border border-gray-200 p-4 bg-[#f8f9fa]">
                    <div className="text-gray-500 uppercase tracking-widest">Summer Interest</div>
                    <div className="text-xl font-black text-black">+42%</div>
                    <div className="text-gray-400">{tx('So với Q1', 'vs Q1')}</div>
                  </div>
                  <div className="border border-gray-200 p-4 bg-[#f8f9fa]">
                    <div className="text-gray-500 uppercase tracking-widest">Premium Intent</div>
                    <div className="text-xl font-black text-black">38%</div>
                    <div className="text-gray-400">{tx('Tệp “private luxury”', '“private luxury” cohort')}</div>
                  </div>
                  <div className="border border-gray-200 p-4 bg-[#f8f9fa]">
                    <div className="text-gray-500 uppercase tracking-widest">Decision Speed</div>
                    <div className="text-xl font-black text-black">{tx('14 ngày', '14 days')}</div>
                    <div className="text-gray-400">Interest → lead</div>
                  </div>
                </div>
                <div className="text-[10px] text-gray-600 leading-relaxed space-y-1 mb-2">
                  <p><strong>{tx('Nguồn dữ liệu:', 'Data sources:')}</strong> Google Trends + Search Console, Meta Insights, TikTok Analytics, CRM email logs.</p>
                  <p><strong>{tx('Thời gian đo:', 'Measurement window:')}</strong> {tx('Trung bình 3 năm gần nhất (2023–2025), đối chiếu theo mùa cao điểm.', '3-year average (2023-2025), benchmarked against peak season behavior.')}</p>
                </div>
                <table className="w-full text-[10px] border-collapse border border-gray-300 mb-6">
                  <thead>
                    <tr className="bg-gray-100 uppercase tracking-wider">
                      <th className="border border-gray-300 p-3 text-left">{tx('Nền tảng', 'Platform')}</th>
                      <th className="border border-gray-300 p-3 text-left">{tx('Chỉ số mùa hè', 'Summer Metrics')}</th>
                      <th className="border border-gray-300 p-3 text-left">{tx('Insight nội dung', 'Content Insight')}</th>
                      <th className="border border-gray-300 p-3 text-left">{tx('Hành vi tệp cao cấp', 'Premium Cohort Behavior')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Meta (FB/IG)</td>
                      <td className="border border-gray-300 p-4">Interest +32% • Save 0.9%</td>
                      <td className="border border-gray-300 p-4">{tx('Lifestyle, sunset, dining tạo cảm xúc tốt nhất', 'Lifestyle, sunset, and dining generated strongest emotional response')}</td>
                      <td className="border border-gray-300 p-4">{tx('Ưu tiên hình ảnh riêng tư, ít đông, tone sang', 'Preferred visuals were private, less crowded, and premium-toned')}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Google Search</td>
                      <td className="border border-gray-300 p-4">Search +45% • CVR 3.6%</td>
                      <td className="border border-gray-300 p-4">{tx('Keyword “private yacht”, “luxury cruise” tăng mạnh', 'Keywords “private yacht” and “luxury cruise” surged strongly')}</td>
                      <td className="border border-gray-300 p-4">{tx('Quan tâm ưu đãi private viewing, book nhanh', 'Strong response to private-viewing offers and fast booking intent')}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">TikTok</td>
                      <td className="border border-gray-300 p-4">VTR +28% • CTR 1.6%</td>
                      <td className="border border-gray-300 p-4">{tx('POV/behind the scenes kích tò mò trải nghiệm', 'POV/behind-the-scenes content triggered curiosity-driven interest')}</td>
                      <td className="border border-gray-300 p-4">{tx('Cần retarget bằng thông điệp high‑ticket', 'Requires retargeting with high-ticket message framing')}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">CRM</td>
                      <td className="border border-gray-300 p-4">Open 34% • CTR 6.8%</td>
                      <td className="border border-gray-300 p-4">{tx('Ưu đãi giới hạn tạo phản hồi cao', 'Limited offers drove high response')}</td>
                      <td className="border border-gray-300 p-4">{tx('Nhóm cũ phản hồi tốt với gói member‑only', 'Returning cohorts responded strongly to member-only bundles')}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="my-6 border border-gray-200 p-4 bg-[#f8f9fa] h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={seasonalityData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#6B7280' }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#6B7280' }} />
                        <Tooltip contentStyle={{ fontSize: '10px' }} />
                        <Bar dataKey="booking" name="Attention Signals" fill="#000000" barSize={16} />
                        <Line type="monotone" dataKey="search" name="Search Intent Index" stroke="#9CA3AF" strokeWidth={2} dot={{ r: 3 }} />
                      </ComposedChart>
                    </ResponsiveContainer>
                </div>
              </A4Page>

              {/* PAGE 2: MESSAGE & KEYWORD PERFORMANCE */}
              <A4Page pageNumber={2} totalPages={4}>
                <h3 className="text-base font-black uppercase mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{tx('2. Hiệu quả thông điệp & keyword test', '2. Message Performance & Keyword Test')}</h3>
                <table className="w-full text-[10px] border-collapse border border-gray-300 mb-8">
                  <thead>
                    <tr className="bg-gray-100 uppercase tracking-wider">
                      <th className="border border-gray-300 p-3 text-left">{tx('Thông điệp', 'Message')}</th>
                      <th className="border border-gray-300 p-3 text-left">{tx('Kênh phù hợp', 'Best-fit Channels')}</th>
                      <th className="border border-gray-300 p-3 text-left">CTR</th>
                      <th className="border border-gray-300 p-3 text-left">CVR</th>
                      <th className="border border-gray-300 p-3 text-left">CPL</th>
                      <th className="border border-gray-300 p-3 text-left">{tx('Kết luận', 'Conclusion')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">{tx('Private Luxury (riêng tư)', 'Private Luxury')}</td>
                      <td className="border border-gray-300 p-4">Google • CRM</td>
                      <td className="border border-gray-300 p-4">4.4%</td>
                      <td className="border border-gray-300 p-4">3.8%</td>
                      <td className="border border-gray-300 p-4">210k</td>
                      <td className="border border-gray-300 p-4 text-green-700">Core message</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Sunset on Deck</td>
                      <td className="border border-gray-300 p-4">Meta • TikTok</td>
                      <td className="border border-gray-300 p-4">2.6%</td>
                      <td className="border border-gray-300 p-4">2.9%</td>
                      <td className="border border-gray-300 p-4">235k</td>
                      <td className="border border-gray-300 p-4">High interest</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Private Viewing Voucher</td>
                      <td className="border border-gray-300 p-4">CRM • Meta</td>
                      <td className="border border-gray-300 p-4">3.1%</td>
                      <td className="border border-gray-300 p-4">4.2%</td>
                      <td className="border border-gray-300 p-4">205k</td>
                      <td className="border border-gray-300 p-4 text-green-700">Best closer</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">POV Sailing</td>
                      <td className="border border-gray-300 p-4">TikTok</td>
                      <td className="border border-gray-300 p-4">1.8%</td>
                      <td className="border border-gray-300 p-4">2.1%</td>
                      <td className="border border-gray-300 p-4">260k</td>
                      <td className="border border-gray-300 p-4">Top‑funnel</td>
                    </tr>
                  </tbody>
                </table>
                <div className="grid grid-cols-2 gap-6 mb-6 text-[10px]">
                  <div className="border border-gray-200 p-4 bg-[#f8f9fa]">
                    <div className="text-gray-500 uppercase tracking-widest mb-2">{tx('Phân tích nội dung', 'Content Analysis')}</div>
                    <ul className="space-y-2 text-gray-600 leading-relaxed">
                      <li><strong>Private Luxury:</strong> {tx('phù hợp nhóm high‑ticket, tăng intent.', 'fits high-ticket cohorts and lifts intent.')}</li>
                      <li><strong>Sunset/Lifestyle:</strong> {tx('kéo interest mạnh, cần retarget để chốt.', 'drives strong interest and needs retargeting for closure.')}</li>
                      <li><strong>Voucher Viewing:</strong> {tx('hiệu quả nhất ở CRM/Meta để đóng lead.', 'performs best on CRM/Meta as a closing trigger.')}</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 p-4 bg-[#f8f9fa] h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={platformIntentData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#6B7280' }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#6B7280' }} />
                        <Tooltip contentStyle={{ fontSize: '10px' }} />
                        <Bar dataKey="interest" name="Interest Index" fill="#111111" barSize={18} />
                        <Line type="monotone" dataKey="intent" name="Intent Index" stroke="#9CA3AF" strokeWidth={2} dot={{ r: 3 }} />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="text-[10px] text-gray-600 leading-relaxed">
                  <strong>{tx('Kết luận ngân sách:', 'Budget conclusion:')}</strong> {tx('Google Search được ưu tiên cao hơn vì intent mạnh và CVR tốt nhất; dù CPC cao do cạnh tranh, hiệu quả chốt lead vượt trội nên cần “đổ tiền” nhiều hơn để giữ top demand capture.', 'Google Search should be prioritized due to strongest intent and best CVR. Despite higher CPC from competition, closing efficiency is superior and justifies heavier allocation to secure top demand capture.')}
                </div>
              </A4Page>

              {/* PAGE 3: ADS BUDGET + FLIGHT PLAN */}
              <A4Page pageNumber={3} totalPages={4}>
                <h3 className="text-base font-black uppercase mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{tx('3. Kế hoạch Ads (750Tr) theo nền tảng & tháng', '3. Ads Plan (750M VND) by Platform & Month')}</h3>
                <div className="flex flex-col md:flex-row gap-8 items-center border border-gray-100 p-8 bg-gray-50 rounded-lg mb-6">
                  <div className="w-full md:w-1/2 h-56">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={adsBudgetData} cx="50%" cy="50%" innerRadius={60} outerRadius={85} paddingAngle={4} dataKey="value">
                          {adsBudgetData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="w-full md:w-1/2">
                    <table className="w-full text-xs">
                      <tbody>
                        {adsBudgetData.map((item, i) => (
                          <tr key={i} className="border-b border-gray-200">
                            <td className="py-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }}></span>
                                {item.name}
                            </td>
                            <td className="py-2 text-right font-black">{item.value}Tr</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="text-[9px] text-gray-500 mt-3 uppercase tracking-widest">FB 210Tr • IG 150Tr • Search 200Tr • Display/YT 70Tr</div>
                  </div>
                </div>

                <table className="w-full text-[10px] border-collapse border border-gray-300 mb-6">
                  <thead>
                    <tr className="bg-gray-100 uppercase tracking-wider">
                      <th className="border border-gray-300 p-3 text-left">{tx('Tháng', 'Month')}</th>
                      <th className="border border-gray-300 p-3 text-left">{tx('Tỷ trọng', 'Allocation')}</th>
                      <th className="border border-gray-300 p-3 text-left">{tx('Trọng tâm', 'Focus')}</th>
                      <th className="border border-gray-300 p-3 text-left">{tx('Ưu đãi/CTA', 'Offer/CTA')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">T4</td>
                      <td className="border border-gray-300 p-4">18% • 135Tr</td>
                      <td className="border border-gray-300 p-4">Launch awareness + intent search</td>
                      <td className="border border-gray-300 p-4">“Private Viewing”</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">T5</td>
                      <td className="border border-gray-300 p-4">22% • 165Tr</td>
                      <td className="border border-gray-300 p-4">Retargeting + lead capture</td>
                      <td className="border border-gray-300 p-4">{tx('Voucher trải nghiệm', 'Experience voucher')}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">T6</td>
                      <td className="border border-gray-300 p-4">24% • 180Tr</td>
                      <td className="border border-gray-300 p-4">Peak season conversion</td>
                      <td className="border border-gray-300 p-4">Limited slots</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">T7</td>
                      <td className="border border-gray-300 p-4">20% • 150Tr</td>
                      <td className="border border-gray-300 p-4">UGC + social proof</td>
                      <td className="border border-gray-300 p-4">Member only offer</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">T8</td>
                      <td className="border border-gray-300 p-4">16% • 120Tr</td>
                      <td className="border border-gray-300 p-4">Close season + upsell</td>
                      <td className="border border-gray-300 p-4">Upgrade package</td>
                    </tr>
                  </tbody>
                </table>

                <table className="w-full text-[10px] border-collapse border border-gray-300 mb-6">
                  <thead>
                    <tr className="bg-gray-100 uppercase tracking-wider">
                      <th className="border border-gray-300 p-3 text-left">{tx('Tệp khách', 'Audience Cluster')}</th>
                      <th className="border border-gray-300 p-3 text-left">{tx('Ngân sách', 'Budget')}</th>
                      <th className="border border-gray-300 p-3 text-left">{tx('Lý do phân bổ', 'Allocation Rationale')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">HN High‑income</td>
                      <td className="border border-gray-300 p-4">300Tr</td>
                      <td className="border border-gray-300 p-4">{tx('Search intent cao, tỉ lệ chốt tốt', 'High search intent with strong close rate')}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">HCM Premium</td>
                      <td className="border border-gray-300 p-4">240Tr</td>
                      <td className="border border-gray-300 p-4">{tx('Meta & CRM hiệu quả với ưu đãi private viewing', 'Meta & CRM performed strongly with private-viewing offers')}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">{tx('Khách quốc tế', 'International guests')}</td>
                      <td className="border border-gray-300 p-4">150Tr</td>
                      <td className="border border-gray-300 p-4">{tx('Display/YT + search tiếng Anh', 'Display/YT + English search')}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Referral/Member</td>
                      <td className="border border-gray-300 p-4">60Tr</td>
                      <td className="border border-gray-300 p-4">{tx('CRM + lookalike từ khách cũ', 'CRM + lookalike audiences from previous customers')}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="text-[10px] text-gray-600">
                  <strong>{tx('Keyword focus:', 'Keyword focus:')}</strong> {tx('“yacht charter hạ long”, “private yacht ha long”, “luxury cruise vịnh hạ long”.', '"yacht charter ha long", "private yacht ha long", "luxury cruise ha long bay".')}
                </div>
              </A4Page>

              {/* PAGE 4: MARKET CONCLUSION */}
              <A4Page pageNumber={4} totalPages={4}>
                <div className="flex flex-col h-full">
                  <h3 className="text-base font-black uppercase mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{tx('4. Kết luận & Đề xuất trình Ban điều hành', '4. Conclusion & Board-Level Recommendation')}</h3>
                  <div className="mb-8 text-xs">
                    <div className="text-[10px] font-bold uppercase mb-2">{tx('Kết luận chính', 'Key conclusion')}</div>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {tx('Dữ liệu cho thấy thông điệp “Private Luxury” tạo mức độ quan tâm và ý định đặt cao nhất trong tệp high‑ticket. Đây là trục nội dung cần giữ nhất quán xuyên kênh để tối ưu chi phí chuyển đổi. Google Search là kênh chốt lead tốt nhất vì intent rõ ràng, dù CPC cao nhưng hiệu quả cuối phễu vượt trội; do đó cần ưu tiên ngân sách để giữ vị trí top demand capture.', 'Data shows “Private Luxury” generates the strongest interest and booking intent among high-ticket audiences. This message axis should remain consistent cross-channel to optimize conversion cost. Google Search is the strongest closing channel due to clear intent; despite high CPC, funnel-end efficiency is superior and should receive budget priority for demand capture leadership.')}
                    </p>

                    <div className="text-[10px] font-bold uppercase mb-2">{tx('Rủi ro & kiểm soát', 'Risk & control')}</div>
                    <p className="text-gray-700 leading-relaxed">
                      {tx('CPC tăng do cạnh tranh mùa hè cần được kiểm soát bằng tối ưu keyword, landing và ưu tiên ngân sách cho nhóm search intent cao. Creative fatigue sau 4–6 tuần đòi hỏi lịch thay mới nội dung theo chu kỳ. Chất lượng lead biến động cần được lọc qua CRM bằng intent score để đảm bảo hiệu quả booking cuối phễu.', 'Rising CPC from summer competition must be controlled through keyword and landing optimization, with budget priority for high-intent search cohorts. Creative fatigue after 4-6 weeks requires cyclical refresh planning. Lead quality variance should be filtered in CRM via intent scoring to protect lower-funnel booking efficiency.')}
                    </p>
                  </div>

                  <div className="border border-gray-200 p-5 bg-white mb-8">
                    <div className="text-[10px] font-black uppercase tracking-widest mb-3">{tx('Đề xuất cuối cùng (Board Approval)', 'Final Recommendation (Board Approval)')}</div>
                    <div className="grid grid-cols-3 gap-4 text-[10px]">
                      <div className="border border-gray-200 p-3 bg-[#f8f9fa]">
                        <div className="text-gray-500 uppercase tracking-widest">{tx('Ưu tiên ngân sách', 'Budget priority')}</div>
                        <div className="text-lg font-black text-black">Google 36%</div>
                        <div className="text-gray-400">{tx('Giữ top intent capture', 'Keep top intent capture')}</div>
                      </div>
                      <div className="border border-gray-200 p-3 bg-[#f8f9fa]">
                        <div className="text-gray-500 uppercase tracking-widest">{tx('Thông điệp lõi', 'Core message')}</div>
                        <div className="text-lg font-black text-black">Private Luxury</div>
                        <div className="text-gray-400">{tx('Giữ nhất quán đa kênh', 'Maintain cross-channel consistency')}</div>
                      </div>
                      <div className="border border-gray-200 p-3 bg-[#f8f9fa]">
                        <div className="text-gray-500 uppercase tracking-widest">{tx('Thời điểm', 'Timing')}</div>
                        <div className="text-lg font-black text-black">T4–T8</div>
                        <div className="text-gray-400">Peak demand season</div>
                      </div>
                    </div>
                    <div className="mt-4 text-xs text-gray-700">
                      <strong>{tx('Khuyến nghị:', 'Recommendation:')}</strong> {tx('Phê duyệt kế hoạch ads 750Tr với trọng tâm Google Search, triển khai creative theo chu kỳ 4 tuần và retarget 2 tầng (interest → lead).', 'Approve the 750M VND ads plan with Google Search as core engine, 4-week creative refresh cycles, and two-layer retargeting (interest -> lead).')}
                    </div>
                  </div>

                  <ReportClosing
                    title={tx('Kết luận vận hành', 'Operational Conclusion')}
                    summary={tx('Tổng thể kế hoạch growth nên xoay quanh intent mạnh của Google Search, vai trò nuôi dưỡng nhu cầu của Meta và lớp retargeting đủ sát để biến interest thành lead chất lượng. Khi thông điệp, ngân sách và chu kỳ làm mới creative được giữ đúng kỷ luật, hiệu quả cuối phễu sẽ ổn định hơn và dễ mở rộng ở mùa cao điểm.', 'The growth plan should center on strong Google Search intent, Meta’s demand-nurturing role, and tight retargeting to convert interest into qualified leads. When messaging, budget, and creative refresh discipline stay aligned, lower-funnel performance becomes more stable and scalable in peak season.')}
                  />
                </div>
              </A4Page>

              <div className="max-w-[210mm] mx-auto w-full mt-4">
                <div className="text-[9px] font-black text-gray-500 uppercase tracking-[0.4em] mb-2">Phase 02 — 5‑Month Campaign Result (Post‑launch)</div>
              </div>

              {/* PAGE 4: COST RESULT */}
              <A4Page pageNumber={1} totalPages={3}>
                <div className="text-center mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none italic">Ads Performance Report</h1>
                  <h2 className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.3em] mt-3">Objective: evaluate spend efficiency & conversion outcome</h2>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8 text-xs border-y border-black/10 py-4 font-medium">
                  <div><span className="font-bold">{tx('Dự án:', 'Project:')}</span> Aurelia Yachts (Luxury Charter)</div>
                  <div><span className="font-bold">{tx('Giai đoạn:', 'Phase:')}</span> {tx('Sau chiến dịch (T+150)', 'Post-campaign (T+150)')}</div>
                  <div><span className="font-bold">{tx('Thời gian đo:', 'Measurement period:')}</span> 01/04 – 31/08</div>
                  <div><span className="font-bold">{tx('Mục tiêu:', 'Objective:')}</span> {tx('Đánh giá hiệu quả chi tiêu & chuyển đổi', 'Evaluate spend efficiency & conversion outcomes')}</div>
                </div>

                <h3 className="text-base font-black uppercase mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{tx('1. Thực chi & Hiệu quả ngân sách', '1. Actual Spend & Budget Efficiency')}</h3>
                <table className="w-full text-[10px] border-collapse border border-gray-300 mb-6">
                  <thead>
                    <tr className="bg-gray-100 uppercase tracking-wider">
                      <th className="border border-gray-300 p-3 text-left">{tx('Hạng mục', 'Category')}</th>
                      <th className="border border-gray-300 p-3 text-left">{tx('Thực chi', 'Actual Spend')}</th>
                      <th className="border border-gray-300 p-3 text-left">{tx('Hiệu quả', 'Performance')}</th>
                      <th className="border border-gray-300 p-3 text-left">{tx('Ghi chú', 'Notes')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Media Production</td>
                      <td className="border border-gray-300 p-4 font-bold text-black">400Tr</td>
                      <td className="border border-gray-300 p-4">{tx('+18% CTR so với baseline', '+18% CTR vs baseline')}</td>
                      <td className="border border-gray-300 p-4">{tx('Hero video + 24 assets tối ưu hook', 'Hero video + 24 assets optimized for hook quality')}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Ads (Meta/Google)</td>
                      <td className="border border-gray-300 p-4 font-bold text-black">750Tr</td>
                      <td className="border border-gray-300 p-4">CPA TB 235k • CTR 2.2%</td>
                      <td className="border border-gray-300 p-4">{tx('Meta đóng góp 62% lead chất lượng', 'Meta contributed 62% of qualified leads')}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">KOC & PR</td>
                      <td className="border border-gray-300 p-4 font-bold text-black">200Tr</td>
                      <td className="border border-gray-300 p-4">+32% brand search uplift</td>
                      <td className="border border-gray-300 p-4">6 PR + 4 KOC trips</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">{tx('Vận hành/Tech', 'Operations/Tech')}</td>
                      <td className="border border-gray-300 p-4 font-bold text-black">150Tr</td>
                      <td className="border border-gray-300 p-4">{tx('+21% CVR nhờ CRM automation', '+21% CVR from CRM automation')}</td>
                      <td className="border border-gray-300 p-4">CRM, tracking, automation</td>
                    </tr>
                  </tbody>
                </table>

                <div className="text-xs text-gray-600 leading-relaxed space-y-2">
                  <p><strong>{tx('Kết quả tổng:', 'Total outcome:')}</strong> 6,420 leads • 28% qualified • 420 bookings intent.</p>
                  <p><strong>{tx('Hiệu quả chi phí:', 'Cost efficiency:')}</strong> {tx('CPA giảm 12% so với kỳ trước nhờ tối ưu hook & retargeting.', 'CPA decreased 12% vs prior period through hook and retargeting optimization.')}</p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-6 text-[10px]">
                  <div className="border border-gray-200 p-4 bg-[#f8f9fa] h-44">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={phase2SpendVsPlan}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#6B7280' }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#6B7280' }} />
                        <Tooltip contentStyle={{ fontSize: '10px' }} />
                        <Bar dataKey="plan" name="Plan" fill="#9CA3AF" barSize={12} />
                        <Bar dataKey="actual" name="Actual" fill="#111111" barSize={12} />
                        <Legend wrapperStyle={{ fontSize: '9px' }} />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="border border-gray-200 p-4 bg-[#f8f9fa]">
                    <div className="text-[10px] font-black uppercase tracking-widest mb-2">{tx('Phân tích chi tiêu', 'Spend analysis')}</div>
                    <ul className="space-y-2 text-gray-700 leading-relaxed">
                      <li>{tx('Google vượt plan do intent cao, ưu tiên giữ top search.', 'Google exceeded plan due to high intent; priority remains top search coverage.')}</li>
                      <li>{tx('Meta chi thấp hơn plan nhưng lead quality giữ ổn định.', 'Meta spend was below plan while lead quality remained stable.')}</li>
                      <li>{tx('TikTok giảm nhẹ vì CPA cao ở nhóm broad.', 'TikTok was reduced due to high CPA in broad audiences.')}</li>
                      <li>{tx('CRM tăng do retargeting hiệu quả với tệp cũ.', 'CRM increased because retargeting performed strongly on existing cohorts.')}</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-[10px] font-black uppercase tracking-widest mb-3">{tx('So sánh với đề xuất ban đầu', 'Comparison vs Initial Proposal')}</div>
                  <table className="w-full text-[10px] border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100 uppercase tracking-wider">
                        <th className="border border-gray-300 p-3 text-left">{tx('Chỉ số', 'Metric')}</th>
                        <th className="border border-gray-300 p-3 text-left">{tx('Đề xuất', 'Proposed')}</th>
                        <th className="border border-gray-300 p-3 text-left">{tx('Thực tế', 'Actual')}</th>
                        <th className="border border-gray-300 p-3 text-left">{tx('Kết luận', 'Result')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-4 font-bold">{tx('CPA trung bình', 'Average CPA')}</td>
                        <td className="border border-gray-300 p-4">250k</td>
                        <td className="border border-gray-300 p-4">235k</td>
                        <td className="border border-gray-300 p-4 text-green-700">{tx('Tốt hơn 6%', '6% better')}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-bold">{tx('CTR tổng', 'Total CTR')}</td>
                        <td className="border border-gray-300 p-4">2.0%</td>
                        <td className="border border-gray-300 p-4">2.2%</td>
                        <td className="border border-gray-300 p-4 text-green-700">{tx('Vượt kỳ vọng', 'Above expectation')}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-bold">{tx('Lead chất lượng', 'Qualified leads')}</td>
                        <td className="border border-gray-300 p-4">25%</td>
                        <td className="border border-gray-300 p-4">28%</td>
                        <td className="border border-gray-300 p-4 text-green-700">{tx('Tăng +3pt', 'Up +3pt')}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-bold">Booking intent</td>
                        <td className="border border-gray-300 p-4">380</td>
                        <td className="border border-gray-300 p-4">420</td>
                        <td className="border border-gray-300 p-4 text-green-700">{tx('Vượt 10%', 'Above by 10%')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </A4Page>

              {/* PAGE 5: CREATIVE PERFORMANCE REPORT */}
              <A4Page pageNumber={2} totalPages={3}>

                <h3 className="text-base font-black uppercase mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{tx('2. Hiệu quả thông điệp & mức độ quan tâm', '2. Message Effectiveness & Interest Quality')}</h3>
                <div className="grid grid-cols-3 gap-4 mb-6 text-[10px]">
                  <div className="border border-gray-200 p-4 bg-[#f8f9fa]">
                    <div className="text-gray-500 uppercase tracking-widest">{tx('Tổng chi phí', 'Total spend')}</div>
                    <div className="text-xl font-black text-black">1.5T</div>
                    <div className="text-gray-400">{tx('Thực chi 5 tháng', 'Actual over 5 months')}</div>
                  </div>
                  <div className="border border-gray-200 p-4 bg-[#f8f9fa]">
                    <div className="text-gray-500 uppercase tracking-widest">CPA TB</div>
                    <div className="text-xl font-black text-black">235k</div>
                    <div className="text-gray-400">{tx('Cải thiện 12%', '12% improvement')}</div>
                  </div>
                  <div className="border border-gray-200 p-4 bg-[#f8f9fa]">
                    <div className="text-gray-500 uppercase tracking-widest">Interest Rate</div>
                    <div className="text-xl font-black text-black">3.1%</div>
                    <div className="text-gray-400">Engagement → lead</div>
                  </div>
                </div>
                <table className="w-full text-[10px] border-collapse border border-gray-300 mb-6">
                  <thead>
                    <tr className="bg-gray-100 uppercase tracking-wider">
                      <th className="border border-gray-300 p-3 text-left">Creative</th>
                      <th className="border border-gray-300 p-3 text-left">Format</th>
                      <th className="border border-gray-300 p-3 text-left">Hook</th>
                      <th className="border border-gray-300 p-3 text-left">CTR</th>
                      <th className="border border-gray-300 p-3 text-left">CVR</th>
                      <th className="border border-gray-300 p-3 text-left">CPA</th>
                      <th className="border border-gray-300 p-3 text-left">{tx('Kết luận', 'Conclusion')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Sunrise Ha Long</td>
                      <td className="border border-gray-300 p-4">Video 30s</td>
                      <td className="border border-gray-300 p-4">“Luxury Morning Escape”</td>
                      <td className="border border-gray-300 p-4">2.4%</td>
                      <td className="border border-gray-300 p-4">3.2%</td>
                      <td className="border border-gray-300 p-4">210k</td>
                      <td className="border border-gray-300 p-4 font-bold text-green-700">Winner</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Private Deck Dining</td>
                      <td className="border border-gray-300 p-4">Carousel</td>
                      <td className="border border-gray-300 p-4">“Fine Dining on Water”</td>
                      <td className="border border-gray-300 p-4">2.1%</td>
                      <td className="border border-gray-300 p-4">2.7%</td>
                      <td className="border border-gray-300 p-4">235k</td>
                      <td className="border border-gray-300 p-4 text-green-700">High intent</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Yacht Interior Tour</td>
                      <td className="border border-gray-300 p-4">Video 15s</td>
                      <td className="border border-gray-300 p-4">“See Every Detail”</td>
                      <td className="border border-gray-300 p-4">1.9%</td>
                      <td className="border border-gray-300 p-4">2.6%</td>
                      <td className="border border-gray-300 p-4">248k</td>
                      <td className="border border-gray-300 p-4">Stable</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Sunset Party</td>
                      <td className="border border-gray-300 p-4">UGC Reel</td>
                      <td className="border border-gray-300 p-4">“Private Event Vibes”</td>
                      <td className="border border-gray-300 p-4">2.6%</td>
                      <td className="border border-gray-300 p-4">3.0%</td>
                      <td className="border border-gray-300 p-4">225k</td>
                      <td className="border border-gray-300 p-4 font-bold text-green-700">Winner</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Family Retreat</td>
                      <td className="border border-gray-300 p-4">Static</td>
                      <td className="border border-gray-300 p-4">“Peaceful Luxury”</td>
                      <td className="border border-gray-300 p-4">1.4%</td>
                      <td className="border border-gray-300 p-4">2.1%</td>
                      <td className="border border-gray-300 p-4">295k</td>
                      <td className="border border-gray-300 p-4 text-orange-600">Need refresh</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Skyline Night</td>
                      <td className="border border-gray-300 p-4">Video 6s</td>
                      <td className="border border-gray-300 p-4">“Exclusive Night Cruise”</td>
                      <td className="border border-gray-300 p-4">2.2%</td>
                      <td className="border border-gray-300 p-4">2.8%</td>
                      <td className="border border-gray-300 p-4">230k</td>
                      <td className="border border-gray-300 p-4">Scale next</td>
                    </tr>
                  </tbody>
                </table>

                <div className="grid grid-cols-2 gap-6 mb-6 text-[10px]">
                  <div className="border border-gray-200 p-4 bg-[#f8f9fa] h-44">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={phase2ChannelPerf}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#6B7280' }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#6B7280' }} />
                        <Tooltip contentStyle={{ fontSize: '10px' }} />
                        <Bar dataKey="ctr" name="CTR" fill="#111111" barSize={12} />
                        <Line type="monotone" dataKey="cvr" name="CVR" stroke="#9CA3AF" strokeWidth={2} dot={{ r: 2 }} />
                        <Legend wrapperStyle={{ fontSize: '9px' }} />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="border border-gray-200 p-4 bg-[#f8f9fa]">
                    <div className="text-[10px] font-black uppercase tracking-widest mb-2">{tx('Phân tích hiệu quả kênh', 'Channel performance analysis')}</div>
                    <ul className="space-y-2 text-gray-700 leading-relaxed">
                      <li>{tx('Google có CTR/CVR tốt nhất, xứng đáng giữ ngân sách trọng tâm.', 'Google delivered strongest CTR/CVR and should keep budget priority.')}</li>
                      <li>{tx('CRM hiệu quả cao nhất ở CPA, phù hợp nhóm khách cũ.', 'CRM achieved best CPA efficiency, especially in returning cohorts.')}</li>
                      <li>{tx('Meta giữ ổn định, cần tối ưu creative để giảm CPA.', 'Meta remained stable but needs creative optimization to reduce CPA.')}</li>
                      <li>{tx('TikTok hiệu quả thấp hơn, nên dùng để nuôi interest.', 'TikTok underperformed in conversion and should stay focused on top-funnel interest.')}</li>
                    </ul>
                  </div>
                </div>

                <div className="text-xs text-gray-600 leading-relaxed space-y-2">
                  <p><strong>Insight 01:</strong> {tx('Thông điệp “private luxury + view độc bản” tạo mức độ quan tâm cao nhất.', 'The “private luxury + signature view” message generated the highest interest level.')}</p>
                  <p><strong>Insight 02:</strong> {tx('TikTok thúc đẩy interest, Meta chốt lead mạnh nhất khi retarget.', 'TikTok drove interest while Meta closed leads most effectively during retargeting.')}</p>
                  <p><strong>Insight 03:</strong> {tx('UGC‑style reel giúp giảm CPA ~10% nhờ cảm giác chân thực.', 'UGC-style reels reduced CPA by ~10% due to higher authenticity perception.')}</p>
                </div>

              </A4Page>

              {/* PAGE 6: CONCLUSION & RECOMMENDATION */}
              <A4Page pageNumber={3} totalPages={3}>
                <div className="flex flex-col h-full">
                  <h3 className="text-base font-black uppercase mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{tx('3. Kết luận & đề xuất cuối kỳ', '3. Final Conclusion & Recommendations')}</h3>
                  <p className="text-gray-700 text-xs leading-relaxed mb-4">
                    {tx('Tổng thể chiến dịch đạt hiệu quả tốt hơn so với đề xuất ban đầu: CPA giảm 6%, CTR tăng 0.2 điểm, tỷ lệ lead chất lượng tăng 3 điểm và booking intent vượt 10%. Điều này xác nhận trục thông điệp “Private Luxury” là đúng hướng cho nhóm khách high‑ticket, đồng thời khẳng định Google Search là kênh chốt lead mạnh nhất trong mùa cao điểm.', 'Overall campaign results outperformed initial projection: CPA down 6%, CTR up 0.2 points, qualified lead rate up 3 points, and booking intent above target by 10%. This confirms the “Private Luxury” axis for high-ticket cohorts and reinforces Google Search as the strongest closing channel in peak season.')}
                  </p>
                  <p className="text-gray-700 text-xs leading-relaxed mb-4">
                    {tx('Meta giữ vai trò tạo nhu cầu và nuôi dưỡng quan tâm, nhưng hiệu quả phụ thuộc lớn vào chu kỳ làm mới creative. TikTok cho thấy khả năng tạo interest tốt nhưng CPA cao khi mở rộng tệp broad, vì vậy chỉ nên dùng như kênh top‑funnel và đẩy retarget sang Meta/Google.', 'Meta remains strong for demand creation and nurturing, but performance depends heavily on creative refresh cadence. TikTok can generate interest but CPA rises with broad expansion, so it should stay top-funnel while retargeting shifts to Meta/Google.')}
                  </p>
                  <p className="text-gray-700 text-xs leading-relaxed mb-8">
                    <strong>{tx('Đề xuất:', 'Recommendation:')}</strong> {tx('Duy trì phân bổ ngân sách ưu tiên cho Google và CRM, cập nhật creative Meta theo chu kỳ 4 tuần, giới hạn TikTok ở nội dung trải nghiệm/POV để tạo interest. Tập trung mùa cao điểm T4–T8, nhưng vẫn giữ always‑on cho nhóm khách premium có hành vi quyết định dài hơn.', 'Maintain budget priority for Google and CRM, refresh Meta creatives every 4 weeks, and keep TikTok focused on experiential/POV interest generation. Focus hard on Apr-Aug peak season while keeping always-on coverage for premium cohorts with longer decision cycles.')}
                  </p>

                  <ReportClosing
                    title={tx('Kết luận vận hành', 'Operational Conclusion')}
                    summary={tx('Báo cáo sau chiến dịch cho thấy hệ growth hoạt động tốt nhất khi ngân sách được dồn cho nhóm kênh có intent rõ, creative được thay mới đúng chu kỳ và CRM tiếp nhận lead đủ nhanh để chốt cuối phễu. Vòng tối ưu tiếp theo nên tiếp tục giữ trục thông điệp hiện tại, siết chặt top-performing channels và giảm chi cho các nhóm tạo interest nhưng không chuyển đổi đủ tốt.', 'Post-campaign reporting confirms growth performs best when budget is concentrated on clear-intent channels, creative is refreshed on schedule, and CRM captures leads fast enough to close at the funnel bottom. The next optimization cycle should retain the current message axis, tighten top-performing channels, and reduce spend on interest-only segments with weak conversion yield.')}
                  />
                </div>
              </A4Page>

            </div>
            
            <ContentPager
              prev={{
                to: '/content-creation-design',
                title: 'Content & Design',
                description: 'Review the visual system and creative logic that feeds campaign execution.'
              }}
              next={{
                to: '/automation-crm',
                title: 'Automation & CRM',
                description: 'Continue into lead routing, response logic, and CRM governance.'
              }}
            />
          </section>

          <SiteFooter />
        </div>
      </PageTransition>
    </>
  );
};

export default OrganicPaidGrowth;
