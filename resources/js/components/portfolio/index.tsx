import { useState } from 'react';
import PortfolioSingle from '../portfolioSingle';

// Tipe untuk setiap item portfolio
interface PortfolioItem {
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

const Portfolio = () => {
    // Tipe untuk state yang menyimpan detail portfolio yang dibuka
    const [open, setOpen] = useState(false);
    const [state, setState] = useState<PortfolioItem | undefined>(undefined); // Menyimpan detail item yang dipilih

    function handleClose() {
        setOpen(false);
    }

    const handleClickOpen = (item: PortfolioItem) => {
        setOpen(true);
        setState(item); // Menyimpan item yang dipilih ke state
    };

    const portfolio: PortfolioItem[] = [
        {
            Id: '1',
            heading: 'AFEKSI',
            subHeading: 'AFEKSI.IDN',
            role: 'Backend Developer',
            pImg1: 'images/portfolio/Afeksi.png',
            des: 'Afeksi is an education and consultation platform focused on healthy relationships. It provides a safe and supportive space for individuals, couples, and communities to explore emotional well-being and interpersonal dynamics. Through insightful educational content and guided consultation sessions, Afeksi helps users build healthy communication patterns and stronger connections. The platform emphasizes mindfulness, empathy, and personal growth to promote sustainable relational development. Afeksi continues to evolve as a hub for learning and support for anyone seeking a healthier relationship life.',
            techStack: ['Laravel', 'Bootstrap', 'MySQL'],
            linkPublish: 'https://afeksiidn.com',
        },
        {
            Id: '2',
            heading: 'DSS',
            subHeading: 'PilihAsdos',
            role: 'Full Stack Web Developer',
            pImg1: 'images/portfolio/SPK Pilih Asdos.png',
            des: 'SPK Pilih Asdos is a Decision Support System (DSS) designed to streamline the selection of teaching assistants. It uses the SAW (Simple Additive Weighting) method to evaluate candidates more objectively based on defined criteria. This system helps reduce bias and human error during the selection process. By presenting calculated recommendations, it enables institutions to make more accurate and data-driven decisions. Its user-friendly interface and automated scoring make the assistant selection process more efficient and transparent.',
            techStack: ['Laravel', 'Bootstrap', 'MySQL'],
            linkSource: 'https://github.com/lebefriedlich/spk_asdos_saw',
        },
        {
            Id: '3',
            heading: 'API Service',
            subHeading: 'API Kode Wilayah Indonesia',
            role: 'Backend Developer',
            pImg1: 'images/portfolio/API Kode Wilayah Indonesia.png',
            des: 'API Kode Wilayah Indonesia provides a comprehensive API service for accessing official Indonesian regional codes. It is designed to help developers efficiently integrate regional data into their applications without managing complex datasets manually. The API ensures consistent, accurate, and structured information for provinces, cities, districts, and villages. This service is beneficial for applications involving forms, logistics, mapping, and administrative processing. With a simple and reliable endpoint system, it enhances productivity and reduces integration time for developers.',
            techStack: ['Laravel', 'MySQL'],
            linkPublish: 'https://wilayah-indonesia.mhna.my.id/',
            linkSource:
                'https://github.com/lebefriedlich/api-kode-wilayah-indonesia',
        },
        {
            Id: '4',
            heading: 'EventHub',
            subHeading: 'UIN Malang EventHub',
            role: 'Full Stack Web Developer',
            pImg1: 'images/portfolio/UIN Malang EventHub.png',
            des: 'UIN Malang EventHub is a complete event management platform built to support the organization and promotion of campus events at UIN Malang. It allows administrators to create, schedule, and manage events with ease. Users can register for events, receive real-time updates, and track event information through a centralized interface. The platform enhances student engagement by providing accessible event announcements and simplified registration. With its streamlined workflow, EventHub significantly improves the efficiency of campus event coordination.',
            techStack: ['Laravel', 'Bootstrap', 'MySQL'],
            linkPublish: 'https://eventhub.mhna.my.id/',
            linkSource: 'https://github.com/lebefriedlich/Project-Prak-Sister',
        },
        {
            Id: '5',
            heading: 'Weather App',
            subHeading: 'CuacaSaja',
            role: 'Full Stack Developer',
            pImg1: 'images/portfolio/CuacaSaja.png',
            des: 'CuacaSaja is a weather application designed to deliver accurate and real-time weather information to users. It features a clean and intuitive interface that enhances the overall user experience. The application supports multi-platform access, allowing users to check weather data from mobile devices easily. CuacaSaja also provides detailed information such as temperature, humidity, wind speed, and forecasts. Built with Flutter and Laravel, it offers fast performance and reliable data handling.',
            techStack: ['Flutter', 'Laravel', 'MySQL'],
            linkSource: 'https://github.com/lebefriedlich/CuacaSaja-Mobile',
        },
        {
            Id: '6',
            heading: 'Game 3D',
            subHeading: 'Quiz Of Survival',
            role: 'Game Programmer',
            pImg1: 'images/portfolio/Quiz Of Survival.png',
            des: 'Quiz Of Survival is a 3D survival game that challenges players with a combination of action and knowledge-based mechanics. Players must navigate a dynamic environment while solving quiz questions to avoid threats. The game features immersive visuals, smooth controls, and engaging progression systems. Its unique blend of education and gameplay creates a fresh and exciting experience for players. Quiz Of Survival aims to provide both entertainment and mental challenge within a well-crafted 3D world.',
            techStack: ['Unity', 'C#'],
            linkSource:
                'https://github.com/lebefriedlich/Quiz-Of-Survival-Game',
        },
        {
            Id: '7',
            heading: 'API Service',
            subHeading: 'WhatsApp Multi Account',
            role: 'Backend Developer',
            pImg1: 'images/portfolio/API WhatsApp Multi Account.png',
            des: 'This API Service facilitates the management of multiple WhatsApp accounts, enabling seamless communication and automation. It provides robust backend support for handling message routing, account synchronization, and real-time notifications. Designed for scalability and reliability, the service integrates with various platforms to enhance user engagement and operational efficiency.',
            techStack: ['Node.js', 'Express', 'SQLite', 'Prisma', 'WWebJS', 'QRCode', 'dotenv'],
            linkSource:
                'https://github.com/lebefriedlich/wwebjs-multiaccount',
        },
        {
            Id: '8',
            heading: 'Scheduler Thesis',
            subHeading: 'SkripsiKu',
            role: 'Full Stack Developer',
            pImg1: 'images/portfolio/Project Schedulling.png',
            des: 'SkripsiKu is a thesis scheduling application designed to streamline the management of thesis timelines for students and faculty. It offers features such as deadline tracking, progress monitoring, and communication tools to facilitate collaboration between students and advisors. The app aims to enhance productivity and ensure timely completion of thesis projects through an organized and user-friendly interface.',
            techStack: ['Laravel','Bootstrap', 'Livewire', 'Mail', 'Socialite', 'OAuth Google','MySQL'],
            linkSource: 'https://github.com/lebefriedlich/project-scheduling-thesis',
        },
        {
            Id: '9',
            heading: 'Donation App',
            subHeading: 'DanaPeduli',
            role: 'Full Stack Developer',
            pImg1: 'images/portfolio/DanaPeduli.png',
            des: 'DanaPeduli is a donation application aimed at facilitating charitable contributions and fundraising efforts. It provides a secure and user-friendly platform for donors to support various causes and projects. The app includes features such as campaign creation, progress tracking, and transparent fund management to ensure accountability and trust among users.',
            techStack: ['Laravel', 'Livewire', 'Filament', 'Tailwind CSS', 'React', 'InertiaJS', 'Midtrans', 'PostgreSQL'],
            linkSource: 'https://github.com/lebefriedlich/project-scheduling-thesis',
        }
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
                                                        alt={port.heading}
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

export default Portfolio;
