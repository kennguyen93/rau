import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  CheckCircle2, 
  Copy, 
  ShieldCheck, 
  Truck, 
  Tag, 
  X,
  Sparkles,
  Lock
} from 'lucide-react';
import { Product } from '../types';

interface OutboundModalProps {
  product: Product | null;
  target: 'amazon' | 'official';
  onClose: () => void;
  lang: 'en' | 'vi';
}

export const OutboundModal: React.FC<OutboundModalProps> = ({
  product,
  target,
  onClose,
  lang
}) => {
  if (!product) return null;

  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const destinationUrl = target === 'amazon' ? product.affiliateUrlAmazon : product.affiliateUrlOfficial;
  const merchantName = target === 'amazon' ? 'Amazon USA' : `${product.brand} Official Store`;

  useEffect(() => {
    // Automatically copy promo code if present
    if (product.couponCode) {
      navigator.clipboard.writeText(product.couponCode).catch(() => {});
      setCopied(true);
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [product]);

  const handleManualRedirect = () => {
    window.open(destinationUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleCopy = () => {
    if (product.couponCode) {
      navigator.clipboard.writeText(product.couponCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-center space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {/* SECURITY ICON */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 text-slate-950 flex items-center justify-center mx-auto shadow-md">
          <Lock className="w-8 h-8" />
        </div>

        {/* HEADLINE */}
        <div className="space-y-1">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black uppercase tracking-wider">
            {lang === 'en' ? 'Securing Exclusive US Promo' : 'Đang Kích Hoạt Giá Ưu Đãi Độc Quyền'}
          </span>
          <h3 className="font-heading font-black text-xl text-slate-900 leading-snug">
            {lang === 'en' 
              ? `Connecting to ${merchantName}...` 
              : `Đang chuyển hướng sang ${merchantName}...`}
          </h3>
          <p className="text-xs text-slate-500">
            {lang === 'en'
              ? 'Your lowest price guarantee and verified coupon are being locked in.'
              : 'Giá cam kết thấp nhất và mã giảm giá đã được đồng bộ sẵn cho bạn.'}
          </p>
        </div>

        {/* PRODUCT MINI CARD */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-center gap-3 text-left">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-14 h-14 object-contain rounded-lg bg-white p-1 border border-slate-200 shrink-0"
          />
          <div className="min-w-0 flex-1">
            <h4 className="font-bold text-xs text-slate-900 truncate">{product.name}</h4>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-base font-black text-slate-900 font-heading">${product.salePrice.toFixed(2)}</span>
              <span className="text-xs text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">
                Save {product.discountPercent}%
              </span>
            </div>
          </div>
        </div>

        {/* COUPON AUTO-COPIED BOX */}
        {product.couponCode && (
          <div className="bg-blue-50/80 border-2 border-dashed border-blue-400 rounded-xl p-3.5 flex items-center justify-between gap-2">
            <div className="text-left">
              <div className="text-[11px] font-bold text-slate-600">
                {lang === 'en' ? 'Coupon Code (Auto-Copied):' : 'Mã Giảm Giá (Đã Tự Động Lưu Bộ Nhớ Tạm):'}
              </div>
              <div className="text-sm font-black font-mono text-blue-700 tracking-wider">
                {product.couponCode}
              </div>
            </div>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1 transition cursor-pointer"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (lang === 'en' ? 'Copied! ✓' : 'Đã Chép!') : (lang === 'en' ? 'Copy' : 'Chép')}</span>
            </button>
          </div>
        )}

        {/* TRUST BADGES */}
        <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 text-left bg-slate-50 p-2.5 rounded-xl border border-slate-100">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>{product.guaranteeDays}-Day {lang === 'en' ? 'Money Back Guarantee' : 'Bảo đảm hoàn tiền'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>{lang === 'en' ? 'Free US Express Delivery' : 'Miễn phí giao hàng tại Mỹ'}</span>
          </div>
        </div>

        {/* PROGRESS BAR & MANUAL CTA */}
        <div className="space-y-3">
          <button
            onClick={handleManualRedirect}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black text-sm sm:text-base shadow-lg transition transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer animate-pulse-glow"
          >
            <span>{lang === 'en' ? `Proceed to ${merchantName} Now` : `Mở ${merchantName} Ngay Bây Giờ`}</span>
            <ExternalLink className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-slate-400">
            {lang === 'en' 
              ? 'Opening in secure new window. Safe 256-bit encrypted checkout on merchant site.' 
              : 'Mở trong tab bảo mật mới. Thanh toán an toàn chuẩn mã hóa 256-bit trực tiếp tại hãng/Amazon.'}
          </p>
        </div>
      </div>
    </div>
  );
};
