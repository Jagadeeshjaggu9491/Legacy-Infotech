import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import DropdownItem from './DropdownItem';
import {
  Code,
  Smartphone,
  Layout,
  HeartPulse,
  Users,
  Cloud,
  GitBranch,
  Cpu,
  TrendingUp,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Factory,
  Truck,
  Building,
  ShieldCheck
} from 'lucide-react';

export default function MegaMenu({ type, isOpen, onClose, onMouseEnter, onMouseLeave }) {
  const menuRef = useRef(null);

  // GSAP animation when menu opens
  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -12, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  // Outside click & ESC listener
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // ALL Services dropdown items redirect to main '/services' page
  const servicesData = [
    { icon: Code, title: 'Web Development', desc: 'Custom React & Next.js web applications', to: '/services' },
    { icon: Smartphone, title: 'Mobile App Development', desc: 'Cross-platform iOS & Android mobile apps', to: '/services' },
    { icon: Layout, title: 'UI/UX Design', desc: 'User-centered design systems & prototypes', to: '/services' },
    { icon: HeartPulse, title: 'Healthcare Solutions', desc: 'HIPAA compliant telemetry & RCM systems', to: '/services' },
    { icon: Users, title: 'CRM Solutions', desc: 'Salesforce & Zoho custom integrations', to: '/services' },
    { icon: Cloud, title: 'Cloud Solutions', desc: 'AWS & Azure multi-cloud architecture', to: '/services' },
    { icon: GitBranch, title: 'DevOps', desc: 'Automated CI/CD & Kubernetes clusters', to: '/services' },
    { icon: Cpu, title: 'AI & Automation', desc: 'Private LLMs & intelligent AI workflows', to: '/services' },
    { icon: TrendingUp, title: 'Banking & Financial', desc: 'KYC, KYB, AML & Sanctions screening', to: '/services' },
  ];

  // ALL Industries dropdown items redirect to main '/industries' page
  const industriesData = [
    { icon: HeartPulse, title: 'Healthcare', desc: 'Digital diagnostics & telemetry platforms', to: '/industries' },
    { icon: Landmark, title: 'Banking & Finance', desc: 'High throughput banking & FinTech systems', to: '/industries' },
    { icon: GraduationCap, title: 'Education', desc: 'Interactive EdTech portals & LMS platforms', to: '/industries' },
    { icon: ShoppingBag, title: 'Retail', desc: 'High velocity e-commerce micro-frontends', to: '/industries' },
    { icon: Factory, title: 'Manufacturing', desc: 'IIoT telemetry & automated supply chain', to: '/industries' },
    { icon: Truck, title: 'Logistics', desc: 'Real-time fleet tracking & routing AI', to: '/industries' },
    { icon: Building, title: 'Real Estate', desc: 'PropTech platforms & virtual tour engines', to: '/industries' },
    { icon: ShieldCheck, title: 'Insurance', desc: 'Automated claims processing & fraud AI', to: '/industries' },
  ];

  const currentData = type === 'services' ? servicesData : industriesData;

  return (
    <div
      ref={menuRef}
      className="mega-menu-container"
      role="menu"
      aria-label={`${type} mega menu`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: type === 'services' ? '780px' : '700px',
        maxWidth: '92vw',
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '18px',
        padding: '1.5rem',
        boxShadow: '0 20px 50px rgba(0, 51, 149, 0.14)',
        zIndex: 10000,
        marginTop: '6px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '0.6rem', borderBottom: '1px solid #E2E8F0' }}>
        <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0052CC' }}>
          Explore {type === 'services' ? 'Enterprise Services' : 'Industry Solutions'}
        </span>
        <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
          Click any item to view main category page
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: type === 'services' ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)',
          gap: '0.5rem'
        }}
      >
        {currentData.map((item, idx) => (
          <DropdownItem
            key={idx}
            icon={item.icon}
            title={item.title}
            description={item.desc}
            to={item.to}
            onClick={onClose}
          />
        ))}
      </div>
    </div>
  );
}
