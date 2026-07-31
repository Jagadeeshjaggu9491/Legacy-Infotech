import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code,
  Heart,
  Users,
  Headphones,
  Landmark,
  FileText,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const navigate = useNavigate();
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = pageRef.current?.querySelectorAll('.service-page-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.1,
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

  const servicesList = [
    {
      id: 'it-solutions',
      title: 'IT Solutions & Software',
      badge: 'Software Engineering',
      desc: 'End-to-end custom software development, high-performance web applications, cross-platform mobile apps, cloud architecture, and legacy enterprise software modernization.',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      icon: Code,
      deliverables: ['Custom Web & Enterprise Software', 'iOS & Android Mobile Applications', 'Cloud Infrastructure & Modernization', 'API Engineering & Integration']
    },
    {
      id: 'us-healthcare',
      title: 'US Healthcare & RCM',
      badge: 'HIPAA Compliant',
      desc: 'Comprehensive revenue cycle management (RCM), medical coding, billing accuracy, AR follow-up, denial management, and dental practice support for US healthcare providers.',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      icon: Heart,
      deliverables: ['End-to-End Revenue Cycle Management', 'Medical Coding & Billing Accuracy', 'AR Follow-Up & Denial Management', 'Dental Practice Billing Support']
    },
    {
      id: 'crm-services',
      title: 'CRM Services',
      badge: 'Salesforce & Zoho',
      desc: 'Maximize customer engagement and sales team productivity with tailored CRM integrations, lead routing automation, custom dashboards across Salesforce, Zoho, and HubSpot.',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      icon: Users,
      deliverables: ['Salesforce & Zoho Customization', 'Automated Lead Workflows & Bots', 'HubSpot Marketing Hub Integration', 'Legacy CRM Data Migration']
    },
    {
      id: 'bpo-services',
      title: 'BPO & Call Center Services',
      badge: '24/7 Helpdesk',
      desc: '24/7 omnichannel customer experience and call center support. Providing multilingual voice, email, live chat, and L1/L2 technical helpdesk operations for global enterprises.',
      img: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80',
      icon: Headphones,
      deliverables: ['Inbound & Outbound Customer Support', '24/7 Technical Helpdesk & L1/L2 Desk', 'Omnichannel Live Chat & Email', 'Quality Assurance & Customer Feedback']
    },
    {
      id: 'banking-financial-services',
      title: 'Banking & Financial Services',
      badge: 'FinTech Compliance',
      desc: 'Robust financial compliance and risk management solutions for global banking institutions. Implementing automated KYC, KYB, AML engines, and transaction monitoring.',
      img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      icon: Landmark,
      deliverables: ['KYC (Know Your Customer)', 'KYB (Know Your Business)', 'AML (Anti-Money Laundering)', 'Transaction Monitoring & Sanctions']
    },
    {
      id: 'back-office-support',
      title: 'Back Office Support',
      badge: 'Operations Support',
      desc: 'Streamline administrative processes with back office outsourcing. High-accuracy data entry, document indexing, virtual accounting, bookkeeping, and dedicated virtual assistants.',
      img: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      icon: FileText,
      deliverables: ['High-Accuracy Data Entry & Indexing', 'Virtual Accounting & Bookkeeping', 'HR Payroll & Administrative Support', 'Document Processing & Virtual Assistants']
    }
  ];

  return (
    <div ref={pageRef} style={{ paddingTop: '120px', paddingBottom: '6rem', background: '#F8FAFC', color: '#0F172A', minHeight: '100vh' }}>
      <SEO
        title="Enterprise IT & Healthcare Services | Prestin IT Solutions"
        description="Explore Prestin IT Solutions' comprehensive IT services: Web & Mobile App Development, UI/UX Design, US Healthcare RCM, Cloud DevOps, CRM Integration, and Financial Compliance."
        keywords="Web Development, Mobile Apps, Healthcare RCM, Cloud DevOps, Salesforce CRM, KYC KYB AML Compliance, AI Engineering"
      />

      <div className="container">
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem auto' }}>
          <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0052CC', marginBottom: '0.6rem', display: 'block' }}>
            ENTERPRISE SERVICES
          </span>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1.2rem', color: '#0F172A' }}>
            Technology & Business Services Engineered for Scale
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>
            Explore our comprehensive suite of software development, healthcare RCM, cloud DevOps, CRM integrations, and financial compliance services.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2.5rem' }}>
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 10px 30px rgba(0, 82, 204, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s ease'
                }}
                className="service-page-card"
              >
                {/* Image Cover */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={service.img}
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#FFFFFF', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.78rem', fontWeight: 700, color: '#0052CC', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    {service.badge}
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(0, 82, 204, 0.08)', color: '#0052CC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconComponent size={22} />
                    </div>
                    <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                      {service.title}
                    </h3>
                  </div>

                  <p style={{ color: '#64748B', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                    {service.desc}
                  </p>

                  <div className="responsive-deliverables-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '1.8rem', background: '#F8FAFC', padding: '1rem', borderRadius: '14px', border: '1px solid #F1F5F9' }}>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} style={{ fontSize: '0.78rem', fontWeight: 600, color: '#334155', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <CheckCircle2 size={14} color="#0052CC" style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Know More Button */}
                  <button
                    onClick={() => navigate('/contact')}
                    className="btn btn-purple"
                    style={{ width: '100%', padding: '0.85rem 1.5rem', fontSize: '0.94rem' }}
                  >
                    <span>Know More</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
