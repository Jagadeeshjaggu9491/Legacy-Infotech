import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.testimonial-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      content: 'Prestin IT Solutions exceeded our expectations by delivering a scalable CRM platform ahead of schedule. Their professionalism and technical expertise made the entire process seamless.'
    },
    {
      name: 'Michael Anderson',
      role: 'Healthcare Operations Manager',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
      content: 'Their US Healthcare support team significantly improved our billing accuracy and revenue cycle efficiency. Highly recommended.'
    },
    {
      name: 'David Wilson',
      role: 'CEO, Retail Company',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
      content: 'The team developed a modern web application that transformed our customer experience. Great communication and outstanding support.'
    }
  ];

  return (
    <section ref={sectionRef} style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-subtitle">TESTIMONIALS</span>
          <h2 className="section-title">
            What Our Clients Say
          </h2>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="service-card testimonial-card"
                style={{
                  padding: '2.2rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Star Rating */}
                  <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.2rem' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>

                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.8rem' }}>
                    "{item.content}"
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }}
                    />
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.2 }}>
                        {item.name}
                      </h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Quote icon */}
                  <Quote size={28} color="#0052CC" style={{ opacity: 0.3 }} />
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0052CC' }}></span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(0, 82, 204, 0.3)' }}></span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(0, 82, 204, 0.3)' }}></span>
          </div>
        </div>
      </div>
    </section>
  );
}
