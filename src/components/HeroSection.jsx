import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  ArrowRight,
  Award,
  Briefcase,
  Headphones
} from 'lucide-react';
import './HeroSection.scss';

export default function HeroSection({ onOpenContact, onExploreServices }) {
  const heroRef = useRef(null);
  const leftRef = useRef(null);

  // Counter States
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out', duration: 1.0 }
      });

      // 1. Left side entrance
      if (leftRef.current) {
        tl.fromTo(
          leftRef.current,
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 1.1 }
        );
      }

      // Counter animation
      const obj = { v1: 0, v2: 0 };
      gsap.to(obj, {
        v1: 10,
        v2: 500,
        duration: 2.0,
        ease: 'power2.out',
        onUpdate: () => {
          setVal1(Math.floor(obj.v1));
          setVal2(Math.floor(obj.v2));
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Award, num: `${val1}+`, label: 'Years of Experience' },
    { icon: Briefcase, num: `${val2}+`, label: 'Projects Delivered' },
    { icon: Headphones, num: '24/7', label: 'Support & Monitoring' },
  ];

  return (
    <section ref={heroRef} className="hero-exact-banner">
      {/* Background Twilight Skyline */}
      <div className="hero-skyline-bg"></div>

      <div className="container">
        <div className="row align-items-center">
          {/* Left Column Content matching reference image */}
          <div ref={leftRef} className="col-lg-7 col-xl-6 hero-left-content">
            <h1 className="hero-main-title">
              Innovative Technology. <br />

              <span className="gradient-text-pink">Exceptional Business Results.</span>
            </h1>

            <p className="hero-sub-text">
              Legacy Infotech delivers end-to-end IT and business solutions that empower organizations to innovate, integrate and grow. Driving digital transformation with creativity and technology.
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons-row">
              <button className="btn-gradient-purple" onClick={onOpenContact}>
                <span>Get Started</span>
                <ArrowRight size={18} />
              </button>

              <button className="btn-outline-glass" onClick={onExploreServices}>
                <span>Explore Services</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* 3 Stats Badges matching screenshot */}
            <div className="hero-stats-row">
              {stats.map((st, idx) => {
                const IconComp = st.icon;
                return (
                  <div key={idx} className="stat-badge-item">
                    <div className="stat-icon-wrapper">
                      <IconComp size={22} />
                    </div>
                    <div>
                      <div className="stat-num-val">{st.num}</div>
                      <div className="stat-txt-lbl">{st.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
