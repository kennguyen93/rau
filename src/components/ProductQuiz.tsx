import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw, 
  Tag, 
  ExternalLink,
  Flame,
  Award,
  Heart,
  Home,
  Cpu,
  Package
} from 'lucide-react';
import { Product, NicheCategory } from '../types';

interface ProductQuizProps {
  products: Product[];
  onClose: () => void;
  onOpenDetails: (p: Product) => void;
  onOpenOutbound: (p: Product, target: 'amazon' | 'official') => void;
  lang: 'en' | 'vi';
}

export const ProductQuiz: React.FC<ProductQuizProps> = ({
  products,
  onClose,
  onOpenDetails,
  onOpenOutbound,
  lang
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedGoal, setSelectedGoal] = useState<NicheCategory | ''>('');
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [selectedPriority, setSelectedPriority] = useState<string>('');
  const [matchedProduct, setMatchedProduct] = useState<Product | null>(null);

  const handleFinish = (priority: string) => {
    setSelectedPriority(priority);
    // Find matching product based on category & budget
    const filtered = products.filter(p => {
      if (selectedGoal && p.category !== selectedGoal) return false;
      return true;
    });

    const match = filtered.length > 0 ? filtered[0] : products[0];
    setMatchedProduct(match);
    setStep(4); // result step
  };

  const handleReset = () => {
    setStep(1);
    setSelectedGoal('');
    setSelectedBudget('');
    setSelectedPriority('');
    setMatchedProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP HEADER */}
        <div className="flex items-center gap-2 text-xs font-bold text-amber-600 mb-2">
          <Sparkles className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: '4s' }} />
          <span>{lang === 'en' ? '60-SECOND PRODUCT ADVISOR' : 'TƯ VẤN SẢN PHẨM TRONG 60 GIÂY'}</span>
          {step < 4 && <span className="text-slate-400">• Step {step} of 3</span>}
        </div>

        {/* STEP 1: CATEGORY / PRIMARY GOAL */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-heading font-black text-xl text-slate-900 leading-tight">
              {lang === 'en' ? 'What area are you looking to upgrade today?' : 'Bạn đang muốn cải thiện hoặc mua sắm lĩnh vực nào?'}
            </h3>
            <p className="text-xs text-slate-500">
              {lang === 'en' ? 'Select your primary interest to see verified top-tested choices.' : 'Chọn danh mục ưu tiên để lọc những món đạt điểm test cao nhất.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => { setSelectedGoal('supplements'); setStep(2); }}
                className="p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/60 text-left transition flex items-start gap-3 cursor-pointer group"
              >
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 font-bold group-hover:scale-110 transition">💊</div>
                <div>
                  <div className="font-bold text-sm text-slate-900">
                    {lang === 'en' ? 'Supplements & Health' : 'Thực Phẩm Chức Năng'}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {lang === 'en' ? 'Metabolism, sleep, focus, anti-aging' : 'Đường huyết, giấc ngủ, tập trung, collagen'}
                  </div>
                </div>
              </button>

              <button
                onClick={() => { setSelectedGoal('appliances'); setStep(2); }}
                className="p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/60 text-left transition flex items-start gap-3 cursor-pointer group"
              >
                <div className="p-2 rounded-lg bg-orange-100 text-orange-700 font-bold group-hover:scale-110 transition">🍳</div>
                <div>
                  <div className="font-bold text-sm text-slate-900">
                    {lang === 'en' ? 'Home & Kitchen' : 'Đồ Gia Dụng'}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {lang === 'en' ? 'Air purifiers, robot vacuums, espresso' : 'Máy lọc khí, robot hút bụi, máy pha cafe'}
                  </div>
                </div>
              </button>

              <button
                onClick={() => { setSelectedGoal('tech'); setStep(2); }}
                className="p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/60 text-left transition flex items-start gap-3 cursor-pointer group"
              >
                <div className="p-2 rounded-lg bg-blue-100 text-blue-700 font-bold group-hover:scale-110 transition">⚡</div>
                <div>
                  <div className="font-bold text-sm text-slate-900">
                    {lang === 'en' ? 'Tech & Smart Gadgets' : 'Công Nghệ & Tiện Ích'}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {lang === 'en' ? 'ANC earbuds, smart rings, GaN chargers' : 'Tai nghe chống ồn, nhẫn theo dõi, sạc nhanh'}
                  </div>
                </div>
              </button>

              <button
                onClick={() => { setSelectedGoal('physical'); setStep(2); }}
                className="p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/60 text-left transition flex items-start gap-3 cursor-pointer group"
              >
                <div className="p-2 rounded-lg bg-purple-100 text-purple-700 font-bold group-hover:scale-110 transition">🎒</div>
                <div>
                  <div className="font-bold text-sm text-slate-900">
                    {lang === 'en' ? 'Physical Goods & Living' : 'Sản Phẩm Vật Lý Đời Sống'}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {lang === 'en' ? 'Contour pillows, filtered showerheads' : 'Gối công thái học, vòi sen lọc clo'}
                  </div>
                </div>
              </button>

              <button
                onClick={() => { setSelectedGoal('grooming'); setStep(2); }}
                className="p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/60 text-left transition flex items-start gap-3 cursor-pointer group sm:col-span-2"
              >
                <div className="p-2 rounded-lg bg-amber-100 text-amber-800 font-bold group-hover:scale-110 transition">🪒</div>
                <div>
                  <div className="font-bold text-sm text-slate-900">
                    {lang === 'en' ? "Men's Luxury Grooming (The Beard Struggle)" : 'Chăm Sóc Râu & Phái Mạnh (The Beard Struggle)'}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {lang === 'en' ? 'Heated beard straighteners, organic growth oils, derma rollers' : 'Lược sấy tạo kiểu râu, tinh dầu kích mọc râu hữu cơ, con lăn vi kim'}
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: BUDGET RANGE */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-heading font-black text-xl text-slate-900 leading-tight">
              {lang === 'en' ? 'What is your comfortable budget range?' : 'Mức ngân sách bạn cảm thấy thoải mái nhất?'}
            </h3>
            <p className="text-xs text-slate-500">
              {lang === 'en' ? 'We only recommend products with verified discounts right now.' : 'Chúng tôi sẽ ưu tiên những sản phẩm đang có mã giảm sâu nhất.'}
            </p>

            <div className="space-y-2.5 pt-2">
              {[
                { id: 'under50', labelEn: 'Under $50 (High Value / Daily Essentials)', labelVi: 'Dưới $50 (Hợp túi tiền / Đồ dùng thiết yếu)' },
                { id: '50to150', labelEn: '$50 - $150 (Premium Mid-Tier with Lab Certs)', labelVi: '$50 - $150 (Tầm trung cao cấp có chứng nhận Lab)' },
                { id: '150plus', labelEn: '$150+ (Flagship Performance & Automation)', labelVi: 'Trên $150 (Đỉnh cao công nghệ & tự động hóa)' }
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => { setSelectedBudget(b.id); setStep(3); }}
                  className="w-full p-3.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/60 text-left font-bold text-xs sm:text-sm text-slate-800 transition flex items-center justify-between cursor-pointer"
                >
                  <span>{lang === 'en' ? b.labelEn : b.labelVi}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(1)}
              className="text-xs text-slate-400 hover:text-slate-600 font-bold underline cursor-pointer"
            >
              &larr; {lang === 'en' ? 'Back' : 'Quay lại'}
            </button>
          </div>
        )}

        {/* STEP 3: PRIORITY FEATURE */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-heading font-black text-xl text-slate-900 leading-tight">
              {lang === 'en' ? 'What matters most to you in this purchase?' : 'Yếu tố nào quan trọng nhất với bạn khi quyết định?'}
            </h3>
            <p className="text-xs text-slate-500">
              {lang === 'en' ? 'Our editorial algorithm will weigh this feature highest.' : 'Thuật toán sẽ chấm điểm cao nhất cho sản phẩm thỏa mãn tiêu chí này.'}
            </p>

            <div className="space-y-2.5 pt-2">
              {[
                { id: 'results', labelEn: 'Highest Lab Purity / Clinical Clinical Backing', labelVi: 'Độ tinh khiết phòng Lab cao nhất / Chứng nhận lâm sàng' },
                { id: 'deal', labelEn: 'Biggest Instant Discount & Free US Shipping', labelVi: 'Giảm giá sâu nhất hôm nay & Miễn phí ship Mỹ' },
                { id: 'guarantee', labelEn: 'Longest Risk-Free Money Back Guarantee (60-100 Days)', labelVi: 'Chính sách hoàn tiền dài nhất (60-100 ngày thử nghiệm)' },
                { id: 'ease', labelEn: 'Zero Hassle / Easiest Everyday Usability', labelVi: 'Dễ sử dụng nhất / Không tốn công sức' }
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleFinish(p.id)}
                  className="w-full p-3.5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/60 text-left font-bold text-xs sm:text-sm text-slate-800 transition flex items-center justify-between cursor-pointer"
                >
                  <span>{lang === 'en' ? p.labelEn : p.labelVi}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="text-xs text-slate-400 hover:text-slate-600 font-bold underline cursor-pointer"
            >
              &larr; {lang === 'en' ? 'Back' : 'Quay lại'}
            </button>
          </div>
        )}

        {/* STEP 4: RESULT / RECOMMENDED MATCH */}
        {step === 4 && matchedProduct && (
          <div className="space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="text-center space-y-1">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs uppercase tracking-wider">
                ✓ 99.4% {lang === 'en' ? 'MATCH FOUND FOR YOU' : 'PHÙ HỢP HOÀN HẢO'}
              </span>
              <h3 className="font-heading font-black text-xl text-slate-900">
                {lang === 'en' ? 'Here Is Your Ideal Tested Pick:' : 'Sản Phẩm Tối Ưu Nhất Dành Cho Bạn:'}
              </h3>
            </div>

            <div className="bg-slate-50 border-2 border-amber-400/80 rounded-2xl p-4 sm:p-5 shadow-md flex flex-col sm:flex-row gap-4 items-center">
              <img
                src={matchedProduct.imageUrl}
                alt={matchedProduct.name}
                className="w-28 h-28 object-contain rounded-xl mix-blend-multiply bg-white p-2 border border-slate-200 shrink-0"
              />
              <div className="space-y-1.5 flex-1 text-center sm:text-left">
                <div className="text-[10px] font-extrabold uppercase text-blue-600">
                  {matchedProduct.brand} • {matchedProduct.badgeText}
                </div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                  {matchedProduct.name}
                </h4>
                <div className="flex items-baseline justify-center sm:justify-start gap-2">
                  <span className="text-2xl font-black text-slate-950 font-heading">${matchedProduct.salePrice.toFixed(2)}</span>
                  <span className="text-xs text-slate-400 line-through">${matchedProduct.originalPrice.toFixed(2)}</span>
                  <span className="text-[10px] font-bold bg-emerald-600 text-white px-1.5 py-0.5 rounded">
                    Save {matchedProduct.discountPercent}%
                  </span>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {matchedProduct.editorVerdict}
                </p>
              </div>
            </div>

            {matchedProduct.couponCode && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-blue-900">
                  <Tag className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold">{lang === 'en' ? 'Exclusive Code Applied:' : 'Đã Áp Dụng Mã:'}</span>
                </div>
                <span className="font-mono font-black text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                  {matchedProduct.couponCode}
                </span>
              </div>
            )}

            <div className="space-y-2">
              {(() => {
                const isTBS = matchedProduct.category === 'grooming' || matchedProduct.brand === 'The Beard Struggle';
                const targetUrl = (isTBS || !matchedProduct.affiliateUrlOfficial || matchedProduct.affiliateUrlOfficial.includes('croreview'))
                  ? 'https://www.thebeardstruggle.com/discount/CHANGE-ME-6638099?ref=ndc2zda'
                  : matchedProduct.affiliateUrlOfficial;
                return (
                  <a
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (matchedProduct.couponCode) {
                        navigator.clipboard?.writeText(matchedProduct.couponCode).catch(() => {});
                      }
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer no-underline"
                  >
                    <span>
                      {isTBS
                        ? (lang === 'en' ? 'Claim Deal at TheBeardStruggle.com' : 'Truy Cập TheBeardStruggle.com Nhận Ưu Đãi')
                        : (lang === 'en' ? 'Claim Exclusive Deal With This Voucher' : 'Nhận Ưu Đãi Độc Quyền Với Mã Này')}
                    </span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                );
              })()}

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onOpenDetails(matchedProduct)}
                  className="py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition cursor-pointer"
                >
                  {lang === 'en' ? 'Read Lab Review' : 'Xem Đánh Giá Chi Tiết'}
                </button>
                <button
                  onClick={handleReset}
                  className="py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-xs transition flex items-center justify-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Retake Quiz' : 'Làm Lại'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
