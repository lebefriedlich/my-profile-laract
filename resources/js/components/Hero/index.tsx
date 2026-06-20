"use client"

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    const typedRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: [
                    t('hero.role1'),
                    t('hero.role2'),
                    t('hero.role3')
                ],
                typeSpeed: 60,
                backSpeed: 40,
                loop: true,
            });

            return () => {
                typed.destroy();
            };
        }
    }, [t]);

    return (
        <div className="flex flex-col items-center justify-center w-full h-full text-center transition-all duration-700 min-h-[400px]">
            <h3 className="text-xl md:text-2xl text-neutral-400 mb-2 font-light">
                {t('hero.hi')} <span className="inline-block animate-wave">👋🏻</span>
            </h3>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-4 leading-tight">
                Maulana Haekal Noval Akbar
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl text-primary-cyan font-light h-[40px] flex items-center justify-center gap-2">
                <span className="text-neutral-400">{t('hero.iam')}</span> <span ref={typedRef}></span>
            </h2>

            <style>{`
                @keyframes wave-animation {
                    0% { transform: rotate( 0.0deg) }
                    10% { transform: rotate(14.0deg) }  
                    20% { transform: rotate(-8.0deg) }
                    30% { transform: rotate(14.0deg) }
                    40% { transform: rotate(-4.0deg) }
                    50% { transform: rotate(10.0deg) }
                    60% { transform: rotate( 0.0deg) }  
                    100% { transform: rotate( 0.0deg) }
                }
                .animate-wave {
                    animation: wave-animation 2.5s infinite;
                    transform-origin: 70% 70%;
                }
            `}</style>
        </div>
    );
};

export default Hero;