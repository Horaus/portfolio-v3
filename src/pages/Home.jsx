import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import { hardNavigate } from '../utils/hardNavigation';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-screen overflow-hidden"
    >
      <Header />
      
      <main className="flex panel-container bg-black">
        
        {/* Marketing Section */}
        <section 
          className="split-panel h-full bg-darkBg border-r border-white/10 flex items-center justify-center cursor-pointer group"
          onClick={() => hardNavigate('/marketing-systems')}
        >
          {/* Abstract Background Image */}
          <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
            <img 
              alt="Marketing Abstract" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              decoding="async"
              fetchPriority="high"
              loading="eager"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNOP8UfwNkahIkaRRoeOnHJs0oSQuPWDFJxwFqohhAwdNsGH-Ikf4NexcmunGlsNKjH0i2Buki8W8iVD3OQkeW81G1mm6D5FXeYT6SQ4eunKVn-_aDy4u5gtjuO7EJA19iUcBD7Ke-pZ4_xXIDTrcnNZR8ACs9iOtayEH2nasze3UKaOwM-QRZK6IjVdtMJ15PLH1g4Jofs-W9afJa9W5bn5UquvNrsflDwxS78xi3I37aDV9P5D7z6XRtGvJGCIgfmSCEnwX_7ak"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center px-4 md:px-10">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-accent mb-4 block">Strategy & Growth</span>
            <div className="relative inline-block mb-6">
              <h2 className="absolute top-1 left-1 text-5xl md:text-8xl font-bold tracking-tighter uppercase whitespace-nowrap text-white/10 blur-[2px] select-none pointer-events-none">Marketing</h2>
              <h2 className="relative text-5xl md:text-8xl font-bold tracking-tighter uppercase whitespace-nowrap">Marketing</h2>
            </div>
            
            <div className="max-w-xs md:max-w-md mx-auto opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 pointer-events-none group-hover:pointer-events-auto">
              <p className="text-gray-400 mb-8 text-sm md:text-base">A full-stack marketing system connecting strategy, visual execution, growth, automation, and analytics into one consistent portfolio narrative.</p>
              <button className="px-6 py-2 md:px-8 md:py-3 bg-accent text-white rounded-custom font-bold hover:bg-blue-600 transition-colors uppercase text-xs md:text-sm tracking-widest translate-z-0">
                View Systems
              </button>
            </div>
          </div>
          
          {/* Left-to-Right Arrow */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 group-hover:text-accent transition-colors">
            <svg className="h-10 w-10 md:h-12 md:w-12 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
        </section>

        {/* R&D Section */}
        <section className="split-panel h-full bg-white flex items-center justify-center cursor-pointer group">
          {/* Abstract Background Image */}
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
            <img 
              alt="R&D Abstract" 
              className="w-full h-full object-cover grayscale blur-2xl group-hover:grayscale-0 transition-all duration-700" 
              decoding="async"
              loading="lazy"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiip5o-4KhOEF_JtM7Nl_t4lL_Xv1mpKsrwFgN3ebxnWQyQZQ2--iDPlWE-EdWFv1YhSVfOwZrcQcGDJZTN_J6Ml8JntF7JrktAba-hTTj9XwcXqqkFb3SBYHs0wQvnZC-VDruTo4a8n-peFhDKKZib0mj3q8DXhN5Ypghlm-5wqTAMexpOk0b_iFcQ3EC7avbq3QVl3tFLoYtKitLEx4YPR-d1E4Ul_4S9qxl_Ts59OxhihVoZ7lG9xvlO6sYBoVu63HsixgbdZA"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center px-4 md:px-10 text-black">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-accent mb-4 block">Innovation & Labs</span>
            <div className="relative inline-block mb-6">
              <h2 className="absolute top-1 left-1 text-5xl md:text-8xl font-bold tracking-tighter uppercase whitespace-nowrap text-gray-300/40 blur-[2px] select-none pointer-events-none">R&D</h2>
              <h2 className="relative text-5xl md:text-8xl font-bold tracking-tighter uppercase whitespace-nowrap">R&D</h2>
            </div>
            
            <div className="max-w-xs md:max-w-md mx-auto opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 pointer-events-none group-hover:pointer-events-auto">
              <p className="text-gray-600 mb-8 text-sm md:text-base">Pioneering new technologies and architectural patterns to solve tomorrow's complex challenges.</p>
              <button className="px-6 py-2 md:px-8 md:py-3 border-2 border-black text-black rounded-custom font-bold hover:bg-black hover:text-white transition-all uppercase text-xs md:text-sm tracking-widest translate-z-0">
                Explore Labs
              </button>
            </div>
          </div>
          
          {/* Right-to-Left Arrow */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-black/20 group-hover:text-accent transition-colors">
            <svg className="h-10 w-10 md:h-12 md:w-12 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
            </svg>
          </div>
        </section>

      </main>
    </motion.div>
  );
};

export default Home;
