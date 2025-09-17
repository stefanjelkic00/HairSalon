import Image from 'next/image';

// Podaci za cenovnik
const pricingData = [
  {
    title: 'Šišanje i Feniranje',
    items: [
      { name: 'Žensko dečije (do 4 godine)', price: '700 RSD' },
      { name: 'Muško', price: '650 RSD' },
      { name: 'Žensko', price: '800/1000/1300/— RSD' },
      { name: 'Feniranje', price: '700/800/1000/1200 RSD' },
    ],
  },
  {
    title: 'Pramenovi',
    items: [
      { name: 'Pramenovi Kapa', price: '2500/3000/3800/— RSD' },
      { name: 'Pramenovi 1 Boja', price: '3200/4000/5000/6000 RSD' },
      { name: 'Pramenovi 2 Boje', price: '3600/4600/5600/7000 RSD' },
      { name: 'Pramenovi 3 Boje', price: '4000/5000/6200/7200 RSD' },
    ],
  },
  {
    title: 'Farbanje i Preliv',
    items: [
      { name: 'Farbanje Izrastka sa Feniranjem', price: '2500/2800/3000/3700 RSD' },
      { name: 'Doplata za izrazito dugu/gustu kosu', price: '1200 RSD' },
      { name: 'Usluga Farbanja', price: '700/—/900/— RSD' },
      { name: 'Preliv', price: '1400/2000/2400/— RSD' },
    ],
  },
  {
    title: 'Lokne, Pletenice i Tretmani',
    items: [
      { name: 'Lokne sa Kupom (bez pranja)', price: '—/1400/1800/2000 RSD' },
      { name: 'Pranje i Sušenje Kose - Žensko duga', price: '650 RSD' },
      { name: 'Pranje i Sušenje Kose - Muško', price: '250 RSD' },
      { name: 'Gužvanje', price: '750 RSD' },
      { name: 'Pletenice - Sitne/Krupne', price: '350/450/—/— RSD' },
      { name: 'Svečane Frizure (bez pranja)', price: '—/2000/2500/3000 RSD' },
      { name: 'Frizura za mladu', price: '—/3300/3800/— RSD' },
      { name: 'Rep', price: '2500 RSD' },
      { name: 'Lokne sa Peglom (bez pranja)', price: '—/1400/1500/2000 RSD' },
      { name: 'Talasi - Krepovanje', price: '2000 RSD' },
      { name: 'Talasi', price: '—/1000/1300/1700 RSD' },
      { name: 'Tretman 1', price: '1100 RSD' },
      { name: 'Tretman 2', price: '1400 RSD' },
      { name: 'Tretman (perut)', price: '1000 RSD' },
      { name: 'Ampula', price: '500 RSD' },
      { name: 'Pakovanje', price: '500 RSD' },
      { name: 'Preliv - Toniranje', price: '600 RSD' },
      { name: 'Peglanje (bez pranja)', price: '1000 RSD' },
      { name: 'Šiške', price: '200 RSD' },
      { name: 'Balajaž', price: '—/7500/9000/10000 RSD' },
      { name: 'Blajhanje (Skidanje Boje)', price: '2300/4500/6500/9000 RSD' },
      { name: 'Doplata za farbanje', price: '1200 RSD' },
    ],
  },
];

// Komponenta za jedan red
const PriceRow = ({ name, price, isHeader = false }) => (
  <div className={`flex items-center gap-1 ${isHeader ? 'mb-0.5 font-semibold' : 'mb-0.5'}`}>
    <span
      className={isHeader ? 'w-0' : 'flex-none max-w-[55%] xs:max-w-[60%] sm:max-w-[50%] md:max-w-[40%] text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-normal break-words'}
    >
      {name}
    </span>
    <span className={`flex-1 min-w-[5px] mx-0.5 xs:mx-1 sm:mx-2 md:mx-3 ${isHeader ? '' : 'border-b border-dotted border-white'}`}></span>
    <span className={`flex-none text-right text-[10px] xs:text-xs sm:text-sm md:text-base`}>
      {price}
    </span>
  </div>
);

// Komponenta za sekciju
const PricingSection = ({ title, items }) => (
  <div>
    <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 text-white great-vibes text-center">{title}</h3>
    <div className="text-left" role="list">
      <PriceRow isHeader price="Kratka/Srednja/Duga/Extra duga" />
      <ul className="space-y-1 sm:space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <PriceRow name={item.name} price={item.price} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Glavna komponenta
export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-br from-[#2c2c52] via-[#16213e] to-[#0f3460] min-h-screen flex flex-col items-center justify-start relative overflow-hidden scroll-mt-20"
      aria-labelledby="pricing-heading"
      lang="sr"
    >
      <h2
        id="pricing-heading"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8 sm:mb-12 md:mb-16 great-vibes"
      >
        Cenovnik
      </h2>

      {/* Pozadinska slika */}
      <Image
        src="/background-images/butterfly_1_white.svg"
        alt=""
        fill
        className="absolute inset-0 w-full h-full object-contain opacity-10 pointer-events-none select-none"
        loading="lazy"
        role="presentation"
      />

      {/* Dekorativni leptiri */}
      {[
        { position: 'top-50 left-50', opacity: 'opacity-50', rotate: '-rotate-[15deg]', margin: '-ml-5 sm:-ml-10 -mt-5 sm:-mt-10', size: { md: 140 } },
        { position: 'top-20 right-30', opacity: 'opacity-35', rotate: 'rotate-[25deg]', margin: '-mr-5 sm:-mr-10 -mt-4 sm:-mt-8', size: { md: 120 } },
        { position: 'bottom-10 left-10', opacity: 'opacity-20', rotate: 'rotate-[45deg]', margin: '-mb-5 sm:-mb-10 -ml-4 sm:-ml-8', size: { md: 160 } },
        { position: 'bottom-0 right-0', opacity: 'opacity-20', rotate: '-rotate-[30deg]', margin: '-mb-4 sm:-mb-8 -mr-4 sm:-mr-8', size: { md: 130 } },
      ].map((butterfly, index) => (
        <div key={index} className={`hidden md:block absolute ${butterfly.position} z-0`}>
          <Image
            src="/background-images/butterfly_1_white.svg"
            alt=""
            width={butterfly.size.md}
            height={butterfly.size.md}
            className={`${butterfly.opacity} ${butterfly.rotate} ${butterfly.margin}`}
            loading="lazy"
            role="presentation"
          />
        </div>
      ))}

      {/* Sadržaj cenovnika */}
      <div className="relative z-10 w-full max-w-[90%] sm:max-w-3xl md:max-w-4xl mx-auto text-white">
        <div className="space-y-6 sm:space-y-8">
          {pricingData.map((section, index) => (
            <PricingSection key={index} title={section.title} items={section.items} />
          ))}
        </div>
      </div>
    </section>
  );
}
