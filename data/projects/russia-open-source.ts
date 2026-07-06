import type { Project } from '../types';

export const russiaOpenSource: Project = {
  id: 'russia-open-source-summit',
  slug: 'russia-open-source-summit',
  top: false,
  thumbnail: '/projects/russia-open-source-summit/thumb.jpg',
  cover: '/projects/russia-open-source-summit/cover.jpg',
  title: { ru: 'Russia Open Source Summit', en: 'Russia Open Source Summit' },
  description: {
    ru: 'Серия офлайн-событий медиа-проекта «РБК Визионеры» о людях, которые формируют будущее бизнеса, технологий и культуры',
    en: 'A premier ecosystem showcase for the open-source community, centering on the future of code and open technologies.',
  },
  stats: [
    {
      value: '100+',
      label: {
        ru: 'спикеров из ведущих технологических компаний',
        en: 'speakers from leading tech corporations',
      },
      heightPx: 453,
    },
  ],
  cities: { ru: 'Москва', en: 'Moscow' },
  format: { ru: 'онлайн+офлайн', en: 'offline+online' },
  year: '2024',
  task: {
    ru: 'Собрать на одной площадке разработчиков, IT-компании, популяризаторов open source и GitHub-контрибьюторов.\n\nВыстроить предметный диалог бизнеса, государства и сообщества разработчиков о развитии open source в России',
    en: 'Ecosystem Showcase: Unite developers, tech corporations, and GitHub contributors in one venue\n\nStrategic Dialogue: Drive regional open-source growth through corporate-government-community alignment',
  },
  result: {
    ru: 'Разработали концепцию саммита и деловой программы, спроектировали децентрализованную экспертную сессию по 6 рабочим группам.\n\nСобрали на одной площадке ключевых игроков российского open source; по итогам работы подготовлены рекомендации по развитию open source для бизнеса, госструктур и IT-сообщества',
    en: 'Decentralized Framework: Designed the summit concept and led 6 specialized expert working groups\n\nActionable Roadmaps: United key open-source stakeholders to deliver strategic whitepapers for business',
  },
  partners: [
    { logo: '/logos/yandex.svg', name: 'Яндекс', url: 'https://yandex.ru', width: 216, height: 65 },
    { logo: '/logos/basealt.svg', name: 'Basealt', url: 'https://www.basealt.ru', width: 100, height: 75 },
    { logo: '/logos/bellsoft.svg', name: 'Bellsoft', url: 'https://bell-sw.com', width: 253, height: 41 },
    { logo: '/logos/postgrespro.svg', name: 'PostgresPro', url: 'https://postgrespro.ru', width: 375, height: 61 },
    { logo: '/logos/huawei.svg', name: 'Huawei', url: 'https://www.huawei.com', width: 74, height: 78 },
    { logo: '/logos/redsoft.svg', name: 'Редсофт', url: 'https://red-soft.ru', width: 196, height: 63 },
    { logo: '/logos/krok.svg', name: 'КРОК', url: 'https://www.croc.ru', width: 157, height: 42 },
  ],
  gallery: [
    { src: '/projects/russia-open-source-summit/1.jpg', credit: { ru: 'фото: dao team', en: 'ph: dao team' } },
    { src: '/projects/russia-open-source-summit/2.jpg', credit: { ru: 'фото: dao team', en: 'ph: dao team' } },
  ],
};