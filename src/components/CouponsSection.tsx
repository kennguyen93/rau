import React, { useState } from 'react';
import { 
  Tag, 
  Copy, 
  CheckCircle2, 
  ExternalLink, 
  Clock, 
  Flame, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { CouponItem } from '../types';
import { COUPONS } from '../data/coupons';

interface CouponsSectionProps {
  onOpenOutbound: (dummyProduct: any, target: 'amazon' | 'official') => void;
  lang: 'en' | 'vi';
}

export const CouponsSection: React.FC<CouponsSectionProps> = ({
  onOpenOutbound,
  lang
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (coupon: CouponItem) => {
    navigator.clipboard.writeText(coupon.code);
    setCopiedId(coupon.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="coupons-vault" className="my-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-slate-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        
        {/* HEADER */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-700/80 pb-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'en' ? 'VERIFIED US PROMO VAULT' : 'KHO MÃ GIẢM GIÁ MỸ ĐÃ XÁC THỰC'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-white">
              {lang === 'en' ? 'Exclusive Promotional Discounts & Coupons' : 'Mã Giảm Giá Độc Quyền & Voucher Tiết Kiệm'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {lang === 'en' 
                ? 'Hand-tested daily by our team. Click to copy and apply directly during checkout.' 
                : 'Được đội ngũ kiểm tra thực tế hàng ngày. Bấm để sao chép mã và dùng ngay khi thanh toán.'}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-800/90 border border-slate-700 px-3.5 py-2 rounded-xl text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'en' ? 'Updated 2 Hours Ago' : 'Cập nhật 2 giờ trước'}</span>
          </div>
        </div>

        {/* COUPON CARDS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COUPONS.map((coupon) => {
            const isCopied = copiedId === coupon.id;
            return (
              <div
                key={coupon.id}
                className="bg-slate-800/80 border border-slate-700 hover:border-amber-400/60 rounded-2xl p-4 flex flex-col justify-between transition-all hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-bold text-amber-400">{coupon.storeName}</span>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {coupon.expiresText}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                    {coupon.discountText}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-1">
                    {coupon.productTarget}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between gap-2">
                  <div className="font-mono font-black text-sm bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700 text-amber-300 tracking-wider">
                    {coupon.code}
                  </div>

                  <button
                    onClick={() => handleCopy(coupon)}
                    className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                  >
                    {isCopied ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? (lang === 'en' ? 'Copied! ✓' : 'Đã Chép!') : (lang === 'en' ? 'Copy Code' : 'Chép Mã')}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
