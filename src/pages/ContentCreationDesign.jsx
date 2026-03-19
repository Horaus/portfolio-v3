import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/layout/Header';
import PageTransition from '../components/layout/PageTransition';
import BrandGuideline from '../components/BrandGuideline';
import ContentPager from '../components/layout/ContentPager';
import SiteFooter from '../components/layout/SiteFooter';

const ContentCreationDesign = () => {
   const [modalData, setModalData] = React.useState(null);

   React.useEffect(() => {
      if (modalData) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = '';
      }
      return () => {
         document.body.style.overflow = '';
      };
   }, [modalData]);

   const closeModal = () => {
      setModalData(null);
   };

   const websiteTable = [
      {
         asset: "Homepage Narrative: Ha Long Bay",
         module: "Hero + Story Block",
         content: [
            "Bối cảnh mở đầu: bình minh trên Vịnh Hạ Long, mặt nước trong xanh phản chiếu đội du thuyền, tạo cảm giác “quiet luxury”.",
            "Tuyên ngôn thương hiệu gói gọn trong 2 câu: hành trình riêng tư, dịch vụ tinh tuyển, chuẩn mực quốc tế.",
            "Mạch kể chuyện 3 hồi: khám phá kỳ quan → trải nghiệm onboard → khoảnh khắc hoàng hôn, nhấn cảm xúc thư giãn.",
            "Ngôn ngữ hình ảnh tươi mát, tự nhiên, gió biển nhẹ; ánh sáng trong, ít bóng gắt, ưu tiên chiều sâu.",
            "CTA chính: “Book a Private Journey” đặt ở cuối đoạn 1; CTA phụ: “View Fleet”."
         ],
         cta: "Book a Private Journey"
      },
      {
         asset: "Guideline: Visual System",
         module: "Color + Tone",
         content: [
            "Màu chủ đạo navy #062631 đại diện chiều sâu biển, nền tảng tin cậy.",
            "Teal #157A7A tạo cảm giác tươi mát, gợi liên tưởng vùng nước xanh.",
            "Gold #C5A047 là điểm nhấn luxury, dùng tiết chế cho CTA và chi tiết cao cấp.",
            "Tông ảnh: clean, airy, độ bão hòa vừa phải; hạn chế noise, ưu tiên texture cao cấp.",
            "Ánh sáng tự nhiên, ưu tiên khung giờ sáng sớm/hoàng hôn để giữ chất “warm luxury”."
         ],
         cta: "Explore Guideline"
      },
      {
         asset: "Experience Section",
         module: "Service Modules",
         content: [
            "Trình bày 3 cụm dịch vụ: Charter riêng tư, On-board dining, Concierge 24/7.",
            "Mỗi module có headline 6–8 từ, mô tả 2 câu ngắn, nhấn lợi ích cảm xúc.",
            "Bố cục: 3 card ngang, icon line đơn giản, khoảng trắng rộng.",
            "CTA theo cụm: “Plan Your Route”, “View Menu”, “Talk to Concierge”."
         ],
         cta: "Plan Your Route"
      },
      {
         asset: "Long-form Content",
         module: "About Ha Long",
         content: [
            "Bài viết dài ~400 chữ chia bullet theo 4 phần: lịch sử, cảnh quan, trải nghiệm, dịch vụ.",
            "Giọng văn sang trọng, mô tả bằng cảm giác (gió, ánh sáng, hương mặn, mặt nước).",
            "Chèn 2 trích dẫn nhỏ từ du khách, tạo social proof.",
            "Kết bài nối sang trải nghiệm đặt tàu và gợi ý lịch trình 2 ngày."
         ],
         cta: "Read the Journey"
      }
   ];

   const socialTable = [
      {
         channel: "Facebook",
         asset: "Album: Journey Moments",
         content: "12 ảnh + caption dài, nhấn hành trình 2 ngày tại Hạ Long, kèm quote khách hàng.",
         cta: "Inbox để nhận lịch trình"
      },
      {
         channel: "Facebook",
         asset: "Short Video: Heritage",
         content: "Video 30s, hook 3s đầu, dẫn vào câu chuyện “di sản biển”, ending logo + CTA.",
         cta: "Book lịch xem du thuyền"
      },
      {
         channel: "Instagram",
         asset: "Carousel: Sunset Luxury",
         content: "8 slide, mỗi slide 1 điểm nhấn dịch vụ (cabin, dining, lounge, deck).",
         cta: "Save để lên lịch"
      },
      {
         channel: "Instagram",
         asset: "Reels: 15s Highlights",
         content: "Cut nhanh 6 cảnh, nhạc cinematic, overlay chữ ngắn 3–4 từ.",
         cta: "Follow để xem lịch trình mới"
      },
      {
         channel: "TikTok",
         asset: "Vertical: 3 Feature Hook",
         content: "Mở 2s với POV, 3 tính năng nổi bật, kết thúc bằng giá trị độc quyền.",
         cta: "Swipe để xem chi tiết"
      },
      {
         channel: "TikTok",
         asset: "Behind The Scenes",
         content: "Quay hậu trường chuẩn bị du thuyền, cảm giác chân thực, gần gũi.",
         cta: "Comment để nhận giá ưu đãi"
      }
   ];

   const showcaseItems = [
      {
         id: 'guideline',
         title: "Visual Brand Guideline",
         src: "/1.BRAND-GUIDELINE-YACHT.html",
         label: "Explore Guideline",
         description: "Hệ thống nhận diện cốt lõi: từ Typography, Color Palette đến Grid System cho các ấn phẩm du thuyền cao cấp."
      },
      {
         id: "web",
         title: "Live Yacht Ecosystem",
         src: "https://yacht.pdl.io.vn/",
         label: "Visit Website",
         description: "Trải nghiệm thực tế nền tảng Booking & Showroom 3D tích hợp, tối ưu hóa tỷ lệ chuyển đổi và trải nghiệm người dùng."
      }
   ];

   return (
      <>
         <Header />
         <PageTransition>
            <div className="min-h-screen text-white font-sans selection:bg-accent selection:text-white">

               {/* SECTION 1: VISUAL OVERVIEW (DARK) */}
               <section className="bg-[#050505] pt-24 pb-24 px-6 md:px-12">
                  <div className="max-w-6xl mx-auto border-b border-white/5 pb-24">
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                     >
                        <div className="flex items-center justify-center gap-4 mb-8">
                           <div className="h-px w-12 bg-white/10"></div>
                           <span className="text-accent text-[10px] font-black tracking-[0.5em] uppercase">Visual System</span>
                           <div className="h-px w-12 bg-white/10"></div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 leading-tight text-white italic">
                           Visual Layout <br /><span className="text-gray-500 text-2xl md:text-4xl italic lowercase">content & design.</span>
                        </h1>
                        <p className="text-gray-500 text-[11px] md:text-xs max-w-2xl mx-auto border-t border-white/10 pt-8 mt-4 leading-relaxed italic uppercase tracking-widest">
                           "Visual hiệu quả không dừng ở thẩm mỹ. Mục tiêu là tạo ra trải nghiệm tin tưởng, thúc đẩy chuyển đổi và làm khách hàng hiểu đúng giá trị thương hiệu."
                        </p>
                     </motion.div>
                     <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
                        <div className="lg:col-span-3 space-y-8 text-gray-400 text-sm leading-relaxed text-justify">
                           <h2 className="text-xl font-bold uppercase tracking-[0.3em] flex items-center gap-4 text-white">
                              <span className="w-8 h-px bg-accent"></span> Value‑Driven Visual System
                           </h2>
                           <p>
                              Ở tầng Visual, chúng tôi tập trung vào việc <strong>làm được gì cho khách hàng</strong>: tăng niềm tin, rút ngắn thời gian ra quyết định và nâng trải nghiệm đặt dịch vụ.
                           </p>
                           <p>
                              Mỗi tài sản thị giác được xây dựng để trả lời 3 câu hỏi: khách hàng hiểu gì, cảm thấy gì, và làm gì tiếp theo. Visual trở thành “đòn bẩy” cho chuyển đổi thay vì chỉ là lớp trang trí.
                           </p>
                           <p>
                              Tại Aurelia Yachts, mô hình <strong>In-house Creative Engine</strong> bảo đảm thông điệp – hình ảnh – trải nghiệm được kiểm soát xuyên suốt từ Concept → Content → Design → Post‑production.
                           </p>
                           <ul className="space-y-4 text-sm">
                              <li className="flex gap-5 group">
                                 <div className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                                 <div className="text-gray-400 leading-snug">
                                    <strong className="text-white uppercase tracking-widest text-xs block mb-1">Conversion‑Ready Assets:</strong> Hệ thống hoá content & visual theo hành trình khách hàng để tối ưu tỷ lệ chuyển đổi.
                                 </div>
                              </li>
                              <li className="flex gap-5 group">
                                 <div className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                                 <div className="text-gray-400 leading-snug">
                                    <strong className="text-white uppercase tracking-widest text-xs block mb-1">Trust & Experience Layer:</strong> Chuẩn hoá tone, layout, motion và media format để tăng cảm giác cao cấp & đáng tin.
                                 </div>
                              </li>
                           </ul>
                        </div>

                        <div className="lg:col-span-2 bg-white/5 p-8 rounded-2xl border border-white/10 relative group hover:border-accent/40 transition-all shadow-2xl">
                           <div className="absolute top-6 right-8 text-accent/10 select-none pointer-events-none group-hover:text-accent/20 transition-colors">
                              <span className="text-8xl font-black italic">v</span>
                           </div>
                           <h3 className="text-[12px] font-black mb-6 text-accent uppercase tracking-[0.4em] flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div> Framework Layer 02
                           </h3>
                           <div className="space-y-4 relative z-10">
                              <div className="bg-black/40 p-5 rounded-xl border border-white/5 group-hover:bg-black/60 transition-colors">
                                 <div className="flex items-center gap-3 mb-2">
                                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Visual DNA</span>
                                 </div>
                                 <p className="text-[11px] text-gray-500 leading-relaxed uppercase">Chuẩn hóa hệ ngôn ngữ thị giác: Typography, Color, Interaction.</p>
                              </div>
                              <div className="bg-black/40 p-5 rounded-xl border border-white/5 group-hover:bg-black/60 transition-colors">
                                 <div className="flex items-center gap-3 mb-2">
                                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Content Inventory</span>
                                 </div>
                                 <p className="text-[11px] text-gray-500 leading-relaxed uppercase">Sản xuất nội dung dựa trên 5 Pillar chiến lược đã đề ra.</p>
                              </div>
                           </div>

                           {/* BOTTOM TAGS IN FRAMEWORK (As per StrategyPlanning) */}
                           <div className="mt-8 pt-6 border-t border-white/10 flex justify-between gap-1 grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100">
                              {['Library', 'Identity', 'UX/UI', 'Strategy'].map(tag => (
                                 <div key={tag} className="text-[8px] font-black text-white px-1.5 py-1 border border-white/20 uppercase tracking-tighter">{tag}</div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* SECTION 2: VISUAL SHOWCASE (LIGHT) */}
               <section className="bg-[#f8f9fa] py-32 px-6 md:px-12 border-t border-gray-200 shadow-inner">
                  <div className="max-w-6xl mx-auto">
                     <div className="mb-20 text-center">
                        <span className="text-gray-400 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Integrated Portfolio</span>
                        <h2 className="text-4xl font-black text-black tracking-tighter uppercase mb-6">Showcase Dự Án Yacht</h2>
                        <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
                        <p className="text-gray-500 text-xs italic">"Bảng nội dung content nghiên cứu, dự tính thiết kế dựa trên nội dung từ Strategy đưa xuống"</p>
                     </div>

                     {/* TABLE 1: WEBSITE / GUIDELINE */}
                     <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-2xl mb-10 group transition-all hover:border-black/10 max-w-5xl mx-auto">
                        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                           <div className="flex items-center gap-4">
                              <div className="w-2 h-8 bg-black"></div>
                              <div>
                                 <h3 className="text-xs font-black tracking-widest uppercase text-black">Website & Guideline Strategy</h3>
                                 <p className="text-[9px] text-gray-400 uppercase mt-1 italic leading-relaxed max-w-sm">Bảng nội dung tập trung narrative, thông điệp, CTA và cấu trúc nội dung triển khai cho Website & Brand Guideline</p>
                              </div>
                           </div>
                           <div className="hidden sm:flex gap-2 text-[9px] font-black text-gray-400">
                              <span>SYNC: OK</span>
                              <span className="text-black">VERSION 2.1</span>
                           </div>
                        </div>
                        <div className="overflow-x-auto">
                           <table className="w-full text-left border-collapse">
                              <thead>
                                 <tr className="border-b border-gray-100 bg-gray-50/30">
                                    <th className="p-4 text-[9px] font-black uppercase tracking-widest text-gray-400">Asset</th>
                                    <th className="p-4 text-[9px] font-black uppercase tracking-widest text-gray-400">Module</th>
                                    <th className="p-4 text-[9px] font-black uppercase tracking-widest text-gray-400">Content Focus</th>
                                    <th className="p-4 text-[9px] font-black uppercase tracking-widest text-gray-400">CTA</th>
                                 </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-50">
                                 {websiteTable.map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors group/row text-black">
                                       <td className="p-4 text-[11px] font-bold transition-colors">{row.asset}</td>
                                       <td className="p-4 text-[9px] text-gray-400 font-mono">{row.module}</td>
                                       <td className="p-4 text-[10px] text-gray-500 max-w-[360px] leading-relaxed">
                                          <ul className="list-disc pl-4 space-y-1">
                                             {row.content.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                             ))}
                                          </ul>
                                       </td>
                                       <td className="p-4 text-[9px] text-gray-500 uppercase tracking-widest">{row.cta}</td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                     </div>

                     {/* TABLE 2: SOCIAL CHANNELS */}
                     <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-2xl mb-12 group transition-all hover:border-black/10 max-w-5xl mx-auto">
                        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                           <div className="flex items-center gap-4">
                              <div className="w-2 h-8 bg-black"></div>
                              <div>
                                 <h3 className="text-xs font-black tracking-widest uppercase text-black">Social Activation Plan</h3>
                                 <p className="text-[9px] text-gray-400 uppercase mt-1 italic leading-relaxed max-w-sm">Đẩy mạnh kênh FB/IG/TikTok với hook rõ ràng, format cụ thể và CTA nhất quán</p>
                              </div>
                           </div>
                           <div className="hidden sm:flex gap-2 text-[9px] font-black text-gray-400">
                              <span>SYNC: OK</span>
                              <span className="text-black">VERSION 2.1</span>
                           </div>
                        </div>
                        <div className="overflow-x-auto">
                           <table className="w-full text-left border-collapse">
                              <thead>
                                 <tr className="border-b border-gray-100 bg-gray-50/30">
                                    <th className="p-4 text-[9px] font-black uppercase tracking-widest text-gray-400">Channel</th>
                                    <th className="p-4 text-[9px] font-black uppercase tracking-widest text-gray-400">Asset</th>
                                    <th className="p-4 text-[9px] font-black uppercase tracking-widest text-gray-400">Content Focus</th>
                                    <th className="p-4 text-[9px] font-black uppercase tracking-widest text-gray-400">CTA</th>
                                 </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-50">
                                 {socialTable.map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors group/row text-black">
                                       <td className="p-4 text-[9px] text-gray-500 uppercase tracking-widest">{row.channel}</td>
                                       <td className="p-4 text-[11px] font-bold transition-colors">{row.asset}</td>
                                       <td className="p-4 text-[10px] text-gray-500 max-w-[360px] leading-relaxed">{row.content}</td>
                                       <td className="p-4 text-[9px] text-gray-500 uppercase tracking-widest">{row.cta}</td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {showcaseItems.map(item => (
                           <div
                              key={item.id}
                              onClick={() => setModalData(item)}
                              className="bg-white border border-gray-200 rounded-2xl p-10 flex flex-col justify-between h-[500px] cursor-pointer group hover:border-[#111] hover:-translate-y-2 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden"
                           >
                              <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                 {item.id === 'guideline' ? (
                                    <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M13 9V3.5L18.5 9M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6z" /></svg>
                                 ) : (
                                    <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                                 )}
                              </div>

                              <div className="relative z-10">
                                 <div className="flex items-center gap-4 mb-8">
                                    <div className="w-2 h-2 rounded-full bg-black group-hover:bg-accent transition-colors"></div>
                                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-[0.4em]">{item.id === 'guideline' ? 'Brand Identity' : 'Live Platform'}</span>
                                 </div>
                                 <h3 className="text-5xl font-black tracking-tighter uppercase mb-6 leading-none text-black">{item.title}</h3>
                                 <p className="text-gray-500 text-sm leading-relaxed max-w-[85%]">{item.description}</p>
                              </div>

                              <div className="relative z-10 flex items-center gap-6 group/btn">
                                 <span className="text-[11px] font-black uppercase tracking-[0.3em] text-black group-hover:text-accent transition-colors">{item.label}</span>
                                 <div className="w-16 h-px bg-black/10 group-hover:w-24 group-hover:bg-accent transition-all"></div>
                              </div>
                           </div>
                        ))}
                     </div>

                     <ContentPager
                        prev={{
                           to: '/strategy-planning',
                           title: 'Strategy',
                           description: 'Return to the market logic, research lens, and campaign planning.'
                        }}
                        next={{
                           to: '/organic-paid-growth',
                           title: 'Growth',
                           description: 'Move forward into media execution, optimization, and scaling.'
                        }}
                     />
                  </div>
               </section>

               {/* MODAL SYSTEM */}
               <AnimatePresence>
                  {modalData && (
                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl"
                        style={{ willChange: 'opacity' }}
                     >
                        <div className="absolute inset-0 cursor-pointer" onClick={closeModal}></div>

                        <motion.div
                           initial={{ scale: 0.9, y: 20, opacity: 0 }}
                           animate={{ scale: 1, y: 0, opacity: 1 }}
                           exit={{ scale: 0.9, y: 20, opacity: 0 }}
                           className="relative z-10 w-full h-full max-w-[1600px] bg-[#0d0d0d] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col"
                           style={{ willChange: 'transform, opacity' }}
                        >
                           {/* Modal Header */}
                           <div className="p-6 md:p-8 flex justify-between items-center border-b border-white/5 bg-[#0a0a0a]">
                              <div className="flex items-center gap-4">
                                 <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                                 <h3 className="text-lg font-bold tracking-tighter uppercase">{modalData.title}</h3>
                              </div>
                              <button
                                 onClick={closeModal}
                                 className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-widest hover:text-accent transition-colors"
                              >
                                 Close View
                                 <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-black transition-all text-xl">&times;</div>
                              </button>
                           </div>

                           {/* Modal Content */}
                           <div className="flex-1 bg-white relative overflow-y-auto overflow-x-hidden" style={{ transform: 'translateZ(0)' }}>
                              {modalData.id === 'guideline' ? (
                                 <BrandGuideline />
                              ) : (
                                 <iframe
                                    src={modalData.src}
                                    className="w-full h-full border-none bg-white"
                                    title="Integrated Content"
                                    loading="lazy"
                                 />
                              )}
                           </div>
                        </motion.div>
                     </motion.div>
                  )}
               </AnimatePresence>

               <SiteFooter />
            </div>
         </PageTransition>

      </>
   );
};

export default ContentCreationDesign;
