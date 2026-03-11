import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import type { Tool } from '../data/tools';

interface ToolCardProps {
    tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
    const { i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    return (
        <Link to={`/tool/${tool.id}`} className="exact-card" style={{ textDecoration: 'none' }}>

            {/* Top Image */}
            <div className="exact-card-img-wrapper">
                <img
                    src={tool.imageUrl}
                    alt={tool.name}
                />
            </div>

            {/* Content Area */}
            <div className="exact-card-content" dir={isRTL ? "rtl" : "ltr"}>

                {/* Title & External Link */}
                <div className="flex justify-between items-start mb-4">
                    <h3 className="exact-title">
                        {tool.name}
                    </h3>
                    <a href={tool.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>
                        <ExternalLink size={20} />
                    </a>
                </div>

                {/* Description */}
                <p className="exact-desc">
                    {tool.shortDescription}
                </p>

                {/* Category Pill (Aligned to layout start, e.g. Right in RTL, Left in LTR) */}
                <div className="flex items-start mb-8">
                    <span className="exact-category-pill">
                        {tool.category}
                    </span>
                </div>

                {/* Footer: Pricing & Details Button */}
                <div className="flex justify-between items-center mt-auto">
                    {/* Details Button with Gradient Border */}
                    <div className="exact-btn-details-wrapper">
                        <span className="exact-btn-details">
                            {isRTL ? 'تفاصيل' : 'Details'}
                        </span>
                    </div>

                    {/* Pricing Badge (Dark Purple) */}
                    <span className="exact-badge-pricing">
                        {tool.pricing}
                    </span>
                </div>

            </div>
        </Link>
    );
}
