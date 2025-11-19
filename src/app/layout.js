// src/app/layout.js
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import { Poppins, Great_Vibes } from 'next/font/google';
import Script from 'next/script'; // <--- OVDE!
import './styles/globals.css';


export const metadata = {
  metadataBase: new URL('https://www.bucka.rs'),

  alternates: {
    canonical: '/',   // ← dodaj ovo (ako već nemaš)
  },

  title: {
    default: 'Bucka | Frizerski Salon Novi Sad',
    template: '%s | Bucka'
  },

  description: 'Frizerski salon Bucka | Novi Sad – šišanje, farbanje i nega kose. 1300 kaplara 12 • +381 21 466074',

  openGraph: {
    siteName: 'Frizerski salon Bucka',           // ← OVO JE KLJUČ ZA DRUGI RED
    title: 'Bucka | Frizerski Salon Novi Sad',
    description: 'Profesionalne frizerske usluge u Novom Sadu.',
    url: 'https://www.bucka.rs',
    images: [{ url: '/logo/logo_headers.png', width: 1200, height: 630, alt: 'Bucka salon' }],
    locale: 'sr_RS',
    type: 'website',
  },

  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  themeColor: '#F7F2FF',
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
      {/* CEO <head> BLOK SE BRIŠE – Next.js ga automatski generiše */}

      <body className="min-h-screen flex flex-col">
        <Script src="https://static.elfsight.com/platform/platform.js" strategy="afterInteractive" />
        
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* JSON-LD ostaje ovde – ovo je jedino dozvoljeno mesto u Next.js 15 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              "name": "Frizerski Salon Bucka",
              "image": "https://www.bucka.rs/logo/logo_headers.png",
              "url": "https://www.bucka.rs",          // ← i ovde dodaj www
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
      </body>
    </html>
  );
}