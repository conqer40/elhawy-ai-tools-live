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
        <div className="relative flex flex-col items-center justify-start pt-40 pb-16 px-4" style={{ backgroundColor: '#000', minHeight: '600px' }}>

            {/* Restored Clean Text Header (Nano Banana Style) */}
            <div className="text-center mb-12 animate-fade-in-up" style={{ maxWidth: '800px' }}>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                    اكتشف أفضل <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">أدوات الذكاء الاصطناعي</span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                    أكثر من 150+ أداة ذكاء اصطناعي منسقة بعناية، محدثة يومياً لتجعل عملك أسرع وأذكى.
                </p>
            </div>

            {/* Glowing Animated Search Bar */}
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
