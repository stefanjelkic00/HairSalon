'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Gallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.gallery-item');
            items.forEach((item, index) => {
              item.classList.add('animate-in');
              item.style.animationDelay = `${index * 0.15}s`;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px',
      }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  return (
    <section id="gallery" className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 bg-salon-white overflow-hidden" ref={galleryRef}>
      <div className="gallery-wrapper">
        {/* Prvi red */}
        <div className="gallery-row first-row">
          <div className="gallery-item" style={{ '--item-basis': '41.35%' }}>
            <Image
              src="/haircuts/haircut161.jpg"
              alt="Frizura 121"
              layout="responsive"
              width={595}
              height={152}
              className="block"
            />
          </div>
          <div className="gallery-item" style={{ '--item-basis': '41.05%' }}>
            <Image
              src="/haircuts/haircut04.jpg"
              alt="Frizura 4"
              layout="responsive"
              width={591}
              height={144}
              className="block"
            />
          </div>
        </div>

        {/* Drugi red */}
        <div className="gallery-row middle-row">
          <div className="gallery-item" style={{ '--item-basis': '33.63%' }}>
            <Image
              src="/haircuts/haircut07.jpg"
              alt="Frizura 7"
              layout="responsive"
              width={492}
              height={186}
              className="block"
            />
          </div>
          <div className="gallery-item" style={{ '--item-basis': '24.08%' }}>
            <Image
              src="/haircuts/haircut131.jpg"
              alt="Frizura 131"
              layout="responsive"
              width={353}
              height={186}
              className="block"
            />
          </div>
          <div className="gallery-item" style={{ '--item-basis': '24.03%' }}>
            <Image
              src="/haircuts/haircut05.jpg"
              alt="Frizura 5"
              layout="responsive"
              width={353}
              height={187}
              className="block"
            />
          </div>
        </div>

        {/* Treći red */}
        <div className="gallery-row last-row">
          <div className="gallery-item" style={{ '--item-basis': '43.26%' }}>
            <Image
              src="/haircuts/haircut02.jpg"
              alt="Frizura 2"
              layout="responsive"
              width={752}
              height={263}
              className="block"
            />
          </div>
          <div className="gallery-item" style={{ '--item-basis': '38.71%' }}>
            <Image
              src="/haircuts/haircut08.jpg"
              alt="Frizura 8"
              layout="responsive"
              width={560}
              height={219}
              className="block"
            />
          </div>
        </div>
      </div>

      {/* CSS za responsivnost, animaciju i blur efekte */}
      <style jsx>{`
        .gallery-wrapper {
          width: 100%;
          max-width: 1281px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        .gallery-row {
          display: flex;
          gap: 5px; /* Identican razmak između slika za sve redove */
          flex-wrap: nowrap;
          justify-content: center; /* Centriranje sadržaja na desktopu */
        }
        
        /* Specifičan gap za prvi red na desktop verziji */
        @media (min-width: 1281px) {
          .first-row {
            gap: 2px !important; /* Manji razmak za prvi red da vizuelno izgleda usklađeno */
          }
        }
        
        .gallery-row + .gallery-row {
          margin-top: 5px; /* Razmak između redova na desktopu */
        }

        .gallery-item {
          flex: 0 0 auto;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          position: relative;
          flex-basis: var(--item-basis);
          max-width: 100%;
        }
        .gallery-item.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Osiguravanje da slike zadrže proporcije */
        .gallery-item img {
          object-fit: contain;
          width: 100%;
          height: auto;
          max-width: 100%;
        }

        /* Postepeni blur efekti - samo za prvi i poslednji red */
        .first-row .gallery-item::before,
        .last-row .gallery-item::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          height: 30%; /* Povećana visina za bolji prelaz */
          pointer-events: none;
          z-index: 1; /* Osigurava da blur efekt bude iznad slike */
        }

        .first-row .gallery-item::before {
          top: 0;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
          filter: blur(4px); /* Blaže zamagljenje */
          -webkit-filter: blur(4px);
        }

        .last-row .gallery-item::after {
          bottom: 0;
          background: linear-gradient(to top, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
          filter: blur(4px); /* Blaže zamagljenje */
          -webkit-filter: blur(4px);
        }

        /* Responsivnost za tablete (1280px do 481px) */
        @media (max-width: 1280px) and (min-width: 481px) {
          .gallery-wrapper {
            max-width: calc(1281px * 1.15);
            width: 100%;
            box-sizing: border-box;
          }
          .gallery-row {
            gap: calc(5px * 1.15);
            transform: none;
            justify-content: center;
            flex-wrap: nowrap;
          }
          .gallery-row + .gallery-row {
            margin-top: calc(5px * 1.15);
          }
          .gallery-item {
            flex-basis: calc(var(--item-basis) * 1.15) !important;
            max-width: 100%;
          }
          .first-row .gallery-item::before,
          .last-row .gallery-item::after {
            height: 35%;
            filter: blur(3px); /* Blaže zamagljenje */
            -webkit-filter: blur(3px);
          }
        }

        /* Mobilna verzija (480px i manje) */
        @media (max-width: 480px) {
          .gallery-wrapper {
            max-width: calc(1281px * 1.15);
            width: 100%;
            box-sizing: border-box;
          }
          .gallery-row {
            gap: calc(5px * 1.15);
            transform: none;
            justify-content: center;
            flex-wrap: nowrap;
          }
          .gallery-row + .gallery-row {
            margin-top: calc(5px * 1.15);
          }
          .gallery-item {
            flex-basis: calc(var(--item-basis) * 1.15) !important;
            max-width: 100%;
          }
          /* Specifično za srednji red */
          .middle-row .gallery-item {
            flex-basis: calc(var(--item-basis) * 1.13) !important; /* Blago smanjenje */
          }
          .middle-row .gallery-item img {
            width: calc(100% * 0.97); /* Smanjenje širine */
            height: auto;
          }
          .first-row .gallery-item::before,
          .last-row .gallery-item::after {
            height: 40%;
            filter: blur(2px); /* Najblaže zamagljenje */
            -webkit-filter: blur(2px);
          }
        }
      `}</style>
    </section>
  );
}