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

  const logoSrc = locale === 'en' ? '/logo-en.svg' : '/logo-ru.svg';
  const portfolioSrc = locale === 'en' ? '/dao-portfolio-en.pdf' : '/dao-portfolio-ru.pdf';
  const navItems: NavItem[] = [
    { key: 'algorithm', label: t('nav.algorithm'), href: '#algorithm' },
    { key: 'projects', label: t('nav.projects'), href: '#projects' },
    { key: 'contacts', label: t('nav.contacts'), href: '#contact' },
  ];

  return (
    <footer className="bg-bg-alt py-8 px-4 md:py-section-y md:px-section-x">
      <div className="grid grid-cols-12 gap-3 md:gap-gap-lg">
        {/* Левая часть — большой логотип */}
        <div className="col-span-7">
          <Image
            src={logoSrc}
            alt="dao"
            width={800}
            height={400}
            className="w-full h-auto max-w-[174px] md:max-w-2xl"
          />
        </div>

        {/* Правая часть — навигация + описание + кнопка */}
        <div className="col-span-5 flex flex-col gap-3 md:gap-gap-md">
          <nav className="flex flex-col gap-1 md:gap-2">
            {navItems.map((item) =>
              item.key === 'portfolio' ? (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[7px] md:text-mono-md uppercase text-ink hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.key}
                  href={item.href}
                  className="font-mono text-[7px] md:text-mono-md uppercase text-ink hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <p className="font-mono text-[6px] md:text-mono-sm whitespace-pre-line">
            {t('tagline')}
          </p>

          <a href={portfolioSrc} 
             download={locale === 'en' ? 'dao pitchdeck.pdf' : 'dao портфолио.pdf'} 
             className="glass self-start inline-flex items-center justify-center 
             px-4 py-1.5 md:px-8 md:py-3 font-sans font-normal leading-none 
             lowercase text-[7px] md:text-[24px]  hover:bg-white/25 
             transition-colors cursor-pointer" > 
             {t('downloadPortfolio')} 
          </a>
        </div>

        {/* Нижняя плашка с контактами и годом */}
        <div className="col-span-12 grid grid-cols-3 gap-3 md:gap-gap-md mt-6 md:mt-gap-lg">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col gap-1">
              <p className="font-mono text-[8px] md:text-mono-sm font-bold uppercase">
                {member.name}
              </p>

              <a
                href={`tel:${member.phone}`}
                className="font-mono text-[6px] md:text-mono-sm hover:text-accent transition-colors"
              >
                {member.phone}
              </a>

              <a
                href={`https://t.me/${member.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[6px] md:text-mono-sm underline hover:text-accent transition-colors"
              >
                TG: {member.telegram}
              </a>
            </div>
          ))}

          <div className="flex justify-end items-end">
          <p className="font-mono text-[8px] leading-[1.6] md:text-[20px] md:leading-relaxed text-muted">
            ИП Герасименко Юлия Юрьевна
            <br />
            ИНН 526017711095
            <br />
            ОГРН 325527500004712
            <br />
            Адрес г Нижний Новгород, ул. Пискунова, д 3, к 3, кв 134Б
            <br />
            +7 985 058 1797
            <br />
            gerasimenkoiuliia@gmail.com
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
}