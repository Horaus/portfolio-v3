import React from 'react';
import Header from '../components/layout/Header';
import PageTransition from '../components/layout/PageTransition';
import { motion } from 'framer-motion';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ContentPager from '../components/layout/ContentPager';
import SiteFooter from '../components/layout/SiteFooter';
import ReportClosing from '../components/layout/ReportClosing';
import { useLang } from '../hooks/useLang';

const analyticsData = [
  { month: 'Apr', visitors: 4500, conversion: 1.2 },
  { month: 'May', visitors: 6200, conversion: 1.8 },
  { month: 'Jun', visitors: 12500, conversion: 2.5 },
  { month: 'Jul', visitors: 11000, conversion: 2.2 },
  { month: 'Aug', visitors: 8500, conversion: 1.9 },
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
          <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-black">Analytics, Conversion & Retention</h3>
          <p className="text-[7px] text-gray-500 uppercase font-bold tracking-widest mt-0.5">Document ID: AZ-2026-ANALYTICS-ROI</p>
        </div>
      </div>
      <div className="text-right">
        <span className="text-[7.5px] font-black border border-black px-1.5 py-0.5 tracking-tight text-gray-600" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>FINAL REPORT / DATA-DRIVEN INSIGHTS</span>
      </div>
    </div>

    {/* Content Area */}
    <div className="flex-grow text-sm leading-relaxed text-gray-800">
      {children}
    </div>

    {/* Page Footer */}
    <div className="mt-8 pt-4 border-t border-black/10 flex justify-between items-center text-[8px] font-bold text-gray-400 uppercase tracking-widest">
      <div>Aurelia Yachts Analytics — 2026</div>
      <div>Page {pageNumber} of {totalPages}</div>
    </div>
  </motion.div>
);

const AnalyticsConversionRetention = () => {
  const { lang } = useLang();
  const isEn = lang === 'en';
  const tx = (vi, en) => (isEn ? en : vi);

  return (
    <>
      <Header />
      <PageTransition>
        <div className="bg-darkBg min-h-screen pt-24 pb-0 overflow-x-hidden">
          
          {/* SECTION 1: ANALYTICS OVERVIEW */}
          <section className="px-6 md:px-12 max-w-6xl mx-auto mb-24 pt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4 leading-tight text-white italic">
                Analytics, Conversion & Retention <br/><span className="text-gray-500 text-xl md:text-3xl italic lowercase">Measurement, Insight & Optimization Decisions.</span>
              </h1>
              <p className="text-gray-500 text-[11px] md:text-xs max-w-2xl mx-auto border-t border-white/10 pt-6 mt-2 leading-relaxed italic uppercase tracking-widest">
                {tx(
                  '"Dữ liệu không chỉ để báo cáo. Đây là nơi đọc traffic, hành vi, lead quality và tín hiệu CRM để biết kênh nào hiệu quả, khách rơi ở đâu và vòng sau cần tối ưu phần nào."',
                  '"Data is not only for reporting. This layer reads traffic, behavior, lead quality, and CRM signals to identify what works, where users drop off, and what must be optimized next."'
                )}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-3 space-y-6">
                <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-3 text-white">
                  <span className="w-6 h-px bg-accent"></span> {tx('Vai trò trong hành trình tối ưu hiệu quả', 'Role in the Optimization Journey')}
                </h2>
                
                <div className="text-gray-400 text-sm leading-relaxed space-y-4 text-justify">
                  <p>
                    {tx(
                      'Sau khi lead đã đi qua Growth và được xử lý trong CRM, phần Analytics tổng hợp dữ liệu từ website, ads, hành vi người dùng và trạng thái sales để đo hiệu quả thật của toàn bộ hệ thống.',
                      'After leads pass through Growth and CRM handling, Analytics consolidates website, ads, user behavior, and sales-state data to measure true system performance.'
                    )}
                  </p>
                  <p>
                    {tx('Mục tiêu ở đây là trả lời ba câu hỏi dễ hiểu: ', 'The objective is to answer three practical questions: ')}
                    <strong>{tx('kênh nào đang hiệu quả', 'which channels are performing best')}</strong>, <strong>{tx('khách rơi ở bước nào', 'where users are dropping off')}</strong> {tx('và ', 'and ')}
                    <strong>{tx('điều gì cần gửi ngược lại cho Strategy, Visual, Growth và Automation để tối ưu vòng tiếp theo', 'what feedback should be sent back to Strategy, Visual, Growth, and Automation for the next optimization cycle')}</strong>.
                  </p>
                </div>

                <ul className="space-y-3 text-sm">
                  <li className="flex gap-4 group">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="text-gray-400 leading-snug">
                      <strong className="text-white">Performance Measurement:</strong> {tx('Theo dõi traffic, lead quality, CPA/CAC và ROAS để biết kênh nào mang lại kết quả tốt nhất.', 'Track traffic, lead quality, CPA/CAC, and ROAS to identify highest-performing channels.')}
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="text-gray-400 leading-snug">
                      <strong className="text-white">Behavior Insight:</strong> {tx('Đọc scroll depth, rage click, drop-off và form friction để tìm đúng điểm nghẽn chuyển đổi trên landing page hoặc website.', 'Read scroll depth, rage clicks, drop-off, and form friction to locate conversion bottlenecks on landing pages and website flows.')}
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="text-gray-400 leading-snug">
                      <strong className="text-white">Decision Loop:</strong> {tx('Dùng dữ liệu để chỉnh message, landing page, media mix, CRM sequence và cách sales xử lý lead ở vòng kế tiếp.', 'Use data to refine messaging, landing pages, media mix, CRM sequence, and sales handling in the next cycle.')}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2 bg-[#111111] p-6 rounded-2xl border border-white/5 relative group hover:border-accent/20 transition-colors">
                <div className="absolute top-4 right-4 text-accent/5 select-none pointer-events-none group-hover:text-accent/10 transition-colors">
                   <span className="text-7xl font-black italic">d</span>
                </div>

                <h3 className="text-[11px] font-bold mb-5 text-accent uppercase tracking-[0.3em] flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div> Analytics Stack
                </h3>
                
                <div className="space-y-3 relative z-10">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2.5 mb-1.5">
                       <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                       <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Measurement & Behavior</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-snug">{tx('GA4 là lớp đo lường nền tảng cho traffic, conversion events và attribution cơ bản; Microsoft Clarity ưu tiên để xem replay, heatmap, scroll depth và drop-off. Hotjar có thể dùng thêm khi cần survey hoặc feedback UX sâu hơn.', 'GA4 provides baseline measurement for traffic, conversion events, and attribution; Microsoft Clarity is prioritized for replays, heatmaps, scroll depth, and drop-off. Hotjar can be added when deeper UX surveys or feedback are required.')}</p>
                  </div>

                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2.5 mb-1.5">
                       <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                       <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Dashboard & Reporting</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-snug">{tx('Power BI hoặc Metabase phù hợp hơn cho dashboard điều hành, drill-down và chia sẻ KPI ổn định cho team. Looker Studio vẫn dùng được cho report nhanh, miễn phí, nhưng không phải lựa chọn ưu tiên khi cần trải nghiệm mượt hơn.', 'Power BI or Metabase is better suited for operating dashboards, drill-down analysis, and stable KPI sharing. Looker Studio remains useful for quick free reporting, but is not the first choice when smoother performance is required.')}</p>
                  </div>

                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2.5 mb-1.5">
                       <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                       <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Experimentation</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-snug">{tx('VWO hoặc Optimizely phù hợp khi cần chạy A/B test nghiêm túc, kiểm soát variation và đo uplift rõ ràng thay vì chỉ xem số liệu tổng.', 'VWO or Optimizely is suitable for serious A/B testing where variation control and uplift measurement are required beyond aggregate metrics.')}</p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/5 flex justify-between gap-1 grayscale opacity-30 group-hover:opacity-60 transition-all">
                  <div className="text-[8px] font-bold text-white tracking-widest">GA4</div>
                  <div className="text-[8px] font-bold text-white tracking-widest">CLARITY</div>
                  <div className="text-[8px] font-bold text-white tracking-widest">POWER BI</div>
                  <div className="text-[8px] font-bold text-white tracking-widest">VWO</div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: THE A4 ANALYTICS REPORT */}
          <section className="report-section bg-[#f2f2f2] pt-16 pb-24 px-4 overflow-hidden shadow-inner" id="report-section">
            <div className="text-center mb-12">
              <span className="text-gray-400 text-[9px] font-black tracking-[0.4em] uppercase mb-2 block">Measurement & Optimization Workflow</span>
              <h2 className="text-3xl font-black text-black uppercase tracking-tighter">Performance Review, Conversion Insight & Retention Signals</h2>
              <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest">{tx('Đo hiệu quả • Tìm điểm nghẽn • Ra quyết định tối ưu', 'Measure Performance • Find Bottlenecks • Optimize Decisions')}</p>
            </div>

            <div className="flex flex-col gap-3">
              
              {/* PAGE 1: PERFORMANCE KIPS */}
              <A4Page pageNumber={1} totalPages={2}>
                <div className="mb-10 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <h1 className="text-3xl md:text-5xl font-black uppercase mb-4 tracking-tighter leading-none italic">Performance Review Dashboard</h1>
                  <h2 className="text-[14px] font-bold text-gray-400 uppercase tracking-[0.2em]">Peak Season: Apr - Aug 2026</h2>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                   <div className="p-4 bg-gray-50 border border-gray-100 rounded text-center">
                      <span className="block text-[8px] text-gray-400 uppercase font-black mb-1">Total Reach</span>
                      <span className="text-xl font-black text-black">3.5M+</span>
                   </div>
                   <div className="p-4 bg-gray-50 border border-gray-100 rounded text-center">
                      <span className="block text-[8px] text-gray-400 uppercase font-black mb-1">Qualified Leads</span>
                      <span className="text-xl font-black text-black">920+</span>
                   </div>
                   <div className="p-4 bg-gray-50 border border-black rounded text-center">
                      <span className="block text-[8px] text-gray-500 font-black mb-1 uppercase">Avg. ROAS</span>
                      <span className="text-xl font-black text-black">5.2x</span>
                   </div>
                </div>

                <div className="my-6 border border-gray-200 p-6 bg-[#f8f9fa] h-56 rounded-lg shadow-inner">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={analyticsData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#6B7280' }} />
                        <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#6B7280' }} />
                        <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#000000' }} />
                        <Tooltip contentStyle={{ fontSize: '10px', borderRadius: '8px' }} />
                        <Bar yAxisId="left" dataKey="visitors" name="Unique Visitors" fill="#000000" barSize={24} radius={[4, 4, 0, 0]} />
                        <Line yAxisId="right" type="monotone" dataKey="conversion" name="Conv. Rate (%)" stroke="#9CA3AF" strokeWidth={3} dot={{ r: 4, fill: '#000000' }} />
                      </ComposedChart>
                    </ResponsiveContainer>
                    <p className="text-[7px] text-center text-gray-400 mt-3 uppercase font-bold tracking-widest">{tx('Biểu đồ: So sánh lượng truy cập và tỷ lệ chuyển đổi để phát hiện giai đoạn traffic tăng nhưng hiệu suất không tăng tương ứng', 'Chart: Compare traffic and conversion rate to detect periods where visits increase but efficiency does not scale accordingly')}</p>
                </div>

                <div className="mt-8 p-6 bg-gray-50 border-l-4 border-black">
                    <h4 className="text-sm font-black uppercase mb-3">{tx('Phân tích vận hành', 'Operational Analysis')}</h4>
                    <p className="text-xs leading-relaxed text-justify mb-4 opacity-80 italic">
                        {tx(
                          '"Tháng 6 là điểm tăng mạnh nhất về traffic và conversion. Tuy nhiên từ tháng 7 sang tháng 8, lượng truy cập vẫn còn nhưng conversion giảm dần, cho thấy cần kiểm tra lại landing page, form, tốc độ tải trang và độ phù hợp của thông điệp sau giai đoạn cao điểm."',
                          '"June marked the strongest lift in both traffic and conversion. From July to August, traffic remained while conversion declined, signaling the need to re-audit landing pages, form friction, page speed, and message-market fit after peak season."'
                        )}
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-[10px] mt-4">
                        <div>
                            <div className="text-gray-400 uppercase tracking-widest mb-1">Best Channel</div>
                            <div className="font-black">Google Search</div>
                        </div>
                        <div>
                            <div className="text-gray-400 uppercase tracking-widest mb-1">Main Friction</div>
                            <div className="font-black">Landing + form drop-off</div>
                        </div>
                        <div>
                            <div className="text-gray-400 uppercase tracking-widest mb-1">Next Action</div>
                            <div className="font-black">{tx('Audit UX và test form variations', 'UX audit and form variation testing')}</div>
                        </div>
                    </div>
                </div>
              </A4Page>

              {/* PAGE 2: LTV & GROWTH STRATEGY */}
              <A4Page pageNumber={2} totalPages={2}>
                 <div className="flex flex-col h-full">
                   <h3 className="text-base font-black uppercase mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2. Retention Signals & Next Actions</h3>
                   <div className="grid grid-cols-2 gap-8 mb-10">
                      <div className="space-y-4">
                          <div className="p-5 border border-gray-200 rounded-xl bg-gray-50 items-center justify-between flex">
                              <div>
                                  <span className="block text-[8px] text-gray-400 uppercase font-black">Retention Rate</span>
                                  <span className="text-2xl font-black text-black">18.5%</span>
                              </div>
                              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                              </div>
                          </div>
                          <p className="text-[10px] text-gray-500 italic leading-relaxed">{tx('Tỷ lệ quay lại tăng khi khách đã từng nhận chăm sóc sau chuyến đi, ưu đãi tái đặt dịch vụ hoặc liên hệ lại đúng thời điểm trong CRM.', 'Retention improves when guests receive post-trip care, rebooking incentives, or well-timed CRM follow-up.')}</p>
                      </div>
                      <div className="space-y-4">
                          <div className="p-5 border border-gray-200 rounded-xl bg-gray-50 items-center justify-between flex">
                              <div>
                                  <span className="block text-[8px] text-gray-400 uppercase font-black">Predicted CLV</span>
                                  <span className="text-2xl font-black text-black">$15,400</span>
                              </div>
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                              </div>
                          </div>
                          <p className="text-[10px] text-gray-500 italic leading-relaxed">{tx('Giá trị vòng đời tăng rõ hơn ở nhóm khách có lịch sử quay lại, mở email chăm sóc và phản hồi tốt với các đề nghị upsell hoặc referral.', 'Lifetime value rises more clearly in cohorts with repeat-booking history, nurture email engagement, and stronger response to upsell or referral offers.')}</p>
                      </div>
                   </div>

                   <div className="grid grid-cols-3 gap-4 mb-10 text-[10px]">
                      <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                          <div className="text-gray-400 uppercase tracking-widest mb-2">Best Returning Group</div>
                          <div className="font-black text-black">{tx('Khách cũ có follow-up sau dịch vụ', 'Returning guests with post-service follow-up')}</div>
                      </div>
                      <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                          <div className="text-gray-400 uppercase tracking-widest mb-2">High Quality Source</div>
                          <div className="font-black text-black">Search intent + CRM remarketing</div>
                      </div>
                      <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                          <div className="text-gray-400 uppercase tracking-widest mb-2">Next Loop</div>
                          <div className="font-black text-black">{tx('Gửi insight về Growth, Landing và CRM', 'Send insights back to Growth, Landing, and CRM')}</div>
                      </div>
                   </div>

                   <ReportClosing
                     title={tx('Kết luận vận hành', 'Operational Conclusion')}
                     summary={tx(
                      'Từ dữ liệu hiệu suất và hành vi, có thể xác định rõ phần nào nên nhân rộng, phần nào đang làm rơi chuyển đổi và nhóm khách nào đáng giữ lại lâu hơn. Giá trị lớn nhất của analytics không nằm ở dashboard đẹp mà ở việc biến số liệu thành thay đổi cụ thể cho growth, landing page, CRM sequence và cách sales follow-up.',
                      'Performance and behavior data reveal what should scale, where conversion leaks exist, and which segments deserve longer retention focus. The true value of analytics is not a beautiful dashboard, but actionable changes in growth, landing pages, CRM sequences, and sales follow-up execution.'
                     )}
                   />
                 </div>
              </A4Page>

            </div>
            
            <ContentPager
              prev={{
                to: '/automation-crm',
                title: 'Automation & CRM',
                description: 'Step back to the workflow engine and operational routing logic.'
              }}
              next={{
                to: '/marketing-systems',
                title: 'Back to Systems',
                description: 'Return to the full marketing stack overview and explore another block.'
              }}
            />
          </section>

          <SiteFooter />
        </div>
      </PageTransition>
    </>
  );
};

export default AnalyticsConversionRetention;
