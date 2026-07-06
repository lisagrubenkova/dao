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
    width: 375,
    height: 102
  }],
  description: {
    ru: 'Международный саммит, посвящённый технологическому предпринимательству, венчурным инвестициям и инновациям',
    en: 'An international summit dedicated to technology entrepreneurship, venture capital investments and innovation',
  },
  stats: [
    {
      value: '5000+',
      label: { ru: 'участников из 28 стран', en: 'attendees from 20 countries' },
      heightPx: 453,
    },
    {
      value: '160+',
      label: { ru: 'российских и международных спикеров', en: 'international & local speakers' },
      heightPx: 709,
    },
    {
      value: '200+',
      label: {
        ru: 'запросов молодых компаний на пилоты с партнёрами саммита',
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
    ru: 'Сделать саммит флагманским мероприятием по венчурному предпринимательству.\n\nСоздать программу, в которой форматы и нетворкинг приводят к запуску пилотов и сделок',
    en: 'Benchmark Showcase: Position the summit as a leading venture ecosystem event\n\nValue-Driven: Focused on networking, experimentation, and real business outcomes',
  },
  result: {
    ru: 'Архитектура деловой программы для пяти треков и разных аудиторий.\n\nФорматы обратных презентаций корпораций, организация деловых встреч "молодая компания - корпорация - инвестор ", конвертирующий новые деловые связи в пилоты',
    en: '5-Track Framework: Corporate reverse pitches and matchmaking to drive commercial pilots',
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