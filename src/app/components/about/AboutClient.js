'use client';

import Link from 'next/link';
import { FaCalendarCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function AboutClient() {
  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <>
      {/* Ovo je samo animirani deo, koji može biti isti kao u About.js */}
      <div
        className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 max-w-5xl mx-auto mb-12 animate-on-scroll"
        data-animate-delay="400"
      >
        <motion.div
          className="flex-1 text-center"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={statVariants}
        >
          <h3 className="text-4xl sm:text-5xl text-salon-black">10+</h3>
          <p className="text-sm sm:text-base text-salon-black font-light">Godina iskustva</p>
        </motion.div>
        <motion.div
          className="flex-1 text-center"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={statVariants}
        >
          <h3 className="text-4xl sm:text-5xl text-salon-black">3</h3>
          <p className="text-sm sm:text-base text-salon-black font-light">Stručna zaposlena</p>
        </motion.div>
        <motion.div
          className="flex-1 text-center"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={statVariants}
        >
          <h3 className="text-4xl sm:text-5xl text-salon-gray">1000+</h3>
          <p className="text-sm sm:text-base text-salon-black font-light">Zadovoljnih klijenata</p>
        </motion.div>
      </div>

      {/* Dugme */}
      <div className="mt-8 animate-on-scroll" data-animate-delay="600">
<Link
  href="/#contact"
  className="group button-bordered inline-flex items-center justify-center bg-[#09001e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all"
>
  <span className="inline-flex items-center justify-center">
    <FaCalendarCheck
      className="w-0 h-5 opacity-0 group-hover:w-5 group-hover:opacity-100 mr-2 transition-all duration-450"
      aria-hidden="true"
    />
    <span>Zakaži Termin</span>
  </span>
</Link>
      </div>
    </>
  );
}
