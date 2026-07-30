import { useEffect } from 'react';
import gsap from 'gsap';

/**
 * Custom hook for GSAP page load entrance timeline & hover animations
 */
export function useNavbarAnimations(logoRef, navListRef, buttonRef) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out', duration: 1.0 }
      });

      // 1. Logo entrance
      if (logoRef?.current) {
        tl.fromTo(
          logoRef.current,
          { opacity: 0, y: -30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9 }
        );
      }

      // 2. Navigation items stagger entrance
      if (navListRef?.current) {
        const items = navListRef.current.children;
        if (items.length > 0) {
          tl.fromTo(
            items,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, stagger: 0.08, duration: 0.8 },
            '-=0.6'
          );
        }
      }

      // 3. Right CTA button entrance
      if (buttonRef?.current) {
        tl.fromTo(
          buttonRef.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.8 },
          '-=0.6'
        );
      }
    });

    return () => ctx.revert();
  }, [logoRef, navListRef, buttonRef]);
}

/**
 * GSAP hover effect helper for navigation menu items
 */
export function animateNavItemHover(element, isEnter) {
  if (!element) return;

  if (isEnter) {
    gsap.to(element, {
      y: -3,
      scale: 1.02,
      textShadow: '0 0 12px rgba(139, 92, 246, 0.6)',
      duration: 0.25,
      ease: 'power2.out'
    });
  } else {
    gsap.to(element, {
      y: 0,
      scale: 1,
      textShadow: 'none',
      duration: 0.25,
      ease: 'power2.out'
    });
  }
}

/**
 * GSAP hover effect helper for Contact CTA button
 */
export function animateButtonHover(element, isEnter) {
  if (!element) return;

  if (isEnter) {
    gsap.to(element, {
      scale: 1.08,
      boxShadow: '0 10px 30px rgba(139, 92, 246, 0.65)',
      duration: 0.25,
      ease: 'power2.out'
    });
  } else {
    gsap.to(element, {
      scale: 1,
      boxShadow: '0 6px 20px rgba(108, 76, 241, 0.4)',
      duration: 0.25,
      ease: 'power2.out'
    });
  }
}
