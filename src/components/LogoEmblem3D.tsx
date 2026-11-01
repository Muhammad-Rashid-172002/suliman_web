import React from 'react';
import { portfolioImages } from '../assets/images';

/**
 * A minted "coin" of the official KorvenzaTech logo with real thickness:
 * several stacked layers along the Z axis give the edge depth while the
 * emblem slowly sways in 3D. Pure CSS — no WebGL, negligible cost.
 */
export const LogoEmblem3D: React.FC<{ size?: number; className?: string }> = ({ size = 88, className = '' }) => {
  const layers = 7;
  return (
    <div className={`perspective-1200 ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      <div className="preserve-3d animate-sway-y relative h-full w-full">
        {/* Edge / thickness */}
        {Array.from({ length: layers }).map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-[26%]"
            style={{
              transform: `translateZ(${-i * 1.4}px)`,
              background: i === layers - 1 ? '#031a10' : `hsl(158 ${40 - i * 3}% ${12 - i}%)`,
              boxShadow: i === 0 ? undefined : '0 0 0 1px rgba(16,185,129,0.15)',
            }}
          />
        ))}
        {/* Face */}
        <div
          className="sheen absolute inset-0 flex items-center justify-center rounded-[26%] border border-white/15"
          style={{
            transform: 'translateZ(1px)',
            background: 'radial-gradient(120% 120% at 30% 15%, #1d2b27 0%, #0a1210 55%, #050908 100%)',
            boxShadow: '0 0 0 1px rgba(16,185,129,0.25) inset, 0 25px 40px -15px rgba(0,0,0,0.9), 0 0 50px -10px rgba(16,185,129,0.45)',
          }}
        >
          <img
            src={portfolioImages.logo}
            alt=""
            width={size}
            height={size}
            decoding="async"
            draggable={false}
            className="h-[74%] w-[74%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};
