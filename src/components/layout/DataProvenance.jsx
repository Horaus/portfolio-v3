import useLang from '../../hooks/useLang';

export default function DataProvenance() {
  const { lang } = useLang();
  return (
    <aside className="max-w-[210mm] mx-auto mb-8 border-l-2 border-black/30 pl-4 text-xs leading-relaxed text-gray-600">
      {lang === 'en'
        ? 'Data note: figures, budgets, scores and charts in this report are planning or illustrative values. They have not been verified against campaign records, user research or production measurements.'
        : 'Ghi chú số liệu: các con số, ngân sách, điểm đánh giá và biểu đồ trong báo cáo là dữ liệu kế hoạch hoặc minh họa. Chưa được đối chiếu với hồ sơ chiến dịch, nghiên cứu người dùng hoặc đo lường vận hành thực tế.'}
    </aside>
  );
}
