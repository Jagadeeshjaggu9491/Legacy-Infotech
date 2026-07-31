import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus, MessageSquare, Headphones } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
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

  const faqs = [
    {
      q: '1. What services does Prestin IT Solutions provide?',
      a: 'Prestin IT Solutions provides end-to-end IT solutions including custom software development, mobile & web applications, US Healthcare RCM, CRM implementation (Salesforce/Zoho), BPO services, IT staffing, and back-office support.'
    },
    {
      q: '2. Which industries do you serve?',
      a: 'We serve diverse industries including Healthcare, Banking & Finance, Retail & E-commerce, Education, Logistics, Manufacturing, and Real Estate.'
    },
    {
      q: '3. Do you offer custom software development?',
      a: 'Yes, we engineer custom enterprise software, cloud-native web platforms, and mobile apps tailored specifically to your business workflows.'
    },
    {
      q: '4. Can you support existing software applications?',
      a: 'Absolutely. We offer maintenance, bug fixes, performance optimization, and cloud modernization for existing legacy applications.'
    },
    {
      q: '5. Do you provide dedicated development teams?',
      a: 'Yes, we offer flexible staffing models including dedicated developers, project-based teams, and offshore team extension.'
    },
    {
      q: '6. How do I get started?',
      a: 'You can get started by clicking "Contact Us" or contacting us via email/phone. Our technical team will schedule an initial discovery call within 2 business hours.'
    }
  ];

  return (
    <section ref={sectionRef} id="faq" style={{ padding: '6rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-subtitle">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="section-title">
            We're Here To Help You
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', marginTop: '0.8rem' }}>
            Got questions about our services, engagement models, or technical execution? Find fast answers below.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: FAQ Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    border: isOpen ? '1px solid rgba(0, 82, 204, 0.35)' : '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-card)',
                    overflow: 'hidden',
                    boxShadow: isOpen ? '0 10px 30px rgba(0, 82, 204, 0.08)' : 'none',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '1.2rem 1.4rem',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      textAlign: 'left',
                      color: isOpen ? '#0052CC' : 'var(--text-main)',
                      fontWeight: 700,
                      fontSize: '0.98rem',
                      transition: 'color 0.25s ease'
                    }}
                  >
                    <span style={{ paddingRight: '1rem', lineHeight: 1.4 }}>{item.q}</span>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: isOpen ? 'rgba(0, 82, 204, 0.12)' : 'var(--bg-secondary)',
                        color: isOpen ? '#0052CC' : 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease, color 0.3s ease'
                      }}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  {/* Smooth Accordion Height & Opacity Transition */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      opacity: isOpen ? 1 : 0,
                      transition: 'grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease'
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <div
                        style={{
                          padding: '0 1.4rem 1.25rem 1.4rem',
                          fontSize: '0.94rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.65
                        }}
                      >
                        {item.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Vertical Portrait Support Image */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '420px',
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #0052CC 0%, #0099FF 100%)',
                padding: '6px',
                boxShadow: '0 20px 45px rgba(0, 82, 204, 0.15)'
              }}
            >
              <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
                  alt="Customer Support & IT Consultation Lead"
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />

                {/* Floating Support Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    padding: '1.1rem 1.4rem',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 12px 30px rgba(0, 51, 149, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #0052CC 0%, #0099FF 100%)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Headphones size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0F172A', margin: 0, lineHeight: 1.2 }}>
                      24/7 Technical Desk
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: '#0052CC', margin: '0.2rem 0 0 0', fontWeight: 600 }}>
                      Fast 2-Hour Response Time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
