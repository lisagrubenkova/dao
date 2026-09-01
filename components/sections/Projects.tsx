'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { projects } from '@/data/projects';
import { ProjectCarousel } from '@/components/projects/ProjectCarousel';
import { ProjectDetails } from '@/components/projects/ProjectDetails';

export function Projects() {
  const locale = useLocale() as 'ru' | 'en';
  const t = useTranslations('sections');
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeProject = activeId
    ? projects.find((p) => p.id === activeId) ?? null
    : null;

  const handleClose = () => {
    setActiveId(null);
    // возвращаем к карусели, чтобы не оставалось пустого места на месте свёрнутого блока
    requestAnimationFrame(() => {
      document
        .getElementById('projects')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <section id="projects" className="bg-white md:py-24 py-12">
      <h2
        className="font-sans font-medium mb-11 px-[clamp(16px,4vw,64px)]"
        style={{ fontSize: 'clamp(40px, 4vw + 1rem, 120px)' }}
      >
        {t('projects')}
      </h2>

      <ProjectCarousel projects={projects} activeId={activeId} onSelect={setActiveId} />

      <AnimatePresence mode="wait">
        {activeProject && (
          <div key={activeProject.id} id="project-details" className="scroll-mt-24">
            <ProjectDetails
              project={activeProject}
              locale={locale}
              onClose={handleClose}
            />
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}