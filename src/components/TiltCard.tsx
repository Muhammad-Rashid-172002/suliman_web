import React, { useCallback, useEffect, useRef } from 'react';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum rotation in degrees. */
  max?: number;
  /** Render a moving light glare that follows the pointer. */
  glare?: boolean;
  as?: 'div' | 'article';
  children: React.ReactNode;
}

const canHover = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Lightweight 3D tilt container.
 * Writes CSS custom properties inside requestAnimationFrame, so pointer movement
 * never triggers React re-renders. Disabled on touch devices and for users who
 * prefer reduced motion.
 */
export const TiltCard: React.FC<TiltCardProps> = ({
  max = 8,
  glare = true,
  as = 'div',
  className = '',
  children,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const enabled = useRef(false);

  useEffect(() => {
    enabled.current = canHover();
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  const handleMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!enabled.current || !ref.current) return;
      const el = ref.current;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        el.style.setProperty('--ry', `${(px - 0.5) * max * 2}deg`);
        el.style.setProperty('--rx', `${(0.5 - py) * max * 2}deg`);
        el.style.setProperty('--gx', `${px * 100}%`);
        el.style.setProperty('--gy', `${py * 100}%`);
        el.style.setProperty('--px', `${(px - 0.5).toFixed(3)}`);
        el.style.setProperty('--py', `${(py - 0.5).toFixed(3)}`);
      });
    },
    [max],
  );

  const handleEnter = () => {
    if (!enabled.current || !ref.current) return;
    ref.current.classList.add('is-active');
    ref.current.style.setProperty('--glare', '1');
  };

  const handleLeave = () => {
    if (!ref.current) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    const el = ref.current;
    el.classList.remove('is-active');
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--px', '0');
    el.style.setProperty('--py', '0');
    el.style.setProperty('--glare', '0');
  };

  const Tag = as as 'div';

  return (
    <Tag
      ref={ref}
      onPointerMove={handleMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      className={`tilt ${className}`}
      {...rest}
    >
      {children}
      {glare && <span aria-hidden="true" className="tilt-glare" />}
    </Tag>
  );
};
