'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { GalleryPhoto } from '@/data/types';
import { GlassArrow } from '../ui/GlassArrow';

type Props = {
  photos: GalleryPhoto[];
  locale: 'ru' | 'en';
};

const fluidCredit = 'clamp(5px, 0.4px + 1.23vw, 24px)';

// Слайды въезжают/выезжают в сторону листания
const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
};

// «Сила» свайпа = смещение × скорость. Порог, после которого листаем.
const SWIPE_THRESHOLD = 8000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

export function ProjectGallery({ photos, locale }: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  if (photos.length === 0) return null;

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + photos.length) % photos.length);
  };

  const prev = () => paginate(-1);
  const next = () => paginate(1);

  const photo = photos[index];

  return (
    <div className="relative">
      {/* Пропорции: на мобилке горизонталь 370x251, на десктопе вертикаль 857x1200 (примерно 3:4) */}
      <div className="relative aspect-[370/251] lg:aspect-[857/1200] bg-bg-alt overflow-hidden rounded-xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={photo.src}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 touch-pan-y select-none cursor-grab active:cursor-grabbing"
            // Свайп только когда есть что листать
            drag={photos.length > 1 ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -SWIPE_THRESHOLD) next();
              else if (swipe > SWIPE_THRESHOLD) prev();
            }}
          >
            <Image
              src={photo.src}
              alt=""
              fill
              draggable={false}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover pointer-events-none"
            />
          </motion.div>
        </AnimatePresence>

        {photos.length > 1 && (
           <>
          <GlassArrow direction="left"  place="gallery" onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10" aria-label="prev" />
          <GlassArrow direction="right" place="gallery" onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10" aria-label="next" />
          </>
        )}
      </div>

      <p
        className="font-mono text-muted text-right mt-2"
        style={{ fontSize: fluidCredit }}
      >
        {photo.credit ? photo.credit[locale] : null}
      </p>
    </div>
  );
}