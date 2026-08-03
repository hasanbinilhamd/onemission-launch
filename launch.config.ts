export interface HeroSlide {
  id: string;
  productName: string;
  collectionLabel: string;
  backgroundWord: string;
  image: string;
  alt: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface LaunchConfig {
  launchDate: string;
  hijriDate: string;
  gregorianDate: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  notifyPlaceholder: string;
  contactEmail: string;
  canonicalUrl: string;
  seo: {
    title: string;
    description: string;
    image: string;
  };
  social: SocialLink[];
  heroSlides: HeroSlide[];
}

const launchConfig: LaunchConfig = {
  launchDate: '2026-08-23T00:00:00+07:00',
  hijriDate: '1 Rabiul Awal 1448 H',
  gregorianDate: '23 August 2026',
  label: 'COMING SOON',
  title: 'THE MISSION BEGINS.',
  subtitle: 'Performance essentials designed with purpose.',
  description: 'Engineered for movement. Built with discipline. ONEMISSION prepares a new uniform for those who train with intention.',
  notifyPlaceholder: 'Enter your email',
  contactEmail: 'hello@onemissionclo.com',
  canonicalUrl: 'https://onemissionclo.com/',
  seo: {
    title: 'ONEMISSION — Launching Soon',
    description: 'ONEMISSION is preparing premium performance essentials designed with purpose. Launching soon.',
    image: '/og-image.png',
  },
  social: [
    { label: 'Instagram', href: 'https://instagram.com/onemissionclo' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@onemissionclo' },
    { label: 'Email', href: 'mailto:hello@onemissionclo.com' },
  ],
  heroSlides: [
    {
      id: 'compression-legging',
      productName: 'Compression Legging',
      collectionLabel: 'Core Movement System',
      backgroundWord: 'Performance',
      image: '/images/compression-legging.png',
      alt: 'Black premium compression legging concept product',
    },
    {
      id: 'running-tee',
      productName: 'Running Tee',
      collectionLabel: 'Purpose Built Essentials',
      backgroundWord: 'Purpose',
      image: '/images/running-tee.png',
      alt: 'Minimal black running tee concept product',
    },
    {
      id: 'running-shorts',
      productName: 'Running Shorts',
      collectionLabel: 'Discipline In Motion',
      backgroundWord: 'Movement',
      image: '/images/running-shorts.png',
      alt: 'Black technical running shorts concept product',
    },
    {
      id: 'training-cap',
      productName: 'Training Cap',
      collectionLabel: 'Focused Daily Gear',
      backgroundWord: 'Discipline',
      image: '/images/training-cap.png',
      alt: 'Black training cap concept product',
    },
  ],
};

export default launchConfig;
