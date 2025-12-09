// resources/js/Layouts/Layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../../styles/animate.css';
import '../../styles/flaticon.css';
import '../../styles/font-awesome.min.css';
import '../../styles/style.css';
import { Head } from '@inertiajs/react';

// Definisikan tipe untuk props komponen
interface LayoutProps {
    children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
    const siteUrl = 'https://mhna.my.id';

    return (
        <>
            <Head title="Maulana Haekal Noval Akbar - Personal Website">
                {/* Basic SEO */}
                <meta
                    name="description"
                    content="Backend & Laravel developer building modern, scalable, and maintainable web applications. Available for collaboration, freelance, and professional projects."
                />
                <meta
                    name="keywords"
                    content="Maulana Haekal Noval Akbar, Backend Developer, Laravel Developer, Web Developer, Personal Website"
                />
                <meta name="author" content="Maulana Haekal Noval Akbar" />

                {/* Open Graph */}
                <meta property="og:title" content="Maulana Haekal Noval Akbar - Personal Website" />
                <meta
                    property="og:description"
                    content="Complete profile, experience, and portfolio of Maulana Haekal Noval Akbar as a Backend & Laravel Developer."
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Maulana Haekal Noval Akbar" />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:image" content={`${siteUrl}/Images/about.png`} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Maulana Haekal Noval Akbar - Personal Website" />
                <meta
                    name="twitter:description"
                    content="Backend & Laravel Developer focused on modern and scalable web applications."
                />
                <meta name="twitter:image" content={`${siteUrl}/Images/about.png`} />

                {/* Canonical */}
                <link rel="canonical" href={siteUrl} />
            </Head>

            <div className="app-layout">
                {children}
            </div>
        </>
    );
};

export default RootLayout;
