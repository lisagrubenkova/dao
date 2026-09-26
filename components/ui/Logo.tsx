// components/ui/Logo.tsx
'use client';

import { useEffect, useId, useRef } from 'react';
import { useLocale } from 'next-intl';
import { LOGO_RU, LOGO_EN, WRITE_ON_RU, WRITE_ON_EN } from './LogoPaths';

type LogoProps = {
  className?: string;
  /** true — логотип «пишется» сам; false — сразу показан целиком */
  animate?: boolean;
  /** вызывается, когда логотип дорисовался */
  onDone?: () => void;
};

/** Полная длительность отрисовки, мс — одинаковая для обеих локалей. */
export const LOGO_DRAW_MS = 1567;

export function Logo({ className, animate = false, onDone }: LogoProps) {
  const locale = useLocale();
  const isRu = locale !== 'en';

  const logo = isRu ? LOGO_RU : LOGO_EN;
  const strokes = isRu ? WRITE_ON_RU : WRITE_ON_EN;

  const maskId = `lg-${useId().replace(/:/g, '')}`;
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!animate || !ref.current) return;
    const svg = ref.current;
    const paths = Array.from(svg.querySelectorAll<SVGPathElement>('[data-stroke]'));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      paths.forEach((p) => {
        p.style.strokeDasharray = 'none';
        p.style.strokeDashoffset = '0';
      });
      onDone?.();
      return;
    }

    let done = 0;
    const anims = paths.map((p, i) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
      const a = p.animate([{ strokeDashoffset: len }, { strokeDashoffset: 0 }], {
        duration: strokes[i].duration,
        delay: strokes[i].delay,
        easing: 'cubic-bezier(.33,0,.67,1)',
        fill: 'forwards',
      });
      a.onfinish = () => {
        done += 1;
        if (done === paths.length) onDone?.();
      };
      return a;
    });

    return () => anims.forEach((a) => a.cancel());
  }, [animate, strokes, onDone]);

  // Статичный логотип — для шапки и везде, где animate не нужен
  if (!animate) {
    return (
      <svg
        className={className}
        viewBox={logo.viewBox}
        fill="currentColor"
        role="img"
        aria-label="Dao"
        dangerouslySetInnerHTML={{ __html: logo.inner }}
      />
    );
  }

  const [, , w, h] = logo.viewBox.split(' ').map(Number);

  return (
    <svg ref={ref} className={className} viewBox={logo.viewBox} fill="currentColor" role="img" aria-label="Dao">
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width={w} height={h}>
          <rect width={w} height={h} fill="black" />
          {strokes.map((s, i) => (
            <path
              key={i}
              data-stroke={i}
              d={s.d}
              fill="none"
              stroke="#fff"
              strokeWidth={s.width}
              strokeLinecap={s.cap}
              strokeLinejoin="round"
              style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
            />
          ))}
        </mask>
      </defs>
      <g mask={`url(#${maskId})`} dangerouslySetInnerHTML={{ __html: logo.inner }} />
    </svg>
  );
}