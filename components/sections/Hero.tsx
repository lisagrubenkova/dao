'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Logo } from '@/components/ui/Logo';
import { AnimatedLine } from '@/components/ui/AnimatedLine';

export function Hero() {
  const t = useTranslations('hero');
  const tMenu = useTranslations('menu');
  const subtitle = t('subtitle');

  const [phase, setPhase] = useState<'intro' | 'content'>('intro');

  useEffect(() => {
    const timer = setTimeout(() => setPhase('content'), 2500);
    return () => clearTimeout(timer);
  }, []);

  const isIntro = phase === 'intro';

  // Общий transition для layout-перехода логотипа
  const logoTransition = { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section
      className="relative h-screen bg-bg overflow-hidden"
      onClick={() => isIntro && setPhase('content')}
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

      {/* ===== Content: логотип сверху + текст + меню ===== */}
      {!isIntro && (
        <div className="absolute inset-0 flex flex-col items-center justify-between px-[clamp(24px,4vw,64px)] pt-[clamp(24px,3vw,48px)]">
          {/* Логотип в верхней позиции — тот же layoutId */}
          <motion.div
            layoutId="brand-logo"
            transition={logoTransition}
            className="w-[clamp(98px,16.5vw,318px)]"
          >
            <Logo className="w-full h-auto" />
          </motion.div>

          {/* Заголовок проявляется на фоне движения логотипа */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col items-center w-full"
          >
            <h1 className="text-hero font-sans font-medium lowercase text-center whitespace-pre-line">
              {t('title')}
            </h1>
            {subtitle && (
              <p className="text-mono-md font-mono text-center max-w-2xl mt-[clamp(12px,5.2px+1.81vw,40px)]" style={{ fontSize: 'clamp(12px, 5.2px + 1.81vw, 40px)' }}>
                {subtitle}
              </p>
            )}
          </motion.div>

          {/* Меню тоже проявляется поверх */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            className="flex items-start gap-[clamp(32px,5vw,96px)]"
          >
            <AnimatedLine label={tMenu('about')} href="#about" />
            <AnimatedLine label={tMenu('algorithm')} href="#algorithm" />
            <AnimatedLine label={tMenu('projects')} href="#projects" />
            <AnimatedLine label={tMenu('contact')} href="#contact" />
            <AnimatedLine label={tMenu('portfolio')} href="#portfolio" />
          </motion.nav>
        </div>
      )}
    </section>
  );
}