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
    <div className="fixed top-6 right-6 z-50 flex gap-2 font-mono text-mono-sm">
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
                ? 'text-ink'
                : 'text-muted hover:text-ink cursor-pointer'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}