import { useState, useEffect } from 'react';
import gsap from 'gsap';

/**
 * Custom hook to handle Header scroll transitions using GSAP
 * Keeps 100% pure solid white background in both scrolled and unscrolled states
 */
export function useScrollHeader(headerRef, logoRef) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrolledPastThreshold = scrollY > 30;

      if (scrolledPastThreshold !== isScrolled) {
        setIsScrolled(scrolledPastThreshold);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    if (!headerRef.current) return;

    if (isScrolled) {
      // Scrolled state: slightly smaller height with pure solid white background & shadow
      gsap.to(headerRef.current, {
        height: '75px',
        background: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        boxShadow: '0 10px 30px rgba(0, 51, 149, 0.12)',
        duration: 0.35,
        ease: 'power2.out'
      });

      if (logoRef?.current) {
        gsap.to(logoRef.current, {
          scale: 0.94,
          duration: 0.35,
          ease: 'power2.out'
        });
      }
    } else {
      // Unscrolled top state: pure solid white background
      gsap.to(headerRef.current, {
        height: '85px',
        background: '#FFFFFF',
        borderBottom: '1px solid #F1F5F9',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        duration: 0.35,
        ease: 'power2.out'
      });

      if (logoRef?.current) {
        gsap.to(logoRef.current, {
          scale: 1,
          duration: 0.35,
          ease: 'power2.out'
        });
      }
    }
  }, [isScrolled, headerRef, logoRef]);

  return isScrolled;
}
