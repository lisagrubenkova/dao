'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

type TeamMember = { name: string; phone: string; telegram: string };
type NavItem = { key: string; label: string; href: string };

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const team = t.raw('team') as TeamMember[];

  const navItems: NavItem[] = [
    { key: 'algorithm', label: t('nav.algorithm'), href: '#algorithm' },
    { key: 'projects', label: t('nav.projects'), href: '#projects' },
    { key: 'portfolio', label: t('nav.portfolio'), href: '#' },
    { key: 'contacts', label: t('nav.contacts'), href: '#contact' },
  ];

  const logoSrc = locale === 'en' ? '/logo-en.svg' : '/logo-ru.svg';

  return (
    <footer className="bg-bg-alt py-section-y px-section-x">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gap-lg">
        {/* Левая часть — большой логотип */}
        <div className="lg:col-span-7">
          <Image
            src={logoSrc}
            alt="dao"
            width={800}
            height={400}
            className="w-full h-auto max-w-2xl"
          />
        </div>

        {/* Правая часть — навигация + описание + кнопка */}
        <div className="lg:col-span-5 flex flex-col gap-gap-md">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="font-mono text-mono-md uppercase text-ink hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <p className="font-mono text-mono-sm whitespace-pre-line">
            {t('tagline')}
          </p>

          <button
            type="button"
            className="self-start rounded-full bg-bg px-6 py-3 font-mono text-mono-sm text-muted hover:text-ink transition-colors"
          >
            {t('downloadPortfolio')}
          </button>
        </div>

        {/* Нижняя плашка с контактами и годом */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-gap-md mt-gap-lg">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col gap-1">
              <p className="font-mono text-mono-sm font-bold uppercase">
                {member.name}
              </p>
              
              <a  href={`tel:${member.phone}`}
                className="font-mono text-mono-sm hover:text-accent transition-colors"
              >
                {member.phone}
              </a>
              
             <a   href={`https://t.me/${member.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-mono-sm underline hover:text-accent transition-colors"
              >
                TG: {member.telegram}
              </a>
            </div>
          ))}

          <div className="flex md:justify-end items-end">
            <p className="font-mono text-mono-sm">{t('year')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}