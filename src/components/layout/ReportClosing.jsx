import React from 'react';
import BrandLogo from './BrandLogo';

const ReportClosing = ({
  title = 'Kết luận vận hành',
  summary,
  signatureLabel = 'Strategist Certified',
  signatureName = 'PDL Studio',
  signatureRole = 'Marketing Lead',
  signatureAsLogo = true,
  className = '',
}) => {
  const useLogoSignature =
    signatureAsLogo && String(signatureName).trim().toLowerCase() === 'pdl studio';

  return (
    <div className={`flex flex-col h-full justify-between ${className}`}>
      <div>
        <h4
          className="text-sm font-black uppercase mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h4>
        <p className="text-xs leading-relaxed text-justify max-w-4xl">
          {summary}
        </p>
      </div>

      <div className="flex justify-end pt-16">
        <div className="text-right">
          <div className="text-[8px] text-gray-400 font-bold uppercase mb-12 tracking-[0.22em]">
            {signatureLabel}
          </div>
          {useLogoSignature ? (
            <div className="w-[230px] pb-2 border-b border-gray-300/80 flex justify-end">
              <BrandLogo variant="full" tone="dark" size="sm" />
            </div>
          ) : (
            <div className="w-[160px] h-[58px] border-b border-gray-300/80 flex items-end justify-center text-[18px] italic text-gray-400/70 tracking-wide">
              {signatureName}
            </div>
          )}
          <div className="text-[10px] font-black uppercase mt-3">
            {signatureRole}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportClosing;
