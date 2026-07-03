'use client';

import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useTranslations } from 'next-intl';
import { AlgorithmStep } from '@/components/algorithm/AlgorithmStep';

type Step = { title: string; description: string };

export function Algorithm() {
  const t = useTranslations('algorithm');
  const steps = t.raw('steps') as Step[];

  const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    loop: true,
    align: (viewportSize) =>
      viewportSize < 768 ? 0 : (viewportSize - viewportSize / 3) / 2,
    containScroll: false,
    dragFree: false,
  },
  [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
);

  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const next = emblaApi.selectedScrollSnap();
    setActiveIndex((prev) => (prev === next ? prev : next));
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="algorithm" className="bg-bg-alt py-section-y">
      <h2
        className="font-sans font-medium px-section-x mb-gap-lg"
        style={{ fontSize: 'clamp(40px, 4vw + 1rem, 120px)' }}
      >
        {t('title')}
      </h2>

      <div className="relative h-[clamp(200px,60vw,360px)] md:h-[clamp(380px,42vw,560px)]">
        <div
          className="absolute left-0 right-0 h-px bg-ink/30 pointer-events-none z-10"
          style={{ top: 'calc(clamp(80px, 10vw, 140px) + 1rem + 4px)' }}
          aria-hidden
        />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex-[0_0_50%] md:flex-[0_0_33.333%] min-w-0"
              >
                <AlgorithmStep
                  number={i + 1}
                  title={step.title}
                  description={step.description}
                  isActive={activeIndex === i}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}