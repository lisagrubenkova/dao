'use client';

import { useTranslations } from 'next-intl';
import { PrincipleCard } from '@/components/principles/PrincipleCard';

export function Principles() {
  const t = useTranslations('principles');
  const items = t.raw('items') as string[];

  const images = [
    '/principles/1.jpg',
    '/principles/2.jpg',
    '/principles/3.jpg',
    '/principles/4.jpg',
  ];

  return (
    <section id="principles" className="bg-bg pt-section-y">
      <h2
        className="font-sans font-medium px-section-x mb-gap-lg"
        style={{ fontSize: 'clamp(40px, 4vw + 1rem, 120px)' }}
      >
        {t('title')}
      </h2>

      {/* Сетка: на мобилке 2×2, на десктопе 4×1. Высота — 80vh */}
      <div className="grid grid-cols-2 md:grid-cols-4 w-full h-[90vh]">
        {items.map((text, i) => (
          <PrincipleCard
            key={i}
            number={i + 1}
            text={text}
            bgImage={images[i]}
          />
        ))}
      </div>
    </section>
  );
}