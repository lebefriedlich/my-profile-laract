import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Resume = () => {
    const { t, tArray } = useLanguage();

    const education = tArray('resume.educationList') || [];
    const experience = tArray('resume.experienceList') || [];

    const TimelineItem = ({ data }: { data: any }) => (
        <div className="relative pl-8 mb-10 before:content-[''] before:absolute before:-left-[5px] before:top-2 before:w-3 before:h-3 before:bg-primary-cyan before:rounded-full before:shadow-[0_0_0_4px_rgba(4,180,224,0.2)]">
            <h4 className="text-white text-lg font-bold mb-1">{data.institution}</h4>
            <span className="text-primary-cyan text-sm font-semibold block mb-1">{data.year}</span>
            <span className="text-neutral-400 text-sm block mb-3">{data.title}</span>
            <p className="text-neutral-500 font-light text-sm leading-relaxed">{data.description}</p>
        </div>
    );

    const skills = tArray('about.skills');

    return (
        <div className="animate-[fadeIn_0.5s_ease-in-out]">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-10 flex items-center gap-4">
                {t('resume.title')}
                <div className="h-px bg-primary-cyan/50 flex-1"></div>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
                {/* Experience Column */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <i className="bi bi-briefcase text-primary-cyan text-3xl"></i>
                        {t('resume.experience')}
                    </h3>
                    <div className="relative border-l border-neutral-700 pt-2">
                        {experience.map((item, index) => (
                            <TimelineItem key={index} data={item} />
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <i className="bi bi-journal-bookmark text-primary-cyan text-3xl"></i>
                        {t('resume.education')}
                    </h3>
                    <div className="relative border-l border-neutral-700 pt-2">
                        {education.map((item, index) => (
                            <TimelineItem key={index} data={item} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">{t('about.competenciesTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {tArray('about.competencies')?.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 bg-[#2a2a2a]/30 p-3 rounded-xl border border-white/5 hover:border-primary-cyan/30 transition-colors">
                        <i className="bi bi-check-circle-fill text-primary-cyan mt-0.5"></i>
                        <span className="text-neutral-300 font-light">{item}</span>
                    </div>
                ))}
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">{t('about.technicalSkillsTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {tArray('about.technicalSkills')?.map((item: any, index: number) => (
                    <div key={index} className="bg-[#2a2a2a]/30 border border-white/5 rounded-2xl p-5 hover:border-primary-cyan/30 transition-colors">
                        <h4 className="text-white font-semibold mb-4 text-lg">{item.category}</h4>
                        <div className="flex flex-wrap gap-2">
                            {item.items.split(', ').map((skill: string, i: number) => (
                                <span key={i} className="bg-black/30 border border-neutral-700 text-neutral-300 px-3 py-1.5 rounded-lg text-sm font-medium hover:border-primary-cyan hover:text-white transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resume;