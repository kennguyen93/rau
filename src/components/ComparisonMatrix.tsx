import React from 'react';
import { 
  X, 
  Scale, 
  Check, 
  ExternalLink, 
  Star, 
  Trash2, 
  Sparkles,
  ShieldCheck,
  Truck,
  Plus
} from 'lucide-react';
import { Product } from '../types';

interface ComparisonMatrixProps {
  compareProducts: Product[];
  onRemoveProduct: (productId: string) => void;
  onClearAll: () => void;
  onOpenOutbound: (p: Product, target: 'amazon' | 'official') => void;
  onOpenDetails: (p: Product) => void;
  onClose: () => void;
  lang: 'en' | 'vi';
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({
  compareProducts,
  onRemoveProduct,
  onClearAll,
  onOpenOutbound,
  onOpenDetails,
  onClose,
  lang
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div 
        className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="sticky top-0 z-20 bg-slate-900 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <Scale className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="font-heading font-black text-lg text-white">
                {lang === 'en' ? 'Side-by-Side Product Comparison' : 'So Sánh Trực Quan Đối Đầu'}
              </h2>
              <p className="text-xs text-slate-400">
                {lang === 'en' 
                  ? `Comparing ${compareProducts.length} top US consumer picks` 
                  : `Đang so sánh ${compareProducts.length} sản phẩm tuyển chọn`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {compareProducts.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-slate-400 hover:text-red-400 font-semibold transition flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Clear All' : 'Xóa Hết'}</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          {compareProducts.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                <Scale className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-800">
                {lang === 'en' ? 'No Products in Comparison Tray' : 'Chưa Có Sản Phẩm Trong Bảng So Sánh'}
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                {lang === 'en' 
                  ? 'Click "+ Compare" on any product card in the main list to evaluate them side by side on specs, pricing, and lab scores.' 
                  : 'Hãy bấm nút "+ So Sánh" trên các thẻ sản phẩm để đưa vào bảng đối chiếu giá cả, điểm kiểm định và tính năng.'}
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition cursor-pointer"
              >
                {lang === 'en' ? 'Browse Products' : 'Khám Phá Danh Sách'}
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="p-3 w-40 text-slate-400 uppercase font-bold text-[11px] bg-slate-50">
                      {lang === 'en' ? 'Feature' : 'Tiêu Chí'}
                    </th>
                    {compareProducts.map((p) => (
                      <th key={p.id} className="p-4 min-w-[240px] max-w-[280px] align-top bg-white relative">
                        <button
                          onClick={() => onRemoveProduct(p.id)}
                          className="absolute top-2 right-2 text-slate-400 hover:text-red-500 p-1"
                          title="Remove"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <div className="text-center space-y-2">
                          <img
                            src={p.imageUrl}
                            alt={p.name}
                            className="w-28 h-28 object-contain mx-auto mix-blend-multiply cursor-pointer hover:scale-105 transition"
                            onClick={() => onOpenDetails(p)}
                          />
                          <div className="text-[10px] font-bold uppercase text-blue-600">{p.brand}</div>
                          <h4 
                            onClick={() => onOpenDetails(p)}
                            className="font-bold text-slate-900 leading-tight hover:text-blue-600 transition cursor-pointer line-clamp-2"
                          >
                            {p.name}
                          </h4>
                          <div className="inline-block px-2 py-0.5 rounded text-[10px] font-black bg-amber-100 text-amber-800">
                            {p.badgeText}
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {/* PRICING ROW */}
                  <tr className="bg-amber-50/40">
                    <td className="p-3 font-bold text-slate-700 bg-slate-50">
                      {lang === 'en' ? 'Sale Price' : 'Giá Ưu Đãi'}
                    </td>
                    {compareProducts.map((p) => (
                      <td key={p.id} className="p-4">
                        <div className="text-lg font-black text-slate-950 font-heading">
                          ${p.salePrice.toFixed(2)}
                        </div>
                        <div className="text-[11px] text-slate-400 line-through">
                          ${p.originalPrice.toFixed(2)}
                        </div>
                        <div className="text-[11px] font-bold text-emerald-600">
                          {lang === 'en' ? `Save ${p.discountPercent}%` : `Giảm ${p.discountPercent}%`}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* LAB SCORE */}
                  <tr>
                    <td className="p-3 font-bold text-slate-700 bg-slate-50">
                      {lang === 'en' ? 'Lab Rating' : 'Điểm Thử Nghiệm'}
                    </td>
                    {compareProducts.map((p) => (
                      <td key={p.id} className="p-4">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 font-black text-xs">
                          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                          <span>{p.labScores.overall} / 10.0</span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1">
                          {p.rating} ★ ({p.reviewCount.toLocaleString()} {lang === 'en' ? 'reviews' : 'đánh giá'})
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* CERTIFICATIONS */}
                  <tr>
                    <td className="p-3 font-bold text-slate-700 bg-slate-50">
                      {lang === 'en' ? 'Certifications' : 'Chứng Nhận'}
                    </td>
                    {compareProducts.map((p) => (
                      <td key={p.id} className="p-4 space-y-1">
                        {p.labCertified.map((cert, idx) => (
                          <div key={idx} className="text-[11px] text-slate-700 font-medium flex items-center gap-1">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{cert}</span>
                          </div>
                        ))}
                      </td>
                    ))}
                  </tr>

                  {/* GUARANTEE & SHIPPING */}
                  <tr>
                    <td className="p-3 font-bold text-slate-700 bg-slate-50">
                      {lang === 'en' ? 'Guarantee & Shipping' : 'Bảo Hành & Ship'}
                    </td>
                    {compareProducts.map((p) => (
                      <td key={p.id} className="p-4 space-y-1.5 text-[11px]">
                        <div className="flex items-center gap-1 text-emerald-700 font-bold">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>{p.guaranteeDays} {lang === 'en' ? 'Days Money Back' : 'Ngày Hoàn Tiền'}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-600">
                          <Truck className="w-3.5 h-3.5 text-blue-600" />
                          <span>{p.usShipping}</span>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* PROS SUMMARY */}
                  <tr>
                    <td className="p-3 font-bold text-slate-700 bg-slate-50">
                      {lang === 'en' ? 'Top Advantage' : 'Ưu Thế Vượt Trội'}
                    </td>
                    {compareProducts.map((p) => (
                      <td key={p.id} className="p-4 text-slate-700 text-[11px] leading-relaxed">
                        {p.pros[0]}
                      </td>
                    ))}
                  </tr>

                  {/* ACTION CTA ROW */}
                  <tr className="bg-slate-50">
                    <td className="p-3 font-bold text-slate-700">
                      {lang === 'en' ? 'Claim Deal' : 'Mua Ngay'}
                    </td>
                    {compareProducts.map((p) => (
                      <td key={p.id} className="p-4 space-y-2">
                        <button
                          onClick={() => onOpenOutbound(p, 'amazon')}
                          className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-xs shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <span>{lang === 'en' ? 'Check Amazon Price' : 'Xem Giá Amazon'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onOpenDetails(p)}
                          className="w-full py-1.5 text-center text-[11px] font-bold text-blue-600 hover:underline cursor-pointer"
                        >
                          {lang === 'en' ? 'View Full Lab Specs' : 'Xem Đầy Đủ Chi Tiết'}
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
