import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, CheckCircle2, Globe, Cpu, Zap, LayoutTemplate } from 'lucide-react';
import { TOOLS } from '../data/tools';

export const ToolDetail = () => {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    const tool = TOOLS.find(t => t.id === id);
    const isRTL = i18n.language === 'ar';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!tool) {
        return (
            <div className="layout-container py-32 text-center bg-main min-h-screen">
                <h2 className="text-3xl font-extrabold mb-6 text-primary tracking-tighter">{t('detail.not_found')}</h2>
                <Link to="/" className="text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 font-semibold" style={{ textDecoration: 'none' }}>
                    {isRTL ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
                    {t('tool.back')}
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-main min-h-screen pb-24 relative">
            {/* Soft Background setup */}
            <div className="grid-bg" style={{ opacity: 0.3 }} />
            <div className="hero-bg" style={{ opacity: 0.6 }} />

            {/* Clean Corporate Header */}
            <div className="py-20 mb-8 border-b border-color" style={{ background: 'var(--bg-secondary)' }}>
                <div className="layout-container">
                    <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-12 text-sm font-semibold" style={{ textDecoration: 'none' }}>
                        {isRTL ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                        {t('tool.back')}
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        {/* Minimalist Premium Image Container */}
                        <div className="w-full lg:w-[45%] rounded-2xl overflow-hidden shrink-0" style={{ padding: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-main)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                            <img src={tool.imageUrl} alt={tool.name} className="w-full h-full object-cover rounded-xl border border-color" />
                        </div>

                        <div className="flex-1 flex flex-col justify-center">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="corp-pill flex items-center gap-2" style={{ padding: '6px 14px', fontSize: '12px' }}>
                                    <Cpu size={14} className="text-muted" /> {tool.category}
                                </span>
                                <span className="corp-pill flex items-center gap-2" style={{ padding: '6px 14px', fontSize: '12px' }}>
                                    <Zap size={14} className="text-muted" /> {tool.pricing}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-primary">
                                {tool.name}
                            </h1>
                            <p className="text-xl text-secondary leading-relaxed max-w-2xl font-medium">
                                {tool.shortDescription}
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <a
                                    href={tool.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                    style={{ padding: '16px 32px', fontSize: '16px', textDecoration: 'none' }}
                                >
                                    {t('detail.cta_btn')} <Globe size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detail Content Grid */}
            <div className="layout-container" style={{ marginTop: '2rem' }}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    <div className="lg:col-span-2 flex flex-col gap-10">
                        <section>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-color text-primary" style={{ paddingBottom: '16px' }}>
                                <LayoutTemplate className="text-muted" size={24} />
                                {t('detail.engine')}
                            </h2>
                            <div className="text-secondary text-lg leading-relaxed font-medium whitespace-pre-line" style={{ lineHeight: 1.8 }}>
                                {tool.detailedDescription}
                            </div>
                        </section>

                        {tool.features && tool.features.length > 0 && (
                            <section style={{ marginTop: '2rem' }}>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-color text-primary" style={{ paddingBottom: '16px' }}>
                                    <CheckCircle2 className="text-muted" size={24} />
                                    {t('detail.features')}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                    {tool.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-4 rounded-xl border-color transition-colors" style={{ padding: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
                                            <div className="shrink-0 mt-0.5">
                                                <CheckCircle2 className="text-muted" size={20} />
                                            </div>
                                            <span className="text-primary font-medium text-sm leading-relaxed">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky corp-card" style={{ padding: '32px', top: '100px' }}>
                            <h3 className="font-bold text-xl text-primary mb-6">{t('detail.tech_details')}</h3>

                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center py-3 border-b border-color">
                                    <span className="text-secondary font-medium">{t('tool.category')}</span>
                                    <span className="font-bold text-primary">{tool.category}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-color">
                                    <span className="text-secondary font-medium">{t('tool.pricing')}</span>
                                    <span className="font-bold text-primary">{tool.pricing}</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="text-secondary font-medium">{t('tool.platform')}</span>
                                    <span className="font-bold text-primary">{t('tool.web')}</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-color text-center">
                                <a
                                    href={tool.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full justify-center"
                                    style={{ textDecoration: 'none' }}
                                >
                                    {t('detail.cta_btn')} <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
