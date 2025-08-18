import React from 'react';
import logo from '../assets/images/logo.png';
import companyName from '../assets/images/company_name.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Forciva Logo" className="logo-primary" />
              <img src={companyName} alt="Forciva" className="company-name-primary" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Innovative software solutions for a digital world. We deliver robust, scalable, 
              and professional software engineered to solve your biggest challenges.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-primary-accent hover:text-secondary-accent p-3 rounded-lg transition-colors duration-200"
                aria-label="LinkedIn"
                style={{ color: '#25BDB0' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-primary-accent hover:text-secondary-accent p-3 rounded-lg transition-colors duration-200"
                aria-label="Twitter"
                style={{ color: '#25BDB0' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-primary-accent hover:text-secondary-accent p-3 rounded-lg transition-colors duration-200"
                aria-label="GitHub"
                style={{ color: '#25BDB0' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3" style={{ listStyleType: 'disc', paddingLeft: '1rem' }}>
              <li style={{ color: '#25BDB0' }}>
                <button 
                  onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-accent hover:text-secondary-accent transition-colors duration-200 text-lg"
                  style={{
                    background: 'transparent',
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#25BDB0'
                  }}
                >
                  Services
                </button>
              </li>
              <li style={{ color: '#25BDB0' }}>
                <button 
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-accent hover:text-secondary-accent transition-colors duration-200 text-lg"
                  style={{
                    background: 'transparent',
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#25BDB0'
                  }}
                >
                  About Us
                </button>
              </li>
              <li style={{ color: '#25BDB0' }}>
                <button 
                  onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-accent hover:text-secondary-accent transition-colors duration-200 text-lg"
                  style={{
                    background: 'transparent',
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#25BDB0'
                  }}
                >
                  Our Work
                </button>
              </li>
              <li style={{ color: '#25BDB0' }}>
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-accent hover:text-secondary-accent transition-colors duration-200 text-lg"
                  style={{
                    background: 'transparent',
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#25BDB0'
                  }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Legal</h4>
            <ul className="space-y-3" style={{ listStyleType: 'disc', paddingLeft: '1rem' }}>
              <li style={{ color: 'white' }}>
                <a href="#" className="text-gray-300 hover:text-primary-accent transition-colors duration-200 text-lg">
                  Privacy Policy
                </a>
              </li>
              <li style={{ color: 'white' }}>
                <a href="#" className="text-gray-300 hover:text-primary-accent transition-colors duration-200 text-lg">
                  Terms of Service
                </a>
              </li>
              <li style={{ color: 'white' }}>
                <a href="#" className="text-gray-300 hover:text-primary-accent transition-colors duration-200 text-lg">
                  Cookie Policy
                </a>
              </li>
              <li style={{ color: 'white' }}>
                <a href="#" className="text-gray-300 hover:text-primary-accent transition-colors duration-200 text-lg">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Forciva. All Rights Reserved.
            </div>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="text-gray-300 hover:text-primary-accent p-2 rounded-lg transition-colors duration-200 group"
              aria-label="Back to top"
            >
              <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
