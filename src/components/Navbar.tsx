import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Bot, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { DesignSwitcher } from './DesignSwitcher';

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    }, [i18n.language]);

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
    };

    return (
        <nav className="nav-glass">
            <div className="layout-container flex justify-between items-center h-full">

                {/* Brand Logo */}
                <Link to="/" className="flex items-center gap-3 no-underline">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#111] border border-yellow-500/20 shadow-[0_0_15px_rgba(250,204,21,0.1)]">
                        <Bot size={24} className="text-yellow-500" />
                    </div>
                    <span className="font-extrabold text-2xl tracking-tight text-white hidden sm:block">
                        ELHAWY AI
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-6">
                    <Link to="/" className="nav-link">{t('nav.home')}</Link>
                    <Link to="/" className="nav-link">{t('nav.library')}</Link>
                    <Link to="/" className="nav-link">{t('nav.articles')}</Link>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-3">
                    <button onClick={toggleLanguage} className="btn-secondary flex items-center gap-2 py-2 px-4">
                        <Globe size={16} />
                        <span className="text-sm font-medium">{i18n.language === 'ar' ? 'English' : 'العربية'}</span>
                    </button>

                    <div className="w-px h-6 bg-white/10 mx-1 hidden sm:block"></div>

                    <button onClick={() => navigate('/admin')} className="hidden md:block text-gray-400 hover:text-white transition-colors text-sm font-bold bg-transparent border-none cursor-pointer">
                        {t('nav.login')}
                    </button>

                    <button className="btn-primary py-2 px-6">
                        {t('nav.add_tool')}
                    </button>
                </div>
            </div>
        </nav>
    );
};
