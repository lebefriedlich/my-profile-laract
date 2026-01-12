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
    const fullName = 'Maulana Haekal Noval Akbar';
    const jobTitle = 'Software Engineer, Full-Stack Developer & Backend Developer';

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': fullName,
        'jobTitle': jobTitle,
        'url': siteUrl,
        'image': `${siteUrl}/images/about.webp`,
        'sameAs': [
            'https://www.linkedin.com/in/maulana-haekal/',
            'https://github.com/lebefriedlich',
            'https://www.instagram.com/novalakbar38/'
        ],
        'worksFor': {
            '@type': 'Organization',
            'name': 'Kriingg'
        },
        'description': 'Full-Stack Developer, Software Engineer, and Backend Developer specializing in Laravel and modern web technologies. Available for collaboration and professional projects.'
    };

    return (
        <>
            <Head title={`${fullName} - ${jobTitle} | Personal Website`}>
                {/* Canonical URL */}
                <link rel="canonical" href={siteUrl} />

                {/* Basic SEO */}
                <meta
                    name="description"
                    content={`${fullName} - ${jobTitle}. Specializing in Laravel, PHP, and modern web technologies. Building scalable and maintainable systems. Available for collaboration and freelance work.`}
                />
                <meta
                    name="keywords"
                    content="Maulana Haekal Noval Akbar, Backend Developer, Laravel Developer, Software Engineer, Full-Stack Developer, PHP Developer, Web Developer, Indonesia, Malang"
                />
                <meta name="author" content={fullName} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#191919" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

                {/* Open Graph */}
                <meta property="og:title" content={`${fullName} - ${jobTitle}`} />
                <meta
                    property="og:description"
                    content={`Complete profile and portfolio of ${fullName}. Backend Developer specializing in Laravel, building modern and scalable web applications.`}
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={fullName} />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:image" content={`${siteUrl}/images/about.webp`} />
                <meta property="og:image:alt" content={fullName} />
                <meta property="og:locale" content="en_US" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${fullName} - ${jobTitle}`} />
                <meta
                    name="twitter:description"
                    content={`Backend Developer & Software Engineer specializing in Laravel and modern web technologies.`}
                />
                <meta name="twitter:image" content={`${siteUrl}/images/about.webp`} />
                <meta name="twitter:image:alt" content={fullName} />

                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />

                {/* Additional structured data for breadcrumbs */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'BreadcrumbList',
                            'itemListElement': [
                                {
                                    '@type': 'ListItem',
                                    'position': 1,
                                    'name': 'Home',
                                    'item': siteUrl
                                }
                            ]
                        })
                    }}
                />
            </Head>

            <div className="app-layout">
                {children}
            </div>
        </>
    );
};

export default RootLayout;
