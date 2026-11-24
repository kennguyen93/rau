import { NicheCategory, Product } from '../types';

export interface CategorySeoMeta {
  id: NicheCategory;
  slug: string;
  path: string;
  labelEn: string;
  labelVi: string;
  titleEn: string;
  titleVi: string;
  descriptionEn: string;
  descriptionVi: string;
  keywords: string;
}

export const SITE_URL = 'https://topvory.com';
export const SITE_NAME = 'Topvory.com';

export const CATEGORY_SEO_MAP: Record<NicheCategory, CategorySeoMeta> = {
  all: {
    id: 'all',
    slug: '',
    path: '/',
    labelEn: 'All Picks',
    labelVi: 'Tất Cả Sản Phẩm',
    titleEn: 'Topvory.com | Expert Tested US Products, Reviews & Verified Deals',
    titleVi: 'Topvory.com | Đánh Giá Sản Phẩm Mỹ Chuẩn Lab & Săn Deal Chính Hãng',
    descriptionEn:
      'Topvory.com - Independent lab tests, buyer guides, and verified US discounts on top-rated dietary supplements, tech gadgets, cervical pillows, and grooming.',
    descriptionVi:
      'Topvory.com - Kiểm nghiệm độc lập tại Mỹ, đánh giá chuyên sâu và tổng hợp ưu đãi chính hãng cho thực phẩm chức năng, công nghệ, gối công thái học và grooming.',
    keywords: 'Topvory, US product reviews, lab tested supplements, tech gadgets, cervical pillows, men grooming deals',
  },
  supplements: {
    id: 'supplements',
    slug: 'supplements',
    path: '/supplements',
    labelEn: 'Dietary Supplements',
    labelVi: 'Thực Phẩm Chức Năng',
    titleEn: 'Best Dietary Supplements & Nootropics (Lab Tested) | Topvory.com',
    titleVi: 'Thực Phẩm Chức Năng & Nootropics Chuẩn cGMP Mỹ | Topvory.com',
    descriptionEn:
      'Compare cGMP & FDA-registered dietary supplements and brain nootropics including NeuroQ, Alpha Brain, Neuro Plus, and Bacopa Monnieri with lab potency scores.',
    descriptionVi:
      'So sánh thực phẩm chức năng và viên uống bổ não chuẩn cGMP tại Mỹ như NeuroQ, ONNIT Alpha Brain, Neuro Plus, Bacopa Monnieri kèm điểm kiểm nghiệm độc lập.',
    keywords: 'dietary supplements, nootropics, brain health, NeuroQ, Alpha Brain, Bacopa Monnieri, cGMP supplements',
  },
  tech: {
    id: 'tech',
    slug: 'tech-gadgets',
    path: '/tech-gadgets',
    labelEn: 'Tech & Gadgets',
    labelVi: 'Đồ Công Nghệ',
    titleEn: 'Top Tested Tech, ANC Earbuds & Audio Gadgets | Topvory.com',
    titleVi: 'Đồ Công Nghệ & Tai Nghe Chống Ồn ANC Kiểm Định | Topvory.com',
    descriptionEn:
      'Lab-benchmarked wireless ANC earbuds and audio gear including Soundcore Liberty 5 Pro, TOZO NC20 Pro, and beyerdynamic Aventho 100 with verified deals.',
    descriptionVi:
      'Đánh giá tai nghe không dây chống ồn ANC và thiết bị công nghệ nổi bật: Soundcore Liberty 5 Pro, TOZO NC20 Pro, beyerdynamic Aventho 100 với ưu đãi xác thực.',
    keywords: 'tech gadgets, wireless earbuds, ANC headphones, Soundcore Liberty 5 Pro, TOZO NC20 Pro, beyerdynamic Aventho',
  },
  physical: {
    id: 'physical',
    slug: 'cervical-pillows',
    path: '/cervical-pillows',
    labelEn: 'Cervical Pillows',
    labelVi: 'Gối Định Hình Cổ',
    titleEn: 'Best Orthopedic Cervical Pillows for Neck Pain Relief | Topvory.com',
    titleVi: 'Gối Định Hình Cổ Công Thái Học Giảm Đau Vai Gáy | Topvory.com',
    descriptionEn:
      'Chiropractor-evaluated orthopedic contour memory foam cervical pillows including UTTU, butterfly cooling pillows, and sleep-doctor approved neck support.',
    descriptionVi:
      'Đánh giá các mẫu gối định hình cổ cột sống CertiPUR-US giảm đau mỏi vai gáy: gối UTTU điều chỉnh độ cao, gối cánh bướm làm mát và gối chuẩn bác sĩ giấc ngủ.',
    keywords: 'cervical pillow, orthopedic neck pillow, memory foam contour pillow, neck pain relief pillow, UTTU pillow',
  },
  grooming: {
    id: 'grooming',
    slug: 'mens-grooming',
    path: '/mens-grooming',
    labelEn: "Men's Luxury Grooming",
    labelVi: 'Chăm Sóc Râu & Grooming',
    titleEn: "Men's Luxury Grooming & The Beard Struggle Deals | Topvory.com",
    titleVi: "Chăm Sóc Râu & Grooming Nam Giới The Beard Struggle | Topvory.com",
    descriptionEn:
      'Independent lab reviews and exclusive promo codes for The Beard Struggle Carbon X Pro straightener, Voxtr beard growth kit, and organic beard care.',
    descriptionVi:
      'Đánh giá độc lập và mã giảm giá độc quyền cho The Beard Struggle: lược nhiệt Carbon X Pro, bộ kích mọc râu Voxtr và chăm sóc râu cao cấp cho phái mạnh.',
    keywords: 'mens luxury grooming, The Beard Struggle, Carbon X Pro beard straightener, Voxtr beard growth kit, beard care',
  },
  appliances: {
    id: 'appliances',
    slug: 'appliances',
    path: '/appliances',
    labelEn: 'Smart Appliances',
    labelVi: 'Gia Dụng Thông Minh',
    titleEn: 'Smart Home Appliances & Lab Benchmarks | Topvory.com',
    titleVi: 'Thiết Bị Gia Dụng Thông Minh Kiểm Định | Topvory.com',
    descriptionEn:
      'Independent performance benchmarks and verified US pricing on top-rated smart home appliances.',
    descriptionVi:
      'Đánh giá hiệu năng độc lập và giá ưu đãi cho các thiết bị gia dụng thông minh tại Mỹ.',
    keywords: 'smart appliances, home living, Topvory',
  },
};

export const HEADER_NAV_CATEGORIES: NicheCategory[] = [
  'all',
  'supplements',
  'tech',
  'physical',
  'grooming',
];

export function getCategoryPath(category: NicheCategory): string {
  return CATEGORY_SEO_MAP[category]?.path || '/';
}

export function getCategoryFromPath(pathname: string): NicheCategory {
  const normalized = pathname.replace(/\/+$/, '').toLowerCase() || '/';
  if (normalized === '/' || normalized === '/index.html') return 'all';
  if (normalized === '/supplements' || normalized === '/category/supplements') return 'supplements';
  if (normalized === '/tech-gadgets' || normalized === '/tech' || normalized === '/category/tech') return 'tech';
  if (normalized === '/cervical-pillows' || normalized === '/physical' || normalized === '/category/physical') return 'physical';
  if (normalized === '/mens-grooming' || normalized === '/grooming' || normalized === '/category/grooming') return 'grooming';
  return 'all';
}

function upsertMetaTag(attrName: 'name' | 'property', attrValue: string, content: string): void {
  let el = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonicalLink(href: string): void {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function updateDocumentSeo(
  category: NicheCategory,
  lang: 'en' | 'vi',
  visibleProducts: Product[],
  selectedProduct?: Product | null
): void {
  if (typeof document === 'undefined') return;

  const meta = CATEGORY_SEO_MAP[category] || CATEGORY_SEO_MAP.all;
  const canonicalPath = selectedProduct ? `/product/${selectedProduct.id}` : meta.path;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  const title = selectedProduct
    ? `${selectedProduct.shortName} Review & Lab Score (${selectedProduct.labScores.overall}/10) | ${SITE_NAME}`
    : lang === 'en'
      ? meta.titleEn
      : meta.titleVi;

  const description = selectedProduct
    ? `${selectedProduct.name} — ${selectedProduct.tagline}. Lab Score ${selectedProduct.labScores.overall}/10 across ${selectedProduct.reviewCount.toLocaleString()} reviews.`
    : lang === 'en'
      ? meta.descriptionEn
      : meta.descriptionVi;

  document.title = title;
  upsertCanonicalLink(canonicalUrl);

  upsertMetaTag('name', 'description', description);
  upsertMetaTag('name', 'keywords', meta.keywords);
  upsertMetaTag('property', 'og:url', canonicalUrl);
  upsertMetaTag('property', 'og:title', title);
  upsertMetaTag('property', 'og:description', description);
  upsertMetaTag('name', 'twitter:title', title);
  upsertMetaTag('name', 'twitter:description', description);

  const navElements = HEADER_NAV_CATEGORIES.map((catId, index) => {
    const item = CATEGORY_SEO_MAP[catId];
    return {
      '@type': 'SiteNavigationElement',
      position: index + 1,
      name: item.labelEn,
      description: item.descriptionEn,
      url: `${SITE_URL}${item.path}`,
    };
  });

  const breadcrumbItems: Record<string, unknown>[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SITE_URL}/`,
    },
  ];

  if (category !== 'all') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: meta.labelEn,
      item: `${SITE_URL}${meta.path}`,
    });
  }

  if (selectedProduct) {
    const productCatMeta = CATEGORY_SEO_MAP[selectedProduct.category] || meta;
    if (category === 'all' && selectedProduct.category !== 'all') {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: productCatMeta.labelEn,
        item: `${SITE_URL}${productCatMeta.path}`,
      });
    }
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: breadcrumbItems.length + 1,
      name: selectedProduct.shortName,
      item: `${SITE_URL}/product/${selectedProduct.id}`,
    });
  }

  const itemListElements = visibleProducts.slice(0, 12).map((p, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    item: {
      '@type': 'Product',
      name: p.name,
      brand: {
        '@type': 'Brand',
        name: p.brand,
      },
      description: p.tagline,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: p.rating,
        reviewCount: p.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: p.salePrice.toFixed(2),
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}${getCategoryPath(p.category)}`,
      },
    },
  }));

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      ...navElements,
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems,
      },
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: visibleProducts.length,
          itemListElement: itemListElements,
        },
      },
    ],
  };

  let scriptEl = document.getElementById('dynamic-seo-jsonld') as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'dynamic-seo-jsonld';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }
  scriptEl.textContent = JSON.stringify(structuredData);
}
