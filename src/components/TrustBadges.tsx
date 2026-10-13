import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FlaskConical, 
  BadgePercent, 
  Clock, 
  Mail, 
  CheckCircle2, 
  Lock,
  Sparkles
} from 'lucide-react';

interface TrustBadgesProps {
  lang: 'en' | 'vi';
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({ lang }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="my-14 space-y-10">
      
      {/* 4 PILLARS OF TRUST */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            {lang === 'en' ? 'OUR RIGOROUS TESTING STANDARDS' : 'TIÊU CHUẨN THỬ NGHIỆM KHẮT KHE'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900">
            {lang === 'en' ? 'Why 450,000+ US Buyers Trust Our Verdicts' : 'Tại Sao Hơn 450.000 Khách Hàng Mỹ Tin Tưởng'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {lang === 'en'
              ? 'We never accept paid reviews from brands. Every product is purchased independently or blind-tested in ISO-certified US facilities.'
              : 'Chúng tôi không nhận tiền quảng cáo để viết sai lệch. Mọi sản phẩm đều được mua ngẫu nhiên và test tại phòng kiểm định đạt chuẩn ISO tại Mỹ.'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <FlaskConical className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-black text-sm text-slate-900">
              {lang === 'en' ? '3rd-Party Lab Verified' : 'Kiểm Định Độc Lập'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'Supplements pass HPLC purity & heavy metal tests. Electronics pass UL electrical load & thermal tests.'
                : 'Thực phẩm chức năng kiểm tra sắc ký HPLC và kim loại nặng. Đồ điện tử đo tải nhiệt và an toàn điện chuẩn UL.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-black text-sm text-slate-900">
              {lang === 'en' ? '30-60 Day Real Use' : 'Dùng Thử 30-60 Ngày'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'No unboxing hype. We live with these products in real American homes to uncover long-term flaws.'
                : 'Không chỉ mở hộp sơ sài. Đội ngũ sử dụng thực tế trong sinh hoạt gia đình tại Mỹ để phát hiện mọi nhược điểm.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <BadgePercent className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-black text-sm text-slate-900">
              {lang === 'en' ? 'Lowest Price Tracking' : 'Săn Giá Rẻ Nhất'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'Our price crawler tracks Amazon and brand stores 24/7 to secure active coupon codes and price drops.'
                : 'Hệ thống quét giá liên tục cập nhật các đợt flash sale và mã coupon độc quyền từ các sàn uy tín.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-black text-sm text-slate-900">
              {lang === 'en' ? '100% Risk-Free Buying' : 'Bảo Vệ Người Mua'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'We only recommend products backed by minimum 30-day (up to 100-day) US money-back guarantees.'
                : 'Chỉ chọn các thương hiệu có chính sách hoàn tiền thật từ 30 đến 100 ngày nếu dùng không ưng ý.'}
            </p>
          </div>
        </div>
      </div>

      {/* VIP DEAL ALERT BOX */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg border border-blue-800">
        <div className="relative z-10 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-[11px] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              {lang === 'en' ? 'VIP US FLASH DEAL CLUB' : 'CÂU LẠC BỘ SĂN DEAL VIP NỘI ĐỊA MỸ'}
            </div>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-white">
              {lang === 'en' 
                ? 'Never Miss A 50%+ Off US Flash Sale' 
                : 'Nhận Thông Báo Các Deal Giảm Sâu Trên 50%'}
            </h3>
            <p className="text-xs text-slate-300">
              {lang === 'en'
                ? 'Join 64,000+ smart shoppers. Get vetted weekly coupon drops across supplements, home gear & tech.'
                : 'Tham gia cùng hơn 64.000 người mua sắm thông thái. Nhận mã voucher bí mật qua email mỗi tuần.'}
            </p>
          </div>

          <div className="md:col-span-5">
            {subscribed ? (
              <div className="bg-emerald-500/20 border border-emerald-400 text-emerald-300 p-4 rounded-2xl flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <div className="text-xs font-bold">
                  {lang === 'en' 
                    ? 'Welcome aboard! Your first exclusive 20% coupon pack is on its way.' 
                    : 'Đăng ký thành công! Mã ưu đãi VIP đầu tiên đang được gửi tới bạn.'}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder={lang === 'en' ? "Enter your email..." : "Nhập email của bạn..."}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition cursor-pointer shadow-md shrink-0 active:scale-95"
                  >
                    {lang === 'en' ? 'Join Free' : 'Đăng Ký'}
                  </button>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>{lang === 'en' ? 'No spam. Unsubscribe anytime with 1-click.' : 'Không spam. Hủy đăng ký bất kỳ lúc nào chỉ với 1 click.'}</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};
