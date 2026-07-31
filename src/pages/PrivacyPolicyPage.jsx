import React, { useEffect } from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '6rem', background: '#F8FAFC', color: '#0F172A', minHeight: '100vh' }}>
      <SEO
        title="Privacy Policy & Data Protection | Prestin IT Solutions"
        description="Our commitment to data governance, SOC2 Type II compliance, HIPAA security standards, and privacy protection at Prestin IT Solutions."
        keywords="Privacy Policy, Data Protection, Prestin IT Solutions Privacy, SOC2 Compliance, HIPAA Data Security"
      />

      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 82, 204, 0.08)', color: '#0052CC', padding: '0.4rem 1.1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
            <Shield size={16} /> PRIVACY & DATA PROTECTION
          </div>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#64748B' }}>
            Last Updated: January 2026 | Prestin IT Solutions
          </p>
        </div>

        {/* Content Box */}
        <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '3rem 2.5rem', border: '1px solid #E2E8F0', boxShadow: '0 15px 35px rgba(0, 51, 149, 0.05)', lineHeight: 1.8, fontSize: '0.98rem', color: '#334155' }}>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
            1. Information We Collect
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            At Prestin IT Solutions, we respect your privacy and are committed to protecting your personal data. We collect information necessary to provide software engineering, healthcare RCM, CRM, and enterprise technology services. This includes contact information provided via inquiries, technical log data, and communication preferences.
          </p>

          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
            2. How We Use Your Information
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
            {[
              'To deliver high-velocity IT services, healthcare RCM, and FinTech compliance solutions.',
              'To respond to inquiries, technical support tickets, and service proposals.',
              'To ensure zero-trust security, prevent fraud, and comply with regulatory requirements (SOC2, ISO 27001, HIPAA).',
              'To improve platform user experience, system performance, and service capabilities.'
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <CheckCircle2 size={18} color="#0052CC" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
            3. Data Security & Storage
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We enforce strict technical and organizational measures to safeguard data against unauthorized access, disclosure, or destruction. All confidential communications, codebase repositories, and client data are protected using end-to-end encryption and air-gapped security protocols.
          </p>

          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
            4. Contact Us Regarding Privacy
          </h2>
          <p style={{ margin: 0 }}>
            If you have any questions or requests concerning your privacy or personal data, please contact our Data Governance Team at <strong>info@prestinit.in</strong> or call <strong>+91 91001 20409</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
