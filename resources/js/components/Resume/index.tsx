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
            <h3 className="text-2xl font-bold text-white mb-8">{t('about.skillsTitle')}</h3>
            <div className="flex flex-wrap gap-3">
                {skills && skills.length > 0 && skills.map((skill: string, index: number) => (
                    <span key={index} className="bg-transparent border border-primary-cyan text-primary-cyan px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-cyan hover:text-white transition-colors">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Resume;