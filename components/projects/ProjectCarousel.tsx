'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import type { Project } from '@/data/projects';
import { GlassArrow } from '../ui/GlassArrow';

type Props = {
  projects: Project[];
  activeId: string;
  onSelect: (id: string) => void;
};

const fluidTitle = 'clamp(18px, 0.75rem + 0.83vw, 32px)';
const fluidMeta = 'clamp(13px, 0.6rem + 0.6vw, 24px)';
const cardWidth = 'clamp(320px, 17.36rem + 15.375vw, 566px)';
const cardGap = 'clamp(16px, 1.5vw, 32px)';

export function ProjectCarousel({ projects, activeId, onSelect }: Props) {
  const locale = useLocale() as 'ru' | 'en';
  const t = useTranslations('projects');

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    watchDrag: false,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const handleView = (id: string) => {
    onSelect(id);
    // ждём React-рендер деталей и плавно скроллим
    requestAnimationFrame(() => {
      document
        .getElementById('project-details')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <div className="relative flex items-center">
  <GlassArrow direction="left"  place="carousel" onClick={scrollPrev} />

      <div ref={emblaRef} className="overflow-hidden flex-1 min-w-0">
        <div className="flex">
          {projects.map((p) => (
            <div
              key={p.id}
              className="shrink-0"
              style={{ flex: `0 0 ${cardWidth}`, paddingRight: cardGap }}
            >
              <div
                onClick={() => onSelect(p.id)}
                className="text-left flex flex-col cursor-default"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100">
                  <Image
                    src={p.thumbnail}
                    alt={p.title[locale]}
                    fill
                    sizes="(max-width: 768px) 90vw, 566px"
                    className="object-cover"
                  />

                  {p.top && (
                    <span
                      className="glass absolute top-4 left-4 text-white font-sans rounded-full px-4 py-1.5 uppercase"
                      style={{ fontSize: fluidMeta }}
                    >
                      TOP
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleView(p.id);
                    }}
                    className="glass absolute bottom-4 right-4 text-white font-mono rounded-full px-5 py-2  transition-colors hover:bg-white/25 cursor-pointer"
                    style={{ fontSize: fluidMeta }}
                  >
                    {t('viewProject')}
                  </button>
                </div>

                {/* В колонку */}
                <div className="mt-4 flex flex-col gap-2">
                  <h3
                    className="font-sans font-bold"
                    style={{ fontSize: fluidTitle, lineHeight: 1.2 }}
                  >
                    {p.title[locale]}
                  </h3>
                  <div
                    className="font-mono items-end text-right"
                    style={{ fontSize: fluidMeta, lineHeight: 1.3 }}
                  >
                    <div>{p.cities[locale]}, {p.year}</div>
                    <div className="text-accent">{p.format[locale]}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

  <GlassArrow direction="right" place="carousel" onClick={scrollNext} />
    </div>
  );
}