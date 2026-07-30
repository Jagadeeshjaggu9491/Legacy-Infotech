import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, initialService, onSubmitted }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: initialService || 'Legacy System Modernization',
    budget: '$50k - $150k',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSubmitted) {
        onSubmitted(`Consultation request received for ${formData.company || 'your organization'}! We will contact you within 2 business hours.`);
      }
    }, 1000);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleResetAndClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <button
          onClick={handleResetAndClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <span className="badge badge-cyan">
                <Sparkles size={14} /> Schedule Technical Discovery Call
              </span>
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.4rem' }}>
              Book Your <span className="gradient-text">Strategy Session</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
              Connect directly with a Principal Cloud Architect to discuss your system requirements.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    className="form-input"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Company / Organization</label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Global Corp"
                    className="form-input"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Service Focus</label>
                  <select
                    className="form-select"
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Legacy System Modernization">Legacy System Modernization</option>
                    <option value="Cloud Architecture & Migration">Cloud Architecture & Migration</option>
                    <option value="Enterprise AI & ML Integration">Enterprise AI & ML Integration</option>
                    <option value="Cybersecurity & Compliance Audit">Cybersecurity & Compliance Audit</option>
                    <option value="DevOps & Kubernetes Automation">DevOps & Kubernetes Automation</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Estimated Project Budget</label>
                <select
                  className="form-select"
                  value={formData.budget}
                  onChange={e => setFormData({ ...formData, budget: e.target.value })}
                >
                  <option value="< $50k">&lt; $50,000</option>
                  <option value="$50k - $150k">$50,000 - $150,000</option>
                  <option value="$150k - $500k">$150,000 - $500,000</option>
                  <option value="$500k+">$500,000 Enterprise Scale</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Project Objectives / Current Bottlenecks</label>
                <textarea
                  rows="3"
                  className="form-textarea"
                  placeholder="Tell us about your legacy stack, user load, timeline or cloud migration goals..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.9rem', marginTop: '0.5rem' }}
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Confirm Strategy Call Request</span>
                    <Send size={18} />
                  </>
                )}
              </button>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem', fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <ShieldCheck size={14} color="var(--accent-emerald)" /> NDA Guarantee
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Clock size={14} color="var(--accent-cyan)" /> 2-Hour Response Time
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                color: 'var(--accent-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <CheckCircle2 size={44} />
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Request Confirmed!
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.8rem' }}>
              Thank you, <strong>{formData.name}</strong>. A Senior Cloud Solutions Architect from Legacy Infotech has been assigned to review your inquiry for <strong>{formData.company || 'your team'}</strong>.
            </p>

            <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '0.88rem', color: 'var(--text-subtle)', marginBottom: '1.8rem' }}>
              We have sent a calendar invite draft to <strong>{formData.email}</strong>.
            </div>

            <button className="btn btn-emerald" onClick={handleResetAndClose} style={{ padding: '0.8rem 2rem' }}>
              Back to Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
