import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Target, Layout, Code2, ShieldCheck, Rocket } from 'lucide-react';
import './ProcessSection.scss';

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.process-step-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: 'Step 01',
      title: 'Discover',
      desc: 'We understand your business, goals and challenges.',
      icon: Search
    },
    {
      num: 'Step 02',
      title: 'Strategy',
      desc: 'We craft the right strategy and roadmap for your success.',
      icon: Target
    },
    {
      num: 'Step 03',
      title: 'Design',
      desc: 'Our designers create intuitive and engaging user experiences.',
      icon: Layout
    },
    {
      num: 'Step 04',
      title: 'Development',
      desc: 'We build scalable, secure and high-quality solutions.',
      icon: Code2
    },
    {
      num: 'Step 05',
      title: 'Testing',
      desc: 'Rigorous testing ensures performance, security and reliability.',
      icon: ShieldCheck
    },
    {
      num: 'Step 06',
      title: 'Deployment & Support',
      desc: 'We deploy, monitor and provide continuous support.',
      icon: Rocket
    }
  ];

  return (
    <section ref={sectionRef} className="process-section-container">
      <div className="container">
        {/* Header */}
        <div className="process-header">
          <span className="process-badge">OUR PROCESS</span>
          <h2 className="process-title">A Proven Process For Success</h2>
        </div>

        {/* 6 Steps Grid with Connecting Lines */}
        <div className="process-grid-wrapper">
          <div className="process-grid">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isLast = idx === steps.length - 1;
              return (
                <div key={idx} className="process-step-card">
                  {/* Icon Circle */}
                  <div className="icon-circle-box">
                    <IconComp size={28} />
                  </div>

                  <span className="step-number-tag">{step.num}</span>

                  <h3 className="step-card-title">{step.title}</h3>

                  <p className="step-card-desc">{step.desc}</p>

                  {/* Connecting Line to next step */}
                  {!isLast && (
                    <div className="connector-line-wrapper">
                      <div className="connector-arrow"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
