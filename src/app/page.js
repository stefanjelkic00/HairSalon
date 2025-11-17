import Hero from './components/Hero';
import About from './components/about/About';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Contact from './components/contact/Contact';
import Map from './components/Map';
import ScrollAnimator from './components/client/ScrollAnimator'; // Nova klijentska komponenta


export const metadata = {
  title: 'Frizerski Salon Bucka | Novi Sad',
  description: 'Bucka, salon lepote u Novom Sadu sa iskustvom u šišanju, farbanju i nezi kose. Nalazimo se u 1300 kaplara 12. Kontakt: +381 21 466074.',
  robots: 'index, follow',
  openGraph: {
    title: 'Salon Lepote Bucka | Novi Sad',
    description: 'Salon Lepote Bucka nudi vrhunske usluge friziranja, šišanja i ulepšavanja u Novom Sadu.',
    images: ['/logo/logo_headers.png'],
    url: 'https://bucka.rs',
    type: 'website',
    locale: 'sr_RS',
  },
};


export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <div className="md:ml-16">
        <Hero />
        <About />
        <Team />
        <Gallery />
        <Products />
        <Pricing />
        <Reviews />
        <Contact />
        <Map />
      </div>
    </>
  );
}
