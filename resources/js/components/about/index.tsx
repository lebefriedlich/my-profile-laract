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
                            <span className="text-primary-cyan font-bold text-sm uppercase tracking-wider whitespace-nowrap">{t('about.residence')}</span>
                            <span className="text-neutral-300 text-sm text-right ml-4">{t('about.residenceValue')}</span>
                        </li>
                        <li className="flex justify-between items-center py-2 border-b border-neutral-700/50">
                            <span className="text-primary-cyan font-bold text-sm uppercase tracking-wider whitespace-nowrap">{t('contact.address')}</span>
                            <span className="text-neutral-300 text-sm text-right ml-4">{t('contact.addressValue')}</span>
                        </li>
                        <li className="flex justify-between items-center py-2 border-b border-neutral-700/50">
                            <span className="text-primary-cyan font-bold text-sm uppercase tracking-wider whitespace-nowrap">{t('contact.email')}</span>
                            <span className="text-neutral-300 text-sm text-right break-all ml-4">noval.akbar.906@gmail.com</span>
                        </li>
                        <li className="flex justify-between items-center py-2 border-b border-neutral-700/50">
                            <span className="text-primary-cyan font-bold text-sm uppercase tracking-wider whitespace-nowrap">{t('about.freelance')}</span>
                            <span className="text-primary-cyan font-semibold text-sm text-right ml-4">{t('about.available')}</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* What I Do Section */}
            <h3 className="text-2xl font-bold text-white mb-8">{t('about.whatIDo')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-[#2a2a2a]/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex gap-4 hover:bg-[#2a2a2a]/60 hover:border-primary-cyan/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out">
                    <i className="bi bi-code-slash text-4xl text-primary-cyan"></i>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-2">{t('about.role1.title')}</h4>
                        <p className="text-neutral-400 text-sm font-light leading-relaxed">
                            {t('about.role1.desc')}
                        </p>
                    </div>
                </div>
                <div className="bg-[#2a2a2a]/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex gap-4 hover:bg-[#2a2a2a]/60 hover:border-primary-cyan/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out">
                    <i className="bi bi-hdd-network text-4xl text-primary-cyan"></i>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-2">{t('about.role2.title')}</h4>
                        <p className="text-neutral-400 text-sm font-light leading-relaxed">
                            {t('about.role2.desc')}
                        </p>
                    </div>
                </div>
                <div className="bg-[#2a2a2a]/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex gap-4 hover:bg-[#2a2a2a]/60 hover:border-primary-cyan/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out md:col-span-2 lg:col-span-1">
                    <i className="bi bi-cloud-check text-4xl text-primary-cyan"></i>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-2">{t('about.role3.title')}</h4>
                        <p className="text-neutral-400 text-sm font-light leading-relaxed">
                            {t('about.role3.desc')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;