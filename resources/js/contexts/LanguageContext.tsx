import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../translations';

export type Language = 'en' | 'id';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    tArray: (key: string) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('en');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // Get from localStorage on mount
        const savedLanguage = localStorage.getItem('language') as Language | null;
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
            setLanguageState(savedLanguage);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        if (isClient) {
            localStorage.setItem('language', lang);
        }
    };

    const t = (key: string): string => {
        const keys = key.split('.');
        let value: any = translations[language];
        
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key;
            }
        }
        
        return typeof value === 'string' ? value : key;
    };

    const tArray = (key: string): string[] => {
        const keys = key.split('.');
        let value: any = translations[language];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return [];
            }
        }

        return Array.isArray(value) ? value : [];
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};
