import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext';

const About: React.FC = () => {
    const { t, tArray } = useLanguage();

    return (
        <section id="about" className="tp-about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="tp-about-wrap">
                            <div className="tp-about-img">
                                <img src="images/about.webp" alt="Maulana Haekal Noval Akbar" loading='lazy'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12">
                        <div className="tp-about-text">
                            <div className="tp-about-icon">
                                <i className="bi bi-journal-code fs-1"></i>
                            </div>
                            <div className="tp-about-icon-content">
                                <h2>{t('about.title')}</h2>
                                <p style={{ textAlign: 'justify' }}>{t('about.desc1')}</p>
                                <p style={{ textAlign: 'justify' }}>{t('about.desc2')}</p>
                                <p style={{ textAlign: 'justify' }}>{t('about.desc3')}</p>
                                <div className="tp-about-skills">
                                    <h4>{t('about.skillsTitle')}</h4>
                                    <div className="skills-list">
                                        {tArray('about.skills').map((skill: string, index: number) => (
                                            <span key={index} className="skill-badge">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white_svg svg_white">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                </svg>
            </div>
        </section>
    )
}

export default About;