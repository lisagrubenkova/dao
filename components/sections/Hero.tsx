// Hero.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Logo } from '@/components/ui/Logo';
import { AnimatedLine } from '@/components/ui/AnimatedLine';
import { AnimatedRow } from '@/components/ui/AnimatedRow';
import { useIntro } from '@/context/IntroContext';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

export function Hero() {
  const t = useTranslations('hero');
  const tMenu = useTranslations('menu');
  const subtitle = t('subtitle');

  const { setIntroDone } = useIntro();
  const [phase, setPhase] = useState<'intro' | 'content'>('intro');
  const [menuOpen, setMenuOpen] = useState(false);

  const goToContent = () => {
    setPhase('content');
    setIntroDone(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => setPhase('content'), 2500);
    return () => clearTimeout(timer);
  }, []);

  const isIntro = phase === 'intro';
  const logoTransition = { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const };

  const menuItems = [
    { label: tMenu('about'), href: '#about' },
    { label: tMenu('algorithm'), href: '#algorithm' },
    { label: tMenu('projects'), href: '#projects' },
    { label: tMenu('contact'), href: '#contact' },
    { label: tMenu('portfolio'), href: '#portfolio' },
  ];

  return (
    <section
      className="relative h-screen bg-bg overflow-hidden"
      onClick={() => isIntro && goToContent()}
    >
      {/* ===== Intro: логотип по центру ===== */}
      {isIntro && (
        <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
          <motion.div
            layoutId="brand-logo"
            transition={logoTransition}
            className="w-[clamp(280px,55vw,900px)]"
          >
            <Logo className="w-full h-auto" />
          </motion.div>
        </div>
      )}

      {/* ===== Content: грид auto / 1fr / auto — заголовок всегда по центру ===== */}
      {!isIntro && (
        <div className="absolute inset-0 grid grid-rows-[auto_1fr_auto] px-[clamp(24px,4vw,64px)] pt-[clamp(24px,3vw,48px)]">
          {/* --- Верх: бургер (mobile) + логотип по центру --- */}
          <div className="relative flex items-center justify-center">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Открыть меню"
              className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 p-1"
            >
              <span className="block w-8 h-[2px] bg-ink" />
              <span className="block w-8 h-[2px] bg-ink" />
              <span className="block w-8 h-[2px] bg-ink" />
            </button>

            <motion.div
              layoutId="brand-logo"
              transition={logoTransition}
              className="w-[clamp(98px,16.5vw,318px)]"
            >
              <Logo className="w-full h-auto" />
            </motion.div>
             <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
              className="absolute right-0 top-1/2 md:top-0 -translate-y-1/2"
            >
              <LanguageSwitcher />
            </motion.div>
          </div>

          {/* --- Середина: заголовок, гарантированно по центру --- */}
          <div className="flex items-center justify-center min-h-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col items-center text-center w-full mx-auto"
            >
              <h1 className="text-hero font-sans font-medium lowercase text-center text-balance whitespace-pre-line">
                {t('title')}
              </h1>
              {subtitle && (
                <p
                  className="font-mono text-center max-w-3xl mx-auto mt-[clamp(12px,1.81vw,40px)]"
                  style={{ fontSize: 'min(clamp(11px, 2.2vw, 40px), 4vh)' }}
                >
                  {subtitle}
                </p>
              )}
            </motion.div>
          </div>

          {/* --- Низ: меню только на desktop --- */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            className="hidden md:flex items-end justify-center gap-[clamp(32px,5vw,96px)]"
          >
            {menuItems.map((item) => (
              <AnimatedLine key={item.href} label={item.label} href={item.href} />
            ))}
          </motion.nav>
        </div>
      )}

      {/* ===== Мобильное выезжающее меню ===== */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="md:hidden fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className="md:hidden fixed top-0 left-0 z-50 h-full w-[82%] max-w-[360px] bg-bg flex flex-col justify-around pr-6"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.07, ease: 'easeOut' }}
                >
                  <AnimatedRow
                    text={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  />
                </motion.div>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}