'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { Project } from '@/data/types';
import { ProjectGallery } from './ProjectGallery';

type Props = {
  project: Project;
  locale: 'ru' | 'en';
};

// Размеры по двум точкам (375px → 1920px)
const fluidH1 = 'clamp(20px, 1.55px + 4.92vw, 96px)';           // 20 → 96
const fluidMeta = 'clamp(16px, 10.2px + 1.55vw, 40px)';         // 16 → 40 — город/формат
const fluidSectionTitle = 'clamp(16px, 12.1px + 1.04vw, 32px)'; // 16 → 32 — Задача/Результат
const fluidBody = 'clamp(10px, 6.6px + 0.906vw, 24px)';         // 10 → 24 — обычный текст
const fluidCredit = 'clamp(5px, 0.4px + 1.23vw, 24px)';         // 5 → 24 — подпись фото
const fluidDesc = 'clamp(8px, 2.18px + 1.55vw, 32px)';          // 8 → 32

// Статистика: число ~22px на мобилке → 96px на 1920; подпись 6px → 22px
const fluidStatValue = 'clamp(22px, calc(4px + 4.8vw), 96px)';
const fluidStatLabel = 'clamp(6px, calc(2.1px + 1.04vw), 22px)';

// Высота баннера в макете (px), из которого копируются heightPx у статов.
// Пример из макета: экран высотой 1249 → блоки 453 / 709 / 539 / 453.
// Соотношение постоянно, поэтому одно число подходит для всех экранов.
const STATS_DESIGN_HEIGHT = 1249;

// Запасной вариант, если высота у стата не задана — прикидка по длине числа.
const RATIO_BY_LEN: Record<number, number> = {
  1: 0.34,
  2: 0.36,
  3: 0.43,
  4: 0.5,
  5: 0.57,
};

function statHeightRatio(stat: Project['stats'][number]): number {
  // 1) heightPx — просто скопируй высоту блока из Фигмы (в px).
  const px = (stat as { heightPx?: number }).heightPx;
  if (typeof px === 'number') return px / STATS_DESIGN_HEIGHT;
  // 2) heightRatio — если удобнее задать долей (0..0.6).
  const ratio = (stat as { heightRatio?: number }).heightRatio;
  if (typeof ratio === 'number') return ratio;
  // 3) иначе — прикидка по длине числа.
  const len = stat.value.trim().length;
  return RATIO_BY_LEN[Math.min(Math.max(len, 1), 5)] ?? 0.57;
}

export function ProjectDetails({ project, locale }: Props) {
  const t = useTranslations('projectDetails');

  // Максимум 4 блока статистики
  const stats = project.stats.slice(0, 4);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="mt-24"
      >
        {/* БАННЕР */}
        <div className="relative bg-ink text-white aspect-[402/261] lg:aspect-auto lg:min-h-svh overflow-hidden flex flex-col">
          <Image
            src={project.cover}
            alt={project.title[locale]}
            fill
            sizes="100vw"
            className="object-cover opacity-70 -z-0"
            priority
          />

          <div
            className="relative z-10 flex flex-col gap-2 md:gap-8"
            style={{
              padding: 'clamp(24px, 4vw, 80px)',
              paddingBottom: 0,
            }}
          >
            <h2
              className="font-sans font-medium whitespace-pre-line max-w-[100%]"
              style={{ fontSize: fluidH1, lineHeight: 1.05 }}
            >
              {project.title[locale]}
            </h2>

            {(project.coverSubtitle || project.description || project.partnerLogo) && (
              <div className="text-left flex flex-col gap-2 md:gap-4 max-w-[50%] ml-auto self-end">
                {project.coverSubtitle && (
                  <p className="font-mono" style={{ fontSize: fluidDesc, lineHeight: 1.4 }}>
                    {project.coverSubtitle[locale]}
                  </p>
                )}
                {project.description && (
                  <p className="font-mono" style={{ fontSize: fluidDesc, lineHeight: 1.4 }}>
                    {project.description[locale]}
                  </p>
                )}
                {project.partnerLogo && (
                  <div className="flex items-center gap-4 flex-wrap">
                    {project.partnerLogo.map((logo, index) => (
                      <div
                        key={index}
                        style={{
                          width: `clamp(${logo.width * 0.3}px, ${(logo.width / 1920) * 100}vw, ${logo.width}px)`,
                        }}
                      >
                        <Image
                          src={logo.src}
                          alt=""
                          width={logo.width}
                          height={logo.height}
                          className="object-contain"
                          style={{ width: '100%', height: 'auto' }}   // ← ключевая строка
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* СТАТИСТИКА — абсолютный ряд, прижатый к низу и слегка «утопленный» под баннер.
              container-type: size даёт cqw/cqh относительно размеров баннера. */}
          {stats.length > 0 && (
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{ containerType: 'size' }}
            >
              <div
                className="absolute flex items-end pointer-events-auto"
                style={{
                  left: 'clamp(24px, 4vw, 80px)',
                  right: 'clamp(24px, 4vw, 80px)',
                  // насколько блоки уходят вниз за край баннера (скрывает нижнюю кромку)
                  bottom: 'calc(-1 * clamp(16px, 4cqh, 48px))',
                  gap: 'clamp(6px, 1.2vw, 24px)',
                }}
              >
                {stats.map((stat, i) => {
                  const ratio = statHeightRatio(stat);
                  return (
                    <div
                      key={i}
                      className="glass-stat rounded-xl flex flex-col justify-start overflow-hidden"
                      style={{
                        flex: '1 1 0',
                        minWidth: 0,
                        maxWidth: '24cqw',
                        height: `calc(${ratio} * 100cqh)`,
                        padding: 'clamp(8px, 1.4vw, 32px)',
                      }}
                    >
                      <div
                        className="font-sans font-medium"
                        style={{
                          fontSize: fluidStatValue,
                          lineHeight: 1,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="font-mono opacity-90"
                        style={{
                          fontSize: fluidStatLabel,
                          lineHeight: 1.3,
                          marginTop: '0.5em',
                        }}
                      >
                        {stat.label[locale]}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* ТЕКСТОВАЯ ЧАСТЬ */}
        <div className="bg-bg-alt" style={{ padding: 'clamp(32px, 4vw, 96px)' }}>
          <p
            className="font-mono uppercase text-accent"
            style={{
              fontSize: fluidMeta,
              marginBottom: 'clamp(24px, 4vw, 80px)',
            }}
          >
            ({project.cities[locale]} — {project.year} — {project.format[locale]})
          </p>

          {/*
            Сетка. На мобилке (одна колонка) порядок задаётся через order:
              1) текст (задача/результат/команда)
              2) галерея
              3) партнёры  ← уходят в самый низ, под галерею
            На десктопе (две колонки) раскладка восстанавливается явным
            размещением по колонкам/строкам:
              • левая колонка: текст (строка 1) + партнёры (строка 2)
              • правая колонка: галерея на всю высоту (row-span-2)
          */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{ gap: 'clamp(32px, 4vw, 80px)' }}
          >
            {/* Текст — задача, результат, команда */}
            <div className="order-1 lg:order-none lg:col-start-1 lg:row-start-1 flex flex-col gap-[clamp(32px,4vw,80px)]">
              <div>
                <h3
                  className="font-mono font-bold uppercase mb-4"
                  style={{ fontSize: fluidSectionTitle }}
                >
                  {t('task')}:
                </h3>
                <p
                  className="font-mono whitespace-pre-line"
                  style={{
                    fontSize: fluidBody,
                    lineHeight: 1.5,
                    paddingLeft: 'clamp(117px, 99.28px + 4.72vw, 190px)',
                  }}
                >
                  {project.task[locale]}
                </p>
              </div>

              <div>
                <h3
                  className="font-mono font-bold uppercase mb-4"
                  style={{ fontSize: fluidSectionTitle }}
                >
                  {t('result')}:
                </h3>
                <p
                  className="font-mono whitespace-pre-line"
                  style={{
                    fontSize: fluidBody,
                    lineHeight: 1.5,
                    paddingLeft: 'clamp(117px, 99.28px + 4.72vw, 190px)',
                  }}
                >
                  {project.result[locale]}
                </p>
              </div>

              {project.team && project.team.length > 0 && (
                <ul className="flex flex-col gap-4">
                  {project.team.map((member, i) => (
                    <li
                      key={i}
                      className="font-mono"
                      style={{ fontSize: fluidBody, lineHeight: 1.5 }}
                    >
                      <span className="text-red font-semibold uppercase">
                        {member.name[locale]}
                      </span>
                      {' — '}
                      <span>{member.role[locale]}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Галерея. На мобилке идёт под текстом (order-2), на десктопе — правая колонка на всю высоту */}
            <div className="order-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2">
              <ProjectGallery photos={project.gallery} locale={locale} />
            </div>

            {/* Партнёры. На мобилке — в самом низу под галереей (order-3), на десктопе — слева под текстом */}
            {project.partners && project.partners.length > 0 && (
              <div
                className="order-3 lg:order-none lg:col-start-1 lg:row-start-2 flex flex-wrap items-center justify-center"
                style={{
                  columnGap: 'clamp(28px, 5vw, 96px)',
                  rowGap: 'clamp(32px, 5vw, 80px)',
                  marginTop: 'clamp(24px, 4vw, 64px)',
                }}
              >
                {project.partners.map((p, i) => {
                  // детерминированные паттерны — стабильны для SSR, без hydration mismatch
                  const jitter = [0, 0.8, -0.6, 0.4, -1, 0.5, -0.3];   // вертикальный сдвиг
                  const scale  = [1, 0.85, 1.1, 0.92, 1.05, 0.8, 1.12]; // разброс размеров
                  const dy = jitter[i % jitter.length];
                  const s  = scale[i % scale.length];

                  const logo = (
                    <div
                      style={{
                        width: `clamp(${p.width * 0.28 * s}px, ${((p.width / 1920) * 100 * s).toFixed(2)}vw, ${Math.round(p.width * s)}px)`,
                        transform: `translateY(calc(${dy} * clamp(8px, 2vw, 32px)))`,
                      }}
                    >
                      <Image
                        src={p.logo}
                        alt={p.name}
                        width={p.width}
                        height={p.height}
                        className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                  );

                  return p.url ? (
                    <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="inline-block">
                      {logo}
                    </a>
                  ) : (
                    <div key={i}>{logo}</div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}