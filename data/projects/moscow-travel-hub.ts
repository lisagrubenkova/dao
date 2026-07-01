import type { Project } from '../types';

export const moscowTravelHub: Project = {
  id: 'moscow-travel-hub',
  slug: 'moscow-travel-hub',
  top: false,
  thumbnail: '/projects/moscow-travel-hub/thumb.jpg',
  cover: '/projects/moscow-travel-hub/cover.jpg',
  title: { ru: 'Акселератор Moscow Travel hub', en: 'Moscow Travel hub Accelerator' },
  partnerLogo: '/logos/rbc.svg',
  description: {
    ru: 'Акселерационная программа по созданию и запуску новых продуктов, сервисов и IT-решений в сфере туризма и гостеприимства',
    en: 'An intensive acceleration initiative driving product development, ecosystem services, and tech innovations for the hospitality and tourism industry',
  },
  stats: [
    { value: '3000+', label: { ru: 'онлайн-просмотров', en: 'online views' } },
    { value: '670+', label: { ru: 'слушателей образовательной программы', en: 'program attendees' } },
    { value: '257', label: { ru: 'заявок от стартапов', en: 'startup applications' } },
    { value: '4', label: { ru: 'хакатона', en: 'hackathons executed' } },
  ],
  cities: { ru: 'Москва', en: 'Moscow' },
  format: { ru: 'онлайн+офлайн', en: 'online+offline' },
  year: '2024',
  task: {
    ru: 'Организовать коммуникационный хаб, хакатон и акселерационную программу Travel Factory («Фабрика») в рамках инициативы по развитию технологий в туризме и гостеприимстве',
    en: 'Innovation Hub: Launch a communication platform, hackathon series, and the "Travel Factory" accelerator\n\nIndustry Growth: Drive tech innovation and startup scaling within tourism and hospitality',
  },
  result: {
    ru: 'Концепция и методология акселератора, структура программы и набор инструментов трекинга, скаутинг и отбор проектов для акселератора. Подготовлены и проведены питч-сессии, привлечены и скоординированы жюри и эксперты.\n\nПродюсирование и написание материалов для коммуникационной площадки, формирование медиатеки с материалами и презентациями спикеров.\n\nПроведение хакатонов, решение прикладных задач индустриальных заказчиков',
    en: 'End-to-End Acceleration: Developed the concept, scouting pipeline, and tracking framework for startups\n\nCorporate Hackathons: Executed enterprise-backed hackathons solving real industry challenges\n\nKnowledge Repository: Built a digital hub with educational insights and media content',
  },
  gallery: [
    { src: '/projects/moscow-travel-hub/1.jpg', credit: { ru: 'фото: dao team', en: 'ph: dao team' } },
    { src: '/projects/moscow-travel-hub/2.jpg', credit: { ru: 'фото: dao team', en: 'ph: dao team' } },
    { src: '/projects/moscow-travel-hub/3.jpg', credit: { ru: 'фото: dao team', en: 'ph: dao team' } },
    { src: '/projects/moscow-travel-hub/4.jpg', credit: { ru: 'фото: dao team', en: 'ph: dao team' } },
  ],
};