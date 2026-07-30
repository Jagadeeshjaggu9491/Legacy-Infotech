import React from 'react';
import { NavLink } from 'react-router-dom';

export default function DropdownItem({ icon: Icon, title, description, to = '#', onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className="mega-dropdown-item"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.9rem',
        padding: '0.85rem 1rem',
        borderRadius: '12px',
        textDecoration: 'none',
        color: '#0F172A',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        background: 'transparent'
      }}
    >
      {Icon && (
        <div
          className="dropdown-icon-box"
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'rgba(0, 82, 204, 0.08)',
            border: '1px solid rgba(0, 82, 204, 0.2)',
            color: '#0052CC',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.25s ease'
          }}
        >
          <Icon size={20} />
        </div>
      )}

      <div>
        <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.92rem', color: '#0F172A', lineHeight: 1.2 }}>
          {title}
        </div>
        {description && (
          <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.2rem', lineHeight: 1.35 }}>
            {description}
          </div>
        )}
      </div>
    </NavLink>
  );
}
