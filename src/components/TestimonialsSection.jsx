import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  // Touch swipe support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Operations Director, Global SaaS',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      content: 'Prestin IT Solutions exceeded our expectations by delivering a scalable CRM platform ahead of schedule. Their professionalism and technical expertise made the entire process seamless.'
    },
    {
      name: 'Michael Anderson',
      role: 'Healthcare Operations Manager',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
      content: 'Their US Healthcare support team significantly improved our billing accuracy and revenue cycle efficiency. Highly recommended for any medical organization.'
    },
    {
      name: 'David Wilson',
      role: 'CEO, Retail Commerce',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
      content: 'The team developed a modern web application that transformed our customer experience. Great communication, fast turnaround, and outstanding support.'
    },
    {
      name: 'Priya Sharma',
      role: 'VP of Engineering, FinTech Group',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      content: 'Architecting high-frequency financial compliance systems requires rigorous precision. Prestin IT Solutions delivered robust cloud infrastructure without a single hiccup.'
    },
    {
      name: 'Robert Martinez',
      role: 'CTO, NextGen Logistics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      content: 'Our legacy software migration was executed seamlessly. The real-time telemetry dashboards they engineered increased our operational visibility by 40%.'
    },
    {
      name: 'Emily Chen',
      role: 'Head of Product, Enterprise Tech',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      content: 'Working with Prestin IT Solutions feels like an extension of our internal engineering team. Exceptional code quality and strategic technical execution.'
    }
  ];

  // Detect responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  // Auto slide loop
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [isHovered, maxIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Touch Gesture Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // GSAP entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '6rem 0',
        background: 'var(--bg-secondary)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-subtitle">TESTIMONIALS</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.8rem', fontSize: '1.05rem' }}>
            Trusted by tech founders, healthcare leaders, and enterprise operations managers worldwide.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div
          style={{ position: 'relative' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            style={{
              position: 'absolute',
              top: '50%',
              left: '-20px',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              boxShadow: '0 6px 20px rgba(0, 82, 204, 0.15)',
              color: '#0052CC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
            className="carousel-arrow-btn"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            style={{
              position: 'absolute',
              top: '50%',
              right: '-20px',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              boxShadow: '0 6px 20px rgba(0, 82, 204, 0.15)',
              color: '#0052CC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
            className="carousel-arrow-btn"
          >
            <ChevronRight size={22} />
          </button>

          {/* Slider Outer Window */}
          <div style={{ overflow: 'hidden', padding: '0.5rem 0.2rem' }}>
            <div
              style={{
                display: 'flex',
                transition: 'transform 0.55s cubic-bezier(0.25, 1, 0.5, 1)',
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
              }}
            >
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    flex: `0 0 ${100 / itemsPerPage}%`,
                    maxWidth: `${100 / itemsPerPage}%`,
                    padding: '0 0.85rem',
                    boxSizing: 'border-box'
                  }}
                >
                  <div
                    className="service-card testimonial-card"
                    style={{
                      height: '100%',
                      padding: '2.2rem 2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      background: '#FFFFFF',
                      borderRadius: '20px',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 10px 30px rgba(0, 82, 204, 0.06)'
                    }}
                  >
                    <div>
                      {/* Star Rating */}
                      <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.2rem' }}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                        ))}
                      </div>

                      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.8rem' }}>
                        "{item.content}"
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '2px solid rgba(0, 82, 204, 0.2)'
                          }}
                        />
                        <div>
                          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.2, margin: 0 }}>
                            {item.name}
                          </h4>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0.2rem 0 0 0' }}>
                            {item.role}
                          </p>
                        </div>
                      </div>

                      {/* Quote Icon */}
                      <Quote size={28} color="#0052CC" style={{ opacity: 0.25, flexShrink: 0 }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '2.5rem' }}>
            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                style={{
                  width: dotIdx === currentIndex ? '28px' : '9px',
                  height: '9px',
                  borderRadius: '10px',
                  background: dotIdx === currentIndex ? '#0052CC' : 'rgba(0, 82, 204, 0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.35s ease',
                  padding: 0
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
