'use client';

import { useEffect } from 'react';

export default function ScrollAnimator() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.animateDelay || 0);
            setTimeout(() => {
              entry.target.classList.add('visible');
              entry.target.style.willChange = 'auto';
              if (!entry.target.id) {
                observer.unobserve(entry.target);
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    elements.forEach((element) => {
      if (element) {
        element.style.willChange = 'opacity, transform';
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return null;
}
