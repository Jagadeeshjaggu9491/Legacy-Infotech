import React, { useState } from 'react';
import { Layers, Terminal, Cpu, Database, Shield, Zap, CheckCircle2 } from 'lucide-react';

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState('cloud');

  const categories = [
    { id: 'cloud', label: 'Cloud & DevOps', icon: Layers },
    { id: 'frontend', label: 'Frontend & Mobile', icon: Terminal },
    { id: 'backend', label: 'Backend & Microservices', icon: Cpu },
    { id: 'ai-data', label: 'AI, Data & Databases', icon: Database },
    { id: 'security', label: 'Security & Monitoring', icon: Shield },
  ];

  const techData = {
    cloud: [
      { name: 'Amazon Web Services (AWS)', level: 'Expert', desc: 'EKS, Lambda, S3, RDS, DynamoDB, VPC, CloudFront', score: '98%' },
      { name: 'Kubernetes & Docker', level: 'Production Grade', desc: 'Cluster orchestration, Helm charts, Service Mesh (Istio)', score: '96%' },
      { name: 'Terraform & Pulumi', level: 'Infrastructure-as-Code', desc: 'Automated multi-environment cloud provisioning', score: '95%' },
      { name: 'Microsoft Azure', level: 'Enterprise Certified', desc: 'AKS, Azure Functions, Blob Storage, CosmosDB', score: '92%' },
      { name: 'Google Cloud (GCP)', level: 'Advanced', desc: 'GKE, Cloud Run, BigQuery, Vertex AI', score: '90%' },
      { name: 'GitLab CI / GitHub Actions', level: 'Automated Pipelines', desc: 'Zero-touch CI/CD deployment automation', score: '97%' }
    ],
    frontend: [
      { name: 'React 18 / Next.js 14', level: 'Core Stack', desc: 'Server Components, SSR, Micro-frontends, State Management', score: '99%' },
      { name: 'TypeScript', level: 'Strict Mode', desc: 'Full-stack type safety across APIs and frontend client apps', score: '97%' },
      { name: 'React Native / Expo', level: 'Mobile', desc: 'Cross-platform iOS & Android enterprise mobile apps', score: '94%' },
      { name: 'Tailwind CSS & Vanilla CSS', level: 'Design Systems', desc: 'Custom responsive design systems & glassmorphic UIs', score: '98%' },
      { name: 'GraphQL & WebSockets', level: 'Real-time', desc: 'Apollo Client, subscriptions, real-time data streaming', score: '93%' },
      { name: 'Vite & Webpack', level: 'Build Tooling', desc: 'Optimized bundlers, tree-shaking, lightning fast hot-reload', score: '96%' }
    ],
    backend: [
      { name: 'Node.js & Express / NestJS', level: 'Core Runtime', desc: 'Asynchronous event loops, REST APIs, Microservices', score: '98%' },
      { name: 'Go (Golang)', level: 'High Concurrency', desc: 'Ultra-fast microservices, gRPC services, low memory footprint', score: '95%' },
      { name: 'Python (FastAPI / Django)', level: 'AI & Data Services', desc: 'FastAPI microservices, async task workers (Celery)', score: '96%' },
      { name: 'Java Spring Boot 3', level: 'Enterprise', desc: 'Refactored Java 17/21 enterprise services, JPA/Hibernate', score: '92%' },
      { name: 'Apache Kafka & RabbitMQ', level: 'Event Streaming', desc: 'Distributed event-driven pub/sub data pipelines', score: '94%' },
      { name: 'gRPC & Protocol Buffers', level: 'Low Latency', desc: 'High performance inter-microservice IPC communications', score: '93%' }
    ],
    'ai-data': [
      { name: 'PyTorch & TensorFlow', level: 'AI Frameworks', desc: 'Custom neural network architectures & fine-tuning', score: '94%' },
      { name: 'OpenAI API & LangChain', level: 'GenAI & RAG', desc: 'Retrieval-Augmented Generation & autonomous agents', score: '96%' },
      { name: 'PostgreSQL & pgvector', level: 'Relational & Vector', desc: 'ACID compliance, vector embeddings search, partitioning', score: '98%' },
      { name: 'Pinecone & Qdrant', level: 'Vector DBs', desc: 'High-speed similarity search for enterprise RAG pipelines', score: '93%' },
      { name: 'Redis Enterprise', level: 'In-Memory Cache', desc: 'Sub-millisecond caching, session stores, rate limiters', score: '97%' },
      { name: 'MongoDB / DynamoDB', level: 'NoSQL Scale', desc: 'Flexible schema document stores for high throughput', score: '95%' }
    ],
    security: [
      { name: 'HashiCorp Vault', level: 'Secrets Management', desc: 'Dynamic secret management, encryption key rotation', score: '95%' },
      { name: 'Datadog & Grafana', level: 'Observability', desc: 'Real-time telemetry, logs, metrics, synthetic monitoring', score: '97%' },
      { name: 'SonarQube & Snyk', level: 'Code Security', desc: 'Static code analysis, dependency vulnerability scans', score: '96%' },
      { name: 'Keycloak & Auth0', level: 'Identity Governance', desc: 'OAuth2 / OIDC, Single Sign-On (SSO), MFA enforcement', score: '94%' },
      { name: 'Prometheus & Jaeger', level: 'Distributed Tracing', desc: 'APM metrics collection & microservice latency tracing', score: '95%' },
      { name: 'Cloudflare Enterprise', level: 'DDoS & WAF', desc: 'Web Application Firewall, edge CDN, bot mitigation', score: '96%' }
    ]
  };

  return (
    <section id="tech-stack" style={{ padding: '6rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
          <div className="badge badge-emerald" style={{ marginBottom: '0.8rem' }}>
            <Zap size={14} />
            <span> battle-tested Tech Stack</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800 }}>
            Powered by Modern <span className="gradient-text">Engineering Tools</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.75rem' }}>
            We leverage cutting-edge frameworks, cloud platforms, and security standards to build scalable systems.
          </p>

          {/* Navigation Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem',
              marginTop: '2rem'
            }}
          >
            {categories.map(cat => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.7rem 1.3rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: '1px solid',
                    borderColor: activeTab === cat.id ? 'var(--accent-cyan)' : 'var(--border-color)',
                    background: activeTab === cat.id ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))' : 'rgba(255, 255, 255, 0.03)',
                    color: activeTab === cat.id ? 'var(--text-main)' : 'var(--text-muted)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <IconComponent size={16} color={activeTab === cat.id ? 'var(--accent-cyan)' : 'var(--text-muted)'} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {techData[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.8rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>{item.name}</h3>
                  <span className="badge badge-cyan" style={{ fontSize: '0.75rem' }}>{item.level}</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.2rem' }}>
                  {item.desc}
                </p>
              </div>

              {/* Progress Bar & Proficiency */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.4rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
                  <span>Production Mastery</span>
                  <span style={{ color: 'var(--accent-cyan)' }}>{item.score}</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: item.score,
                      height: '100%',
                      background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))',
                      borderRadius: '3px',
                      transition: 'width 0.6s ease'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
