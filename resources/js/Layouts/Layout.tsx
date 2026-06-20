// resources/js/Layouts/Layout.tsx
import React from 'react';
import { Head } from '@inertiajs/react';
import SidebarProfile from '../components/SidebarProfile';

interface LayoutProps {
    children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
    const siteUrl = 'https://mhna.my.id';
    const fullName = 'Maulana Haekal Noval Akbar';
    const jobTitle = 'Full-Stack Developer, Backend Developer, Junior DevOps Engineer';

    return (
        <>
            <Head title={`${fullName} - ${jobTitle} | Personal Website`}>
                <link rel="canonical" href={siteUrl} />
                <meta name="description" content={`${fullName} - ${jobTitle}. Specializing in Full-Stack Development, Backend Systems, and DevOps Infrastructure.`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#171717" />
            </Head>

            <div className="min-h-screen lg:py-[10vh] flex items-center justify-center relative bg-[#111] overflow-hidden lg:px-4">
                {/* Subtle Background Texture */}
                <div className="fixed inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url(/images/main_bg.png)', backgroundRepeat: 'repeat' }}></div>

                {/* Main Card (Subtle Glassmorphism) */}
                <div className="w-full max-w-[1280px] h-full lg:h-[80vh] min-h-[600px] bg-[#222]/80 backdrop-blur-xl border border-white/5 lg:rounded-[30px] shadow-2xl flex flex-col lg:flex-row relative z-10">

                    {/* Portal Target for Mobile Menu Toggle */}
                    <div id="mobile-menu-portal" className="block lg:hidden z-[110]"></div>

                    <SidebarProfile />
                    <div className="flex-1 h-full overflow-y-auto custom-scrollbar relative scroll-smooth lg:rounded-r-[30px] w-full">
                        {children}
                    </div>

                    {/* Portal Target for Desktop Right Controls */}
                    <div id="desktop-controls-portal" className="hidden lg:flex flex-col justify-between absolute right-[-80px] top-0 bottom-0 py-8 z-[100] w-[70px]"></div>
                </div>
            </div>
        </>
    );
};

export default RootLayout;
