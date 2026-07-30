import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

export default function CareersPage({ onOpenContact }) {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = pageRef.current?.querySelectorAll('.job-card');
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

  const jobs = [
    {
      title: 'Senior Full-Stack Engineer (React & Node.js)',
      department: 'Software Engineering',
      location: 'Madhapur, Hyderabad / Remote',
      type: 'Full-Time',
      exp: '4+ Years Exp'
    },
    {
      title: 'US Healthcare RCM & Billing Specialist',
      department: 'Healthcare Operations',
      location: 'Madhapur, Hyderabad',
      type: 'Full-Time',
      exp: '2+ Years Exp'
    },
    {
      title: 'Senior Cloud DevOps Architect (AWS/Kubernetes)',
      department: 'Infrastructure',
      location: 'Hybrid / Hyderabad',
      type: 'Full-Time',
      exp: '5+ Years Exp'
    },
    {
      title: 'Generative AI & LLM Systems Engineer',
      department: 'AI Lab',
      location: 'Remote / Hyderabad',
      type: 'Full-Time',
      exp: '3+ Years Exp'
    }
  ];

  return (
    <div ref={pageRef} style={{ paddingTop: '120px', paddingBottom: '6rem', background: '#F8FAFC', color: '#0F172A', minHeight: '100vh' }}>
      <SEO
        title="Careers & Open Jobs | Join Legacy Infotech"
        description="Build the future of enterprise software, AI models, and cloud systems. Explore open jobs and career opportunities at Legacy Infotech Madhapur, Hyderabad."
        keywords="Careers Legacy Infotech, IT Jobs Hyderabad, React Developer Openings, Healthcare RCM Jobs, Cloud Architect Jobs"
      />

      <div className="container">
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0052CC', marginBottom: '0.6rem', display: 'block' }}>
            CAREERS AT LEGACY INFOTECH
          </span>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1.2rem', color: '#0F172A' }}>
            Build the Future of Enterprise Technology
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>
            Join a culture of engineering excellence, continuous learning, and global digital impact. Explore our current open positions.
          </p>
        </div>

        {/* Jobs List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          {jobs.map((j, idx) => (
            <div
              key={idx}
              className="job-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 25px rgba(0, 51, 149, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.5rem',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0052CC', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {j.department}
                </span>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', margin: '0.3rem 0 0.8rem 0' }}>
                  {j.title}
                </h3>
                <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', fontSize: '0.86rem', color: '#64748B' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={15} color="#0052CC" /> {j.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Clock size={15} color="#0052CC" /> {j.type}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Briefcase size={15} color="#0052CC" /> {j.exp}
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenContact}
                className="btn btn-purple"
                style={{ padding: '0.8rem 1.6rem', fontSize: '0.9rem' }}
              >
                <span>Apply Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
