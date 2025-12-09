import React from 'react'

const About: React.FC = () => {
    return (
        <section id="about" className="tp-about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="tp-about-wrap">
                            <div className="tp-about-img">
                                <img src="images/about.png" alt="" loading='lazy'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12">
                        <div className="tp-about-text">
                            <div className="tp-about-icon">
                                <i className="bi bi-journal-code fs-1"></i>
                            </div>
                            <div className="tp-about-icon-content">
                                <h2>Web Developer & Backend Developer</h2>
                                <p>My name is Noval Akbar, a backend developer specializing in building modern web applications with Laravel. I'm active in the tech world, with internships at AFEKSI.IDN and Kriingg. And now I'm a Backend Developer at Kriingg.</p>
                                <p>I'm passionate about building scalable, secure, and maintainable systems. I also enjoy contributing to community activities, sharing knowledge, and continuing to develop myself in the tech industry.</p>
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