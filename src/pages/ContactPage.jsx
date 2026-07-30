import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'IT Solutions',
        subject: '',
        message: ''
      });
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div ref={pageRef} style={{ paddingTop: '120px', paddingBottom: '6rem', background: '#F8FAFC', color: '#0F172A', minHeight: '100vh' }}>
      <SEO
        title="Contact Us | Legacy Infotech - Madhapur, Hyderabad"
        description="Get in touch with Legacy Infotech. Located at Unit 407, Jain Sadguru Images Capital Park, Madhapur, Hyderabad. Call +91 91001 20409 or email info@prestinit.in."
        keywords="Contact Legacy Infotech, Madhapur Office Address, Hyderabad IT Company Phone, Software Consultation Inquiry"
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3rem', marginBottom: '5rem' }}>
          {/* Left Column: Contact Form */}
          <div
            className="animate-on-entry"
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '2.5rem',
              border: '1px solid #E2E8F0',
              boxShadow: '0 15px 35px rgba(0, 51, 149, 0.08)'
            }}
          >
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0F172A' }}>
              Send Us a Message
            </h2>

            {submitted ? (
              <div
                style={{
                  padding: '2rem',
                  background: '#F0FDF4',
                  border: '1px solid #BBF7D0',
                  borderRadius: '16px',
                  color: '#166534',
                  textAlign: 'center'
                }}
              >
                <CheckCircle2 size={42} color="#16A34A" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Thank You for Reaching Out!
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#15803D' }}>
                  Your inquiry has been received successfully. One of our technical leads will contact you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 91001 20409"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="IT Solutions">IT Solutions & Software</option>
                      <option value="US Healthcare">US Healthcare & RCM</option>
                      <option value="CRM Services">CRM Services (Salesforce & Zoho)</option>
                      <option value="BPO Services">BPO & Call Center</option>
                      <option value="Banking & Financial">Banking & Financial Services</option>
                      <option value="Back Office Support">Back Office Support</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Consultation"
                    className="form-input"
                  />
                </div>

                <div style={{ marginBottom: '1.8rem' }}>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements or goals..."
                    className="form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-purple"
                  style={{ width: '100%', padding: '0.9rem', fontSize: '1rem' }}
                >
                  <span>Submit Inquiry</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Exact Office Address Details */}
          <div className="animate-on-entry" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                  Corporate Office Address
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  <strong>Shreyan IT Solutions / Legacy Infotech</strong><br />
                  Unit No.407, 4th Floor, Jain Sadguru Images Capital Park,<br />
                  Image Gardens Rd, Madhapur, Hyderabad-81, Telangana, India.
                </p>
              </div>
            </div>

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
                <Clock size={26} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.3rem' }}>
                  Business Hours
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                  24/7 Technical Support Available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Google Map Section for 17°26'47.1"N 78°23'11.7"E (Jain Sadguru Images Capital Park) */}
        <div className="animate-on-entry" style={{ background: '#FFFFFF', borderRadius: '24px', padding: '1.5rem', border: '1px solid #E2E8F0', boxShadow: '0 15px 35px rgba(0, 51, 149, 0.08)' }}>
          <div style={{ width: '100%', height: '450px', borderRadius: '18px', overflow: 'hidden' }}>
            <iframe
              title="Exact Google Map Location Pin"
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
      </div>
    </div>
  );
}
