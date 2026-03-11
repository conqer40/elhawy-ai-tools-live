import { useTranslation } from 'react-i18next';
import { Twitter, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
    const { i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    return (
        <footer className="footer-1 w-full relative z-20 overflow-hidden">
            {/* Authentic aitoolsbot background pattern */}
            <img src="https://aitoolsbot.com/assets/front/img/footer-right.webp" alt="circuit" className="footer-1-shape" />

            <div className="layout-container py-12 relative z-10 pt-16">

                {/* Main Footer Content */}
                <div className={`flex flex-col md:flex-row justify-between items-start gap-12 ${isRTL ? 'md:flex-row-reverse' : ''}`}>

                    {/* Section 1: Features (Right side in RTL) */}
                    <div className="text-right flex-1" dir={isRTL ? "rtl" : "ltr"}>
                        <h3 className="text-[#f97316] font-bold text-lg mb-6 tracking-tight">
                            نوفر عليك ساعات طويلة عن طريق البحث السريع في موقعنا
                        </h3>
                        {/* Decorative line under title */}
                        <div className="w-full max-w-md h-[2px] bg-[#111] rounded-full mt-8"></div>
                    </div>

                    {/* Section 2: Links (Middle) */}
                    <div className="flex flex-col md:flex-row gap-16 text-right" dir={isRTL ? "rtl" : "ltr"}>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-bold text-lg mb-2">تواصل معي</h4>
                            <a href="https://wa.me/201022104948" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">التواصل عبر واتساب</a>
                            <a href="https://www.facebook.com/MohamedElhawy0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">فيسبوك</a>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-bold text-lg mb-2">القوانين</h4>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">سياسة الخصوصية</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">الشروط والأحكام</a>
                        </div>

                    </div>

                </div>

                {/* Bottom Bar: Copyright & Socials */}
                <div className={`mt-16 pt-6 border-t border-[#1a1a24] flex flex-col md:flex-row items-center justify-between gap-6 ${isRTL ? 'md:flex-row-reverse' : ''}`} dir={isRTL ? "rtl" : "ltr"}>

                    <p className="text-gray-500 text-sm font-medium">
                        جميع الحقوق محفوظة لـ Mohamed Elhawy
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="https://www.facebook.com/MohamedElhawy0" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-sm">
                            Facebook <Facebook size={16} />
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
};
