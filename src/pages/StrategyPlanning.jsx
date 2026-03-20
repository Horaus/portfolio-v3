import React from 'react';
import Header from '../components/layout/Header';
import PageTransition from '../components/layout/PageTransition';
import ContentPager from '../components/layout/ContentPager';
import SiteFooter from '../components/layout/SiteFooter';
import ReportClosing from '../components/layout/ReportClosing';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { useLang } from '../hooks/useLang';

const budgetData = [
  { key: 'media', vi: 'Media Production', en: 'Media Production', value: 400 },
  { key: 'ads', vi: 'Ads (Meta/Google)', en: 'Ads (Meta/Google)', value: 750 },
  { key: 'koc', vi: 'KOC & PR', en: 'KOC & PR', value: 200 },
  { key: 'ops', vi: 'Vận hành/Tech', en: 'Operations/Tech', value: 150 },
];
const COLORS = ['#000000', '#4B5563', '#9CA3AF', '#D1D5DB'];

const seasonalityData = [
  { name: 'Jan-Mar', booking: 20, search: 100 },
  { name: 'Apr', booking: 60, search: 250 },
  { name: 'May', booking: 80, search: 350 },
  { name: 'Jun', booking: 95, search: 450 },
  { name: 'Jul', booking: 90, search: 400 },
  { name: 'Aug', booking: 70, search: 300 },
  { name: 'Sep-Dec', booking: 30, search: 150 },
];

const kpiData = [
  { name: 'Reach', value: 350, target: 400 },
  { name: 'Leads', value: 92, target: 100 },
  { name: 'Revenue', value: 120, target: 150 },
];

const A4Page = ({ children, pageNumber, totalPages }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-50px" }}
    className="report-a4 bg-white text-black shadow-2xl w-full max-w-[210mm] min-h-[297mm] mx-auto mb-2 py-12 px-[70px] md:py-16 md:px-[100px] relative flex flex-col rounded-sm border border-gray-200"
    style={{ fontFamily: "'Inter', sans-serif" }}
  >
    {/* Page Header */}
    <div className="flex justify-between items-start border-b border-black pb-5 mb-10">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black text-lg">A</div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <h3 className="text-[11px] sm:text-[13px] font-black uppercase tracking-[0.2em] text-black">Aurelia Strategy Board</h3>
          <p className="text-[8px] text-gray-400 uppercase font-bold tracking-widest mt-1">Document ID: AZ-2026-NATIONAL-CAMPAIGN</p>
        </div>
      </div>
      <div className="text-right">
        <span className="text-[8px] font-black border-2 border-black px-2 py-1 tracking-tighter text-black bg-gray-50" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>CONFIDENTIAL / BOARD ONLY</span>
      </div>
    </div>

    {/* Content Area */}
    <div className="flex-grow text-[13px] leading-[1.7] text-gray-900">
      {children}
    </div>

    {/* Page Footer */}
    <div className="mt-10 pt-5 border-t border-black/10 flex justify-between items-center text-[9px] font-black text-gray-400 uppercase tracking-[0.3em]">
      <div>Aurelia Yachts Strategy — 2026</div>
      <div>Page {pageNumber} of {totalPages}</div>
    </div>
  </motion.div>
);

const StrategyPlanning = () => {
  const { lang } = useLang();
  const isEn = lang === 'en';
  const tx = (vi, en) => (isEn ? en : vi);
  const budgetRows = budgetData.map((item) => ({
    ...item,
    name: isEn ? item.en : item.vi,
  }));

  return (
    <>
      <Header />
      <PageTransition>
        <div className="bg-darkBg min-h-screen pt-24 pb-0 overflow-x-hidden">
          
          {/* SECTION 1: STRATEGY OVERVIEW */}
          <section className="px-6 md:px-12 max-w-6xl mx-auto mb-24 pt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 leading-tight text-white italic">
                Growth Strategy <br/><span className="text-gray-500 text-2xl md:text-4xl italic lowercase">Strategy & Planning.</span>
              </h1>
              <p className="text-gray-500 text-[11px] md:text-xs max-w-2xl mx-auto border-t border-white/10 pt-8 mt-4 leading-relaxed italic uppercase tracking-widest">
                {tx(
                  '"Marketing hiệu quả bắt đầu từ việc thấu hiểu con người. Chúng tôi không xây dựng chiến dịch dựa trên cảm tính, mà dựa trên sự kết hợp giữa tư duy định tính sắc bén và công nghệ hiện đại."',
                  '"Effective marketing begins with human understanding. We do not build campaigns on assumptions, but on sharp qualitative thinking and modern technology."'
                )}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-3 space-y-8">
                <h2 className="text-xl font-bold uppercase tracking-[0.3em] flex items-center gap-4 text-white">
                  <span className="w-8 h-px bg-accent"></span> Mindset & Core Role
                </h2>
                
                <div className="text-gray-400 text-sm leading-relaxed space-y-6 text-justify">
                  <p>
                    {tx(
                      'Trong kỷ nguyên số, dữ liệu là vô tận nhưng Insight thì hữu hạn. Làm ',
                      'In the digital era, data is infinite but insight is scarce. '
                    )}
                    <strong>Strategy & Planning</strong>
                    {tx(
                      ' là tầng nền tảng trong cách chúng tôi tiếp cận Full-stack Marketing. Thay vì xây dựng chiến dịch chạy theo bề nổi, chúng tôi ưu tiên phương pháp ',
                      ' is the foundation layer of our full-stack marketing approach. Instead of surface-level campaign execution, we prioritize '
                    )}
                    <strong>Qualitative Research</strong>
                    {tx(' (Nghiên cứu định tính) kết hợp với ', ' combined with ')}
                    <strong>AI Accelerators</strong>
                    {tx(' để bóc tách thế giới quan của khách hàng.', ' to decode customer worldviews with precision.')}
                  </p>
                  
                  <p>
                    {tx(
                      'Ở mỗi dự án, chúng tôi bắt đầu bằng việc đóng vai trò là "người đi giải mã" qua 4 lăng kính cốt lõi:',
                      'In every project, we start as strategic decoders through four core lenses:'
                    )}
                  </p>
                </div>

                <ul className="space-y-4 text-sm">
                  <li className="flex gap-5 group">
                    <div className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="text-gray-400 leading-snug">
                      <strong className="text-white uppercase tracking-widest text-xs block mb-1">Fundamental Problem:</strong> {tx('Thương hiệu này đang giải quyết nỗi đau gì, cho ai?', 'What pain point is this brand solving, and for whom?')}
                    </div>
                  </li>
                  <li className="flex gap-5 group">
                    <div className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="text-gray-400 leading-snug">
                      <strong className="text-white uppercase tracking-widest text-xs block mb-1">Psychological Journey:</strong> {tx('Phác họa Empathy Mapping & Deep Interview để tìm ra rào cản thực sự.', 'Map empathy and deep interviews to uncover real barriers.' )}
                    </div>
                  </li>
                  <li className="flex gap-5 group">
                    <div className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="text-gray-400 leading-snug">
                      <strong className="text-white uppercase tracking-widest text-xs block mb-1">Measurement Goals:</strong> {tx('Con số nào định nghĩa định mức thành công của chiến dịch?', 'Which numbers define campaign success thresholds?')}
                    </div>
                  </li>
                  <li className="flex gap-5 group">
                    <div className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="text-gray-400 leading-snug">
                      <strong className="text-white uppercase tracking-widest text-xs block mb-1">Resource Optimization:</strong> {tx('Ngân sách sẽ được phân bổ ra sao để đạt ROI cao nhất?', 'How should budget be allocated to maximize ROI?')}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2 bg-white/5 p-8 rounded-2xl border border-white/10 relative group hover:border-accent/40 transition-all shadow-2xl">
                <div className="absolute top-6 right-8 text-accent/10 select-none pointer-events-none group-hover:text-accent/20 transition-colors">
                   <span className="text-8xl font-black italic">s</span>
                </div>

                <h3 className="text-[12px] font-black mb-6 text-accent uppercase tracking-[0.4em] flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div> Framework Layer 01
                </h3>
                
                <div className="space-y-4 relative z-10">
                  <div className="bg-black/40 p-5 rounded-xl border border-white/5 group-hover:bg-black/60 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                       <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                       <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Market Intel</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed uppercase">{tx('Phân tích 1,000+ từ khóa & xu hướng thị trường mùa cao điểm.', 'Analyze 1,000+ keywords and peak-season market dynamics.')}</p>
                  </div>

                  <div className="bg-black/40 p-5 rounded-xl border border-white/5 group-hover:bg-black/60 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                       <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path></svg>
                       <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Sentiment AI</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed uppercase">{tx('Audit cảm xúc khách hàng qua các mạng xã hội du lịch.', 'Audit customer sentiment across travel and lifestyle social channels.')}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex justify-between gap-2 grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100">
                  <div className="text-[9px] font-black text-white px-2 py-1 border border-white/20">CLAUDE</div>
                  <div className="text-[9px] font-black text-white px-2 py-1 border border-white/20">MAKE</div>
                  <div className="text-[9px] font-black text-white px-2 py-1 border border-white/20">HUB</div>
                  <div className="text-[9px] font-black text-white px-2 py-1 border border-white/20">PER</div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: THE A4 REPORT SHOWCASE */}
          <section className="report-section bg-[#f8f9fa] pt-20 pb-24 px-4 overflow-hidden shadow-inner" id="report-section">
            <div className="text-center mb-16">
              <span className="text-gray-400 text-[9px] font-black tracking-[0.5em] uppercase mb-4 block">Strategic Portfolio v2.0</span>
              <h2 className="text-3xl font-black text-black uppercase tracking-tighter shadow-sm inline-block">Growth Strategy Report</h2>
            </div>

            <div className="flex flex-col gap-3">
              
              {/* PAGE 1: COVER & SEASONALITY */}
              <A4Page pageNumber={1} totalPages={7}>
                <div className="mb-14 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <h1 className="text-[44px] font-black uppercase mb-4 tracking-tighter leading-none italic">Endless Summer Campaign</h1>
                  <h2 className="text-[14px] font-bold text-gray-400 uppercase tracking-[0.3em]">National Market Entry Strategy</h2>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-12 text-[11px] border-y-2 border-black py-8 font-black uppercase tracking-wider bg-gray-50 px-6">
                  <div><span className="text-gray-400">{tx('Dự án:', 'Project:')}</span> Aurelia Yachts (Service Brand)</div>
                  <div><span className="text-gray-400">{tx('Thời gian:', 'Timeline:')}</span> {tx('10 tháng (01/04 – 31/01)', '10 months (Apr 01 - Jan 31)')}</div>
                  <div><span className="text-gray-400">{tx('Ngân sách:', 'Budget:')}</span> 1.500.000.000 VNĐ</div>
                  <div><span className="text-gray-400">Target:</span> National Market Entry</div>
                </div>

                <h3 className="text-xl font-black uppercase mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{tx('I. Bối cảnh thị trường & Mùa vụ', 'I. Market Context & Seasonality')}</h3>
                <div className="space-y-6">
                    <p className="text-justify italic border-l-4 border-black pl-5 py-2 bg-gray-50">
                        {tx(
                          '"Khách hàng HNWI tại Việt Nam đang dịch chuyển từ việc sở hữu tài sản sang trải nghiệm lối sống đặc quyền (Experiential Luxury). Đây là \'Thời điểm vàng\' để Aurelia Yachts trở thành sự lựa chọn bảo chứng."',
                          '"Vietnamese HNWI audiences are shifting from asset ownership to experiential luxury. This is the strategic window for Aurelia Yachts to become the trusted benchmark."'
                        )}
                    </p>
                    
                    <div className="my-8 border border-gray-100 p-8 bg-[#ffffff] h-64 rounded-xl shadow-lg">
                        <ResponsiveContainer width="100%" height="100%">
                          <ComposedChart data={seasonalityData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold', fill: '#000000' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6B7280' }} />
                            <Tooltip contentStyle={{ fontSize: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                            <Bar dataKey="booking" name="Booking Demand" fill="#000000" barSize={20} radius={[4, 4, 0, 0]} />
                            <Line type="monotone" dataKey="search" name="Search Index" stroke="#9CA3AF" strokeWidth={3} dot={{ r: 4, fill: '#000000' }} />
                          </ComposedChart>
                        </ResponsiveContainer>
                        <p className="text-[8px] text-center text-gray-400 mt-4 uppercase font-black tracking-[0.3em]">{tx('Fig 1.1: Trực quan hóa nhu cầu đặt chỗ & Xu hướng tìm kiếm 2026', 'Fig 1.1: Booking Demand & Search Trend Visualization 2026')}</p>
                    </div>
                </div>
              </A4Page>

              {/* PAGE 2: MULTI-LOCATION STRATEGY */}
              <A4Page pageNumber={2} totalPages={7}>
                <h3 className="text-xl font-black uppercase mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{tx('II. Chiến lược Điểm đến Đa miền', 'II. Multi-Destination Strategy')}</h3>
                <p className="mb-8 text-justify">
                    {tx(
                      'Trong khung triển khai 10 tháng (01/04 – 31/01), ngân sách 1.5 Tỷ VNĐ được phân kỳ theo mùa đẹp của từng vùng biển: miền Bắc giai đoạn nắng đẹp đầu mùa, miền Trung vào mùa biển ổn định, và miền Nam đảo khi vào cao điểm mùa khô.',
                      'Within a 10-month rollout (Apr 01 - Jan 31), the 1.5B VND budget is staged around each region’s best sailing window: Northern bays in early sunshine season, Central coast in stable sea months, and Southern islands during dry-season peak.'
                    )}
                </p>

                <table className="w-full text-xs border-collapse border-2 border-black mb-12 shadow-xl">
                  <thead>
                    <tr className="bg-black text-white uppercase tracking-widest font-black">
                      <th className="p-4 text-left border border-white/20">{tx('Vùng biển', 'Coastal Cluster')}</th>
                      <th className="p-4 text-left border border-white/20">{tx('Thời điểm', 'Timing')}</th>
                      <th className="p-4 text-left border border-white/20">{tx('Ngân sách', 'Budget')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-200 p-5">
                          <span className="font-black block uppercase">Hạ Long - Lan Hạ</span>
                          <span className="text-[10px] text-gray-400">{tx('Focus: Tệp khách Hà Nội', 'Focus: Hanoi audience')}</span>
                      </td>
                      <td className="border border-gray-200 p-5 font-bold">{tx('Tháng 4 - 5', 'Apr - May')}</td>
                      <td className="border border-gray-200 p-5 font-black text-lg">450Tr</td>
                    </tr>
                    <tr className="bg-gray-50/50 hover:bg-gray-100 transition-colors">
                      <td className="border border-gray-200 p-5">
                          <span className="font-black block uppercase">Nha Trang - Đà Nẵng</span>
                          <span className="text-[10px] text-gray-400">{tx('Focus: Miền Trung & Quốc tế', 'Focus: Central Vietnam & International')}</span>
                      </td>
                      <td className="border border-gray-200 p-5 font-bold">{tx('Tháng 6 - 8', 'Jun - Aug')}</td>
                      <td className="border border-gray-200 p-5 font-black text-lg">550Tr</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-200 p-5">
                          <span className="font-black block uppercase">Phú Quốc - Vũng Tàu</span>
                          <span className="text-[10px] text-gray-400">{tx('Focus: Tệp khách Miền Nam', 'Focus: Southern audience')}</span>
                      </td>
                      <td className="border border-gray-200 p-5 font-bold">{tx('Tháng 11 - 1', 'Nov - Jan')}</td>
                      <td className="border border-gray-200 p-5 font-black text-lg">500Tr</td>
                    </tr>
                  </tbody>
                </table>

                <div className="p-8 bg-[#111] text-white rounded-2xl relative overflow-hidden group">
                   <div className="absolute right-[-20px] top-[-20px] text-white/5 font-black text-9xl italic pointer-events-none group-hover:text-white/10 transition-colors">77</div>
                   <h4 className="text-xs font-black uppercase mb-4 text-accent tracking-widest flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> {tx('Tại sao chọn đa điểm đến?', 'Why a multi-destination model?')}
                   </h4>
                   <p className="text-[11px] leading-relaxed opacity-70 mb-4 text-justify">
                       {tx(
                         'Triển khai luân phiên theo mùa đẹp giúp Aurelia giữ độ phủ thương hiệu xuyên suốt từ T4 đến T1 năm sau, đồng thời giảm rủi ro “đốt ngân sách” vào tháng thời tiết bất lợi. Khi một vùng giảm hiệu quả ngắn hạn, ngân sách được điều hướng linh hoạt giữa các cụm điểm đến qua cơ chế ',
                         'Rotating by prime seasons keeps Aurelia’s brand visibility active from Apr through Jan while reducing waste during low-weather windows. When one cluster underperforms short-term, budget is flexibly re-routed across destination groups through '
                       )}
                       <strong>Dynamic Budgeting</strong>.
                   </p>
                </div>
              </A4Page>

              {/* PAGE 3: INDUSTRY ANALYSIS */}
              <A4Page pageNumber={3} totalPages={7}>
                 <h3 className="text-xl font-black uppercase mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{tx('III. Phân tích Ngành & Đối thủ', 'III. Industry & Competitor Analysis')}</h3>
                 <div className="grid grid-cols-1 gap-8 mb-12">
                    <div className="p-6 border border-gray-200 bg-gray-50 rounded-lg relative">
                        <div className="absolute top-4 right-6 text-[8px] font-black uppercase text-gray-300 tracking-widest">Pain Point #01</div>
                        <h4 className="text-sm font-black uppercase mb-2">{tx('Sự phân mảnh của thị trường', 'Market Fragmentation')}</h4>
                        <p className="text-xs leading-relaxed text-gray-600">
                            {tx(
                              '95% đơn vị cho thuê hiện nay là cá thể lẻ, thiếu quy trình vận hành chuyên nghiệp (SOP). Aurelia Yachts sẽ là đơn vị đầu tiên chuẩn hóa 100% trải nghiệm từ lúc đặt chỗ đến khi rời tàu.',
                              '95% of current charter operators are fragmented micro-players lacking professional SOPs. Aurelia Yachts positions itself as the first operator to standardize 100% of the customer journey from booking to post-trip.'
                            )}
                        </p>
                    </div>
                    <div className="p-6 border border-black bg-white rounded-lg relative shadow-xl">
                        <div className="absolute top-4 right-6 text-[8px] font-black uppercase text-accent tracking-widest">Growth Factor</div>
                        <h4 className="text-sm font-black uppercase mb-2">The "Social-Luxe" Effect</h4>
                        <p className="text-xs leading-relaxed text-gray-900 font-medium">
                            {tx(
                              'Nhu cầu khẳng định vị thế qua hình ảnh cá nhân (Personal Branding) trên du thuyền đang tăng mạnh ở giới trẻ thành đạt. Chúng tôi đầu tư 400Tr vào Media để biến mọi góc trên tàu thành một Studio Cinematic.',
                              'Demand for status signaling through personal branding on yachts is rising sharply among affluent young professionals. We allocate 400M VND to media to transform every onboard angle into cinematic social content.'
                            )}
                        </p>
                    </div>
                 </div>

                 <div className="mt-12 p-8 border-2 border-dashed border-gray-300">
                    <h4 className="text-xs font-black uppercase mb-6 text-center tracking-widest">{tx('Chi phí Cơ hội: "Chậm một bước, mất một mùa"', 'Opportunity Cost: "One Delay, One Season Lost"')}</h4>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="text-center">
                            <span className="block text-[40px] font-black leading-none mb-2">40%</span>
                            <span className="text-[9px] uppercase font-bold text-gray-400">{tx('Giảm chi phí Lead (CAC) vào đỉnh mùa', 'Lower lead acquisition cost (CAC) in peak season')}</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-[40px] font-black leading-none mb-2">3.5X</span>
                            <span className="text-[9px] uppercase font-bold text-gray-400">{tx('Tỷ lệ chuyển đổi so với mùa thấp điểm', 'Conversion uplift vs. low season')}</span>
                        </div>
                    </div>
                 </div>
              </A4Page>

              {/* PAGE 4: STRATEGIC RATIONALE */}
              <A4Page pageNumber={4} totalPages={7}>
                 <h3 className="text-xl font-black uppercase mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{tx('IV. Tại sao cần 1.5 Tỷ VNĐ ngay bây giờ?', 'IV. Why Invest 1.5B VND Now?')}</h3>
                 <div className="space-y-10">
                    <div className="flex gap-8 group">
                        <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-black text-xl group-hover:scale-110 transition-transform">01</div>
                        <div>
                            <h4 className="text-base font-black uppercase mb-2">{tx('Chiếm lĩnh thị phần (Top of Mind)', 'Capture Top-of-Mind Share')}</h4>
                            <p className="text-[12px] opacity-70 text-justify">
                                {tx(
                                  'Giai đoạn khách hàng "khát" trải nghiệm biển nhất là lúc cần thiết lập Aurelia thành tiêu chuẩn vàng. Đầu tư lớn tại Gđ 1 tạo đà nhận diện bền vững cho suốt 12 tháng tiếp theo.',
                                  'Peak aspiration season is the right moment to establish Aurelia as the premium benchmark. Front-loaded investment in Phase 1 builds durable awareness momentum for the next 12 months.'
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-8 group">
                        <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-black text-xl group-hover:scale-110 transition-transform">02</div>
                        <div>
                            <h4 className="text-base font-black uppercase mb-2">{tx('Cấu trúc Media Cinematic', 'Cinematic Media Structure')}</h4>
                            <p className="text-[12px] opacity-70 text-justify">
                                {tx(
                                  'Sản xuất một lần, dùng cho đa kênh (Facebook, TikTok, Website, PR). Việc quay phim đồng thời tại 3 miền giảm chi phí logistics đội lên so với việc quay lẻ tẻ từng tháng.',
                                  'Produce once, deploy across channels (Facebook, TikTok, Website, PR). Simultaneous filming across three regions prevents fragmented monthly shoots and controls logistics overhead.'
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-8 group">
                        <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-black text-xl group-hover:scale-110 transition-transform">03</div>
                        <div>
                            <h4 className="text-base font-black uppercase mb-2">Verified KOC Network</h4>
                            <p className="text-[12px] opacity-70 text-justify">
                                {tx(
                                  'Booking đồng thời các KOL chuyên về Lifestyle tạo hiệu ứng "Trend bùng nổ". Khi khách hàng thấy Aurelia xuất hiện ở cả Hạ Long lẫn Phú Quốc, danh tiếng thương hiệu sẽ được củng cố ngay lập tức.',
                                  'Coordinated booking of lifestyle KOCs creates a rapid trend effect. When customers see Aurelia active in both Ha Long and Phu Quoc, brand credibility compounds immediately.'
                                )}
                            </p>
                        </div>
                    </div>
                 </div>

                 <div className="mt-16 p-8 bg-gray-50 border border-gray-200 italic text-center text-sm font-medium text-gray-600">
                    {tx(
                      '"Chúng ta không chi tiêu 1.5 Tỷ. Chúng ta đang đầu tư để xây dựng một tài sản thương hiệu không thể thay thế trong tâm trí khách hàng thượng lưu."',
                      '"This is not 1.5B VND of spending. It is strategic investment to build an irreplaceable brand asset in the minds of premium customers."'
                    )}
                 </div>
              </A4Page>

              {/* PAGE 5: BUDGET ALLOCATION */}
              <A4Page pageNumber={5} totalPages={7}>
                <h3 className="text-xl font-black uppercase mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{tx('V. Phân bổ Ngân sách Chi tiết', 'V. Detailed Budget Allocation')}</h3>
                
                <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
                   <div className="w-full md:w-1/2 h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={budgetRows} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={6} dataKey="value">
                          {budgetRows.map((entry, index) => <Cell key={entry.key} fill={COLORS[index % COLORS.length]} />)}
                        </Pie>
                        <Tooltip contentStyle={{ borderRadius: '12px', fontWeight: 'bold' }} />
                      </PieChart>
                    </ResponsiveContainer>
                   </div>
                   <div className="w-full md:w-1/2">
                    <table className="w-full text-xs">
                      <tbody>
                        {budgetRows.map((item, i) => (
                          <tr key={i} className="border-b border-gray-100 h-12">
                            <td className="py-2 flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[i] }}></span>
                                <span className="font-bold uppercase tracking-widest text-[10px]">{item.name}</span>
                            </td>
                            <td className="py-2 text-right font-black text-base">{item.value}Tr VNĐ</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                   </div>
                </div>

                <div className="space-y-4">
                    <div className="p-5 bg-[#f8f9fa] border-l-4 border-black">
                        <h4 className="text-[10px] font-black uppercase mb-2">{tx('Cơ chế kiểm soát dòng tiền (Audit Mechanism)', 'Cashflow Control Mechanism (Audit Mechanism)')}</h4>
                        <p className="text-[11px] leading-relaxed">{tx('Sử dụng ', 'Use ')}<strong>TripleWhale Tracking</strong> {tx('và ', 'and ')}<strong>CRM Attribution</strong> {tx('để báo cáo ROI của từng kênh mỗi 48h. Cam kết điều chuyển ngân sách ngay lập tức khi phát hiện kênh kém hiệu quả.', 'to report channel-level ROI every 48 hours. Budget is reallocated immediately when underperformance is detected.')}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 border border-gray-100 rounded text-center">
                            <span className="text-[9px] uppercase text-gray-400 font-bold block mb-1">{tx('Dự phòng Rủi ro', 'Risk Reserve')}</span>
                            <span className="text-lg font-black italic">150.000.000 VNĐ</span>
                        </div>
                        <div className="p-4 border border-gray-100 rounded text-center">
                            <span className="text-[9px] uppercase text-gray-400 font-bold block mb-1">{tx('Audit Định kỳ', 'Audit Frequency')}</span>
                            <span className="text-lg font-black italic">{tx('Hàng tuần', 'Weekly')}</span>
                        </div>
                    </div>
                </div>
              </A4Page>

              {/* PAGE 6: KEY KPIS & COMMITMENTS */}
              <A4Page pageNumber={6} totalPages={7}>
                <h3 className="text-xl font-black uppercase mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{tx('VI. Cam kết Số liệu & Chuyển đổi', 'VI. KPI & Conversion Commitments')}</h3>
                
                <div className="mb-12 border border-gray-100 p-10 bg-white rounded-2xl shadow-2xl h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={kpiData} layout="vertical" margin={{ left: 20 }}>
                        <CartesianGrid strokeDasharray="2 2" horizontal={false} stroke="#E5E7EB" />
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 'black', fill: '#000000' }} />
                        <Tooltip />
                        <Bar dataKey="value" name={tx('Phát triển thực tế', 'Actual Performance')} fill="#000000" barSize={25} radius={[0, 4, 4, 0]} />
                        <Bar dataKey="target" name={tx('Mục tiêu cam kết', 'Committed Target')} fill="#D1D5DB" barSize={25} radius={[0, 4, 4, 0]} />
                      </ComposedChart>
                    </ResponsiveContainer>
                    <p className="text-[7px] text-center text-gray-400 mt-4 uppercase font-bold tracking-widest max-w-[80%] mx-auto leading-relaxed">{tx('Biểu đồ: Đối chiếu mục tiêu cam kết và ', 'Chart: Comparison between committed targets and ')}<br/> {tx('năng lực triển khai thực tế (%)', 'actual execution performance (%)')}</p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-black text-white rounded-lg">
                        <span className="text-[8px] uppercase font-bold opacity-60 block mb-2">{tx('Độ phủ (Reach)', 'Reach')}</span>
                        <span className="text-2xl font-black">3.5M+</span>
                    </div>
                    <div className="text-center p-6 bg-black text-white rounded-lg">
                        <span className="text-[8px] uppercase font-bold opacity-60 block mb-2">Qualified Leads</span>
                        <span className="text-2xl font-black">1.0K+</span>
                    </div>
                    <div className="text-center p-6 bg-black text-white rounded-lg">
                        <span className="text-[8px] uppercase font-bold opacity-60 block mb-2">Target Revenue</span>
                        <span className="text-2xl font-black">15B VNĐ</span>
                    </div>
                </div>

                <div className="mt-12 p-8 border-2 border-dashed border-gray-200 italic text-justify text-[12px] leading-relaxed">
                   {tx(
                     '"',
                     '"'
                   )}<strong>Endless Summer Campaign</strong>{tx(
                     ' không phải là một chiến dịch Marketing thông thường, đó là cú hích chiến lược cho thương hiệu dịch vụ Aurelia Yachts. Với mức đầu tư 1.5 tỷ VNĐ, chúng tôi cam kết xây dựng một hệ mặt trời Marketing xoay quanh khách hàng, tạo ra dòng tiền bền vững và vị thế dẫn đầu tuyệt đối."',
                     ' is not a conventional marketing campaign. It is a strategic growth engine for Aurelia Yachts. With a 1.5B VND investment, we commit to building a customer-centered marketing orbit that delivers durable cashflow and category leadership."'
                   )}
                </div>
              </A4Page>

              {/* PAGE 7: SIGN-OFF */}
              <A4Page pageNumber={7} totalPages={7}>
                <ReportClosing
                  title={tx('Kết luận chiến lược', 'Strategic Conclusion')}
                  summary={tx(
                    'Kế hoạch này chốt lại hướng đi cho giai đoạn market entry: ưu tiên đúng phân khúc, chọn đúng thông điệp, phân bổ ngân sách theo logic tăng trưởng và giữ liên kết chặt giữa strategy, visual, growth, automation và analytics. Khi blueprint này được phê duyệt, toàn bộ hệ marketing có thể triển khai đồng bộ thay vì chạy rời rạc theo từng kênh.',
                    'This plan finalizes the market-entry direction: prioritize the right segment, choose the right message, allocate budget with growth logic, and keep strong alignment across strategy, visual, growth, automation, and analytics. Once approved, the full marketing system can execute in sync instead of channel-by-channel fragmentation.'
                  )}
                  signatureRole="Full Stack Marketing Lead"
                  className="pb-12"
                />
              </A4Page>
            </div>

            <ContentPager
              next={{
                to: '/content-creation-design',
                title: 'Content & Design',
                description: 'Move to the visual system, brand language, and content execution layer.'
              }}
            />
          </section>

          <SiteFooter />
        </div>
      </PageTransition>
    </>
  );
};

export default StrategyPlanning;
