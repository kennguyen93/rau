export type NicheCategory = 'all' | 'supplements' | 'appliances' | 'tech' | 'physical' | 'grooming';

export interface LabScores {
  efficacyOrPerformance: number; // e.g. 9.8
  valueForMoney: number;         // e.g. 9.5
  buildOrIngredients: number;    // e.g. 9.9
  userSatisfaction: number;      // e.g. 9.7
  overall: number;               // calculated or weighted
}

export interface UserReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
  helpfulCount: number;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  category: NicheCategory;
  categoryLabelEn: string;
  categoryLabelVi: string;
  brand: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  originalPrice: number;
  salePrice: number;
  discountPercent: number;
  couponCode?: string;
  couponDiscount?: string;
  isEditorChoice?: boolean;
  isBestValue?: boolean;
  isTopRated?: boolean;
  isFlashDeal?: boolean;
  flashEndsInHours?: number;
  stockLeft?: number;
  imageUrl: string;
  galleryImages: string[];
  affiliateUrlAmazon: string;
  affiliateUrlOfficial: string;
  noAffiliateLink?: boolean;
  badgeText: string;
  badgeType: 'editor' | 'value' | 'deal' | 'lab';
  usShipping: string;
  guaranteeDays: number;
  madeInUsa?: boolean;
  labCertified: string[]; // e.g. ['NSF Certified', 'GMP Facility', 'USP Verified']
  quickSpecs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  labScores: LabScores;
  editorVerdict: string;
  whoShouldBuy: string[];
  whoShouldSkip: string[];
  detailedReview: string;
  verifiedReviews: UserReview[];
}

export interface CouponItem {
  id: string;
  code: string;
  discountText: string;
  storeName: string;
  productTarget: string;
  expiresText: string;
  verifiedToday: boolean;
  url: string;
}

export interface QuizAnswer {
  category?: NicheCategory;
  priority?: string;
  budget?: string;
}
