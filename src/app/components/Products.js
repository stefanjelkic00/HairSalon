// src/app/components/Products.js
'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
        <section
      id="pricing">
      {/* Crna traka sa logovima */}
      <div className={`bg-black py-2 w-full  transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
         <div className="flex justify-around items-center gap-2 xs:gap-4 sm:gap-8 md:gap-12 lg:gap-16">
            <div className="w-24 h-16 md:w-32 md:h-20">
              <Image
                src="/products/ProductB1.jpg"
                alt="Brand logo 1"
                width={128}
                height={80}
                className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            
            <div className="w-24 h-14 md:w-56 md:h-29 mt-5">
              <Image
                src="/products/ProductB2.png"
                alt="Brand logo 2"
                width={144}
                height={72}
                className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            
            <div className="w-14 h-9 md:w-20 md:h-14">
              <Image
                src="/products/ProductB3.jpg"
                alt="Brand logo 3"
                width={80}
                height={56}
                className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}