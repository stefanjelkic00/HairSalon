import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/about/About';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Contact from './components/contact/Contact';
import Map from './components/Map';
import Footer from './components/footer/Footer';
import ScrollAnimator from './components/client/ScrollAnimator'; // Nova klijentska komponenta


export const metadata = {
  title: 'Salon Lepote Bucka | Vaša Kosa Zaslužuje Najbolje',
  description: 'Salon Lepote Bucka nudi profesionalnu negu kose i kože. Posetite nas i otkrijte sve naše usluge!',
  robots: 'index, follow',
  openGraph: {
    title: 'Salon Lepote Bucka',
    description: 'Salon Lepote Bucka nudi vrhunske usluge friziranja, šišanja i ulepšavanja u Novom Sadu.',
    images: ['/logo/logo192x192white.png'],
    url: 'https://bucka.com',
    type: 'website',
  },
};


export default function Home() {
  return (
    <main className="flex min-h-screen bg-salon-white flex-col" lang="sr">
      <ScrollAnimator />
      <Navbar />
      <div className="flex-1 md:ml-16">
        <Hero />
        <About />
        <Team />
        <Gallery />
        <Products />
        <Pricing />
        <Reviews />
        <Contact />
        <Map />
        <Footer />
      </div>
    </main>
  );
}
