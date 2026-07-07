import type { Project } from '../types';

export const moscowStartupSummit: Project = {
  id: 'moscow-startup-summit',
  slug: 'moscow-startup-summit',
  top: true,
  thumbnail: '/projects/moscow-startup-summit/thumb.jpg',
  cover: '/projects/moscow-startup-summit/cover.jpg',
  title: {
    ru: 'Moscow Start up Summit',
    en: 'Moscow Start up Summit',
  },
  partnerLogo: [{ 
    src:'/logos/sber.svg',
    width: 250,
    height: 68
  }],
  description: {
    ru: 'Международный саммит, посвящённый технологическому предпринимательству, венчурным инвестициям и\u00A0инновациям',
    en: 'An international summit dedicated to\u00A0technology entrepreneurship, venture capital investments and innovation',
  },
  stats: [
    {
      value: '5000+',
      label: { ru: 'участников из\u00A028\u00A0стран', en: 'attendees from 20\u00A0countries' },
      heightPx: 453,
    },
    {
      value: '160+',
      label: { ru: 'российских и\u00A0международных спикеров', en: 'international\u00A0&\u00A0local speakers' },
      heightPx: 709,
    },
    {
      value: '200+',
      label: {
        ru: 'запросов молодых компаний на\u00A0пилоты с\u00A0партнёрами саммита',
        en: 'startup applications for corporate pilots',
      },
      heightPx: 539,
    },
    {
      value: '50+',
      label: { ru: 'миллионов онлайн-просмотров', en: 'million online views' },
      heightPx: 453,
    },
  ],
  cities: { ru: 'Москва', en: 'Moscow' },
  format: { ru: 'онлайн+офлайн', en: 'offline+online' },
  year: '2024',
  task: {
    ru: 'Сделать саммит флагманским мероприятием по\u00A0венчурному предпринимательству.\n\nСоздать программу, в\u00A0которой форматы и\u00A0нетворкинг приводят к\u00A0запуску пилотов и\u00A0сделок',
    en: 'Benchmark Showcase: Position the\u00A0summit as a\u00A0leading venture ecosystem event\n\nValue-Driven: Focused on\u00A0networking, experimentation, and real business outcomes',
  },
  result: {
    ru: 'Архитектура деловой программы для\u00A0пяти треков и\u00A0разных аудиторий.\n\nФорматы обратных презентаций корпораций, организация деловых встреч "молодая компания\u00A0- корпорация\u00A0- инвестор ", конвертирующий новые деловые связи в\u00A0пилоты',
    en: '5-Track Framework: Corporate reverse pitches and matchmaking to\u00A0drive commercial pilots',
  },
  gallery: [
    { src: '/projects/moscow-startup-summit/1.jpg' },
    { src: '/projects/moscow-startup-summit/2.jpg' },
    { src: '/projects/moscow-startup-summit/3.jpg' },
    { src: '/projects/moscow-startup-summit/4.jpg' },
    { src: '/projects/moscow-startup-summit/5.jpg' },
  ],
  partners: [
    { logo: '/logos/gero.svg', name: 'gero', url: '', width: 221, height: 55 },
    { logo: '/logos/fra.svg', name: 'FRA', url: '', width: 313, height: 127 },
    { logo: '/logos/biodata.svg', name: 'biodata', url: '', width: 151, height: 151 },
    { logo: '/logos/squirrelAI.svg', name: 'SquirrelAI', url: '', width: 213, height: 213 },
    { logo: '/logos/MIT.svg', name: 'MIT', url: '', width: 142, height: 142 },
  ]
};