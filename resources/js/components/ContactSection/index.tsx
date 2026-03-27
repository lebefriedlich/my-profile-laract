"use client"

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import ContactForm from '../ContactFrom'

const ContactSection = () => {
    const { t } = useLanguage();

    return(
        <section id="contact" className="tp-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-6 col-lg-12 col-md-12 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="info-icon">
                                                <i className="bi bi-geo-alt-fill fs-1"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>{t('contact.address')}</h2>
                                            <p>{t('contact.addressValue')}</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-6 col-lg-12 col-md-12 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="info-icon">
                                                <i className="bi bi-envelope-fill fs-1"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>{t('contact.email')}</h2>
                                            <p>
                                                <a href="mailto:noval.akbar.906@gmail.com" className="text-white">noval.akbar.906@gmail.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="section-title section-title2 text-center">
                            <span>{t('contact.title')}</span>
                            <h2>{t('contact.subtitle')}</h2>
                        </div>
                        <div className="tp-contact-form-area">
                            <ContactForm/>
                        </div>
                    </div>                
                </div>
            </div> 
        </section>
     )
        
}

export default ContactSection;
