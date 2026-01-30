import React from 'react'

const About: React.FC = () => {
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
                                <h2>Full-Stack Developer | Backend Developer | Junior DevOps Engineer</h2>
                                <p>Hi, I'm Maulana Haekal Noval Akbar call me Haekal. I specialize in backend development, full-stack web applications, and infrastructure operations. With hands-on experience in Laravel, Node.js (Fastify), React, and server management, I build systems that are reliable, secure, and ready for production. My work spans API design, database optimization, CI/CD pipelines, and Linux server administration, ensuring applications run efficiently from code to deployment.</p>
                                <p>I've delivered Decision Support Systems with weighted scoring, RESTful APIs for regional data and WhatsApp automation, event platforms with real-time notifications, donation systems with payment integrations, and cross-platform mobile apps. At GenBI Malang, I combined backend development with DevOps responsibilities managing Nginx servers, setting up monitoring, handling backups, and implementing structured authentication flows. Each project taught me to balance development speed with maintainability, security, and long-term operational stability.</p>
                                <p>I approach problems by understanding the full stack not just writing code, but considering deployment, scaling, and monitoring. I value clean architecture, automated testing, and documentation that helps teams move fast without breaking things. I'm committed to continuous learning, whether it's adopting new frameworks, refining DevOps practices, or sharing knowledge with the developer community. My goal is to build software that solves real problems and systems that teams can confidently rely on.</p>
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