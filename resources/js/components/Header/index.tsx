"use client"

import React, { Component } from 'react';
import { Link } from 'react-scroll'

class Header extends Component {

    state = {
        isOpen: false,
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    closeMenu = () => {
        this.setState({ isOpen: false });
    }

    render() {
        const { isOpen } = this.state;

        return (
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
                                        Home
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
                                        About Me
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
                                        Resume
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
                                        Portfolio
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
                                        Contact
                                    </Link>
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
        );
    }
}

export default Header;