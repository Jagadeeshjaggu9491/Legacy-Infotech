import React, { useState } from 'react';
import { Award, ArrowRight, CheckCircle2, Building2, TrendingUp, X, Sparkles } from 'lucide-react';

export default function CaseStudiesSection({ onOpenConsultation }) {
  const [selectedCase, setSelectedCase] = useState(null);
  const [filter, setFilter] = useState('all');

  const caseStudies = [
    {
      id: 'fintech-global',
      category: 'fintech',
      client: 'GlobalPay Financial Services',
      title: 'Modernizing 15-Year-Old Banking Core Monolith to AWS Microservices',
      summary: 'Migrated 4.5 million daily active transactions from on-premise IBM WebSphere to AWS EKS with zero transaction disruption.',
      challenge: 'High latency (800ms API response), monolithic deployment risk, and $3.8M annual infrastructure hardware maintenance.',
      solution: 'Deconstructed 22 domain services using Strangler Fig pattern, implemented Kafka event bus and automated blue-green CI/CD deployment.',
      metrics: [
        { label: 'Latency Reduction', val: '-75% (800ms -> 180ms)' },
        { label: 'Annual Cost Savings', val: '$2.4M / year' },
        { label: 'Transaction Throughput', val: '12,500 TPS' },
        { label: 'Uptime SLA', val: '99.999% Guaranteed' }
      ],
      tech: ['AWS EKS', 'Kafka', 'Java 21', 'PostgreSQL', 'Terraform'],
      imageBadge: 'Banking & FinTech'
    },
    {
      id: 'healthtech-ai',
      category: 'healthtech',
      client: 'CarePulse Health AI',
      title: 'HIPAA-Compliant Patient Telemetry & Predictive AI Pipeline',
      summary: 'Built real-time patient telemetry streaming platform handling 50k+ connected IoT diagnostic devices with GenAI medical summary generation.',
      challenge: 'Strict HIPAA compliance requirement, massive unstructured data ingestion, and slow diagnosis turnaround time.',
      solution: 'Deployed zero-trust Azure Kubernetes cluster, fine-tuned private Llama-3 LLM with RAG architecture on pgvector database.',
      metrics: [
        { label: 'Telemetry Processing', val: '50,000 events/sec' },
        { label: 'Diagnosis Turnaround', val: '4x Faster' },
        { label: 'Compliance Audit', val: '100% HIPAA / SOC2' },
        { label: 'Model Accuracy', val: '99.2%' }
      ],
      tech: ['Azure AKS', 'Python FastAPI', 'pgvector', 'PyTorch', 'Datadog'],
      imageBadge: 'HealthTech & AI'
    },
    {
      id: 'retail-omnichannel',
      category: 'retail',
      client: 'Apex Global Logistics & Retail',
      title: 'Scaling E-Commerce Micro-Frontends for Black Friday Traffic Surge',
      summary: 'Re-architected monolithic Magento application into headless Next.js frontend with Go microservices backend.',
      challenge: 'Server crashes during peak 100k Concurrent Users sale events, high checkout drop-offs.',
      solution: 'Created global Edge CDN caching, decoupled shopping cart API with Redis Cluster, automated auto-scaling Kubernetes nodes.',
      metrics: [
        { label: 'Peak Capacity', val: '250k Concurrent Users' },
        { label: 'Checkout Load Time', val: '0.4 Seconds' },
        { label: 'Black Friday Sales', val: '$48M Revenue (Zero Downtime)' },
        { label: 'Server Costs', val: '-40% Off-Peak' }
      ],
      tech: ['Next.js', 'Go (Golang)', 'Redis', 'GCP Cloud Run', 'Cloudflare'],
      imageBadge: 'E-Commerce & Retail'
    }
  ];

  const filteredCases = filter === 'all'
    ? caseStudies
    : caseStudies.filter(c => c.category === filter);

  return (
    <section id="case-studies" style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '0.8rem' }}>
            <Award size={14} />
            <span>Proven Enterprise Impact</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800 }}>
            Real Success Stories, <span className="gradient-text">Quantifiable Results</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.75rem' }}>
            Discover how Prestin IT Solutions has transformed mission-critical infrastructure for industry leaders worldwide.
          </p>

          {/* Filter Bar */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '1.8rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Case Studies' },
              { id: 'fintech', label: 'FinTech & Banking' },
              { id: 'healthtech', label: 'HealthTech & AI' },
              { id: 'retail', label: 'Retail & E-Commerce' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: filter === tab.id ? 'var(--accent-cyan)' : 'var(--border-color)',
                  background: filter === tab.id ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                  color: filter === tab.id ? 'var(--accent-cyan)' : 'var(--text-muted)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Case Studies */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredCases.map(item => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: '2.2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span className="badge badge-emerald">{item.imageBadge}</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-subtle)', fontWeight: 600 }}>{item.client}</span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '1rem' }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {item.summary}
                </p>

                {/* Key Metrics Pill Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.8rem' }}>
                  {item.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} style={{ padding: '0.75rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{m.label}</div>
                      <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--accent-cyan)', marginTop: '0.2rem' }}>{m.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="btn btn-secondary"
                onClick={() => setSelectedCase(item)}
                style={{ width: '100%', justifyContent: 'space-between', padding: '0.75rem 1.2rem', fontSize: '0.9rem' }}
              >
                <span>Read Full Case Study</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="modal-overlay" onClick={() => setSelectedCase(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '750px' }}>
            <button
              onClick={() => setSelectedCase(null)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              <X size={24} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span className="badge badge-cyan">{selectedCase.imageBadge}</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-subtle)' }}>{selectedCase.client}</span>
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1.5rem' }}>
              {selectedCase.title}
            </h3>

            {/* Problem & Solution Split */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem', marginBottom: '1.8rem' }}>
              <div style={{ padding: '1.25rem', background: 'rgba(244, 63, 94, 0.08)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(244, 63, 94, 0.2)' }}>
                <h4 style={{ color: 'var(--accent-rose)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem' }}>The Legacy Challenge</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.5 }}>{selectedCase.challenge}</p>
              </div>

              <div style={{ padding: '1.25rem', background: 'rgba(16, 185, 129, 0.08)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <h4 style={{ color: 'var(--accent-emerald)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem' }}>The Modernization Architecture</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.5 }}>{selectedCase.solution}</p>
              </div>
            </div>

            {/* Metrics */}
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.8rem' }}>Quantified Business Impact</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {selectedCase.metrics.map((m, idx) => (
                <div key={idx} style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>{m.label}</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--accent-cyan)', marginTop: '0.2rem' }}>{m.val}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                className="btn btn-primary"
                style={{ flex: 1 }}
                onClick={() => {
                  const title = selectedCase.title;
                  setSelectedCase(null);
                  onOpenConsultation(`Consultation regarding: ${title}`);
                }}
              >
                <span>Request Similar Case Strategy</span>
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-secondary" onClick={() => setSelectedCase(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
