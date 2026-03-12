import { useTranslation } from 'react-i18next';
import { Facebook, MessageCircle } from 'lucide-react';

export const Footer = () => {
    const { i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    return (
        <footer className="footer-1 w-full relative z-20 overflow-hidden">
            {/* Authentic aitoolsbot background pattern */}
            <img src="https://aitoolsbot.com/assets/front/img/footer-right.webp" alt="circuit" className="footer-1-shape" />

            <div className="layout-container py-16 relative z-10 flex flex-col items-center justify-center">

                {/* Decorative Line Top */}
                <div className="w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[#8b62fb]/50 to-transparent mb-10"></div>

                {/* Centered Content */}
                <div className="flex flex-col items-center gap-8 text-center" dir={isRTL ? "rtl" : "ltr"}>

                    <h3 className="text-gray-200 text-2xl font-bold tracking-wide">
                        جميع الحقوق محفوظة لـ Mohamed Elhawy
                    </h3>

                    <div className="flex flex-wrap items-center justify-center gap-8">
                        <a href="https://wa.me/201022104948" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#1a1c23] border border-[#2a2d36] text-gray-400 hover:text-[#25D366] hover:border-[#25D366]/50 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-[0_0_15px_rgba(37,211,102,0.2)]">
                            <MessageCircle size={20} />
                            <span>التواصل عبر واتساب (+201022104948)</span>
                        </a>

                        <a href="https://www.facebook.com/MohamedElhawy0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#1a1c23] border border-[#2a2d36] text-gray-400 hover:text-[#1877F2] hover:border-[#1877F2]/50 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-[0_0_15px_rgba(24,119,242,0.2)]">
                            <Facebook size={20} />
                            <span>الصفحة الرسمية على فيسبوك</span>
                        </a>
                    </div>
                </div>

                {/* Decorative Line Bottom */}
                <div className="w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[#00b8d9]/50 to-transparent mt-10"></div>

            </div>
        </footer>
    );
};
