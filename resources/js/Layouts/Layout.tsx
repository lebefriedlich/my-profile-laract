// resources/js/Layouts/Layout.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css';
import '../styles/flaticon.css';
import "../styles/font-awesome.min.css";
import '../styles/style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Definisikan tipe untuk props komponen
interface LayoutProps {
  children: React.ReactNode; // Menyatakan bahwa children bisa berupa komponen React apapun
}

export const metadata = {
  metadataBase: new URL('https://your-domain.com'), // ganti dengan domain asli
  title: {
    default: "Maulana Haekal Noval Akbar | Backend & Laravel Developer",
    template: "%s | Maulana Haekal Noval Akbar",
  },
  description:
    "Backend & Laravel developer building modern, scalable, and maintainable web applications. Available for collaboration, freelance, and professional projects.",
  keywords: [
    "Maulana Haekal Noval Akbar",
    "Backend Developer",
    "Laravel Developer",
    "Web Developer",
    "Personal Website",
  ],
  openGraph: {
    title: "Maulana Haekal Noval Akbar | Backend & Laravel Developer",
    description:
      "Complete profile, experience, and portfolio of Maulana Haekal Noval Akbar as a Backend & Laravel Developer.",
    url: "/",
    siteName: "Maulana Haekal Noval Akbar",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maulana Haekal Noval Akbar | Backend & Laravel Developer",
    description:
      "Backend & Laravel Developer focused on modern and scalable web applications.",
  },
  alternates: {
    canonical: "/",
  },
};

// Fungsi RootLayout dengan tipe data yang sesuai
const RootLayout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        {/* Metadata bisa ditempatkan di sini jika perlu */}
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
