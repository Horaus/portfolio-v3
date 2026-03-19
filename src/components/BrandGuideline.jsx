
import React from 'react';

export default function BrandGuideline() {
  return (
    <div className="font-sans text-[#062631] antialiased w-full min-h-screen relative overflow-y-auto overflow-x-hidden bg-[#E5E5E5] pt-10 pb-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Poppins:wght@300;400;500;600;700&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Poppins', sans-serif; }
        .font-heading { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Poppins', sans-serif; }
        
        .presentation-board {
          max-width: 1440px;
          margin: 0 auto;
          background-color: #FFFFFF;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          will-change: transform;
          transform: translateZ(0);
        }
        .cs-section { padding: 120px 80px; }
        .gradient-navy { background: linear-gradient(135deg, #062631 0%, #124457 100%); }
        .glass-card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); }
        .section-title-teal { color: #157A7A; }
        .section-title-gold { color: #C5A047; }
        .grid-visual { background-image: repeating-linear-gradient(to right, transparent, transparent calc(8.33% - 20px), rgba(21, 122, 122, 0.1) calc(8.33% - 20px), rgba(21, 122, 122, 0.1) 8.33%); }
        .wireframe-box { background-color: #F3F4F6; border: 1px solid #D1D5DB; }
        .wireframe-text { height: 8px; background-color: #E5E7EB; border-radius: 4px; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Flow line override */
        .flow-line { height: 2px; background-color: #C5A047; position: relative; }
        .flow-line::after { content: ''; position: absolute; right: 0; top: -4px; border-left: 6px solid #C5A047; border-top: 5px solid transparent; border-bottom: 5px solid transparent; }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
      `}</style>
      
      <div className="presentation-board relative" style={{ isolation: 'isolate', transform: 'translateZ(0)' }}>

        
        <section
            className="h-[900px] flex flex-col justify-center items-center text-center relative gradient-navy overflow-hidden">
            <div className="absolute inset-0 opacity-40 pointer-events-none" style={{"willChange":"transform","transform":"translateZ(0)"}}>
                <div className="absolute top-[-30%] left-[-20%] w-[80%] h-[80%] rounded-full bg-[#C5A047]/20 blur-[150px] translate-z-0"></div>
                <div className="absolute bottom-[-30%] right-[-20%] w-[80%] h-[80%] rounded-full bg-[#157A7A]/20 blur-[150px] translate-z-0">
                </div>
            </div>

            <div className="relative z-10 space-y-8 px-6 w-full max-w-5xl mx-auto animate-fade-in-up">
                <div
                    className="inline-block px-4 py-1.5 border border-[#C5A047]/30 rounded-full text-[#C5A047] uppercase tracking-[0.4em] text-[10px] font-bold mb-4 bg-[#062631]/50 backdrop-blur-md">
                    Professional UI/UX Showcase
                </div>
                <h1 className="font-serif text-6xl md:text-[140px] text-[#F5F0E8] font-bold leading-[0.85] tracking-tight">
                    Aurelia Yachts
                </h1>
                <h2 className="font-serif text-3xl md:text-5xl text-[#C5A047] italic font-medium mt-6">
                    Redefining Luxury Travel
                </h2>
                <div className="w-24 h-[1px] bg-[#C5A047]/50 mx-auto my-12"></div>
                <p className="text-[#F5F0E8]/70 max-w-2xl mx-auto text-lg leading-relaxed italic font-light">
                    "A digital ecosystem connecting travelers with premium yacht experiences across Vietnam's most iconic
                    waters."
                </p>
            </div>
        </section>

        
        <section className="cs-section bg-white">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12">
                    <div>
                        <span className="text-xs font-bold text-[#C5A047] uppercase tracking-[0.4em] block mb-2">Project
                            Goal</span>
                        <span className="text-[9px] text-[#C5A047]/60 uppercase tracking-widest block mb-4">Mục tiêu dự án</span>
                        <h3 className="font-serif text-4xl text-[#062631] mb-6">Redefining Excellence in Yacht Chartering</h3>
                        <div className="space-y-4">
                            <p className="text-[#062631]/60 leading-relaxed">
                                Aurelia Yachts aims to bridge the gap between discerning travelers and the most exclusive yacht
                                owners in Vietnam. Our mission is to provide a seamless, high-end booking platform that
                                reflects the prestige of the vessels themselves.
                            </p>
                            <p className="text-[10px] text-[#062631]/40 leading-relaxed italic">
                                Aurelia Yachts hướng tới việc kết nối những du khách thượng lưu với những chủ sở hữu du thuyền
                                độc quyền nhất tại Việt Nam. Sứ mệnh của chúng tôi là cung cấp một nền tảng đặt chỗ cao cấp,
                                liền mạch, phản ánh đúng đẳng cấp của chính những con tàu.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="p-8 bg-[#F5F0E8] rounded-3xl border-l-4 border-[#062631]">
                            <h4 className="font-bold text-[#062631] mb-2 flex items-center gap-3">
                                <i className="fa-solid fa-circle-exclamation text-[#062631]/30"></i>
                                The Problem
                            </h4>
                            <p className="text-sm text-[#062631]/70 leading-relaxed">
                                Traditional yacht booking processes are fragmented, outdated, and lack the transparency
                                needed for high-value luxury transactions. Customers often face uncertainty regarding
                                vessel quality and booking security.
                            </p>
                        </div>

                        <div className="p-8 bg-[#157A7A]/5 rounded-3xl border-l-4 border-[#157A7A]">
                            <h4 className="font-bold text-[#157A7A] mb-2 flex items-center gap-3">
                                <i className="fa-solid fa-lightbulb text-[#157A7A]/30"></i>
                                The Solution
                            </h4>
                            <p className="text-sm text-[#062631]/70 leading-relaxed">
                                A premium digital ecosystem featuring verified fleet listings, real-time availability,
                                and an immersive user interface that builds trust through high-fidelity visual
                                storytelling and efficient booking flows.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="aspect-[4/5] bg-[#F5F0E8] rounded-[40px] overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1200" loading="lazy" decoding="async"
                            className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="absolute -bottom-10 -left-10 bg-[#062631] p-8 rounded-3xl shadow-2xl text-white space-y-4">
                        <div className="flex items-end gap-3">
                            <span className="text-4xl font-bold text-[#C5A047] font-serif">150+</span>
                            <span className="text-[10px] text-[#F5F0E8]/40 uppercase tracking-widest mb-1 pb-1">Exclusive
                                Yachts</span>
                        </div>
                        <div className="w-12 h-px bg-[#C5A047]/30"></div>
                        <div className="flex items-end gap-3">
                            <span className="text-4xl font-bold text-[#C5A047] font-serif">24/7</span>
                            <span className="text-[10px] text-[#F5F0E8]/40 uppercase tracking-widest mb-1 pb-1">Concierge
                                Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="cs-section bg-[#F5F0E8]">
            <div className="text-center mb-20 px-4">
                <span className="text-xs font-bold text-[#157A7A] uppercase tracking-[0.4em] block mb-2">Design System</span>
                <span className="text-[9px] text-[#157A7A]/60 uppercase tracking-widest block mb-4">Hệ thống thiết kế</span>
                <h3 className="font-serif text-5xl text-[#062631]">Brand Identity</h3>
                <p className="text-[#062631]/50 text-sm mt-4">A sophisticated visual language evoking ocean, luxury, and warmth.</p>
            </div>

            
            <div className="grid md:grid-cols-3 gap-8 mb-24">
                <div className="gradient-navy rounded-3xl p-12 flex flex-col items-center justify-center h-56 shadow-xl group duration-500">
                    <h3 className="font-serif text-4xl italic font-semibold text-[#F5F0E8]">Aurelia Yachts</h3>
                    <p className="text-[10px] mt-4 text-[#C5A047] uppercase tracking-widest font-bold opacity-60">On Dark Background</p>
                </div>
                <div className="bg-white rounded-3xl p-12 flex flex-col items-center justify-center h-56 shadow-xl border border-[#062631]/5 group duration-500">
                    <h3 className="font-serif text-4xl italic font-semibold text-[#062631]">Aurelia Yachts</h3>
                    <p className="text-[10px] mt-4 text-[#062631]/40 uppercase tracking-widest font-bold opacity-60">On Light Background</p>
                </div>
                <div className="bg-[#157A7A] rounded-3xl p-12 flex flex-col items-center justify-center h-56 shadow-xl group duration-500">
                    <h3 className="font-serif text-4xl italic font-semibold text-[#F5F0E8]">Aurelia Yachts</h3>
                    <p className="text-[10px] mt-4 text-[#F5F0E8]/50 uppercase tracking-widest font-bold opacity-60">On Teal Background</p>
                </div>
            </div>

            
            <div className="grid lg:grid-cols-2 gap-20">
                
                <div className="space-y-10">
                    <h4 className="font-serif text-3xl text-[#062631]">Color Palette</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#062631]/5">
                            <div className="h-20 bg-[#062631] rounded-xl mb-3"></div>
                            <span className="block font-bold text-sm">Navy</span>
                            <span className="text-[10px] text-[#062631]/40 font-mono">#062631</span>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#062631]/5">
                            <div className="h-20 bg-[#157A7A] rounded-xl mb-3"></div>
                            <span className="block font-bold text-sm">Teal</span>
                            <span className="text-[10px] text-[#062631]/40 font-mono">#157A7A</span>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#062631]/5">
                            <div className="h-20 bg-[#C5A047] rounded-xl mb-3"></div>
                            <span className="block font-bold text-sm">Gold</span>
                            <span className="text-[10px] text-[#062631]/40 font-mono">#C5A047</span>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#062631]/5">
                            <div className="h-20 bg-[#EBE3D5] rounded-xl mb-3"></div>
                            <span className="block font-bold text-sm">Cream Dark</span>
                            <span className="text-[10px] text-[#062631]/40 font-mono">#EBE3D5</span>
                        </div>
                    </div>
                </div>

                
                <div className="space-y-10">
                    <h4 className="font-serif text-3xl text-[#062631]">Typography</h4>
                    <div className="space-y-8">
                        <div className="p-8 bg-white rounded-3xl border border-[#062631]/5 shadow-sm">
                            <span className="text-[10px] text-[#C5A047] font-bold uppercase tracking-widest block mb-4">Headings</span>
                            <h3 className="font-serif text-5xl text-[#062631] leading-tight mb-2">Playfair Display</h3>
                            <p className="font-serif text-xl italic text-[#157A7A]">Serif elegance with high contrast.</p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl border border-[#062631]/5 shadow-sm">
                            <span className="text-[10px] text-[#C5A047] font-bold uppercase tracking-widest block mb-4">Body Content</span>
                            <h3 className="font-sans text-4xl text-[#062631] font-light leading-tight mb-2">Poppins</h3>
                            <p className="font-sans text-sm text-[#062631]/60 leading-relaxed italic">Clean geometric sans-serif for readability.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="cs-section bg-[#F5F0E8]">
            <div className="text-center mb-20">
                <span className="text-xs font-bold text-[#157A7A] uppercase tracking-[0.4em] block mb-2">Structure</span>
                <span className="text-[9px] text-[#157A7A]/60 uppercase tracking-widest block mb-4">Cấu trúc thông tin</span>
                <h3 className="font-serif text-5xl text-[#062631]">Site Map</h3>
                <p className="text-[#062631]/50 text-sm mt-4">Designed for deep discoverability and frictionless navigation.</p>
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="flex justify-center mb-12">
                    <div className="bg-[#062631] text-white px-10 py-4 rounded-xl shadow-lg font-bold text-lg border-2 border-[#C5A047]/30">
                        Home Page
                    </div>
                </div>
                <div className="flex justify-center -mt-12 h-12">
                    <div className="w-px bg-[#C5A047]/50 h-full"></div>
                </div>
                <div className="max-w-4xl mx-auto h-px bg-[#C5A047]/50"></div>

                <div className="grid grid-cols-4 gap-8 pt-8">
                    <div className="flex flex-col items-center">
                        <div className="w-px bg-[#C5A047]/50 h-8 -mt-8"></div>
                        <div className="bg-white border-2 border-[#157A7A] p-4 rounded-lg w-full text-center shadow-md">
                            <span className="text-[10px] font-bold text-[#157A7A] uppercase mb-1 block">Yachts</span>
                            <p className="font-bold text-[#062631] text-sm">Fleet Explorer</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-px bg-[#C5A047]/50 h-8 -mt-8"></div>
                        <div className="bg-white border-2 border-[#062631]/10 p-4 rounded-lg w-full text-center shadow-md">
                            <span className="text-[10px] font-bold text-[#157A7A] uppercase mb-1 block">Discover</span>
                            <p className="font-bold text-[#062631] text-sm">Destinations</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-px bg-[#C5A047]/50 h-8 -mt-8"></div>
                        <div className="bg-white border-2 border-[#062631]/10 p-4 rounded-lg w-full text-center shadow-md">
                            <span className="text-[10px] font-bold text-[#157A7A] uppercase mb-1 block">Help</span>
                            <p className="font-bold text-[#062631] text-sm">Aurelia Support</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-px bg-[#C5A047]/50 h-8 -mt-8"></div>
                        <div className="bg-white border-2 border-[#062631]/10 p-4 rounded-lg w-full text-center shadow-md">
                            <span className="text-[10px] font-bold text-[#157A7A] uppercase mb-1 block">Account</span>
                            <p className="font-bold text-[#062631] text-sm">Profile</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="cs-section bg-white overflow-hidden">
            <div className="text-center mb-24">
                <span className="text-xs font-bold text-[#C5A047] uppercase tracking-[0.4em] block mb-2">Architecture</span>
                <span className="text-[9px] text-[#C5A047]/60 uppercase tracking-widest block mb-4">Kiến trúc hệ thống</span>
                <h3 className="font-serif text-5xl text-[#062631]">User Flow Diagram</h3>
                <p className="text-[#062631]/50 text-sm mt-4 max-w-2xl mx-auto">A logical mapping of the user journey from entry to successful conversion.</p>
            </div>

            <div className="max-w-6xl mx-auto relative px-10">
                <div className="relative z-10 space-y-24">
                    <div className="flex justify-between items-start">
                        <div className="w-48 text-center">
                            <div className="bg-[#062631] p-6 rounded-2xl shadow-xl mb-6 border-b-4 border-[#C5A047]">
                                <span className="text-white font-bold text-[10px] uppercase tracking-widest">User Entry</span>
                            </div>
                            <h4 className="font-bold text-sm text-[#062631] mb-1">Landing Page</h4>
                        </div>
                        <div className="w-12 h-px bg-[#C5A047]/30 mt-12"></div>
                        <div className="w-48 text-center pt-10">
                            <div className="bg-[#F5F0E8] p-6 rounded-2xl shadow-md mb-6 border border-[#C5A047]/20">
                                <i className="fa-solid fa-magnifying-glass text-[#C5A047] mb-3 text-xl"></i>
                                <div className="text-[#062631] font-bold text-[10px] uppercase">Search & Filter</div>
                            </div>
                        </div>
                        <div className="w-12 h-px bg-[#C5A047]/30 mt-12"></div>
                        <div className="w-64 text-center">
                            <div className="relative inline-block">
                                <div className="w-32 h-32 bg-[#C5A047] rotate-45 rounded-xl shadow-lg flex items-center justify-center mx-auto">
                                    <div className="-rotate-45 text-[#062631] font-bold text-[10px] text-center px-4">Found Ideal Yacht?</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="cs-section bg-[#F5F0E8]">
            <div className="text-center mb-20">
                <span className="text-xs font-bold text-[#062631] uppercase tracking-[0.4em] block mb-2">Lo-Fi Setup</span>
                <span className="text-[9px] text-[#062631]/40 uppercase tracking-widest block mb-4">Phác thảo sơ bộ</span>
                <h3 className="font-serif text-5xl text-[#062631]">Wireframes</h3>
                <p className="text-[#062631]/50 text-sm mt-4">Stripping away the visuals to focus on information hierarchy and
                    functionality.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                
                <div className="space-y-6">
                    <h5 className="text-center font-bold text-xs uppercase text-[#062631]/40">Home Sketch</h5>
                    <div className="wireframe-box h-[500px] rounded-xl p-4 space-y-4 shadow-sm">
                        
                        <div className="flex justify-between items-center mb-8">
                            <div className="w-12 h-4 wireframe-box"></div>
                            <div className="flex gap-2">
                                <div className="w-8 h-2 wireframe-box rounded"></div>
                                <div className="w-8 h-2 wireframe-box rounded"></div>
                            </div>
                        </div>
                        
                        <div className="h-32 wireframe-box bg-gray-300 flex items-center justify-center rounded-lg">
                            <i className="fa-solid fa-image text-gray-400"></i>
                        </div>
                        <div className="wireframe-text w-3/4 mx-auto mt-6"></div>
                        <div className="wireframe-text w-1/2 mx-auto"></div>
                        
                        <div className="h-10 wireframe-box border-dashed rounded-lg mt-8 flex px-2 items-center gap-2">
                            <div className="w-full h-4 bg-gray-200 rounded"></div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 mt-10">
                            <div className="h-24 wireframe-box bg-gray-100 rounded"></div>
                            <div className="h-24 wireframe-box bg-gray-100 rounded"></div>
                        </div>
                    </div>
                </div>

                
                <div className="space-y-6 translate-y-12">
                    <h5 className="text-center font-bold text-xs uppercase text-[#062631]/40">Fleet Explorer (Search)</h5>
                    <div
                        className="wireframe-box h-[500px] rounded-xl p-4 space-y-4 shadow-xl bg-white border-2 border-dashed">
                        
                        <div className="flex gap-2 mb-6">
                            <div className="w-16 h-6 wireframe-box rounded-full"></div>
                            <div className="w-16 h-6 wireframe-box rounded-full"></div>
                            <div className="w-16 h-6 wireframe-box rounded-full"></div>
                        </div>
                        
                        <div className="border-2 border-gray-100 p-3 rounded-xl space-y-3">
                            <div className="h-32 wireframe-box bg-gray-200 rounded-lg"></div>
                            <div className="wireframe-text w-1/2"></div>
                            <div className="wireframe-text w-3/4"></div>
                            <div className="flex justify-between items-center mt-4">
                                <div className="w-12 h-4 wireframe-box"></div>
                                <div className="w-12 h-6 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                        
                        <div className="flex gap-4 mt-6">
                            <div className="flex-1 h-32 wireframe-box rounded-xl"></div>
                            <div className="flex-1 h-32 wireframe-box rounded-xl"></div>
                        </div>
                    </div>
                </div>

                
                <div className="space-y-6">
                    <h5 className="text-center font-bold text-xs uppercase text-[#062631]/40">Yacht Detail</h5>
                    <div className="wireframe-box h-[500px] rounded-xl p-4 space-y-5 shadow-sm">
                        
                        <div className="grid grid-cols-3 gap-2 h-40">
                            <div className="col-span-2 wireframe-box bg-gray-200"></div>
                            <div className="flex flex-col gap-2">
                                <div className="flex-1 wireframe-box bg-gray-100"></div>
                                <div className="flex-1 wireframe-box bg-gray-100"></div>
                            </div>
                        </div>
                        
                        <div className="flex justify-between items-start">
                            <div className="space-y-2 flex-1">
                                <div className="wireframe-text w-40"></div>
                                <div className="wireframe-text w-24"></div>
                            </div>
                            <div className="w-16 h-16 rounded-full wireframe-box"></div>
                        </div>
                        
                        <div className="grid grid-cols-4 gap-2 pt-4">
                            <div className="h-8 wireframe-box rounded"></div>
                            <div className="h-8 wireframe-box rounded"></div>
                            <div className="h-8 wireframe-box rounded"></div>
                            <div className="h-8 wireframe-box rounded"></div>
                        </div>
                        
                        <div className="mt-8 p-4 bg-white border border-gray-100 rounded-xl shadow-inner">
                            <div className="wireframe-text w-full mb-3"></div>
                            <div className="h-10 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="cs-section bg-[#F5F0E8]">
            <div className="grid lg:grid-cols-2 gap-20">
                
                <div className="space-y-8">
                    <div>
                        <span
                            className="text-xs font-bold text-[#157A7A] uppercase tracking-[0.4em] block mb-2">Foundation</span>
                        <span className="text-[9px] text-[#157A7A]/60 uppercase tracking-widest block mb-4">Nền tảng thiết kế</span>
                        <h3 className="font-serif text-4xl text-[#062631]">Grid Layout System</h3>
                    </div>

                    <div className="relative bg-white p-6 rounded-3xl shadow-xl overflow-hidden group">
                        
                        <div className="absolute inset-x-6 inset-y-6 flex gap-4 pointer-events-none">
                            <div className="flex-1 bg-[#157A7A]/5 border-x border-[#157A7A]/10"></div>
                            <div className="flex-1 bg-[#157A7A]/5 border-x border-[#157A7A]/10"></div>
                            <div className="flex-1 bg-[#157A7A]/5 border-x border-[#157A7A]/10"></div>
                            <div className="flex-1 bg-[#157A7A]/5 border-x border-[#157A7A]/10"></div>
                            <div className="flex-1 bg-[#157A7A]/5 border-x border-[#157A7A]/10"></div>
                            <div className="flex-1 bg-[#157A7A]/5 border-x border-[#157A7A]/10"></div>
                            <div className="flex-1 bg-[#157A7A]/5 border-x border-[#157A7A]/10"></div>
                            <div className="flex-1 bg-[#157A7A]/5 border-x border-[#157A7A]/10"></div>
                            <div className="flex-1 bg-[#157A7A]/5 border-x border-[#157A7A]/10"></div>
                            <div className="flex-1 bg-[#157A7A]/5 border-x border-[#157A7A]/10"></div>
                            <div className="flex-1 bg-[#157A7A]/5 border-x border-[#157A7A]/10"></div>
                            <div className="flex-1 bg-[#157A7A]/5 border-x border-[#157A7A]/10"></div>
                        </div>

                        <div
                            className="relative z-10 space-y-4 py-10 opacity-40 duration-500">
                            <div className="h-8 bg-[#062631]/10 rounded w-full"></div>
                            <div className="flex gap-4">
                                <div className="h-32 bg-[#062631]/10 rounded w-1/3"></div>
                                <div className="h-32 bg-[#062631]/10 rounded w-1/3"></div>
                                <div className="h-32 bg-[#062631]/10 rounded w-1/3"></div>
                            </div>
                            <div className="h-20 bg-[#062631]/10 rounded w-full"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="text-center">
                            <span className="block text-2xl font-serif text-[#062631]">1440px</span>
                            <span className="text-[10px] text-[#062631]/40 uppercase font-bold">Container</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-2xl font-serif text-[#062631]">12</span>
                            <span className="text-[10px] text-[#062631]/40 uppercase font-bold">Columns</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-2xl font-serif text-[#062631]">32px</span>
                            <span className="text-[10px] text-[#062631]/40 uppercase font-bold">Gutter</span>
                        </div>
                    </div>
                </div>

                
                <div className="space-y-8">
                    <div>
                        <span className="text-xs font-bold text-[#C5A047] uppercase tracking-[0.4em] block mb-2">Visual
                            Details</span>
                        <span className="text-[9px] text-[#C5A047]/60 uppercase tracking-widest block mb-4">Chi tiết thị giác</span>
                        <h3 className="font-serif text-4xl text-[#062631]">Iconography Set</h3>
                    </div>

                    <div className="bg-[#062631] p-10 rounded-3xl shadow-xl grid grid-cols-5 gap-8">
                        <div
                            className="aspect-square flex items-center justify-center text-[#C5A047] text-2xl border border-[#C5A047]/10 rounded-xl">
                            <i className="fa-solid fa-anchor"></i>
                        </div>
                        <div
                            className="aspect-square flex items-center justify-center text-[#C5A047] text-2xl border border-[#C5A047]/10 rounded-xl">
                            <i className="fa-solid fa-compass"></i>
                        </div>
                        <div
                            className="aspect-square flex items-center justify-center text-[#C5A047] text-2xl border border-[#C5A047]/10 rounded-xl">
                            <i className="fa-solid fa-ship"></i>
                        </div>
                        <div
                            className="aspect-square flex items-center justify-center text-[#C5A047] text-2xl border border-[#C5A047]/10 rounded-xl">
                            <i className="fa-solid fa-umbrella-beach"></i>
                        </div>
                        <div
                            className="aspect-square flex items-center justify-center text-[#C5A047] text-2xl border border-[#C5A047]/10 rounded-xl">
                            <i className="fa-solid fa-life-ring"></i>
                        </div>

                        <div
                            className="aspect-square flex items-center justify-center text-[#F5F0E8]/30 text-2xl border border-[#F5F0E8]/5 rounded-xl">
                            <i className="fa-solid fa-calendar-check"></i>
                        </div>
                        <div
                            className="aspect-square flex items-center justify-center text-[#F5F0E8]/30 text-2xl border border-[#F5F0E8]/5 rounded-xl">
                            <i className="fa-solid fa-user-shield"></i>
                        </div>
                        <div
                            className="aspect-square flex items-center justify-center text-[#F5F0E8]/30 text-2xl border border-[#F5F0E8]/5 rounded-xl">
                            <i className="fa-solid fa-map-location-dot"></i>
                        </div>
                        <div
                            className="aspect-square flex items-center justify-center text-[#F5F0E8]/30 text-2xl border border-[#F5F0E8]/5 rounded-xl">
                            <i className="fa-solid fa-magnifying-glass-chart"></i>
                        </div>
                        <div
                            className="aspect-square flex items-center justify-center text-[#F5F0E8]/30 text-2xl border border-[#F5F0E8]/5 rounded-xl">
                            <i className="fa-solid fa-gem"></i>
                        </div>
                    </div>

                    <p className="text-sm text-[#062631]/50 italic leading-relaxed">
                        Custom designed icon set focusing on nautical precision and luxury aesthetics. Every icon
                        follows a 24px grid with consistent stroke weight.
                    </p>
                </div>
            </div>
        </section>

        
        <section className="cs-section bg-white">
            <div className="grid lg:grid-cols-2 gap-24">
                
                <div className="space-y-10">
                    <div>
                        <span className="text-xs font-bold text-[#157A7A] uppercase tracking-[0.4em] block mb-2">Geometry</span>
                        <span className="text-[9px] text-[#157A7A]/60 uppercase tracking-widest block mb-4">Tỷ lệ hình khối</span>
                        <h3 className="font-serif text-4xl text-[#062631]">Spacing Scale</h3>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <div className="bg-[#F5F0E8] p-4 rounded-xl border border-[#062631]/5 min-w-[100px] text-center">
                            <div className="w-2 h-2 bg-[#157A7A] mx-auto mb-3 rounded"></div>
                            <span className="block text-[10px] font-bold uppercase">XS</span>
                            <span className="text-[10px] text-[#062631]/40">4px</span>
                        </div>
                        <div className="bg-[#F5F0E8] p-4 rounded-xl border border-[#062631]/5 min-w-[100px] text-center">
                            <div className="w-4 h-4 bg-[#157A7A] mx-auto mb-3 rounded"></div>
                            <span className="block text-[10px] font-bold uppercase">SM</span>
                            <span className="text-[10px] text-[#062631]/40">16px</span>
                        </div>
                        <div className="bg-[#F5F0E8] p-4 rounded-xl border border-[#062631]/5 min-w-[100px] text-center">
                            <div className="w-8 h-8 bg-[#157A7A] mx-auto mb-3 rounded"></div>
                            <span className="block text-[10px] font-bold uppercase">LG</span>
                            <span className="text-[10px] text-[#062631]/40">32px</span>
                        </div>
                        <div className="bg-[#F5F0E8] p-4 rounded-xl border border-[#062631]/5 min-w-[100px] text-center">
                            <div className="w-12 h-12 bg-[#157A7A] mx-auto mb-3 rounded"></div>
                            <span className="block text-[10px] font-bold uppercase">XL</span>
                            <span className="text-[10px] text-[#062631]/40">48px</span>
                        </div>
                    </div>
                </div>

                
                <div className="space-y-10">
                    <div>
                        <span className="text-xs font-bold text-[#C5A047] uppercase tracking-[0.4em] block mb-2">Interactive</span>
                        <span className="text-[10px] text-[#C5A047]/60 uppercase tracking-widest block mb-4">Thành phần tương tác</span>
                        <h3 className="font-serif text-4xl text-[#062631]">Buttons & Badges</h3>
                    </div>
                    <div className="space-y-8">
                        <div className="flex flex-wrap gap-4 items-center">
                            <button className="bg-[#157A7A] text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#157A7A]/20">Book Now</button>
                            <button className="border-2 border-[#062631] text-[#062631] px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest">Explore</button>
                            <button className="bg-[#C5A047] text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#C5A047]/20">Featured</button>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-[#157A7A]/10 text-[#157A7A] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter italic">Luxury Service</span>
                            <span className="bg-[#C5A047]/10 text-[#C5A047] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter italic">Verified Vessel</span>
                            <span className="bg-[#062631]/10 text-[#062631] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter italic">Instant Booking</span>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="mt-24 grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[#062631]/5 group">
                    <div className="h-48 bg-[#062631]/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#157A7A]/10 flex items-center justify-center text-[#157A7A] italic">Vessel Image Overlay</div>
                    </div>
                    <div className="p-8">
                        <h4 className="font-serif text-xl text-[#062631] mb-2">Sunseeker Manhattan</h4>
                        <p className="text-[10px] text-[#157A7A] font-bold uppercase mb-4 tracking-widest">Premium Collection</p>
                        <div className="w-full h-px bg-[#062631]/5 mb-6"></div>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-[#062631]">$2,400 <span className="text-[10px] text-[#062631]/40 font-normal">/ day</span></span>
                            <i className="fa-solid fa-arrow-right text-[#C5A047]"></i>
                        </div>
                    </div>
                </div>
                
                <div className="gradient-navy rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                    <div className="glass-card p-6 rounded-2xl space-y-4">
                        <div className="w-10 h-10 rounded-full bg-[#C5A047]/20 flex items-center justify-center text-[#C5A047]">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <h5 className="text-[#F5F0E8] font-bold">Ha Long Bay</h5>
                        <p className="text-[#F5F0E8]/50 text-xs">Explore the world's most iconic limestone pillars from the deck of a private yacht.</p>
                    </div>
                    <div className="mt-8 flex justify-between items-center text-[#F5F0E8]">
                        <span className="text-[10px] uppercase font-bold tracking-widest">Experience Guide</span>
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full border-2 border-[#062631] bg-gray-400"></div>
                            <div className="w-8 h-8 rounded-full border-2 border-[#062631] bg-gray-500"></div>
                            <div className="w-8 h-8 rounded-full border-2 border-[#062631] bg-gray-600"></div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-[#F5F0E8] rounded-3xl p-8 border-2 border-dashed border-[#062631]/10 flex flex-col justify-center text-center">
                    <i className="fa-solid fa-anchor text-4xl text-[#C5A047]/40 mb-6"></i>
                    <h4 className="font-serif text-xl text-[#062631] mb-3 italic">Custom Itinerary</h4>
                    <p className="text-[#062631]/60 text-sm leading-relaxed">Tailor your journey with our expert concierge team to meet your specific needs.</p>
                </div>
            </div>
        </section>


        
        <section className="bg-[#062631] py-32 overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                
                <div className="text-center mb-32 px-10">
                    <span className="text-xs font-bold text-[#C5A047] uppercase tracking-[0.4em] block mb-2">High Fidelity</span>
                    <span className="text-[9px] text-[#C5A047]/60 uppercase tracking-widest block mb-4">Giao diện sắc nét</span>
                    <h3 className="font-serif text-6xl text-[#F5F0E8] mb-8 leading-tight">Interaction <span
                            className="italic text-[#C5A047]">Showcase</span></h3>
                    <p className="text-[#F5F0E8]/40 max-w-2xl mx-auto text-sm">A seamless journey across the Aurelia Yachts digital
                        platform, optimized for high-end user engagement.</p>
                </div>

                
                <div className="space-y-48">
                    
                    <div className="relative px-20">
                        <div className="grid lg:grid-cols-12 gap-20 items-center">
                            <div className="lg:col-span-4 space-y-8">
                                <span className="text-[#C5A047] font-bold text-xs uppercase tracking-widest">Experience 01</span>
                                <h4 className="font-serif text-4xl text-[#F5F0E8] leading-tight">The Gateway to <br /><span
                                        className="italic text-[#C5A047]">Maritime Luxury</span></h4>
                                <p className="text-[#F5F0E8]/50 text-sm leading-relaxed">
                                    The homepage serves as an immersive entry point, utilizing parallax imagery and
                                    elegant typography to set the tone of exclusivity immediately upon arrival.
                                </p>
                                <div className="flex gap-4">
                                    <div
                                        className="w-10 h-10 rounded-full border border-[#C5A047]/30 flex items-center justify-center text-[#C5A047]">
                                        <i className="fa-solid fa-play"></i></div>
                                    <span
                                        className="text-[11px] text-[#F5F0E8]/70 uppercase tracking-widest font-bold self-center">Interactive
                                        Demo</span>
                                </div>
                            </div>
                            
                            <div className="lg:col-span-8">
                                <div
                                    className="bg-white rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.6)] overflow-hidden border border-white/10">
                                    <div className="h-10 bg-gray-100 flex items-center px-4 gap-2 border-b border-gray-200">
                                        <div className="w-3 h-3 rounded-full bg-[#ED695E]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#F4BF4F]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#61C554]"></div>
                                    </div>
                                    <div className="h-[600px] overflow-y-scroll no-scrollbar bg-[#F5F0E8]">
                                        <img src="https://images.unsplash.com/photo-1621275471769-e6aa344546d5?q=80&w=1600" loading="lazy" decoding="async"
                                            className="w-full h-full object-cover" />
                                        <div className="p-20 space-y-20">
                                            <div className="flex justify-between items-end">
                                                <h2 className="font-serif text-6xl text-[#062631]">Elite<br /><span
                                                        className="italic text-[#C5A047]">Exploration</span></h2>
                                                <div
                                                    className="w-32 h-32 bg-[#062631] rounded-full flex items-center justify-center -mb-28 shadow-2xl">
                                                    <i
                                                        className="fa-solid fa-arrow-down text-[#C5A047] text-2xl"></i>
                                                </div>
                                            </div>
                                            <p className="text-[#062631]/50 max-w-md">The discovery phase focuses on visual
                                                impact and clear calls to action.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="bg-[#124457]/30 py-32 relative">
                        <div className="px-20 grid lg:grid-cols-12 gap-20 flex-row-reverse">
                            <div className="lg:col-span-8">
                                
                                <div
                                    className="bg-[#F5F0E8] rounded-2xl shadow-2xl p-4 border border-[#C5A047]/20 flex flex-col h-[500px]">
                                    <div className="flex-none bg-white p-6 rounded-xl shadow-md mb-6 flex gap-8">
                                        <div className="flex-1 border-r border-[#062631]/10"><span
                                                className="text-[10px] uppercase font-bold text-[#062631]/30">Location</span>
                                            <p className="font-bold text-[#062631]">Ha Long Bay</p>
                                        </div>
                                        <div className="flex-1 border-r border-[#062631]/10"><span
                                                className="text-[10px] uppercase font-bold text-[#062631]/30">Date</span>
                                            <p className="font-bold text-[#062631]">Oct 12 - Oct 15</p>
                                        </div>
                                        <div className="flex-1"><span
                                                className="text-[10px] uppercase font-bold text-[#062631]/30">Guests</span>
                                            <p className="font-bold text-[#062631]">12 Persons</p>
                                        </div>
                                        <div
                                            className="bg-[#062631] text-white p-3 rounded-lg flex items-center justify-center px-6">
                                            <i className="fa-solid fa-magnifying-glass mr-2"></i> Search</div>
                                    </div>
                                    <div className="flex-1 overflow-hidden grid grid-cols-2 gap-6">
                                        <div className="bg-white rounded-xl shadow-sm p-4 h-full relative group">
                                            <img src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=600" loading="lazy" decoding="async"
                                                className="w-full h-32 object-cover rounded-lg mb-4" />
                                            <h5 className="font-bold text-[#062631] text-sm">Sunseeker Manhattan 66</h5>
                                            <p className="text-[10px] text-[#157A7A] font-bold mb-2">GOLD COLLECTION</p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-[#062631] font-bold text-lg">$2,400 <span
                                                        className="text-[10px] text-[#062631]/40 font-normal">/ day</span></span>
                                                <i className="fa-solid fa-heart text-gray-200"></i>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-xl shadow-sm p-4 h-full group">
                                            <img src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600" loading="lazy" decoding="async"
                                                className="w-full h-32 object-cover rounded-lg mb-4" />
                                            <h5 className="font-bold text-[#062631] text-sm">Azimut Magellano 66</h5>
                                            <p className="text-[10px] text-[#157A7A] font-bold mb-2">PREMIUM ELITE</p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-[#062631] font-bold text-lg">$2,850 <span
                                                        className="text-[10px] text-[#062631]/40 font-normal">/ day</span></span>
                                                <i className="fa-solid fa-heart text-gray-200"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-4 space-y-8 flex flex-col justify-center">
                                <span className="text-[#C5A047] font-bold text-xs uppercase tracking-widest">Experience 02</span>
                                <h4 className="font-serif text-4xl text-[#F5F0E8] leading-tight">Advanced <br /><span
                                        className="italic text-[#C5A047]">Fleet Filtering</span></h4>
                                <p className="text-[#F5F0E8]/50 text-sm leading-relaxed">
                                    Efficiency meets elegance. The search interface allows users to filter by specific
                                    amenities, vessel length, and crew availability without losing the luxury context.
                                </p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="px-20 flex flex-col items-center">
                        <div className="text-center mb-20">
                            <h4 className="font-serif text-4xl text-[#F5F0E8] leading-tight mb-6">Omnichannel <span
                                    className="italic text-[#C5A047]">Perfection</span></h4>
                            <p className="text-[#F5F0E8]/50 max-w-xl mx-auto text-sm">Maintaining brand integrity across all
                                devices through responsive architecture.</p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-12 w-full max-w-5xl">
                            
                            <div className="bg-black p-4 rounded-[60px] shadow-2xl border-4 border-white/5 relative group">
                                <div
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20">
                                </div>
                                <div className="bg-[#062631] aspect-[9/19] rounded-[45px] overflow-hidden">
                                    <div
                                        className="h-1/2 bg-[url('https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600')] bg-cover bg-center p-8 flex flex-col justify-between">
                                        <span className="font-serif text-white italic text-xl">Aurelia Yachts</span>
                                        <h2 className="font-serif text-4xl text-white font-bold leading-tight">Elite
                                            <br /><span className="text-[#C5A047] italic">Fleet</span></h2>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div
                                            className="h-12 bg-white/5 rounded-xl border border-white/10 flex items-center px-4 gap-4">
                                            <i className="fa-solid fa-location-dot text-[#C5A047]"></i>
                                            <span className="text-xs text-[#F5F0E8]/50">Search vessels...</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <div
                                                className="flex-1 h-20 bg-[#157A7A]/20 rounded-xl border border-[#157A7A]/30 flex flex-col items-center justify-center">
                                                <i className="fa-solid fa-anchor text-[#157A7A] text-xl mb-1"></i>
                                                <span
                                                    className="text-[8px] text-[#157A7A] uppercase font-bold font-serif">Sailing</span>
                                            </div>
                                            <div
                                                className="flex-1 h-20 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center">
                                                <i className="fa-solid fa-bolt text-[#C5A047] text-xl mb-1"></i>
                                                <span className="text-[8px] text-[#F5F0E8]/40 uppercase font-bold">Motor</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div
                                className="bg-black p-4 rounded-[60px] shadow-2xl border-4 border-white/5 mt-12 relative group">
                                <div
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20">
                                </div>
                                <div className="bg-[#F5F0E8] aspect-[9/19] rounded-[45px] overflow-hidden p-8">
                                    <h5 className="font-serif text-[#062631] text-2xl mb-4">Aurelia <span
                                            className="italic text-[#C5A047]">S8</span></h5>
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="text-center p-3 bg-white rounded-xl shadow-sm">
                                            <span className="block font-bold text-[#062631] text-sm">78ft</span>
                                            <span className="text-[8px] text-[#062631]/30 uppercase">Length</span>
                                        </div>
                                        <div className="text-center p-3 bg-white rounded-xl shadow-sm">
                                            <span className="block font-bold text-[#062631] text-sm">12</span>
                                            <span className="text-[8px] text-[#062631]/30 uppercase">Capacity</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-2 bg-[#062631]/5 rounded"></div>
                                        <div className="h-2 bg-[#062631]/5 rounded"></div>
                                        <div className="h-2 bg-[#062631]/5 rounded w-2/3"></div>
                                    </div>
                                    <button
                                        className="w-full bg-[#062631] text-white py-4 rounded-xl mt-12 text-xs font-bold uppercase tracking-widest shadow-xl">Book
                                        Charter</button>
                                </div>
                            </div>

                            
                            <div className="bg-black p-4 rounded-[60px] shadow-2xl border-4 border-white/5 relative group">
                                <div
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20">
                                </div>
                                <div className="bg-[#062631] aspect-[9/19] rounded-[45px] overflow-hidden flex flex-col">
                                    <div className="p-8 pb-0">
                                        <div
                                            className="w-12 h-12 bg-[#C5A047]/20 rounded-full flex items-center justify-center text-[#C5A047] mb-6 shadow-xl shadow-[#C5A047]/10">
                                            <i className="fa-solid fa-check text-xl"></i>
                                        </div>
                                        <h2 className="font-serif text-4xl text-[#F5F0E8] leading-tight mb-4">Request
                                            <br /><span className="italic text-[#C5A047]">Received</span></h2>
                                        <p className="text-[#F5F0E8]/50 text-xs">Our concierge will contact you within 15
                                            minutes.</p>
                                    </div>
                                    <div className="mt-auto p-8">
                                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                            <div className="flex justify-between mb-4">
                                                <span className="text-[10px] text-[#F5F0E8]/40">Reference</span>
                                                <span className="text-[10px] text-[#C5A047] font-mono">#AY-5590</span>
                                            </div>
                                            <div className="w-full h-24 bg-white opacity-10 rounded-lg"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section
            className="h-[600px] flex flex-col items-center justify-center bg-[#062631] text-center px-6 relative overflow-hidden">
            <div
                className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-[#157A7A] rounded-full blur-[200px] opacity-10">
            </div>
            <div className="relative z-10">
                <h2 className="font-serif text-6xl md:text-8xl text-[#F5F0E8] mb-6">Thank You</h2>
                <p className="text-[#C5A047] uppercase tracking-[0.4em] font-bold text-sm">For reviewing this UX journey</p>
                <div className="mt-12 flex gap-6 justify-center">
                    <div
                        className="w-16 h-16 rounded-full bg-[#F5F0E8]/5 flex items-center justify-center text-white/50 text-2xl cursor-pointer">
                        <i className="fa-brands fa-behance"></i>
                    </div>
                    <div
                        className="w-16 h-16 rounded-full bg-[#F5F0E8]/5 flex items-center justify-center text-white/50 text-xl cursor-pointer">
                        <i className="fa-solid fa-link"></i>
                    </div>
                </div>
                <div className="mt-20 text-[10px] text-[#F5F0E8]/20 uppercase tracking-widest font-mono">Designer: Horaus &
                    Antigravity | 2026</div>
            </div>
        </section>
      </div>
    </div>
  );
}
