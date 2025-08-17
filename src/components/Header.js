import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import companyName from '../assets/images/company_name.png';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-dark/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <img src={logo} alt="Forciva Logo" className="h-10 w-auto" />
              <img src={companyName} alt="Forciva" className="h-8 w-auto" />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-primary-accent transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-primary-accent transition-colors duration-200"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-white hover:text-primary-accent transition-colors duration-200"
              >
                Our Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-primary-accent transition-colors duration-200"
              >
                Contact
              </button>
              
              {/* CTA Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-cta-yellow text-primary-dark px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Header;
