'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

const LOCALES = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'ENG' },
] as const;

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (locale: 'ru' | 'en') => {
    if (locale === currentLocale) return;
    router.replace(pathname, { locale });
  };

  return (
    <div
      className="glass-button flex items-center w-fit border border-white/60
                 h-[17px] gap-1.5 px-2 rounded-[10px] text-[9px] leading-none
                 md:h-auto md:gap-3 md:px-4 md:py-2 md:rounded-full md:text-mono-sm
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
    </div>
  );
}