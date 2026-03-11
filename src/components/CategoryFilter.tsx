import React from 'react';
import { useTranslation } from 'react-i18next';
import { CATEGORIES } from '../data/tools';

interface CategoryFilterProps {
    activeCategory: string | null;
    onCategoryChange: (category: string | null) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
    activeCategory,
    onCategoryChange
}) => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-wrap items-center justify-center gap-3">
            <button
                onClick={() => onCategoryChange(null)}
                className={`corp-pill ${activeCategory === null ? 'active' : ''}`}
                style={{ padding: '8px 24px' }}
            >
                {t('filter.all')}
            </button>

            {CATEGORIES.map(category => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`corp-pill ${activeCategory === category ? 'active' : ''}`}
                    style={{ padding: '8px 18px', fontSize: '14px' }}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
