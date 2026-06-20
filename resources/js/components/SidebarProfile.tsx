import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const SidebarProfile = () => {
    const { t } = useLanguage();

    return (
        <div className="hidden lg:flex w-full lg:w-[380px] bg-[#2a2a2a]/50 border-r border-white/5 lg:h-full lg:rounded-l-[30px] flex-col relative z-20 shadow-xl backdrop-blur-md">
            <div className="p-10 flex-1 flex flex-col items-center justify-center">
                <div className="w-40 h-40 rounded-full border-[3px] border-white/10 overflow-hidden mb-6 relative z-10 bg-[#111] flex items-center justify-center">
                    <img
                        src="/images/about.webp"
                        alt="Maulana Haekal Noval Akbar"
                        className="w-full h-full object-cover object-top"
                    />
                </div>

                <h1 className="text-3xl text-white font-bold mb-2 text-center">
                    Maulana Haekal Noval Akbar
                </h1>
                <p className="text-neutral-300 text-sm mb-8 text-center font-light">
                    {t('about.title')}
                </p>

                <div className="flex gap-4 mb-10">
                    <a href="https://www.linkedin.com/in/maulana-haekal/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-transparent border border-white/20 flex items-center justify-center text-white hover:text-primary-cyan hover:border-primary-cyan hover:bg-white/5 transition-all">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/novalakbar38/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-transparent border border-white/20 flex items-center justify-center text-white hover:text-primary-cyan hover:border-primary-cyan hover:bg-white/5 transition-all">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://github.com/lebefriedlich" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-transparent border border-white/20 flex items-center justify-center text-white hover:text-primary-cyan hover:border-primary-cyan hover:bg-white/5 transition-all">
                        <i className="bi bi-github"></i>
                    </a>
                </div>
            </div>

            <div className="w-full mt-auto">
                <button
                    onClick={() => window.dispatchEvent(new CustomEvent('navigateSection', { detail: 'contact' }))}
                    className="block w-full py-5 text-center text-white font-semibold text-sm tracking-wider uppercase border-t border-white/10 hover:text-primary-cyan hover:bg-white/5 transition-colors"
                >
                    {t('hero.cta')}
                </button>
            </div>
        </div>
    );
};

export default SidebarProfile;
