import React, { useState, useEffect } from 'react';
import { Search, Trophy, Clock, Star, CalendarDays, Zap, Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
    onSearch: (query: string) => void;
    searchQuery: string;
    activeCategory: string | null;
    onCategoryChange: (category: string | null) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, searchQuery, activeCategory, onCategoryChange }) => {
    const { t } = useTranslation();

    const sliderTexts = [
        {
            title: "اكتشف أدوات الذكاء الاصطناعي",
            subtitle: "اكثر من 10893 من أدوات الذكاء الاصطناعي، أبق على إطلاع دائم مع دليلنا الشامل."
        },
        {
            title: "ضاعف إنتاجيتك الآن",
            subtitle: "أفضل أدوات الذكاء الاصطناعي بين يديك لإنجاز مهامك بسرعة واحترافية."
        },
        {
            title: "مستقبلك يبدأ هنا",
            subtitle: "تصفح أحدث التقنيات واكتشف كيف يمكن للذكاء الاصطناعي أن يغير مسار عملك."
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % sliderTexts.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

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
        <div className="relative flex flex-col items-center justify-center pt-32 pb-16 px-4" style={{ backgroundColor: '#000', minHeight: '600px' }}>

            {/* Animated Title Text Slider Container */}
            <div className="text-center" style={{ maxWidth: '800px', marginBottom: '40px', minHeight: '120px', position: 'relative', width: '100%' }}>
                {sliderTexts.map((slide, idx) => (
                    <div
                        key={idx}
                        className="absolute inset-0 w-full"
                        style={{
                            opacity: currentSlide === idx ? 1 : 0,
                            visibility: currentSlide === idx ? 'visible' : 'hidden',
                            transition: 'opacity 0.8s ease-in-out, visibility 0.8s',
                            zIndex: currentSlide === idx ? 10 : 0
                        }}
                    >
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-relaxed tracking-tight">
                            {slide.title}
                        </h3>
                        <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                            {slide.subtitle}
                        </p>
                    </div>
                ))}
            </div>

            {/* Glowing Animated Search Bar exactly like requested */}
            <div className="search-wrapper-animated animate-fade-in-up mb-12" style={{ animationDelay: '0.3s' }}>
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
