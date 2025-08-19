import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Accessibility from './pages/Accessibility';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy-policy':
        return <PrivacyPolicy />;
      case 'terms-of-service':
        return <TermsOfService />;
      case 'cookie-policy':
        return <CookiePolicy />;
      case 'accessibility':
        return <Accessibility />;
      default:
        return (
          <>
            <Header />
            <Hero />
            <Services />
            <About />
            <Portfolio />
            <Contact />
            <Footer setCurrentPage={setCurrentPage} />
          </>
        );
    }
  };

  return (
    <div className="App">
      {renderPage()}
      <CookieConsent setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
