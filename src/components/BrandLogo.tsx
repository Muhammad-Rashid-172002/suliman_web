import React from 'react';
import { portfolioImages } from '../assets/images';

interface BrandLogoProps {
  /** Rendered square size in px. */
  size?: number;
  className?: string;
  /** Adds a soft emerald glow behind the mark (useful on very dark surfaces). */
  glow?: boolean;
  /** Decorative logos (next to a visible "KorvenzaTech" label) should be hidden from screen readers. */
  decorative?: boolean;
}

/**
 * Official KorvenzaTech logo mark. Single source of truth for every place the
 * company mark appears (navbar, footer, company card, hero emblem).
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 40,
  className = '',
  glow = false,
  decorative = false,
}) => (
  <span
    className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
    style={{ width: size, height: size }}
  >
    {glow && (
      <span
        aria-hidden="true"
        className="absolute inset-[12%] rounded-full bg-emerald-500/25 blur-xl"
      />
    )}
    <img
      src={portfolioImages.logo}
      alt={decorative ? '' : 'KorvenzaTech logo'}
      aria-hidden={decorative || undefined}
      width={size}
      height={size}
      decoding="async"
      draggable={false}
      className="relative h-full w-full select-none object-contain drop-shadow-[0_2px_6px_rgba(16,185,129,0.25)]"
    />
  </span>
);
