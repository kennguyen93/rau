import React from 'react';
import { ShieldCheck, HeartHandshake, CheckCircle2, Lock } from 'lucide-react';
import { NicheCategory } from '../types';

interface FooterProps {
  onSelectCategory: (cat: NicheCategory) => void;
  onOpenAffiliateGuide: () => void;
  lang: 'en' | 'vi';
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenAffiliateGuide,
  lang
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pt-12 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* TOP ROW: BRAND & CATEGORIES */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-amber-500 flex items-center justify-center text-white font-black text-xs">
                PZ
              </div>
              <span className="font-heading font-black text-lg text-white tracking-tight">
                PICKZOID<span className="text-blue-500">.COM</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              {lang === 'en'
                ? 'Independent laboratory testing, clinical ingredient analysis, and verified discount tracking across dietary supplements, smart appliances, consumer tech, and home physical gear.'
                : 'Đánh giá độc lập, phân tích thành phần phòng lab và theo dõi mã giảm giá uy tín cho thị trường Mỹ.'}
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-[11px]">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>SSL 256-Bit Encrypted Architecture</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              {lang === 'en' ? 'Product Niches' : 'Các Ngách Sản Phẩm'}
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li>
                <button onClick={() => onSelectCategory('supplements')} className="hover:text-white transition cursor-pointer">
                  💊 {lang === 'en' ? 'Dietary Supplements & Biohacking' : 'Thực Phẩm Chức Năng'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('appliances')} className="hover:text-white transition cursor-pointer">
                  🍳 {lang === 'en' ? 'Home & Kitchen Appliances' : 'Đồ Gia Dụng Thông Minh'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('tech')} className="hover:text-white transition cursor-pointer">
                  ⚡ {lang === 'en' ? 'Consumer Tech & Audio Gadgets' : 'Công Nghệ & Tai Nghe ANC'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('physical')} className="hover:text-white transition cursor-pointer">
                  🎒 {lang === 'en' ? 'Physical Goods & Ergonomics' : 'Sản Phẩm Vật Lý Đời Sống'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('grooming')} className="hover:text-white transition cursor-pointer">
                  🪒 {lang === 'en' ? "Men's Luxury Grooming & Beard Care" : 'Chăm Sóc Râu & Phái Mạnh (The Beard Struggle)'}
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              {lang === 'en' ? 'Editorial Standards' : 'Tiêu Chuẩn Đánh Giá'}
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'en' ? 'HPLC Purity Chemical Screening' : 'Kiểm nghiệm hóa sinh HPLC'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'en' ? '30-Day Real World Stress Testing' : 'Kiểm tra độ bền 30 ngày'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'en' ? 'Zero Brand Sponsorship Bias' : 'Không nhận tiền bóp méo đánh giá'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'en' ? 'Daily Verified Merchant Pricing' : 'Cập nhật giá ưu đãi hàng ngày'}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              {lang === 'en' ? 'Affiliate Operator Hub' : 'Dành Cho Quản Trị Viên'}
            </h4>
            <p className="text-slate-400 text-xs">
              {lang === 'en' 
                ? 'Looking to configure your tracking IDs, Amazon Associates tags, or CRO triggers?' 
                : 'Bạn muốn điều chỉnh link tiếp thị liên kết và chiến lược CRO?'}
            </p>
            <button
              onClick={onOpenAffiliateGuide}
              className="px-3.5 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold hover:bg-amber-500/30 transition cursor-pointer"
            >
              {lang === 'en' ? 'Open CRO & Setup Guide' : 'Mở Cẩm Nang Tối Ưu CRO'}
            </button>
          </div>

        </div>

        {/* FTC & MEDICAL LEGAL DISCLAIMERS (CRITICAL FOR US COMPLIANCE) */}
        <div className="border-t border-slate-800/80 pt-6 space-y-3 text-[11px] text-slate-400 leading-relaxed">
          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
            <strong className="text-slate-300 uppercase tracking-wide block mb-1">
              FTC Affiliate Disclosure:
            </strong>
            <p>
              {lang === 'en'
                ? 'Pickzoid.com is a participant in the Amazon Services LLC Associates Program and various direct merchant affiliate programs. These programs are designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and merchant web properties. When you purchase through our links, we may receive a commission at no additional cost to you. This does not impact our editorial independence or testing ratings.'
                : 'Pickzoid.com tham gia chương trình tiếp thị liên kết Amazon Associates và các nhà bán lẻ trực tiếp tại Mỹ. Khi người mua click qua liên kết và đặt hàng thành công, chúng tôi có thể nhận được một khoản hoa hồng nhỏ mà người mua hoàn toàn không mất thêm bất kỳ chi phí nào.'}
            </p>
          </div>

          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800">
            <strong className="text-slate-300 uppercase tracking-wide block mb-1">
              FDA & Health Disclaimer:
            </strong>
            <p>
              {lang === 'en'
                ? 'Statements regarding dietary supplements and health products on this site have not been evaluated by the Food and Drug Administration (FDA). These products are not intended to diagnose, treat, cure, or prevent any disease. Always consult your personal physician before beginning any new nutritional supplementation or workout regimen.'
                : 'Các thông tin về thực phẩm chức năng chưa được cơ quan FDA chuẩn đoán để thay thế thuốc chữa bệnh. Luôn tham khảo ý kiến bác sĩ hoặc chuyên gia y tế trước khi bổ sung bất kỳ chất dinh dưỡng nào.'}
            </p>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 Pickzoid.com. All rights reserved. Built for high-conversion US consumer commerce.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Editorial Guidelines</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
