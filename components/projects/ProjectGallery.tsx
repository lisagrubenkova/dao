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

export function ProjectGallery({ photos, locale }: Props) {
  const [index, setIndex] = useState(0);

  if (photos.length === 0) return null;

  const prev = () => setIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === photos.length - 1 ? 0 : i + 1));

  const photo = photos[index];

  return (
    <div className="relative">
      {/* Пропорции: на мобилке горизонталь 370x251, на десктопе вертикаль 857x1200 (примерно 3:4) */}
      <div className="relative aspect-[370/251] lg:aspect-[857/1200] bg-bg-alt overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={photo.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={photo.src}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {photos.length > 1 && (
           <>
          <GlassArrow direction="left"  place="gallery" onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2" aria-label="prev" />
          <GlassArrow direction="right" place="gallery" onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2" aria-label="next" />
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