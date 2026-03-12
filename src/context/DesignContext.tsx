import React, { createContext, useContext, useState, useEffect } from 'react';

type DesignTheme = 'nano-banana' | 'apple-clean' | 'stripe-cosmic';

interface DesignContextType {
    theme: DesignTheme;
    setTheme: (theme: DesignTheme) => void;
}

const DesignContext = createContext<DesignContextType | undefined>(undefined);

export const DesignProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<DesignTheme>(() => {
        const saved = localStorage.getItem('site-design-theme');
        return (saved as DesignTheme) || 'nano-banana';
    });

    useEffect(() => {
        localStorage.setItem('site-design-theme', theme);
        // Apply class to body
        document.body.className = `theme-${theme}`;
    }, [theme]);

    return (
        <DesignContext.Provider value={{ theme, setTheme }}>
            {children}
        </DesignContext.Provider>
    );
};

export const useDesign = () => {
    const context = useContext(DesignContext);
    if (!context) throw new Error('useDesign must be used within DesignProvider');
    return context;
};
