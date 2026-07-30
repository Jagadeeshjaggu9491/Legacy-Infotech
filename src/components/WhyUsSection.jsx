import React from 'react';
import { ShieldCheck, Clock, Award, Users, CheckCircle2, Lock, GitPullRequest, Headphones, Zap } from 'lucide-react';

export default function WhyUsSection({ onOpenConsultation }) {
  const differentiators = [
    {
      icon: ShieldCheck,
      title: 'Enterprise Compliance Built-In',
      desc: 'SOC2 Type II, ISO 27001, HIPAA, and GDPR compliance embedded directly into your deployment pipelines and cloud infrastructure.',
      color: 'var(--accent-cyan)'
    },
    {
      icon: Clock,
      title: 'Zero-Downtime Migration SLA',
      desc: 'Our Strangler Fig & dual-write data synchronization patterns ensure your business operates uninterrupted during complex refactoring.',
      color: 'var(--accent-emerald)'
    },
    {
      icon: Users,
      title: 'Senior Principal Engineers',
      desc: 'Direct pair-programming and architectural oversight by senior engineers with 12+ years of experience in distributed systems.',
      color: 'var(--accent-blue)'
    },
    {
      icon: Headphones,
      title: '24/7 Managed Cloud Ops',
      desc: 'Continuous cluster monitoring, automated incident response, and sub-15 minute emergency escalation response times.',
      color: 'var(--accent-indigo)'
    }
  ];

  const methodologySteps = [
    { step: '01', name: 'Discovery & Code Audit', desc: 'Static analysis of legacy codebase, dependency mapping, technical debt assessment.' },
    { step: '02', name: 'Target Architecture Blueprint', desc: 'Designing microservices boundaries, API contracts, and IaC scripts.' },
    { step: '03', name: 'Iterative Refactoring & Migration', desc: 'Migrating domain modules incrementally with automated regression test suites.' },
    { step: '04', name: 'Continuous Security & Launch', desc: 'Penetration testing, blue-green deployment, and 24/7 telemetry monitoring.' },
  ];

  return (
    <section id="why-us" style={{ padding: '6rem 0', background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-emerald" style={{ marginBottom: '0.8rem' }}>
            <Award size={14} />
            <span>Why Legacy Infotech</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800 }}>
            Engineering Standards <span className="gradient-text">Without Compromise</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.75rem' }}>
            We combine deep legacy system expertise with modern cloud-native practices to deliver predictable, high-value outcomes.
          </p>
        </div>

        {/* Differentiator Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.8rem',
            marginBottom: '4.5rem'
          }}
        >
          {differentiators.map((diff, idx) => {
            const IconComp = diff.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'rgba(6, 182, 212, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: diff.color
                  }}
                >
                  <IconComp size={26} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{diff.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {diff.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Methodology Timeline Banner */}
        <div
          className="glass-card"
          style={{
            padding: '3rem 2.5rem',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(17, 24, 39, 0.95))',
            border: '1px solid var(--border-glow)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge badge-cyan" style={{ marginBottom: '0.5rem' }}>Methodology</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Our 4-Phase Modernization Process</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2rem',
              position: 'relative'
            }}
          >
            {methodologySteps.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', position: 'relative' }}>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--accent-cyan)',
                    opacity: 0.8
                  }}
                >
                  {item.step}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{item.name}</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="btn btn-primary" onClick={onOpenConsultation} style={{ padding: '0.85rem 2rem' }}>
              <span>Schedule Architecture Review</span>
              <Zap size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
