import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const About = () => {
    const { t, tArray } = useLanguage();

    return (
        <div className="animate-[fadeIn_0.5s_ease-in-out]">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 flex items-center gap-4">
                {t('nav.about')}
                <div className="h-px bg-primary-cyan/50 flex-1"></div>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                {/* Left Column: Description */}
                <div className="lg:col-span-7 text-neutral-400 leading-relaxed space-y-4 text-justify font-light text-[15px]">
                    <p>{t('about.desc1')}</p>
                    <p>{t('about.desc2')}</p>
                    <p>{t('about.desc3')}</p>
                </div>

                {/* Right Column: Info List */}
                <div className="lg:col-span-5">
                    <ul className="flex flex-col gap-3">
                        <li className="flex justify-between items-center py-2 border-b border-neutral-700/50">
                            <span className="text-primary-cyan font-bold text-sm uppercase tracking-wider whitespace-nowrap">Residence</span>
                            <span className="text-neutral-300 text-sm text-right ml-4">Indonesia</span>
                        </li>
                        <li className="flex justify-between items-center py-2 border-b border-neutral-700/50">
                            <span className="text-primary-cyan font-bold text-sm uppercase tracking-wider whitespace-nowrap">{t('contact.address')}</span>
                            <span className="text-neutral-300 text-sm text-right ml-4">Kab. Pasuruan</span>
                        </li>
                        <li className="flex justify-between items-center py-2 border-b border-neutral-700/50">
                            <span className="text-primary-cyan font-bold text-sm uppercase tracking-wider whitespace-nowrap">E-mail</span>
                            <span className="text-neutral-300 text-sm text-right break-all ml-4">noval.akbar.906@gmail.com</span>
                        </li>
                        <li className="flex justify-between items-center py-2 border-b border-neutral-700/50">
                            <span className="text-primary-cyan font-bold text-sm uppercase tracking-wider whitespace-nowrap">Freelance</span>
                            <span className="text-primary-cyan font-semibold text-sm text-right ml-4">Available</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* What I Do Section */}
            <h3 className="text-2xl font-bold text-white mb-8">What I Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-[#2a2a2a]/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex gap-4 hover:bg-[#2a2a2a]/60 hover:border-primary-cyan/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out">
                    <i className="bi bi-code-slash text-4xl text-primary-cyan"></i>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-2">{t('hero.role3')}</h4>
                        <p className="text-neutral-400 text-sm font-light leading-relaxed">
                            Developing robust web applications and Progressive Web Apps (PWA) using modern technologies like Laravel, Webman, React, and Alpine.js.
                        </p>
                    </div>
                </div>
                <div className="bg-[#2a2a2a]/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex gap-4 hover:bg-[#2a2a2a]/60 hover:border-primary-cyan/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out">
                    <i className="bi bi-hdd-network text-4xl text-primary-cyan"></i>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-2">{t('hero.role2')}</h4>
                        <p className="text-neutral-400 text-sm font-light leading-relaxed">
                            Specializing in RESTful APIs, database optimization, and high-performance architecture. Experienced in query optimization and Redis caching.
                        </p>
                    </div>
                </div>
                <div className="bg-[#2a2a2a]/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex gap-4 hover:bg-[#2a2a2a]/60 hover:border-primary-cyan/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out md:col-span-2 lg:col-span-1">
                    <i className="bi bi-cloud-check text-4xl text-primary-cyan"></i>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-2">Junior DevOps</h4>
                        <p className="text-neutral-400 text-sm font-light leading-relaxed">
                            Continuously learning to containerize apps with Docker, automate deployments via GitHub Actions, and configure Linux servers. Always eager to grow.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;