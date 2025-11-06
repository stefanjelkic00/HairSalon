'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style jsx>{`
        /* Stilovi za imena i titule */
        .team-member-name {
          font-weight: 500;
          color: #09001e;
          margin-top: 8px;
          text-align: center;
        }
        .team-member-title {
          font-weight: 400;
          color: #09001e;
          opacity: 0.8;
          text-align: center;
        }
        
        /* Stilovi za slike */
        .team-image {
          border-radius: 50% !important;
          object-fit: cover;
          object-position: center center;
          width: 100% !important;
          height: 100% !important;
        }
        
        /* Na mobilnim - prikaži celu sliku bez sečenja */
        @media (max-width: 768px) {
          .team-image {
            object-fit: contain !important;
          }
        }
        
        /* Stilovi za okvir slika */
        .team-frame {
          border-radius: 50% !important; /* Osigurava kružni oblik okvira */
          overflow: hidden; /* Sprečava prelivanje slike izvan okvira i fiksira je unutra */
        }
        
        /* Responsive adjustments */
        @media (max-width: 900px) {
          .team-grid {
            gap: 1.5rem !important;
            max-width: 95% !important;
          }
          .team-frame {
            width: 180px !important;
            height: 180px !important;
          }
          .team-member-name {
            font-size: 13px !important;
            line-height: 1.2 !important;
            white-space: nowrap !important;
          }
          .team-member-title {
            font-size: 11px !important;
            line-height: 1.2 !important;
            white-space: nowrap !important;
          }
        }
        
        @media (max-width: 850px) {
          .team-grid {
            gap: 1.3rem !important;
            max-width: 90% !important;
          }
          .team-frame {
            width: 162px !important;
            height: 162px !important;
          }
        }
        
        @media (max-width: 800px) {
          .team-grid {
            gap: 1.2rem !important;
            max-width: 85% !important;
          }
          .team-frame {
            width: 151px !important;
            height: 151px !important;
          }
          .team-member-name {
            font-size: 12px !important;
            line-height: 1.2 !important;
            white-space: nowrap !important;
          }
          .team-member-title {
            font-size: 10px !important;
            line-height: 1.2 !important;
            white-space: nowrap !important;
          }
        }
        
        @media (max-width: 768px) {
          .team-grid {
            gap: 1rem !important;
            max-width: 90% !important;
          }
          .team-frame {
            width: 140px !important;
            height: 140px !important;
          }
        }
        
        @media (max-width: 640px) {
          .team-grid {
            gap: 1rem !important;
            max-width: 95% !important;
          }
          .team-frame {
            width: 130px !important;
            height: 130px !important;
          }
        }
        
        @media (max-width: 475px) {
          .team-member-name {
            font-size: 10px !important;
            line-height: 1.2 !important;
            white-space: normal !important;
            text-align: center !important;
          }
          .team-member-title {
            font-size: 8px !important;
            line-height: 1.2 !important;
            white-space: normal !important;
            text-align: center !important;
          }
          .team-frame {
            width: 108px !important;
            height: 108px !important;
          }
        }
        
        @media (max-width: 400px) {
          .team-member-name {
            font-size: 9px !important;
            line-height: 1.1 !important;
          }
          .team-member-title {
            font-size: 7px !important;
            line-height: 1.1 !important;
          }
          .team-description {
            font-size: 9px !important;
          }
          .team-title {
            font-size: 3rem !important;
          }
          .team-frame {
            width: 86px !important;
            height: 86px !important;
          }
        }
        
        @media (max-width: 320px) {
          .team-member-name {
            font-size: 8px !important;
            line-height: 1.1 !important;
          }
          .team-member-title {
            font-size: 6px !important;
            line-height: 1.1 !important;
          }
          .team-description {
            font-size: 8px !important;
          }
          .team-title {
            font-size: 2.5rem !important;
          }
          .team-frame {
            width: 76px !important;
            height: 76px !important;
          }
        }
        
        @media (max-width: 300px) {
          .team-member-name {
            font-size: 7px !important;
            line-height: 1 !important;
          }
          .team-member-title {
            font-size: 5px !important;
            line-height: 1 !important;
          }
          .team-frame {
            width: 65px !important;
            height: 65px !important;
          }
        }
          
      `}</style>
      <section id="team" className="pt-12 sm:pt-16 pb-0 px-2 sm:px-4 md:px-16 text-center bg-gradient-to-b from-[#F7F2FF] from-10% via-gray-100 via-25% via-gray-200 via-40% via-gray-100 via-55% to-white to-90% relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Naslov sa animacijom */}
          <h2 className={`team-title text-5xl sm:text-7xl md:text-8xl text-salon-black mb-6 sm:mb-8 great-vibes transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            Naš tim
          </h2>
          
          {/* Opis sa animacijom i navodnicima */}
          <div className={`relative max-w-3xl mx-auto mb-8 sm:mb-10 transition-all duration-1200 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
           
            <p className="team-description text-xs sm:text-base text-salon-black font-normal leading-relaxed px-4 sm:px-8">
              Naš stručni tim frizera spaja kreativnost sa iskustvom kako bismo ostvarili vašu viziju. Sa pažnjom i posvećenošću, radimo na tome da se osećate lepo i samouvereno nakon svakog tretmana.
            </p>
          </div>

          {/* Grid sa slikama */}
          <div className="team-grid grid grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto mt-8 sm:mt-12">
            {/* Dragana Opsenica */}
            <div className={`relative transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="team-frame w-[216px] h-[216px] relative mx-auto flex items-center justify-center">
                <Image
                  src="/workers/slika01.png"
                  alt="Dragana Opsenica"
                  width={216}
                  height={216}
                  className="team-image shadow-lg"
                />
              </div>
              <h3 className="team-member-name font-medium text-xs sm:text-sm md:text-base mb-1">Dragana Opsenica</h3>
              <p className="team-member-title font-normal text-[10px] sm:text-xs md:text-sm opacity-80">Osnivačica salona</p>
            </div>

            {/* Milica Jovanović */}
            <div className={`relative transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="team-frame w-[216px] h-[216px] relative mx-auto flex items-center justify-center">
                <Image
                  src="/workers/slika02.png"
                  alt="Milica Jovanović"
                  width={216}
                  height={216}
                  className="team-image shadow-lg"
                />
              </div>
              <h3 className="team-member-name font-medium text-xs sm:text-sm md:text-base mb-1">Milica Jovanović</h3>
              <p className="team-member-title font-normal text-[10px] sm:text-xs md:text-sm opacity-80">Frizerski specijalista</p>
            </div>

            {/* Slavica Bavaričić */}
            <div className={`relative transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '800ms' }}>
              <div className="team-frame w-[216px] h-[216px] relative mx-auto flex items-center justify-center">
                <Image
                  src="/workers/slika03.png"
                  alt="Slavica Bavaričić"
                  width={216}
                  height={216}
                  className="team-image shadow-lg"
                />
              </div>
              <h3 className="team-member-name font-medium text-xs sm:text-sm md:text-base mb-1">Slavica Bavaričić</h3>
              <p className="team-member-title font-normal text-[10px] sm:text-xs md:text-sm opacity-80">Frizerski specijalista</p>
            </div>
          </div>
          
          {/* Divider linija - bez donjeg razmaka */}
          <div className="relative mt-8 sm:mt-12 flex justify-center w-full">
            <div
              className="absolute bottom-0 w-[80%] sm:w-[80%] h-px mx-auto"
              style={{
                background: 'linear-gradient(to right, transparent, #D1D5DB 30%, #D1D5DB 70%, transparent)',
              }}
            />
          </div>

          {/* Leptir dekoracija sa optimizovanim responsive pozicioniranjem */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-10">
            <Image
              src="/background-images/butterfly_2.svg"
              alt="Dekoracija leptir"
              width={300}
              height={300}
              className={`absolute transition-all duration-2000 ease-out delay-500 ${
                isVisible ? 'opacity-40 translate-x-0 rotate-0' : 'opacity-0 translate-x-20 rotate-45'
              } butterfly-1`}
              style={{
                top: 'clamp(0px, 2%, 40px)',
                right: 'clamp(5px, 3%, 50px)',
                width: 'clamp(50px, 12vw, 200px)',
                height: 'auto'
              }}
              aria-hidden="true"
            />
            <Image
              src="/background-images/butterfly_1.svg"
              alt="Dekoracija leptir"
              width={200}
              height={200}
              className={`absolute transition-all duration-2000 ease-out delay-700 ${
                isVisible ? 'opacity-40 translate-x-0 rotate-0' : 'opacity-0 translate-x-20 rotate-45'
              } butterfly-2`}
              style={{
                top: 'clamp(200px, 65%, 400px)',
                right: 'clamp(2px, 1%, 20px)',
                width: 'clamp(35px, 9vw, 160px)',
                height: 'auto'
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
    </>
  );
}