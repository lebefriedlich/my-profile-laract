import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface FloatingNavProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const FloatingNav = ({ activeSection, setActiveSection }: FloatingNavProps) => {
    const { t } = useLanguage();

    const navItems = [
        { id: 'home', icon: 'bi-house-door', label: t('nav.home') },
        { id: 'about', icon: 'bi-person', label: t('nav.about') },
        { id: 'resume', icon: 'bi-file-earmark-text', label: t('nav.resume') },
        { id: 'portfolio', icon: 'bi-briefcase', label: t('nav.portfolio') },
        { id: 'contact', icon: 'bi-envelope', label: t('nav.contact') },
    ];

    return (
        <div className="w-[70px] bg-[#444] rounded-[35px] shadow-[0_0_30px_rgba(0,0,0,0.2)] py-4 flex flex-col items-center gap-4">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className="relative group w-full flex justify-center"
                    aria-label={item.label}
                >
                    {/* Tooltip */}
                    <div className="absolute right-[120%] top-1/2 -translate-y-1/2 px-4 py-2 bg-primary-cyan text-white text-sm font-semibold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap before:content-[''] before:absolute before:left-full before:top-1/2 before:-translate-y-1/2 before:border-8 before:border-transparent before:border-l-primary-cyan pointer-events-none z-50">
                        {item.label}
                    </div>

                    {/* Icon */}
                    <div className={`transition-all duration-300 ${
                        activeSection === item.id 
                        ? 'text-primary-cyan' 
                        : 'text-neutral-400 group-hover:text-primary-cyan'
                    }`}>
                        <i className={`bi ${item.icon} text-2xl`}></i>
                    </div>
                </button>
            ))}
        </div>
    );
};

export default FloatingNav;
