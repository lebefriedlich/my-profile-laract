"use client"

import React from 'react';

const Service = () => {
    const education = [
        {
            id: 'edu-1',
            icon: 'fi flaticon-graduation-cap',
            title: 'Bachelor of Informatics Engineering',
            place: 'UIN Maulana Malik Ibrahim Malang',
            year: '2022 - Present',
            desc: 'Focus on Programming, Data Structures, Algorithms, Database Systems, and Software Development.'
        }
    ];

    const experience = [
        {
            id: 'exp-1',
            icon: 'fi flaticon-briefcase',
            title: 'Backend Developer',
            place: 'Kriingg',
            year: 'April 2025 - Present',
            desc: 'Join the core development team to build admin dashboards, maintain backend services, and migrate systems to new programming languages ​​while ensuring performance and stability.'
        },
        {
            id: 'exp-2',
            icon: 'fi flaticon-briefcase',
            title: 'Backend Developer Intern',
            place: 'Kriingg',
            year: 'August 2024 - April 2025',
            desc: 'Implemented backend systems from database design into fully functional APIs and collaborated closely with mobile development team.'
        },
        {
            id: 'exp-3',
            icon: 'fi flaticon-briefcase',
            title: 'Backend Developer Intern',
            place: 'AFEKSI.IDN',
            year: 'April 2024 - July 2024',
            desc: 'Learn and maintain backend features using Laravel, as well as implementing the Midtrans Payment Gateway.'
        },
    ];

    return (
        <div id="resume" className="resume-area section-padding">
            <div className="borderd"></div>
            <div className="container">
                <div className="col-l2">
                    <div className="section-title section-title2 text-center">
                        <span>Resume</span>
                        <h2>Education & Experience</h2>
                    </div>
                </div>
                <div className="row resume-two-col ms-2">
                    <div className="col-lg-6 col-md-12">
                        <div className="resume-section">
                            <div className="section-title section-title2">
                                <h3 className="text-white">Education</h3>
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
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="resume-section">
                            <div className="section-title section-title2">
                                <h3 className="text-white">Experience</h3>
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
                                            <p>{item.desc}</p>
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