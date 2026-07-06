import type { Project } from '../types';

export const qualityOfLife: Project = {
  id: 'quality-of-life',
  slug: 'quality-of-life',
  top: true,
  thumbnail: '/projects/quality-of-life/thumb.jpg',
  cover: '/projects/quality-of-life/cover.jpg',
  title: { ru: 'Качество жизни', en: 'Quality of life' },
  partnerLogo: [{ src: '/logos/rbc.svg', width: 190, height: 51 }, { src: '/logos/tbank-private.svg', width: 319, height: 55 }],
  description: {
    ru: 'публичная программа о благополучии и инвестициях в себя: от физического здоровья до гармонии с окружающим пространством',
    en: 'Public Program on wellbeing as a strategy for modern life — from health and longevity to mental balance, personal capital and the spaces we live in',
  },
  stats: [
    {
      value: '600+',
      label: {
        ru: 'гостей и лидеров индустрии качества жизни',
        en: 'attendees and top leaders from the quality-of-life industry',
      },
      heightPx: 453,
    },
  ],
  cities: { ru: 'Москва', en: 'Moscow' },
  format: { ru: 'офлайн', en: 'offline' },
  year: '2026',
  task: {
    ru: 'Разработать и провести публичную офлайн-программу для проекта о комплексном благополучии человека «Качество жизни»',
    en: 'Program Development: Launch and host an offline public program for the "Quality of Life" project',
  },
  result: {
    ru: 'Публичная программа 8+ дискуссий, 4+ лекций, 1 питч-сессия и 3+ техники регуляции.\n\n«Качество жизни» получило пространство для открытого диалога о здоровье, красоте и гармонии в современном мире.\n\nРБК Wellbeing Review — презентация большого исследования жизни в России и стратегии повышения качества жизни от лидеров мнений',
    en: 'Public Program: Delivered 8+ panel discussions, 4+ lectures, a pitch session, and 3+ stress-regulation workshops\n\nPublic Dialogue: Created a live platform for the Quality of Life project, bringing together experts, entrepreneurs and audiences around health, longevity, mental balance, personal finance and everyday wellbeing\n\nMarket Insights: Presented the major RBC Wellbeing Review research on Russia\'s wellness market alongside quality-of-life strategies from top opinion leaders',
  },
  team: [
    {
      name: { ru: 'Евгения Волянская', en: 'Evgenia Volyanskaya' },
      role: {
        ru: 'бизнес-консультант, основатель проекта по изучению эволюции интеллекта, предприниматель и эмоциональный консультант',
        en: 'business consultant, entrepreneur, emotional intelligence consultant and founder of the intelligence evolution research project',
      },
    },
    {
      name: { ru: 'Александр Колмановский', en: 'Alexander Kolmanovsky' },
      role: {
        ru: 'психолог, кандидат биологических наук. Руководитель Центра социально-психологической реабилитации «Наша жизнь»',
        en: 'psychologist, PhD in Biology, Head of the "Nasha Zhizn" Social and Psychological Rehabilitation Center',
      },
    },
    {
      name: { ru: 'Айрат Багаутдинов', en: 'Airat Bagautdinov' },
      role: {
        ru: 'основатель компании «Глазами инженера», герой проекта «РБК Визионеры»',
        en: 'founder of "Glazami Inzhenera" and featured hero of the RBC Visionaries project',
      },
    },
  ],
  partners: [
    { logo: '/logos/tbank-private.svg', name: 'Private — премиальный сервис Т-Банка', url: 'https://www.tbank.ru/private', width: 202, height: 34 },
  ],
  gallery: [
    { src: '/projects/quality-of-life/1.jpg', credit: { ru: 'фото: Николай Казеев', en: 'ph: Nikolay Kazeev' } },
    { src: '/projects/quality-of-life/2.jpg', credit: { ru: 'фото: Николай Казеев', en: 'ph: Nikolay Kazeev' } },
    { src: '/projects/quality-of-life/3.jpg', credit: { ru: 'фото: Николай Казеев', en: 'ph: Nikolay Kazeev' } },
    { src: '/projects/quality-of-life/4.jpg', credit: { ru: 'фото: Николай Казеев', en: 'ph: Nikolay Kazeev' } },
    { src: '/projects/quality-of-life/5.jpg', credit: { ru: 'фото: Николай Казеев', en: 'ph: Nikolay Kazeev' } },
  ],
};