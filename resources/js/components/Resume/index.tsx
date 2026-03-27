"use client"

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Service = () => {
    const { t } = useLanguage();

    const education = [
        {
            id: 'edu-1',
            icon: 'fi flaticon-graduation-cap',
            title: t('resume.gradCap'),
            place: t('resume.gradPlace'),
            year: t('resume.gradYear'),
            desc: t('resume.gradDesc')
        }
    ];

    const experience = [
        {
            id: 'exp-1',
            icon: 'fi flaticon-briefcase',
            title: t('resume.exp1Title'),
            place: t('resume.exp1Place'),
            year: t('resume.exp1Year'),
            desc: t('resume.exp1Desc'),
        },
        {
            id: 'exp-2',
            icon: 'fi flaticon-briefcase',
            title: t('resume.exp2Title'),
            place: t('resume.exp2Place'),
            year: t('resume.exp2Year'),
            desc: t('resume.exp2Desc'),
        },
        {
            id: 'exp-3',
            icon: 'fi flaticon-briefcase',
            title: t('resume.exp3Title'),
            place: t('resume.exp3Place'),
            year: t('resume.exp3Year'),
            desc: t('resume.exp3Desc'),
        },
    ];

    return (
        <div id="resume" className="resume-area section-padding">
            <div className="borderd"></div>
            <div className="container">
                <div className="col-l2">
                    <div className="section-title section-title2 text-center">
                        <span>{t('resume.title')}</span>
                        <h2>{t('resume.subtitle')}</h2>
                    </div>
                </div>
                <div className="row resume-two-col ms-2">
                    <div className="col-lg-6 col-md-12">
                        <div className="resume-section">
                            <div className="section-title section-title2">
                                <h3 className="text-white">{t('resume.education')}</h3>
                            </div>
                            <div className="resume-list">
                                {education.map((item) => (
                                    <div className="resume-item mt-4" key={item.id}>
                                        <div className="resume-meta">
                                            <i className={item.icon}></i>
                                            <span className="resume-date text-white">{item.year}</span>
                                        </div>
                                        <div className="resume-info">
                                            <h4 className="text-white">{item.title}</h4>
                                            <p className="resume-place"><strong>{item.place}</strong></p>
                                            <p className="text-justify">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="resume-section">
                            <div className="section-title section-title2">
                                <h3 className="text-white">{t('resume.experience')}</h3>
                            </div>
                            <div className="resume-list">
                                {experience.map((item) => (
                                    <div className="resume-item mt-4" key={item.id}>
                                        <div className="resume-meta">
                                            <i className={item.icon}></i>
                                            <span className="resume-date text-white">{item.year}</span>
                                        </div>
                                        <div className="resume-info">
                                            <h4 className="text-white">{item.title}</h4>
                                            <p className="resume-place"><strong>{item.place}</strong></p>
                                            <p className="text-justify">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white_svg">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                </svg>
            </div>
        </div>
    );
}
export default Service;