import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Briefcase, Users, Headphones, ArrowRight, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection({ onOpenContact }) {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = sectionRef.current;
      if (el) {
        gsap.fromTo(
          el.children[0],
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
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

  const stats = [
    { icon: Award, value: '16+', label: 'Years Experience (Est. 2008)' },
    { icon: Briefcase, value: '500+', label: 'Successful Projects' },
    { icon: Users, value: '250+', label: 'Happy Clients' },
    { icon: Headphones, value: '24/7', label: 'Technical Support' },
  ];

  return (
    <section ref={sectionRef} id="about" style={{ padding: '6rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Image Collage with Floating Badge */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                background: 'linear-gradient(135deg, #0052CC, #0099FF)',
                padding: '8px',
                position: 'relative'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Prestin IT Solutions Engineering Team"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  display: 'block'
                }}
              />
            </div>

            {/* Floating Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '20px',
                background: '#FFFFFF',
                padding: '1rem 1.5rem',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 15px 35px rgba(0, 51, 149, 0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                border: '1px solid var(--border-color)',
                zIndex: 10
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(0, 82, 204, 0.1)',
                  color: '#0052CC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <TrendingUp size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0F172A' }}>
                  Founded in 2008
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0052CC' }}>
                  16+ Years Excellence
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content & Stats */}
          <div>
            <span className="section-subtitle">ABOUT PRESTIN IT SOLUTIONS</span>
            <h2 className="section-title" style={{ marginBottom: '1.2rem' }}>
              Driving Innovation Since 2008. <br />
              Delivering Enterprise Excellence.
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Founded in 2008, Prestin IT Solutions is a trusted technology and business solutions company helping global organizations accelerate digital transformation. We provide a wide range of IT and non-IT services that optimize operations, enhance customer experiences and fuel business growth.
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Our team of experts is committed to delivering scalable, secure and future-ready solutions with a customer-first approach.
            </p>

            {/* 4 Stats Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
                marginBottom: '2.5rem'
              }}
            >
              {stats.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: 'rgba(0, 82, 204, 0.1)',
                        color: 'var(--primary-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <IconComp size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1 }}>
                        {item.value}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '0.2rem' }}>
                        {item.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Clean Know More About Us Button */}
            <button
              className="btn btn-purple"
              onClick={() => navigate('/about')}
              style={{ padding: '0.85rem 2rem' }}
            >
              <span>Know More About Us</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
