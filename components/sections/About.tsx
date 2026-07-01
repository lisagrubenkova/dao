'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

type Pillar = { marker: string; title: string; subtitle?: string };

export function About() {
  const t = useTranslations('about');
  const pillars = t.raw('pillars') as Pillar[];
  const intro = t('intro');
  const outro = t('outro');

  // Текучий размер: ~16px на 360px ширины → 48px на 1920px
  const fluidText = 'clamp(16px, 0.4125rem + 1.6667vw, 48px)';

  return (
    <section
      id="about"
      className="relative isolate w-full min-h-svh flex items-center justify-center overflow-hidden"
    >
      {/* Фон на всю секцию */}
      <Image
        src="/about/pattern.jpg"
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover z-0"
      />

      {/* Плашка на всю ширину секции, без боковых паддингов у section */}
      <div
        className="
          relative z-10 w-full bg-bg
          flex flex-col
        "
        style={{
          paddingInline: 'clamp(20px, 5vw, 120px)',
          paddingBlock: 'clamp(28px, 5vw, 120px)',
          gap: 'clamp(24px, 3vw, 72px)',
        }}
      >
        <p
          className="font-mono whitespace-pre-line"
          style={{ fontSize: fluidText, lineHeight: 1.5 }}
        >
          {intro}
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 'clamp(20px, 2.5vw, 64px)' }}
        >
          {pillars.map((pillar, i) => (
            <div key={i}>
              <h3
                className="font-mono font-bold"
                style={{ fontSize: fluidText, lineHeight: 1.3, marginBottom: '0.25em' }}
              >
                {pillar.marker} {pillar.title}
              </h3>
              {pillar.subtitle && (
                <p
                  className="font-mono"
                  style={{ fontSize: fluidText, lineHeight: 1.5 }}
                >
                  {pillar.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>

        {outro && (
          <p
            className="font-mono whitespace-pre-line"
            style={{ fontSize: fluidText, lineHeight: 1.5 }}
          >
            {outro}
          </p>
        )}
      </div>
    </section>
  );
}