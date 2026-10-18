import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Flame, 
  Scale, 
  Tag, 
  Sparkles, 
  HelpCircle,
  Truck,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { NicheCategory } from '../types';

interface HeaderProps {
  activeCategory: NicheCategory;
  onSelectCategory: (cat: NicheCategory) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  compareCount: number;
  onOpenCompare: () => void;
  onOpenQuiz: () => void;
  onOpenAffiliateGuide: () => void;
  lang: 'en' | 'vi';
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  compareCount,
  onOpenCompare,
  onOpenQuiz,
  onOpenAffiliateGuide,
  lang,
  onToggleLang
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories: { id: NicheCategory; labelEn: string; labelVi: string; icon: string }[] = [
    { id: 'all', labelEn: 'All Picks', labelVi: 'Tất Cả Sản Phẩm', icon: '⭐' },
    { id: 'supplements', labelEn: 'Dietary Supplements', labelVi: 'Thực Phẩm Chức Năng', icon: '💊' },
    { id: 'tech', labelEn: 'Tech & Gadgets', labelVi: 'Đồ Công Nghệ', icon: '⚡' },
    { id: 'physical', labelEn: 'Cervical Pillows', labelVi: 'Gối Định Hình Cổ', icon: '🛏️' },
    { id: 'grooming', labelEn: "Men's Luxury Grooming", labelVi: 'Chăm Sóc Râu & Grooming', icon: '🪒' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* 1. US FTC & TRUST DISCLOSURE BAR */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-x-auto text-[11px] font-medium text-slate-300">
            <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              {lang === 'en' ? 'Independently Lab Tested' : 'Kiểm Định Độc Lập Tại Mỹ'}
            </span>
            <span className="text-slate-600">•</span>
            <span className="inline-flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-amber-400" />
              {lang === 'en' ? 'Verified US Free Shipping' : 'Miễn Phí Giao Hàng Nội Địa Mỹ'}
            </span>
            <span className="text-slate-600">•</span>
            <span className="inline-flex items-center gap-1 text-sky-300">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              {lang === 'en' ? '30 to 100-Day Risk-Free Returns' : 'Bảo Hiểm Hoàn Tiền 30-100 Ngày'}
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="hidden md:inline text-slate-400">
              {lang === 'en' 
                ? 'FTC Disclosure: We earn commissions on qualifying purchases.' 
                : 'FTC Disclosure: Hoa hồng liên kết minh bạch.'}
            </span>
            
            <button
              onClick={onOpenAffiliateGuide}
              className="text-amber-400 hover:text-amber-300 underline font-medium cursor-pointer transition flex items-center gap-1"
              title="Xem chiến lược tối ưu CRO & cấu hình Affiliate link"
            >
              <HelpCircle className="w-3 h-3" />
              {lang === 'en' ? 'CRO / Affiliate Setup Guide' : 'Cẩm Nang CRO & Affiliate'}
            </button>

            <a
              href="./cpanel_public_html.zip"
              download="cpanel_public_html.zip"
              className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-600/60 text-emerald-300 hover:text-emerald-200 hover:bg-emerald-900 transition font-medium no-underline"
              title="Tải gói file nén cPanel public_html để tải lên hosting"
            >
              <span>📦</span>
              <span>{lang === 'en' ? 'cPanel Zip' : 'Tải File cPanel (.zip)'}</span>
            </a>

            <button
              onClick={onToggleLang}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition"
              title="Chuyển đổi ngôn ngữ hiển thị"
            >
              {lang === 'en' ? '🇺🇸 EN' : '🇻🇳 VI'}
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-amber-500 flex items-center justify-center text-white font-black text-lg shadow-md group-hover:scale-105 transition-transform">
                PZ
              </div>
              <div>
                <div className="font-heading font-black text-xl tracking-tight text-slate-900 flex items-center gap-1.5 leading-none">
                  PICKZOID<span className="text-blue-600">.COM</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">
                    USA 2026
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium tracking-tight mt-0.5">
                  {lang === 'en' ? 'Tested Products • Verified Lowest Prices' : 'Đánh Giá Chuyên Sâu • Săn Deal Mỹ Uy Tín'}
                </p>
              </div>
            </a>
          </div>

          {/* SEARCH BAR */}
          <div className="hidden lg:flex flex-1 max-w-md mx-4 relative">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={lang === 'en' ? "Search berberine, air purifier, headphones..." : "Tìm kiếm berberine, máy lọc không khí, tai nghe..."}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-slate-100 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* CRO ACTION BUTTONS */}
          <div className="flex items-center gap-2.5">
            {/* FIND MATCH QUIZ */}
            <button
              onClick={onOpenQuiz}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-sm hover:shadow transition transform active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
              <span>{lang === 'en' ? 'Product Match Quiz' : 'Trắc Nghiệm Chọn Đồ'}</span>
            </button>

            {/* COMPARE DRAWER BUTTON */}
            <button
              onClick={onOpenCompare}
              className={`relative inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg border transition ${
                compareCount > 0 
                  ? 'bg-blue-50 text-blue-700 border-blue-300 ring-2 ring-blue-400/30' 
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Compare' : 'So Sánh'}</span>
              {compareCount > 0 && (
                <span className="ml-1 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-black flex items-center justify-center">
                  {compareCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH BAR */}
        <div className="mt-2.5 lg:hidden relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={lang === 'en' ? "Search tested products..." : "Tìm kiếm sản phẩm đã kiểm nghiệm..."}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-slate-100 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* 3. CATEGORY SCROLL NAV */}
      <div className="border-t border-slate-100 bg-slate-50/80 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 py-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200/80'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{lang === 'en' ? cat.labelEn : cat.labelVi}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
