import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { TOOLS } from '../data/tools';

export const LatestCategories = () => {
    const { i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    // We need distinct categories for the tabs, let's take a slice of unique categories
    const categoriesToShow = [
        "التلخيص",
        "ملابس وموضة",
        "فحص الصور",
        "مقابلة العمل",
        "التقاط الحركة",
        "الإعلانات",
        "اللياقة البدنية"
    ];

    const [activeCategory, setActiveCategory] = useState(categoriesToShow[0]);

    // Try to find the first tool that matches the active category to show its preview
    const activeToolPreview = TOOLS.find(tool => tool.category === activeCategory) || TOOLS[0];

    return (
        <div className="py-20 mt-12 bg-[#050505] border-y border-[#151515] relative z-10 w-full overflow-hidden">
            <div className="layout-container">

                {/* Header / Titles as per screenshot */}
                <div className="flex justify-between items-center mb-16 border-b border-[#222] pb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                        اكتشف احدث الادوات في احدث الاقسام
                    </h2>
                    <div className="flex items-center gap-4">
                        <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">
                            احدث الاقسام المضافة
                        </h2>
                        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#5a32fa] to-transparent hidden md:block"></div>
                    </div>
                </div>

                <div className={`flex flex-col lg:flex-row gap-12 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>

                    {/* Detailed Preview Side (Left implicitly if RTL tab is on right) */}
                    <div className="lg:w-2/3 flex flex-col justify-center">
                        <div className="mb-10 text-right" dir="rtl">
                            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">{activeCategory}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl ml-auto">
                                {`استكشف قائمة أفضل تطبيقات الذكاء الاصطناعي لـ ${activeCategory}. ${activeToolPreview.shortDescription}`}
                            </p>
                            <Link to={`/?category=${activeCategory}`} className="exact-btn-details-wrapper inline-block" style={{ textDecoration: 'none' }}>
                                <span className="exact-btn-details px-8 py-3 text-lg">
                                    تفاصيل
                                </span>
                            </Link>
                        </div>

                        {/* Huge Image Preview */}
                        <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-[#222] relative" style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
                            {/* Soft top gradient over image to blend exactly like screenshot */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-60"></div>
                            <img
                                src={activeToolPreview.imageUrl}
                                alt={activeCategory}
                                className="w-full h-full object-cover transition-opacity duration-500"
                            />
                        </div>
                    </div>

                    {/* Tabs List Side (Right implicitly if RTL) */}
                    <div className="lg:w-1/3 flex flex-col justify-start">
                        <div className="flex flex-col gap-2">
                            {categoriesToShow.map((cat, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`text-right py-4 px-6 border-b border-[#111] transition-all flex items-center justify-end gap-3 hover:bg-[#111] ${activeCategory === cat ? 'text-white font-bold bg-[#111] border-r-4 border-r-[#a855f7]' : 'text-gray-500 font-medium'}`}
                                >
                                    <span className="text-lg">{cat}</span>
                                    <span className={`w-1.5 h-1.5 rounded-full ${activeCategory === cat ? 'bg-[#a855f7] shadow-[0_0_10px_#a855f7]' : 'bg-gray-700'}`}></span>
                                </button>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};
