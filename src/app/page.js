import Hero from './components/Hero';
import About from './components/about/About';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Contact from './components/contact/Contact';
import Map from './components/Map';
import ScrollAnimator from './components/client/ScrollAnimator'; // Nova klijentska komponentad


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
