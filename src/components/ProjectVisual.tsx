import React, { useLayoutEffect, useRef, useState } from 'react';
import { Lock } from 'lucide-react';
import type { Project } from '../data/portfolioData';

/* -------------------------------------------------------------------------- */
/*  Scaled stage                                                              */
/*  The composition is laid out at a fixed 640×400 design size and scaled to   */
/*  its container, so frames and typography stay consistent at any width.     */
/* -------------------------------------------------------------------------- */

const W = 640;
const H = 400;

const Stage: React.FC<{ children: React.ReactNode; background: string }> = ({ children, background }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className="grain relative w-full overflow-hidden" style={{ aspectRatio: `${W} / ${H}`, background }}>
      <div className="absolute left-0 top-0 origin-top-left" style={{ width: W, height: H, transform: `scale(${scale})` }}>
        {children}
      </div>
    </div>
  );
};

/** Layer that drifts with the pointer (reads --px / --py set by TiltCard). */
const Parallax: React.FC<{ depth: number; style?: React.CSSProperties; children: React.ReactNode }> = ({
  depth,
  style,
  children,
}) => (
  <div
    className="absolute"
    style={{
      ...style,
      translate: `calc(var(--px, 0) * ${depth}px) calc(var(--py, 0) * ${depth}px)`,
      transition: 'translate 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    }}
  >
    {children}
  </div>
);

const hostOf = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

/* -------------------------------------------------------------------------- */

interface ProjectVisualProps {
  project: Project;
  /** Use the secondary desktop screenshot (for galleries). */
  alt?: boolean;
  /** Eager-load images (above-the-fold usage). */
  priority?: boolean;
  className?: string;
}

/**
 * Product showcase built from real screenshots of the running application:
 * a browser window with the desktop UI and a phone with the mobile UI,
 * layered in 3D and tinted with the product's own accent colour.
 */
export const ProjectVisual: React.FC<ProjectVisualProps> = ({ project, alt = false, priority = false, className }) => {
  const { accent, theme } = project.brand;
  const dark = theme === 'dark';
  const loading = priority ? 'eager' : 'lazy';
  const address = project.liveUrl ? hostOf(project.liveUrl) : hostOf(project.repoUrl);

  const background = dark
    ? `radial-gradient(90% 80% at 85% 10%, ${accent}33 0%, transparent 60%), radial-gradient(70% 60% at 0% 100%, ${accent}1a 0%, transparent 60%), linear-gradient(160deg, #0d1114, #050708)`
    : `radial-gradient(90% 80% at 85% 10%, ${accent}2e 0%, transparent 60%), radial-gradient(70% 70% at 0% 100%, ${accent}1f 0%, transparent 60%), linear-gradient(160deg, #1a1f24, #0b0e10)`;

  return (
    <div className={className}>
      <Stage background={background}>
        {/* Accent bloom */}
        <div
          aria-hidden="true"
          className="absolute left-[150px] top-[70px] h-[280px] w-[380px] rounded-full blur-[80px] transition-opacity duration-700 group-hover:opacity-100"
          style={{ background: `${accent}30`, opacity: 0.7 }}
        />

        {/* Browser window with the real desktop screenshot */}
        <Parallax depth={10} style={{ left: 34, top: 40 }}>
          <div
            className="overflow-hidden rounded-[10px] bg-[#1b1f23] shadow-[0_50px_80px_-35px_rgba(0,0,0,0.95)] ring-1 ring-white/10 transition-transform duration-700 group-hover:-translate-y-1.5"
            style={{ width: 470, transform: 'perspective(1400px) rotateY(9deg) rotateX(3deg)', transformOrigin: 'left center' }}
          >
            <div className="flex h-[22px] items-center gap-2 border-b border-white/5 bg-[#202429] px-2.5">
              <div className="flex gap-1">
                {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                  <span key={c} className="h-[7px] w-[7px] rounded-full" style={{ background: c }} />
                ))}
              </div>
              <div className="mx-auto flex h-[13px] w-[220px] items-center justify-center gap-1 rounded-[4px] bg-black/30 text-[7px] text-white/55">
                <Lock className="h-[6px] w-[6px]" />
                {address}
              </div>
            </div>
            <img
              src={alt ? project.shots.desktopAlt : project.shots.desktop}
              alt=""
              width={1600}
              height={1000}
              loading={loading}
              decoding="async"
              draggable={false}
              className="block aspect-[16/10] w-full object-cover object-top"
            />
          </div>
        </Parallax>

        {/* Phone with the real mobile screenshot */}
        <Parallax depth={26} style={{ left: 468, top: 78 }}>
          <div
            className="device-phone transition-transform duration-700 group-hover:-translate-y-3"
            style={{ width: 142, height: 300, transform: 'perspective(900px) rotateY(-12deg) rotateX(2deg)' }}
          >
            <div className="device-phone__screen bg-black">
              <span className="device-phone__island" aria-hidden="true" style={{ height: 11, top: 6 }} />
              <img
                src={project.shots.mobile}
                alt=""
                width={430}
                height={930}
                loading={loading}
                decoding="async"
                draggable={false}
                className="block h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </Parallax>

        {/* Floor reflection line */}
        <div
          aria-hidden="true"
          className="absolute bottom-[18px] left-[60px] right-[60px] h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}66, transparent)` }}
        />
      </Stage>
    </div>
  );
};
