import { useDesign } from '../context/DesignContext';
import { Palette, Check } from 'lucide-react';

export const DesignSwitcher = () => {
    const { theme, setTheme } = useDesign();

    const themes = [
        { id: 'nano-banana', name: 'Nano Banana (Premium)', color: '#fac915' },
        { id: 'apple-clean', name: 'Apple Clean (Minimal)', color: '#000000' },
        { id: 'stripe-cosmic', name: 'Stripe Cosmic (Modern)', color: '#635bff' },
    ] as const;

    return (
        <div className="relative group">
            <button className="nav-link flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors">
                <Palette size={20} />
                <span className="hidden lg:block text-sm">Design System</span>
            </button>

            <div className="absolute top-full mt-2 left-0 md:left-auto md:right-0 w-64 bg-secondary border border-color rounded-xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
                <div className="p-4 border-b border-color">
                    <h4 className="text-sm font-bold text-primary">Choose Design Style</h4>
                    <p className="text-xs text-secondary mt-1">Select your preferred professional aesthetic</p>
                </div>
                <div className="p-2 flex flex-col gap-1">
                    {themes.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => setTheme(t.id)}
                            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${theme === t.id ? 'bg-white/10 text-white' : 'hover:bg-white/5 text-gray-400'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: t.color }}></div>
                                <span className="text-sm font-medium">{t.name}</span>
                            </div>
                            {theme === t.id && <Check size={16} className="text-[color:var(--accent-color)]" />}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
