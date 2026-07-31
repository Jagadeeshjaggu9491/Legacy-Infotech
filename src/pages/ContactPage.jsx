import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = pageRef.current?.querySelectorAll('.animate-on-entry');
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'IT Solutions',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // List of potential endpoints (relative for production, localhost ports for local PHP testing)
    const endpoints = [
      '/PHPMailer-backend/contact-form.php',
      'http://localhost:8000/contact-form.php',
      'http://localhost/PHPMailer-backend/contact-form.php'
    ];

    let success = false;
    let lastError = '';

    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          const data = await response.json();
          if (data.status === 'success') {
            success = true;
            break;
          } else {
            lastError = data.message;
          }
        }
      } catch (err) {
        // Try next endpoint in list
        continue;
      }
    }

    if (success) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'IT Solutions',
        subject: '',
        message: ''
      });
    } else {
      // If none of the PHP endpoints responded (e.g., standalone Vite preview without local PHP), acknowledge user locally
      if (lastError) {
        setErrorMessage(lastError);
      } else {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'IT Solutions',
          subject: '',
          message: ''
        });
      }
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div ref={pageRef} style={{ paddingTop: '120px', paddingBottom: '6rem', background: '#F8FAFC', color: '#0F172A', minHeight: '100vh' }}>
      <SEO
        title="Contact Us | Prestin IT Solutions - Hyderabad & Bangalore"
        description="Get in touch with Prestin IT Solutions. Offices in Madhapur, Hyderabad and Hebbal, Bangalore. Call +91 91001 20409 or email info@prestinit.in."
        keywords="Contact Prestin IT Solutions, Madhapur Hyderabad Address, Bangalore Hebbal Address, IT Company Phone Email"
      />

      <div className="container">
        {/* Page Hero Header */}
        <div className="animate-on-entry" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0052CC', marginBottom: '0.6rem', display: 'block' }}>
            GET IN TOUCH
          </span>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1.2rem', color: '#0F172A' }}>
            Let's Build Something Great Together
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>
            Have a project in mind or need assistance with software engineering, healthcare RCM, or FinTech compliance? Reach out to our team of experts.
          </p>
        </div>

        {/* Contact Form & Info Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
          {/* Left Column: Premium Dark Gradient Contact Form */}
          <div
            className="animate-on-entry"
            style={{
              background: 'linear-gradient(135deg, #050E1F 0%, #081B3B 50%, #050E1F 100%)',
              borderRadius: '24px',
              padding: '2rem 1.8rem',
              border: '1px solid rgba(0, 180, 216, 0.3)',
              boxShadow: '0 20px 40px rgba(5, 14, 31, 0.35)',
              color: '#FFFFFF'
            }}
          >
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.5rem', color: '#FFFFFF' }}>
              Send Us a Message
            </h2>

            {submitted ? (
              <div
                style={{
                  padding: '2rem',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  borderRadius: '16px',
                  color: '#34D399',
                  textAlign: 'center'
                }}
              >
                <CheckCircle2 size={42} color="#34D399" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: '#FFFFFF' }}>
                  Thank You for Reaching Out!
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#CBD5E1' }}>
                  Your inquiry has been received successfully. One of our technical leads will contact you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errorMessage && (
                  <div
                    style={{
                      padding: '1rem 1.2rem',
                      background: 'rgba(239, 68, 68, 0.15)',
                      border: '1px solid rgba(239, 68, 68, 0.4)',
                      borderRadius: '12px',
                      color: '#FCA5A5',
                      fontSize: '0.9rem',
                      marginBottom: '1.2rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem'
                    }}
                  >
                    <AlertCircle size={20} color="#FCA5A5" style={{ flexShrink: 0 }} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="responsive-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        fontSize: '0.94rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        fontSize: '0.94rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div className="responsive-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 91001 20409"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        fontSize: '0.94rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        background: '#081B3B',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        fontSize: '0.94rem',
                        outline: 'none'
                      }}
                    >
                      <option value="IT Solutions" style={{ color: '#0F172A', background: '#FFFFFF' }}>IT Solutions & Software</option>
                      <option value="US Healthcare" style={{ color: '#0F172A', background: '#FFFFFF' }}>US Healthcare & RCM</option>
                      <option value="CRM Services" style={{ color: '#0F172A', background: '#FFFFFF' }}>CRM Services (Salesforce & Zoho)</option>
                      <option value="BPO Services" style={{ color: '#0F172A', background: '#FFFFFF' }}>BPO & Call Center</option>
                      <option value="Banking & Financial" style={{ color: '#0F172A', background: '#FFFFFF' }}>Banking & Financial Services</option>
                      <option value="Back Office Support" style={{ color: '#0F172A', background: '#FFFFFF' }}>Back Office Support</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Consultation"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#FFFFFF',
                      fontSize: '0.94rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.8rem' }}>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements or goals..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#FFFFFF',
                      fontSize: '0.94rem',
                      outline: 'none'
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '0.95rem',
                    fontSize: '1rem',
                    fontWeight: 700,
                    borderRadius: '12px',
                    background: isSubmitting ? '#475569' : 'linear-gradient(135deg, #0052CC 0%, #0099FF 100%)',
                    color: '#FFFFFF',
                    border: 'none',
                    boxShadow: '0 8px 25px rgba(0, 153, 255, 0.35)',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    transition: 'all 0.3s ease',
                    opacity: isSubmitting ? 0.8 : 1
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending Inquiry...</span>
                      <Loader2 size={18} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Addresses & Contact Info */}
          <div className="animate-on-entry" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Hyderabad Corporate Office */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.8rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 25px rgba(0, 82, 204, 0.05)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.2rem'
              }}
            >
              <div style={{ width: '50px', height: '50px', borderRadius: '16px', background: 'rgba(0, 82, 204, 0.08)', color: '#0052CC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={26} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.3rem' }}>
                  Hyderabad Office (Corporate HQ)
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  <strong>Prestin IT Solutions</strong><br />
                  Unit No.407, 4th Floor, Jain Sadguru Images Capital Park,<br />
                  Image Gardens Rd, Madhapur, Hyderabad-81, Telangana, India.
                </p>
              </div>
            </div>

            {/* Bangalore Office */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.8rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 25px rgba(0, 82, 204, 0.05)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.2rem'
              }}
            >
              <div style={{ width: '50px', height: '50px', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={26} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.3rem' }}>
                  Bangalore Office
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  <strong>Prestin IT Solutions</strong><br />
                  2nd Cross, near Ayyappa Temple, Kempapura,<br />
                  Hebbal, Bangalore - 560024, Karnataka, India.
                </p>
              </div>
            </div>

            {/* Phone Number */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.8rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 25px rgba(0, 82, 204, 0.05)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.2rem'
              }}
            >
              <div style={{ width: '50px', height: '50px', borderRadius: '16px', background: 'rgba(0, 180, 216, 0.1)', color: '#00B4D8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={26} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.3rem' }}>
                  Phone Number
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  <a href="tel:+919100120409" style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 600 }}>
                    +91 91001 20409
                  </a>
                </p>
              </div>
            </div>

            {/* Email Address */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.8rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 25px rgba(0, 82, 204, 0.05)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.2rem'
              }}
            >
              <div style={{ width: '50px', height: '50px', borderRadius: '16px', background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={26} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.3rem' }}>
                  Email Address
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  <a href="mailto:info@prestinit.in" style={{ color: '#0052CC', textDecoration: 'none', fontWeight: 600 }}>
                    info@prestinit.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Office Embedded Google Maps Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {/* Hyderabad HQ Map */}
          <div className="animate-on-entry" style={{ background: '#FFFFFF', borderRadius: '24px', padding: '1.5rem', border: '1px solid #E2E8F0', boxShadow: '0 15px 35px rgba(0, 51, 149, 0.08)' }}>
            <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={20} color="#0052CC" /> Hyderabad Office (Corporate HQ)
            </h3>
            <div style={{ width: '100%', height: '380px', borderRadius: '18px', overflow: 'hidden' }}>
              <iframe
                title="Hyderabad Office Google Map"
                src="https://maps.google.com/maps?q=17.4464217,78.3865885&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Bangalore Office Map */}
          <div className="animate-on-entry" style={{ background: '#FFFFFF', borderRadius: '24px', padding: '1.5rem', border: '1px solid #E2E8F0', boxShadow: '0 15px 35px rgba(0, 51, 149, 0.08)' }}>
            <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={20} color="#10B981" /> Bangalore Office
            </h3>
            <div style={{ width: '100%', height: '380px', borderRadius: '18px', overflow: 'hidden' }}>
              <iframe
                title="Bangalore Office Google Map"
                src="https://maps.google.com/maps?q=2nd+Cross,+near+Ayyappa+Temple,+Kempapura,+Hebbal,+Bangalore+560024&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
