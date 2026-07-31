import React, { useState, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useScrollHeader } from '../../hooks/useScrollHeader';
import { useNavbarAnimations, animateNavItemHover } from '../../hooks/useNavbarAnimations';
import NavbarButton from './NavbarButton';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import brandLogo from '../../assets/logo/logo.png';
import { ChevronDown, Menu } from 'lucide-react';
import './Header.scss';

export default function Header({ onOpenContact }) {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navListRef = useRef(null);
  const buttonRef = useRef(null);

  const navigate = useNavigate();

  // GSAP scroll hook
  const isScrolled = useScrollHeader(headerRef, logoRef);

  // GSAP entrance animation hook
  useNavbarAnimations(logoRef, navListRef, buttonRef);

  // State for Mega Dropdowns & Mobile Menu
  const [activeDropdown, setActiveDropdown] = useState(null); // 'services' | 'industries' | null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hover grace timer ref to prevent dropdown flickering when traveling cursor
  const closeTimerRef = useRef(null);

  const handleMouseEnter = (name) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220); // 220ms smooth grace period for cursor traversal
  };

  const closeDropdown = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    setActiveDropdown(null);
  };

  const handleHeaderClick = (path) => {
    closeDropdown();
    navigate(path);
  };

  return (
    <>
      <header ref={headerRef} className="header-container">
        <div className="header-wrapper">
          {/* Company Logo on Left */}
          <Link to="/" ref={logoRef} className="brand-logo-link" onClick={closeDropdown}>
            <img
              src={brandLogo}
              alt="Prestin IT Solutions Logo"
              style={{
                height: '46px',
                width: 'auto',
                display: 'block',
              }}
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="desktop-only">
            <ul ref={navListRef} className="desktop-nav-menu">
              {/* Home */}
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
                  onMouseEnter={(e) => animateNavItemHover(e.currentTarget, true)}
                  onMouseLeave={(e) => animateNavItemHover(e.currentTarget, false)}
                  onClick={closeDropdown}
                >
                  Home
                </NavLink>
              </li>

              {/* About Us */}
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
                  onMouseEnter={(e) => animateNavItemHover(e.currentTarget, true)}
                  onMouseLeave={(e) => animateNavItemHover(e.currentTarget, false)}
                  onClick={closeDropdown}
                >
                  About Us
                </NavLink>
              </li>

              {/* Services Mega Dropdown - Opens on Hover & Directs on Click */}
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`nav-link-item ${activeDropdown === 'services' ? 'menu-open active' : ''}`}
                  onClick={() => handleHeaderClick('/services')}
                  onMouseEnter={(e) => animateNavItemHover(e.currentTarget, true)}
                  onMouseLeave={(e) => animateNavItemHover(e.currentTarget, false)}
                  style={{ background: 'none', border: 'none', outline: 'none' }}
                >
                  <span>Services</span>
                  <ChevronDown size={15} className="dropdown-chevron" />
                </button>

                <MegaMenu
                  type="services"
                  isOpen={activeDropdown === 'services'}
                  onClose={closeDropdown}
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                />
              </li>

              {/* Industries Mega Dropdown - Opens on Hover & Directs on Click */}
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter('industries')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`nav-link-item ${activeDropdown === 'industries' ? 'menu-open active' : ''}`}
                  onClick={() => handleHeaderClick('/industries')}
                  onMouseEnter={(e) => animateNavItemHover(e.currentTarget, true)}
                  onMouseLeave={(e) => animateNavItemHover(e.currentTarget, false)}
                  style={{ background: 'none', border: 'none', outline: 'none' }}
                >
                  <span>Industries</span>
                  <ChevronDown size={15} className="dropdown-chevron" />
                </button>

                <MegaMenu
                  type="industries"
                  isOpen={activeDropdown === 'industries'}
                  onClose={closeDropdown}
                  onMouseEnter={() => handleMouseEnter('industries')}
                  onMouseLeave={handleMouseLeave}
                />
              </li>

              {/* Case Studies */}
              <li className="nav-item">
                <NavLink
                  to="/case-studies"
                  className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
                  onMouseEnter={(e) => animateNavItemHover(e.currentTarget, true)}
                  onMouseLeave={(e) => animateNavItemHover(e.currentTarget, false)}
                  onClick={closeDropdown}
                >
                  Case Studies
                </NavLink>
              </li>

              {/* Careers */}
              <li className="nav-item">
                <NavLink
                  to="/careers"
                  className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
                  onMouseEnter={(e) => animateNavItemHover(e.currentTarget, true)}
                  onMouseLeave={(e) => animateNavItemHover(e.currentTarget, false)}
                  onClick={closeDropdown}
                >
                  Careers
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Right CTA Button & Mobile Trigger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div ref={buttonRef} className="desktop-only">
              <NavbarButton onClick={onOpenContact}>
                Contact Us
              </NavbarButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="mobile-hamburger-btn"
              aria-label="Open navigation menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Offcanvas Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenContact={onOpenContact}
      />
    </>
  );
}
