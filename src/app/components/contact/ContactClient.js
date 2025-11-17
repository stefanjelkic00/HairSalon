'use client';

import {
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactClient() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
  };

  const contactItems = [
    {
      icon: <FaPhone className="text-salon-purpledark w-6 h-6" />,
      label: 'Telefon',
      value: '+381 21 466074',
      href: 'tel:+38121466074',
    },
    {
      icon: <FaEnvelope className="text-salon-purpledark w-6 h-6" />,
      label: 'Email',
      value: 'info@salonlepotabucka.com',
      href: 'mailto:info@salonlepotabucka.com',
    },
  ];


  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      {/* Kontakt podaci */}
      <div className="w-full flex flex-col sm:flex-row gap-6 justify-center items-stretch">
        {contactItems.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 bg-white shadow-md rounded-lg hover:scale-[1.02] transition-all duration-300"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            {item.icon}
            <div className="text-left">
              <p className="text-sm text-salon-gray">{item.label}</p>
              <p className="text-base sm:text-lg font-medium text-salon-purpledark">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
