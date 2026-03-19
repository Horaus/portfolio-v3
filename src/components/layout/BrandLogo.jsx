import React from 'react';
import { Link } from 'react-router-dom';

const toneClassMap = {
  light: {
    text: 'text-white',
    muted: 'text-white/85',
  },
  dark: {
    text: 'text-black',
    muted: 'text-black/90',
  },
};

const sizeClassMap = {
  sm: {
    compact: 'text-[19px] tracking-[0.015em]',
    fullStudio: 'text-[34px]',
    fullWordTracking: 'tracking-[0.038em]',
    fullPdl: 'text-[12px]',
    fullGapPx: 2,
    dot: 'text-[1.1em]',
  },
  md: {
    compact: 'text-[22px] tracking-[0.012em]',
    fullStudio: 'text-[42px]',
    fullWordTracking: 'tracking-[0.034em]',
    fullPdl: 'text-[14px]',
    fullGapPx: 2,
    dot: 'text-[1.1em]',
  },
  lg: {
    compact: 'text-[28px] tracking-[0.01em]',
    fullStudio: 'text-[52px]',
    fullWordTracking: 'tracking-[0.03em]',
    fullPdl: 'text-[16px]',
    fullGapPx: 3,
    dot: 'text-[1.1em]',
  },
};

const BrandLogo = ({
  variant = 'compact',
  tone = 'light',
  size = 'md',
  asLink = false,
  to = '/',
  onClick,
  className = '',
}) => {
  const toneClass = toneClassMap[tone] || toneClassMap.light;
  const sizeClass = sizeClassMap[size] || sizeClassMap.md;

  const logoNode =
    variant === 'full' ? (
      <span
        className={`inline-flex items-end ${toneClass.text} select-none ${sizeClass.fullStudio}`}
        style={{ fontFamily: "'Space Grotesk', sans-serif", columnGap: `${sizeClass.fullGapPx}px` }}
      >
        <span
          className={`font-black uppercase leading-[0.9] tracking-[0.2em] ${sizeClass.fullPdl} ${toneClass.muted} pb-[0.02em]`}
          style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          PDL
        </span>
        <span className={`font-black uppercase leading-[0.85] ${sizeClass.fullWordTracking}`}>
          STUDIO
          <span className={`${sizeClass.dot} text-accent ml-[0.08em]`}>.</span>
        </span>
      </span>
    ) : (
      <span
        className={`inline-flex items-end font-black uppercase leading-none ${sizeClass.compact} ${toneClass.text} select-none`}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <span className={`${toneClass.muted} mr-1.5`}>PDL</span>
        <span>
          STUDIO
          <span className={`${sizeClass.dot} text-accent ml-[0.06em]`}>.</span>
        </span>
      </span>
    );

  if (asLink) {
    return (
      <Link to={to} onClick={onClick} className={`inline-flex ${className}`}>
        {logoNode}
      </Link>
    );
  }

  return <span className={`inline-flex ${className}`}>{logoNode}</span>;
};

export default BrandLogo;
