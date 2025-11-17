// src/app/layout.js
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import { Poppins, Great_Vibes } from 'next/font/google';
import Script from 'next/script'; // <--- OVDE!
import './styles/globals.css';

export const metadata = {
  title: 'Bucka | Frizerski Salon Novi Sad',
  description: 'Frizerski salon Bucka u Novom Sadu nudi šišanje, farbanje i negu kose. Posetite nas u 1300 kaplara 12 ili pozovite +381 21 466074.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://bucka.rs')
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
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#F7F2FF" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              "name": "Frizerski Salon Bucka",
              "image": "https://bucka.rs/logo/logo_headers.png",
              "url": "https://bucka.rs",
              "telephone": "+38121466074",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1300 kaplara 12",
                "addressLocality": "Novi Sad",
                "addressCountry": "RS"
              },
              "openingHours": "Mo-Fr 08:00-19:00",
              "priceRange": "€€",
              "sameAs": [
                "https://www.facebook.com/salonbucka",
                "https://instagram.com/salon_lepote_bucka"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
              {/* <body className="min-h-screen flex flex-col bg-salon-white"> */}
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="afterInteractive"
        />

        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}