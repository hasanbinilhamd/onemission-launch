export interface HeroSlide {
  id: string;
  productName: string;
  color: string;
  collectionLabel: string;
  backgroundWord: string;
  image: string;
  alt: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'instagram' | 'tiktok' | 'youtube' | 'email';
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: 'shield' | 'performance' | 'quality';
}

export interface LaunchOffer {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface LaunchConfig {
  launchDate: string;
  hijriDate: string;
  gregorianDate: string;
  label: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  notifyCaption: string;
  notifyPlaceholder: string;
  contactEmail: string;
  headerTagline: string;
  canonicalUrl: string;
  seo: {
    title: string;
    description: string;
    image: string;
  };
  social: SocialLink[];
  features: FeatureItem[];
  launchOffers: LaunchOffer[];
  heroSlides: HeroSlide[];
}

const launchConfig: LaunchConfig = {
  launchDate: '2026-08-23T00:00:00+07:00',
  hijriDate: '1 Rabiul Awal 1448 H',
  gregorianDate: '23 Agustus 2026',
  label: 'LAUNCHING SOON',
  eyebrow: 'LAUNCHING ON',
  title: 'VALUES\nMATTER',
  subtitle: 'Pakaian olahraga muslim pria yang dirancang untuk performa terbaik tanpa melupakan nilai.',
  description: 'Performance essentials designed with purpose. Engineered for movement. Launching soon.',
  notifyCaption: 'Jadi yang pertama mendapatkan update dan penawaran eksklusif.',
  notifyPlaceholder: 'Masukkan email kamu',
  contactEmail: 'hello@onemissionclo.com',
  headerTagline: 'BUILT FOR PURPOSE',
  canonicalUrl: 'https://onemissionclo.com/',
  seo: {
    title: 'ONEMISSION — Values Matter',
    description: 'ONEMISSION is preparing premium sportswear built for purpose, performance, and values. Launching soon.',
    image: '/og-image.png',
  },
  social: [
    { label: 'Instagram', href: 'https://instagram.com/onemissionclo', icon: 'instagram' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@onemissionclo', icon: 'tiktok' },
    { label: 'YouTube', href: 'https://youtube.com/@onemissionclo', icon: 'youtube' },
  ],
  features: [
    { title: 'Aurat Friendly', description: 'Sesuai syariat', icon: 'shield' },
    { title: 'High Performance', description: 'Ringan & nyaman', icon: 'performance' },
    { title: 'Premium Quality', description: 'Tahan lama', icon: 'quality' },
  ],
  launchOffers: [
    {
      title: 'Exclusive Launch Offer',
      description: 'Diskon spesial & gratis ongkir untuk pembelian pertama',
      image: '/images/compression-legging.png',
      alt: 'Exclusive launch offer preview',
    },
    {
      title: 'Limited Drop',
      description: 'Koleksi perdana dalam jumlah terbatas',
      image: '/images/fabric-texture.png',
      alt: 'Limited fabric texture preview',
    },
    {
      title: 'Faith. Focus. Performance.',
      description: 'Lebih dari pakaian. Ini adalah pengingat tujuan.',
      image: '/images/package-box.png',
      alt: 'ONEMISSION package preview',
    },
  ],
  heroSlides: [
    {
      id: 'performance-legging-front',
      productName: 'Performance Legging',
      color: 'Black',
      collectionLabel: 'Values Performance Kit',
      backgroundWord: 'Values',
      image: '/images/compression-legging.png',
      alt: 'Black performance legging front view',
    },
    {
      id: 'running-tee',
      productName: 'Running Tee',
      color: 'Black',
      collectionLabel: 'Purpose Built Essentials',
      backgroundWord: 'Purpose',
      image: '/images/running-tee.png',
      alt: 'Minimal black running tee concept product',
    },
    {
      id: 'running-shorts',
      productName: 'Running Shorts',
      color: 'Black',
      collectionLabel: 'Discipline In Motion',
      backgroundWord: 'Movement',
      image: '/images/running-shorts.png',
      alt: 'Black technical running shorts concept product',
    },
  ],
};

export default launchConfig;
