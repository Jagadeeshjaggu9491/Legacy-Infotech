import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  HeartHandshake,
  ShieldCheck,
  FileCheck2,
  Sparkles,
  Globe,
  Award,
  Clock,
  Users2,
  Eye,
  Target,
  CheckCircle2
} from 'lucide-react';
import CtaBanner from '../components/CtaBanner';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage({ onOpenContact }) {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = pageRef.current?.querySelectorAll('.gsap-animate-block');
      if (elements && elements.length > 0) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 35 },
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

  /* Our Guiding Principles */
  const values = [
    {
      title: 'Customer-First Excellence',
      desc: 'Every solution is architected with explicit business ROI and seamless user experience as top priorities.',
      icon: HeartHandshake,
      iconColor: '#0052CC',
      iconBg: '#E0EDFF',
      cardBg: '#F0F5FF',
      borderColor: '#C7D9F8'
    },
    {
      title: 'Zero-Trust Security',
      desc: 'Enterprise-grade encryption, SOC2 Type II compliance, and ISO 27001 standards baked into every line of code.',
      icon: ShieldCheck,
      iconColor: '#10B981',
      iconBg: '#DCFCE7',
      cardBg: '#F0FDF4',
      borderColor: '#BBF7D0'
    },
    {
      title: 'Uncompromising Transparency',
      desc: 'Clear SLAs, fixed-cost predictability, and direct engineering pair-programming channels with leadership.',
      icon: FileCheck2,
      iconColor: '#00B4D8',
      iconBg: '#E0F2FE',
      cardBg: '#F0F9FF',
      borderColor: '#BAE6FD'
    },
    {
      title: 'Relentless Innovation',
      desc: 'Continuous adoption of cutting-edge cloud infrastructure, AI models, and micro-frontend frameworks.',
      icon: Sparkles,
      iconColor: '#7C3AED',
      iconBg: '#F3E8FF',
      cardBg: '#FAF5FF',
      borderColor: '#E9D5FF'
    }
  ];

  /* Global Impact & Capabilities */
  const impactPillars = [
    {
      icon: Globe,
      color: '#0099FF',
      title: 'Global Operations & 24/7 Delivery',
      desc: 'Round-the-clock software engineering and RCM services spanning North America, Europe, and APAC timezones.'
    },
    {
      icon: Award,
      color: '#10B981',
      title: 'SOC2 Type II & ISO 27001 Certified',
      desc: 'Rigorous data governance, HIPAA compliance, zero-trust network access, and continuous penetration testing.'
    },
    {
      icon: Clock,
      color: '#F59E0B',
      title: '99.8% On-Time SLA Delivery',
      desc: 'Fixed-cost predictability, transparent sprint milestones, and dedicated engineering pods focused on speed.'
    },
    {
      icon: Users2,
      color: '#EC4899',
      title: '98% Long-Term Client Retention',
      desc: 'Average client engagement duration of 4.5+ years built on deep technical trust and business alignment.'
    }
  ];

  /* Our Journey Milestones starting from 2008 */
  const milestones = [
    { year: '2008', title: 'Company Founded', desc: 'Started as specialized IT consulting & software engineering firm in Hyderabad.' },
    { year: '2015', title: 'US Expansion', desc: 'Opened North America HQ & launched US Healthcare RCM & Billing division.' },
    { year: '2020', title: 'Cloud & AI Innovation', desc: 'Certified AWS Premier Partner & launched proprietary Cloud Refactoring Accelerator.' },
    { year: '2024+', title: 'Global Enterprise Leader', desc: '500+ successful enterprise projects delivered with 250+ dedicated engineers worldwide.' }
  ];

  return (
    <div ref={pageRef} style={{ paddingTop: '120px', background: '#F8FAFC', color: '#0F172A', minHeight: '100vh' }}>
      <SEO
        title="About Us | Prestin IT Solutions - Enterprise Digital Transformation"
        description="Discover Prestin IT Solutions' journey since 2008, core engineering principles, global operations, and vision for enterprise cloud and AI modernization."
        keywords="About Prestin IT Solutions, Est 2008, Engineering Principles, Global Footprint, Enterprise Digital Transformation"
      />

      {/* Hero Header */}
      <section style={{ padding: '4rem 0 3rem 0', background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }}>
        <div className="container gsap-animate-block" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <div className="badge badge-purple" style={{ marginBottom: '1rem', background: 'rgba(0, 82, 204, 0.08)', color: '#0052CC', padding: '0.4rem 1.1rem', borderRadius: '50px', border: '1px solid rgba(0, 82, 204, 0.2)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 700 }}>
            <Sparkles size={14} /> ABOUT PRESTIN IT SOLUTIONS
          </div>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2.3rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.2rem', color: '#0F172A' }}>
            Architecting the Future of <br />
            <span style={{ background: 'linear-gradient(135deg, #0052CC, #0099FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Enterprise Technology
            </span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.75 }}>
            Founded in 2008, Prestin IT Solutions empowers global organizations to replace rigid legacy monoliths with cloud-native, high-velocity digital products, AI automation pipelines, and resilient business operations.
          </p>
        </div>
      </section>

      {/* Corporate Values (Our Guiding Principles) */}
      <section style={{ padding: '5rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="gsap-animate-block" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.85rem', fontWeight: 800, color: '#0052CC', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              OUR GUIDING PRINCIPLES
            </span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: '2.5rem', fontWeight: 800, marginTop: '0.4rem', color: '#0F172A' }}>
              Built on Core Engineering Values
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {values.map((v, i) => {
              const IconComponent = v.icon;
              return (
                <div
                  key={i}
                  className="gsap-animate-block"
                  style={{
                    padding: '2.2rem 1.8rem',
                    borderRadius: '20px',
                    background: v.cardBg,
                    border: `1px solid ${v.borderColor}`,
                    boxShadow: '0 8px 25px rgba(0, 51, 149, 0.04)',
                    transition: 'all 0.35s ease',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '16px',
                      background: v.iconBg,
                      color: v.iconColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.2rem',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                    }}
                  >
                    <IconComponent size={26} />
                  </div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: '#0F172A' }}>
                    {v.title}
                  </h3>
                  <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, margin: 0, flex: 1 }}>
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Impact & Capabilities */}
      <section style={{ padding: '5rem 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="gsap-animate-block" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.85rem', fontWeight: 800, color: '#0052CC', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              GLOBAL FOOTPRINT & EXCELLENCE
            </span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: '2.5rem', fontWeight: 800, marginTop: '0.4rem', color: '#0F172A' }}>
              Why Leading Enterprises Trust Us
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {impactPillars.map((item, i) => {
              const IconComp = item.icon;
              return (
                <div
                  key={i}
                  className="gsap-animate-block"
                  style={{
                    padding: '2.2rem 1.8rem',
                    borderRadius: '20px',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 10px 30px rgba(0, 82, 204, 0.05)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '16px',
                      background: `${item.color}15`,
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.2rem'
                    }}
                  >
                    <IconComp size={26} />
                  </div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.6rem', color: '#0F172A' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Dark Blue Our Journey Timeline Section */}
      <section style={{ padding: '6rem 0', background: 'linear-gradient(135deg, #050E1F 0%, #081B3B 50%, #050E1F 100%)', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="gsap-animate-block" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.85rem', fontWeight: 800, color: '#0099FF', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              OUR JOURNEY (SINCE 2008)
            </span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 800, marginTop: '0.4rem', color: '#FFFFFF' }}>
              Over 16 Years of Digital Excellence & Growth
            </h2>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', position: 'relative', zIndex: 2 }}>
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="gsap-animate-block"
                  style={{
                    padding: '2.2rem 1.8rem',
                    borderRadius: '24px',
                    background: 'linear-gradient(145deg, rgba(12, 33, 71, 0.85), rgba(5, 14, 31, 0.95))',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(0, 180, 216, 0.25)',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.35s ease'
                  }}
                >
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: 900,
                      color: '#0099FF',
                      fontFamily: "'Sora', sans-serif",
                      marginBottom: '0.6rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>{m.year}</span>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00B4D8', boxShadow: '0 0 12px #00B4D8' }}></div>
                  </div>

                  <h4 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.2rem', fontWeight: 700, margin: '0.4rem 0 0.6rem 0', color: '#FFFFFF' }}>
                    {m.title}
                  </h4>

                  <p style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0, flex: 1 }}>
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR VISION & MISSION SECTION */}
      <section style={{ padding: '6rem 0 4rem 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="gsap-animate-block" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
            <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.85rem', fontWeight: 800, color: '#0052CC', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>
              PURPOSE & DIRECTION
            </span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 800, color: '#0F172A' }}>
              Our Vision & Core Mission
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', marginTop: '0.8rem', lineHeight: 1.7 }}>
              Guiding global organizations toward sustainable digital transformation, resilient cloud architecture, and technical excellence.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem' }}>
            {/* Vision Card */}
            <div
              className="gsap-animate-block"
              style={{
                padding: '3rem 2.5rem',
                borderRadius: '24px',
                background: '#F0F9FF',
                border: '1px solid #BAE6FD',
                boxShadow: '0 12px 30px rgba(0, 180, 216, 0.08)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '18px', background: '#E0F2FE', color: '#00B4D8', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0, 180, 216, 0.2)' }}>
                  <Eye size={30} />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00B4D8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>THE FUTURE</span>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>Our Vision</h3>
                </div>
              </div>

              <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7, marginBottom: '1.8rem', fontWeight: 600 }}>
                To be the premier global catalyst for enterprise legacy modernization, cloud transformation, and AI engineering—setting gold standards in digital performance and trust.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: 'auto' }}>
                {[
                  'Empowering 1,000+ global enterprises with cloud resilience',
                  'Pioneering ethical, air-gapped enterprise AI workflows',
                  'Fostering a zero-trust continuous innovation engineering culture'
                ].map((point, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: '#475569', fontWeight: 600 }}>
                    <CheckCircle2 size={18} color="#00B4D8" style={{ flexShrink: 0 }} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Card */}
            <div
              className="gsap-animate-block"
              style={{
                padding: '3rem 2.5rem',
                borderRadius: '24px',
                background: '#F0F5FF',
                border: '1px solid #C7D9F8',
                boxShadow: '0 12px 30px rgba(0, 82, 204, 0.08)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '18px', background: '#E0EDFF', color: '#0052CC', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0, 82, 204, 0.2)' }}>
                  <Target size={30} />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0052CC', letterSpacing: '0.1em', textTransform: 'uppercase' }}>OUR COMMITMENT</span>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>Our Mission</h3>
                </div>
              </div>

              <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7, marginBottom: '1.8rem', fontWeight: 600 }}>
                To deliver high-velocity, secure, and cost-predictable software solutions that solve complex operational challenges, accelerate growth, and maximize ROI for our clients.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: 'auto' }}>
                {[
                  'Uncompromising client-first alignment & transparent delivery',
                  'Unwavering commitment to zero-trust security & compliance',
                  'Driving quantified ROI and long-term cloud FinOps savings'
                ].map((point, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: '#475569', fontWeight: 600 }}>
                    <CheckCircle2 size={18} color="#0052CC" style={{ flexShrink: 0 }} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAME CTA SECTION AS HOME PAGE */}
      <CtaBanner onOpenContact={onOpenContact} />
    </div>
  );
}
