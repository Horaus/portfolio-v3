import React from 'react';
import Header from '../components/layout/Header';
import PageTransition from '../components/layout/PageTransition';

const ContentStrategy = () => {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen w-full pt-32 pb-32 px-6 md:px-12 max-w-4xl mx-auto relative z-10">
          
          {/* Title Section */}
          <header className="mb-20 border-b border-white/10 pb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold tracking-widest rounded-sm uppercase">Framework</span>
              <span className="text-accent text-xs tracking-widest uppercase">Layer 1-8</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 leading-tight">
              The 8-Layer <br/><span className="text-gray-500">Marketing Stack.</span>
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
              Style: <strong className="text-white font-medium">Minimalist | System-Oriented | AI-Accelerated</strong>
            </p>
          </header>

          {/* Detailed Framework */}
          <section className="mb-24">
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-12 flex items-center gap-4">
              <span className="w-8 h-px bg-accent"></span> 🏗️ Detailed Framework &amp; Assets
            </h2>
            
            <div className="space-y-16">
              {/* Layer 1 */}
              <article className="group">
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-accent transition-colors">Layer 1: Strategy &amp; Planning</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-400">
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">Mô tả</div>
                  <div className="md:col-span-3">Tư duy cốt lõi, lập bản đồ đường đi cho chiến dịch.</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">Công cụ</div>
                  <div className="md:col-span-3 text-white">Notion (Plan), Coda (Database), MindNode (Brainstorm).</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">Hình ảnh</div>
                  <div className="md:col-span-3">Ảnh chụp màn hình <strong>Notion Strategy Dashboard</strong> hoặc sơ đồ <strong>Mindmap</strong> tinh gọn.</div>
                  
                  <div className="md:col-span-1 text-accent uppercase tracking-widest font-medium text-xs pt-1">AI Integration</div>
                  <div className="md:col-span-3 text-gray-300">Dùng <strong>Claude/ChatGPT</strong> để phân tích đối thủ, xây dựng Buyer Persona và đề xuất thông điệp lõi (Angle) chỉ trong vài phút.</div>
                </div>
              </article>

              {/* Layer 2 & 3 */}
              <article className="group">
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-accent transition-colors">Layer 2 &amp; 3: Content Creation &amp; Design</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-400">
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">Mô tả</div>
                  <div className="md:col-span-3">"Hơi thở" của thương hiệu qua hình ảnh và ngôn từ.</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">Công cụ</div>
                  <div className="md:col-span-3 text-white">Canva Pro, Midjourney (Assets), CapCut (Video), ChatGPT (Copy).</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">Hình ảnh</div>
                  <div className="md:col-span-3"><strong>Moodboard</strong> dự án, Grid sản phẩm/video showreel ngắn.</div>
                  
                  <div className="md:col-span-1 text-accent uppercase tracking-widest font-medium text-xs pt-1">AI Integration</div>
                  <div className="md:col-span-3 text-gray-300">Sử dụng <strong>Midjourney/DALL-E 3</strong> để tạo visual độc bản; <strong>AI Copywriting</strong> để biến 1 ý tưởng thành 10 phiên bản content cho các kênh khác nhau (Content Atomization).</div>
                </div>
              </article>

              {/* Layer 4 & 5 */}
              <article className="group">
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-accent transition-colors">Layer 4 &amp; 5: Organic &amp; Paid Growth</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-400">
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">Mô tả</div>
                  <div className="md:col-span-3">Cách thức tiếp cận và thu hút khách hàng tiềm năng.</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">Công cụ</div>
                  <div className="md:col-span-3 text-white">Meta Business Suite, Google Ads, Google Search Console.</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">Hình ảnh</div>
                  <div className="md:col-span-3">Biểu đồ <strong>Growth Curve</strong> (Đường cong tăng trưởng) hoặc Dashboard Ads tối giản (chỉ hiện Spend & ROI).</div>
                  
                  <div className="md:col-span-1 text-accent uppercase tracking-widest font-medium text-xs pt-1">AI Integration</div>
                  <div className="md:col-span-3 text-gray-300">Dùng <strong>AI Audience Insights</strong> để tìm tệp khách hàng lạ; AI tự động tối ưu hóa giá thầu và tạo biến thể hình ảnh quảng cáo (Dynamic Creative).</div>
                </div>
              </article>

              {/* Layer 6 */}
              <article className="group">
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-accent transition-colors">Layer 6: Automation &amp; CRM</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-400">
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">Mô tả</div>
                  <div className="md:col-span-3">"Bộ máy" vận hành tự động giúp hệ thống chạy 24/7.</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">Công cụ</div>
                  <div className="md:col-span-3 text-white"><strong>Make.com</strong> (Logic), Zapier, ManyChat (Bot), HubSpot (CRM).</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">Hình ảnh</div>
                  <div className="md:col-span-3">Sơ đồ <strong>Workflow Logic</strong> (Luồng tự động hóa) - cực kỳ quan trọng để show "Full Stack".</div>
                  
                  <div className="md:col-span-1 text-accent uppercase tracking-widest font-medium text-xs pt-1">AI Integration</div>
                  <div className="md:col-span-3 text-gray-300">Tích hợp <strong>OpenAI API vào Make.com</strong> để tự động phân loại Lead, tóm tắt phản hồi khách hàng hoặc tự động gửi email cá nhân hóa dựa trên hành vi.</div>
                </div>
              </article>

              {/* Layer 7 & 8 */}
              <article className="group">
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-accent transition-colors">Layer 7 &amp; 8: Analytics, Conversion &amp; Retention</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-400">
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">Mô tả</div>
                  <div className="md:col-span-3">Đo hiệu quả, tìm điểm nghẽn chuyển đổi và gửi insight ngược lại cho vòng tối ưu tiếp theo.</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">Công cụ</div>
                  <div className="md:col-span-3 text-white">GA4, Microsoft Clarity, Power BI / Metabase, Hotjar (bổ sung UX research), VWO / Optimizely.</div>
                  
                  <div className="md:col-span-1 text-gray-500 uppercase tracking-widest font-medium text-xs pt-1">Hình ảnh</div>
                  <div className="md:col-span-3"><strong>Dashboard điều hành</strong> về traffic, lead quality, ROAS; kèm <strong>session replay / heatmap</strong> để đọc điểm nghẽn trên landing page.</div>
                  
                  <div className="md:col-span-1 text-accent uppercase tracking-widest font-medium text-xs pt-1">AI Integration</div>
                  <div className="md:col-span-3 text-gray-300">Dùng AI để phát hiện bất thường trong dữ liệu, tóm tắt session insight nhanh hơn và hỗ trợ phân tích kết quả test trước khi đưa ra quyết định tối ưu.</div>
                </div>
              </article>
            </div>
          </section>

          {/* Standard Case Study Skeleton */}
          <section className="mb-24 bg-white/5 p-8 rounded-xl border border-white/10">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-8 flex items-center gap-4">
              📖 Standard Case Study Skeleton <span className="text-gray-500 text-sm normal-case font-normal">(1-Page Design)</span>
            </h2>
            <ol className="list-decimal list-outside ml-6 space-y-4 text-gray-400 text-sm leading-relaxed">
              <li><strong className="text-white">Header</strong>: Project Name | Goal (Metric).</li>
              <li><strong className="text-white">The System (Visual)</strong>: Một sơ đồ nối các icon công cụ (Ví dụ: FB Ads -&gt; Landing Page -&gt; Make.com -&gt; CRM).</li>
              <li><strong className="text-white">Operation Log (Lean Text)</strong>:
                <ul className="list-disc list-outside ml-6 mt-2 space-y-2 text-gray-500">
                  <li><em>Step 1 (Strategy)</em>: Định vị &amp; Phân tích (AI-assisted).</li>
                  <li><em>Step 2 (Execution)</em>: Content &amp; Design (AI-generated assets).</li>
                  <li><em>Step 3 (Efficiency)</em>: Thiết lập Automation luồng dữ liệu.</li>
                </ul>
              </li>
              <li><strong className="text-white">Proof of Value</strong>: 3 chỉ số xanh nhất (Green metrics).</li>
            </ol>
          </section>

          {/* Global Tool Grid */}
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-6 flex items-center gap-4 text-gray-500">
              🛠️ Global Tool Grid
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
