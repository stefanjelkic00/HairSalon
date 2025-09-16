// src/app/components/Instagram.js
export default function Instagram() {
  return (
    <section id="instagram" className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 md:pt-4 bg-salon-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-salon-purple text-center mb-8 animate-on-scroll">
        Pratite nas na Instagramu
      </h2>
      <div className="text-center">
        <a
          href="https://instagram.com/salon_lepote_bucka"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-salon-purple text-salon-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all hover:scale-105 hover:shadow-lg animate-on-scroll"
        >
          @salonlepotabucka
        </a>
      </div>
    </section>
  );
}