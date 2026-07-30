import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeartPulse, Landmark, ShoppingBag, GraduationCap, Truck, Building } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ClientLogosSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll('.client-logo-badge');
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
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

  const clients = [
    { name: 'MedCare', tag: 'HEALTHCARE', icon: HeartPulse, color: '#3B82F6' },
    { name: 'FinEdge', tag: 'FINANCIAL SERVICES', icon: Landmark, color: '#06B6D4' },
    { name: 'RetailMart', tag: 'RETAIL SOLUTIONS', icon: ShoppingBag, color: '#F59E0B' },
    { name: 'EduSmart', tag: 'EDUCATION', icon: GraduationCap, color: '#10B981' },
    { name: 'LogiFast', tag: 'LOGISTICS', icon: Truck, color: '#6366F1' },
    { name: 'BuildCorp', tag: 'REAL ESTATE', icon: Building, color: '#EC4899' },
  ];

  return (
    <section ref={sectionRef} style={{ padding: '3.5rem 0', background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)'
            }}
          >
            TRUSTED BY BUSINESSES WORLDWIDE
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {clients.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="client-logo-badge"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  padding: '0.9rem 1.2rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  transition: 'all 0.25s ease'
                }}
              >
                <IconComp size={22} color={item.color} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--text-main)', lineHeight: 1.1 }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                    {item.tag}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
