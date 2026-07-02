'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useIntro } from '@/context/IntroContext';
import { motion } from 'framer-motion';

const LOCALES = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'ENG' },
] as const;

export function LanguageSwitcher() {
  const { introDone } = useIntro();
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (locale: 'ru' | 'en') => {
    if (locale === currentLocale) return;
    router.replace(pathname, { locale });
  };

  if (!introDone) return null;
  return (
<motion.div
initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
  className="glass-button !fixed top-6 right-6 z-50 flex items-center gap-3
             px-4 py-2 rounded-full font-sans text-mono-sm w-fit
             border border-white/60
             shadow-[0px_8px_20px_-6px_rgba(0,0,0,0.12),0px_2px_4px_rgba(0,0,0,0.08),inset_0px_1px_1px_rgba(255,255,255,0.9),inset_0px_-2px_4px_rgba(0,0,0,0.04)]"
>
  {LOCALES.map(({ code, label }) => {
    const isActive = code === currentLocale;
    return (
      <button
        key={code}
        type="button"
        onClick={() => switchTo(code)}
        aria-current={isActive ? 'true' : undefined}
        className={`uppercase transition-colors ${
          isActive
            ? 'text-black font-medium'
            : 'text-[#B7B7B7] hover:text-[#8a8a8a] cursor-pointer'
        }`}
      >
        {label}
      </button>
    );
  })}
</motion.div>
  );
}