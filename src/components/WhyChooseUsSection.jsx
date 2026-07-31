import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Lightbulb,
  Users,
  ShieldCheck,
  Rocket,
  Headphones,
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import './WhyChooseUsSection.scss';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUsSection({ onOpenContact }) {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.why-choose-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
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

  const reasons = [
    {
      icon: Lightbulb,
      iconBg: 'rgba(0, 82, 204, 0.08)',
      iconColor: '#0052CC',
      title: 'Future-Ready Innovation',
      desc: 'Architecting scalable, cloud-native software, microservices, and AI automation pipelines engineered for tomorrow\'s market demands.',
      highlights: ['Cloud-Native Architecture', 'AI & GenAI Integration', 'Legacy Refactoring']
    },
    {
      icon: Users,
      iconBg: 'rgba(0, 180, 216, 0.1)',
      iconColor: '#00B4D8',
      title: 'Top 1% Engineering Talent',
      desc: 'Experienced software architects, data scientists, and domain specialists dedicated to executing your vision with technical precision.',
      highlights: ['AWS & Azure Certified', 'Senior Full-Stack Leads', 'Domain Specialists']
    },
    {
      icon: ShieldCheck,
      iconBg: 'rgba(16, 185, 129, 0.1)',
      iconColor: '#10B981',
      title: 'Zero-Trust Security & Compliance',
      desc: 'Enterprise-grade encryption, SOC2 Type II compliance, HIPAA standards, and ISO 27001 security protocols baked into every build.',
      highlights: ['SOC2 & HIPAA Compliant', 'Zero-Trust Architecture', 'Continuous Vulnerability Audits']
    },
    {
      icon: Rocket,
      iconBg: 'rgba(139, 92, 246, 0.1)',
      iconColor: '#8B5CF6',
      title: 'Agile Execution & Predictability',
      desc: 'Transparent sprint milestones, fixed-cost predictability, regular code reviews, and direct engineering pair-programming channels.',
      highlights: ['Fixed-Cost Predictability', 'Bi-Weekly Sprint Demos', '100% SLA Guarantee']
    },
    {
      icon: Headphones,
      iconBg: 'rgba(245, 158, 11, 0.1)',
      iconColor: '#F59E0B',
      title: '24/7 Operations & Support',
      desc: 'Proactive L1/L2/L3 helpdesk assistance, real-time telemetry monitoring, and zero-downtime infrastructure management around the clock.',
      highlights: ['24/7 Live Technical Desk', 'Real-Time Incident Response', 'Guaranteed 99.99% Uptime']
    },
    {
      icon: TrendingUp,
      iconBg: 'rgba(236, 72, 153, 0.1)',
      iconColor: '#EC4899',
      title: 'Measurable Business ROI',
      desc: 'Focused on quantified business outcomes, cloud expense optimization (up to 45% FinOps savings), and accelerated time-to-market.',
      highlights: ['FinOps Cloud Cost Reduction', 'Rapid Time-to-Market', 'Long-Term Strategic Partner']
    }
  ];

  return (
    <section ref={sectionRef} className="why-choose-us-section">
      <div className="container">
        {/* Section Header */}
        <div className="why-choose-header">
          <span className="why-choose-badge">ENTERPRISE ADVANTAGE</span>
          <h2 className="why-choose-title">
            Why Global Businesses Partner With Prestin IT Solutions
          </h2>
          <p className="why-choose-subtitle">
            We combine technical excellence, deep domain expertise, zero-trust security, and agile execution to empower organizations to scale with confidence.
          </p>
        </div>

        {/* 6 Core Value Cards Grid */}
        <div className="why-choose-grid">
          {reasons.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="why-choose-card">
                <div
                  className="card-icon-box"
                  style={{ background: item.iconBg, color: item.iconColor }}
                >
                  <IconComp size={28} />
                </div>

                <h3 className="card-title-text">{item.title}</h3>
                <p className="card-desc-text">{item.desc}</p>

                <div className="card-highlights-list">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="highlight-item">
                      <CheckCircle2 size={15} color={item.iconColor} style={{ flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="why-choose-cta-box">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Elevate Your Digital Capabilities?</h3>
            <p className="cta-desc">
              Schedule a 1-on-1 strategy call with our principal software architects today.
            </p>
          </div>
          <button className="btn btn-purple" onClick={() => navigate('/contact')}>
            <span>Contact Us Today</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
