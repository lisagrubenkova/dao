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
  partnerLogo: '/logos/sber.svg',
  description: {
    ru: 'Международный саммит, посвящённый технологическому предпринимательству, венчурным инвестициям и инновациям',
    en: 'An international summit dedicated to technology entrepreneurship, venture capital investments and innovation',
  },
  stats: [
    {
      value: '5000+',
      label: { ru: 'участников из 28 стран', en: 'attendees from 20 countries' },
    },
    {
      value: '160+',
      label: { ru: 'российских и международных спикеров', en: 'international & local speakers' },
    },
    {
      value: '200+',
      label: {
        ru: 'запросов стартапов на пилоты с партнёрами саммита',
        en: 'startup applications for corporate pilots',
      },
    },
    {
      value: '50+',
      label: { ru: 'миллионов онлайн-просмотров', en: 'million online views' },
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
    ru: 'Архитектура деловой программы для пяти треков и разных аудиторий.\n\nФорматы reverse pitch корпораций, матчмейкинг «стартап-корпорация-инвестор», конвертирующий новые деловые связи в пилоты и сделки',
    en: '5-Track Framework: Corporate reverse pitches and matchmaking to drive commercial pilots',
  },
  gallery: [
    { src: '/projects/moscow-startup-summit/1.jpg', credit: { ru: 'фото: dao team', en: 'ph: dao team' } },
    { src: '/projects/moscow-startup-summit/2.jpg', credit: { ru: 'фото: dao team', en: 'ph: dao team' } },
    { src: '/projects/moscow-startup-summit/3.jpg', credit: { ru: 'фото: dao team', en: 'ph: dao team' } },
    { src: '/projects/moscow-startup-summit/4.jpg', credit: { ru: 'фото: dao team', en: 'ph: dao team' } },
    { src: '/projects/moscow-startup-summit/5.jpg', credit: { ru: 'фото: dao team', en: 'ph: dao team' } },
  ],
  partners: [
    { logo: '/logos/gero.svg', name: 'gero', url: '' },
    { logo: '/logos/fra.svg', name: 'FRA', url: '' },
    { logo: '/logos/biodata.svg', name: 'biodata', url: '' },
    { logo: '/logos/squirrelAI.svg', name: 'SquirrelAI', url: '' },
    { logo: '/logos/MIT.svg', name: 'MIT', url: '' },
  ]
};