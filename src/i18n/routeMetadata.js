export const siteOrigin = 'https://studio.pdl.io.vn';

// Shared by the client router and the static HTML build for crawlers without JS.
export const routeMetadata = {
  '': ['Portfolio Marketing & R&D', 'Marketing & R&D Portfolio', 'Hồ sơ năng lực marketing, sản phẩm AI và nghiên cứu phát triển của PDL Studio.', 'PDL Studio portfolio of marketing systems, AI products and research.'],
  '/marketing-systems': ['Hệ thống Marketing', 'Marketing Systems', 'Khám phá hệ thống chiến lược, sáng tạo, tăng trưởng, tự động hóa và phân tích.', 'Explore strategy, creative, growth, automation and analytics systems.'],
  '/team': ['Đội ngũ', 'Team', 'Đội ngũ và năng lực tại PDL Studio.', 'Meet the people and capabilities at PDL Studio.'],
  '/team/horaus-minh': ['Horaus Minh | Hồ sơ', 'Horaus Minh | Profile', 'Hồ sơ Horaus Minh: marketing, phát triển sản phẩm AI và tự động hóa.', 'Horaus Minh: marketing, AI product development and automation.'],
  '/team/horaus-minh/cv/marketing': ['Horaus Minh | CV Marketing', 'Horaus Minh | Marketing CV', 'CV Marketing của Horaus Minh, trình bày theo khổ A4.', 'Horaus Minh’s Marketing CV in A4 format.'],
  '/team/horaus-minh/cv/ai-automation': ['Horaus Minh | CV AI Product & Automation', 'Horaus Minh | AI Product & Automation CV', 'CV nghiên cứu và triển khai sản phẩm AI, tự động hóa của Horaus Minh.', 'Horaus Minh’s CV focused on AI product research, development and automation.'],
  '/content-strategy': ['Khung chiến lược nội dung', 'Content Strategy Framework', 'Khung marketing tám lớp kết nối chiến lược, nội dung, công cụ và AI.', 'An eight-layer marketing framework connecting strategy, content, tools and AI.'],
  '/strategy-planning': ['Chiến lược & Hoạch định', 'Strategy & Planning', 'Báo cáo chiến lược, mục tiêu và ngân sách kế hoạch cho Aurelia Yachts.', 'Aurelia Yachts strategy report, objectives and budget planning.'],
  '/content-creation-design': ['Nội dung & Thiết kế', 'Content & Design', 'Hệ thống sáng tạo nội dung, hình ảnh và nhận diện thương hiệu.', 'Content production, visual design and brand identity systems.'],
  '/organic-paid-growth': ['Tăng trưởng Organic & Paid', 'Organic & Paid Growth', 'Kế hoạch tăng trưởng, phân bổ kênh và mô hình đo lường marketing.', 'Growth planning, channel allocation and marketing measurement models.'],
  '/automation-crm': ['Tự động hóa & CRM', 'Automation & CRM', 'Thiết kế luồng dữ liệu, chăm sóc khách hàng và vận hành marketing.', 'Data workflows, customer engagement and marketing operations design.'],
  '/analytics-conversion-retention': ['Phân tích & Chuyển đổi', 'Analytics, Conversion & Retention', 'Khung phân tích dữ liệu, tối ưu chuyển đổi và giữ chân khách hàng.', 'A framework for analytics, conversion optimization and customer retention.'],
  '/visual-showcase-preview': ['Thư viện hình ảnh', 'Visual Showcase', 'Các dự án hình ảnh và thiết kế trong portfolio PDL Studio.', 'Visual and design projects in the PDL Studio portfolio.'],
  '/rd': ['Nghiên cứu & Phát triển', 'Research & Development', 'Các nghiên cứu và dự án sản phẩm của PDL Studio.', 'Product research and development projects at PDL Studio.'],
  '/rd/library': ['Thư viện R&D', 'R&D Library', 'Thư viện hồ sơ nghiên cứu và kiến trúc sản phẩm.', 'A library of product research and architecture documents.'],
  '/rd/prix': ['Prix | Hồ sơ R&D', 'Prix | R&D Case Study', 'Nghiên cứu quyết định giá cho SME: engine tính giá, mô hình dữ liệu, AI và triển khai.', 'SME pricing research: pricing engine, data model, AI boundaries and delivery architecture.'],
  '/coming-soon': ['Sắp ra mắt', 'Coming Soon', 'Nội dung đang được chuẩn bị tại PDL Studio.', 'New content is being prepared at PDL Studio.'],
};

export function getRouteMetadata(pathname) {
  const lang = pathname.split('/')[1] === 'en' ? 'en' : 'vi';
  const route = pathname.replace(/^\/(vi|en)/, '').replace(/\/$/, '');
  const entry = routeMetadata[route] || routeMetadata[''];
  return { lang, route, title: `${entry[lang === 'en' ? 1 : 0]} | PDL Studio`, description: entry[lang === 'en' ? 3 : 2], canonical: `${siteOrigin}/${lang}${route}` };
}
