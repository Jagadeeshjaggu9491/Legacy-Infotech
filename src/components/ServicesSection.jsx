import React, { useState, useEffect, useRef } from 'react';
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
  X,
  CheckCircle2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection({ onOpenContact }) {
  const [selectedService, setSelectedService] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.service-card');
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

  const services = [
    {
      id: 'it-solutions',
      title: 'IT Solutions',
      desc: 'Custom software, web & mobile apps, cloud solutions and more.',
      fullDesc: 'End-to-end IT solutions designed to drive digital transformation. We specialize in custom web applications, cross-platform mobile apps, cloud architecture, and legacy enterprise software modernization.',
      icon: Code,
      iconBg: '#F3E8FF',
      iconColor: '#7C3AED',
      deliverables: [
        'Custom Web & Enterprise Software',
        'iOS & Android Mobile Applications',
        'Cloud Infrastructure & Modernization',
        'API Engineering & Integration'
      ]
    },
    {
      id: 'us-healthcare',
      title: 'US Healthcare',
      desc: 'RCM, Medical Billing, AR Calling, Dental Management & more.',
      fullDesc: 'Comprehensive revenue cycle management (RCM) and medical billing services for US healthcare providers, hospitals, and clinics. High compliance with HIPAA standards.',
      icon: Heart,
      iconBg: '#FFE4E6',
      iconColor: '#F43F5E',
      deliverables: [
        'End-to-End Revenue Cycle Management (RCM)',
        'Medical Coding & Billing Accuracy',
        'AR Follow-Up & Denial Management',
        'Dental Practice Billing Support'
      ]
    },
    {
      id: 'crm-services',
      title: 'CRM Services',
      desc: 'Salesforce, Zoho, HubSpot implementation, support and customization.',
      fullDesc: 'Maximize customer engagement and sales team productivity with tailored CRM integrations. We configure custom workflows, pipelines, and analytics dashboards across Salesforce, Zoho, and HubSpot.',
      icon: Users,
      iconBg: '#FEF3C7',
      iconColor: '#D97706',
      deliverables: [
        'Salesforce & Zoho Implementation',
        'Custom Workflow Automation & Bots',
        'HubSpot Marketing Integration',
        'CRM Data Migration & Analytics'
      ]
    },
    {
      id: 'bpo-services',
      title: 'BPO Services',
      desc: 'Customer support, inbound & outbound services, helpdesk & more.',
      fullDesc: '24/7 omnichannel customer experience and call center support services. We provide multilingual voice, email, chat, and technical helpdesk operations for global clients.',
      icon: Headphones,
      iconBg: '#E0E7FF',
      iconColor: '#4F46E5',
      deliverables: [
        'Inbound & Outbound Customer Support',
        '24/7 Technical Helpdesk & L1/L2 Desk',
        'Omnichannel Live Chat & Email Management',
        'Quality Assurance & Customer Feedback'
      ]
    },
    {
      id: 'banking-financial-services',
      title: 'Banking & Financial Services',
      desc: 'KYC, KYB, AML compliance, transaction monitoring and sanctions screening solutions.',
      fullDesc: 'Robust financial compliance and risk management solutions for global banking & financial institutions. We implement automated identity verification, business onboarding, anti-money laundering engines, real-time transaction monitoring, and automated sanctions screening.',
      icon: Landmark,
      iconBg: '#E0F2FE',
      iconColor: '#0284C7',
      deliverables: [
        'KYC (Know Your Customer)',
        'KYB (Know Your Business)',
        'AML (Anti-Money Laundering)',
        'Transaction Monitoring',
        'Sanctions Screening'
      ]
    },
    {
      id: 'back-office-support',
      title: 'Back Office Support',
      desc: 'Data entry, accounting, HR support and virtual assistance.',
      fullDesc: 'Streamline administrative processes and focus on your core growth. Our back office outsourcing services cover high-accuracy data entry, bookkeeping, HR operations, and virtual assistants.',
      icon: FileText,
      iconBg: '#DCFCE7',
      iconColor: '#16A34A',
      deliverables: [
        'High-Accuracy Data Entry & Indexing',
        'Virtual Accounting & Bookkeeping',
        'HR Payroll & Administrative Support',
        'Document Processing & Virtual Assistants'
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="services" style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-subtitle">OUR SOLUTIONS</span>
          <h2 className="section-title">
            Services That Empower Your Business
          </h2>
        </div>

        {/* Services Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem'
          }}
        >
          {services.map(service => {
            const IconComp = service.icon;
            return (
              <div key={service.id} className="service-card">
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: service.iconBg,
                    color: service.iconColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}
                >
                  <IconComp size={28} />
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                  {service.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                  {service.desc}
                </p>

                <button
                  onClick={() => setSelectedService(service)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--primary-blue)',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: 0
                  }}
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Light Theme Modal Popup */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedService(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'none',
                border: 'none',
                color: '#64748B',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: selectedService.iconBg,
                  color: selectedService.iconColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {React.createElement(selectedService.icon, { size: 30 })}
              </div>
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A' }}>
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {selectedService.fullDesc}
            </p>

            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.9rem', color: '#0F172A' }}>
              Core Deliverables & Capabilities:
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.8rem', marginBottom: '2rem' }}>
              {selectedService.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '0.85rem 1rem',
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: '#0F172A',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem'
                  }}
                >
                  <CheckCircle2 size={18} color="#0052CC" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                className="btn btn-purple"
                style={{ flex: 1 }}
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onOpenContact(serviceName);
                }}
              >
                <span>Request {selectedService.title} Proposal</span>
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-outline-light" onClick={() => setSelectedService(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
