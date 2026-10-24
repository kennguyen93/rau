import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Timer, 
  CheckCircle, 
  Flame, 
  Award, 
  ArrowRight,
  TrendingDown,
  Percent,
  Search
} from 'lucide-react';
import { NicheCategory } from '../types';
import ultimateCarbonKitImg from '../assets/images/ultimate_carbon_kit.jpg';

interface HeroProps {
  onSelectCategory: (cat: NicheCategory) => void;
  onOpenQuiz: () => void;
  onJumpToDeals: () => void;
  totalProductsCount: number;
  lang: 'en' | 'vi';
}

export const Hero: React.FC<HeroProps> = ({
  onSelectCategory,
  onOpenQuiz,
  onJumpToDeals,
  totalProductsCount,
  lang
}) => {
  // Urgency Timer for Flash Deals
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 19 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 6, minutes: 0, seconds: 0 }; // reset cycle
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const format2 = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-8 pb-12 px-4 sm:px-6">
      {/* Background Subtle Grid / Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP FLASH DEAL TICKER */}
        <div className="mb-6 inline-flex flex-wrap items-center gap-2 sm:gap-3 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 border border-amber-500/40 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
          <span className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wide">
            <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
            {lang === 'en' ? 'US Autumn Flash Sale Active' : 'Đang Diễn Ra Flash Sale Mùa Thu Mỹ'}
          </span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <div className="flex items-center gap-1 text-xs text-slate-200">
            <Timer className="w-3.5 h-3.5 text-amber-300" />
            <span className="font-mono font-bold text-amber-300">
              {format2(timeLeft.hours)}:{format2(timeLeft.minutes)}:{format2(timeLeft.seconds)}
            </span>
            <span className="text-[11px] text-slate-300">
              {lang === 'en' ? 'until promo codes expire' : 'trước khi mã giảm giá hết hạn'}
            </span>
          </div>
          <button
            onClick={onJumpToDeals}
            className="text-xs font-bold text-white hover:text-amber-300 underline inline-flex items-center gap-1 ml-auto cursor-pointer"
          >
            {lang === 'en' ? 'View Flash Discounts' : 'Xem Các Deal Hot'}
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* HERO MAIN TITLE & PITCH */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-3">
              <Award className="w-3.5 h-3.5 text-blue-400" />
              {lang === 'en' ? '100% Independent Lab Testing & Price Verification' : '100% Đánh Giá Phòng Lab Độc Lập & Xác Thực Giá Rẻ Nhất'}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-none text-white mb-4">
              {lang === 'en' ? (
                <>
                  Stop Overpaying. We Tested The <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">
                    Top US Products
                  </span> So You Buy Right.
                </>
              ) : (
                <>
                  Không Mua Hớ. Chúng Tôi Đã Test <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">
                    Top Sản Phẩm Bán Chạy Tại Mỹ
                  </span> Chuẩn Từng Đô.
                </>
              )}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed mb-6">
              {lang === 'en'
                ? 'Unbiased clinical & engineering teardowns across Dietary Supplements, Smart Home Appliances, Consumer Tech, and Everyday Physical Essentials. We secure verified exclusive discount codes directly with US merchants.'
                : 'Đánh giá chi tiết thành phần lâm sàng & độ bền thực tế cho Thực Phẩm Chức Năng, Đồ Gia Dụng Thông Minh, Phụ Kiện Công Nghệ và Đồ Dùng Thể Chất. Tích hợp mã giảm giá độc quyền từ Amazon US & hãng sản xuất.'}
            </p>

            {/* TRUST CRITERIA PILLS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 rounded-xl p-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-bold text-white">NSF & USP</div>
                  <div className="text-[10px] text-slate-400">Lab Purity Tested</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 rounded-xl p-2.5">
                <TrendingDown className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Up to 50% OFF</div>
                  <div className="text-[10px] text-slate-400">Exclusive Coupons</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 rounded-xl p-2.5">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Fast US 2-Day</div>
                  <div className="text-[10px] text-slate-400">Prime & Fedex Shipping</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 rounded-xl p-2.5">
                <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-bold text-white">60-100 Day</div>
                  <div className="text-[10px] text-slate-400">Money Back Trial</div>
                </div>
              </div>
            </div>

            {/* QUICK CTA BUTTONS */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenQuiz}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-sm shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition transform active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'en' ? 'Take 60-Sec Product Finder Quiz' : 'Làm Trắc Nghiệm Chọn Đồ (60s)'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onJumpToDeals}
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-bold text-sm transition flex items-center gap-2 cursor-pointer"
              >
                <Percent className="w-4 h-4 text-amber-400" />
                <span>{lang === 'en' ? 'Browse Top Tested Deals' : 'Xem Danh Sách Deal Hot'}</span>
              </button>
            </div>
          </div>

          {/* RIGHT HERO HIGHLIGHT CARD (CRO EDITOR'S CHOICE SPOTLIGHT) */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-500/50 rounded-2xl p-5 shadow-2xl relative">
              <div className="absolute -top-3 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                {lang === 'en' ? "EDITOR'S #1 OVERALL PICK" : "SẢN PHẨM SỐ 1 BẦU CHỌN"}
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-slate-400 border-b border-slate-700 pb-2">
                <span className="font-semibold text-emerald-400">● 9.9/10 Lab Rating</span>
                <span className="bg-slate-700/80 px-2 py-0.5 rounded text-[10px] text-slate-300">1,390+ Reviews</span>
              </div>

              <div className="mt-4 flex gap-4">
                <img
                  src={ultimateCarbonKitImg}
                  alt="The Beard Struggle Ultimate Carbon X Pro Kit"
                  className="w-24 h-24 object-cover rounded-xl border border-slate-700 shrink-0 bg-slate-900"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="100%" height="100%" fill="%231e293b"/><text x="50%" y="50%" fill="%23f59e0b" font-family="sans-serif" font-weight="bold" font-size="14" dominant-baseline="middle" text-anchor="middle">THE BEARD STRUGGLE</text></svg>';
                  }}
                />
                <div>
                  <h3 className="font-bold text-sm text-white leading-snug line-clamp-2">
                    The Beard Struggle Ultimate Carbon X Pro Beard Kit
                  </h3>
                  <div className="flex items-baseline gap-2 mt-1.5">
                    <span className="text-xl font-black text-amber-400">$159.90</span>
                    <span className="text-xs text-slate-400 line-through">$222.00</span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800">
                      -28% OFF
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    {lang === 'en' ? 'Wild Beard, Instant Control. Full Arsenal with Heated Straightener.' : 'Bộ vũ khí chăm sóc râu đỉnh cao. Kèm lược nhiệt Carbon X Pro.'}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Code: <strong className="text-amber-300 font-mono">CHANGE-ME-6638099</strong>
                </span>
                <button
                  onClick={() => onSelectCategory('grooming')}
                  className="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1 cursor-pointer"
                >
                  {lang === 'en' ? 'Get Deal Now' : 'Xem Ưu Đãi'} &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
