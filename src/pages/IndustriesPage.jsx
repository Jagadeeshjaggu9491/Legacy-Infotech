import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Heart,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Factory,
  Truck,
  Building2,
  Shield,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesPage() {
  const navigate = useNavigate();
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = pageRef.current?.querySelectorAll('.industry-page-card');
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

  const industriesList = [
    {
      id: 'healthcare',
      title: 'Healthcare & Life Sciences',
      badge: 'HIPAA & RCM',
      desc: 'HIPAA-compliant EHR platforms, revenue cycle management automation, telemedicine portals, and AI medical coding solutions.',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      icon: Heart,
      capabilities: ['Revenue Cycle Management', 'EHR & Telemedicine', 'Medical Billing & Coding', 'Patient Portals']
    },
    {
      id: 'banking-finance',
      title: 'Banking & Financial Services',
      badge: 'FinTech & AML',
      desc: 'KYC, KYB, Anti-Money Laundering (AML), real-time fraud detection, transaction monitoring, and secure payment gateway integrations.',
      img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      icon: Landmark,
      capabilities: ['KYC & KYB Verification', 'AML Monitoring', 'Sanctions Screening', 'Core Banking APIs']
    },
    {
      id: 'retail',
      title: 'Retail & E-Commerce',
      badge: 'Omnichannel Digital',
      desc: 'High-conversion headless e-commerce architectures, inventory synchronization, personalized recommendation engines, and POS integrations.',
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      icon: ShoppingBag,
      capabilities: ['Headless E-Commerce', 'Inventory Sync', 'AI Recommendation Engines', 'Omnichannel Checkout']
    },
    {
      id: 'education',
      title: 'Education & EdTech',
      badge: 'Learning Systems',
      desc: 'Interactive Learning Management Systems (LMS), virtual classrooms, automated student grading pipelines, and institutional ERPs.',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      icon: GraduationCap,
      capabilities: ['Custom LMS Platforms', 'Virtual Classrooms', 'Student Progress Analytics', 'Institutional ERPs']
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing & Industrial IoT',
      badge: 'Industry 4.0',
      desc: 'Smart factory IoT dashboards, predictive equipment maintenance models, supply chain visibility, and shop floor automation.',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      icon: Factory,
      capabilities: ['Predictive Maintenance', 'Smart Factory Dashboards', 'Supply Chain ERP', 'Quality Control AI']
    },
    {
      id: 'logistics',
      title: 'Logistics & Supply Chain',
      badge: 'Real-Time Tracking',
      desc: 'Fleet telemetry tracking, automated route optimization, warehouse management systems (WMS), and freight dispatch portals.',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      icon: Truck,
      capabilities: ['Fleet GPS Telemetry', 'Route Optimization', 'Warehouse WMS', 'Freight Dispatch Portals']
    },
    {
      id: 'real-estate',
      title: 'Real Estate & PropTech',
      badge: 'Property Portals',
      desc: 'Property management suites, 360-degree virtual property tours, tenant lead automation, and digital lease agreement portals.',
      img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      icon: Building2,
      capabilities: ['Property Management ERP', '360° Virtual Tours', 'Lease Automation', 'Tenant Lead Portals']
    },
    {
      id: 'insurance',
      title: 'Insurance & Risk Tech',
      badge: 'InsurTech',
      desc: 'Automated claims intake processing, AI underwriting risk algorithms, policy administration software, and fraud prevention.',
      img: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      icon: Shield,
      capabilities: ['Claims Automation', 'AI Underwriting Risk', 'Policy Administration', 'Fraud Detection']
    }
  ];

  return (
    <div ref={pageRef} style={{ paddingTop: '120px', paddingBottom: '6rem', background: '#F8FAFC', color: '#0F172A', minHeight: '100vh' }}>
      <SEO
        title="Industry Solutions | Prestin IT Solutions"
        description="Tailored software engineering and business operations for Healthcare, Banking & Financial Services, Retail, Education, Manufacturing, Logistics, and Real Estate."
        keywords="Healthcare IT, FinTech Solutions, Retail E-Commerce, Smart Manufacturing, Logistics Software, PropTech Real Estate"
      />

      <div className="container">
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem auto' }}>
          <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0052CC', marginBottom: '0.6rem', display: 'block' }}>
            INDUSTRIES WE TRANSFORM
          </span>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1.2rem', color: '#0F172A' }}>
            Tailored Domain Solutions for Every Sector
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>
            We combine deep industry domain expertise with cutting-edge software engineering to solve sector-specific operational challenges.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2.5rem' }}>
          {industriesList.map((ind) => {
            const IconComponent = ind.icon;
            return (
              <div
                key={ind.id}
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
                className="industry-page-card"
              >
                {/* Image Cover */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={ind.img}
                    alt={ind.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#FFFFFF', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.78rem', fontWeight: 700, color: '#0052CC', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    {ind.badge}
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(0, 82, 204, 0.08)', color: '#0052CC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconComponent size={22} />
                    </div>
                    <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                      {ind.title}
                    </h3>
                  </div>

                  <p style={{ color: '#64748B', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                    {ind.desc}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '1.8rem', background: '#F8FAFC', padding: '1rem', borderRadius: '14px', border: '1px solid #F1F5F9' }}>
                    {ind.capabilities.map((item, idx) => (
                      <div key={idx} style={{ fontSize: '0.78rem', fontWeight: 600, color: '#334155', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <CheckCircle2 size={14} color="#0052CC" style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Explore Solutions Button */}
                  <button
                    onClick={() => navigate('/contact')}
                    className="btn btn-purple"
                    style={{ width: '100%', padding: '0.85rem 1.5rem', fontSize: '0.94rem' }}
                  >
                    <span>Explore Solutions</span>
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
