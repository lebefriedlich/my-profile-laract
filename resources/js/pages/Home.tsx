'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import About from '../components/about/index';
import ContactSection from '../components/ContactSection/index';
import Hero from '../components/Hero/index';
import Resume from '../components/Resume/index';
import Portfolio from '../components/portfolio/index';
import FloatingNav from '../components/FloatingNav';
import MobileMenu from '../components/MobileMenu';

const sections = ['home', 'about', 'resume', 'portfolio', 'contact'];

const HomePage = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isAnimating, setIsAnimating] = useState(false);
    const [renderedSection, setRenderedSection] = useState('home');
    const [mounted, setMounted] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleNavigation = (e: CustomEvent) => {
            if (e.detail && sections.includes(e.detail)) {
                setActiveSection(e.detail);
            }
        };

        window.addEventListener('navigateSection', handleNavigation as EventListener);
        return () => window.removeEventListener('navigateSection', handleNavigation as EventListener);
    }, []);

    useEffect(() => {
        if (activeSection !== renderedSection) {
            setIsAnimating(true);
            const timer = setTimeout(() => {
                setRenderedSection(activeSection);
                document.getElementById('scroll-area')?.scrollTo(0, 0);
                setIsAnimating(false);
            }, 300); // 300ms fade out
            return () => clearTimeout(timer);
        }
    }, [activeSection, renderedSection]);

    const handleNext = () => {
        const currentIndex = sections.indexOf(activeSection);
        const nextIndex = (currentIndex + 1) % sections.length;
        setActiveSection(sections[nextIndex]);
    };

    const handlePrev = () => {
        const currentIndex = sections.indexOf(activeSection);
        const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
        setActiveSection(sections[prevIndex]);
    };

    const renderComponent = () => {
        switch (renderedSection) {
            case 'home': return <Hero />;
            case 'about': return <About />;
            case 'resume': return <Resume />;
            case 'portfolio': return <Portfolio />;
            case 'contact': return <ContactSection />;
            default: return <Hero />;
        }
    };

    return (
        <div className="flex flex-col w-full flex-1 relative p-6 md:p-10">
            <div className={`w-full flex-1 flex flex-col justify-center transition-all duration-500 ease-in-out transform ${
                isAnimating ? 'opacity-0 scale-95 -translate-x-8' : 'opacity-100 scale-100 translate-x-0'
            }`}>
                {renderComponent()}
            </div>

            {/* Desktop Navigation Portals */}
            {mounted && document.getElementById('desktop-controls-portal') && createPortal(
                <>
                    <FloatingNav activeSection={activeSection} setActiveSection={setActiveSection} />

                    <div className="w-[70px] bg-[#444] rounded-[35px] shadow-[0_0_30px_rgba(0,0,0,0.2)] flex flex-col items-center overflow-hidden py-2 mt-auto">
                        <button
                            onClick={handlePrev}
                            className="w-full h-12 flex items-center justify-center text-neutral-400 hover:text-primary-cyan transition-colors"
                            aria-label="Previous Section"
                        >
                            <i className="bi bi-chevron-up text-xl"></i>
                        </button>
                        <div className="w-8 h-px bg-white/10 mx-auto"></div>
                        <button
                            onClick={handleNext}
                            className="w-full h-12 flex items-center justify-center text-neutral-400 hover:text-primary-cyan transition-colors"
                            aria-label="Next Section"
                        >
                            <i className="bi bi-chevron-down text-xl"></i>
                        </button>
                    </div>
                </>,
                document.getElementById('desktop-controls-portal')!
            )}

            {/* Mobile Navigation Portals */}
            {mounted && document.getElementById('mobile-menu-portal') && createPortal(
                <MobileMenu
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    isOpen={isMobileMenuOpen}
                    setIsOpen={setIsMobileMenuOpen}
                />,
                document.getElementById('mobile-menu-portal')!
            )}

            {/* Mobile Navigation Arrows */}
            {mounted && !isMobileMenuOpen && createPortal(
                <div className="lg:hidden fixed right-2 bottom-2 z-[100] flex flex-col gap-2 bg-black/60 rounded-full border-2 border-primary-cyan p-1">
                    <button onClick={handlePrev} className="w-10 h-10 rounded-full text-white hover:text-primary-cyan">
                        <i className="bi bi-chevron-up"></i>
                    </button>
                    <button onClick={handleNext} className="w-10 h-10 rounded-full text-white hover:text-primary-cyan">
                        <i className="bi bi-chevron-down"></i>
                    </button>
                </div>,
                document.body
            )}
        </div>
    );
};

export default HomePage;
