import React from 'react';

const MobileMenu = ({ isOpen, onClose }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Menu Panel */}
      <div className="absolute top-0 right-0 h-full w-80 bg-primary-dark shadow-xl transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-700">
            <h3 className="text-white text-lg font-semibold">Menu</h3>
            <button 
              onClick={onClose}
              className="text-white hover:text-primary-accent transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-6">
            <div className="space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-white hover:text-primary-accent py-3 text-lg transition-colors duration-200"
                style={{ color: 'white', fontWeight: '500', textAlign: 'left', backgroundColor: 'transparent', border: 'none' }}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-white hover:text-primary-accent py-3 text-lg transition-colors duration-200"
                style={{ color: 'white', fontWeight: '500', textAlign: 'left', backgroundColor: 'transparent', border: 'none' }}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left text-white hover:text-primary-accent py-3 text-lg transition-colors duration-200"
                style={{ color: 'white', fontWeight: '500', textAlign: 'left', backgroundColor: 'transparent', border: 'none' }}
              >
                Our Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-white hover:text-primary-accent py-3 text-lg transition-colors duration-200"
                style={{ color: 'white', fontWeight: '500', textAlign: 'left', backgroundColor: 'transparent', border: 'none' }}
              >
                Contact
              </button>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-cta-yellow text-primary-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
                style={{ backgroundColor: '#EDBF43', color: '#1F3440', fontWeight: '600', border: 'none' }}
              >
                Get a Quote
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
