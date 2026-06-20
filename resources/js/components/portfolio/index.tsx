import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { createPortal } from 'react-dom';

interface portfolioItem {
    Id: string;
    heading: string;
    subHeading: string;
    role: string;
    pImg1: string;
    des: string;
    techStack: string[];
    linkSource?: string;
    linkPublish?: string;
}

const Portfolio = () => {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState<portfolioItem | null>(null);
    const categories = ['All', 'Full-Stack', 'Backend', 'Mobile', 'DevOps', 'Game'];

    const portfolioItems: portfolioItem[] = [
        {
            Id: '1',
            heading: 'DSS',
            subHeading: 'PilihAsdos',
            role: 'Full-Stack Developer',
            pImg1: '/images/portfolio/SPK Pilih Asdos.webp',
            des: t('portfolio.dss.desc') || 'Decision Support System for evaluating teaching assistants. Built with scalable architecture and optimized database calculations.',
            techStack: ['Laravel', 'Bootstrap', 'MySQL'],
            linkSource: 'https://github.com/lebefriedlich/spk_asdos_saw',
        },
        {
            Id: '2',
            heading: 'API Service',
            subHeading: 'API Kode Wilayah Indonesia',
            role: 'Backend Developer',
            pImg1: '/images/portfolio/API Kode Wilayah Indonesia.webp',
            des: t('portfolio.api.desc') || 'REST API providing Indonesian regional codes. Implemented caching and rate limiting for high availability.',
            techStack: ['Laravel', 'MySQL'],
            linkPublish: 'https://wilayah-indonesia.mhna.my.id/',
            linkSource: 'https://github.com/lebefriedlich/api-kode-wilayah-indonesia',
        },
        {
            Id: '3',
            heading: 'EventHub',
            subHeading: 'UIN Malang EventHub',
            role: 'Full-Stack Developer',
            pImg1: '/images/portfolio/UIN Malang EventHub.webp',
            des: t('portfolio.eventhub.desc') || 'Campus event management platform featuring real-time registration and centralized admin dashboard.',
            techStack: ['Laravel', 'Bootstrap', 'MySQL'],
            linkSource: 'https://github.com/lebefriedlich/Project-Prak-Sister',
        },
        {
            Id: '4',
            heading: 'Weather App',
            subHeading: 'CuacaSaja',
            role: 'Full-Stack Developer',
            pImg1: '/images/portfolio/CuacaSaja.webp',
            des: t('portfolio.weather.desc') || 'A weather forecasting app integrated with real-time public APIs, optimized for low bandwidth.',
            techStack: ['Flutter', 'Laravel', 'MySQL'],
            linkSource: 'https://github.com/lebefriedlich/CuacaSaja-Mobile',
        },
        {
            Id: '5',
            heading: 'Game 3D',
            subHeading: 'Quiz Of Survival',
            role: 'Game 3D Programmer',
            pImg1: '/images/portfolio/Quiz Of Survival.webp',
            des: t('portfolio.game.desc') || 'A 3D educational survival game developed using Unity and C#.',
            techStack: ['Unity', 'C#'],
            linkSource: 'https://github.com/lebefriedlich/Quiz-Of-Survival-Game',
        },
        {
            Id: '6',
            heading: 'API Service',
            subHeading: 'WhatsApp Multi Account',
            role: 'Backend Developer',
            pImg1: '/images/portfolio/API WhatsApp Multi Account.webp',
            des: `This service manages multiple WhatsApp accounts for message automation and notifications. Users can link several numbers, send bulk messages, and receive webhook responses. The system keeps sessions alive so accounts don't disconnect easily. Message queuing helps distribute load during high traffic. With multi-account support, teams can centrally manage large-scale communications.\n\nAs a Backend Developer, I built a Node.js backend with session persistence, QR onboarding, and inter-account message routing. I added Prisma migrations, rate limiting, and queuing to ensure stable delivery without hitting limits. I set up health checks and monitoring so connection issues are detected quickly. I also created reconnect fallbacks so accounts automatically reconnect if sessions drop. I prepared documentation and payload examples so integrators can adopt faster.`,
            techStack: ['Node.js', 'Express', 'SQLite', 'Prisma', 'WWebJS', 'QRCode', 'dotenv'],
            linkSource: 'https://github.com/lebefriedlich/wwebjs-multiaccount',
        },
        {
            Id: '7',
            heading: 'Scheduler Thesis',
            subHeading: 'SkripsiKu',
            role: 'Full-Stack Developer',
            pImg1: '/images/portfolio/Project Schedulling.webp',
            des: `SkripsiKu is a thesis scheduling application that tracks milestones and advisor-student coordination. Students can view timelines, deadlines, and guidance status clearly. Automatic reminders help reduce delays in chapter submissions or revisions. Advisors get progress summaries to monitor many students at once. The goal is to keep the mentoring process more structured and transparent.\n\nAs a Full-Stack Developer, I built the application with Livewire and Bootstrap including authentication, RBAC, and deadline management. I set up email/notification reminders via cron so students don't miss deadlines. I tightened form validation and access controls to prevent data mixing between accounts. I created progress tracking and activity logs so advisors can audit changes. I optimized queries and indexing so the dashboard remains fast even with large mentoring datasets.`,
            techStack: ['Laravel', 'Bootstrap', 'Livewire', 'Mail', 'Socialite', 'OAuth Google', 'MySQL'],
            linkSource: 'https://github.com/lebefriedlich/project-scheduling-thesis',
        },
        {
            Id: '8',
            heading: 'Donation App',
            subHeading: 'DanaPeduli',
            role: 'Full-Stack Developer',
            pImg1: '/images/portfolio/DanaPeduli.webp',
            des: `DanaPeduli is a donation platform for creating campaigns, attracting support, and displaying progress transparently. Donors can view targets, updates, and fund disbursement reports. Each campaign has a detail page so potential donors trust and understand the needs. The system records transactions so fund flows can be traced. The interface is lightweight so donations can be completed quickly from any device.\n\nAs a Full-Stack Developer, I implemented campaign CRUD, Midtrans payment integration, and ledger views so transactions can be audited. I added payment status notifications and verification so funds are recorded correctly. I built an admin dashboard with Livewire/Filament to moderate campaigns and monitor disbursement. I implemented input validation and basic protections to prevent fraud and duplicate data. I used query optimization and lightweight caching so campaign pages remain fast to load.`,
            techStack: ['Laravel', 'Livewire', 'Filament', 'Tailwind CSS', 'React', 'InertiaJS', 'Payment Gateway', 'Midtrans', 'PostgreSQL'],
            linkSource: 'https://github.com/lebefriedlich/project-scheduling-thesis',
        },
        {
            Id: '9',
            heading: 'GenBI Malang',
            subHeading: 'Bank Indonesia Scholarship Community',
            role: 'Backend Developer & Junior DevOps Engineer',
            pImg1: '/images/portfolio/GenBI Malang.webp',
            des: `GenBI (Generasi Baru Indonesia) Koordinator Wilayah Malang is the official Bank Indonesia Scholarship Community committed to driving positive change across the Malang region. Recipients of the Bank Indonesia Scholarship don't just receive educational funding—they automatically become part of GenBI, a nationwide community focused on developing superior and competent generations. As a key component of Bank Indonesia's contribution to national human capital development, GenBI Malang serves as a platform for news, events, member engagement, and collaborative initiatives. The community website displays announcements, event registrations, educational materials, and member resources. Pages are designed lightweight for seamless access across devices, with content regularly updated to keep members informed. Form integration helps committees efficiently collect participant data for events and programs.\n\nAs Backend Developer & Junior DevOps, I containerized the application using Docker and Docker Compose to ensure environment consistency across development and production. I managed Linux servers with Nginx as a reverse proxy, established CI/CD pipelines with GitHub Actions, and configured monitoring and automated backups. I implemented authentication, RBAC, and structured API endpoints in Laravel/Fastify to ensure security and high performance. I set up comprehensive logging and alerts to detect production issues immediately. I optimized database queries and implemented strategic caching so news, event listings, and member pages load quickly even during peak traffic. I created deployment documentation and incident response SOPs so the team can confidently maintain and scale the system as the community grows.`,
            techStack: ['Laravel', 'Fastify', 'Prisma', 'MySQL', 'Docker', 'Docker Compose', 'Ubuntu', 'Nginx', 'GitHub Actions', 'Socialite', 'OAuth Google'],
            linkSource: 'https://github.com/lebefriedlich/DevOps-Portfolio',
            linkPublish: 'https://www.genbi-malang.org',
        },
        {
            Id: '10',
            heading: 'Karivio',
            subHeading: 'Job Application & CV Management',
            role: 'Full-Stack Developer',
            pImg1: '/images/portfolio/Karivio.webp',
            des: `Karivio is a modern platform designed to streamline job applications and career document management. It features a dynamic CV builder and cover letter generator, allowing users to create professional documents with ease. The system integrates directly with the Google API, enabling users to send applications via Gmail without leaving the platform. It also includes tracking for application history and centralized file management for career-related documents.\n\nAs a Full-Stack Developer, I built the application using Laravel 13 and Livewire 4, focusing on a reactive and seamless user experience. I implemented the Google OAuth authentication flow and integrated the Google API Client for email functionality. I also set up high-quality PDF generation for documents using DomPDF. I ensured the system was robust by implementing comprehensive form validation, secure data handling, and optimized database queries to maintain performance as the user's application history grows.`,
            techStack: ['Laravel 13', 'Livewire 4', 'Alpine.js', 'Google API Client', 'Google OAuth', 'DomPDF', 'MySQL'],
            linkSource: 'https://github.com/lebefriedlich/Karivio',
            linkPublish: 'https://karivio.mhna.my.id',
        },
    ];

    const getCategories = (project: portfolioItem) => {
        const cats: string[] = [];
        const role = project.role.toLowerCase();
        
        if (role.includes('full-stack') || role.includes('full stack')) cats.push('Full-Stack');
        if (role.includes('backend')) cats.push('Backend');
        if (role.includes('game')) cats.push('Game');
        if (role.includes('devops')) cats.push('DevOps');
        
        // Also check if tech stack implies mobile
        if (project.techStack.includes('Flutter') || project.techStack.includes('React Native')) {
            cats.push('Mobile');
        }
        
        return cats.length > 0 ? cats : ['Other'];
    };

    const filteredProjects = filter === 'All'
        ? portfolioItems
        : portfolioItems.filter(p => getCategories(p).includes(filter));

    return (
        <div className="animate-[fadeIn_0.5s_ease-in-out]">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 flex items-center gap-4">
                {t('portfolio.portfolio')}
                <div className="h-px bg-primary-cyan/50 flex-1"></div>
            </h2>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`text-sm font-semibold transition-colors ${filter === cat ? 'text-primary-cyan' : 'text-neutral-400 hover:text-white'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {filteredProjects.map((project) => (
                    <div
                        key={project.Id}
                        onClick={() => setSelectedProject(project)}
                        className="group relative block overflow-hidden rounded-2xl bg-[#222] cursor-pointer border border-transparent hover:border-primary-cyan/30 transition-all"
                    >
                        <div className="w-full h-48 overflow-hidden bg-[#2a2a2a]">
                            <img
                                src={project.pImg1.startsWith('/') ? project.pImg1 : `/${project.pImg1}`}
                                alt={project.subHeading}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            />
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-primary-cyan/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                            <i className="bi bi-eye text-4xl text-white mb-2"></i>
                            <h3 className="text-white text-xl font-bold">{project.subHeading}</h3>
                            <span className="text-white/80 text-sm">{project.role}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && createPortal(
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 lg:p-10 animate-[fadeIn_0.3s_ease-in-out]">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>
                    <div className="relative bg-[#222] w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar rounded-2xl shadow-2xl border border-neutral-700">
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 w-10 h-10 bg-[#444] rounded-full text-white flex items-center justify-center hover:bg-primary-cyan transition-colors z-10"
                        >
                            <i className="bi bi-x text-2xl"></i>
                        </button>

                        <div className="p-8 lg:p-12">
                            <span className="text-primary-cyan text-sm font-semibold tracking-wider uppercase mb-1 block">{selectedProject.heading}</span>
                            <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.subHeading}</h2>
                            <p className="text-neutral-400 mb-6">{selectedProject.role}</p>

                            <img 
                                src={selectedProject.pImg1.startsWith('/') ? selectedProject.pImg1 : `/${selectedProject.pImg1}`} 
                                alt={selectedProject.subHeading} 
                                className="w-full rounded-xl mb-8 object-cover max-h-[400px] border border-neutral-800" 
                            />

                            <div className="flex flex-wrap gap-2 mb-8">
                                {selectedProject.techStack.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs font-medium rounded-full border border-neutral-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="text-neutral-300 leading-relaxed space-y-4 whitespace-pre-wrap font-light mb-8">
                                {selectedProject.des}
                            </div>

                            <div className="flex flex-wrap gap-4 pt-6 border-t border-neutral-800">
                                {selectedProject.linkPublish && (
                                    <a href={selectedProject.linkPublish} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-primary-cyan hover:bg-[#039bc2] text-white font-semibold rounded-xl transition-colors flex items-center gap-2">
                                        <i className="bi bi-globe"></i>
                                        Live Demo
                                    </a>
                                )}
                                {selectedProject.linkSource && (
                                    <a href={selectedProject.linkSource} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-transparent border border-neutral-600 hover:border-white text-white font-semibold rounded-xl transition-colors flex items-center gap-2">
                                        <i className="bi bi-github"></i>
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default Portfolio;
