// src/app/layout.js
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import { Poppins, Great_Vibes } from 'next/font/google';
import './styles/globals.css';

export const metadata = {
  title: 'Bucka | Frizerski Salon',
  description: 'Transformišite svoj stil uz naše profesionalne frizerske i kozmetičke usluge.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
<html lang="sr" className={`${poppins.variable} ${greatVibes.variable}`}>
     <head>
       {/* Elfsight skripta */}
        <script src="https://static.elfsight.com/platform/platform.js" async />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
     </head>
     <body>
        {children}
      </body>
    </html>
  );
}