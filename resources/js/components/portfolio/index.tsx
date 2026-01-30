import { useState } from 'react';
import PortfolioSingle from '../portfolioSingle';

// Tipe untuk setiap item portfolio
interface portfolioItem {
    Id: string;
    heading: string;
    subHeading: string;
    role: string;
    pImg1: string;
    des: string;
    techStack: Array<string>;
    linkPublish?: string;
    linkSource?: string;
}

const portfolio = () => {
    // Tipe untuk state yang menyimpan detail portfolio yang dibuka
    const [open, setOpen] = useState(false);
    const [state, setState] = useState<portfolioItem | undefined>(undefined); // Menyimpan detail item yang dipilih

    function handleClose() {
        setOpen(false);
    }

    const handleClickOpen = (item: portfolioItem) => {
        setOpen(true);
        setState(item); // Menyimpan item yang dipilih ke state
    };

    const portfolio: portfolioItem[] = [
        // {
        //     Id: '1',
        //     heading: 'AFEKSI',
        //     subHeading: 'AFEKSI.IDN',
        //     role: 'Backend Developer',
        //     pImg1: 'images/portfolio/Afeksi.webp',
        //     des: 'Afeksi is an education and consultation platform focused on healthy relationships. It provides a safe and supportive space for individuals, couples, and communities to explore emotional well-being and interpersonal dynamics. Through insightful educational content and guided consultation sessions, Afeksi helps users build healthy communication patterns and stronger connections. The platform emphasizes mindfulness, empathy, and personal growth to promote sustainable relational development. Afeksi continues to evolve as a hub for learning and support for anyone seeking a healthier relationship life.',
        //     techStack: ['Laravel', 'Bootstrap', 'MySQL'],
        //     linkPublish: 'https://afeksiidn.com',
        // },
        {
            Id: '1',
            heading: 'DSS',
            subHeading: 'PilihAsdos',
            role: 'Full-Stack Web Developer',
            pImg1: 'images/portfolio/SPK Pilih Asdos.webp',
            des: `SPK Pilih Asdos is a Decision Support System for assessing teaching assistant candidates objectively using the SAW method. The system collects criteria, weights, and candidate scores then calculates ranked recommendations for transparent selection. Users get a dashboard to compare candidates and view final recommendations. The input flow is designed simple so committees can quickly enter data without errors. The end result reduces bias and accelerates the assistant selection decision process.

As a Full-Stack Web Developer, I designed the data schema and implemented end-to-end SAW calculation to ensure accuracy. I built the input flow for criteria, weights, and values then validated data to prevent scoring errors. I optimized queries and indexes so calculations remain fast even with many candidates. I added recommendation summaries, export features, and activity logs for decision auditing. I implemented basic monitoring and alerts so the committee knows when calculation or input errors occur.`,
            techStack: ['Laravel', 'Bootstrap', 'MySQL'],
            linkSource: 'https://github.com/lebefriedlich/spk_asdos_saw',
        },
        {
            Id: '2',
            heading: 'API Service',
            subHeading: 'API Kode Wilayah Indonesia',
            role: 'Backend Developer',
            pImg1: 'images/portfolio/API Kode Wilayah Indonesia.webp',
            des: `API Kode Wilayah Indonesia is a REST service that provides official regional codes from provinces to villages. It aims to provide a single data source for address forms, logistics, and government applications. Data is organized hierarchically so regional relationships are easy to trace and consistent. Endpoints are designed simple so other applications can use them without managing large datasets themselves. With one source of truth, address integration becomes faster and minimizes data duplication.

As a Backend Developer, I designed the hierarchical schema and performed complete seeding from provinces to villages. I added caching and rate limiting so lookups remain fast and stable during high traffic. I implemented data validation and normalization to ensure regional codes are consistent across all endpoints. I also set up logging and health checks to monitor errors and performance. I documented endpoints clearly so integrators can onboard faster.`,
            techStack: ['Laravel', 'MySQL'],
            linkPublish: 'https://wilayah-indonesia.mhna.my.id/',
            linkSource:
                'https://github.com/lebefriedlich/api-kode-wilayah-indonesia',
        },
        {
            Id: '3',
            heading: 'EventHub',
            subHeading: 'UIN Malang EventHub',
            role: 'Full-Stack Web Developer',
            pImg1: 'images/portfolio/UIN Malang EventHub.webp',
            des: `UIN Malang EventHub is a campus platform for publishing event schedules and managing registrations in one place. Students can view event details, quotas, and latest updates without opening multiple channels. Organizers get a dashboard to create, modify, and close events quickly. The notification system helps participants know about schedule changes in real-time. All features are designed responsive for comfortable use on mobile and desktop.

As a Full-Stack Web Developer, I built event CRUD, registration flows, participant quotas, and email notifications. I optimized database indexes so event listings and searches remain fast during high registration traffic. I implemented form validation and basic protections to prevent duplicate data and quota abuse. I refined the UI/UX so the registration flow is concise and clear across different screen sizes. I added logging and error checks so the team can quickly address operational issues.`,
            techStack: ['Laravel', 'Bootstrap', 'MySQL'],
            linkSource: 'https://github.com/lebefriedlich/Project-Prak-Sister',
        },
        {
            Id: '4',
            heading: 'Weather App',
            subHeading: 'CuacaSaja',
            role: 'Full-Stack Developer',
            pImg1: 'images/portfolio/CuacaSaja.webp',
            des: `CuacaSaja is a weather app that displays real-time forecasts with a clean cross-platform interface. Users can view temperature, humidity, wind speed, and forecasts for several days ahead. Locations can be changed quickly making it suitable for daily mobility. Data is summarized so important information appears without many clicks. The design is lightweight for comfortable use on mobile devices with limited connectivity.

As a Full-Stack Developer, I connected Flutter to a Laravel backend and cached weather provider calls to keep responses fast. I streamlined JSON payloads and optimized images so loading times on mobile are shorter. I added fallbacks and network error handling so the app stays informative even with poor connections. I managed environments and API keys securely to prevent exposure to the client. I also tested performance on low-power devices to ensure the experience remains smooth.`,
            techStack: ['Flutter', 'Laravel', 'MySQL'],
            linkSource: 'https://github.com/lebefriedlich/CuacaSaja-Mobile',
        },
        {
            Id: '5',
            heading: 'Game 3D',
            subHeading: 'Quiz Of Survival',
            role: 'Game 3D Programmer',
            pImg1: 'images/portfolio/Quiz Of Survival.webp',
            des: `Quiz Of Survival is a 3D survival game that combines action with quiz mechanics. Players must survive threats while answering questions to unlock paths or bonuses. The environment is designed dynamically to maintain tension and gameplay rhythm. Challenges are staged so players learn mechanics before difficulty increases. Visuals and controls are optimized for smooth and immersive experience.

As a Game 3D Programmer, I built the gameplay loop in Unity/C# and tuned physics and enemy spawn timing. I connected the quiz trigger system to player progress so questions appear at the right moments. I profiled scenes and eliminated bottlenecks to keep FPS stable even with many active objects. I iterated on damage, reward, and pacing balance so the game feels fair yet challenging. I organized the build pipeline and assets so the team can iterate and chase bugs faster.`,
            techStack: ['Unity', 'C#'],
            linkSource:
                'https://github.com/lebefriedlich/Quiz-Of-Survival-Game',
        },
        {
            Id: '6',
            heading: 'API Service',
            subHeading: 'WhatsApp Multi Account',
            role: 'Backend Developer',
            pImg1: 'images/portfolio/API WhatsApp Multi Account.webp',
            des: `This service manages multiple WhatsApp accounts for message automation and notifications. Users can link several numbers, send bulk messages, and receive webhook responses. The system keeps sessions alive so accounts don't disconnect easily. Message queuing helps distribute load during high traffic. With multi-account support, teams can centrally manage large-scale communications.

As a Backend Developer, I built a Node.js backend with session persistence, QR onboarding, and inter-account message routing. I added Prisma migrations, rate limiting, and queuing to ensure stable delivery without hitting limits. I set up health checks and monitoring so connection issues are detected quickly. I also created reconnect fallbacks so accounts automatically reconnect if sessions drop. I prepared documentation and payload examples so integrators can adopt faster.`,
            techStack: [
                'Node.js',
                'Express',
                'SQLite',
                'Prisma',
                'WWebJS',
                'QRCode',
                'dotenv',
            ],
            linkSource: 'https://github.com/lebefriedlich/wwebjs-multiaccount',
        },
        {
            Id: '7',
            heading: 'Scheduler Thesis',
            subHeading: 'SkripsiKu',
            role: 'Full-Stack Developer',
            pImg1: 'images/portfolio/Project Schedulling.webp',
            des: `SkripsiKu is a thesis scheduling application that tracks milestones and advisor-student coordination. Students can view timelines, deadlines, and guidance status clearly. Automatic reminders help reduce delays in chapter submissions or revisions. Advisors get progress summaries to monitor many students at once. The goal is to keep the mentoring process more structured and transparent.

As a Full-Stack Developer, I built the application with Livewire and Bootstrap including authentication, RBAC, and deadline management. I set up email/notification reminders via cron so students don't miss deadlines. I tightened form validation and access controls to prevent data mixing between accounts. I created progress tracking and activity logs so advisors can audit changes. I optimized queries and indexing so the dashboard remains fast even with large mentoring datasets.`,
            techStack: [
                'Laravel',
                'Bootstrap',
                'Livewire',
                'Mail',
                'Socialite',
                'OAuth Google',
                'MySQL',
            ],
            linkSource:
                'https://github.com/lebefriedlich/project-scheduling-thesis',
        },
        {
            Id: '8',
            heading: 'Donation App',
            subHeading: 'DanaPeduli',
            role: 'Full-Stack Developer',
            pImg1: 'images/portfolio/DanaPeduli.webp',
            des: `DanaPeduli is a donation platform for creating campaigns, attracting support, and displaying progress transparently. Donors can view targets, updates, and fund disbursement reports. Each campaign has a detail page so potential donors trust and understand the needs. The system records transactions so fund flows can be traced. The interface is lightweight so donations can be completed quickly from any device.

As a Full-Stack Developer, I implemented campaign CRUD, Midtrans payment integration, and ledger views so transactions can be audited. I added payment status notifications and verification so funds are recorded correctly. I built an admin dashboard with Livewire/Filament to moderate campaigns and monitor disbursement. I implemented input validation and basic protections to prevent fraud and duplicate data. I used query optimization and lightweight caching so campaign pages remain fast to load.`,
            techStack: [
                'Laravel',
                'Livewire',
                'Filament',
                'Tailwind CSS',
                'React',
                'InertiaJS',
                'Payment Gateway',
                'Midtrans',
                'PostgreSQL',
            ],
            linkSource:
                'https://github.com/lebefriedlich/project-scheduling-thesis',
        },
        {
            Id: '9',
            heading: 'GenBI Malang',
            subHeading: 'Bank Indonesia Scholarship Community',
            role: 'Backend Developer & Junior DevOps Engineer',
            pImg1: 'images/portfolio/GenBI Malang.webp',
            des: `GenBI (Generasi Baru Indonesia) Koordinator Wilayah Malang is the official Bank Indonesia Scholarship Community committed to driving positive change across the Malang region. Recipients of the Bank Indonesia Scholarship don't just receive educational funding—they automatically become part of GenBI, a nationwide community focused on developing superior and competent generations. As a key component of Bank Indonesia's contribution to national human capital development, GenBI Malang serves as a platform for news, events, member engagement, and collaborative initiatives. The community website displays announcements, event registrations, educational materials, and member resources. Pages are designed lightweight for seamless access across devices, with content regularly updated to keep members informed. Form integration helps committees efficiently collect participant data for events and programs.

As Backend Developer & Junior DevOps, I managed Linux servers with Nginx, established CI/CD pipelines, and configured monitoring and automated backups. I implemented authentication, RBAC, and structured API endpoints in Laravel/Fastify to ensure security and high performance. I set up comprehensive logging and alerts to detect production issues immediately. I optimized database queries and implemented strategic caching so news, event listings, and member pages load quickly even during peak traffic. I created deployment documentation and incident response SOPs so the team can confidently maintain and scale the system as the community grows.`,
            techStack: [
                'Laravel',
                'Socialite',
                'OAuth Google',
                'MySQL',
                'Fastify',
                'Prisma',
                'MySQL',
                'Ubuntu',
                'Nginx',
                'PM2',
                'GitHub Actions',
            ],
            linkSource:
                'https://github.com/lebefriedlich/DevOps-Portfolio',
            linkPublish: 'https://www.genbi-malang.org',
        },
    ];

    return (
        <div className="tp-portfolio-area section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="section-title text-center">
                        <span>Portfolio</span>
                        <h2>My Project</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="tp-portfolio-item">
                            <div className="row">
                                {portfolio.map((port, prt) => (
                                    <div
                                        className="col-lg-4 col-md-6 col-sm-12 custom-grid"
                                        key={prt}
                                    >
                                        <div className="">
                                            <div className="tp-portfolio-single">
                                                <div className="tp-portfolio-img">
                                                    <img
                                                        src={port.pImg1}
                                                        alt={
                                                            'Maulana Haekal Noval Akbar - ' +
                                                            port.heading
                                                        }
                                                    />
                                                </div>
                                                <div className="tp-portfolio-text">
                                                    <h2>{port.heading}</h2>
                                                    <span>
                                                        {port.subHeading}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            handleClickOpen(
                                                                port,
                                                            )
                                                        }
                                                    >
                                                        View Work
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PortfolioSingle
                open={open}
                onClose={handleClose}
                title={state?.heading ?? ''}
                doc={state?.des ?? ''}
                image1={state?.pImg1 ?? ''}
                role={state?.role ?? ''}
                techStack={state?.techStack ?? []}
                linkPublish={state?.linkPublish}
                linkSource={state?.linkSource}
            />

            <div className="white_svg svg_white">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                </svg>
            </div>
        </div>
    );
};

export default portfolio;
