import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="hidden lg:block fixed lg:top-10 lg:right-10 z-[120]">
            <button
                onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
                className="flex items-center gap-2 px-4 py-2 bg-[#222]/80 backdrop-blur-xl border border-white/10 rounded-full hover:bg-[#333]/80 hover:border-primary-cyan/50 transition-all shadow-lg group"
                title={language === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
            >
                <i className="bi bi-translate text-primary-cyan group-hover:rotate-12 transition-transform"></i>
                <span className="text-white text-sm font-semibold uppercase tracking-wider">
                    {language === 'en' ? 'EN' : 'ID'}
                </span>
            </button>
        </div>
    );
};

export default LanguageSwitcher;
