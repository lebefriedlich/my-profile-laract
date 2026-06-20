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
            freelance: 'Freelance',
            available: 'Available',
            whatIDo: 'What I Do',
            role1: {
                title: 'Full Stack Developer',
                desc: 'Developing robust web applications and Progressive Web Apps (PWA) using modern technologies like Laravel, Webman, React, and Alpine.js.'
            },
            role2: {
                title: 'Backend Developer',
                desc: 'Specializing in RESTful APIs, database optimization, and high-performance architecture. Experienced in query optimization and Redis caching.'
            },
            role3: {
                title: 'Junior DevOps',
                desc: 'Continuously learning to containerize apps with Docker, automate deployments via GitHub Actions, and configure Linux servers. Always eager to grow.'
            },
            skillsTitle: 'Competencies & Technical Skills',
            skills: [
                'RESTful API Engineering',
                'Full Stack Web Development',
                'CI/CD & DevOps Implementation',
                'Backend Application Development',
                'Application Performance Optimization',
                'Software Architecture & System Design',
                'Database Engineering & Query Optimization',
                'Technical Mentoring & Developer Enablement',
                'PHP, JavaScript, Go, Java, Python, Dart',
                'Laravel, Webman, Node.js, React, Next.js, Flutter',
                'MySQL, PostgreSQL, SQLite, Redis',
                'Git, Docker, GitHub Actions, Linux VPS'
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
                desc: 'Decision Support System for evaluating teaching assistants. Built with scalable architecture and optimized database calculations.',
            },
            api: {
                title: 'API Service',
                subtitle: 'API Kode Wilayah Indonesia',
                role: 'Backend Developer',
                desc: 'REST API providing Indonesian regional codes. Implemented caching and rate limiting for high availability.',
            },
            eventhub: {
                title: 'EventHub',
                subtitle: 'UIN Malang EventHub',
                role: 'Full-Stack Developer',
                desc: 'Campus event management platform featuring real-time registration and centralized admin dashboard.',
            },
            weather: {
                title: 'Weather App',
                subtitle: 'CuacaSaja',
                role: 'Full-Stack Developer',
                desc: 'A weather forecasting app integrated with real-time public APIs, optimized for low bandwidth.',
            },
            game: {
                title: 'Game 3D',
                subtitle: 'Quiz Of Survival',
                role: 'Game Developer',
                desc: 'A 3D educational survival game developed using Unity and C#.',
            },
        },
        contact: {
            title: 'Contact',
            subtitle: 'Have Any Question?',
            address: 'Address',
            addressValue: 'Kabupaten Pasuruan, East Java, Indonesia',
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
            freelance: 'Pekerjaan Lepas',
            available: 'Tersedia',
            whatIDo: 'Apa Yang Saya Lakukan',
            role1: {
                title: 'Full Stack Developer',
                desc: 'Mengembangkan aplikasi web dan Progressive Web Apps (PWA) yang tangguh menggunakan teknologi modern seperti Laravel, Webman, React, dan Alpine.js.'
            },
            role2: {
                title: 'Backend Developer',
                desc: 'Ahli dalam pengembangan RESTful API, optimasi database, dan arsitektur berkinerja tinggi. Berpengalaman dalam optimasi query dan caching menggunakan Redis.'
            },
            role3: {
                title: 'Junior DevOps',
                desc: 'Terus belajar mengemas aplikasi menggunakan Docker, mengotomatisasi deployment lewat GitHub Actions, serta mengonfigurasi server Linux. Selalu antusias untuk berkembang.'
            },
            skillsTitle: 'Kompetensi Keahlian & Technical Skills',
            skills: [
                'RESTful API Engineering',
                'Full Stack Web Development',
                'CI/CD & DevOps Implementation',
                'Backend Application Development',
                'Application Performance Optimization',
                'Software Architecture & System Design',
                'Database Engineering & Query Optimization',
                'Technical Mentoring & Developer Enablement',
                'PHP, JavaScript, Go, Java, Python, Dart',
                'Laravel, Webman, Node.js, React, Next.js, Flutter',
                'MySQL, PostgreSQL, SQLite, Redis',
                'Git, Docker, GitHub Actions, Linux VPS'
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
            portfolio: 'Portofolio',
            projects: 'Proyek Saya',
            role: 'Peran',
            techStack: 'Tech Stack',
            viewSource: 'Lihat Kode Sumber',
            viewLive: 'Lihat Live',
            dss: {
                title: 'DSS',
                subtitle: 'PilihAsdos',
                role: 'Full-Stack Developer',
                desc: 'SPK Pilih Asdos adalah sistem pendukung keputusan untuk menilai calon asisten dosen. Dibangun dengan optimasi perhitungan berbobot yang andal.',
            },
            api: {
                title: 'API Service',
                subtitle: 'API Kode Wilayah Indonesia',
                role: 'Backend Developer',
                desc: 'REST API yang menyediakan data wilayah Indonesia. Menggunakan strategi caching yang dioptimalkan untuk respons cepat.',
            },
            eventhub: {
                title: 'EventHub',
                subtitle: 'UIN Malang EventHub',
                role: 'Full-Stack Developer',
                desc: 'Platform manajemen event kampus untuk publikasi dan registrasi acara secara terpusat dengan sistem notifikasi real-time.',
            },
            weather: {
                title: 'Weather App',
                subtitle: 'CuacaSaja',
                role: 'Full-Stack Developer',
                desc: 'Aplikasi cuaca yang menampilkan informasi real-time dengan pengoptimalan muatan data untuk jaringan terbatas.',
            },
            game: {
                title: 'Game 3D',
                subtitle: 'Quiz Of Survival',
                role: 'Game Developer',
                desc: 'Game survival edukasi 3D yang dibangun menggunakan Unity dan C#.',
            },
        },
        contact: {
            title: 'Kontak',
            subtitle: 'Ada Pertanyaan?',
            address: 'Alamat',
            addressValue: 'Kabupaten Pasuruan, Jawa Timur',
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
