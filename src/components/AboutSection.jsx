import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Briefcase, Users, Headphones, ArrowRight, TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';

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

  const highlights = [
    'Enterprise Cloud Architecture & Custom Software Engineering',
    'US Healthcare HIPAA Compliant Revenue Cycle Management (RCM)',
    'Dedicated Global Offshore Engineering & BPO Operations'
  ];

  return (
    <section ref={sectionRef} id="about" style={{ padding: '6.5rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Vertical Portrait Image Collage with Dual Floating Badges */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0, 82, 204, 0.15)',
                background: 'linear-gradient(135deg, #0052CC 0%, #0099FF 100%)',
                padding: '7px',
                position: 'relative'
              }}
            >
              <div style={{ position: 'relative', borderRadius: '22px', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                  alt="Prestin IT Solutions Executive Team"
                  style={{
                    width: '100%',
                    height: '520px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />

                {/* Top Right Security Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(5, 14, 31, 0.82)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    padding: '0.6rem 1.1rem',
                    borderRadius: '50px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#FFFFFF',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  <ShieldCheck size={16} color="#00B4D8" />
                  <span>ISO 27001 & HIPAA Certified</span>
                </div>
              </div>
            </div>

            {/* Bottom Left Floating Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '20px',
                background: '#FFFFFF',
                padding: '1.1rem 1.6rem',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0, 51, 149, 0.18)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                border: '1px solid var(--border-color)',
                zIndex: 10
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #0052CC 0%, #0099FF 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 16px rgba(0, 82, 204, 0.3)'
                }}
              >
                <TrendingUp size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.1 }}>
                  Founded in 2008
                </div>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#0052CC', marginTop: '0.2rem' }}>
                  16+ Years Engineering Excellence
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content, Key Highlights & Stats */}
          <div>
            <span className="section-subtitle">ABOUT PRESTIN IT SOLUTIONS</span>
            <h2 className="section-title" style={{ marginBottom: '1.2rem' }}>
              Driving Innovation Since 2008. <br />
              Delivering Enterprise Excellence.
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
              Founded in 2008, Prestin IT Solutions is a trusted technology and business solutions leader helping global organizations accelerate digital transformation. We provide custom software engineering, healthcare RCM, and cloud solutions that optimize business growth.
            </p>

            {/* Key Feature Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
              {highlights.map((text, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(0, 82, 204, 0.1)', color: '#0052CC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={15} />
                  </div>
                  <span style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* 4 Stats Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
                marginBottom: '2.5rem',
                background: 'var(--bg-secondary)',
                padding: '1.5rem',
                borderRadius: '20px',
                border: '1px solid var(--border-color)'
              }}
            >
              {stats.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: '#FFFFFF',
                        color: 'var(--primary-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 4px 12px rgba(0, 82, 204, 0.08)'
                      }}
                    >
                      <IconComp size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1 }}>
                        {item.value}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '0.25rem' }}>
                        {item.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Button */}
            <button
              className="btn btn-purple"
              onClick={() => navigate('/about')}
              style={{ padding: '0.9rem 2.2rem', fontSize: '0.96rem' }}
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
