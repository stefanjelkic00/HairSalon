// src/app/layout.js
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import { Poppins, Great_Vibes } from 'next/font/google';
import './styles/globals.css';

export const metadata = {
  title: 'Bucka - Vrhusnke Frizerske Usluge',
  description: 'Transformišite svoj stil uz naše profesionalne frizerske i kozmetičke usluge u Salonu Ime.',
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
     </head>
     <body>
        {children}
      </body>
    </html>
  );
}