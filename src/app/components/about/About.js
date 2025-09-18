// app/components/About.js

import AboutClient from './AboutClient';

export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 px-4 sm:px-6 md:px-16 text-center bg-gradient-to-b from-[#f9fafc] to-[#F7F2FF]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-5xl sm:text-7xl md:text-8xl text-salon-black mb-8 great-vibes animate-on-scroll"
          data-animate-type="heading"
        >
          O nama
        </h2>

        {/* Quote Section */}
        <div
          className="relative max-w-3xl mx-auto mb-12 animate-on-scroll"
          data-animate-type="quote"
          data-animate-delay="200"
        >
          <span className="absolute top-[-1.5rem] left-2 sm:left-0 text-4xl sm:text-6xl text-salon-purple opacity-50 quote-open">
            “
          </span>
          <p className="text-sm sm:text-base text-salon-black font-normal px-6 sm:px-8">
            Sa višedecenijskim iskustvom, naš tim posvećeno radi na tome da postigne najbolje rezultate i istakne prirodnu lepotu vaše kose. Koristimo savremene tretmane i najkvalitetnije proizvode kako bismo vam pružili negu koju zaslužujete. Zadovoljstvo i osmesi naših klijenata naša su najveća motivacija.
          </p>
          <span className="absolute bottom-[-1.5rem] right-2 sm:right-0 text-4xl sm:text-6xl text-salon-purple opacity-50 quote-close">
            ”
          </span>
        </div>

        {/* Ovde ubacujemo client komponentu sa animacijama */}
        <AboutClient />
      </div>
    </section>
  );
}
