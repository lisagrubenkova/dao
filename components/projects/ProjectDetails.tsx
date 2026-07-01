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
const fluidH1 = 'clamp(40px, 26.4px + 3.63vw, 96px)';         // 40 → 96
const fluidMeta = 'clamp(16px, 10.2px + 1.55vw, 40px)';       // 16 → 40 — город/формат
const fluidSectionTitle = 'clamp(16px, 12.1px + 1.04vw, 32px)'; // 16 → 32 — Задача/Результат
const fluidBody = 'clamp(10px, 6.6px + 0.906vw, 24px)';       // 10 → 24 — обычный текст
const fluidCredit = 'clamp(5px, 0.4px + 1.23vw, 24px)';       // 5 → 24 — подпись фото
const fluidStatValue = 'clamp(40px, 1.5rem + 4.5vw, 96px)';
const fluidStatLabel = 'clamp(12px, 0.5rem + 0.73vw, 22px)';
const fluidDesc = 'clamp(14px, 0.625rem + 0.94vw, 32px)';

const glassStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
};

export function ProjectDetails({ project, locale }: Props) {
  const t = useTranslations('projectDetails');

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
        <div className="relative bg-ink text-white min-h-svh overflow-hidden flex flex-col">
          <Image
            src={project.cover}
            alt={project.title[locale]}
            fill
            sizes="100vw"
            className="object-cover opacity-70 -z-0"
            priority
          />

          <div
            className="relative z-10 flex justify-between items-start gap-8"
            style={{
              padding: 'clamp(24px, 4vw, 80px)',
              paddingBottom: 0,
            }}
          >
            <h2
              className="font-sans font-medium whitespace-pre-line max-w-[60%]"
              style={{ fontSize: fluidH1, lineHeight: 1.05 }}
            >
              {project.title[locale]}
            </h2>

            {(project.coverSubtitle || project.description || project.partnerLogo) && (
              <div className="text-right flex flex-col items-end gap-4 max-w-[35%]">
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
                  <Image
                    src={project.partnerLogo}
                    alt=""
                    width={160}
                    height={50}
                    className="object-contain h-auto"
                    style={{ width: 'clamp(80px, 8vw, 160px)' }}
                  />
                )}
              </div>
            )}
          </div>

          <div className="flex-1" />

          {project.stats.length > 0 && (
            <div
              className="relative z-10 flex items-end"
              style={{
                padding: 'clamp(24px, 4vw, 80px)',
                paddingTop: 0,
                paddingBottom: 0,
                gap: 'clamp(12px, 1.5vw, 24px)',
              }}
            >
              {project.stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-end text-white rounded-xl flex-1 min-w-0"
                  style={{
                    ...glassStyle,
                    padding: 'clamp(16px, 1.5vw, 32px)',
                    minWidth: 'clamp(140px, 14vw, 240px)',
                    maxWidth: 'clamp(200px, 22vw, 360px)',
                  }}
                >
                  <div
                    className="font-sans font-medium"
                    style={{ fontSize: fluidStatValue, lineHeight: 1, marginBottom: '0.5em' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-mono opacity-90"
                    style={{ fontSize: fluidStatLabel, lineHeight: 1.3 }}
                  >
                    {stat.label[locale]}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ТЕКСТОВАЯ ЧАСТЬ */}
        <div
          className="bg-bg-alt"
          style={{ padding: 'clamp(32px, 4vw, 96px)' }}
        >
          <p
            className="font-mono uppercase text-accent"
            style={{
              fontSize: fluidMeta,
              marginBottom: 'clamp(24px, 4vw, 80px)',
            }}
          >
            ({project.cities[locale]} — {project.year} — {project.format[locale]})
          </p>

          {/* Сетка: на мобилке всё в одну колонку, на десктопе две */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{ gap: 'clamp(32px, 4vw, 80px)' }}
          >
            {/* Левая колонка — текст */}
            <div className="flex flex-col gap-[clamp(32px,4vw,80px)]">
              <div>
                <h3
                  className="font-mono font-bold uppercase mb-4"
                  style={{ fontSize: fluidSectionTitle }}
                >
                  {t('task')}:
                </h3>
                <p
                  className="font-mono whitespace-pre-line"
                  style={{ fontSize: fluidBody, lineHeight: 1.5, paddingLeft: 'clamp(117px, 84.5px + 8.67vw, 251px)' }}
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
                  style={{ fontSize: fluidBody, lineHeight: 1.5, paddingLeft: 'clamp(117px, 84.5px + 8.67vw, 251px)' }}
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

              {project.partners && project.partners.length > 0 && (
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  {project.partners.map((p, i) => {
                    const logo = (
                      <Image
                        src={p.logo}
                        alt={p.name}
                        width={120}
                        height={48}
                        className="object-contain w-auto opacity-80 hover:opacity-100 transition-opacity"
                        style={{ height: 'clamp(28px, 2.5vw, 48px)' }}
                      />
                    );
                    return p.url ? (
                      <a key={i} href={p.url} target="_blank" rel="noopener noreferrer">
                        {logo}
                      </a>
                    ) : (
                      <div key={i}>{logo}</div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Правая колонка — галерея. На мобилке она будет под текстом из-за grid-cols-1 */}
            <div>
              <ProjectGallery photos={project.gallery} locale={locale} />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}