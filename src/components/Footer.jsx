import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import brandLogo from '../assets/logo/logo.png';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const serviceLinks = [
    'Web Application Development',
    'Mobile App Development',
    'UI/UX Design Systems',
    'US Healthcare & RCM',
    'CRM Services (Salesforce & Zoho)',
    'Banking & Financial Compliance',
    'AI Engineering & Automation',
    'Back Office Support'
  ];

  const industryLinks = [
    'Healthcare & Medical',
    'Banking & Financial Services',
    'Retail & E-commerce',
    'Education & EdTech',
    'Manufacturing & Industrial',
    'Logistics & Supply Chain',
    'Real Estate & Property',
    'Insurance & Risk Management'
  ];

  return (
    <footer
      style={{
        background: '#040B18',
        color: '#E2E8F0',
        padding: '5rem 0 2rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container">
        {/* Top 5 Column Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Col 1: Brand Info with Pure White Filtered logo.png (Height: 50px) */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ marginBottom: '1.2rem' }}>
              <img
                src={brandLogo}
                alt="Prestin IT Solutions Logo"
                style={{
                  height: '50px',
                  width: 'auto',
                  display: 'block',
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </div>

            <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Prestin IT Solutions is a leading IT and business solutions provider empowering global companies to innovate, integrate and achieve enterprise excellence.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease'
                }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>

              <a
                href="https://www.linkedin.com/company/prestin-it-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(0, 153, 255, 0.2)',
                  color: '#0099FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  border: '1px solid rgba(0, 153, 255, 0.4)',
                  transition: 'background 0.2s ease'
                }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease'
                }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease'
                }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFF', marginBottom: '1.2rem', letterSpacing: '0.02em' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.86rem' }}>
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    style={{
                      color: '#94A3B8',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0099FF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    <ArrowRight size={13} color="#0099FF" style={{ flexShrink: 0 }} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFF', marginBottom: '1.2rem', letterSpacing: '0.02em' }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.86rem' }}>
              {serviceLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    to="/services"
                    style={{
                      color: '#94A3B8',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0099FF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    <ArrowRight size={13} color="#0099FF" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Industries */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFF', marginBottom: '1.2rem', letterSpacing: '0.02em' }}>
              Industries
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.86rem' }}>
              {industryLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    to="/industries"
                    style={{
                      color: '#94A3B8',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0099FF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    <ArrowRight size={13} color="#0099FF" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Us (Hyderabad & Bangalore Offices) */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFF', marginBottom: '1.2rem', letterSpacing: '0.02em' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.84rem', color: '#94A3B8' }}>
              {/* Hyderabad Office */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} color="#0052CC" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong style={{ color: '#E2E8F0' }}>Hyderabad:</strong> Unit No.407, 4th Floor, Jain Sadguru Images Capital Park, Madhapur, Hyderabad-81, Telangana.
                </span>
              </div>

              {/* Bangalore Office */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong style={{ color: '#E2E8F0' }}>Bangalore:</strong> 2nd Cross, near Ayyappa Temple, Kempapura, Hebbal, Bangalore - 560024.
                </span>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={18} color="#0052CC" style={{ flexShrink: 0 }} />
                <a href="tel:+919100120409" style={{ color: '#E2E8F0', textDecoration: 'none' }}>
                  +91 91001 20409
                </a>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={18} color="#0052CC" style={{ flexShrink: 0 }} />
                <a href="mailto:info@prestinit.in" style={{ color: '#0099FF', textDecoration: 'none' }}>
                  info@prestinit.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '1.8rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#64748B'
          }}
        >
          <div>
            © 2026 Prestin IT Solutions. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link
              to="/privacy-policy"
              style={{
                color: '#64748B',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0099FF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
            >
              <ArrowRight size={12} color="#0099FF" style={{ flexShrink: 0 }} />
              <span>Privacy Policy</span>
            </Link>
            <span>|</span>
            <Link
              to="/terms-conditions"
              style={{
                color: '#64748B',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0099FF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
            >
              <ArrowRight size={12} color="#0099FF" style={{ flexShrink: 0 }} />
              <span>Terms & Conditions</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
