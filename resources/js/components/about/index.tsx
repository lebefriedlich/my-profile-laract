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
                                <h2>Software Engineer | Full-Stack Developer | Backend Developer</h2>
                                <p>Hi, I'm Maulana Haekal Noval Akbar, you can call me Haekal. I'm a passionate software engineer specializing in backend development and full-stack web applications. With expertise in Laravel, PHP, and modern web technologies, I craft scalable and maintainable systems that solve real-world problems.</p>
                                <p>Currently working as a Backend Developer at Kriingg, I focus on building robust APIs, optimizing database performance, and implementing clean architecture patterns. My journey includes internships at AFEKSI.IDN and Kriingg, where I developed strong foundations in software engineering principles, system design, and collaborative development.</p>
                                <p>I'm committed to continuous learning and staying current with industry best practices. Beyond coding, I actively contribute to the tech community through knowledge sharing and mentoring, believing that collaborative growth makes us all better developers.</p>
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