import React from 'react';
import { Search, Trophy, Clock, Star, CalendarDays, Zap, Menu, MessageCircle, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

interface HeroProps {
    onSearch: (query: string) => void;
    searchQuery: string;
    activeCategory: string | null;
    onCategoryChange: (category: string | null) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, searchQuery, activeCategory, onCategoryChange }) => {
    const { t } = useTranslation();

    const EXACT_CATEGORIES = [
        { name: 'ادوات الهواتف الذكية', isPurple: true, icon: Zap },
        { name: 'ادوات اليوم', isPurple: true, icon: CalendarDays },
        { name: 'أدوات مميزة', isPurple: true, icon: Star },
        { name: 'احدث الادوات', isPurple: true, icon: Clock },
        { name: 'Top 100', isPurple: true, icon: Trophy },
        { name: 'وسائل التواصل الاجتماعي', isPurple: false },

        { name: 'إنشاء الصور', isPurple: false },
        { name: 'إنشاء الفيديو', isPurple: false },
        { name: 'إنشاء الموسيقى', isPurple: false },
        { name: 'الادوات التعليمية', isPurple: false },
        { name: 'تعليم اللغات', isPurple: false },
        { name: 'إنشاء القصص', isPurple: false },
        { name: 'الشؤون القانونية', isPurple: false },
        { name: 'الصحة', isPurple: false },
        { name: 'تربية الأطفال', isPurple: false },
        { name: 'التطوير والبرمجة', isPurple: false },
        { name: 'الصوتيات', isPurple: false },
        { name: 'تحويل النص الى كلام', isPurple: false },

        { name: 'مساعد الدراسة', isPurple: false },
        { name: 'قواعد بيانات', isPurple: false },
        { name: 'انشاء الكورسات', isPurple: false },
        { name: '3D', isPurple: false },
        { name: 'تعديل الصور', isPurple: false },
        { name: 'افكار هدايا', isPurple: false },
        { name: 'تحليل البيانات', isPurple: false },
        { name: 'الشركات الناشئة', isPurple: false },
        { name: 'تحويل النص الى فيديو', isPurple: false },
        { name: 'التصميم الداخلي', isPurple: false },
        { name: 'شؤون الموظفين', isPurple: false },
        { name: 'كتابة المقالات', isPurple: false },
        { name: 'كل الاقسام', isPurple: true, icon: Menu }
    ];

    return (
        <div className="relative flex flex-col items-center justify-start pt-24 pb-16 px-4" style={{ backgroundColor: '#000', minHeight: '600px' }}>

            {/* Nano Banana Presentation Swiper completely replacing text slider */}
            <div className="w-full max-w-7xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.1)] border border-[#333]">
                <Swiper
                    spaceBetween={0}
                    effect={'fade'}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    modules={[Autoplay, EffectFade, Pagination]}
                    className="w-full h-[350px] md:h-[450px]"
                >
                    {/* Slide 1: Site Identity */}
                    <SwiperSlide>
                        <div className="relative w-full h-full bg-black flex items-center justify-center text-center px-4">
                            <img src="/assets/slider/slide1.png" alt="Nano Banana Style Slide" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                            <div className="relative z-10 max-w-3xl">
                                <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 mb-4 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">ELHAWY AI TOOLS</h2>
                                <h3 className="text-2xl md:text-3xl text-white font-bold mb-4">اكتشف أدوات الذكاء الاصطناعي</h3>
                                <p className="text-gray-300 text-lg md:text-xl font-medium">أكثر من 150+ أداة ذكاء اصطناعي، أبق على إطلاع دائم مع دليلنا الشامل.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2: Site Features */}
                    <SwiperSlide>
                        <div className="relative w-full h-full bg-black flex items-center justify-center text-center px-4">
                            <img src="/assets/slider/slide2.png" alt="Nano Banana Style Slide" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                            <div className="relative z-10 max-w-3xl">
                                <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 mb-6 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">مميزات المنصة</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right" dir="rtl">
                                    <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 p-4 rounded-xl">
                                        <p className="text-white text-lg font-bold">🚀 زيادة فائقة للإنتاجية</p>
                                    </div>
                                    <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 p-4 rounded-xl">
                                        <p className="text-white text-lg font-bold">🔍 فلاتر وبحث ذكي</p>
                                    </div>
                                    <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 p-4 rounded-xl">
                                        <p className="text-white text-lg font-bold">📊 تحديثات يومية للأدوات</p>
                                    </div>
                                    <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 p-4 rounded-xl">
                                        <p className="text-white text-lg font-bold">💡 تصنيفات شاملة ومتنوعة</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 3: Admin Connect (FB & WhatsApp) */}
                    <SwiperSlide>
                        <div className="relative w-full h-full bg-black flex items-center justify-center text-center px-4">
                            <img src="/assets/slider/slide3.png" alt="Nano Banana Style Slide" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                            <div className="relative z-10 max-w-3xl">
                                <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 mb-8 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">التواصل مع الإدارة</h2>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <a href="https://wa.me/201022104948" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#1a1c23]/80 backdrop-blur-md border border-[#25D366]/50 text-white hover:bg-[#25D366] transition-all duration-300 text-lg font-bold shadow-[0_0_15px_rgba(37,211,102,0.3)]">
                                        <MessageCircle size={24} />
                                        <span>تواصل عبر واتساب</span>
                                    </a>

                                    <a href="https://www.facebook.com/MohamedElhawy0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#1a1c23]/80 backdrop-blur-md border border-[#1877F2]/50 text-white hover:bg-[#1877F2] transition-all duration-300 text-lg font-bold shadow-[0_0_15px_rgba(24,119,242,0.3)]">
                                        <Facebook size={24} />
                                        <span>الصفحة الرسمية بالفيسبوك</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Glowing Animated Search Bar exactly like requested */}
            <div className="search-wrapper-animated animate-fade-in-up mb-12 w-full max-w-3xl" style={{ animationDelay: '0.1s' }}>
                <div className="search-inner-box">
                    <Search size={22} className="hero-search-icon" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => onSearch(e.target.value)}
                        className="hero-search-input"
                        placeholder={t('hero.search_placeholder')}
                        dir="auto"
                    />
                </div>
            </div>

            {/* Dense Exact Category Cluster matching aitoolsbot styling natively */}
            <ul className="bot-cat-container w-full max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s', padding: '0 16px' }}>
                {EXACT_CATEGORIES.map((cat, idx) => {
                    const Icon = cat.icon;
                    return (
                        <li key={`${cat.name}-${idx}`}>
                            <button
                                onClick={() => onCategoryChange(cat.name === 'كل الاقسام' ? null : cat.name)}
                                className={`bot-cat-pill ${cat.isPurple || activeCategory === cat.name ? 'purple-variant' : ''}`}
                            >
                                {/* Putting Icon first naturally pushes it right in RTL layout */}
                                {Icon && <Icon size={18} className="text-current" />}
                                <span className="truncate">{cat.name}</span>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};
