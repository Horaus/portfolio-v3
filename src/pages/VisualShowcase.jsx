import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import PageTransition from '../components/layout/PageTransition';
import SiteFooter from '../components/layout/SiteFooter';

// Media Column Component for the floating gallery
const FloatingColumn = ({ images, speed = 1, reverse = false }) => {
  return (
    <div className="flex flex-col gap-6 py-6 overflow-hidden h-full">
      <motion.div 
        animate={{ 
          y: reverse ? [0, -1000] : [-1000, 0] 
        }}
        transition={{ 
          duration: 40 / speed, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex flex-col gap-6"
      >
        {[...images, ...images].map((img, i) => (
          <div key={i} className="relative group rounded-xl overflow-hidden cursor-pointer shadow-2xl border border-white/5 aspect-[3/4] md:aspect-[4/5]">
            <img src={img} alt="Showcase" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-center items-center justify-center">
               <span className="text-[10px] font-black tracking-widest uppercase text-white border border-white/20 px-4 py-2 bg-black/30 backdrop-blur-sm">Enlarge Asset</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const VisualShowcase = () => {
  const tableData = [
    { asset: "Hero Film: The Legacy of Sun", type: "4K Video", channel: "YouTube/Cinema", hook: "Craftsmanship & Heritage", status: "Ready" },
    { asset: "Lifestyle Series: Sunset Party", type: "Carousel", channel: "Instagram", hook: "Elite Social Experience", status: "Ready" },
    { asset: "Vertical Series: Modernity", type: "9:16 Video", channel: "TikTok/Reels", hook: "Tech-Savy Performance", status: "Editing" },
    { asset: "Editorial: The Golden Hour", type: "Photo Set", channel: "Vogue/Luxury Ads", hook: "Timeless Aesthetics", status: "Ready" },
    { asset: "Interior Walkthrough", type: "360 Video", channel: "Website/Sales", hook: "Material Perfection", status: "Production" },
    { asset: "VIP Invite: Private Gala", type: "Direct Mail", channel: "Physical/DM", hook: "Exclusive Membership", status: "Concept" },
    { asset: "Drone Perspective", type: "Raw Clips", channel: "Library", hook: "Grandeur & Scale", status: "Ready" },
  ];

  // Using the generated images (placeholders)
  const images = [
    "/images/brand/yacht-sunset.jpg",   // Yacht sunset
    "/images/brand/marine-luxury.jpg",  // Marine luxury
    "/images/brand/yacht-details.jpg",  // Details
    "/images/brand/lifestyle.jpg"       // Lifestyle
  ];

  return (
    <>
      <Header />
      <PageTransition>
        <div className="bg-black min-h-screen pt-24 pb-24 text-white font-sans selection:bg-accent selection:text-white">
          
          {/* 1. HERO SECTION */}
          <section className="px-6 md:px-12 max-w-6xl mx-auto mb-32">
             <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-white/10 pb-16">
                <div className="max-w-2xl">
                  <span className="text-accent text-xs font-black tracking-[0.4em] uppercase mb-4 block animate-pulse">Preview Prototype</span>
                  <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-6 leading-[0.9]">
                    Visual & <br/><span className="text-gray-600">Inventory.</span>
                  </h1>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed tracking-wide">
                    Hệ thống lưu trữ và quản trị tài liệu hình ảnh chuyên sâu cho dự án Aurelia Yachts. 
                    Chuyển đổi từ định dạng báo cáo truyền thống sang hệ thống thư mục dữ liệu tương tác.
                  </p>
                </div>
                <div className="hidden lg:block text-right">
                   <div className="text-[10px] font-bold text-gray-700 tracking-[0.3em] uppercase mb-2">Technical Standards</div>
                   <div className="flex gap-4">
                      <div className="px-3 py-1 border border-white/10 text-gray-500 text-[9px] font-bold uppercase">4K ProRes</div>
                      <div className="px-3 py-1 border border-white/10 text-gray-500 text-[9px] font-bold uppercase">Rec.709</div>
                      <div className="px-3 py-1 bg-accent/20 border border-accent/30 text-accent text-[9px] font-bold uppercase underline">Draft v2</div>
                   </div>
                </div>
             </div>
          </section>

          {/* 2. FLOATING MEDIA GALLERY */}
          <section className="mb-48 relative overflow-hidden bg-white/5 border-y border-white/5 py-24">
             <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 pointer-events-none"></div>
             
             <div className="max-w-6xl mx-auto px-6 md:px-12 mb-12 relative z-20">
                <div className="flex items-center gap-4 mb-4">
                   <div className="h-[1px] w-12 bg-accent"></div>
                   <h2 className="text-xs font-black tracking-[0.5em] uppercase text-accent">Visual Drifting Gallery</h2>
                </div>
                <p className="text-gray-400 text-xs italic uppercase">AI-Generated Concept Boards (Endless Summer Series)</p>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-12 h-[800px] overflow-hidden">
                <FloatingColumn images={images} speed={0.8} />
                <FloatingColumn images={images} speed={1.2} reverse={true} />
                <FloatingColumn images={images} speed={1} />
                <FloatingColumn images={images} speed={0.9} reverse={true} />
             </div>
          </section>

          {/* 3. EXCEL-STYLE CONTENT TABLE */}
          <section className="px-6 md:px-12 max-w-6xl mx-auto mb-32">
             <div className="bg-[#080808] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-8 border-b border-white/5 flex justify-between items-center bg-[#0d0d0d]">
                   <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                      <h2 className="text-sm font-black tracking-[0.2em] uppercase">Content Assets Inventory</h2>
                   </div>
                   <div className="flex gap-2">
                       <span className="text-[9px] bg-white/5 text-gray-500 px-3 py-1 rounded">Last Sync: 10m ago</span>
                       <button className="text-[9px] bg-white text-black font-black px-4 py-1 rounded-sm uppercase tracking-tighter hover:bg-accent transition-colors">Export .XLSX</button>
                   </div>
                </div>

                <div className="overflow-x-auto">
                   <table className="w-full text-left border-collapse">
                      <thead>
                         <tr className="border-b border-white/10 bg-white/5">
                            <th className="p-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Asset Name</th>
                            <th className="p-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Format</th>
                            <th className="p-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Main Channel</th>
                            <th className="p-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Creative Hook</th>
                            <th className="p-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                         {tableData.map((row, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors group">
                               <td className="p-5 text-xs font-bold text-white tracking-wide group-hover:text-accent transition-colors">{row.asset}</td>
                               <td className="p-5 text-[10px] text-gray-500 font-mono italic">{row.type}</td>
                               <td className="p-5 text-[10px] text-gray-400 uppercase tracking-widest">{row.channel}</td>
                               <td className="p-5 text-[10px] text-gray-500 leading-snug">{row.hook}</td>
                               <td className="p-5">
                                  <span className={`text-[8px] font-black px-2 py-0.5 rounded-sm uppercase tracking-tighter ${
                                     row.status === 'Ready' ? 'bg-green-500/20 text-green-500 border border-green-500/30' : 
                                     row.status === 'Concept' ? 'bg-blue-500/20 text-blue-500 border border-blue-500/30' :
                                     'bg-orange-500/20 text-orange-500 border border-orange-500/30'
                                  }`}>
                                     {row.status}
                                  </span>
                               </td>
                            </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
                
                <div className="p-4 bg-white/2 border-t border-white/5 flex justify-center">
                   <span className="text-[9px] text-gray-600 uppercase tracking-[0.5em] font-bold">End of Database — Folio_Plan v2.0</span>
                </div>
             </div>
          </section>

          {/* 4. FOOTER CALL TO ACTION */}
          <section className="px-6 md:px-12 max-w-2xl mx-auto text-center">
             <p className="text-gray-500 text-xs mb-8 italic">"Hệ thống thị giác không chỉ là tập hợp các tệp tin, nó là ngôn ngữ thương hiệu được số hóa để thực thi chiến lược tăng trưởng."</p>
             <button 
               onClick={() => window.history.back()}
               className="group flex items-center gap-4 mx-auto text-xs font-black tracking-[0.4em] uppercase hover:text-accent transition-colors"
             >
                <div className="w-8 h-px bg-gray-600 group-hover:bg-accent transition-colors"></div>
                Return to Systems
             </button>
          </section>

          <SiteFooter />
        </div>
      </PageTransition>
    </>
  );
};

export default VisualShowcase;
