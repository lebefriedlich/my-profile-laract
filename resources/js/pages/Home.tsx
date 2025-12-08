'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import { Element } from 'react-scroll';
import About from '../components/about/index';
import ContactSection from '../components/ContactSection/index';
import Footer from '../components/Footer/index';
import Hero from '../components/Hero/index';
import Navbar from '../components/Navbar/index';
import Resume from '../components/Resume/index';
import Scrollbar from '../components/Scroolbar/index';

const HomePage = () => {
    return (
        <Fragment>
            <div className="br-app">
                <Navbar />
                <Element name="home">
                    <Hero />
                </Element>
                <Element name="about">
                    <About />
                </Element>
                <Element name="resume">
                    <Resume />
                </Element>
                {/* <Element name="portfolio">
                    <Portfolio/>
                </Element> */}
                <Element name="contact">
                    <ContactSection />
                </Element>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    );
};

export default HomePage;
