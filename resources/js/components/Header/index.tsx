"use client"

import React, { Component } from 'react';
import { Link } from 'react-scroll'
import { useLanguage } from '../../contexts/LanguageContext';

interface HeaderProps {
    t: (key: string) => string;
    language: string;
    setLanguage: (lang: string) => void;
}

interface HeaderState {
    isOpen: boolean;
}

class HeaderComponent extends Component<HeaderProps, HeaderState> {
    state: HeaderState = {
        isOpen: false,
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    closeMenu = () => {
        this.setState({ isOpen: false });
    }

    handleOverlayClick = () => {
        this.closeMenu();
    }

    render() {
        const { isOpen } = this.state;
        const { t, language, setLanguage } = this.props;

        return (
            <>
                {isOpen && (
                    <div 
                        className="topbar-overlay" 
                        onClick={this.handleOverlayClick}
                    ></div>
                )}
                <div className="topbar-wrapper">
                <header id="header" className="topbar-header">
                    <div className="container-fluid">
                        <div className="topbar-content">
                            <Link className="topbar-logo" to="home" spy={true} smooth={true} duration={500}>
                                <img src='/images/logo.webp' alt="Maulana Haekal Noval Akbar" />
                            </Link>
                            
                            <nav className={`topbar-nav ${isOpen ? 'active' : ''}`}>
                                <ul className="topbar-menu">
                                <li>
                                    <Link 
                                        className="topbar-link"
                                        activeClass="active" 
                                        to="home" 
                                        spy={true} 
                                        smooth={true} 
                                        offset={-100}
                                        duration={500}
                                        onClick={this.closeMenu}
                                    >
                                        {t('nav.home')}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        className="topbar-link"
                                        activeClass="active" 
                                        to="about" 
                                        spy={true} 
                                        smooth={true} 
                                        offset={-100}
                                        duration={500}
                                        onClick={this.closeMenu}
                                    >
                                        {t('nav.about')}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        className="topbar-link"
                                        activeClass="active" 
                                        to="resume" 
                                        spy={true} 
                                        smooth={true} 
                                        offset={-100}
                                        duration={500}
                                        onClick={this.closeMenu}
                                    >
                                        {t('nav.resume')}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        className="topbar-link"
                                        activeClass="active" 
                                        to="portfolio" 
                                        spy={true} 
                                        smooth={true} 
                                        offset={-100}
                                        duration={500}
                                        onClick={this.closeMenu}
                                    >
                                        {t('nav.portfolio')}
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        className="topbar-link"
                                        activeClass="active" 
                                        to="contact" 
                                        spy={true} 
                                        smooth={true} 
                                        offset={-100}
                                        duration={500}
                                        onClick={this.closeMenu}
                                    >
                                        {t('nav.contact')}
                                    </Link>
                                </li>
                                <li className="language-switcher">
                                    <button 
                                        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                                        onClick={() => {
                                            setLanguage('en');
                                            this.closeMenu();
                                        }}
                                        title="English"
                                    >
                                        ENG
                                    </button>
                                    <span className="lang-separator">|</span>
                                    <button 
                                        className={`lang-btn ${language === 'id' ? 'active' : ''}`}
                                        onClick={() => {
                                            setLanguage('id');
                                            this.closeMenu();
                                        }}
                                        title="Bahasa Indonesia"
                                    >
                                        IND
                                    </button>
                                </li>
                            </ul>
                        </nav>

                        <button 
                            className={`topbar-toggle ${isOpen ? 'active' : ''}`}
                            onClick={this.toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>
                </div>
            </>
        );
    }
}

const Header = () => {
    const { t, language, setLanguage } = useLanguage();
    return <HeaderComponent t={t} language={language} setLanguage={setLanguage} />;
};

export default Header;