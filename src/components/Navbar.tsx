import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Bot, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { DesignSwitcher } from './DesignSwitcher';

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    // We ignore light theme in this extreme dark tech design, it's always dark-inspired
    const navigate = useNavigate();

    useEffect(() => {
        document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    }, [i18n.language]);

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
    };

    return (
        <nav className="sticky w-full nav-glass">
            <div className="layout-container flex justify-between items-center" style={{ height: '80px' }}>

                {/* Glowing Logo */}
                <Link to="/" className="flex items-center gap-3 text-primary" style={{ textDecoration: 'none' }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#111] border border-[#222] shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                        <Bot size={24} className="text-[#a855f7]" />
                    </div>
                    <span className="font-extrabold text-2xl tracking-tight text-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>
                        ELHAWY AI
                    </span>
                </Link>

                {/* Center Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="nav-link">{t('nav.home')}</Link>
                    <Link to="/" className="nav-link">{t('nav.library')}</Link>
                    <Link to="/" className="nav-link">{t('nav.articles')}</Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <DesignSwitcher />

                    <button onClick={toggleLanguage} className="btn-secondary flex items-center gap-2">
                        <Globe size={18} />
                        <span style={{ fontSize: '14px', paddingTop: '2px' }}>{i18n.language === 'ar' ? 'English' : 'العربية'}</span>
                    </button>

                    <div style={{ width: '1px', height: '24px', background: 'var(--border-color)', margin: '0 8px' }}></div>

                    <button onClick={() => navigate('/admin')} className="hidden sm:flex btn-secondary text-muted hover:text-white" style={{ border: 'none' }}>
                        {t('nav.login')}
                    </button>

                    <button className="btn-primary">
                        {t('nav.add_tool')}
                    </button>
                </div>
            </div>
        </nav>
    );
};
