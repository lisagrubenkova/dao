import type { Project } from '../types';

export const cipr: Project = {
  id: 'cipr',
  slug: 'cipr',
  top: false,
  thumbnail: '/projects/cipr/thumb.jpg',
  cover: '/projects/cipr/cover.jpg',
  title: { ru: 'ЦИПР', en: 'Digital Industry of Industrial Russia' },
  partnerLogo: [{ src: '/logos/cipr-darkside.svg', width: 643, height: 89 }],
  description: {
    ru: 'Форум о цифровой экономике и промышленной трансформации для государства и бизнеса',
    en: 'The definitive B2B forum focusing on the digital economy and industrial transformation',
  },
  stats: [
    { value: '6000', label: { ru: 'участников', en: 'attendees' }, heightPx: 453 },
    { value: '500+', label: { ru: 'спикеров', en: 'speakers' }, heightPx: 709 },
    { value: '70+', label: { ru: 'сессий деловой программы', en: 'programming sessions' }, heightPx: 539 },
    {
      value: '2',
      label: {
        ru: 'онлайн-города проведения: Казань и Нижний Новгород',
        en: '2 host cities: Kazan & Nizhny Novgorod',
      },
      heightPx: 453,
    },
  ],
  cities: { ru: 'Казань+Н.Новгород', en: 'Kazan+N.Novgorod' },
  format: { ru: 'онлайн+офлайн', en: 'online+offline' },
  year: '2024',
  task: {
    ru: 'Спродюсировать деловую программу, охватывающую широкую палитру тем, посвящённых цифровой трансформации экономики',
    en: 'Digital Transformation: Produce a comprehensive business programming framework focused on economic digitalization',
  },
  result: {
    ru: 'Программа включала разделы по ключевым индустриям: от сельского хозяйства, IT, телекоммуникаций, туризма, медиа и креативных индустрий до кибербезопасности и защиты критической инфраструктуры.\n\nСборка под ключ отдельного трека «ЦИПР_Инновации»: от скаутинга стартапов, подбора и приглашения экспертов жюри до непосредственного питчинга',
    en: 'Cross-Sector Tracks: Developed specialized programming across key industries (IT, Telecom, Agriculture, Media, Tourism, and Cybersecurity)\n\nEnd-to-End Production: Managed the "Digital Industry of Industrial Russia_Innovations" track from startup scouting to live pitches',
  },
  gallery: [
    { src: '/projects/cipr/1.jpg', credit: { ru: 'фото: dao team', en: 'ph: dao team' } },
    { src: '/projects/cipr/2.jpg', credit: { ru: 'фото: dao team', en: 'ph: dao team' } },
    { src: '/projects/cipr/3.jpg', credit: { ru: 'фото: dao team', en: 'ph: dao team' } },
    { src: '/projects/cipr/4.jpg', credit: { ru: 'фото: dao team', en: 'ph: dao team' } },
  ],
};