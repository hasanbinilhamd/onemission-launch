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
  launchDate: '2026-08-14T00:00:00+07:00',
  hijriDate: '1 Rabiul Awal 1448 H',
  gregorianDate: '14 Agustus 2026',
  label: 'LAUNCHING SOON',
  eyebrow: 'LAUNCHING ON',
  // title: 'VALUES\nMATTER',
  title: `so let's \nbring back\nthe value`,
  subtitle: 'Pakaian olahraga muslim pria yang dirancang untuk performa terbaik tanpa melupakan nilai.',
  description: 'Performance essentials designed with purpose. Engineered for movement. Launching soon.',
  notifyCaption: 'Released in limited quantities. Make sure you\'re first to know.',
  notifyPlaceholder: 'Masukkan nomor wa kamu',
  contactEmail: 'onemissionid@gmail.com',
  headerTagline: 'Valuse Matter',
  canonicalUrl: 'https://onemissionclo.com/',
  seo: {
    title: 'ONEMISSION — Values Matter',
    description: 'ONEMISSION is preparing premium sportswear built for purpose, performance, and values. Launching soon.',
    image: '/og-image.png',
  },
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/onemissionclo/', icon: 'instagram' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@hasanbinilhamd', icon: 'tiktok' },
    { label: 'YouTube', href: 'https://www.youtube.com/@onemissionworld', icon: 'youtube' },
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
      image: 'https://ik.imagekit.io/edyl3oplm/Onemission/Model/FARHAN_FIXhalf_.png?updatedAt=1785815275482',
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
      image: 'https://ik.imagekit.io/edyl3oplm/Onemission/Logos/LOGO_ONEMISSION_3D.png?updatedAt=1785488961848',
      alt: 'ONEMISSION package preview',
    },
  ],
  heroSlides: [
    {
      id: 'performance-legging-front',
      productName: 'Prosport Legging',
      color: 'Black',
      collectionLabel: 'Values Performance Kit',
      backgroundWord: 'Values',
      // image: 'https://ik.imagekit.io/edyl3oplm/Onemission/Products/prosport-legging.svg?updatedAt=1785488941936',
      image: 'https://ik.imagekit.io/edyl3oplm/Onemission/Model/3%20per%204%20Basic/aszzz.JPG?updatedAt=1783405188937',
      alt: 'Black performance legging front view',
    },
    {
      id: 'running-tee',
      productName: 'Udel Off Legging',
      color: 'Black',
      collectionLabel: 'Purpose Built Essentials',
      backgroundWord: 'Purpose',
      // image: 'https://ik.imagekit.io/edyl3oplm/Onemission/Products/udel-off.svg?updatedAt=1785488941954',
      image: 'https://ik.imagekit.io/edyl3oplm/Onemission/Model/Pro%20Sport/CES_PRO_SPORT_LEGGING.png?updatedAt=1785830667347',
      alt: 'Minimal black running tee concept product',
    },
    {
      id: 'running-shorts',
      productName: 'Basic 3/4 Legging',
      color: 'Black',
      collectionLabel: 'Discipline In Motion',
      backgroundWord: 'Movement',
      image: 'https://ik.imagekit.io/edyl3oplm/Onemission/Products/3per4-legging.svg?updatedAt=1785488941923',
      alt: 'Black technical running shorts concept product',
    },
  ],
};

export default launchConfig;
