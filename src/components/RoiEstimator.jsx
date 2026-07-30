import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, Cpu, ArrowRight, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export default function RoiEstimator({ onOpenConsultation }) {
  const [legacyStack, setLegacyStack] = useState('java-monolith');
  const [targetCloud, setTargetCloud] = useState('aws-k8s');
  const [systemScale, setSystemScale] = useState('medium');

  // Interactive Calculation Logic
  const getEstimation = () => {
    let baseTimeMonths = 4;
    let baseSavingsPct = 40;
    let baseRoiDollar = 450; // in $K
    let perfBoost = 250; // %

    if (legacyStack === 'cobol') {
      baseTimeMonths += 4;
      baseSavingsPct += 15;
      baseRoiDollar += 600;
      perfBoost += 150;
    } else if (legacyStack === 'php-monolith') {
      baseTimeMonths -= 1;
      baseSavingsPct += 5;
      baseRoiDollar += 200;
      perfBoost += 100;
    } else if (legacyStack === 'dotnet-framework') {
      baseTimeMonths += 1;
      baseSavingsPct += 10;
      baseRoiDollar += 350;
      perfBoost += 180;
    }

    if (systemScale === 'large') {
      baseTimeMonths += 3;
      baseRoiDollar *= 3.2;
      baseSavingsPct += 10;
    } else if (systemScale === 'small') {
      baseTimeMonths = Math.max(2, baseTimeMonths - 1);
      baseRoiDollar *= 0.4;
    }

    if (targetCloud === 'aws-k8s' || targetCloud === 'gcp-native') {
      perfBoost += 80;
      baseSavingsPct += 5;
    }

    return {
      timeline: `${baseTimeMonths} - ${baseTimeMonths + 2} Months`,
      costSavings: `${baseSavingsPct}% - ${Math.min(85, baseSavingsPct + 15)}%`,
      roiFormatted: `$${(baseRoiDollar / 100).toFixed(1)}M+`,
      perfBoost: `+${perfBoost}%`
    };
  };

  const results = getEstimation();

  return (
    <section id="roi-estimator" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '0.8rem' }}>
            <Calculator size={14} />
            <span>Interactive Calculator</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800 }}>
            Legacy Modernization <span className="gradient-text">ROI & Cost Estimator</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.75rem' }}>
            Configure your current tech stack and target architecture to calculate estimated migration timelines, infrastructure savings, and 3-year financial ROI.
          </p>
        </div>

        {/* Calculator Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* Controls Input Panel */}
          <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Cpu size={22} color="var(--accent-cyan)" />
              <span>Configure System Parameters</span>
            </h3>

            {/* 1. Legacy Stack Selection */}
            <div>
              <label className="form-label">1. Current Legacy System Stack</label>
              <select
                className="form-select"
                value={legacyStack}
                onChange={e => setLegacyStack(e.target.value)}
              >
                <option value="java-monolith">Java EE 7 / Spring Legacy Monolith</option>
                <option value="cobol">COBOL / Mainframe Infrastructure</option>
                <option value="php-monolith">PHP 5.x / LAMP Stack Monolith</option>
                <option value="dotnet-framework">.NET Framework 4.x / IIS Monolith</option>
                <option value="oracle-db">Legacy Oracle DB / Stored Procedures</option>
              </select>
            </div>

            {/* 2. Target Cloud Architecture */}
            <div>
              <label className="form-label">2. Target Cloud Destination</label>
              <select
                className="form-select"
                value={targetCloud}
                onChange={e => setTargetCloud(e.target.value)}
              >
                <option value="aws-k8s">AWS EKS Containerized Microservices</option>
                <option value="azure-serverless">Microsoft Azure Serverless & AKS</option>
                <option value="gcp-native">Google Cloud Platform Cloud Run & BigQuery</option>
                <option value="hybrid-cloud">Private Cloud & Hybrid Kubernetes</option>
              </select>
            </div>

            {/* 3. System Scale / Active Workload */}
            <div>
              <label className="form-label">3. Enterprise Scale & Workload</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                {[
                  { id: 'small', label: 'Mid-Market', sub: '< 50k Users' },
                  { id: 'medium', label: 'Enterprise', sub: '50k - 500k Users' },
                  { id: 'large', label: 'Global Scale', sub: '500k+ Users' },
                ].map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSystemScale(item.id)}
                    style={{
                      padding: '0.75rem 0.5rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid',
                      borderColor: systemScale === item.id ? 'var(--accent-cyan)' : 'var(--border-color)',
                      background: systemScale === item.id ? 'rgba(6, 182, 212, 0.15)' : 'var(--bg-input)',
                      color: systemScale === item.id ? 'var(--accent-cyan)' : 'var(--text-muted)',
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{item.label}</div>
                    <div style={{ fontSize: '0.7rem', marginTop: '0.2rem', opacity: 0.8 }}>{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ padding: '1rem', background: 'rgba(245, 158, 11, 0.08)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(245, 158, 11, 0.25)', fontSize: '0.82rem', color: 'var(--accent-amber)', display: 'flex', gap: '0.75rem' }}>
              <ShieldAlert size={20} style={{ flexShrink: 0 }} />
              <span>
                Maintaining legacy monoliths costs <strong>3.5x more</strong> per year in technical debt & cloud idle capacity.
              </span>
            </div>
          </div>

          {/* Results Projection Card */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.85), rgba(17, 24, 39, 0.95))',
              border: '1px solid var(--border-glow)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span className="badge badge-emerald">
                  <Sparkles size={14} /> Instant Estimation
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>Refactoring Projection</span>
              </div>

              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontWeight: 600 }}>Projected 3-Year ROI</h4>
              <div
                style={{
                  fontSize: '3.2rem',
                  fontWeight: 800,
                  margin: '0.3rem 0 1.5rem 0',
                  lineHeight: 1
                }}
                className="gradient-text-emerald"
              >
                {results.roiFormatted}
              </div>

              {/* Metrics Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '2rem' }}>
                <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-cyan)', fontSize: '0.82rem', fontWeight: 600 }}>
                    <Clock size={15} /> Migration Timeline
                  </div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: '0.3rem', color: 'var(--text-main)' }}>
                    {results.timeline}
                  </div>
                </div>

                <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald)', fontSize: '0.82rem', fontWeight: 600 }}>
                    <DollarSign size={15} /> Infra Cost Reduction
                  </div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: '0.3rem', color: 'var(--text-main)' }}>
                    {results.costSavings}
                  </div>
                </div>

                <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', gridColumn: 'span 2' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-indigo)', fontSize: '0.82rem', fontWeight: 600 }}>
                    <TrendingUp size={15} /> Throughput & Performance Increase
                  </div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: '0.3rem', color: 'var(--text-main)' }}>
                    {results.perfBoost} Speed & Zero Memory Leaks
                  </div>
                </div>
              </div>
            </div>

            <button
              className="btn btn-emerald"
              onClick={() => onOpenConsultation(`Modernization ROI Quote - ${legacyStack} to ${targetCloud}`)}
              style={{ width: '100%', padding: '0.9rem', fontSize: '0.98rem' }}
            >
              <span>Get Full Modernization Blueprint</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
