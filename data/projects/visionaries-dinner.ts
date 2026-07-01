import type { Project } from '../types';

export const visionariesDinner: Project = {
  id: 'visionaries-dinner',
  slug: 'visionaries-dinner',
  top: true,
  thumbnail: '/projects/visionaries-dinner/thumb.jpg',
  cover: '/projects/visionaries-dinner/cover.jpg',
  title: {
    ru: 'Ужин визионеров',
    en: 'RBC Visionaries',
  },
  coverSubtitle: {
    ru: 'Вечер для героев проекта',
    en: 'Networking Event for the "RBC Visionaries" project community',
  },
  partnerLogo: '/logos/rbc.svg',
  stats: [
    {
      value: '150+',
      label: {
        ru: 'участников проекта "Визионеры"',
        en: 'the "RBC Visionaries" project participants',
      },
    },
  ],
  cities: { ru: 'Москва', en: 'Moscow' },
  format: { ru: 'офлайн', en: 'offline' },
  year: '2026',
  task: {
    ru: 'Разработать и провести нетворкинг-вечер для участников проекта "Визионеры"',
    en: 'Networking Event: Design and host a networking evening for the "RBC Visionaries" project community',
  },
  result: {
    ru: 'Ужин в ресторане "Турандот" с элементами альтернативной комедии и иммерсивного нетворкинга помогли впервые в оффлайне познакомить и объединить участников проекта "Визионеры".\n\nСоздан "Дневник Визионера" — коллективный манифест, объединивший инсайты, рекомендации и ключевые смыслы от участников проекта',
    en: 'Offline Premiere: Hosted the first-ever offline gathering at Turandot Restaurant, uniting the community through immersive networking and alternative comedy \n\nKnowledge Product: Developed the "Visionary’s Diary" — a collective manifesto distilling shared insights, recommendations, and key philosophies from project heroes',
  },
  team: [
    {
      name: { ru: 'Артем Филатов', en: 'Artem Filatov' },
      role: {
        ru: 'художник, куратор, основатель и руководитель студии «Тихая»',
        en: 'artist & curator, founder & Head of "Tikhaya" Studio',
      },
    },
    {
      name: { ru: 'Айрат Багаутдинов', en: 'Ayrat Bagautdinov' },
      role: {
        ru: 'основатель компании «Глазами инженера», герой проекта «РБК Визионеры»',
        en: 'founder of "Glazami Inzhenera" and featured hero of the RBC Visionaries project',
      },
    },
    {
      name: { ru: 'Ника Тарасевич', en: 'Nika Tarasevich' },
      role: { ru: 'приглашенная комикесса, ведущая вечера', en: 'guest comedian, host of the evening' },
    },
    {
      name: { ru: 'Миша Кострецов', en: 'Misha Kostretsov' },
      role: { ru: 'приглашенный комик, артист', en: 'guest comedian, performing artist' },
    },
  ],
  gallery: [
    { src: '/projects/visionaries-dinner/1.jpg', credit: { ru: 'фото: Николай Казеев', en: 'ph: Nikolay Kazeev' } },
    { src: '/projects/visionaries-dinner/2.jpg', credit: { ru: 'фото: Николай Казеев', en: 'ph: Nikolay Kazeev' } },
    { src: '/projects/visionaries-dinner/3.jpg', credit: { ru: 'фото: Николай Казеев', en: 'ph: Nikolay Kazeev' } },
    { src: '/projects/visionaries-dinner/4.jpg', credit: { ru: 'фото: Николай Казеев', en: 'ph: Nikolay Kazeev' } },
  ],
};