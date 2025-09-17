  //  <section id="team" className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 pt-20 md:pt- text-center bg-gradient-to-b from-[#F7F2FF] to-white relative overflow-hidden">
'use client'
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
        .team-member-info {
          min-height: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
        }
        
        /* Butterfly hover effects */
        .butterfly-1:hover,
        .butterfly-2:hover {
          transform: rotate(12deg) !important;
          transition: transform 0.3s ease !important;
        }
        
        /* Custom clipPath for each screen size to maintain shape */
        @media (max-width: 900px) {
          .team-member-info {
            min-height: 75px !important;
          }
          .team-grid {
            gap: 1.5rem !important;
            max-width: 95% !important;
          }
          .team-frame {
            width: 180px !important;
            height: 224px !important;
          }
          .frame-outer {
            clip-path: path("M 0,57 Q 0,0 57,0 L 180,0 L 180,170 Q 180,224 127,224 L 0,224 L 0,57 Z") !important;
          }
          .frame-inner {
            clip-path: path("M 0,53 Q 0,0 53,0 L 172,0 L 172,163 Q 172,216 120,216 L 0,216 L 0,53 Z") !important;
          }
          .frame-border {
            border-width: 3.5px !important;
          }
        }
        
        @media (max-width: 850px) {
          .team-grid {
            gap: 1.3rem !important;
            max-width: 90% !important;
          }
          .team-frame {
            width: 162px !important;
            height: 201px !important;
          }
          .frame-outer {
            clip-path: path("M 0,51 Q 0,0 51,0 L 162,0 L 162,153 Q 162,201 114,201 L 0,201 L 0,51 Z") !important;
          }
          .frame-inner {
            clip-path: path("M 0,47 Q 0,0 47,0 L 154,0 L 154,146 Q 154,193 108,193 L 0,193 L 0,47 Z") !important;
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
          .team-member-info {
            width: 75% !important;
            margin-left: auto !important;
            margin-right: 1rem !important;
            align-items: center !important;
          }
          .frame-border {
            border-width: 3.4px !important;
          }
        }
        
        @media (max-width: 800px) {
          .team-grid {
            gap: 1.2rem !important;
            max-width: 85% !important;
          }
          .team-frame {
            width: 151px !important;
            height: 188px !important;
          }
          .frame-outer {
            clip-path: path("M 0,48 Q 0,0 48,0 L 151,0 L 151,143 Q 151,188 106,188 L 0,188 L 0,48 Z") !important;
          }
          .frame-inner {
            clip-path: path("M 0,44 Q 0,0 44,0 L 143,0 L 143,136 Q 143,180 100,180 L 0,180 L 0,44 Z") !important;
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
          .team-member-info {
            width: 70% !important;
            margin-left: auto !important;
            margin-right: 1.5rem !important;
            align-items: center !important;
          }
          .frame-border {
            border-width: 3.3px !important;
          }
        }
        
        @media (max-width: 768px) {
          .team-member-info {
            min-height: 70px !important;
          }
          .team-grid {
            gap: 1rem !important;
            max-width: 90% !important;
          }
          .team-frame {
            width: 140px !important;
            height: 174px !important;
          }
          .frame-outer {
            clip-path: path("M 0,44 Q 0,0 44,0 L 140,0 L 140,133 Q 140,174 99,174 L 0,174 L 0,44 Z") !important;
          }
          .frame-inner {
            clip-path: path("M 0,40 Q 0,0 40,0 L 132,0 L 132,126 Q 132,166 93,166 L 0,166 L 0,40 Z") !important;
          }
          .frame-border {
            border-width: 3.2px !important;
          }
        }
        
        @media (max-width: 640px) {
          .team-member-info {
            min-height: 65px !important;
          }
          .team-grid {
            gap: 1rem !important;
            max-width: 95% !important;
          }
          .team-frame {
            width: 130px !important;
            height: 161px !important;
          }
          .frame-outer {
            clip-path: path("M 0,41 Q 0,0 41,0 L 130,0 L 130,122 Q 130,161 91,161 L 0,161 L 0,41 Z") !important;
          }
          .frame-inner {
            clip-path: path("M 0,37 Q 0,0 37,0 L 122,0 L 122,115 Q 122,153 85,153 L 0,153 L 0,37 Z") !important;
          }
          .frame-border {
            border-width: 3px !important;
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
          .team-member-info {
            width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            align-items: center !important;
            min-height: 60px !important;
          }
          .team-frame {
            width: 108px !important;
            height: 134px !important;
          }
          .frame-outer {
            clip-path: path("M 0,34 Q 0,0 34,0 L 108,0 L 108,102 Q 108,134 76,134 L 0,134 L 0,34 Z") !important;
          }
          .frame-inner {
            clip-path: path("M 0,30 Q 0,0 30,0 L 100,0 L 100,95 Q 100,126 70,126 L 0,126 L 0,30 Z") !important;
          }
          .frame-border {
            border-width: 2.8px !important;
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
          .team-member-info {
            min-height: 55px !important;
          }
          .team-frame {
            width: 86px !important;
            height: 107px !important;
          }
          .frame-outer {
            clip-path: path("M 0,27 Q 0,0 27,0 L 86,0 L 86,81 Q 86,107 61,107 L 0,107 L 0,27 Z") !important;
          }
          .frame-inner {
            clip-path: path("M 0,23 Q 0,0 23,0 L 78,0 L 78,74 Q 78,99 55,99 L 0,99 L 0,23 Z") !important;
          }
          .frame-border {
            border-width: 2.8px !important;
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
          .team-member-info {
            min-height: 50px !important;
          }
          .team-frame {
            width: 76px !important;
            height: 94px !important;
          }
          .frame-outer {
            clip-path: path("M 0,24 Q 0,0 24,0 L 76,0 L 76,72 Q 76,94 54,94 L 0,94 L 0,24 Z") !important;
          }
          .frame-inner {
            clip-path: path("M 0,20 Q 0,0 20,0 L 68,0 L 68,65 Q 68,86 48,86 L 0,86 L 0,20 Z") !important;
          }
          .frame-border {
            border-width: 2.8px !important;
          }
        }
        
        @media (max-width: 300px) {
          .team-member-info {
            width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            min-height: 48px !important;
          }
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
            height: 80px !important;
          }
          .frame-outer {
            clip-path: path("M 0,20 Q 0,0 20,0 L 65,0 L 65,61 Q 65,80 46,80 L 0,80 L 0,20 Z") !important;
          }
          .frame-inner {
            clip-path: path("M 0,16 Q 0,0 16,0 L 57,0 L 57,54 Q 57,72 40,72 L 0,72 L 0,16 Z") !important;
          }
          .frame-border {
            border-width: 2.8px !important;
          }
          /* Override Tailwind classes */
          .team-member-info.w-full {
            width: 100% !important;
          }
          .team-member-info.sm\\:w-2\\/3 {
            width: 100% !important;
          }
          .team-member-info.sm\\:ml-16 {
            margin-left: 0 !important;
          }
          .team-member-info.sm\\:mr-24 {
            margin-right: 0 !important;
          }
          .team-member-info.ml-auto {
            margin-left: 0 !important;
          }
        }
        
        @media (min-width: 476px) and (max-width: 640px) {
          .team-member-info {
            min-height: 65px !important;
          }
        }
        
        @media (min-width: 641px) and (max-width: 768px) {
          .team-member-info {
            min-height: 70px !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 900px) {
          .team-member-info {
            min-height: 75px !important;
          }
        }
      `}</style>
      <section id="team" className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 md:pt-4 text-center bg-gradient-to-b from-[#F7F2FF] from-10% via-gray-100 via-25% via-gray-200 via-40% via-gray-100 via-55% to-white to-90% relative overflow-hidden">
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
            <span 
              className="absolute text-4xl sm:text-6xl text-salon-purple opacity-50"
              style={{ 
                top: '-1.5rem', 
                left: '0.5rem',
                fontSize: 'clamp(2rem, 4vw, 3.75rem)',
                lineHeight: '1'
              }}
            >
              &quot;
            </span>
            <p className="team-description text-xs sm:text-base text-salon-black font-normal leading-relaxed px-4 sm:px-8">
              Naš stručni tim frizera spaja kreativnost sa iskustvom kako bismo ostvarili vašu viziju. Sa pažnjom i posvećenošću, radimo na tome da se osećate lepo i samouvereno nakon svakog tretmana.
            </p>
            <span 
              className="absolute text-4xl sm:text-6xl text-salon-purple opacity-50"
              style={{ 
                bottom: '-1.5rem', 
                right: '0.5rem',
                fontSize: 'clamp(2rem, 4vw, 3.75rem)',
                lineHeight: '1'
              }}
            >
               &quot;
            </span>
          </div>

          {/* Grid sa slikama - novi okviri */}
          <div className="team-grid grid grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto mt-8 sm:mt-12">
            {/* Dragana Opsenica */}
            <div className={`relative transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="relative">
                <div className="team-frame w-[216px] h-[268px] relative">
                  <div className="frame-outer absolute inset-0" style={{ clipPath: 'path("M 0,68 Q 0,0 68,0 L 216,0 L 216,204 Q 216,268 152,268 L 0,268 L 0,68 Z")' }}>
                    <div className="w-full h-full border-[2px] border-[#09001e] frame-border"></div>
                  </div>
                  <div className="frame-inner absolute inset-[4px]" style={{ clipPath: 'path("M 0,65 Q 0,0 65,0 L 209,0 L 209,197 Q 209,261 145,261 L 0,261 L 0,65 Z")' }}>
                    <Image
                      src="/workers/ATP1.png"
                      alt="Dragana Opsenica"
                      width={209}
                      height={261}
                      className="w-[209px] h-auto object-contain shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
              <div className="team-member-info bg-[#09001e] text-white px-2 py-2 sm:px-4 sm:py-3 -mt-2 text-right w-full sm:w-2/3 ml-auto sm:ml-16 sm:mr-24 md:w-auto" style={{ borderRadius: '0 16px 0 16px' }}>
                <h3 className="team-member-name font-medium text-xs sm:text-sm md:text-base mb-1">Dragana Opsenica</h3>
                <p className="team-member-title font-normal text-[10px] sm:text-xs md:text-sm opacity-80">Osnivačica salona</p>
              </div>
            </div>

            {/* Milica Jovanović */}
            <div className={`relative transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="relative">
                <div className="team-frame w-[216px] h-[268px] relative">
                  <div className="frame-outer absolute inset-0" style={{ clipPath: 'path("M 0,68 Q 0,0 68,0 L 216,0 L 216,204 Q 216,268 152,268 L 0,268 L 0,68 Z")' }}>
                    <div className="w-full h-full border-[2px] border-[#09001e] frame-border"></div>
                  </div>
                  <div className="frame-inner absolute inset-[4px]" style={{ clipPath: 'path("M 0,65 Q 0,0 65,0 L 209,0 L 209,197 Q 209,261 145,261 L 0,261 L 0,65 Z")' }}>
                    <Image
                      src="/workers/ATP2.png"
                      alt="Milica Jovanović"
                      width={209}
                      height={261}
                      className="w-[209px] h-auto object-contain shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
              <div className="team-member-info bg-[#09001e] text-white px-2 py-2 sm:px-4 sm:py-3 -mt-2 text-right w-full sm:w-2/3 ml-auto sm:ml-16 sm:mr-24 md:w-auto" style={{ borderRadius: '0 16px 0 16px' }}>
                <h3 className="team-member-name font-medium text-xs sm:text-sm md:text-base mb-1">Milica Jovanović</h3>
                <p className="team-member-title font-normal text-[10px] sm:text-xs md:text-sm opacity-80">Frizerski specijalista</p>
              </div>
            </div>

            {/* Slavica Bavaričić */}
            <div className={`relative transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '800ms' }}>
              <div className="relative">
                <div className="team-frame w-[216px] h-[268px] relative">
                  <div className="frame-outer absolute inset-0" style={{ clipPath: 'path("M 0,68 Q 0,0 68,0 L 216,0 L 216,204 Q 216,268 152,268 L 0,268 L 0,68 Z")' }}>
                    <div className="w-full h-full border-[2px] border-[#09001e] frame-border"></div>
                  </div>
                  <div className="frame-inner absolute inset-[4px]" style={{ clipPath: 'path("M 0,65 Q 0,0 65,0 L 209,0 L 209,197 Q 209,261 145,261 L 0,261 L 0,65 Z")' }}>
                    <Image
                      src="/workers/ATP3.png"
                      alt="Slavica Bavaričić"
                      width={209}
                      height={261}
                      className="w-[209px] h-auto object-contain shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
              <div className="team-member-info bg-[#09001e] text-white px-2 py-2 sm:px-4 sm:py-3 -mt-2 text-right w-full sm:w-2/3 ml-auto sm:ml-16 sm:mr-24 md:w-auto" style={{ borderRadius: '0 16px 0 16px' }}>
                <h3 className="team-member-name font-medium text-xs sm:text-sm md:text-base mb-1">Slavica Bavaričić</h3>
                <p className="team-member-title font-normal text-[10px] sm:text-xs md:text-sm opacity-80">Frizerski specijalista</p>
              </div>
            </div>
          </div>
          
          {/* Divider linija */}
          <div className="relative mt-16 sm:mt-32 mb-8 flex justify-center w-full">
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
              } hover:rotate-12 butterfly-1`}
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
              } hover:rotate-12 butterfly-2`}
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