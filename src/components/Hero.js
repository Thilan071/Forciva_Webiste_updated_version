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
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Innovative Software Solutions for a{' '}
          <span className="text-primary-accent">Digital World</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Forciva delivers robust, scalable, and professional software engineered to solve your biggest challenges.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('services')}
            className="bg-primary-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary-accent transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Our Services
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-cta-yellow text-primary-dark px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 hover:text-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-cta-yellow"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
