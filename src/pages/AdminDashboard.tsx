import { useTranslation } from 'react-i18next';
import { Plus, Edit2, Trash2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TOOLS } from '../data/tools';

export const AdminDashboard = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    return (
        <div className="layout-container py-12">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
                <div>
                    <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-[color:var(--accent-color)] transition-colors mb-4 text-sm font-medium">
                        {isRTL ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                        {t('nav.home')}
                    </Link>
                    <h1 className="text-3xl font-bold text-primary">{t('admin.title')}</h1>
                    <p className="text-secondary mt-1">{t('admin.tools_list')} ({TOOLS.length})</p>
                </div>

                <button className="corp-btn-primary py-3 px-6 shadow-md">
                    <Plus size={20} /> {t('admin.add_new')}
                </button>
            </div>

            <div className="corp-card overflow-hidden">
                <div className="overflow-x-auto p-1">
                    <table className="w-full text-sm text-left rtl:text-right">
                        <thead className="text-xs text-secondary uppercase bg-tertiary border-b border-color">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-semibold">الأداة</th>
                                <th scope="col" className="px-6 py-4 font-semibold">التصنيف</th>
                                <th scope="col" className="px-6 py-4 font-semibold">السعر</th>
                                <th scope="col" className="px-6 py-4 font-semibold text-center">الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TOOLS.map((tool) => (
                                <tr key={tool.id} className="bg-secondary border-b border-color hover:bg-tertiary transition-colors">
                                    <td className="px-6 py-4 font-bold text-primary whitespace-nowrap">
                                        {tool.name}
                                    </td>
                                    <td className="px-6 py-4 text-secondary">
                                        {tool.category}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-primary border border-color px-2 py-1 rounded text-xs font-semibold text-primary">{tool.pricing}</span>
                                    </td>
                                    <td className="px-6 py-4 flex justify-center gap-3">
                                        <button className="text-[color:var(--accent-color)] hover:text-blue-700 bg-[color:var(--accent-color)] bg-opacity-10 p-2 rounded-lg transition-colors" title={t('admin.edit')}>
                                            <Edit2 size={16} />
                                        </button>
                                        <button className="text-red-500 hover:text-red-700 bg-red-100 dark:bg-red-900/30 p-2 rounded-lg transition-colors" title={t('admin.delete')}>
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
