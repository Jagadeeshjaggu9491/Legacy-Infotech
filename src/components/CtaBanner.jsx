import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CtaBanner({ onOpenContact }) {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = sectionRef.current;
      if (el) {
        gsap.fromTo(
          el.children[0],
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '5rem 0',
        background: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            background: 'linear-gradient(135deg, #003B95 0%, #0052CC 50%, #0099FF 100%)',
            borderRadius: '28px',
            padding: '4rem 3rem',
            color: '#FFFFFF',
            boxShadow: '0 25px 60px rgba(0, 82, 204, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2.5rem',
            flexWrap: 'wrap'
          }}
        >
          {/* Left Text Block */}
          <div style={{ flex: '1 1 500px', maxWidth: '680px' }}>
            <span
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: '0.82rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#93C5FD',
                marginBottom: '0.6rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <Sparkles size={16} color="#93C5FD" /> START YOUR TRANSFORMATION
            </span>

            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: 'clamp(2rem, 3.5vw, 2.7rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.2,
                marginBottom: '0.8rem'
              }}
            >
              Ready to Scale Your Business with Next-Gen Technology?
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#E0F2FE', lineHeight: 1.6, margin: 0 }}>
              Partner with Legacy Infotech to architect resilient software, automate complex operations, and achieve long-term digital growth.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              flexWrap: 'wrap',
              justifyContent: 'flex-end'
            }}
          >
            {/* Primary Button */}
            <button
              type="button"
              onClick={() => navigate('/contact')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                background: '#FFFFFF',
                color: '#0052CC',
                fontSize: '0.98rem',
                fontWeight: 800,
                fontFamily: "'Sora', sans-serif",
                padding: '0.95rem 1.8rem',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
              }}
            >
              <span>Get In Touch Today</span>
              <ArrowRight size={18} color="#0052CC" style={{ flexShrink: 0 }} />
            </button>

            {/* Secondary Button */}
            <button
              type="button"
              onClick={() => onOpenContact && onOpenContact('Executive Strategy Discovery')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                fontSize: '0.96rem',
                fontWeight: 700,
                fontFamily: "'Sora', sans-serif",
                padding: '0.95rem 1.8rem',
                borderRadius: '50px',
                border: '1.5px solid rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.28)';
                e.currentTarget.style.borderColor = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <MessageSquare size={18} color="#FFFFFF" style={{ flexShrink: 0 }} />
              <span>Schedule Strategy Call</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
