import React, { useState } from 'react';
import Header from '../components/layout/Header';
import PageTransition from '../components/layout/PageTransition';
import { hardNavigate } from '../utils/hardNavigation';
import { motion, AnimatePresence } from 'framer-motion';

// --- HELPER COMPONENTS ---

const A4Sheet = ({ children, docId, mainTitle, subTitle, summary, pageNum }) => (
  <div className="report-a4 bg-white text-black shadow-2xl w-full max-w-[210mm] mx-auto py-12 px-[40px] md:py-16 md:px-[70px] flex flex-col rounded-sm border border-gray-200 min-h-[297mm]">
    
    {/* Top Badge Area */}
    <div className="flex justify-between items-start border-b border-black pb-5 mb-10">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#112031] text-white flex items-center justify-center font-black text-lg font-['Space_Grotesk']">P</div>
        <div className="font-['Space_Grotesk']">
          <h3 className="text-[11px] sm:text-[13px] font-black uppercase tracking-[0.2em] text-[#112031]">PRIX STRATEGY BOARD</h3>
          <p className="text-[8px] text-gray-500 uppercase font-bold tracking-widest mt-1">DOCUMENT ID: {docId}</p>
        </div>
      </div>
      <div className="text-right shrink-0 pl-2">
        <span className="inline-block whitespace-nowrap text-[7px] sm:text-[8px] font-black border-2 border-black px-2 py-1 tracking-tighter text-black bg-gray-50 font-['Space_Grotesk']">
          CONFIDENTIAL / BOARD ONLY
        </span>
      </div>
    </div>

    {/* Hero Title Area */}
    <div className="text-center mb-8">
      <h1 className="text-3xl md:text-[42px] leading-tight font-black italic uppercase tracking-tighter text-[#112031] font-['Space_Grotesk'] mb-4">
        {mainTitle}
      </h1>
      <p className="text-[10px] md:text-[12px] font-black text-gray-400 uppercase tracking-[0.4em] font-['Space_Grotesk']">
        {subTitle}
      </p>
    </div>

    {/* Summary Table Area */}
    <div className="border-t-[1.5px] border-b-[1.5px] border-black py-6 mb-12 bg-[#fafafa]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8 text-[10px] md:text-[11px] font-['Space_Grotesk'] uppercase tracking-widest px-4">
        <div><span className="text-gray-400 mr-2">DỰ ÁN:</span> <span className="font-black text-[#112031]">{summary.project}</span></div>
        <div><span className="text-gray-400 mr-2">THỜI GIAN:</span> <span className="font-black text-[#112031]">{summary.timeline}</span></div>
        <div><span className="text-gray-400 mr-2">PHẠM VI:</span> <span className="font-black text-[#112031]">{summary.scope}</span></div>
        <div><span className="text-gray-400 mr-2">MỤC TIÊU:</span> <span className="font-black text-[#112031]">{summary.target}</span></div>
      </div>
    </div>
    
    {/* Content Area */}
    <div className="flex-grow text-[13px] leading-[1.8] text-gray-800 font-['Inter']">
      {children}
    </div>

    {/* Footer Area */}
    <div className="mt-12 pt-5 border-t border-gray-300 flex justify-between items-center text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] font-['Space_Grotesk']">
      <div>Prix. Strategy & Architecture — 2026</div>
      <div>Page 0{pageNum}</div>
    </div>
  </div>
);

const RightAnnotation = ({ content }) => {
  return (
    <div className="hidden xl:block w-[280px] shrink-0 sticky top-[200px] h-fit z-10 transition-all duration-500">
      <div className="bg-white border border-[#8EC9DB] shadow-lg rounded-xl p-6 relative">
        <div className="absolute top-8 -left-[11px] w-5 h-5 bg-white border-b border-l border-[#8EC9DB] transform rotate-45 rounded-sm"></div>
        <div className="relative z-20">
          <div className="flex items-center gap-2 mb-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#112031" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#112031] font-['Space_Grotesk']">Phân tích / Chú thích</span>
          </div>
          <div className="text-[12px] text-gray-600 leading-relaxed font-['Inter']" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};

const MobileAnnotation = ({ content }) => (
  <div className="xl:hidden w-full max-w-[800px] mx-auto mb-8 px-4">
    <div className="bg-blue-50/50 border-l-[3px] border-[#8EC9DB] p-5 rounded-r-lg shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#112031" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        <span className="text-[9px] font-black uppercase tracking-widest text-[#112031] font-['Space_Grotesk']">Ghi chú R&D</span>
      </div>
      <div className="text-[12px] text-gray-700 leading-relaxed font-['Inter']" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </div>
);

// --- TAB CONTENT COMPONENTS ---

const Phase1Content = () => (
  <div className="space-y-8">
    <div>
      <h2 className="text-[16px] md:text-[18px] font-black uppercase tracking-wide text-[#112031] mb-4 font-['Space_Grotesk']">I. Bối cảnh thị trường & Nỗi đau doanh nghiệp</h2>
      <p className="text-justify mb-4">
        Trong quá trình khảo sát hơn 50 doanh nghiệp SME hoạt động trong lĩnh vực F&B và bán lẻ đa kênh, đội ngũ R&D đã nhận diện một "điểm mù tài chính" có tính hệ thống: Phương pháp định giá cảm tính. Phần lớn các chủ doanh nghiệp xác định giá bán lẻ dựa trên một quy tắc chung (ví dụ: lấy giá nguyên liệu thô nhân 3), hoặc sao chép mức giá của đối thủ cạnh tranh gần nhất mà không hiểu rõ cấu trúc chi phí nội tại.
      </p>
      
      <div className="border-l-[3px] border-[#112031] pl-5 py-2 my-6 bg-gray-50/50 italic text-gray-700 text-[13px] leading-relaxed">
        "Vấn đề trở nên nghiêm trọng khi doanh nghiệp mở rộng kênh phân phối. Cùng một sản phẩm, việc bán tại cửa hàng truyền thống (Offline) và bán qua các nền tảng tổng hợp (Aggregators như ShopeeFood, GrabFood) mang lại biên lợi nhuận hoàn toàn khác biệt do sự can thiệp của cấu trúc phí động (Dynamic Fees)."
      </div>
      
      <p className="text-justify">
        Các nền tảng giao hàng hiện đại áp dụng mức phí hoa hồng dao động từ 20% đến 25% trên tổng giá trị đơn hàng (Gross Revenue), chưa bao gồm 2% phí cổng thanh toán và các gói tài trợ khuyến mãi (Vouchers/Freeship) bắt buộc phải tham gia để duy trì hiển thị. Hệ quả là, doanh nghiệp liên tục ghi nhận sự tăng trưởng về mặt doanh thu gộp (Top-line Revenue) nhưng dòng tiền ròng (Bottom-line Profit) lại rơi vào trạng thái âm nghiêm trọng.
      </p>
    </div>

    <div>
      <h2 className="text-[16px] md:text-[18px] font-black uppercase tracking-wide text-[#112031] mb-4 font-['Space_Grotesk']">II. Minh họa: Kịch bản phân rã doanh thu ảo</h2>
      <p className="text-justify mb-6">
        Để trực quan hóa lỗ hổng này, chúng tôi xây dựng một kịch bản phân rã cấu trúc doanh thu trên nền tảng thương mại điện tử giao đồ ăn. Cấu trúc này bóc tách ranh giới giữa số liệu hiển thị trên ứng dụng (Phantom Revenue) và lợi nhuận thực nhận (Realized Profit).
      </p>

      <div className="border border-gray-200 rounded p-8 bg-white shadow-sm mb-6">
        <div className="mb-6">
          <div className="flex justify-between text-[11px] font-bold mb-2 uppercase tracking-widest text-gray-500">
            <span>Doanh thu hiển thị trên nền tảng (Gross)</span>
            <span>100% (Base: 100.000 VNĐ)</span>
          </div>
          <div className="h-8 w-full bg-[#112031] rounded-sm relative overflow-hidden flex shadow-inner">
            <div className="h-full bg-[#e2e8f0] w-[45%]" title="Giá vốn sản xuất (45%)"></div>
            <div className="h-full bg-[#94a3b8] w-[10%]" title="Voucher khuyến mãi (10%)"></div>
            <div className="h-full bg-[#8EC9DB] w-[25%]" title="Phí hoa hồng sàn + Thanh toán (25%)"></div>
            <div className="h-full bg-[#112031] flex-1 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CgkJPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz4KCQk8L3N2Zz4=')]"></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-[10px] text-[#112031] font-bold uppercase tracking-widest mt-6 border-t border-gray-200 pt-6">
          <div className="flex flex-col gap-2"><span className="w-4 h-1 bg-[#e2e8f0] block shrink-0"></span> COGS (45%)</div>
          <div className="flex flex-col gap-2"><span className="w-4 h-1 bg-[#94a3b8] block shrink-0"></span> Vouchers (10%)</div>
          <div className="flex flex-col gap-2"><span className="w-4 h-1 bg-[#8EC9DB] block shrink-0"></span> Platform Fees (25%)</div>
          <div className="flex flex-col gap-2 text-[#112031]"><span className="w-4 h-1 bg-[#112031] block shrink-0"></span> Net Profit (20%)</div>
        </div>
      </div>

      <p className="text-justify">
        Bản phân rã trên cho thấy, với một sản phẩm có tỷ lệ giá vốn hàng bán (COGS) chiếm 45%, khi đưa lên sàn giao dịch, biên lợi nhuận ròng chỉ còn lại 20%. Rủi ro kinh doanh trở nên cực kỳ mong manh: Chỉ cần giá nguyên liệu đầu vào tăng 10% do lạm phát, hoặc sàn ép buộc tham gia một chiến dịch Mega Sale giảm thêm 15%, sản phẩm này lập tức chuyển sang trạng thái <strong>gây thất thoát vốn</strong>.
      </p>
    </div>

    <div>
      <h2 className="text-[16px] md:text-[18px] font-black uppercase tracking-wide text-[#112031] mb-4 font-['Space_Grotesk']">III. Định vị chiến lược của Prix.</h2>
      <p className="text-justify">
        Từ những kết quả nghiên cứu trên, chúng tôi quyết định định vị Prix. không phải là một phần mềm kế toán quản trị (ERP) cồng kềnh, mà là một <strong>Hệ thống Trí tuệ Định giá (Pricing Intelligence System)</strong>. Hệ thống được thiết kế như một bảng điều khiển quyết định (Decision Deck), cung cấp khả năng cảnh báo sớm thông qua mã màu (Safe/Watch/Danger), cho phép chủ doanh nghiệp trả lời ngay lập tức câu hỏi sống còn: <em>"Tôi có đang mất tiền khi bán món hàng này không?"</em>.
      </p>
    </div>
  </div>
);

const Phase2Content = () => (
  <div className="space-y-8">
    <div>
      <h2 className="text-[16px] md:text-[18px] font-black uppercase tracking-wide text-[#112031] mb-4 font-['Space_Grotesk']">I. Triết lý phân tách cấu trúc chi phí</h2>
      <p className="text-justify mb-4">
        Khối động cơ tính toán (Pricing Engine) được thiết kế dựa trên nguyên lý cốt lõi: <strong>Separation of Concerns</strong> (Phân tách mối bận tâm). Sự nhầm lẫn lớn nhất của các mô hình định giá thủ công là việc gộp chung chi phí tạo ra sản phẩm (Production Cost) và chi phí đưa sản phẩm đó đến tay khách hàng (Selling Cost).
      </p>
      
      <p className="text-justify">
        Hệ thống Prix chia toàn bộ chi phí thành hai Layer biệt lập:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="border border-gray-200 p-6 bg-white rounded-md shadow-sm">
          <h5 className="font-black text-[11px] uppercase tracking-widest text-[#112031] mb-3 flex items-center gap-2 pb-2 border-b border-gray-100"><span className="w-2 h-2 bg-[#94a3b8] rounded-sm block"></span> Static Production Cost</h5>
          <p className="text-[12px] text-gray-600 mb-4 text-justify">Đại diện cho các hao phí "tĩnh" – không thay đổi bất kể sản phẩm được phân phối qua kênh nào.</p>
          <ul className="text-[12px] space-y-2 font-mono text-gray-700">
            <li><span className="text-[#8EC9DB]">C_mat:</span> Chi phí nguyên liệu + tỷ lệ hao hụt.</li>
            <li><span className="text-[#8EC9DB]">C_lab:</span> Chi phí nhân công trực tiếp.</li>
            <li><span className="text-[#8EC9DB]">C_ovh:</span> Phân bổ định phí (Overhead).</li>
          </ul>
        </div>
        
        <div className="border border-[#8EC9DB] p-6 bg-[#8EC9DB]/5 rounded-md shadow-sm">
          <h5 className="font-black text-[11px] uppercase tracking-widest text-[#112031] mb-3 flex items-center gap-2 pb-2 border-b border-[#8EC9DB]/30"><span className="w-2 h-2 bg-[#8EC9DB] rounded-sm block"></span> Dynamic Selling Cost</h5>
          <p className="text-[12px] text-gray-600 mb-4 text-justify">Đại diện cho các hao phí "động" – tỷ lệ thuận với chính sách của từng kênh bán lẻ.</p>
          <ul className="text-[12px] space-y-2 font-mono text-gray-700">
            <li><span className="text-[#112031]">F_fix:</span> Phí cố định (bao bì, freeship).</li>
            <li><span className="text-[#112031]">R_com:</span> Tỷ lệ hoa hồng nền tảng.</li>
            <li><span className="text-[#112031]">R_tax:</span> Tỷ lệ thuế suất, phí thanh toán.</li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h2 className="text-[16px] md:text-[18px] font-black uppercase tracking-wide text-[#112031] mb-4 font-['Space_Grotesk']">II. Thuật toán giải ngược (Reverse Engineering)</h2>
      <p className="text-justify mb-6">
        Thay vì yêu cầu người dùng nhập một mức giá bán và quan sát biên lợi nhuận trả về (phương pháp Thử và Sai - Trial & Error), Pricing Engine sử dụng thuật toán giải ngược phương trình tài chính. Quản trị viên chỉ cần thiết lập Tham vọng Lợi nhuận (Target Margin), hệ thống sẽ tính toán cộng dồn mọi biến phí để đề xuất mức giá niêm yết (List Price) tối ưu.
      </p>

      <div className="bg-[#112031] text-gray-300 p-6 rounded-md font-mono text-[12px] leading-loose overflow-x-auto shadow-inner relative">
        <div className="absolute top-0 right-0 bg-white/10 px-3 py-1 text-[9px] uppercase tracking-widest text-white">Algorithm Block</div>
        <div className="text-gray-500 mb-2">// 1. Xác định tổng tỷ lệ trích xuất (Total Fee Rate)</div>
        <div className="text-white mb-6">
          Let <span className="text-[#8EC9DB]">R_total</span> = R_com + R_tax + R_affiliate;
        </div>
        
        <div className="text-gray-500 mb-2">// 2. Phương trình xác định Điểm Hòa Vốn (Lợi nhuận = 0)</div>
        <div className="text-white mb-6">
          <span className="text-[#8EC9DB]">P_breakeven</span> = (C_static + F_fix) / (1 - R_total);
        </div>
        
        <div className="text-gray-500 mb-2">// 3. Phương trình xác định Giá Đề Xuất (Theo Target Margin)</div>
        <div className="text-white">
          Let <span className="text-yellow-400">M_target</span> = 0.45; <span className="text-gray-500">// Ví dụ: 45%</span><br/>
          <span className="text-[#8EC9DB]">P_recommended</span> = (C_static + F_fix) / (1 - R_total - M_target);
        </div>
      </div>
      
      <p className="text-justify mt-6">
        Phương trình này xử lý triệt để sai lầm phổ biến nhất trong giới kế toán SME: <em>Áp dụng tỷ lệ lợi nhuận lên giá vốn thay vì giá bán</em>. Việc các nền tảng công nghệ thu phí dựa trên doanh thu cuối cùng (Gross Revenue) bắt buộc phương pháp định giá phải được cấu trúc theo dạng chia ngược tỷ trọng (Divisor Method), đảm bảo phần trăm hoa hồng bị trừ đi luôn tỷ lệ thuận với quy mô đơn hàng.
      </p>
    </div>
  </div>
);

const Phase3Content = () => (
  <div className="space-y-8">
    <div>
      <h2 className="text-[16px] md:text-[18px] font-black uppercase tracking-wide text-[#112031] mb-4 font-['Space_Grotesk']">I. Mô hình dữ liệu thời gian thực (Temporal Data)</h2>
      <p className="text-justify mb-4">
        Khi thiết kế hệ cơ sở dữ liệu (Data Architecture) cho một hệ thống tài chính, sự toàn vẹn của dữ liệu lịch sử là yếu tố sống còn. Biến động giá cả của chuỗi cung ứng là liên tục; nếu chúng ta sử dụng cơ chế cập nhật đè (In-place Updates) cho giá nguyên vật liệu, toàn bộ các báo cáo tỷ suất lợi nhuận trong quá khứ sẽ bị ghi đè và sai lệch hoàn toàn.
      </p>
      
      <div className="border-l-[3px] border-[#112031] pl-5 py-2 my-6 bg-gray-50/50 italic text-gray-700 text-[13px] leading-relaxed">
        Giải pháp kiến trúc mà R&D Team lựa chọn là mô hình <strong>Snapshot-First Paradigm</strong>. Mọi trạng thái tính toán biên lợi nhuận của sản phẩm đều được đóng gói và "đóng băng" tại một mốc thời gian cụ thể thành các bản ghi Snapshot độc lập.
      </div>
      
      <div className="border border-gray-200 rounded-md p-8 bg-white shadow-sm mt-6">
        <h5 className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-6 text-center">Tiến trình vòng đời Snapshot</h5>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[12px]">
          <div className="flex-1 text-center w-full bg-gray-50 p-5 rounded border border-gray-100">
            <div className="font-black text-[#112031] mb-2 uppercase tracking-wide text-[11px]">Kỳ báo cáo Tháng 1</div>
            <div className="text-gray-500 mb-3 font-mono">Giá Nguyên liệu A: 100k</div>
            <div className="bg-[#112031] text-white font-black py-2 px-4 rounded text-[10px] tracking-widest uppercase shadow-md">Snapshot #001: Margin 35%</div>
          </div>
          <div className="text-gray-300 font-black text-xl hidden md:block">→</div>
          <div className="h-4 w-px bg-gray-300 block md:hidden"></div>
          <div className="flex-1 text-center w-full bg-red-50/50 p-5 rounded border border-red-100">
            <div className="font-black text-[#112031] mb-2 uppercase tracking-wide text-[11px]">Kỳ báo cáo Tháng 2</div>
            <div className="text-red-500 mb-3 font-mono font-bold">Giá Nguyên liệu A ↑: 150k</div>
            <div className="bg-red-600 text-white font-black py-2 px-4 rounded text-[10px] tracking-widest uppercase shadow-md animate-pulse">Snapshot #002: Margin 12%</div>
          </div>
        </div>
      </div>
      
      <p className="text-justify mt-6">
        Việc duy trì chuỗi Snapshot cho phép hệ thống hồi đáp truy vấn nguyên nhân-kết quả (Causality Query): <em>"Vì sao hiệu suất tài chính tháng 2 sụt giảm nghiêm trọng dù khối lượng hàng bán ra tương đương tháng 1?"</em> – Truy xuất lịch sử Snapshot sẽ chỉ ra chính xác điểm đứt gãy nằm ở biến động giá của Nguyên liệu A.
      </p>
    </div>

    <div>
      <h2 className="text-[16px] md:text-[18px] font-black uppercase tracking-wide text-[#112031] mb-4 font-['Space_Grotesk']">II. Lược đồ Thực thể Liên kết (ERD)</h2>
      <p className="text-justify mb-6">
        Cấu trúc dữ liệu của Prix tuân thủ nghiêm ngặt chuẩn chuẩn hóa (Normalization) để tránh dư thừa, đồng thời duy trì hiệu suất truy vấn cao cho các tập dữ liệu lớn. Mọi thực thể đều bị ràng buộc bởi định danh `business_id` để thiết lập kiến trúc đa khách hàng (Multi-tenancy) an toàn.
      </p>

      <div className="bg-[#112031] text-gray-300 p-6 rounded-md font-mono text-[11px] leading-loose overflow-x-auto shadow-inner relative">
        <div className="text-white opacity-80">
          [BUSINESSES] 1 ----- N [PRODUCTS]<br/>
          [BUSINESSES] 1 ----- N [INGREDIENTS]<br/>
          [PRODUCTS] 1 ----- N [PRODUCT_INGREDIENTS] <span className="text-gray-500">// Bill of Materials (BOM)</span><br/>
          [PRODUCTS] 1 ----- N [PRODUCT_CHANNELS] <span className="text-gray-500">// Multi-channel setup</span>
        </div>
        <div className="text-gray-600 my-3">--------------------------------------------------------</div>
        <div className="text-[#8EC9DB] font-bold mb-2">TABLE: PRICING_SNAPSHOTS (Immutable Data)</div>
        <div className="pl-6 border-l border-gray-700 opacity-90 space-y-1">
          <div><span className="text-gray-400">UUID</span> id (PK)</div>
          <div><span className="text-gray-400">UUID</span> product_id (FK)</div>
          <div><span className="text-gray-400">UUID</span> channel_id (FK)</div>
          <div><span className="text-gray-400">DECIMAL</span> total_production_cost <span className="text-gray-500">// Frozen value</span></div>
          <div><span className="text-gray-400">DECIMAL</span> total_effective_cost <span className="text-gray-500">// Frozen value</span></div>
          <div><span className="text-gray-400">DECIMAL</span> absolute_profit</div>
          <div><span className="text-gray-400">DECIMAL</span> margin_ratio</div>
          <div><span className="text-gray-400">JSONB</span> ingredient_prices_at_time <span className="text-gray-500">// Deep freeze of market conditions</span></div>
        </div>
      </div>
    </div>
    
    <div>
      <h2 className="text-[16px] md:text-[18px] font-black uppercase tracking-wide text-[#112031] mb-4 font-['Space_Grotesk']">III. Kiến trúc Cập nhật Tự động (Auto Repricing Job)</h2>
      <p className="text-justify">
        Do mạng lưới liên kết giữa nguyên vật liệu và sản phẩm cuối cùng (thông qua BOM) là rất dày đặc, một thay đổi nhỏ về giá bột mì có thể tác động đến hàng trăm danh mục bánh ngọt. Hệ thống sử dụng Background Workers (Job Queue) để quét đệ quy các cấu phần bị ảnh hưởng, tự động tính toán lại định mức và tạo ra hàng loạt bản Snapshot mới mà không gây tắc nghẽn luồng xử lý đồng bộ (Synchronous Thread) của máy chủ giao diện người dùng.
      </p>
    </div>
  </div>
);

const Phase4Content = () => (
  <div className="space-y-8">
    <div>
      <h2 className="text-[16px] md:text-[18px] font-black uppercase tracking-wide text-[#112031] mb-4 font-['Space_Grotesk']">I. Lằn ranh đỏ: Deterministic vs Probabilistic</h2>
      <p className="text-justify mb-4">
        Sự bùng nổ của Mô hình Ngôn ngữ Lớn (LLMs) tạo ra cám dỗ ứng dụng AI vào mọi ngóc ngách của phần mềm. Tuy nhiên, trong lĩnh vực công nghệ tài chính, đặc tính ngẫu nhiên (Probabilistic) của AI có thể dẫn đến hiện tượng ảo giác số liệu (Hallucination) – một sai số nhỏ trong thuật toán định giá có thể bào mòn lợi nhuận thực tế của doanh nghiệp theo cấp số nhân.
      </p>
      
      <p className="text-justify mb-6">
        Chiến lược trí tuệ nhân tạo của Prix. được định hình dựa trên nguyên tắc chia rẽ và trị (Divide & Conquer), vạch ra lằn ranh giới hạn tuyệt đối giữa Nhiệm vụ tính toán và Nhiệm vụ diễn giải.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-md overflow-hidden bg-white shadow-sm">
        <div className="p-6 md:border-r border-gray-200">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-[#112031] text-white text-[9px] font-black uppercase tracking-widest py-1.5 px-4 rounded-sm">1. Core Engine</span>
          </div>
          <div className="text-center text-[12px] font-black text-[#112031] mb-4 uppercase tracking-widest">DETERMINISTIC MATH</div>
          <p className="text-[12px] text-gray-600 text-justify mb-4">Mô-đun toán học tất định. Đầu vào không đổi sẽ luôn trả về một kết quả không đổi. Đây là lớp bảo vệ cuối cùng đảm bảo tính chính xác 100% của lợi nhuận.</p>
          <ul className="text-[11px] space-y-2 text-gray-600 bg-gray-50 p-4 rounded border border-gray-100">
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">✔</span> Tính toán Margin và Break-even Point.</li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">✔</span> Đánh giá trạng thái (Safe / Danger).</li>
            <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">❌</span> Trả về kết quả là những con số vô hồn.</li>
          </ul>
        </div>
        
        <div className="p-6 bg-[#f0f7f9]/50">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-[#8EC9DB] text-[#112031] text-[9px] font-black uppercase tracking-widest py-1.5 px-4 rounded-sm shadow-sm">2. AI Copilot</span>
          </div>
          <div className="text-center text-[12px] font-black text-[#112031] mb-4 uppercase tracking-widest">PROBABILISTIC INSIGHT</div>
          <p className="text-[12px] text-gray-600 text-justify mb-4">Mô-đun diễn dịch xác suất. Tuyệt đối bị cấm can thiệp vào phép toán, chỉ đóng vai trò chuyển ngữ từ "Ngôn ngữ máy học" sang "Lời khuyên quản trị".</p>
          <ul className="text-[11px] space-y-2 text-gray-600 bg-white p-4 rounded border border-[#8EC9DB]/30">
            <li className="flex items-start gap-2"><span className="text-[#8EC9DB] font-bold mt-0.5">✔</span> Đọc hiểu JSON tĩnh từ Core Engine.</li>
            <li className="flex items-start gap-2"><span className="text-[#8EC9DB] font-bold mt-0.5">✔</span> Dịch biên độ lợi nhuận thành ngôn ngữ con người.</li>
            <li className="flex items-start gap-2"><span className="text-[#8EC9DB] font-bold mt-0.5">✔</span> Đề xuất các hành động sửa chữa rủi ro.</li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h2 className="text-[16px] md:text-[18px] font-black uppercase tracking-wide text-[#112031] mb-4 font-['Space_Grotesk']">II. Kỹ thuật Context Injection (Prompt Engineering)</h2>
      <p className="text-justify mb-6">
        Để kiểm soát đầu ra của LLMs, chúng tôi áp dụng kỹ thuật Context Injection. Hệ thống không truyền dữ liệu thô (Raw Database Records) cho AI, mà đóng gói các chỉ số đã được xử lý hoàn tất thành một gói JSON Context Payload siêu nhẹ. Nhiệm vụ của AI bị giới hạn nghiêm ngặt trong việc "đọc hiểu và tư vấn".
      </p>

      <div className="bg-[#112031] text-gray-300 p-6 rounded-md font-mono text-[11px] leading-relaxed overflow-x-auto shadow-inner relative">
        <div className="absolute top-0 right-0 bg-[#8EC9DB]/20 px-3 py-1 text-[9px] uppercase tracking-widest text-[#8EC9DB]">LLM Payload Structure</div>
        <div className="text-gray-500 mb-2">// Ví dụ cấu trúc payload gửi đến OpenAI / Claude API</div>
        <div className="text-white">{`{`}</div>
        <div className="pl-6 text-gray-300 border-l border-gray-700 ml-2 space-y-1">
          <div><span className="text-[#8EC9DB]">"product_context"</span>: {`{ "name": "Cà Phê Muối", "base_price": 35000 },`}</div>
          <div><span className="text-[#8EC9DB]">"financial_truth"</span>: {`{`}</div>
          <div className="pl-6">
            <div><span className="text-[#8EC9DB]">"current_margin_ratio"</span>: 0.22, <span className="text-gray-500">// Engine calculated: 22%</span></div>
            <div><span className="text-[#8EC9DB]">"target_margin_ratio"</span>: 0.40, <span className="text-gray-500">// Target: 40%</span></div>
            <div><span className="text-[#8EC9DB]">"health_status"</span>: "DANGER"</div>
          </div>
          <div>{`},`}</div>
          <div><span className="text-[#8EC9DB]">"channel_context"</span>: {`{ "platform": "ShopeeFood", "fee_burden": 0.25 }`}</div>
        </div>
        <div className="text-white">{`}`}</div>
        <div className="text-yellow-400 mt-4">// Prompt Instruction: "Dựa vào bộ Financial Truth trên, hãy viết 3 dòng giải thích tại sao sản phẩm này đang ở trạng thái DANGER và đề xuất phương án tăng giá bán hoặc thay thế combo."</div>
      </div>
    </div>

    <div>
      <h2 className="text-[16px] md:text-[18px] font-black uppercase tracking-wide text-[#112031] mb-4 font-['Space_Grotesk']">III. Đánh giá chất lượng dữ liệu (Confidence Scoring)</h2>
      <p className="text-justify mb-4">
        AI của Prix. còn đóng vai trò kiểm toán chất lượng dữ liệu. Hệ thống nội bộ chấm điểm Confidence Score dựa trên sự đầy đủ của dữ liệu (Ví dụ: Nếu chủ shop chưa nhập chi phí nhân công, điểm Confidence sẽ giảm xuống 0.6). Khi đó, AI sẽ tự động thay đổi văn phong (Tone & Voice) từ "Kết luận chắc chắn" sang "Cảnh báo ước tính", yêu cầu người dùng phải bổ sung dữ liệu trước khi đưa ra các quyết định hệ trọng.
      </p>
    </div>
  </div>
);

const Phase5Content = () => (
  <div className="space-y-8">
    <div>
      <h2 className="text-[16px] md:text-[18px] font-black uppercase tracking-wide text-[#112031] mb-4 font-['Space_Grotesk']">I. Kiến trúc Triển khai (Deployment Architecture)</h2>
      <p className="text-justify mb-6">
        Quá trình chuyển hóa từ bản mẫu R&D sang sản phẩm phần mềm vận hành thực tế (Production-ready) yêu cầu một kiến trúc linh hoạt, khả năng mở rộng nhanh (Scalable) và tính độc lập cao. Chúng tôi lựa chọn mô hình Modern Fullstack SPA kết hợp với kiến trúc phân tán (Micro-services ready).
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <div className="bg-white border border-gray-200 p-5 rounded-md shadow-sm">
          <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-3 border-b border-gray-100 pb-2">Client-Side (Frontend)</div>
          <div className="font-black text-[#112031] mb-2 text-[14px]">React 19 + Vite + TypeScript</div>
          <p className="text-[12px] text-gray-600 text-justify">UI được xây dựng theo chuẩn Design System "Decision Deck", quản lý state tập trung, đóng gói qua Vite để tối ưu hóa thời gian tải trang (Time To Interactive). Typings nghiêm ngặt giúp bắt lỗi logic tài chính ngay từ khâu compile.</p>
        </div>
        
        <div className="bg-white border border-gray-200 p-5 rounded-md shadow-sm">
          <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-3 border-b border-gray-100 pb-2">Server-Side (API)</div>
          <div className="font-black text-[#112031] mb-2 text-[14px]">Fastify + Node.js</div>
          <p className="text-[12px] text-gray-600 text-justify">Fastify cung cấp tốc độ routing thuộc hàng top trong hệ sinh thái Node.js. Quan trọng nhất, backend duy trì tính <strong>Stateless</strong> hoàn toàn. Session và Auth được quản lý qua Signed Cookies mã hóa, không lưu trữ state trên RAM server.</p>
        </div>
        
        <div className="bg-white border border-[#8EC9DB]/50 p-5 rounded-md shadow-sm bg-blue-50/20">
          <div className="text-[10px] uppercase font-bold text-[#8EC9DB] tracking-widest mb-3 border-b border-blue-100 pb-2">Persistence (Database)</div>
          <div className="font-black text-[#112031] mb-2 text-[14px]">PostgreSQL + Prisma ORM</div>
          <p className="text-[12px] text-gray-600 text-justify">RDBMS là lựa chọn bắt buộc cho các truy vấn tài chính mang tính ACID. Lớp Prisma ORM bảo vệ truy vấn khỏi SQL Injection và cung cấp Type-safety end-to-end từ Database lên tới Frontend.</p>
        </div>
        
        <div className="bg-[#112031] border border-gray-800 p-5 rounded-md shadow-sm text-gray-300">
          <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-3 border-b border-gray-700 pb-2">Infrastructure</div>
          <div className="font-black text-white mb-2 text-[14px]">Docker + K3s (Kubernetes)</div>
          <p className="text-[11px] text-gray-400 text-justify">Đóng gói Container giúp loại bỏ lỗi "Works on my machine". Cụm K3s siêu nhẹ giám sát các pod Fastify; nhờ bản chất Stateless của backend, K3s có thể tự động nhân bản (Scale-out) khi lưu lượng Auto Repricing tăng vọt.</p>
        </div>
      </div>
    </div>

    <div>
      <h2 className="text-[16px] md:text-[18px] font-black uppercase tracking-wide text-[#112031] mb-4 font-['Space_Grotesk']">II. Đánh giá bản thử nghiệm V1 (Evaluation)</h2>
      
      <div className="border-l-[3px] border-[#C1292E] pl-5 py-2 my-6 bg-red-50/30">
        <strong className="block text-[#112031] uppercase tracking-wider mb-2 text-[12px]">Giới hạn của Phiên bản V1 (Beta)</strong>
        <p className="text-[12px] text-gray-700 text-justify leading-relaxed">
          Quá trình thử nghiệm alpha test nội bộ bộc lộ một điểm yếu: Hệ thống V1 hiện đang gộp chung các khoản Thuế, Phí Voucher, và Phí Affiliate thành một tỷ lệ % tĩnh duy nhất trong Setting của kênh bán. Trong môi trường kinh doanh thực tế tại Việt Nam, cơ chế chiết khấu của các sàn TMĐT được phân chia theo dạng bậc thang (Tier-based) và thay đổi theo từng ngành hàng. Việc cào bằng tỷ lệ % gây ra sai số nhỏ (khoảng 2-3%) trên tổng lợi nhuận kỳ vọng.
        </p>
      </div>
    </div>

    <div>
      <h2 className="text-[16px] md:text-[18px] font-black uppercase tracking-wide text-[#112031] mb-4 font-['Space_Grotesk']">III. Lộ trình chiến lược V2 (Vision & Roadmap)</h2>
      <p className="text-justify mb-6">
        Phiên bản V2 sẽ dịch chuyển trọng tâm từ "Phân tích giá hiện tại" sang "Mô phỏng chiến lược tương lai", tập trung xây dựng tính năng <strong>Promo & Combo Optimizer</strong>.
      </p>
      <ul className="list-disc pl-5 space-y-3 text-[12px] text-gray-700 text-justify">
        <li>Thay vì bị động nhận cảnh báo lỗ, chủ doanh nghiệp có thể đưa vào công cụ A/B Testing: <em>"Nếu tôi tham gia chiến dịch Mega Sale giảm giá 15%, so với việc giữ nguyên giá nhưng tặng kèm một ly hồng trà (có giá vốn thấp), chiến dịch nào mang lại lợi nhuận cuối cùng (Net Profit) cao hơn?"</em>.</li>
        <li>Hệ thống sẽ chạy thuật toán giả lập trên hai bản sao Snapshot ảo, và AI Copilot sẽ tự động trích xuất cấu trúc chiến thắng (Winning Structure) để tham mưu cho quyết định cuối cùng.</li>
      </ul>
      
      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <h3 className="text-3xl font-black text-[#112031] tracking-tighter uppercase italic mb-3">"Tính đúng giá. Giữ đúng lời."</h3>
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Prix. Product Vision / End of Document</p>
      </div>
    </div>
  </div>
);

// --- MAIN COMPONENT ---

const tabsData = [
  { 
    id: 'research', 
    title: '1. Khảo sát & Vấn đề', 
    docId: 'PRX-001',
    mainTitle: 'MARKET PAIN-POINT ANALYSIS',
    subTitle: 'Nguyên nhân gây đứt gãy dòng tiền SME đa kênh',
    summary: {
      project: 'PRIX. INTELLIGENCE (V1)',
      timeline: 'PHASE 1 - 02 THÁNG',
      scope: 'NGHIÊN CỨU HÀNH VI ĐỊNH GIÁ F&B',
      target: 'ĐỊNH DANH ĐIỂM MÙ TÀI CHÍNH',
    },
    content: <Phase1Content />,
    annotation: "<strong>Tại sao tập trung vào F&B SME?</strong><br/><br/>Khảo sát thị trường chỉ ra rằng khối lượng giao dịch qua app giao đồ ăn chiếm tới 60-70% doanh thu của các quán ăn nhỏ. Tuy nhiên, họ hoàn toàn mù mờ về <strong>Total Effective Cost</strong>. Việc giải quyết bài toán tính đúng giá trên các nền tảng Aggregator là <em>Unique Selling Proposition (USP)</em> sắc bén nhất để xâm nhập thị trường."
  },
  { 
    id: 'engine', 
    title: '2. Thuật toán Lõi (Engine)', 
    docId: 'PRX-002',
    mainTitle: 'DETERMINISTIC ENGINE ALGORITHM',
    subTitle: 'Kiến trúc tính toán phân tách chi phí & Giải ngược',
    summary: {
      project: 'PRIX. INTELLIGENCE (V1)',
      timeline: 'PHASE 2 - 04 THÁNG',
      scope: 'THIẾT KẾ MÔ HÌNH TOÁN TÀI CHÍNH',
      target: 'LOẠI BỎ PHƯƠNG PHÁP THỬ & SAI',
    },
    content: <Phase2Content />,
    annotation: "<strong>Reverse Engineering (Giải Ngược):</strong><br/><br/>Thay vì hỏi <em>'Giá này lời bao nhiêu?'</em>, Prix lật ngược vấn đề thành <em>'Muốn lời 45% thì phải bán giá nào?'</em>.<br/><br/>Chính cú lật ngược tư duy này giúp giảm tải 80% thời gian thiết lập menu cho chủ doanh nghiệp, họ chỉ cần quản trị <strong>Sự tham vọng</strong> thay vì cặm cụi tính toán cộng trừ."
  },
  { 
    id: 'data', 
    title: '3. Cấu trúc CSDL (Data)', 
    docId: 'PRX-003',
    mainTitle: 'TEMPORAL DATA & SNAPSHOT PARADIGM',
    subTitle: 'Thiết kế cơ sở dữ liệu bất biến và Lịch sử giá',
    summary: {
      project: 'PRIX. INTELLIGENCE (V1)',
      timeline: 'PHASE 3 - 03 THÁNG',
      scope: 'TỐI ƯU HÓA POSTGRESQL & PRISMA ORM',
      target: 'BẢO TOÀN TÍNH TOÀN VẸN LỊCH SỬ',
    },
    content: <Phase3Content />,
    annotation: "<strong>Storage vs Integrity:</strong><br/><br/>Việc liên tục tạo Snapshot mỗi khi có thay đổi sẽ làm phình to dung lượng Database rất nhanh (Data Bloat). Tuy nhiên, cái giá của <strong>Lưu trữ (Storage)</strong> ngày nay cực rẻ so với cái giá của <strong>Sự tin cậy (Integrity)</strong>. Nếu báo cáo lợi nhuận tháng trước bị nhảy múa lung tung do update ghi đè, hệ thống sẽ vĩnh viễn mất đi sự tín nhiệm từ người dùng."
  },
  { 
    id: 'ai', 
    title: '4. Chiến lược AI (Intelligence)', 
    docId: 'PRX-004',
    mainTitle: 'AI COPILOT INTEGRATION STRATEGY',
    subTitle: 'Kỹ thuật bơm ngữ cảnh và Kiểm soát Ảo giác LLM',
    summary: {
      project: 'PRIX. INTELLIGENCE (V1)',
      timeline: 'PHASE 4 - 03 THÁNG',
      scope: 'TÍCH HỢP LLM API (OPENAI/CLAUDE)',
      target: 'CHUYỂN HÓA SỐ LIỆU THÀNH LỜI KHUYÊN',
    },
    content: <Phase4Content />,
    annotation: "<strong>Kiểm duyệt dữ liệu (Data Guardrails):</strong><br/><br/>Nhiều startup AI thất bại vì cố gắng nhồi nhét Database Schema vào Prompt để AI tự chạy SQL Query lấy số. Trong hệ thống tài chính, điều này rủi ro cực độ.<br/><br/>Prix áp dụng cơ chế <strong>Strict Decoupling</strong>: Node.js tự query DB, tự chạy thuật toán tĩnh, ra kết quả cuối cùng (Ví dụ: Lỗ 12%), rồi mới gói gọn kết quả đó gửi cho AI để xin văn bản tư vấn."
  },
  { 
    id: 'dev', 
    title: '5. Triển khai & Tầm nhìn', 
    docId: 'PRX-005',
    mainTitle: 'FULLSTACK DEPLOYMENT ARCHITECTURE',
    subTitle: 'Kiến trúc triển khai hiện đại & Định hướng V2',
    summary: {
      project: 'PRIX. INTELLIGENCE (V1)',
      timeline: 'PHASE 5 - LAUNCH',
      scope: 'CONTAINERIZATION & CLOUD INFRASTRUCTURE',
      target: 'ĐẢM BẢO HIGH AVAILABILITY & SCALING',
    },
    content: <Phase5Content />,
    annotation: "<strong>Stateless vs Stateful:</strong><br/><br/>Nút thắt cổ chai lớn nhất của các ứng dụng SaaS thường nằm ở việc quản lý Session của User trên RAM máy chủ (Stateful). Bằng việc sử dụng <strong>Signed Cookies</strong>, ứng dụng Fastify API của Prix trở thành Stateless tuyệt đối. Nhờ đó, K3s (Kubernetes) có thể thoải mái kill hoặc replicate các Pods một cách tự động mà không lo rớt phiên đăng nhập của khách hàng."
  }
];


const PrixProject = () => {
  const [activeTab, setActiveTab] = useState('research');
  
  const currentData = tabsData.find(t => t.id === activeTab) || tabsData[0];

  return (
    <>
      <Header />
      <PageTransition>
        <div className="min-h-screen bg-[#f3f4f6] text-black font-['Space_Grotesk'] overflow-x-hidden">
          
          {/* Top Title Bar */}
          <div className="w-full bg-white border-b border-gray-200 pt-28 pb-6 px-6 md:px-12 text-center sticky top-0 z-40 shadow-sm">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-400 block mb-2">Project 01</span>
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#112031]">R&D Report: Prix.</h1>
            <p className="text-[12px] text-gray-500 mt-2 font-['Inter'] max-w-lg mx-auto">Tài liệu nghiên cứu kiến trúc, thuật toán lõi và chiến lược phát triển Hệ thống Trí tuệ Định giá.</p>
          </div>

          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start justify-center px-4 md:px-8 py-10 relative gap-8 xl:gap-12">
            
            {/* LEFT TOC (Tabs) */}
            <div className="w-full lg:w-[260px] shrink-0 lg:sticky lg:top-[200px] h-fit z-20 bg-[#f3f4f6] py-2">
              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 lg:mb-6">R&D Roadmap (Phân hệ)</div>
              
              <ul className="hidden lg:flex flex-col space-y-5 border-l-2 border-gray-200">
                {tabsData.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <li key={tab.id}>
                      <button 
                        onClick={() => {
                          setActiveTab(tab.id);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`block pl-5 text-left text-[13px] uppercase font-bold tracking-widest transition-all duration-300 relative w-full ${isActive ? 'text-[#112031]' : 'text-gray-400 hover:text-gray-600'}`}
                      >
                        {isActive && (
                          <motion.span 
                            layoutId="activeTabMarker"
                            className="absolute -left-[2px] top-0 bottom-0 w-[3px] bg-[#112031]"
                          />
                        )}
                        {tab.title}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile Tabs */}
              <div className="lg:hidden flex overflow-x-auto pb-4 gap-2 snap-x hide-scrollbar">
                {tabsData.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`shrink-0 snap-start px-4 py-2 text-[11px] uppercase font-bold tracking-widest rounded-full transition-colors border ${isActive ? 'bg-[#112031] text-white border-[#112031]' : 'bg-white text-gray-500 border-gray-200'}`}
                    >
                      {tab.title.split('. ')[1]}
                    </button>
                  );
                })}
              </div>
              
              <div className="mt-8 lg:mt-16 pt-6 lg:pt-8 border-t border-gray-200">
                <button 
                  onClick={() => hardNavigate('/rd')}
                  className="text-[11px] font-black uppercase tracking-widest text-[#112031] hover:text-[#8EC9DB] transition-colors flex items-center gap-2"
                >
                  ← Về Danh sách Dự án
                </button>
              </div>
            </div>

            {/* CENTER A4 PAPER */}
            <div className="flex-1 w-full max-w-[800px] relative mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <A4Sheet 
                    docId={currentData.docId} 
                    mainTitle={currentData.mainTitle}
                    subTitle={currentData.subTitle}
                    summary={currentData.summary}
                    pageNum={tabsData.findIndex(t => t.id === activeTab) + 1}
                  >
                    {currentData.content}
                    
                    {/* Inline Annotation for Mobile */}
                    <div className="mt-16 pt-8 border-t border-gray-100 xl:hidden">
                      <MobileAnnotation content={currentData.annotation} />
                    </div>
                  </A4Sheet>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT SIDEBAR (Annotations) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`anno-${activeTab}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="hidden xl:block"
              >
                <RightAnnotation content={currentData.annotation} />
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </PageTransition>
    </>
  );
};

export default PrixProject;
