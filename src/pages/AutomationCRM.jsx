import React from 'react';
import Header from '../components/layout/Header';
import PageTransition from '../components/layout/PageTransition';
import { motion } from 'framer-motion';
import ContentPager from '../components/layout/ContentPager';
import SiteFooter from '../components/layout/SiteFooter';
import ReportClosing from '../components/layout/ReportClosing';
import { useLang } from '../hooks/useLang';

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
          <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-black">Automation & CRM</h3>
          <p className="text-[7px] text-gray-500 uppercase font-bold tracking-widest mt-0.5">Document ID: AZ-2026-AUTOMATION-CRM</p>
        </div>
      </div>
      <div className="text-right">
        <span className="text-[7.5px] font-black border border-black px-1.5 py-0.5 tracking-tight text-gray-600" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>TECHNICAL SPEC / WORKFLOW ONLY</span>
      </div>
    </div>

    {/* Content Area */}
    <div className="flex-grow text-sm leading-relaxed text-gray-800">
      {children}
    </div>

    {/* Page Footer */}
    <div className="mt-8 pt-4 border-t border-black/10 flex justify-between items-center text-[8px] font-bold text-gray-400 uppercase tracking-widest">
      <div>Aurelia Yachts Automation — 2026</div>
      <div>Page {pageNumber} of {totalPages}</div>
    </div>
  </motion.div>
);

const AutomationCRM = () => {
  const { lang } = useLang();
  const isEn = lang === 'en';
  const tx = (vi, en) => (isEn ? en : vi);

  return (
    <>
      <Header />
      <PageTransition>
        <div className="bg-darkBg min-h-screen pt-24 pb-0 overflow-x-hidden">
          
          {/* SECTION 1: AUTOMATION OVERVIEW */}
          <section className="px-6 md:px-12 max-w-6xl mx-auto mb-24 pt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4 leading-tight text-white italic">
                Automation & CRM <br/><span className="text-gray-500 text-xl md:text-3xl italic lowercase">Lead Intake, Routing & CRM Operations.</span>
              </h1>
              <p className="text-gray-500 text-[11px] md:text-xs max-w-2xl mx-auto border-t border-white/10 pt-6 mt-2 leading-relaxed italic uppercase tracking-widest">
                {tx(
                  '"Sau khi Growth mang lead về, Automation & CRM tiếp nhận dữ liệu, phân người xử lý, cập nhật CRM và rút ngắn thời gian phản hồi đầu tiên để không bỏ sót cơ hội bán hàng."',
                  '"Once Growth generates leads, Automation & CRM captures data, assigns owners, updates CRM, and shortens first-response time to prevent lost sales opportunities."'
                )}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-3 space-y-6">
                <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-3 text-white">
                  <span className="w-6 h-px bg-accent"></span> {tx('Vai trò trong hành trình xử lý lead', 'Role in the Lead Handling Journey')}
                </h2>
                
                <div className="text-gray-400 text-sm leading-relaxed space-y-4 text-justify">
                  <p>
                    {tx(
                      'Sau khi ',
                      'After '
                    )}<strong>Strategy</strong>{tx(' xác định hướng đi, ', ' defines direction, ')}<strong>Visual</strong>{tx(' tạo asset và landing page, còn ', ' produces assets and landing pages, while ')}<strong>Growth</strong>{tx(' mang lead về từ quảng cáo hoặc kênh sở hữu, phần Automation & CRM đảm nhiệm bước nhận lead, chuẩn hóa dữ liệu và đưa lead vào đúng luồng xử lý.', ' brings in leads from paid and owned channels, Automation & CRM handles intake, data standardization, and proper routing logic.')}
                  </p>
                  <p>
                    {tx(
                      'Mục tiêu của lớp này rất thực tế: kiểm tra trùng, gắn source và campaign, ưu tiên lead theo mức độ quan tâm, giao đúng owner, cập nhật CRM và theo dõi SLA phản hồi để đội Sales hành động nhanh, đúng người và đúng thời điểm.',
                      'This layer is operational by design: deduplicate, tag source and campaign, prioritize lead intent, assign the right owner, keep CRM updated, and enforce response SLAs so Sales acts fast with the right lead at the right moment.'
                    )}
                  </p>
                </div>

                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-6">
                    <div className="flex items-center gap-6 justify-between">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent border border-accent/30 font-bold text-xs italic">Ads</div>
                            <span className="text-[10px] text-gray-500 uppercase font-black">Meta / Form</span>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-white/20 relative">
                            <div className="absolute top-[-4px] right-0 w-2 h-2 rounded-full bg-white/20"></div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10 font-bold text-xs italic">Logic</div>
                            <span className="text-[10px] text-gray-500 uppercase font-black">n8n / Make</span>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-accent/50 relative">
                            <div className="absolute top-[-4px] right-0 w-2 h-2 rounded-full bg-accent/50"></div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent border border-accent/30 font-bold text-xs italic">CRM</div>
                            <span className="text-[10px] text-gray-500 uppercase font-black">HubSpot / Airtable</span>
                        </div>
                    </div>
                    <p className="text-[11px] text-gray-500 italic text-center uppercase tracking-widest font-bold">{tx('Quy trình: Nhận lead ➔ Chuẩn hóa dữ liệu ➔ Ưu tiên lead ➔ Phân lead ➔ Thông báo sales ➔ Cập nhật CRM', 'Workflow: Lead Intake ➔ Data Standardization ➔ Prioritization ➔ Routing ➔ Sales Notification ➔ CRM Update')}</p>
                </div>

                <ul className="space-y-4 text-sm mt-8">
                  <li className="flex gap-4 group">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="text-gray-400 leading-snug">
                      <strong className="text-white uppercase tracking-wider block mb-1">Lead Intake:</strong> {tx('Gom lead từ Meta Lead Ads, website form, landing page, inbox và referral vào cùng một luồng nhận dữ liệu để không thất lạc nguồn vào.', 'Consolidate leads from Meta Lead Ads, website forms, landing pages, inbox, and referrals into one intake stream to avoid source leakage.')}
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="text-gray-400 leading-snug">
                      <strong className="text-white uppercase tracking-wider block mb-1">Routing Rules:</strong> {tx('Kiểm tra trùng, gắn source, campaign, mức độ quan tâm và ưu tiên lead trước khi giao cho đúng sales hoặc đưa vào luồng nurturing.', 'Check duplicates, attach source and campaign, score intent, and prioritize before routing to the right sales owner or nurturing flow.')}
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="text-gray-400 leading-snug">
                      <strong className="text-white uppercase tracking-wider block mb-1">CRM Hygiene:</strong> {tx('Tạo hoặc cập nhật contact, deal, owner, last contact và status trong CRM để toàn đội nhìn cùng một dữ liệu.', 'Create or update contact, deal, owner, last-contact, and status fields so the whole team operates on one source of truth.')}
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div className="text-gray-400 leading-snug">
                      <strong className="text-white uppercase tracking-wider block mb-1">Response SLA:</strong> {tx('Gửi notify qua Telegram, Slack, email hoặc Zalo ngay khi có lead mới và nhắc lại nếu lead quá thời gian phản hồi đã cam kết.', 'Send instant notifications via Telegram, Slack, email, or Zalo for each new lead and trigger reminders when SLA windows are exceeded.')}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2 bg-[#111111] p-6 rounded-2xl border border-white/5 relative group hover:border-accent/20 transition-colors">
                <div className="absolute top-4 right-4 text-accent/5 select-none pointer-events-none group-hover:text-accent/10 transition-colors">
                   <span className="text-7xl font-black italic">a</span>
                </div>

                <h3 className="text-[11px] font-bold mb-5 text-accent uppercase tracking-[0.3em] flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div> Automation Stack
                </h3>
                
                <div className="space-y-3 relative z-10">
                   <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2.5 mb-1.5">
                       <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                       <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Logic & Workflow</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-snug">{tx('n8n, Make hoặc Zapier có thể nhận webhook, kiểm tra trùng, route lead, tạo task và đồng bộ hành động theo từng trạng thái.', 'n8n, Make, or Zapier can receive webhooks, deduplicate records, route leads, create tasks, and sync actions by status.')}</p>
                  </div>

                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2.5 mb-1.5">
                       <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                       <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Customer Relationship</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-snug">{tx('HubSpot, Airtable, Notion hoặc Google Sheets dùng để lưu source, owner, status, lịch sử chăm sóc và kiểm soát SLA phản hồi.', 'HubSpot, Airtable, Notion, or Google Sheets can store source, owner, status, follow-up history, and SLA controls.')}</p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/5 flex justify-between gap-1 grayscale opacity-30 group-hover:opacity-60 transition-all">
                  <div className="text-[8px] font-bold text-white tracking-widest">N8N</div>
                  <div className="text-[8px] font-bold text-white tracking-widest">HubSpot</div>
                  <div className="text-[8px] font-bold text-white tracking-widest">TELEGRAM</div>
                  <div className="text-[8px] font-bold text-white tracking-widest">ZAPIER</div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: THE A4 LOGIC REPORT */}
          <section className="report-section bg-[#f2f2f2] pt-16 pb-24 px-4 overflow-hidden shadow-inner" id="report-section">
            <div className="text-center mb-12">
              <span className="text-gray-400 text-[9px] font-black tracking-[0.4em] uppercase mb-2 block">Lead Operations Workflow</span>
              <h2 className="text-3xl font-black text-black uppercase tracking-tighter">Lead Routing, CRM Update & Response Workflow</h2>
              <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest">{tx('Nhận lead • Phân lead • Cập nhật CRM • Theo dõi SLA', 'Lead Intake • Lead Routing • CRM Update • SLA Tracking')}</p>
            </div>

            <div className="flex flex-col gap-3">
              
              {/* PAGE 1: AUTOMATION WORKFLOW */}
              <A4Page pageNumber={1} totalPages={2}>
                <div className="mb-10 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <h1 className="text-3xl md:text-5xl font-black uppercase mb-4 tracking-tighter leading-none italic">Lead Operations Blueprint</h1>
                  <h2 className="text-[14px] font-bold text-gray-400 uppercase tracking-[0.2em]">Intake, Check, Route & Follow Up Every Lead</h2>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8 text-[10px]">
                  <div className="border border-gray-200 p-4 bg-[#f8f9fa]">
                    <div className="text-gray-500 uppercase tracking-widest">Input Sources</div>
                    <div className="text-xl font-black text-black">05+</div>
                    <div className="text-gray-400">Ads, Form, Landing, Inbox, Referral</div>
                  </div>
                  <div className="border border-gray-200 p-4 bg-[#f8f9fa]">
                    <div className="text-gray-500 uppercase tracking-widest">First Response SLA</div>
                    <div className="text-xl font-black text-black">{tx('< 2 phút', '< 2 minutes')}</div>
                    <div className="text-gray-400">Notify + CRM task + welcome message</div>
                  </div>
                  <div className="border border-gray-200 p-4 bg-[#f8f9fa]">
                    <div className="text-gray-500 uppercase tracking-widest">Routing Logic</div>
                    <div className="text-xl font-black text-black">{tx('3 tầng', '3 layers')}</div>
                    <div className="text-gray-400">Cold / Warm / High Intent</div>
                  </div>
                </div>
                
                <div className="space-y-8 mt-12">
                   <div className="p-8 border-2 border-dashed border-gray-300 rounded-2xl relative">
                      <div className="absolute top-[-14px] left-10 bg-white px-4 text-xs font-black uppercase tracking-widest italic">Step 1: Lead Intake</div>
                      <div className="grid grid-cols-2 gap-6">
                         <div className="p-4 bg-gray-50 border border-gray-200 rounded">
                            <h4 className="font-black text-[10px] uppercase mb-1">Meta Lead Ads / Landing Form</h4>
                            <p className="text-[9px] text-gray-400">{tx('Webhook nhận dữ liệu ngay khi khách gửi form để giữ đầy đủ tên, số điện thoại, nguồn và campaign.', 'Webhook captures data immediately after form submission to preserve name, phone, source, and campaign fields.')}</p>
                         </div>
                         <div className="p-4 bg-gray-50 border border-gray-200 rounded">
                            <h4 className="font-black text-[10px] uppercase mb-1">Inbox / Referral / Website</h4>
                            <p className="text-[9px] text-gray-400">{tx('API hoặc manual entry đẩy lead vào cùng luồng để mọi nguồn đều được ghi nhận thống nhất.', 'API or manual entry pushes leads into the same pipeline so all sources are unified.')}</p>
                         </div>
                      </div>
                   </div>

                   <div className="flex justify-center">
                      <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                   </div>

                   <div className="p-8 border-2 border-black rounded-2xl relative bg-black text-white">
                      <div className="absolute top-[-14px] left-10 bg-black px-4 text-xs font-black uppercase tracking-widest italic text-accent animate-pulse">Step 2: Check, Prioritize & Route</div>
                      <p className="text-xs leading-relaxed mb-4 italic opacity-80">
                         {tx(
                           '"Workflow kiểm tra lead trùng, gắn source và campaign, đọc mức độ quan tâm bằng rule-based scoring hoặc AI enrichment khi cần, rồi giao cho đúng owner."',
                           '"The workflow checks duplicates, tags source and campaign, scores intent using rules or AI enrichment when needed, then assigns the right owner."'
                         )}
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-center">
                         <div className="border border-white/20 p-2 rounded text-[9px] uppercase font-bold">Duplicate Check</div>
                         <div className="border border-white/20 p-2 rounded text-[9px] uppercase font-bold">Priority</div>
                         <div className="border border-white/20 p-2 rounded text-[9px] uppercase font-bold">Owner Route</div>
                      </div>
                   </div>

                   <div className="flex justify-center">
                      <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                   </div>

                   <div className="p-8 border-2 border-dashed border-gray-300 rounded-2xl relative">
                      <div className="absolute top-[-14px] left-10 bg-white px-4 text-xs font-black uppercase tracking-widest italic">Step 3: CRM Update, Notify & Follow Up</div>
                      <div className="flex gap-4">
                         <div className="flex-1 p-4 bg-gray-50 border border-gray-200 rounded text-center">
                            <span className="font-black text-[10px] uppercase block">CRM Record</span>
                            <span className="text-[8px] text-gray-400">Owner, status, last contact, source</span>
                         </div>
                         <div className="flex-1 p-4 bg-gray-50 border border-gray-200 rounded text-center">
                            <span className="font-black text-[10px] uppercase block">Notify Sales</span>
                            <span className="text-[8px] text-gray-400">Telegram, Slack, email, Zalo</span>
                         </div>
                         <div className="flex-1 p-4 bg-gray-100 border border-gray-200 rounded text-center">
                            <span className="font-black text-[10px] uppercase block">Follow Up</span>
                            <span className="text-[8px] text-gray-400">Welcome message + next task</span>
                         </div>
                      </div>
                   </div>
                </div>
              </A4Page>

              {/* PAGE 2: CRM & LEAD SCORING SPECS */}
              <A4Page pageNumber={2} totalPages={2}>
                 <div className="flex flex-col h-full">
                   <h3 className="text-base font-black uppercase mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{tx('2. CRM Fields, Ownership & Response Rules', '2. CRM Fields, Ownership & Response Rules')}</h3>
                   <p className="text-xs mb-8 text-justify leading-relaxed">
                      {tx('CRM không chỉ để lưu tên khách hàng. Nó phải cho thấy ', 'CRM is not just a contact repository. It must show ')}<strong>{tx('lead đến từ đâu', 'where each lead came from')}</strong>, <strong>{tx('ai đang xử lý', 'who currently owns it')}</strong>, <strong>{tx('đã liên hệ lần cuối khi nào', 'when last contact happened')}</strong> {tx('và ', 'and ')}<strong>{tx('lead có đang vượt SLA hay không', 'whether SLA is being breached')}</strong>.
                   </p>
                   
                   <table className="w-full text-[10px] border-collapse border border-gray-300 mb-8">
                      <thead>
                          <tr className="bg-gray-100 uppercase tracking-wider">
                              <th className="border border-gray-300 p-3 text-left">Field / Rule</th>
                              <th className="border border-gray-300 p-3 text-left">Required Data</th>
                              <th className="border border-gray-300 p-3 text-left">Owner / SLA</th>
                              <th className="border border-gray-300 p-3 text-left">System Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="bg-red-50/30">
                              <td className="border border-gray-300 p-4 font-black">Lead Identity</td>
                              <td className="border border-gray-300 p-4 font-bold text-red-600">Name, phone, email, source, campaign</td>
                              <td className="border border-gray-300 p-4">{tx('System • ngay khi intake', 'System • at intake')}</td>
                              <td className="border border-gray-300 p-4">{tx('Tạo contact mới hoặc merge với record cũ nếu trùng số điện thoại/email.', 'Create a new contact or merge with existing records when phone/email matches.')}</td>
                          </tr>
                          <tr className="bg-orange-50/30">
                              <td className="border border-gray-300 p-4">Ownership</td>
                              <td className="border border-gray-300 p-4 font-bold text-orange-600">Priority, owner, pipeline stage</td>
                              <td className="border border-gray-300 p-4">{tx('Sales Lead / Sales Rep • dưới 5-30 phút', 'Sales Lead / Sales Rep • under 5-30 minutes')}</td>
                              <td className="border border-gray-300 p-4">{tx('Giao owner theo rule, tạo task đầu tiên và gửi notify đến đúng nhóm phụ trách.', 'Assign owner by rule, create first task, and notify the responsible team immediately.')}</td>
                          </tr>
                          <tr className="bg-blue-50/30">
                              <td className="border border-gray-300 p-4">Follow-up Control</td>
                              <td className="border border-gray-300 p-4 font-bold text-blue-600">Last contact, next action, status</td>
                              <td className="border border-gray-300 p-4">{tx('Sales / Automation • theo SLA', 'Sales / Automation • by SLA')}</td>
                              <td className="border border-gray-300 p-4">{tx('Nhắc lại nếu quá SLA, cập nhật trạng thái và đẩy lead sang nurturing nếu chưa đủ điều kiện chốt.', 'Trigger reminders on SLA breach, update status, and move leads to nurturing when not yet sales-ready.')}</td>
                          </tr>
                      </tbody>
                   </table>

                   <div className="grid grid-cols-3 gap-4 mb-8 text-[10px]">
                      <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                          <div className="text-gray-400 uppercase tracking-widest mb-2">Core Fields</div>
                          <div className="font-black text-black">Source, Campaign, Priority, Owner, Status</div>
                      </div>
                      <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                          <div className="text-gray-400 uppercase tracking-widest mb-2">Operating Rule</div>
                          <div className="font-black text-black">{tx('Lead mới phải có owner và first action', 'Every new lead must have an owner and first action')}</div>
                      </div>
                      <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                          <div className="text-gray-400 uppercase tracking-widest mb-2">Duplicate Handling</div>
                          <div className="font-black text-black">{tx('Merge record hoặc gắn lịch sử chăm sóc cũ', 'Merge records or preserve previous follow-up history')}</div>
                      </div>
                   </div>

                   <ReportClosing
                     title={tx('Kết luận vận hành', 'Operational Conclusion')}
                     summary={tx(
                      'Một luồng automation tốt không chỉ giúp nhận lead nhanh hơn mà còn giữ dữ liệu sạch, gán đúng owner và buộc mọi bước follow-up được cập nhật trong CRM. Khi lớp vận hành này chạy ổn định, đội Sales phản hồi nhanh hơn, tỷ lệ bỏ sót lead giảm xuống và toàn bộ hệ growth có thể mở rộng mà không tạo thêm hỗn loạn.',
                      'A strong automation flow not only accelerates lead intake but also preserves clean data, assigns the right owner, and ensures every follow-up step is captured in CRM. When this operation layer is stable, Sales responds faster, lead leakage drops, and the growth system scales without operational chaos.'
                     )}
                   />
                 </div>
              </A4Page>

            </div>
            
            <ContentPager
              prev={{
                to: '/organic-paid-growth',
                title: 'Growth & Ads',
                description: 'Return to budget logic, media allocation, and campaign performance.'
              }}
              next={{
                to: '/analytics-conversion-retention',
                title: 'Analytics & ROI',
                description: 'Continue into reporting, conversion insight, and retention design.'
              }}
            />
          </section>

          <SiteFooter />
        </div>
      </PageTransition>
    </>
  );
};

export default AutomationCRM;
