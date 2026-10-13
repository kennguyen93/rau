import React from 'react';
import { 
  Star, 
  Check, 
  ExternalLink, 
  FileText, 
  Scale, 
  Flame, 
  Truck, 
  ShieldCheck, 
  Tag, 
  Clock, 
  Award, 
  Copy,
  Sparkles
} from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (p: Product) => void;
  onOpenOutbound: (p: Product, target: 'amazon' | 'official') => void;
  isInCompare: boolean;
  onToggleCompare: (p: Product) => void;
  lang: 'en' | 'vi';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetails,
  onOpenOutbound,
  isInCompare,
  onToggleCompare,
  lang
}) => {
  const savingsAmount = (product.originalPrice - product.salePrice).toFixed(2);

  // Badge styling
  const getBadgeStyle = () => {
    switch (product.badgeType) {
      case 'editor':
        return 'bg-gradient-to-r from-blue-700 to-indigo-700 text-white border-blue-500';
      case 'value':
        return 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-emerald-500';
      case 'deal':
        return 'bg-gradient-to-r from-amber-600 to-red-600 text-white border-amber-500 animate-pulse';
      case 'lab':
      default:
        return 'bg-gradient-to-r from-purple-700 to-indigo-700 text-white border-purple-500';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group relative">
      
      {/* TOP RANK / BADGE BANNER */}
      <div className="relative">
        <div className={`px-3.5 py-1.5 text-xs font-black uppercase tracking-wider flex items-center justify-between border-b ${getBadgeStyle()}`}>
          <div className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span>{product.badgeText}</span>
          </div>
          <span className="text-[10px] opacity-90 font-mono tracking-tight font-bold">
            LAB SCORE: {product.labScores.overall}/10
          </span>
        </div>

        {/* IMAGE & QUICK SPECS SECTION */}
        <div className="relative bg-slate-50 p-4 border-b border-slate-100 flex items-center justify-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-52 object-contain rounded-lg mix-blend-multiply group-hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => onOpenDetails(product)}
            loading="lazy"
          />

          {/* FLASH DEAL / STOCK URGENCY PILL */}
          {product.isFlashDeal && (
            <div className="absolute top-3 left-3 bg-red-600/95 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
              <Flame className="w-3 h-3 text-amber-300 animate-bounce" />
              <span>{lang === 'en' ? `Flash Sale: -${product.discountPercent}%` : `Deal Sốc: -${product.discountPercent}%`}</span>
            </div>
          )}

          {/* STOCK BADGE */}
          {product.stockLeft && product.stockLeft < 20 && (
            <div className="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur-xs text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{lang === 'en' ? `Only ${product.stockLeft} Left` : `Chỉ còn ${product.stockLeft} suất`}</span>
            </div>
          )}

          {/* LAB CERTIFIED TAG */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
            {product.labCertified.slice(0, 1).map((cert, i) => (
              <span key={i} className="bg-white/95 text-slate-800 text-[10px] font-extrabold px-2 py-0.5 rounded shadow-xs border border-slate-200">
                ✓ {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT BODY */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        
        <div>
          {/* CATEGORY & BRAND */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-semibold text-blue-600 uppercase tracking-wider text-[11px]">
              {lang === 'en' ? product.categoryLabelEn : product.categoryLabelVi}
            </span>
            <span className="text-slate-400 font-medium">By {product.brand}</span>
          </div>

          {/* PRODUCT TITLE */}
          <h3 
            onClick={() => onOpenDetails(product)}
            className="font-heading font-bold text-slate-900 text-base leading-snug hover:text-blue-600 transition-colors cursor-pointer line-clamp-2"
          >
            {product.name}
          </h3>

          {/* REVIEWS & STAR RATING */}
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-800">{product.rating}</span>
            <span className="text-slate-400 text-xs">({product.reviewCount.toLocaleString()} {lang === 'en' ? 'US Reviews' : 'Đánh giá'})</span>
          </div>

          {/* PRICE ANCHORING & SAVINGS */}
          <div className="mt-3.5 p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-baseline justify-between">
            <div>
              <div className="text-[11px] text-slate-500 font-medium">{lang === 'en' ? 'Today\'s Lowest Price:' : 'Giá Deal Hôm Nay:'}</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-950 font-heading">${product.salePrice.toFixed(2)}</span>
                <span className="text-xs text-slate-400 line-through font-medium">${product.originalPrice.toFixed(2)}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block bg-emerald-600 text-white text-[11px] font-black px-2 py-0.5 rounded-md shadow-xs">
                {lang === 'en' ? `SAVE $${savingsAmount}` : `TIẾT KIỆM $${savingsAmount}`}
              </span>
              <div className="text-[10px] text-emerald-700 font-bold mt-0.5">
                ({product.discountPercent}% OFF)
              </div>
            </div>
          </div>

          {/* COUPON CODE BOX IF PRESENT */}
          {product.couponCode && (
            <div className="mt-2.5 flex items-center justify-between bg-dashed border border-blue-300 bg-blue-50/70 rounded-lg px-2.5 py-1.5 text-xs text-blue-900">
              <div className="flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="font-semibold">{product.couponDiscount || 'Extra Discount'}</span>
              </div>
              <span className="font-mono font-bold bg-white px-2 py-0.5 rounded border border-blue-200 text-blue-700">
                {product.couponCode}
              </span>
            </div>
          )}

          {/* KEY PROS HIGHLIGHTS */}
          <div className="mt-3.5 space-y-1.5 border-t border-slate-100 pt-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {lang === 'en' ? 'Why Our US Editors Recommend It:' : 'Điểm Nổi Bật Được Đánh Giá Cao:'}
            </div>
            {product.pros.slice(0, 2).map((pro, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700 leading-tight">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{pro}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ACTION BUTTONS */}
        <div className="mt-5 pt-3 border-t border-slate-100 space-y-2">
          
          {/* PRIMARY HIGH-CONVERTING BUY BUTTON */}
          <button
            onClick={() => onOpenOutbound(product, 'amazon')}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer animate-pulse-glow"
          >
            <span>{lang === 'en' ? 'Claim Deal on Amazon US' : 'Mua Ngay Trên Amazon US'}</span>
            <ExternalLink className="w-4 h-4 text-slate-950" />
          </button>

          {/* SECONDARY OFFICIAL STORE BUTTON & READ REVIEW */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onOpenOutbound(product, 'official')}
              className="py-2 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-[11px] transition flex items-center justify-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{lang === 'en' ? 'Official Site Deal' : 'Trang Chủ Hãng'}</span>
            </button>

            <button
              onClick={() => onOpenDetails(product)}
              className="py-2 px-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[11px] transition flex items-center justify-center gap-1 cursor-pointer"
            >
              <FileText className="w-3 h-3 text-slate-600" />
              <span>{lang === 'en' ? 'Full Lab Review' : 'Đọc Review'}</span>
            </button>
          </div>

          {/* COMPARE TOGGLE & TRUST SEAL ROW */}
          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
            <button
              onClick={() => onToggleCompare(product)}
              className={`flex items-center gap-1 font-semibold transition cursor-pointer ${
                isInCompare ? 'text-blue-600 font-bold' : 'hover:text-slate-800'
              }`}
            >
              <Scale className="w-3 h-3" />
              <span>{isInCompare ? (lang === 'en' ? '✓ In Compare' : '✓ Đã Thêm') : (lang === 'en' ? '+ Compare' : '+ So Sánh')}</span>
            </button>

            <span className="flex items-center gap-1 text-slate-500">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>{product.guaranteeDays}D {lang === 'en' ? 'Money Back' : 'Bảo Hiểm'}</span>
            </span>

            <span className="flex items-center gap-1 text-slate-500">
              <Truck className="w-3 h-3 text-blue-600" />
              <span>{lang === 'en' ? 'Fast 2-Day' : 'Giao 2 Ngày'}</span>
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};
