import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, TrendingUp, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudiesPage({ onOpenContact }) {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = pageRef.current?.querySelectorAll('.case-study-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: pageRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true
            }
          }
        );
      }
    }, pageRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  const cases = [
    {
      title: 'US Dental Network RCM & Billing Overhaul',
      category: 'Healthcare RCM',
      metrics: '35% Higher Revenue Recovery',
      desc: 'Architected automated claim scrubbing, denial management workflows, and HIPAA-compliant payment tracking for a multi-state US dental care network.',
      tags: ['RCM Automation', 'HIPAA', 'Medical Billing', 'React & Node.js'],
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'FinTech Banking Compliance & AML Automation',
      category: 'Financial Services',
      metrics: '99.4% Fraud Detection Accuracy',
      desc: 'Engineered real-time KYC, KYB, and Anti-Money Laundering (AML) transaction monitoring engines handling 5M+ daily API compliance requests.',
      tags: ['KYC/AML', 'Sanctions Screening', 'Microservices', 'Kafka'],
      img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Global Retail Headless E-Commerce Modernization',
      category: 'E-Commerce & Retail',
      metrics: '3.2x Faster Page Load Speed',
      desc: 'Refactored a legacy monolithic store into Next.js micro-frontends with real-time inventory synchronization across 150+ physical store locations.',
      tags: ['Next.js', 'Headless Commerce', 'AWS Lambda', 'GraphQL'],
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div ref={pageRef} style={{ paddingTop: '120px', paddingBottom: '6rem', background: '#F8FAFC', color: '#0F172A', minHeight: '100vh' }}>
      <SEO
        title="Enterprise Case Studies & Success Stories | Legacy Infotech"
        description="Read how Legacy Infotech engineered high-performance cloud platforms, automated RCM operations, and accelerated digital growth for global clients."
        keywords="Case Studies, RCM Case Study, FinTech AML Success Story, Next.js E-Commerce Transformation, Legacy Refactoring Results"
      />

      <div className="container">
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0052CC', marginBottom: '0.6rem', display: 'block' }}>
            SUCCESS STORIES
          </span>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1.2rem', color: '#0F172A' }}>
            Proven Results & Enterprise Impact
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>
            Explore how we partnered with global organizations to replace legacy monoliths, automate revenue operations, and drive measurable ROI.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
          {cases.map((c, i) => (
            <div
              key={i}
              className="case-study-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 10px 30px rgba(0, 51, 149, 0.06)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.35s ease'
              }}
            >
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img src={c.img} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#0052CC', color: '#FFFFFF', padding: '0.35rem 0.9rem', borderRadius: '50px', fontSize: '0.78rem', fontWeight: 700 }}>
                  {c.category}
                </div>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10B981', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.8rem' }}>
                  <TrendingUp size={16} />
                  <span>{c.metrics}</span>
                </div>

                <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.3rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.8rem' }}>
                  {c.title}
                </h3>

                <p style={{ color: '#64748B', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                  {c.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.8rem' }}>
                  {c.tags.map((t, idx) => (
                    <span key={idx} style={{ background: '#F1F5F9', color: '#334155', padding: '0.3rem 0.75rem', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600 }}>
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenContact}
                  className="btn btn-purple"
                  style={{ width: '100%', padding: '0.85rem 1.5rem', fontSize: '0.94rem' }}
                >
                  <span>Request Full Case Study</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
