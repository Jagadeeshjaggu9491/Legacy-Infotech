import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import brandLogo from '../../assets/logo/logo.png';
import { X, ChevronDown } from 'lucide-react';
import NavbarButton from './NavbarButton';

export default function MobileMenu({ isOpen, onClose, onOpenContact }) {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [industriesExpanded, setIndustriesExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: 'rgba(15, 23, 42, 0.4)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'flex-end'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '320px',
          maxWidth: '85vw',
          height: '100%',
          background: '#FFFFFF',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.15)',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Top Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <img src={brandLogo} alt="Prestin IT Solutions Logo" style={{ height: '38px', width: 'auto' }} />
            <button
              onClick={onClose}
              style={{ background: 'none', border: 'none', color: '#0F172A', cursor: 'pointer' }}
            >
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <NavLink to="/" className="mobile-nav-link" onClick={onClose}>
              Home
            </NavLink>

            <NavLink to="/about" className="mobile-nav-link" onClick={onClose}>
              About Us
            </NavLink>

            {/* Services Accordion */}
            <div>
              <button
                className="mobile-accordion-toggle"
                onClick={() => setServicesExpanded(!servicesExpanded)}
              >
                <span>Services</span>
                <ChevronDown size={16} style={{ transform: servicesExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
              {servicesExpanded && (
                <div className="mobile-accordion-content">
                  <NavLink to="/services" className="mobile-sublink" onClick={onClose}>All Services</NavLink>
                  <NavLink to="/services" className="mobile-sublink" onClick={onClose}>IT Solutions & Software</NavLink>
                  <NavLink to="/services" className="mobile-sublink" onClick={onClose}>US Healthcare & RCM</NavLink>
                  <NavLink to="/services" className="mobile-sublink" onClick={onClose}>CRM Services</NavLink>
                  <NavLink to="/services" className="mobile-sublink" onClick={onClose}>BPO & Call Center</NavLink>
                  <NavLink to="/services" className="mobile-sublink" onClick={onClose}>Banking & Financial</NavLink>
                  <NavLink to="/services" className="mobile-sublink" onClick={onClose}>Back Office Support</NavLink>
                </div>
              )}
            </div>

            {/* Industries Accordion */}
            <div>
              <button
                className="mobile-accordion-toggle"
                onClick={() => setIndustriesExpanded(!industriesExpanded)}
              >
                <span>Industries</span>
                <ChevronDown size={16} style={{ transform: industriesExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
              {industriesExpanded && (
                <div className="mobile-accordion-content">
                  <NavLink to="/industries" className="mobile-sublink" onClick={onClose}>All Industries</NavLink>
                  <NavLink to="/industries" className="mobile-sublink" onClick={onClose}>Healthcare</NavLink>
                  <NavLink to="/industries" className="mobile-sublink" onClick={onClose}>Finance</NavLink>
                  <NavLink to="/industries" className="mobile-sublink" onClick={onClose}>Retail</NavLink>
                </div>
              )}
            </div>

            <NavLink to="/case-studies" className="mobile-nav-link" onClick={onClose}>
              Case Studies
            </NavLink>

            <NavLink to="/careers" className="mobile-nav-link" onClick={onClose}>
              Careers
            </NavLink>
          </nav>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <NavbarButton
            onClick={() => {
              onClose();
              if (onOpenContact) onOpenContact();
            }}
            className="w-100"
          >
            Contact Us
          </NavbarButton>
        </div>
      </div>
    </div>
  );
}
