import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

export default function BlogPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = pageRef.current?.querySelectorAll('.blog-card');
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

  const articles = [
    {
      title: 'Architecting High-Velocity React Micro-Frontends for Enterprise Applications',
      date: 'Jan 24, 2026',
      author: 'Dr. Robert Sterling',
      category: 'Software Architecture',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      excerpt: 'How modern engineering teams decouple legacy monoliths into scalable micro-frontends with zero runtime overhead.'
    },
    {
      title: 'US Healthcare RCM & Medical Billing Compliance Best Practices in 2026',
      date: 'Jan 18, 2026',
      author: 'David Vance',
      category: 'Healthcare RCM',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Key strategies for minimizing insurance claim denials and optimizing medical revenue velocity.'
    },
    {
      title: 'FinTech Compliance: Implementing Real-Time KYC, KYB, and AML Screening',
      date: 'Jan 12, 2026',
      author: 'Sophia Chen',
      category: 'FinTech Compliance',
      img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Automating Anti-Money Laundering checks and sanctions screening with zero-trust API architectures.'
    }
  ];

  return (
    <div ref={pageRef} style={{ paddingTop: '120px', paddingBottom: '6rem', background: '#F8FAFC', color: '#0F172A', minHeight: '100vh' }}>
      <SEO
        title="Architectural Digest & Tech Insights | Legacy Infotech Blog"
        description="Engineering insights, cloud FinOps strategies, AI development patterns, and healthcare RCM compliance guides from Legacy Infotech experts."
        keywords="Legacy Infotech Blog, Micro-Frontends Guide, Healthcare RCM Tips, FinTech AML Architecture, React Engineering Blog"
      />

      <div className="container">
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0052CC', marginBottom: '0.6rem', display: 'block' }}>
            ARCHITECTURAL DIGEST
          </span>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1.2rem', color: '#0F172A' }}>
            Tech Insights & Industry Trends
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>
            Deep-dive articles on cloud architecture, AI engineering, healthcare revenue management, and FinTech compliance.
          </p>
        </div>

        {/* Blog Articles Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="blog-card"
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
                <img src={art.img} alt={art.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#0052CC', color: '#FFFFFF', padding: '0.35rem 0.9rem', borderRadius: '50px', fontSize: '0.78rem', fontWeight: 700 }}>
                  {art.category}
                </div>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', gap: '1.2rem', fontSize: '0.82rem', color: '#64748B', marginBottom: '0.8rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calendar size={14} color="#0052CC" /> {art.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <User size={14} color="#0052CC" /> {art.author}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.8rem', lineHeight: 1.4 }}>
                  {art.title}
                </h3>

                <p style={{ color: '#64748B', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                  {art.excerpt}
                </p>

                <button className="btn btn-purple" style={{ width: '100%', padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>
                  <span>Read Article</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
