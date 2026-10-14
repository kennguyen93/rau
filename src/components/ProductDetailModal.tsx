import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Check, 
  AlertCircle, 
  ExternalLink, 
  Truck, 
  ShieldCheck, 
  Award, 
  Copy, 
  CheckCircle2, 
  Sparkles,
  Tag,
  ThumbsUp,
  FlaskConical,
  Flame
} from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenOutbound: (p: Product, target: 'amazon' | 'official') => void;
  lang: 'en' | 'vi';
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenOutbound,
  lang
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.imageUrl);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    if (product.couponCode) {
      navigator.clipboard.writeText(product.couponCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    }
  };

  const savingsAmount = (product.originalPrice - product.salePrice).toFixed(2);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
      <div 
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* TOP STATUS BAR */}
        <div className="bg-slate-900 text-white px-6 py-2.5 rounded-t-2xl flex flex-wrap items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-emerald-400">
              {lang === 'en' ? 'Verified US Editorial Lab Test Report' : 'Báo Cáo Kiểm Định Phòng Lab Độc Lập Mỹ'}
            </span>
          </div>
          <span className="text-slate-400 text-[11px]">
            {lang === 'en' ? 'Updated for October 2026' : 'Cập nhật tháng 10/2026'}
          </span>
        </div>

        {/* MODAL BODY */}
        <div className="p-5 sm:p-8 space-y-8">
          
          {/* HEADER & IMAGE GALLERY */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            {/* LEFT: GALLERY */}
            <div className="md:col-span-5 space-y-3">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-center h-64">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="max-h-56 max-w-full object-contain mix-blend-multiply"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80';
                  }}
                />
              </div>

              {/* THUMBNAILS */}
              <div className="flex gap-2 overflow-x-auto">
                {product.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-16 rounded-lg border-2 p-1 bg-slate-50 shrink-0 transition cursor-pointer ${
                      activeImage === img ? 'border-blue-600 ring-2 ring-blue-300' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt="thumb" 
                      className="w-full h-full object-contain mix-blend-multiply" 
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80';
                      }}
                    />
                  </button>
                ))}
              </div>

              {/* LAB CERTIFIED BADGES */}
              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1.5">
                <div className="text-[11px] font-bold text-blue-900 flex items-center gap-1.5">
                  <FlaskConical className="w-3.5 h-3.5 text-blue-600" />
                  <span>{lang === 'en' ? 'Quality Certifications:' : 'Chứng Nhận Chất Lượng Quốc Tế:'}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {product.labCertified.map((cert, idx) => (
                    <span key={idx} className="bg-white text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs border border-blue-100">
                      ✓ {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: OVERVIEW & BUY BOX */}
            <div className="md:col-span-7 space-y-4">
              <div className="space-y-1">
                <div className="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-800 font-extrabold text-[11px] rounded uppercase tracking-wider">
                  {product.badgeText}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 leading-tight">
                  {product.name}
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  {product.tagline}
                </p>
              </div>

              {/* RATING */}
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-black text-sm text-slate-900">{product.rating} / 5.0</span>
                <span className="text-slate-400 text-xs">({product.reviewCount.toLocaleString()} {lang === 'en' ? 'verified US purchases' : 'người mua tại Mỹ'})</span>
              </div>

              {/* PRICE ANCHOR BOX */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-medium text-slate-600">
                    {lang === 'en' ? 'Special US Promotion Price:' : 'Giá Khuyến Mãi Độc Quyền:'}
                  </div>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-3xl font-black text-slate-950 font-heading">${product.salePrice.toFixed(2)}</span>
                    <span className="text-sm text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
                    <span className="bg-emerald-600 text-white font-black text-xs px-2 py-0.5 rounded">
                      -{product.discountPercent}% OFF
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-bold text-emerald-700">
                    {lang === 'en' ? `You Save $${savingsAmount}` : `Tiết Kiệm $${savingsAmount}`}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {lang === 'en' ? 'Lowest price in 90 days' : 'Giá thấp nhất 90 ngày qua'}
                  </div>
                </div>
              </div>

              {/* PROMO CODE CLIP */}
              {product.couponCode && (
                <div className="bg-white border-2 border-dashed border-blue-400 rounded-xl p-3 flex items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{product.couponDiscount}</div>
                      <div className="text-[11px] text-slate-500 font-mono font-bold text-blue-700">CODE: {product.couponCode}</div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
                  >
                    {copiedCode ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? (lang === 'en' ? 'Copied!' : 'Đã Sao Chép!') : (lang === 'en' ? 'Copy Code' : 'Chép Mã')}</span>
                  </button>
                </div>
              )}

              {/* PRIMARY HIGH-CONVERTING CTA BUTTONS */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => onOpenOutbound(product, (product.category === 'grooming' || product.brand === 'The Beard Struggle') ? 'official' : 'amazon')}
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black text-sm sm:text-base shadow-lg hover:shadow-xl transition transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer animate-pulse-glow"
                >
                  <span>
                    {(product.category === 'grooming' || product.brand === 'The Beard Struggle')
                      ? (lang === 'en' ? 'Claim Deal at TheBeardStruggle.com 🛒' : 'Truy Cập TheBeardStruggle.com 🛒')
                      : (lang === 'en' ? 'Claim Deal on Amazon USA 🛒' : 'Mua Ngay Trên Amazon USA 🛒')}
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-950" />
                </button>

                <button
                  onClick={() => onOpenOutbound(product, (product.category === 'grooming' || product.brand === 'The Beard Struggle') ? 'amazon' : 'official')}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>
                    {(product.category === 'grooming' || product.brand === 'The Beard Struggle')
                      ? (lang === 'en' ? 'Check Price on Amazon' : 'Xem Giá Trên Amazon')
                      : (lang === 'en' ? 'Buy Direct from Official Store (Extra Perks)' : 'Mua Trực Tiếp Trang Chủ Hãng (Quà Độc Quyền)')}
                  </span>
                </button>
              </div>

              {/* US SHIPPING & GUARANTEE */}
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{product.usShipping}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{product.guaranteeDays}-Day {lang === 'en' ? 'Money-Back Guarantee' : 'Hoàn Tiền 100%'}</span>
                </div>
              </div>

            </div>
          </div>

          {/* LAB BENCHMARK SCORE BREAKDOWN */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <h3 className="font-heading font-black text-lg text-white flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-blue-400" />
                  {lang === 'en' ? 'Independent Lab Test Breakdown' : 'Kết Quả Thử Nghiệm Tại Phòng Lab Độc Lập'}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {lang === 'en' ? 'Evaluated against 30+ scientific & durability standards' : 'Đánh giá qua 30+ tiêu chí độ bền, hiệu năng và độ tinh khiết'}
                </p>
              </div>
              <div className="bg-blue-600/30 border border-blue-500/50 rounded-xl px-4 py-2 text-center">
                <div className="text-[10px] text-blue-300 uppercase font-bold tracking-wider">Overall Score</div>
                <div className="text-2xl font-black text-white font-heading">{product.labScores.overall} / 10</div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between text-xs mb-1 font-semibold">
                  <span className="text-slate-300">{lang === 'en' ? 'Efficacy & Performance' : 'Hiệu Năng & Tác Dụng Thực Tế'}</span>
                  <span className="text-blue-400 font-bold">{product.labScores.efficacyOrPerformance} / 10</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${product.labScores.efficacyOrPerformance * 10}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1 font-semibold">
                  <span className="text-slate-300">{lang === 'en' ? 'Value for Money' : 'Độ Đáng Tiền / Giá Trị'}</span>
                  <span className="text-amber-400 font-bold">{product.labScores.valueForMoney} / 10</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: `${product.labScores.valueForMoney * 10}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1 font-semibold">
                  <span className="text-slate-300">{lang === 'en' ? 'Build Quality / Ingredients Purity' : 'Độ Bền Vật Liệu / Độ Tinh Khiết'}</span>
                  <span className="text-emerald-400 font-bold">{product.labScores.buildOrIngredients} / 10</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${product.labScores.buildOrIngredients * 10}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1 font-semibold">
                  <span className="text-slate-300">{lang === 'en' ? 'User Satisfaction & Ease of Use' : 'Mức Độ Hài Lòng Sau Sử Dụng'}</span>
                  <span className="text-purple-400 font-bold">{product.labScores.userSatisfaction} / 10</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: `${product.labScores.userSatisfaction * 10}%` }} />
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-slate-800/80 rounded-xl text-xs text-slate-300 border border-slate-700/80">
              <strong className="text-amber-300 font-bold">{lang === 'en' ? 'Senior Editor Verdict:' : 'Nhận Xét Của Trưởng Ban Thử Nghiệm:'}</strong> {product.editorVerdict}
            </div>
          </div>

          {/* PROS & CONS */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <h4 className="font-heading font-black text-emerald-900 text-sm flex items-center gap-2 mb-3">
                <Check className="w-4 h-4 text-emerald-700" />
                {lang === 'en' ? 'What We Liked (The Highlights)' : 'Ưu Điểm Nổi Bật (Thực Tế Kiểm Chứng)'}
              </h4>
              <ul className="space-y-2">
                {product.pros.map((p, i) => (
                  <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200">
              <h4 className="font-heading font-black text-rose-900 text-sm flex items-center gap-2 mb-3">
                <AlertCircle className="w-4 h-4 text-rose-700" />
                {lang === 'en' ? 'What Could Be Better (Drawbacks)' : 'Điểm Cần Lưu Ý (Hạn Chế Nhỏ)'}
              </h4>
              <ul className="space-y-2">
                {product.cons.map((c, i) => (
                  <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-rose-600 font-bold shrink-0">✕</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* WHO SHOULD BUY VS SKIP */}
          <div className="grid md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div>
              <h4 className="font-heading font-black text-slate-900 text-sm mb-2.5 flex items-center gap-1.5 text-blue-700">
                <ThumbsUp className="w-4 h-4" />
                {lang === 'en' ? 'Ideal For:' : 'Rất Phù Hợp Cho:'}
              </h4>
              <ul className="space-y-1.5">
                {product.whoShouldBuy.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-black text-slate-900 text-sm mb-2.5 flex items-center gap-1.5 text-slate-500">
                <AlertCircle className="w-4 h-4 text-slate-400" />
                {lang === 'en' ? 'Who Might Want To Skip:' : 'Ai Có Thể Nên Cân Nhắc:'}
              </h4>
              <ul className="space-y-1.5">
                {product.whoShouldSkip.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-500 flex items-start gap-2">
                    <span className="text-slate-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SPECIFICATION TABLE */}
          <div>
            <h4 className="font-heading font-black text-slate-900 text-base mb-3">
              {lang === 'en' ? 'Technical Specifications & Lab Details' : 'Thông Số Kỹ Thuật & Chi Tiết Sản Phẩm'}
            </h4>
            <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100 text-xs">
              {product.quickSpecs.map((spec, i) => (
                <div key={i} className="grid grid-cols-3 p-3 bg-white hover:bg-slate-50">
                  <span className="font-bold text-slate-600">{spec.label}</span>
                  <span className="col-span-2 text-slate-800 font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* VERIFIED CUSTOMER REVIEWS */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-heading font-black text-slate-900 text-base">
                {lang === 'en' ? 'Verified US Customer Reviews' : 'Đánh Giá Từ Người Dùng Mỹ Đã Xác Thực'}
              </h4>
              <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {lang === 'en' ? '100% Verified Amazon / D2C Purchases' : '100% Đơn Hàng Thật'}
              </span>
            </div>

            <div className="space-y-3">
              {product.verifiedReviews.map((rev) => (
                <div key={rev.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs">
                        {rev.author.charAt(0)}
                      </div>
                      <div>
                        <span className="font-bold text-slate-900">{rev.author}</span>
                        <span className="text-slate-400 text-[11px] ml-1.5">({rev.location})</span>
                      </div>
                    </div>
                    <span className="text-slate-400 text-[11px]">{rev.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="font-bold text-xs text-slate-800">{rev.title}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    "{rev.comment}"
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      ✓ {lang === 'en' ? 'Verified Purchase' : 'Đã Xác Nhận Đơn Mua'}
                    </span>
                    <span>{rev.helpfulCount} {lang === 'en' ? 'people found this helpful' : 'người thấy hữu ích'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* STICKY BOTTOM ACTION BAR */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 px-6 rounded-b-2xl flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-950 font-heading">${product.salePrice.toFixed(2)}</span>
            <span className="text-xs text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
            <span className="text-xs font-bold text-emerald-600">
              {lang === 'en' ? `Save $${savingsAmount}` : `Tiết kiệm $${savingsAmount}`}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenOutbound(product, (product.category === 'grooming' || product.brand === 'The Beard Struggle') ? 'amazon' : 'official')}
              className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition cursor-pointer"
            >
              {(product.category === 'grooming' || product.brand === 'The Beard Struggle')
                ? (lang === 'en' ? 'Amazon Price' : 'Giá Amazon')
                : (lang === 'en' ? 'Official Site' : 'Trang Chủ Hãng')}
            </button>

            <button
              onClick={() => onOpenOutbound(product, (product.category === 'grooming' || product.brand === 'The Beard Struggle') ? 'official' : 'amazon')}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-sm shadow-md transition transform active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>
                {(product.category === 'grooming' || product.brand === 'The Beard Struggle')
                  ? (lang === 'en' ? 'Claim Deal at TheBeardStruggle.com' : 'Truy Cập TheBeardStruggle.com')
                  : (lang === 'en' ? 'Claim Deal on Amazon' : 'Mua Ngay Trên Amazon')}
              </span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
