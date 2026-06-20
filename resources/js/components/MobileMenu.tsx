import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface MobileMenuProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ activeSection, setActiveSection, isOpen, setIsOpen }) => {
    const { t, language, setLanguage } = useLanguage();

    const navItems = [
        { id: 'home', icon: 'bi-house-door', label: t('nav.home') },
        { id: 'about', icon: 'bi-person', label: t('nav.about') },
        { id: 'resume', icon: 'bi-file-earmark-text', label: t('nav.resume') },
        { id: 'portfolio', icon: 'bi-briefcase', label: t('nav.portfolio') },
        { id: 'contact', icon: 'bi-envelope', label: t('nav.contact') }
    ];

    const handleNavClick = (id: string) => {
        setActiveSection(id);
        setIsOpen(false);
    };

    return (
        <div className="lg:hidden">
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 right-4 z-[110] w-12 h-12 bg-primary-cyan text-white rounded-full flex items-center justify-center shadow-lg transition-transform"
            >
                <i className={`bi text-2xl ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
            </button>

            {/* Overlay Menu */}
            <div className={`fixed inset-0 bg-[#111]/95 backdrop-blur-xl z-[105] transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
                <div className="flex-1 overflow-y-auto py-12 px-6 flex flex-col items-center custom-scrollbar">
                    {/* Header Photo & Titles */}
                    <div className="w-40 h-40 min-w-[160px] min-h-[160px] flex-shrink-0 rounded-full border-[3px] border-white/10 overflow-hidden mb-6 relative z-10 bg-[#111] flex items-center justify-center">
                        <img
                            src="/images/about.webp"
                            alt="Maulana Haekal Noval Akbar"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                    <h2 className="text-3xl text-white font-bold mb-2 text-center">Maulana Haekal Noval Akbar</h2>
                    <h4 className="text-neutral-300 text-sm mb-6 text-center font-light">{t('about.title')}</h4>

                    {/* Language Switcher */}
                    <div className="flex items-center gap-1 mb-8 bg-white/5 p-1 rounded-full border border-white/10">
                        <button 
                            onClick={() => { setLanguage('en'); setIsOpen(false); }}
                            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${language === 'en' ? 'bg-primary-cyan text-white shadow-lg' : 'text-neutral-400 hover:text-white'}`}
                        >
                            EN
                        </button>
                        <button 
                            onClick={() => { setLanguage('id'); setIsOpen(false); }}
                            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${language === 'id' ? 'bg-primary-cyan text-white shadow-lg' : 'text-neutral-400 hover:text-white'}`}
                        >
                            ID
                        </button>
                    </div>

                    {/* Social Links */}
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

                    {/* Menu Links */}
                    <ul className="w-full flex flex-col gap-2 mb-10">
                        {navItems.map((item) => (
                            <li key={item.id} className="w-full">
                                <button
                                    onClick={() => handleNavClick(item.id)}
                                    className={`w-full flex items-center justify-center gap-4 py-3 px-6 rounded-xl transition-all ${activeSection === item.id
                                            ? 'text-primary-cyan font-bold'
                                            : 'text-neutral-300 hover:text-white'
                                        }`}
                                >
                                    <span className="text-lg">{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Contact Button */}
                    <div className="w-full mt-auto">
                        <button onClick={() => handleNavClick('contact')} className="block w-full py-5 text-center text-white font-semibold text-sm tracking-wider uppercase border-t border-white/10 hover:text-primary-cyan hover:bg-white/5 transition-colors">
                            {t('hero.cta')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
