export interface NavItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

export interface ModalityCard {
  id: string;
  title: string;
  description: string;
  href: string;
  imagePlaceholder: string;
}

export interface AnimalStyle {
  id: string;
  name: string;
  chineseName?: string;
  description: string;
  imagePlaceholder: string;
  highlights?: string[];
}

export interface WeaponItem {
  id: string;
  name: string;
  category?: string;
  imagePlaceholder: string;
}

export interface SubpageContent {
  id: string;
  title: string;
  subtitle?: string;
  heroImagePlaceholder: string;
  metaDescription: string;
  sections: {
    title?: string;
    paragraphs: string[];
    imagePlaceholder?: string;
    list?: string[];
  }[];
}
