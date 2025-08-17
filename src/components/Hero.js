import React from 'react';
import heroVideo from '../assets/videos/landing.mp4';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden md:items-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-primary-dark/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 pt-20 sm:pt-0">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-snug sm:leading-tight">
          Innovative Software Solutions for a{' '}
          <span className="text-primary-accent">Digital World</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
          Forciva delivers robust, scalable, and professional software engineered to solve your biggest challenges.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-cta-yellow text-primary-dark px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 hover:text-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-cta-yellow"
            style={{
              backgroundColor: '#EDBF43',
              color: '#1F3440',
              border: '2px solid #EDBF43',
              cursor: 'pointer',
              outline: 'none',
              userSelect: 'none',
              position: 'relative',
              zIndex: 30
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
