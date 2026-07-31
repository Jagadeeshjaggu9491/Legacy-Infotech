import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection';
import ClientLogosSection from './components/ClientLogosSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';

import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import ContactPage from './pages/ContactPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function HomePage({ onOpenContact, onExploreServices }) {
  return (
    <>
      <SEO
        title="Prestin IT Solutions | Next-Gen Enterprise Software, AI & Cloud Solutions"
        description="Prestin IT Solutions empowers global enterprises with cloud-native software development, AI engineering, US Healthcare RCM, CRM integrations, and FinTech compliance services."
        keywords="Prestin IT Solutions, Software Engineering, Cloud Architecture, AI Solutions, US Healthcare RCM, FinTech Compliance, Madhapur Hyderabad"
      />
      <HeroSection
        onOpenContact={onOpenContact}
        onExploreServices={onExploreServices}
      />
      <ClientLogosSection />
      <ServicesSection
        onOpenContact={onOpenContact}
      />
      <WhyChooseUsSection
        onOpenContact={onOpenContact}
      />
      <AboutSection
        onOpenContact={onOpenContact}
      />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner
        onOpenContact={onOpenContact}
      />
    </>
  );
}

function MainLayout() {
  const navigate = useNavigate();

  /* Redirects all contact/consultation CTA buttons directly to /contact page */
  const handleOpenContact = () => {
    navigate('/contact');
  };

  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      {/* Enterprise Header Component */}
      <Header onOpenContact={handleOpenContact} />

      {/* Page Router */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenContact={handleOpenContact}
                onExploreServices={handleScrollToServices}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenContact={handleOpenContact} />}
          />
          <Route
            path="/services"
            element={<ServicesPage />}
          />
          <Route
            path="/services/*"
            element={<ServicesPage />}
          />
          <Route
            path="/industries"
            element={<IndustriesPage />}
          />
          <Route
            path="/industries/*"
            element={<IndustriesPage />}
          />
          <Route
            path="/contact"
            element={<ContactPage />}
          />
          <Route
            path="/case-studies"
            element={<CaseStudiesPage onOpenContact={handleOpenContact} />}
          />
          <Route
            path="/careers"
            element={<CareersPage onOpenContact={handleOpenContact} />}
          />
          <Route
            path="/blog"
            element={<BlogPage />}
          />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicyPage />}
          />
          <Route
            path="/terms-conditions"
            element={<TermsPage />}
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Automatically reset window scroll position to top on every page change */}
      <ScrollToTop />
      <MainLayout />
    </BrowserRouter>
  );
}
