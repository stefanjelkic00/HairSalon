'use client';

import { motion } from 'framer-motion';
import { MapPinIcon } from 'lucide-react';

export default function Map() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <section
      id="map"
      className="py-12 sm:py-16 px-4 sm:px-6 md:px-16 md:pt-4 text-center bg-gradient-to-b from-[#F7F2FF] to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] overflow-hidden"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.553464722144!2d19.828755176091743!3d45.23659977107113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1018db613a4f%3A0xd4f4153f5e87dcb5!2sBucka!5e0!3m2!1ssr!2srs!4v1756222044383!5m2!1ssr!2srs"
            width="100%"
            className="w-full h-[250px] sm:h-[400px] md:h-[500px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Salon Lepote Bucka Location"
            aria-label="Google Maps location of Salon Lepote Bucka"
          />
        </motion.div>

        <motion.div
          className="mt-6"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <a
            href="https://maps.google.com/?q=1300+Kaplara+12,+Novi+Sad"
            target="_blank"
            rel="noopener noreferrer"
            className="group button-bordered inline-flex items-center justify-center bg-[#09001e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all"
            aria-label="Otvorite lokaciju u Google Mapama"
          >
            <span className="inline-flex items-center justify-center">
              <MapPinIcon
                className="w-0 h-5 opacity-0 group-hover:w-5 group-hover:opacity-100 mr-2 transition-all duration-500"
                aria-hidden="true"
              />
              <span>Otvori u Google Mapama</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
