import type { Project } from '../types';

export const sberBusinessFest: Project = {
  id: 'sber-business-fest',
  slug: 'sber-business-fest',
  top: true,
  thumbnail: '/projects/sber-business-fest/thumb.jpg',
  cover: '/projects/sber-business-fest/cover.jpg',
  title: { ru: 'Сбер Бизнес-Фест 2024', en: 'Sber Business FEST 2024' },
  partnerLogo: '/logos/sber.svg',
  description: {
    ru: 'флагманский фестиваль для предпринимателей и тех, кто хочет начать своё дело',
    en: 'A multi-city offline festival by SberBusiness, designed to support entrepreneurs with practical business content, founder cases, mentoring, networking and local business connections',
  },
  stats: [
    { value: '10000', label: { ru: 'участников офлайн и онлайн', en: 'hybrid attendees' } },
    { value: '1000+', label: { ru: 'гостей на площадке в каждом городе', en: 'on-site attendees per city' } },
    { value: '11', label: { ru: 'городов России', en: 'cities' } },
  ],
  cities: { ru: '11 городов', en: '11 cities' },
  format: { ru: 'офлайн', en: 'offline' },
  year: '2024',
  task: {
    ru: 'Провести офлайн-фестиваль для действующих и начинающих предпринимателей в 11 городах.\n\nДать прикладные бизнес-инсайты, живые кейсы и работающий нетворкинг вокруг сервисов для МСП',
    en: '11-City Tour: Multi-city showcase for established entrepreneurs and future founders\n\nPractical Value: Delivery of actionable insights, case studies, and high-impact networking',
  },
  result: {
    ru: 'Исследование предпринимательского контекста каждого города и архитектура модульной программы: главная сцена, треки, менторские сессии и нетворкинг-зоны.\n\nПодбор федеральных и локальных спикеров, продюсирование форматов и сопровождение фестиваля на 11 площадках.\n\nФестиваль закрепился как флагманская площадка Сбера для МСП в регионах',
    en: 'Data-Driven Architecture: Localized research used to build modular programming (main stage, tracks, mentorship)\n\nEnd-to-End Production: Speaker curation and full on-site execution across all 11 locations\n\nFlagship Status: Established the project as Sber’s core regional and cultural platform\n\nFlagship Status: Established the project as Sber’s core regional and cultural platform',
  },
  gallery: [
    { src: '/projects/sber-business-fest/1.jpg', credit: { ru: 'фото: Виталий Бурдаков', en: 'ph: Vitaly Burdakov' } },
    { src: '/projects/sber-business-fest/2.jpg', credit: { ru: 'фото: Виталий Бурдаков', en: 'ph: Vitaly Burdakov' } },
    { src: '/projects/sber-business-fest/3.jpg', credit: { ru: 'фото: Виталий Бурдаков', en: 'ph: Vitaly Burdakov' } },
    { src: '/projects/sber-business-fest/4.jpg', credit: { ru: 'фото: Георгий Лисицкий', en: 'ph: Georgy Lisitsky' } },
    { src: '/projects/sber-business-fest/5.jpg', credit: { ru: 'фото: Максим Писаревский', en: 'ph: Maxim Pisarevsky' } },
    { src: '/projects/sber-business-fest/6.jpg', credit: { ru: 'фото: Максим Писаревский', en: 'ph: Maxim Pisarevsky' } },
  ],
  partners: [
    { logo: '/logos/bsb.svg', name: 'Black Star Burger', url: '' },
    { logo: '/logos/2GIS.svg', name: '2GIS', url: 'https://2gis.ru' },
  ],
};