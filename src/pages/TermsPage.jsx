import React, { useEffect } from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '6rem', background: '#F8FAFC', color: '#0F172A', minHeight: '100vh' }}>
      <SEO
        title="Terms & Conditions | Prestin IT Solutions"
        description="Terms of service and legal agreement governing IT consulting, software engineering, healthcare RCM, and BPO operations at Prestin IT Solutions."
        keywords="Terms and Conditions, Terms of Service, Prestin IT Solutions Terms, Legal Agreement"
      />

      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 82, 204, 0.08)', color: '#0052CC', padding: '0.4rem 1.1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
            <FileText size={16} /> TERMS OF SERVICE
          </div>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
            Terms & Conditions
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#64748B' }}>
            Last Updated: January 2026 | Prestin IT Solutions
          </p>
        </div>

        {/* Content Box */}
        <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '3rem 2.5rem', border: '1px solid #E2E8F0', boxShadow: '0 15px 35px rgba(0, 51, 149, 0.05)', lineHeight: 1.8, fontSize: '0.98rem', color: '#334155' }}>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
            1. Agreement to Terms
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            By accessing or using the services provided by Prestin IT Solutions, you agree to be bound by these Terms and Conditions. If you do not agree to all terms, you must discontinue use of our website and consulting services.
          </p>

          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
            2. Scope of IT & BPO Services
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
            {[
              'Custom Software Development & Cloud Microservices Architecture.',
              'US Healthcare Revenue Cycle Management (RCM) & Billing Support.',
              'CRM Implementation (Salesforce & Zoho Enterprise Solutions).',
              'FinTech Compliance (KYC, KYB, AML & Sanctions Screening).'
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <CheckCircle2 size={18} color="#0052CC" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
            3. Intellectual Property Rights
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            All proprietary code, deliverables, brand assets, and custom technical architectures developed specifically for clients under executed contracts remain the intellectual property of the respective clients upon full payment completion.
          </p>

          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
            4. Contact & Inquiries
          </h2>
          <p style={{ margin: 0 }}>
            For legal inquiries regarding our terms, please reach out to info@prestinit.in or contact us at <strong>+91 91001 20409</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
