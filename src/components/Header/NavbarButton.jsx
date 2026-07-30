import React, { useRef } from 'react';
import { animateButtonHover } from '../../hooks/useNavbarAnimations';
import { ArrowRight } from 'lucide-react';

export default function NavbarButton({ onClick, children = 'Contact Us', className = '' }) {
  const btnRef = useRef(null);

  const handleMouseEnter = () => {
    animateButtonHover(btnRef.current, true);
  };

  const handleMouseLeave = () => {
    animateButtonHover(btnRef.current, false);
  };

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`navbar-btn ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.6rem',
        padding: '0.75rem 1.6rem',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: '0.94rem',
        color: '#FFFFFF',
        background: 'linear-gradient(135deg, #0052CC 0%, #0066FF 100%)',
        border: 'none',
        borderRadius: '16px',
        cursor: 'pointer',
        boxShadow: '0 6px 20px rgba(0, 82, 204, 0.4)',
        outline: 'none',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.3s ease'
      }}
    >
      <span>{children}</span>
      <ArrowRight size={16} />
    </button>
  );
}
