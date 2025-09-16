'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const arrowRef = useRef(null);
  const timeoutRef = useRef(null);
  const navbarRef = useRef(null); // koristi se za scroll offset

  useEffect(() => {
    const sidebarEl = sidebarRef.current;
    const arrowEl = arrowRef.current;

    if (!sidebarEl || !arrowEl) return;

    const handleMouseEnter = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      arrowEl.style.opacity = '0';
      arrowEl.style.animation = 'none';
    };

    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        arrowEl.style.opacity = '0.7';
        arrowEl.style.animation = 'pulse 1.5s ease-in-out infinite';
      }, 1000);
    };

    sidebarEl.addEventListener('mouseenter', handleMouseEnter);
    sidebarEl.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      sidebarEl.removeEventListener('mouseenter', handleMouseEnter);
      sidebarEl.removeEventListener('mouseleave', handleMouseLeave);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const navLinks = [
    { href: '#about', label: 'O nama' },
    { href: '#team', label: 'Tim' },
    { href: '#gallery', label: 'Galerija' },
    { href: '#pricing', label: 'Cenovnik' },
    { href: '#reviews', label: 'Recenzije' },
    { href: '#contact', label: 'Kontakt' },
    { href: '#map', label: 'Mapa' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav
        ref={sidebarRef}
        className="hidden md:flex fixed top-0 left-0 h-full w-16 bg-salon-purpledark z-[1000] flex-col items-center py-6 transition-all duration-300 ease-in-out hover:w-64 hover:bg-white group shadow-lg sidebar"
        aria-label="Glavna navigacija"
      >
        <div className="mb-8 relative">
          <Link href="#hero" aria-label="Povratak na početak">
            <Image
              src="/logo/logo192x192white.png"
              alt="Salon Lepote Bucka logo"
              width={40}
              height={40}
              className="group-hover:hidden"
              loading="lazy"
            />
            <Image
              src="/logo/logo192x192.png"
              alt="Salon Lepote Bucka logo"
              width={40}
              height={40}
              className="hidden group-hover:block"
              loading="lazy"
            />
          </Link>
          <span
            ref={arrowRef}
            className="absolute -right-9 top-1/2 transform -translate-y-1/2 text-black text-lg font-bold arrow"
            aria-hidden="true"
            style={{ opacity: 0 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>

        <ul className="flex flex-col space-y-4 text-white group-hover:text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {navLinks.map((link) => (
            <li key={link.href} className="px-4">
              <Link
                href={link.href}
                className="text-white group-hover:text-black hover:text-gray-300 group-hover:hover:text-gray-600 text-lg"
                aria-label={`Link ka sekciji ${link.label}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger */}
      <div
        ref={navbarRef}
        className="md:hidden fixed top-0 left-0 w-full bg-black z-[1000] flex items-center justify-between px-4 py-3"
      >
        <Link href="#hero" aria-label="Početna stranica">
          <Image
            src="/logo/logo192x192white.png"
            alt="Salon Lepote Bucka logo"
            width={40}
            height={40}
            loading="lazy"
          />
        </Link>
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label={isOpen ? 'Zatvori meni' : 'Otvori meni'}
          aria-expanded={isOpen}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black z-[900] flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Screen reader obaveštenje */}
        <div aria-live="polite" className="sr-only">
          {isOpen ? 'Navigacija otvorena' : 'Navigacija zatvorena'}
        </div>

        <ul className="flex flex-col space-y-8 text-white text-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white hover:text-gray-300 text-2xl cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  const id = link.href.replace('#', '');
                  const element = document.getElementById(id);
                  const navbarEl = navbarRef.current;
                  if (element) {
                    const yOffset = navbarEl?.offsetHeight || 0;
                    const y =
                      element.getBoundingClientRect().top +
                      window.pageYOffset -
                      yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                  toggleMenu();
                }}
                aria-label={`Idi na sekciju ${link.label}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
