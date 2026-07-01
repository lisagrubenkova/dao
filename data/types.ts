export type LocalizedText = { ru: string; en: string };

export type ProjectStat = {
  value: string;
  label: LocalizedText;
};

export type TeamMember = {
  name: LocalizedText;
  role: LocalizedText;
};

export type GalleryPhoto = {
  src: string;
  credit: LocalizedText;
};

export type Partner = {
  logo: string;
  url?: string;
  name: string;
};

export type Project = {
  id: string;
  slug: string;
  top: boolean;
  thumbnail: string;
  cover: string;
  title: LocalizedText;
  coverSubtitle?: LocalizedText;
  partnerLogo?: string;
  description?: LocalizedText;
  stats: ProjectStat[];
  cities: LocalizedText;
  format: LocalizedText;
  year: string;
  task: LocalizedText;
  result: LocalizedText;
  team?: TeamMember[];
  partners?: Partner[];
  gallery: GalleryPhoto[];
};