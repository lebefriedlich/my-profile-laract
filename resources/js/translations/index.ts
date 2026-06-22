const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About Me',
            resume: 'Resume',
            portfolio: 'Portfolio',
            contact: 'Contact',
        },
        hero: {
            hi: 'Hi Folks',
            iam: 'I am a',
            role1: 'Software Engineer',
            role2: 'Backend Developer',
            role3: 'Full Stack Developer',
            cta: 'Contact Me',
        },
        about: {
            title: 'Software Engineer | Backend Developer | Full Stack Developer',
            desc1: "I am a Software Engineer specializing in Backend Development with experience in developing, maintaining, and optimizing web-based applications in production environments. My expertise includes REST API development, administration dashboards, system integrations, and backend services management, along with solid Full Stack Development and infrastructure management capabilities.",
            desc2: "I played a key role in the full platform migration from Laravel API and React Native architecture to a Progressive Web App (PWA) using Webman, HTMX, and Alpine.js, handling over 10 feature developments and 20 system enhancements on actively used applications. I have hands-on experience in Redis Cache implementation, database query optimization, CI/CD pipelines via GitHub Actions and Docker, as well as deployment and maintenance on Linux Server environments.",
            desc3: "Beyond my professional experience, I have led a developer team for an organization's digital platform and actively provided technical mentoring to over 40 students in web programming and software engineering. Backed by certifications in Java, JavaScript, SQL, and Software Development, I possess strong competencies in backend engineering, system architecture, database optimization, and scalable, maintainable application development.",
            residence: 'Residence',
            residenceValue: 'Indonesia',
            address: 'Address',
            addressValue: 'Pasuruan Regency, East Java',
            freelance: 'Freelance',
            available: 'Available',
            whatIDo: 'What I Do',
            role1: {
                title: 'Software Engineer',
                desc: 'Building scalable, maintainable software architectures aligned with business needs.'
            },
            role2: {
                title: 'Backend Developer',
                desc: 'Specializing in RESTful APIs, database optimization, and high-performance architecture. Experienced in query optimization and Redis caching.'
            },
            role3: {
                title: 'Full Stack Developer',
                desc: 'Developing robust web applications and Progressive Web Apps (PWA) using modern technologies like Laravel, Webman, React.js, Next.js and Alpine.js.'
            },
            role4: {
                title: 'Junior DevOps',
                desc: 'Continuously learning to containerize apps with Docker, automate deployments via GitHub Actions, and configure Linux servers. Always eager to grow.'
            },
            competenciesTitle: 'Competencies',
            technicalSkillsTitle: 'Technical Skills',
            competencies: [
                'Software Architecture & System Design',
                'Database Engineering & Query Optimization',
                'RESTful API Engineering',
                'Backend Application Development',
                'Application Performance Optimization',
                'Full Stack Web Development',
                'CI/CD & DevOps Implementation',
                'Technical Mentoring & Developer Enablement',
            ],
            technicalSkills: [
                { category: 'Programming Languages', items: 'PHP, JavaScript, Go, Java, Python, Dart' },
                { category: 'Backend Development', items: 'Laravel, CodeIgniter, Webman, Express.js, Fastify, Flask, REST APIs, GraphQL, JWT, OAuth 2.0' },
                { category: 'Frontend & Mobile Development', items: 'React.js, Next.js, Livewire, Inertia.js, Blade, Flutter, HTML, CSS, Bootstrap, Tailwind CSS' },
                { category: 'Databases', items: 'MySQL, PostgreSQL, SQLite, Redis' },
                { category: 'DevOps & Developer Tools', items: 'Git, GitHub, GitHub Actions, Docker, Postman, Visual Studio Code' }
            ],
        },
        resume: {
            title: 'Resume',
            subtitle: 'Education & Experience',
            education: 'Education',
            experience: 'Experience',
            educationList: [
                {
                    year: 'Aug 2022 - May 2026',
                    title: 'Bachelor of Informatics Engineering (GPA: 3.82/4.00)',
                    institution: 'State Islamic University of Maulana Malik Ibrahim Malang',
                    description: "Thesis: Air Quality Forecasting using Support Vector Regression.\nFocus: Algorithms, Object-Oriented Programming, Databases, Web Programming, Software Engineering.\nAchievements: Bank Indonesia Scholarship Awardee (2025), Speaker at Semarak Ta'aruf Informatics (2024), IT Incu Mentor (2023)."
                }
            ],
            experienceList: [
                {
                    year: 'Apr 2025 - Present',
                    title: 'Backend Developer',
                    institution: 'PT RAWP MULTITECH INNOVATIONS (KRIINGG)',
                    description: 'Developed backend services using Webman. Led migration from Laravel API & React Native to PWA (Webman, HTMX, Alpine.js). Optimized performance resolving N+1 Queries and implementing Redis Cache, accelerating response times up to 60%.'
                },
                {
                    year: 'Feb 2026 - Jun 2026',
                    title: 'Teaching Assistant – Web Programming',
                    institution: 'Informatics Engineering UIN Malang',
                    description: 'Mentored 20 students over 15 practicum sessions covering HTML, CSS, JS, PHP, and MySQL. Guided the implementation of CRUD systems, authentication, and provided code reviews and debugging assistance.'
                },
                {
                    year: 'Aug 2025 - May 2026',
                    title: 'Website Development Coordinator',
                    institution: 'GenBI Malang',
                    description: 'Led a team of 3 developers to build and maintain the organizational website. Developed a centralized admin dashboard and REST APIs. Implemented CI/CD pipeline using GitHub Actions and Docker to a Linux VPS.'
                },
                {
                    year: 'Feb 2025 - Jul 2025',
                    title: 'Teaching Assistant – OOP',
                    institution: 'Informatics Engineering UIN Malang',
                    description: 'Mentored 20 students in Java OOP concepts. Assisted in solving 80+ debugging cases and evaluating practical projects based on Encapsulation, Inheritance, and Polymorphism.'
                },
                {
                    year: 'Jan 2025 - Mar 2025',
                    title: 'Backend Developer Intern',
                    institution: 'PT RAWP MULTITECH INNOVATIONS (KRIINGG)',
                    description: 'Designed and implemented 20+ REST API endpoints for authentication, ordering, and payment systems. Participated in Agile development workflows including sprint planning and daily stand-ups.'
                }
            ]
        },
        portfolio: {
            portfolio: 'Portfolio',
            projects: 'My Projects',
            role: 'Role',
            techStack: 'Tech Stack',
            viewSource: 'View Source Code',
            viewLive: 'View Live',
            dss: {
                title: 'DSS',
                subtitle: 'PilihAsdos',
                role: 'Full-Stack Developer',
                desc: 'A Decision Support System (DSS) designed to streamline the evaluation and selection of teaching assistants. It implements scalable architecture and optimized weighted calculation algorithms to ensure accurate, data-driven decisions.\n\nAs a Full-Stack Developer, I built the platform using Laravel and Bootstrap, focusing on a clean UI and efficient backend processing. The system handles complex matrix calculations and dynamic criteria weighting, ensuring that the final rankings are generated quickly and reliably even with large datasets.',
            },
            api: {
                title: 'API Service',
                subtitle: 'API Kode Wilayah Indonesia',
                role: 'Backend Developer',
                desc: 'A reliable REST API service that provides comprehensive regional code data for Indonesia. Built with performance in mind, it implements advanced caching strategies and rate limiting to ensure high availability and fast response times.\n\nAs a Backend Developer, I designed the architecture using Laravel and MySQL to handle high-frequency requests efficiently. I implemented robust endpoint validations and response formatting, ensuring that developers integrating this API receive consistent and accurate geographical data.',
            },
            eventhub: {
                title: 'EventHub',
                subtitle: 'UIN Malang EventHub',
                role: 'Full-Stack Developer',
                desc: 'A centralized campus event management platform that simplifies event publication and attendee registration. It features a comprehensive admin dashboard and real-time notifications to streamline campus activities.\n\nAs a Full-Stack Developer, I developed the system with Laravel, implementing role-based access control (RBAC) to separate student and admin privileges. The platform includes automated registration tracking and data export capabilities, significantly reducing the administrative workload for event organizers.',
            },
            weather: {
                title: 'Weather App',
                subtitle: 'CuacaSaja',
                role: 'Full-Stack Developer',
                desc: 'A responsive weather forecasting application that integrates with public APIs to deliver real-time meteorological data. The application is highly optimized for low-bandwidth networks, ensuring reliable access in varying network conditions.\n\nAs a Full-Stack Developer, I built the mobile application using Flutter and connected it to a Laravel backend for caching and data aggregation. The app features location-based updates, intuitive weather visualizations, and offline support for previously loaded forecasts.',
            },
            game: {
                title: 'Game 3D',
                subtitle: 'Quiz Of Survival',
                role: 'Game Developer',
                desc: 'An interactive 3D educational survival game developed with Unity and C#. It combines engaging survival mechanics with educational elements, offering a unique and immersive learning experience for players.\n\nAs a Game Developer, I programmed the core gameplay mechanics, enemy AI, and inventory systems. I focused on optimizing 3D assets and writing efficient scripts to maintain a stable frame rate, ensuring a smooth and enjoyable experience across different hardware specifications.',
            },
        },
        contact: {
            title: 'Contact',
            subtitle: 'Have Any Question?',
            address: 'Address',
            addressValue: 'Pasuruan Regency, East Java, Indonesia',
            email: 'Email',
            form: {
                name: 'Name',
                lastname: 'Last Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                send: 'Send Message',
                nameError: 'Please enter your name',
                lastnameError: 'Please enter your Lastname',
                emailError: 'Please enter your email',
                subjectError: 'Please enter your subject',
                messageError: 'Please enter your message',
                sending: 'Sending...',
                success: 'Message sent successfully!',
                error: 'Failed to send message',
            },
        },
        footer: {
            copyright: 'All rights reserved',
        },
    },
    id: {
        nav: {
            home: 'Beranda',
            about: 'Tentang Saya',
            resume: 'Resume',
            portfolio: 'Portofolio',
            contact: 'Kontak',
        },
        hero: {
            hi: 'Halo Semua',
            iam: 'Saya seorang',
            role1: 'Software Engineer',
            role2: 'Backend Developer',
            role3: 'Full Stack Developer',
            cta: 'Hubungi Saya',
        },
        about: {
            title: 'Software Engineer | Backend Developer | Full Stack Developer',
            desc1: 'Software Engineer dengan spesialisasi Backend Developer dengan pengalaman dalam pengembangan, pemeliharaan, dan optimasi aplikasi berbasis web pada lingkungan produksi, mencakup pengembangan REST API, dashboard administrasi, integrasi sistem, serta pengelolaan layanan backend yang mendukung operasional bisnis sekaligus memiliki kemampuan Full Stack Development dan pengelolaan infrastruktur aplikasi.',
            desc2: 'Berperan dalam migrasi penuh platform aplikasi dari arsitektur Laravel API dan React Native menjadi Progressive Web App (PWA) berbasis Webman, HTMX, dan Alpine.js, sekaligus menangani 10+ pengembangan fitur serta 20+ perbaikan dan peningkatan sistem pada aplikasi yang aktif digunakan. Memiliki pengalaman dalam implementasi Redis Cache, optimasi query database, CI/CD pipeline berbasis GitHub Actions dan Docker, serta deployment dan maintenance aplikasi pada lingkungan Linux Server.',
            desc3: 'Selain pengalaman profesional, dipercaya memimpin tim developer dalam pengembangan platform digital organisasi dan aktif memberikan technical mentoring kepada 40+ mahasiswa pada bidang pemrograman web dan software engineering. Didukung sertifikasi Java Programming, JavaScript, SQL, dan Software Development, dengan kompetensi yang kuat dalam backend engineering, system architecture, database optimization, dan pengembangan aplikasi yang scalable, maintainable serta berorientasi pada kebutuhan pengguna dan bisnis.',
            residence: 'Tempat Tinggal',
            residenceValue: 'Indonesia',
            address: 'Alamat',
            addressValue: 'Kab. Pasuruan, Jawa Timur',
            freelance: 'Pekerjaan Lepas',
            available: 'Tersedia',
            whatIDo: 'Apa Yang Saya Lakukan',
            role1: {
                title: 'Software Engineer',
                desc: 'Merancang arsitektur perangkat lunak yang scalable, maintainable, dan berorientasi pada kebutuhan bisnis.'
            },
            role2: {
                title: 'Backend Developer',
                desc: 'Ahli dalam pengembangan RESTful API, optimasi database, dan arsitektur berkinerja tinggi. Berpengalaman dalam optimasi query dan caching menggunakan Redis.'
            },
            role3: {
                title: 'Full Stack Developer',
                desc: 'Mengembangkan aplikasi web dan Progressive Web Apps (PWA) yang tangguh menggunakan teknologi modern seperti Laravel, Webman, React.js, Next.js, dan Alpine.js.'
            },
            role4: {
                title: 'Junior DevOps',
                desc: 'Terus belajar mengemas aplikasi menggunakan Docker, mengotomatisasi deployment lewat GitHub Actions, serta mengonfigurasi server Linux. Selalu antusias untuk berkembang.'
            },
            competenciesTitle: 'Kompetensi Keahlian',
            technicalSkillsTitle: 'Technical Skills',
            competencies: [
                'Software Architecture & System Design',
                'Database Engineering & Query Optimization',
                'RESTful API Engineering',
                'Backend Application Development',
                'Application Performance Optimization',
                'Full Stack Web Development',
                'CI/CD & DevOps Implementation',
                'Technical Mentoring & Developer Enablement',
            ],
            technicalSkills: [
                { category: 'Programming Languages', items: 'PHP, JavaScript, Go, Java, Python, Dart' },
                { category: 'Backend Development', items: 'Laravel, CodeIgniter, Webman, Express.js, Fastify, Flask, REST APIs, GraphQL, JWT, OAuth 2.0' },
                { category: 'Frontend & Mobile Development', items: 'React.js, Next.js, Livewire, Inertia.js, Blade, Flutter, HTML, CSS, Bootstrap, Tailwind CSS' },
                { category: 'Databases', items: 'MySQL, PostgreSQL, SQLite, Redis' },
                { category: 'DevOps & Developer Tools', items: 'Git, GitHub, GitHub Actions, Docker, Postman, Visual Studio Code' }
            ],
        },
        resume: {
            title: 'Resume',
            subtitle: 'Pendidikan & Pengalaman',
            education: 'Pendidikan',
            experience: 'Pengalaman',
            educationList: [
                {
                    year: 'Agustus 2022 – Mei 2026',
                    title: 'S-1 Teknik Informatika (IPK: 3.82/4.00)',
                    institution: 'Universitas Islam Negeri Maulana Malik Ibrahim Malang',
                    description: "Skripsi: Peramalan Kualitas Udara untuk Pemantauan Berdasarkan World Air Quality Index Menggunakan Support Vector Regression.\nMinat Studi: Algoritma dan Pemrograman, OOP, Basis Data, Pemrograman Web, Rekayasa Perangkat Lunak.\nPrestasi: Penerima Beasiswa Bank Indonesia (2025), Pemateri Semarak Ta'aruf (2024), Mentor IT Incu (2023)."
                }
            ],
            experienceList: [
                {
                    year: 'April 2025 – Sekarang',
                    title: 'Backend Developer',
                    institution: 'PT RAWP MULTITECH INNOVATIONS (KRIINGG)',
                    description: 'Mengembangkan layanan backend berbasis Webman. Memimpin migrasi platform dari Laravel API & React Native menjadi PWA (Webman, HTMX, Alpine.js). Mengoptimalkan performa mengatasi N+1 Query dan implementasi Redis Cache, memperbaiki respons hingga 60%.'
                },
                {
                    year: 'Februari 2026 – Juni 2026',
                    title: 'Teaching Assistant – Web Programming',
                    institution: 'Teknik Informatika UIN Maulana Malik Ibrahim Malang',
                    description: 'Membimbing 20 mahasiswa dalam 15 sesi praktikum Web Programming (HTML, CSS, JS, PHP, MySQL). Mendampingi 100+ kasus debugging dan mengevaluasi implementasi CRUD serta autentikasi.'
                },
                {
                    year: 'Agustus 2025 – Mei 2026',
                    title: 'Website Development Coordinator',
                    institution: 'GenBI Malang',
                    description: 'Mengoordinasikan tim developer membangun dashboard administrasi dan REST API. Mengimplementasikan CI/CD pipeline menggunakan GitHub Actions dan Docker ke VPS Linux.'
                },
                {
                    year: 'Februari 2025 – Juli 2025',
                    title: 'Teaching Assistant – Object Oriented Programming',
                    institution: 'Teknik Informatika UIN Maulana Malik Ibrahim Malang',
                    description: 'Membimbing mahasiswa dalam praktikum Java OOP. Mendampingi penyelesaian 80+ kasus debugging serta mengulas implementasi Encapsulation, Inheritance, dan Polymorphism.'
                },
                {
                    year: 'Januari 2025 – Maret 2025',
                    title: 'Backend Developer Intern',
                    institution: 'PT RAWP MULTITECH INNOVATIONS (KRIINGG)',
                    description: 'Merancang dan mengimplementasikan 20+ endpoint REST API untuk fitur autentikasi, pembayaran, dan pesanan dalam lingkungan pengembangan Agile.'
                }
            ]
        },
        portfolio: {
            portfolio: 'Portfolio',
            projects: 'My Projects',
            role: 'Role',
            techStack: 'Tech Stack',
            viewSource: 'View Source Code',
            viewLive: 'View Live',
            dss: {
                title: 'DSS',
                subtitle: 'Select Teaching Assistant',
                role: 'Full-Stack Developer',
                desc: 'The DSS Select Teaching Assistant system is a decision support system designed to help evaluate and select candidate teaching assistants. This system uses a weighted calculation method to generate rankings based on specific criteria.\n\nAs a Full-Stack Developer, I built this application using Laravel and Bootstrap, focusing on data processing and a simple yet efficient interface. The system handles matrix calculations and criteria weighting to produce selection results.'
            },
            api: {
                title: 'API Service',
                subtitle: 'Indonesian Region Code API',
                role: 'Backend Developer',
                desc: 'A REST API that provides structured data of Indonesian regions. This API is designed for data integration needs with a focus on performance and response consistency.\n\nI built this service using Laravel and MySQL, with query optimization to improve data access efficiency.'
            },
            eventhub: {
                title: 'EventHub',
                subtitle: 'UIN Malang EventHub',
                role: 'Full-Stack Developer',
                desc: 'A campus event management system to help organize events and participant registration. This system includes an admin dashboard and event data management features.\n\nI developed this system using Laravel with role-based access control (RBAC) to differentiate user and admin permissions.'
            },
            weather: {
                title: 'Weather App',
                subtitle: 'CuacaSaja',
                role: 'Full-Stack Developer',
                desc: 'A weather application that fetches data from an external API to display real-time weather information.\n\nI built this application using Flutter and a Laravel backend to process weather data more efficiently.'
            },
            game: {
                title: '3D Game',
                subtitle: 'Quiz Of Survival',
                role: 'Game Developer',
                desc: 'A 3D educational game developed using Unity and C#. This game combines survival concepts with interactive learning elements.\n\nI developed the core gameplay mechanics and game logic system to ensure a stable gaming experience.'
            }
        },
        contact: {
            title: 'Kontak',
            subtitle: 'Ada Pertanyaan?',
            address: 'Alamat',
            addressValue: 'Kabupaten Pasuruan, Jawa Timur, Indonesia',
            email: 'Email',
            form: {
                name: 'Nama',
                lastname: 'Nama Belakang',
                email: 'Email',
                subject: 'Subjek',
                message: 'Pesan',
                send: 'Kirim Pesan',
                nameError: 'Silakan masukkan nama Anda',
                lastnameError: 'Silakan masukkan nama belakang Anda',
                emailError: 'Silakan masukkan email Anda',
                subjectError: 'Silakan masukkan subjek',
                messageError: 'Silakan masukkan pesan Anda',
                sending: 'Mengirim...',
                success: 'Pesan berhasil dikirim!',
                error: 'Gagal mengirim pesan',
            },
        },
        footer: {
            copyright: 'Semua hak dilindungi',
        },
    },
};

export default translations;
