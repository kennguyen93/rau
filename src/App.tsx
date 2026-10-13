import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Scale, 
  SlidersHorizontal, 
  Flame, 
  Filter, 
  ArrowUpDown, 
  Check, 
  Tag, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { PRODUCTS } from './data/products';
import { Product, NicheCategory } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { ProductQuiz } from './components/ProductQuiz';
import { OutboundModal } from './components/OutboundModal';
import { CouponsSection } from './components/CouponsSection';
import { AffiliateTipsModal } from './components/AffiliateTipsModal';
import { TrustBadges } from './components/TrustBadges';
import { Footer } from './components/Footer';

export default function App() {
  // Navigation & Filter State
  const [activeCategory, setActiveCategory] = useState<NicheCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'lab' | 'discount' | 'rating' | 'price-asc' | 'price-desc'>('lab');
  const [flashDealsOnly, setFlashDealsOnly] = useState<boolean>(false);
  const [lang, setLang] = useState<'en' | 'vi'>('en'); // Defaults to American English for US market, with 1-click toggle

  // Interactive CRO Modals State
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<Product | null>(null);
  const [outboundData, setOutboundData] = useState<{ product: Product; target: 'amazon' | 'official' } | null>(null);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [isAffiliateGuideOpen, setIsAffiliateGuideOpen] = useState<boolean>(false);

  // Toggle Language
  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'vi' : 'en'));
  };

  // Compare List Management
  const handleToggleCompare = (product: Product) => {
    setCompareList(prev => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      } else {
        if (prev.length >= 4) {
          alert(lang === 'en' ? 'You can compare up to 4 products at a time.' : 'Bạn có thể so sánh tối đa 4 sản phẩm cùng lúc.');
          return prev;
        }
        return [...prev, product];
      }
    });
  };

  const handleRemoveCompare = (productId: string) => {
    setCompareList(prev => prev.filter(p => p.id !== productId));
  };

  const handleClearCompare = () => {
    setCompareList([]);
  };

  // Open Outbound Affiliate Redirect
  const handleOpenOutbound = (product: Product, target: 'amazon' | 'official') => {
    setOutboundData({ product, target });
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category filter
      if (activeCategory !== 'all' && product.category !== activeCategory) {
        return false;
      }
      // Flash deal filter
      if (flashDealsOnly && !product.isFlashDeal) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesTagline = product.tagline.toLowerCase().includes(query);
        const matchesSpecs = product.quickSpecs.some(s => s.value.toLowerCase().includes(query));
        if (!matchesName && !matchesBrand && !matchesTagline && !matchesSpecs) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'lab':
          return b.labScores.overall - a.labScores.overall;
        case 'discount':
          return b.discountPercent - a.discountPercent;
        case 'rating':
          return b.rating - a.rating;
        case 'price-asc':
          return a.salePrice - b.salePrice;
        case 'price-desc':
          return b.salePrice - a.salePrice;
        default:
          return 0;
      }
    });
  }, [activeCategory, searchQuery, sortBy, flashDealsOnly]);

  const scrollToDeals = () => {
    const el = document.getElementById('products-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      
      {/* 1. HEADER */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        compareCount={compareList.length}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenAffiliateGuide={() => setIsAffiliateGuideOpen(true)}
        lang={lang}
        onToggleLang={toggleLang}
      />

      {/* 2. HERO CRO BANNER */}
      <Hero
        onSelectCategory={setActiveCategory}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onJumpToDeals={scrollToDeals}
        totalProductsCount={PRODUCTS.length}
        lang={lang}
      />

      {/* 3. MAIN CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 flex-1 w-full py-8 space-y-8">
        
        {/* PRODUCTS SECTION ANCHOR */}
        <section id="products-section" className="space-y-6">
          
          {/* SECTION HEADER & CONTROL BAR */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900">
                  {activeCategory === 'all' && (lang === 'en' ? 'Top Rated US Picks (Tested in 2026)' : 'Top Sản Phẩm Nổi Bật Bán Chạy Tại Mỹ (2026)')}
                  {activeCategory === 'supplements' && (lang === 'en' ? 'Dietary Supplements & Biohacking' : 'Thực Phẩm Chức Năng Chuẩn NSF & GMP')}
                  {activeCategory === 'appliances' && (lang === 'en' ? 'Smart Home & Kitchen Appliances' : 'Đồ Gia Dụng Thông Minh Cao Cấp')}
                  {activeCategory === 'tech' && (lang === 'en' ? 'Consumer Tech & Smart Gadgets' : 'Công Nghệ, Âm Thanh & Phụ Kiện Sạc GaN')}
                  {activeCategory === 'physical' && (lang === 'en' ? 'Physical Goods & Everyday Living' : 'Sản Phẩm Vật Lý & Chăm Sóc Sức Khỏe Đời Sống')}
                  {activeCategory === 'grooming' && (lang === 'en' ? 'The Beard Struggle & Luxury Men’s Grooming' : 'The Beard Struggle & Chăm Sóc Râu Nam Giới Đẳng Cấp')}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {lang === 'en'
                  ? `Showing ${filteredProducts.length} verified products with direct merchant & Amazon deals.`
                  : `Hiển thị ${filteredProducts.length} sản phẩm đã kiểm nghiệm có liên kết mua trực tiếp tại Mỹ.`}
              </p>
            </div>

            {/* CONTROLS: SORT & FLASH TOGGLE */}
            <div className="flex flex-wrap items-center gap-2.5">
              
              {/* FLASH DEAL CHECKBOX PILL */}
              <button
                onClick={() => setFlashDealsOnly(prev => !prev)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border ${
                  flashDealsOnly 
                    ? 'bg-red-50 text-red-700 border-red-300 ring-2 ring-red-400/20' 
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Flame className={`w-3.5 h-3.5 ${flashDealsOnly ? 'text-red-600 animate-bounce' : 'text-slate-400'}`} />
                <span>{lang === 'en' ? '⚡ Flash Deals Only' : '⚡ Chỉ Deal Giảm Sâu'}</span>
              </button>

              {/* SORT DROPDOWN */}
              <div className="relative inline-flex items-center">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="pl-8 pr-7 py-1.5 text-xs font-bold rounded-xl bg-white border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer appearance-none shadow-2xs"
                >
                  <option value="lab">{lang === 'en' ? 'Highest Lab Score' : 'Điểm Thử Nghiệm Cao Nhất'}</option>
                  <option value="discount">{lang === 'en' ? 'Biggest Discount %' : 'Phần Trăm Giảm Nhiều Nhất'}</option>
                  <option value="rating">{lang === 'en' ? 'Highest Rating (Stars)' : 'Đánh Giá Sao Cao Nhất'}</option>
                  <option value="price-asc">{lang === 'en' ? 'Price: Low to High' : 'Giá: Thấp Đến Cao'}</option>
                  <option value="price-desc">{lang === 'en' ? 'Price: High to Low' : 'Giá: Cao Đến Thấp'}</option>
                </select>
                <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2.5 pointer-events-none" />
              </div>

            </div>
          </div>

          {/* ACTIVE NICHE DESCRIPTION & BUYER REASSURANCE */}
          {activeCategory !== 'all' && (
            <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-4 text-xs text-blue-900 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold block mb-0.5">
                  {lang === 'en' ? 'US Consumer Assurance Protocol:' : 'Cam Kết Chất Lượng Chuẩn Tiêu Dùng Mỹ:'}
                </strong>
                {activeCategory === 'supplements' && (
                  lang === 'en' 
                    ? 'All listed supplements are manufactured in cGMP-compliant, FDA-registered US facilities with independent 3rd-party assays for potency, bioavailability, and heavy metal limits.'
                    : 'Mọi thực phẩm chức năng trong danh sách đều sản xuất tại nhà máy chuẩn cGMP tại Mỹ, có chứng nhận độc lập về độ hấp thụ và sàng lọc kim loại nặng.'
                )}
                {activeCategory === 'appliances' && (
                  lang === 'en'
                    ? 'All appliances undergo continuous 72-hour thermal stress tests, decibel noise floor measurements, and energy efficiency verification (Energy Star / UL listed).'
                    : 'Đồ gia dụng đều trải qua kiểm tra độ ồn thực tế decibel, hiệu suất tiết kiệm điện Energy Star và độ bền vận hành liên tục.'
                )}
                {activeCategory === 'tech' && (
                  lang === 'en'
                    ? 'Tech gadgets are benchmarked on acoustic frequency response, real-world battery discharge cycles, and GaN safety thermals.'
                    : 'Thiết bị công nghệ được đo đáp tuyến âm thanh thực tế, chu kỳ pin bền bỉ và độ tản nhiệt an toàn theo tiêu chuẩn FCC.'
                )}
                {activeCategory === 'physical' && (
                  lang === 'en'
                    ? 'Physical goods are validated by chiropractic panels or filtration lab standards (CertiPUR-US foam, NSF-177 water safety).'
                    : 'Các sản phẩm vật lý được bác sĩ nắn chỉnh cột sống kiểm chứng tư thế và đo lường khả năng lọc clo theo chuẩn NSF-177.'
                )}
                {activeCategory === 'grooming' && (
                  lang === 'en'
                    ? 'The Beard Struggle grooming arsenal utilizes 100% organic cold-pressed carrier oils, dermatologist-tested hypoallergenic formulas, and MCH tourmaline ceramic heated styling with zero-scald facial protection.'
                    : 'Các sản phẩm The Beard Struggle sử dụng 100% dầu hữu cơ ép lạnh, chứng nhận da liễu không gây kích ứng và lược sấy nhiệt gốm tourmaline bảo vệ da mặt tuyệt đối.'
                )}
              </div>
            </div>
          )}

          {/* PRODUCTS LISTING GRID */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto text-2xl">
                🔍
              </div>
              <h3 className="font-heading font-black text-xl text-slate-800">
                {lang === 'en' ? 'No Matching Products Found' : 'Không Tìm Thấy Sản Phẩm Phù Hợp'}
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                {lang === 'en' 
                  ? 'Try clearing your search query or switching category filters to see more tested items.' 
                  : 'Hãy thử xóa từ khóa tìm kiếm hoặc bỏ chọn bộ lọc để xem đầy đủ danh mục.'}
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); setFlashDealsOnly(false); }}
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition cursor-pointer"
              >
                {lang === 'en' ? 'Reset All Filters' : 'Đặt Lại Bộ Lọc'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenDetails={setSelectedDetailProduct}
                  onOpenOutbound={handleOpenOutbound}
                  isInCompare={compareList.some(p => p.id === product.id)}
                  onToggleCompare={handleToggleCompare}
                  lang={lang}
                />
              ))}
            </div>
          )}

        </section>

        {/* 4. ACTIVE COUPON VAULT SECTION */}
        <CouponsSection
          onOpenOutbound={handleOpenOutbound}
          lang={lang}
        />

        {/* 5. TRUST PILLARS & NEWSLETTER ALERT */}
        <TrustBadges
          lang={lang}
        />

      </main>

      {/* 6. STICKY BOTTOM COMPARE TRAY WHEN ITEMS SELECTED */}
      {compareList.length > 0 && !isCompareOpen && (
        <div className="fixed bottom-5 right-5 z-40 animate-in slide-in-from-bottom duration-300">
          <button
            onClick={() => setIsCompareOpen(true)}
            className="px-5 py-3 rounded-2xl bg-slate-900 text-white font-black text-xs sm:text-sm shadow-2xl hover:bg-blue-600 transition flex items-center gap-2.5 border border-slate-700 cursor-pointer group"
          >
            <Scale className="w-4 h-4 text-amber-400 group-hover:scale-110 transition" />
            <span>
              {lang === 'en' ? `Compare Selected (${compareList.length}/4)` : `Xem Bảng So Sánh (${compareList.length}/4)`}
            </span>
            <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] flex items-center justify-center">
              &rarr;
            </span>
          </button>
        </div>
      )}

      {/* 7. MODALS */}
      {/* Product Deep-Dive Review Modal */}
      <ProductDetailModal
        product={selectedDetailProduct}
        onClose={() => setSelectedDetailProduct(null)}
        onOpenOutbound={handleOpenOutbound}
        lang={lang}
      />

      {/* Comparison Matrix Modal */}
      {isCompareOpen && (
        <ComparisonMatrix
          compareProducts={compareList}
          onRemoveProduct={handleRemoveCompare}
          onClearAll={handleClearCompare}
          onOpenOutbound={handleOpenOutbound}
          onOpenDetails={(p) => {
            setIsCompareOpen(false);
            setSelectedDetailProduct(p);
          }}
          onClose={() => setIsCompareOpen(false)}
          lang={lang}
        />
      )}

      {/* Product Match Quiz Modal */}
      {isQuizOpen && (
        <ProductQuiz
          products={PRODUCTS}
          onClose={() => setIsQuizOpen(false)}
          onOpenDetails={(p) => {
            setIsQuizOpen(false);
            setSelectedDetailProduct(p);
          }}
          onOpenOutbound={handleOpenOutbound}
          lang={lang}
        />
      )}

      {/* Outbound Affiliate Redirect Modal */}
      {outboundData && (
        <OutboundModal
          product={outboundData.product}
          target={outboundData.target}
          onClose={() => setOutboundData(null)}
          lang={lang}
        />
      )}

      {/* Affiliate Strategy & Setup Guide Modal */}
      {isAffiliateGuideOpen && (
        <AffiliateTipsModal
          onClose={() => setIsAffiliateGuideOpen(false)}
          lang={lang}
        />
      )}

      {/* 8. FOOTER WITH LEGAL & FTC DISCLOSURES */}
      <Footer
        onSelectCategory={setActiveCategory}
        onOpenAffiliateGuide={() => setIsAffiliateGuideOpen(true)}
        lang={lang}
      />

    </div>
  );
}
