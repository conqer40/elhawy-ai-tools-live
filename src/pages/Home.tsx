import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Hero } from '../components/Hero';
import { ToolCard } from '../components/ToolCard';
import { TOOLS } from '../data/tools';

interface HomeProps {
    searchQuery: string;
    onSearch: (query: string) => void;
}

export const Home: React.FC<HomeProps> = ({ searchQuery, onSearch }) => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const filteredTools = useMemo(() => {
        return TOOLS.filter(tool => {
            const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tool.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tool.category.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory = activeCategory ? tool.category === activeCategory : true;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory]);

    return (
        <div className="flex flex-col min-h-screen">
            <Hero
                onSearch={onSearch}
                searchQuery={searchQuery}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
            />

            <div className="layout-container" style={{ marginTop: '-40px', paddingBottom: '100px', position: 'relative', zIndex: 20 }}>

                {/* Title & Filter Section */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-3xl font-extrabold text-primary mb-8 tracking-tight">
                        {t('home.categories_title')}
                    </h2>
                </div>

                {/* Tools Grid Area */}
                <div className="flex justify-between items-center mb-10 border-b border-color" style={{ paddingBottom: '16px' }}>
                    <h2 className="text-2xl font-bold text-primary tracking-tight">
                        {t('home.tools_title')}
                    </h2>
                    <span className="text-muted font-medium bg-secondary px-4 py-1.5 rounded-full text-sm border border-color">
                        {t('home.tools_count', { count: filteredTools.length })}
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ gap: '24px' }}>
                    {filteredTools.map(tool => (
                        <ToolCard key={tool.id} tool={tool} />
                    ))}
                </div>

                {filteredTools.length === 0 && (
                    <div className="py-20 text-center flex flex-col items-center justify-center">
                        <div className="w-24 h-24 mb-6 rounded-full bg-secondary flex items-center justify-center border border-color shadow-sm text-4xl">
                            🔍
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-3">No tools found (لم يتم العثور على نتائج)</h3>
                        <p className="text-secondary">Try adjusting your search criteria. (حاول تعديل شروط البحث)</p>
                    </div>
                )}
            </div>
        </div>
    );
}
