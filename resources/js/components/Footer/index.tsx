"use client"

import React, { Component } from 'react';
import { Link } from 'react-scroll'
import { useLanguage } from '../../contexts/LanguageContext';

interface FooterProps {
    t: (key: string) => string;
}

class FooterComponent extends Component<FooterProps> {
    render() {
        const { t } = this.props;

        return (
            <div className="footer-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-image">
                                <Link className="navbar-brand" to="home">
                                    <img src="/images/logo.webp" alt="Maulana Haekal Noval Akbar" loading='lazy'/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-menu">
                                <ul className="d-flex " >
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/novalakbar38/"><i className="bi bi-instagram"></i></a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/maulana-haekal/"><i className="bi bi-linkedin"></i></a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/lebefriedlich"><i className="bi bi-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-sub">
                                <p><i className="fa fa-copyright"></i> <span> 2025  {t('footer.copyright')}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const Footer = () => {
    const { t } = useLanguage();
    return <FooterComponent t={t} />;
};

export default Footer;