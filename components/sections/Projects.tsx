'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { projects } from '@/data/projects';
import { ProjectCarousel } from '@/components/projects/ProjectCarousel';
import { ProjectDetails } from '@/components/projects/ProjectDetails';

export function Projects() {
  const locale = useLocale() as 'ru' | 'en';
  const t = useTranslations('sections');
  const [activeId, setActiveId] = useState(projects[0].id);

  const activeProject = projects.find((p) => p.id === activeId)!;

  return (
<section id="projects" className="bg-white py-24">
    <h2
      className="font-sans font-medium mb-11 px-[clamp(16px,4vw,64px)]"
      style={{ fontSize: 'clamp(40px, 4vw + 1rem, 120px)' }}
    >
      {t('projects')}
    </h2>
       <ProjectCarousel projects={projects} activeId={activeId} onSelect={setActiveId} />
        <div id="project-details" className="scroll-mt-24">
          <ProjectDetails project={activeProject} locale={locale} />
        </div>
    </section>
  );
}