import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains('dark'));
    }, []);

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        const dark = document.documentElement.classList.contains('dark');
        setIsDark(dark);
        localStorage.theme = dark ? 'dark' : 'light';
    };

    return (
        <div className="hidden lg:flex flex-col gap-4 z-[120]">
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
            <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-[72px] py-2 bg-[#222]/80 backdrop-blur-xl border border-white/10 rounded-full hover:bg-[#333]/80 hover:border-primary-cyan/50 transition-all shadow-lg text-primary-cyan hover:rotate-12 self-end"
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
                <i className={`bi ${isDark ? 'bi-sun' : 'bi-moon'} text-lg`}></i>
            </button>
        </div>
    );
};

export default LanguageSwitcher;
