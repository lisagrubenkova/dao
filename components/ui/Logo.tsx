'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  const locale = useLocale();
  const src = locale === 'en' ? '/logo-en.svg' : '/logo-ru.svg';

  return (
    <Image
      src={src}
      alt="dao"
      width={120}
      height={60}
      priority
      className={className}
    />
  );
}