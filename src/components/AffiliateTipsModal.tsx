import React from 'react';
import { 
  X, 
  DollarSign, 
  TrendingUp, 
  Zap, 
  Target, 
  ShieldCheck, 
  CheckCircle2, 
  Code2, 
  Globe2,
  ExternalLink
} from 'lucide-react';

interface AffiliateTipsModalProps {
  onClose: () => void;
  lang: 'en' | 'vi';
}

export const AffiliateTipsModal: React.FC<AffiliateTipsModalProps> = ({
  onClose,
  lang
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl">
            <DollarSign className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-heading font-black text-xl text-slate-900">
              {lang === 'en' ? 'CRO & Affiliate Marketing Blueprint' : 'Chiến Lược Tối Ưu Chuyển Đổi & Cấu Hình Affiliate'}
            </h3>
            <p className="text-xs text-slate-500">
              {lang === 'en' 
                ? 'How this website is engineered to maximize conversion rates for the US audience' 
                : 'Cách website này tối ưu hóa tỷ lệ chuyển đổi (CRO) cho thị trường Mỹ'}
            </p>
          </div>
        </div>

        {/* SECTION 1: CRO MECHANISMS BUILT IN */}
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-sm text-slate-900 flex items-center gap-2 text-blue-700">
            <Zap className="w-4 h-4" />
            {lang === 'en' ? '5 CRO Pillars Engineered into This App:' : '5 Trụ Cột CRO Được Tích Hợp Sẵn:'}
          </h4>

          <div className="space-y-2 text-xs text-slate-700">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-slate-900 font-bold block mb-0.5">
                1. Giá Neo & Tiết Kiệm Nổi Bật (Price Anchoring & Perceived Savings):
              </strong>
              {lang === 'en'
                ? 'Displays MSRP strike-through prices alongside bold sale figures and exact dollar savings (e.g. Save $50 - 42% OFF). American buyers are bargain-driven.'
                : 'Gạch giá gốc MSRP, làm nổi bật giá sale hôm nay cùng số tiền tiết kiệm được ($XX) và phần trăm giảm sâu.'}
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-slate-900 font-bold block mb-0.5">
                2. Tính Cấp Bách & Khan Hiếm Có Thật (Genuine Urgency & Scarcity):
              </strong>
              {lang === 'en'
                ? 'Live countdown timers on flash sales and "Only X left in stock" warehouse alerts prompt visitors to buy immediately rather than delaying.'
                : 'Đồng hồ đếm ngược Flash Deal và cảnh báo "Chỉ còn X suất trong kho Mỹ" kích thích tâm lý chốt đơn ngay (FOMO).'}
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-slate-900 font-bold block mb-0.5">
                3. Bằng Chứng Khoa Học & Lab Uy Tín (Authority & Lab Social Proof):
              </strong>
              {lang === 'en'
                ? 'Certification badges (NSF, USP, cGMP, EnergyStar, UL) and detailed Lab Benchmark Breakdown (9.8/10) disarm skepticism for high-ticket supplements & tech.'
                : 'Các chứng chỉ chuẩn Mỹ (NSF, cGMP, USP, UL, FCC) và bảng điểm thử nghiệm Lab 4 tiêu chí giúp triệt tiêu sự nghi ngờ của khách hàng.'}
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-slate-900 font-bold block mb-0.5">
                4. Cửa Sổ Chuyển Hướng Kèm Sao Chép Mã Tự Động (Outbound Redirect Modal):
              </strong>
              {lang === 'en'
                ? 'When clicking "Claim Deal", a branded bridge screen confirms their discount, automatically copies the coupon code to their clipboard, and reassures with guarantee terms.'
                : 'Khi khách bấm mua, một màn hình đệm xác nhận ưu đãi, tự động sao chép mã giảm giá vào clipboard để khách dán vào giỏ hàng.'}
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-slate-900 font-bold block mb-0.5">
                5. Trắc Nghiệm Tìm Hàng & Bảng So Sánh Đối Đầu (Quiz & Comparison Matrix):
              </strong>
              {lang === 'en'
                ? 'Interactive 60-second questionnaire guides undecided shoppers to their single best match, boosting conversion by over 35%.'
                : 'Trắc nghiệm 3 bước và bảng so sánh 1-chạm giúp giải quyết phân vân của khách hàng đang so đo giữa các dòng sản phẩm.'}
            </div>
          </div>
        </div>

        {/* SECTION 2: HOW TO ADD YOUR OWN AFFILIATE TAGS */}
        <div className="space-y-3 p-4 bg-amber-50/70 border border-amber-200 rounded-2xl">
          <h4 className="font-heading font-black text-sm text-amber-950 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-amber-600" />
            {lang === 'en' ? 'How to Plug in Your Affiliate Links:' : 'Cách Thay Thế Link Affiliate Của Bạn:'}
          </h4>
          <p className="text-xs text-amber-900 leading-relaxed">
            {lang === 'en'
              ? 'Open `/src/data/products.ts` and replace the affiliate URLs with your real IDs:'
              : 'Mở file `/src/data/products.ts` và thay thế link mẫu bằng link liên kết của bạn:'}
          </p>
          <div className="p-3 bg-slate-900 text-slate-100 rounded-xl font-mono text-[11px] overflow-x-auto space-y-1">
            <div className="text-slate-400">// The Beard Struggle (Đã cấu hình từ ảnh chụp màn hình của bạn):</div>
            <div className="text-amber-300">Referral Coupon: CHANGE-ME-6638099</div>
            <div className="text-emerald-400">Referral Link: https://www.thebeardstruggle.com/discount/CHANGE-ME-6638099?ref=ndc2zda</div>
            <div className="text-slate-400 mt-2">// Amazon Associates: Thay tag=usareviewhub-20 bằng tracking ID của bạn:</div>
            <div className="text-emerald-400">affiliateUrlAmazon: 'https://amazon.com/dp/B0XXXXX?tag=yourtag-20'</div>
          </div>
        </div>

        {/* SECTION 3: TOP TRAFFIC SOURCES FOR US MARKET */}
        <div className="space-y-2 text-xs text-slate-600">
          <h4 className="font-heading font-bold text-sm text-slate-900 flex items-center gap-2">
            <Target className="w-4 h-4 text-emerald-600" />
            {lang === 'en' ? 'Best Traffic Channels for US Affiliate Sales:' : 'Các Kênh Kéo Traffic Mỹ Đạt Hiệu Quả Cao Nhất:'}
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>SEO Review Intent:</strong> Tối ưu bài viết theo từ khóa dài dạng: <em>"Best liposomal berberine for weight loss 2026"</em>, <em>"AeroPure pro 500 review vs Levoit"</em>.</li>
            <li><strong>TikTok / YouTube Shorts Teardowns:</strong> Quay clip unboxing, test độ ồn máy lọc khí, test sạc 140W rồi đặt link bio về trang review này.</li>
            <li><strong>Pinterest Infographics:</strong> Tạo infographic so sánh đồ gia dụng & thực phẩm chức năng gắn link trực tiếp.</li>
            <li><strong>Google Search Ads:</strong> Chạy quảng cáo tìm kiếm nhắm vào nhóm từ khóa "coupon code" và "discount review".</li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition cursor-pointer"
        >
          {lang === 'en' ? 'Got It, Close Guide' : 'Đã Hiểu, Đóng Hướng Dẫn'}
        </button>
      </div>
    </div>
  );
};
