import React from 'react';
import Header from '../components/layout/Header';
import PageTransition from '../components/layout/PageTransition';
import useLang from '../hooks/useLang';

const ContentStrategy = () => {
  const { lang } = useLang();
  const tx = (vi, en) => lang === 'en' ? en : vi;
  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen w-full pt-32 pb-32 px-6 md:px-12 max-w-4xl mx-auto relative z-10">
          
          {/* Title Section */}
          <header className="mb-20 border-b border-white/10 pb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold tracking-widest rounded-sm uppercase">{tx(<>Khung phương pháp</>, <>Framework</>)}</span>
              <span className="text-accent text-xs tracking-widest uppercase">{tx(<>Tầng 1–8</>, <>Layer 1-8</>)}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 leading-tight">
              {tx('Marketing tám lớp', 'The 8-Layer')} <br/><span className="text-gray-500">{tx('Hệ thống kết nối.', 'Marketing Stack.')}</span>
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
              {tx('Phong cách:', 'Style:')} <strong className="text-white font-medium">Minimalist | System-Oriented | AI-Accelerated</strong>
            </p>
          </header>

          {/* Detailed Framework */}
          <section className="mb-24">
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-12 flex items-center gap-4">
              <span className="w-8 h-px bg-accent"></span> {tx('Khung chi tiết & tài liệu', 'Detailed Framework & Assets')}
            </h2>
            
            <div className="space-y-16">
              {/* Layer 1 */}
              <article className="group">
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-accent transition-colors">{tx(<>Tầng 1: Chiến lược &amp; Hoạch định</>, <>Layer 1: Strategy &amp; Planning</>)}</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-400">
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">{tx("Mô tả", "Description")}</div>
                  <div className="md:col-span-3">{tx("Tư duy cốt lõi, lập bản đồ đường đi cho chiến dịch.", "Core strategic thinking and a roadmap for the campaign.")}</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">{tx("Công cụ", "Tools")}</div>
                  <div className="md:col-span-3 text-white">Notion (Plan), Coda (Database), MindNode (Brainstorm).</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">{tx("Hình ảnh", "Visual assets")}</div>
                  <div className="md:col-span-3">{tx(<>Ảnh chụp màn hình <strong>Notion Strategy Dashboard</strong> hoặc sơ đồ <strong>Mindmap</strong> tinh gọn.</>, <>A <strong>Notion Strategy Dashboard</strong> screenshot or a concise <strong>mind map</strong>.</>)}</div>
                  
                  <div className="md:col-span-1 text-accent uppercase tracking-widest font-medium text-xs pt-1">{tx('Tích hợp AI', 'AI Integration')}</div>
                  <div className="md:col-span-3 text-gray-300">{tx(<>Dùng <strong>Claude/ChatGPT</strong> để phân tích đối thủ, xây dựng Buyer Persona và đề xuất thông điệp lõi (Angle) chỉ trong vài phút.</>, <>Use <strong>Claude/ChatGPT</strong> to analyze competitors, develop buyer personas and explore core messaging angles.</>)}</div>
                </div>
              </article>

              {/* Layer 2 & 3 */}
              <article className="group">
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-accent transition-colors">{tx(<>Tầng 2 &amp; 3: Nội dung &amp; Thiết kế</>, <>Layer 2 &amp; 3: Content Creation &amp; Design</>)}</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-400">
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">{tx("Mô tả", "Description")}</div>
                  <div className="md:col-span-3">{tx("\"Hơi thở\" của thương hiệu qua hình ảnh và ngôn từ.", "Express the brand through visual design and language.")}</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">{tx("Công cụ", "Tools")}</div>
                  <div className="md:col-span-3 text-white">Canva Pro, Midjourney (Assets), CapCut (Video), ChatGPT (Copy).</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">{tx("Hình ảnh", "Visual assets")}</div>
                  <div className="md:col-span-3">{tx(<><strong>Moodboard</strong> dự án, Grid sản phẩm/video showreel ngắn.</>, <>A project <strong>moodboard</strong>, product grid or short video showreel.</>)}</div>
                  
                  <div className="md:col-span-1 text-accent uppercase tracking-widest font-medium text-xs pt-1">{tx('Tích hợp AI', 'AI Integration')}</div>
                  <div className="md:col-span-3 text-gray-300">{tx(<>Sử dụng <strong>Midjourney/DALL-E 3</strong> để tạo visual độc bản; <strong>AI Copywriting</strong> để biến 1 ý tưởng thành 10 phiên bản content cho các kênh khác nhau (Content Atomization).</>, <>Use <strong>Midjourney/DALL-E 3</strong> to explore visual assets and <strong>AI copywriting</strong> to adapt one idea for multiple channels (content atomization).</>)}</div>
                </div>
              </article>

              {/* Layer 4 & 5 */}
              <article className="group">
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-accent transition-colors">{tx(<>Tầng 4 &amp; 5: Tăng trưởng Organic &amp; Paid</>, <>Layer 4 &amp; 5: Organic &amp; Paid Growth</>)}</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-400">
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">{tx("Mô tả", "Description")}</div>
                  <div className="md:col-span-3">{tx("Cách thức tiếp cận và thu hút khách hàng tiềm năng.", "Reach and attract prospective customers.")}</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">{tx("Công cụ", "Tools")}</div>
                  <div className="md:col-span-3 text-white">Meta Business Suite, Google Ads, Google Search Console.</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">{tx("Hình ảnh", "Visual assets")}</div>
                  <div className="md:col-span-3">{tx(<>Biểu đồ <strong>Growth Curve</strong> (Đường cong tăng trưởng) hoặc Dashboard Ads tối giản (chỉ hiện Spend & ROI).</>, <>A <strong>growth curve</strong> chart or focused ads dashboard showing spend and ROI.</>)}</div>
                  
                  <div className="md:col-span-1 text-accent uppercase tracking-widest font-medium text-xs pt-1">{tx('Tích hợp AI', 'AI Integration')}</div>
                  <div className="md:col-span-3 text-gray-300">{tx(<>Dùng <strong>AI Audience Insights</strong> để tìm tệp khách hàng lạ; AI tự động tối ưu hóa giá thầu và tạo biến thể hình ảnh quảng cáo (Dynamic Creative).</>, <>Use <strong>AI audience insights</strong> to explore new segments, support bid optimization and generate creative variations.</>)}</div>
                </div>
              </article>

              {/* Layer 6 */}
              <article className="group">
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-accent transition-colors">{tx(<>Tầng 6: Tự động hóa &amp; CRM</>, <>Layer 6: Automation &amp; CRM</>)}</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-400">
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">{tx("Mô tả", "Description")}</div>
                  <div className="md:col-span-3">{tx("\"Bộ máy\" vận hành tự động giúp hệ thống chạy 24/7.", "Automated workflows supporting continuous operations.")}</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">{tx("Công cụ", "Tools")}</div>
                  <div className="md:col-span-3 text-white"><strong>Make.com</strong> (Logic), Zapier, ManyChat (Bot), HubSpot (CRM).</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">{tx("Hình ảnh", "Visual assets")}</div>
                  <div className="md:col-span-3">{tx(<>Sơ đồ <strong>Workflow Logic</strong> (Luồng tự động hóa) - cực kỳ quan trọng để show "Full Stack".</>, <>A <strong>workflow logic</strong> diagram showing how tools and data connect across the system.</>)}</div>
                  
                  <div className="md:col-span-1 text-accent uppercase tracking-widest font-medium text-xs pt-1">{tx('Tích hợp AI', 'AI Integration')}</div>
                  <div className="md:col-span-3 text-gray-300">{tx(<>Tích hợp <strong>OpenAI API vào Make.com</strong> để tự động phân loại Lead, tóm tắt phản hồi khách hàng hoặc tự động gửi email cá nhân hóa dựa trên hành vi.</>, <>Integrate <strong>OpenAI API with Make.com</strong> to classify leads, summarize customer feedback or personalize emails based on behavior.</>)}</div>
                </div>
              </article>

              {/* Layer 7 & 8 */}
              <article className="group">
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-accent transition-colors">{tx(<>Tầng 7 &amp; 8: Phân tích, Chuyển đổi &amp; Giữ chân</>, <>Layer 7 &amp; 8: Analytics, Conversion &amp; Retention</>)}</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-400">
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">{tx("Mô tả", "Description")}</div>
                  <div className="md:col-span-3">{tx("Đo hiệu quả, tìm điểm nghẽn chuyển đổi và gửi insight ngược lại cho vòng tối ưu tiếp theo.", "Measure performance, identify conversion bottlenecks and feed insights into the next optimization cycle.")}</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">{tx("Công cụ", "Tools")}</div>
                  <div className="md:col-span-3 text-white">GA4, Microsoft Clarity, Power BI / Metabase, {tx('Hotjar (bổ sung nghiên cứu UX)', 'Hotjar (additional UX research)')}, VWO / Optimizely.</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">{tx("Hình ảnh", "Visual assets")}</div>
                  <div className="md:col-span-3">{tx(<><strong>Dashboard điều hành</strong> về traffic, lead quality, ROAS; kèm <strong>session replay / heatmap</strong> để đọc điểm nghẽn trên landing page.</>, <>An <strong>executive dashboard</strong> for traffic, lead quality and ROAS, with <strong>session replay / heatmaps</strong> to investigate landing-page friction.</>)}</div>
                  
                  <div className="md:col-span-1 text-accent uppercase tracking-widest font-medium text-xs pt-1">{tx('Tích hợp AI', 'AI Integration')}</div>
                  <div className="md:col-span-3 text-gray-300">{tx("Dùng AI để phát hiện bất thường trong dữ liệu, tóm tắt session insight nhanh hơn và hỗ trợ phân tích kết quả test trước khi đưa ra quyết định tối ưu.", "Use AI to flag data anomalies, summarize session insights and support test analysis before deciding what to optimize.")}</div>
                </div>
              </article>
            </div>
          </section>

          {/* Standard Case Study Skeleton */}
          <section className="mb-24 bg-white/5 p-8 rounded-xl border border-white/10">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-8 flex items-center gap-4">
              {tx('Cấu trúc case study', 'Standard Case Study Skeleton')} <span className="text-gray-500 text-sm normal-case font-normal">{tx(<>(Bản một trang)</>, <>(1-Page Design)</>)}</span>
            </h2>
            <ol className="list-decimal list-outside ml-6 space-y-4 text-gray-400 text-sm leading-relaxed">
              <li><strong className="text-white">Header</strong>: Project Name | Goal (Metric).</li>
              <li><strong className="text-white">The System (Visual)</strong>: {tx(<>Một sơ đồ nối các icon công cụ (Ví dụ: FB Ads -&gt; Landing Page -&gt; Make.com -&gt; CRM).</>, <>A diagram connecting tools, for example FB Ads -&gt; Landing Page -&gt; Make.com -&gt; CRM.</>)}</li>
              <li><strong className="text-white">Operation Log (Lean Text)</strong>:
                <ul className="list-disc list-outside ml-6 mt-2 space-y-2 text-gray-500">
                  <li><em>Step 1 (Strategy)</em>: {tx(<>Định vị &amp; Phân tích (AI-assisted).</>, <>Positioning &amp; analysis (AI-assisted).</>)}</li>
                  <li><em>Step 2 (Execution)</em>: Content &amp; Design (AI-generated assets).</li>
                  <li><em>Step 3 (Efficiency)</em>: {tx("Thiết lập Automation luồng dữ liệu.", "Set up automated data workflows.")}</li>
                </ul>
              </li>
              <li><strong className="text-white">Proof of Value</strong>: {tx("3 chỉ số xanh nhất (Green metrics).", "Three relevant metrics with supporting evidence.")}</li>
            </ol>
          </section>

          {/* Global Tool Grid */}
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-6 flex items-center gap-4 text-gray-500">
              {tx('Bộ công cụ', 'Global Tool Grid')}
            </h2>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-3 bg-white/5 border border-white/10 rounded font-mono text-xs text-gray-400 hover:text-white transition-colors cursor-default">
                <span className="text-gray-600 mr-2">[Strategic]</span> Notion, Claude, Coda
              </div>
              <div className="px-4 py-3 bg-white/5 border border-white/10 rounded font-mono text-xs text-gray-400 hover:text-white transition-colors cursor-default">
                <span className="text-gray-600 mr-2">[Creative]</span> Canva, CapCut, Midjourney
              </div>
              <div className="px-4 py-3 bg-white/5 border border-white/10 rounded font-mono text-xs text-gray-400 hover:text-white transition-colors cursor-default">
                <span className="text-gray-600 mr-2">[Growth]</span> Meta Ads, GA4, Make.com
              </div>
            </div>
          </section>

        </main>
      </PageTransition>
    </>
  );
};

export default ContentStrategy;
