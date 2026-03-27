"use client"

import React, { Component } from 'react';
import Typed from 'typed.js';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useLanguage } from '../../contexts/LanguageContext';

interface HeroProps {
    t: (key: string) => string;
}

class HeroComponent extends Component<HeroProps> {
    typedRef = React.createRef<HTMLSpanElement>();
    typed: Typed | null = null;

    componentDidMount() {
        if (typeof window !== 'undefined') {
            const { t } = this.props;
            this.typed = new Typed(this.typedRef.current, {
                strings: [
                    t('hero.role1'),
                    t('hero.role2'),
                    t('hero.role3')
                ],
                typeSpeed: 100,
                backSpeed: 100,
                loop: true,
            });
        }
    }

    componentWillUnmount() {
        if (this.typed) {
            this.typed.destroy();
        }
    }

    render() {
        const { t } = this.props;
        
        return(
            <section id="home" className="hero hero-slider-wrapper hero-style-1">
                <div className="hero-slider">
                    <div className="slide" style={{ backgroundImage: `url(${'images/my-slide.webp'})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col col-md-10 col-sm-12 slide-caption">
                                    <div className="slide-subtitle">
                                        <h1>Maulana Haekal Noval Akbar</h1>
                                    </div>
                                    <div className="slide-title">
                                        <h2><span ref={this.typedRef}></span></h2>
                                    </div>
                                    <div className="btns">
                                        <AnchorLink href="#contact" className="template-btn go-contact-area">{t('hero.cta')}</AnchorLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-links">
                    <div className="overlay"></div>
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/novalakbar38/"><i className="bi bi-instagram"></i></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/maulana-haekal/"><i className="bi bi-linkedin"></i></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/lebefriedlich"><i className="bi bi-github"></i></a></li>
                    </ul>
                </div>
                <div className="white_svg">
                    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                        <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                    </svg>
                </div>
            </section>
        )
    }
}

const Hero = () => {
    const { t } = useLanguage();
    return <HeroComponent t={t} />;
};

export default Hero;