import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Graphic */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary-accent to-secondary-accent rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              {/* Abstract Tech Pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <pattern id="tech-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="2" fill="white" />
                      <path d="M10 2 L18 10 L10 18 L2 10 Z" stroke="white" strokeWidth="0.5" fill="none" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#tech-pattern)" />
                </svg>
              </div>
              
              {/* Tech Icon */}
              <div className="relative z-10">
                <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              Who <span className="text-primary-accent">We Are</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Forciva was founded on the principle of engineering excellence. We are a team of passionate developers, designers, and strategists dedicated to building technology that makes a real impact.
              </p>
              
              <p>
                Our commitment is to quality, transparency, and building lasting partnerships with our clients. We believe that great software is not just about writing code—it's about understanding your business, your users, and your goals.
              </p>
              
              <p>
                With years of experience across various industries, we bring a wealth of knowledge and best practices to every project, ensuring that your software solution is not just functional, but exceptional.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-accent mb-2">50+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-accent mb-2">5+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-accent mb-2">100%</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="bg-primary-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-accent transition-colors duration-300">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
