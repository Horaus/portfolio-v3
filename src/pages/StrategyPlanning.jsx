import React from 'react';
import Header from '../components/layout/Header';
import PageTransition from '../components/layout/PageTransition';
import ContentPager from '../components/layout/ContentPager';
import SiteFooter from '../components/layout/SiteFooter';
import ReportClosing from '../components/layout/ReportClosing';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const budgetData = [
  { name: 'Media Production', value: 400 },
  { name: 'Ads (Meta/Google)', value: 750 },
  { name: 'KOC & PR', value: 200 },
  { name: 'Vận hành/Tech', value: 150 },
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
    className="bg-white text-black shadow-2xl w-full max-w-[210mm] min-h-[297mm] mx-auto mb-2 py-12 px-[70px] md:py-16 md:px-[100px] relative flex flex-col rounded-sm border border-gray-200"
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
                "Marketing hiệu quả bắt đầu từ việc thấu hiểu con người. Chúng tôi không xây dựng chiến dịch dựa trên cảm tính, mà dựa trên sự kết hợp giữa tư duy định tính sắc bén và công nghệ hiện đại."
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-3 space-y-8">
                <h2 className="text-xl font-bold uppercase tracking-[0.3em] flex items-center gap-4 text-white">
                  <span className="w-8 h-px bg-accent"></span> Mindset & Core Role
                </h2>
                
                <div className="text-gray-400 text-sm leading-relaxed space-y-6 text-justify">
                  <p>
                    Trong kỷ nguyên số, dữ liệu là vô tận nhưng Insight thì hữu hạn. Làm <strong>Strategy & Planning</strong> là tầng nền tảng trong cách chúng tôi tiếp cận Full-stack Marketing. Thay vì xây dựng chiến dịch chạy theo bề nổi, chúng tôi ưu tiên phương pháp <strong>Qualitative Research</strong> (Nghiên cứu định tính) kết hợp với <strong>AI Accelerators</strong> để bóc tách thế giới quan của khách hàng.
                  </p>
                  
                  <p>
                    Ở mỗi dự án, chúng tôi bắt đầu bằng việc đóng vai trò là "người đi giải mã" qua 4 lăng kính cốt lõi:
                  </p>
                </div>

                <ul className="space-y-4 text-sm">
                  <li className="flex gap-5 group">
                    <div className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="text-gray-400 leading-snug">
                      <strong className="text-white uppercase tracking-widest text-xs block mb-1">Fundamental Problem:</strong> Thương hiệu này đang giải quyết nỗi đau gì, cho ai?
                    </div>
                  </li>
                  <li className="flex gap-5 group">
                    <div className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="text-gray-400 leading-snug">
                      <strong className="text-white uppercase tracking-widest text-xs block mb-1">Psychological Journey:</strong> Phác họa Empathy Mapping & Deep Interview để tìm ra rào cản thực sự.
                    </div>
                  </li>
                  <li className="flex gap-5 group">
                    <div className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="text-gray-400 leading-snug">
                      <strong className="text-white uppercase tracking-widest text-xs block mb-1">Measurement Goals:</strong> Con số nào định nghĩa định mức thành công của chiến dịch?
                    </div>
                  </li>
                  <li className="flex gap-5 group">
                    <div className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="text-gray-400 leading-snug">
                      <strong className="text-white uppercase tracking-widest text-xs block mb-1">Resource Optimization:</strong> Ngân sách sẽ được phân bổ ra sao để đạt ROI cao nhất?
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
                    <p className="text-[11px] text-gray-500 leading-relaxed uppercase">Phân tích 1,000+ từ khóa & xu hướng thị trường mùa cao điểm.</p>
                  </div>

                  <div className="bg-black/40 p-5 rounded-xl border border-white/5 group-hover:bg-black/60 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                       <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path></svg>
                       <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Sentiment AI</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed uppercase">Audit cảm xúc khách hàng qua các mạng xã hội du lịch.</p>
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
          <section className="bg-[#f8f9fa] pt-20 pb-24 px-4 overflow-hidden shadow-inner" id="report-section">
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
                  <div><span className="text-gray-400">Dự án:</span> Aurelia Yachts (Service Brand)</div>
                  <div><span className="text-gray-400">Thời gian:</span> 05 tháng (01/04 – 31/08)</div>
                  <div><span className="text-gray-400">Ngân sách:</span> 1.500.000.000 VNĐ</div>
                  <div><span className="text-gray-400">Target:</span> National Market Entry</div>
                </div>

                <h3 className="text-xl font-black uppercase mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>I. Bối cảnh thị trường & Mùa vụ</h3>
                <div className="space-y-6">
                    <p className="text-justify italic border-l-4 border-black pl-5 py-2 bg-gray-50">
                        "Khách hàng HNWI tại Việt Nam đang dịch chuyển từ việc sở hữu tài sản sang trải nghiệm lối sống đặc quyền (Experiential Luxury). Đây là 'Thời điểm vàng' để Aurelia Yachts trở thành sự lựa chọn bảo chứng."
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
                        <p className="text-[8px] text-center text-gray-400 mt-4 uppercase font-black tracking-[0.3em]">Fig 1.1: Trực quan hóa nhu cầu đặt chỗ & Xu hướng tìm kiếm 2026</p>
                    </div>
                </div>
              </A4Page>

              {/* PAGE 2: MULTI-LOCATION STRATEGY */}
              <A4Page pageNumber={2} totalPages={7}>
                <h3 className="text-xl font-black uppercase mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>II. Chiến lược Điểm đến Đa miền</h3>
                <p className="mb-8 text-justify">
                    Để tối ưu hóa ngân sách 1.5 Tỷ VNĐ, chiến dịch được triển khai cuốn chiếu theo đặc điểm khí hậu Việt Nam, đảm bảo thông điệp luôn khớp với cảm xúc khách hàng tại từng thời điểm.
                </p>

                <table className="w-full text-xs border-collapse border-2 border-black mb-12 shadow-xl">
                  <thead>
                    <tr className="bg-black text-white uppercase tracking-widest font-black">
                      <th className="p-4 text-left border border-white/20">Vùng biển</th>
                      <th className="p-4 text-left border border-white/20">Thời điểm</th>
                      <th className="p-4 text-left border border-white/20">Ngân sách</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-200 p-5">
                          <span className="font-black block uppercase">Hạ Long - Lan Hạ</span>
                          <span className="text-[10px] text-gray-400">Focus: Tệp khách Hà Nội</span>
                      </td>
                      <td className="border border-gray-200 p-5 font-bold">Tháng 4 - 8</td>
                      <td className="border border-gray-200 p-5 font-black text-lg">600Tr</td>
                    </tr>
                    <tr className="bg-gray-50/50 hover:bg-gray-100 transition-colors">
                      <td className="border border-gray-200 p-5">
                          <span className="font-black block uppercase">Nha Trang - Đà Nẵng</span>
                          <span className="text-[10px] text-gray-400">Focus: Miền Trung & Quốc tế</span>
                      </td>
                      <td className="border border-gray-200 p-5 font-bold">Tháng 5 - 9</td>
                      <td className="border border-gray-200 p-5 font-black text-lg">450Tr</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-200 p-5">
                          <span className="font-black block uppercase">Phú Quốc - Vũng Tàu</span>
                          <span className="text-[10px] text-gray-400">Focus: Tệp khách Miền Nam</span>
                      </td>
                      <td className="border border-gray-200 p-5 font-bold">Tháng 10 - 3</td>
                      <td className="border border-gray-200 p-5 font-black text-lg">300Tr</td>
                    </tr>
                  </tbody>
                </table>

                <div className="p-8 bg-[#111] text-white rounded-2xl relative overflow-hidden group">
                   <div className="absolute right-[-20px] top-[-20px] text-white/5 font-black text-9xl italic pointer-events-none group-hover:text-white/10 transition-colors">77</div>
                   <h4 className="text-xs font-black uppercase mb-4 text-accent tracking-widest flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Tại sao chọn đa điểm đến?
                   </h4>
                   <p className="text-[11px] leading-relaxed opacity-70 mb-4 text-justify">
                       Việc triển khai luân phiên giúp Aurelia duy trì sự hiện diện thương hiệu quanh năm. Khi miền Bắc vào mùa bão, chúng tôi điều hướng ngân sách ngay lập tức vào miền Nam hoặc Nha Trang thông qua hệ thống <strong>Dynamic Budgeting</strong>.
                   </p>
                </div>
              </A4Page>

              {/* PAGE 3: INDUSTRY ANALYSIS */}
              <A4Page pageNumber={3} totalPages={7}>
                 <h3 className="text-xl font-black uppercase mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>III. Phân tích Ngành & Đối thủ</h3>
                 <div className="grid grid-cols-1 gap-8 mb-12">
                    <div className="p-6 border border-gray-200 bg-gray-50 rounded-lg relative">
                        <div className="absolute top-4 right-6 text-[8px] font-black uppercase text-gray-300 tracking-widest">Pain Point #01</div>
                        <h4 className="text-sm font-black uppercase mb-2">Sự phân mảnh của thị trường</h4>
                        <p className="text-xs leading-relaxed text-gray-600">
                            95% đơn vị cho thuê hiện nay là cá thể lẻ, thiếu quy trình vận hành chuyên nghiệp (SOP). Aurelia Yachts sẽ là đơn vị đầu tiên chuẩn hóa 100% trải nghiệm từ lúc đặt chỗ đến khi rời tàu.
                        </p>
                    </div>
                    <div className="p-6 border border-black bg-white rounded-lg relative shadow-xl">
                        <div className="absolute top-4 right-6 text-[8px] font-black uppercase text-accent tracking-widest">Growth Factor</div>
                        <h4 className="text-sm font-black uppercase mb-2">The "Social-Luxe" Effect</h4>
                        <p className="text-xs leading-relaxed text-gray-900 font-medium">
                            Nhu cầu khẳng định vị thế qua hình ảnh cá nhân (Personal Branding) trên du thuyền đang tăng mạnh ở giới trẻ thành đạt. Chúng tôi đầu tư 400Tr vào Media để biến mọi góc trên tàu thành một Studio Cinematic.
                        </p>
                    </div>
                 </div>

                 <div className="mt-12 p-8 border-2 border-dashed border-gray-300">
                    <h4 className="text-xs font-black uppercase mb-6 text-center tracking-widest">Chi phí Cơ hội: "Chậm một bước, mất một mùa"</h4>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="text-center">
                            <span className="block text-[40px] font-black leading-none mb-2">40%</span>
                            <span className="text-[9px] uppercase font-bold text-gray-400">Giảm chi phí Lead (CAC) vào đỉnh mùa</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-[40px] font-black leading-none mb-2">3.5X</span>
                            <span className="text-[9px] uppercase font-bold text-gray-400">Tỷ lệ chuyển đổi so với mùa thấp điểm</span>
                        </div>
                    </div>
                 </div>
              </A4Page>

              {/* PAGE 4: STRATEGIC RATIONALE */}
              <A4Page pageNumber={4} totalPages={7}>
                 <h3 className="text-xl font-black uppercase mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>IV. Tại sao cần 1.5 Tỷ VNĐ ngay bây giờ?</h3>
                 <div className="space-y-10">
                    <div className="flex gap-8 group">
                        <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-black text-xl group-hover:scale-110 transition-transform">01</div>
                        <div>
                            <h4 className="text-base font-black uppercase mb-2">Chiếm lĩnh thị phần (Top of Mind)</h4>
                            <p className="text-[12px] opacity-70 text-justify">
                                Giai đoạn khách hàng "khát" trải nghiệm biển nhất là lúc cần thiết lập Aurelia thành tiêu chuẩn vàng. Đầu tư lớn tại Gđ 1 tạo đà nhận diện bền vững cho suốt 12 tháng tiếp theo.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-8 group">
                        <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-black text-xl group-hover:scale-110 transition-transform">02</div>
                        <div>
                            <h4 className="text-base font-black uppercase mb-2">Cấu trúc Media Cinematic</h4>
                            <p className="text-[12px] opacity-70 text-justify">
                                Sản xuất một lần, dùng cho đa kênh (Facebook, TikTok, Website, PR). Việc quay phim đồng thời tại 3 miền giảm chi phí logistics đội lên so với việc quay lẻ tẻ từng tháng.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-8 group">
                        <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-black text-xl group-hover:scale-110 transition-transform">03</div>
                        <div>
                            <h4 className="text-base font-black uppercase mb-2">Verified KOC Network</h4>
                            <p className="text-[12px] opacity-70 text-justify">
                                Booking đồng thời các KOL chuyên về Lifestyle tạo hiệu ứng "Trend bùng nổ". Khi khách hàng thấy Aurelia xuất hiện ở cả Hạ Long lẫn Phú Quốc, danh tiếng thương hiệu sẽ được củng cố ngay lập tức.
                            </p>
                        </div>
                    </div>
                 </div>

                 <div className="mt-16 p-8 bg-gray-50 border border-gray-200 italic text-center text-sm font-medium text-gray-600">
                    "Chúng ta không chi tiêu 1.5 Tỷ. Chúng ta đang đầu tư để xây dựng một tài sản thương hiệu không thể thay thế trong tâm trí khách hàng thượng lưu."
                 </div>
              </A4Page>

              {/* PAGE 5: BUDGET ALLOCATION */}
              <A4Page pageNumber={5} totalPages={7}>
                <h3 className="text-xl font-black uppercase mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>V. Phân bổ Ngân sách Chi tiết</h3>
                
                <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
                   <div className="w-full md:w-1/2 h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={budgetData} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={6} dataKey="value">
                          {budgetData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                        </Pie>
                        <Tooltip contentStyle={{ borderRadius: '12px', fontWeight: 'bold' }} />
                      </PieChart>
                    </ResponsiveContainer>
                   </div>
                   <div className="w-full md:w-1/2">
                    <table className="w-full text-xs">
                      <tbody>
                        {budgetData.map((item, i) => (
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
                        <h4 className="text-[10px] font-black uppercase mb-2">Cơ chế kiểm soát dòng tiền (Audit Mechanism)</h4>
                        <p className="text-[11px] leading-relaxed">Sử dụng <strong>TripleWhale Tracking</strong> và <strong>CRM Attribution</strong> để báo cáo ROI của từng kênh mỗi 48h. Cam kết điều chuyển ngân sách ngay lập tức khi phát hiện kênh kém hiệu quả.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 border border-gray-100 rounded text-center">
                            <span className="text-[9px] uppercase text-gray-400 font-bold block mb-1">Dự phòng Rủi ro</span>
                            <span className="text-lg font-black italic">150.000.000 VNĐ</span>
                        </div>
                        <div className="p-4 border border-gray-100 rounded text-center">
                            <span className="text-[9px] uppercase text-gray-400 font-bold block mb-1">Audit Định kỳ</span>
                            <span className="text-lg font-black italic">Hàng tuần</span>
                        </div>
                    </div>
                </div>
              </A4Page>

              {/* PAGE 6: KEY KPIS & COMMITMENTS */}
              <A4Page pageNumber={6} totalPages={7}>
                <h3 className="text-xl font-black uppercase mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>VI. Cam kết Số liệu & Chuyển đổi</h3>
                
                <div className="mb-12 border border-gray-100 p-10 bg-white rounded-2xl shadow-2xl h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={kpiData} layout="vertical" margin={{ left: 20 }}>
                        <CartesianGrid strokeDasharray="2 2" horizontal={false} stroke="#E5E7EB" />
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 'black', fill: '#000000' }} />
                        <Tooltip />
                        <Bar dataKey="value" name="Phát triển thực tế" fill="#000000" barSize={25} radius={[0, 4, 4, 0]} />
                        <Bar dataKey="target" name="Mục tiêu cam kết" fill="#D1D5DB" barSize={25} radius={[0, 4, 4, 0]} />
                      </ComposedChart>
                    </ResponsiveContainer>
                    <p className="text-[7px] text-center text-gray-400 mt-4 uppercase font-bold tracking-widest max-w-[80%] mx-auto leading-relaxed">Biểu đồ: Đối chiếu mục tiêu cam kết và <br/> năng lực triển khai thực tế (%)</p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-black text-white rounded-lg">
                        <span className="text-[8px] uppercase font-bold opacity-60 block mb-2">Độ phủ (Reach)</span>
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
                   "<strong>Endless Summer Campaign</strong> không phải là một chiến dịch Marketing thông thường, đó là cú hích chiến lược cho thương hiệu dịch vụ Aurelia Yachts. Với mức đầu tư 1.5 tỷ VNĐ, chúng tôi cam kết xây dựng một hệ mặt trời Marketing xoay quanh khách hàng, tạo ra dòng tiền bền vững và vị thế dẫn đầu tuyệt đối."
                </div>
              </A4Page>

              {/* PAGE 7: SIGN-OFF */}
              <A4Page pageNumber={7} totalPages={7}>
                <ReportClosing
                  title="Kết luận chiến lược"
                  summary="Kế hoạch này chốt lại hướng đi cho giai đoạn market entry: ưu tiên đúng phân khúc, chọn đúng thông điệp, phân bổ ngân sách theo logic tăng trưởng và giữ liên kết chặt giữa strategy, visual, growth, automation và analytics. Khi blueprint này được phê duyệt, toàn bộ hệ marketing có thể triển khai đồng bộ thay vì chạy rời rạc theo từng kênh."
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
