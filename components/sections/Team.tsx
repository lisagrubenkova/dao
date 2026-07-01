'use client';

import { useTranslations } from 'next-intl';
import { AnimatedRow } from '@/components/ui/AnimatedRow';

export function Team() {
  const t = useTranslations('team');
  const points = t.raw('points') as string[];

  return (
    <section id="team" className="bg-bg py-section-y">
        <h2 className="text-display font-sans font-medium mb-gap-lg px-section-x" style={{ fontSize: 'clamp(40px, 4vw + 1rem, 120px)' }}>
          {t('title')}
        </h2>

        <div className="flex flex-col gap-gap-lg">
          {points.map((point, i) => (
            <AnimatedRow key={i} text={point} />
          ))}
        </div>
    </section>
  );
}