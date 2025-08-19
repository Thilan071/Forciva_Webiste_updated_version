import React, { useState, useEffect } from 'react';

const CookiePreferences = ({ onClose }) => {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setCookiePreferences(JSON.parse(consent));
    }
  }, []);

  const handlePreferenceChange = (type) => {
    if (type === 'essential') return;
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookiePreferences));
    if (onClose) onClose();
  };

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    if (onClose) onClose();
  };

  const rejectAll = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    setCookiePreferences(essentialOnly);
    localStorage.setItem('cookieConsent', JSON.stringify(essentialOnly));
    if (onClose) onClose();
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(4px)'
      }}
      onClick={(e) => e.target === e.currentTarget && onClose && onClose()}
    >
      <div 
        className="w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl rounded-xl overflow-hidden"
        style={{ 
          backgroundColor: '#1F3440',
          border: '1px solid #374151'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: '#374151' }}>
          <h2 className="text-2xl font-bold text-white">Cookie Preferences</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-700 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="text-gray-300 space-y-6 leading-relaxed">
            <p>
              Customize your cookie preferences below. Essential cookies are required for the website to function and cannot be disabled.
            </p>

            {/* Essential Cookies */}
            <div className="p-5 rounded-lg" style={{ backgroundColor: 'rgba(55, 65, 81, 0.3)', border: '1px solid #374151' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">Essential Cookies</h3>
                <div className="relative" title="Essential cookies cannot be disabled">
                  <div 
                    className="w-12 h-6 rounded-full shadow-inner relative" 
                    style={{ backgroundColor: '#6B7280', cursor: 'not-allowed' }}
                  >
                    <div 
                      className="w-5 h-5 bg-gray-300 rounded-full shadow absolute top-0.5"
                      style={{ transform: 'translateX(24px)' }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                These cookies are necessary for the website to function and cannot be switched off in our systems.
              </p>
              <p className="text-orange-400 text-xs font-medium">
                🔒 Always Active - Cannot be disabled
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className="p-5 rounded-lg" style={{ backgroundColor: 'rgba(55, 65, 81, 0.3)', border: '1px solid #374151' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">Analytics Cookies</h3>
                <button
                  onClick={() => handlePreferenceChange('analytics')}
                  className="relative focus:outline-none"
                >
                  <div 
                    className="w-12 h-6 rounded-full shadow-inner transition-colors duration-300 relative" 
                    style={{ backgroundColor: cookiePreferences.analytics ? '#25BDB0' : '#4B5563' }}
                  >
                    <div 
                      className="w-5 h-5 bg-white rounded-full shadow absolute top-0.5 transition-transform duration-300"
                      style={{ 
                        transform: cookiePreferences.analytics ? 'translateX(24px)' : 'translateX(2px)' 
                      }}
                    ></div>
                  </div>
                </button>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
              </p>
              <p className="text-gray-500 text-xs">
                Examples: Google Analytics, page view tracking, user behavior analysis
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="p-5 rounded-lg" style={{ backgroundColor: 'rgba(55, 65, 81, 0.3)', border: '1px solid #374151' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">Marketing Cookies</h3>
                <button
                  onClick={() => handlePreferenceChange('marketing')}
                  className="relative focus:outline-none"
                >
                  <div 
                    className="w-12 h-6 rounded-full shadow-inner transition-colors duration-300 relative" 
                    style={{ backgroundColor: cookiePreferences.marketing ? '#25BDB0' : '#4B5563' }}
                  >
                    <div 
                      className="w-5 h-5 bg-white rounded-full shadow absolute top-0.5 transition-transform duration-300"
                      style={{ 
                        transform: cookiePreferences.marketing ? 'translateX(24px)' : 'translateX(2px)' 
                      }}
                    ></div>
                  </div>
                </button>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts.
              </p>
              <p className="text-gray-500 text-xs">
                Examples: Social media integration, personalized advertising, conversion tracking
              </p>
            </div>

            {/* Preference Cookies */}
            <div className="p-5 rounded-lg" style={{ backgroundColor: 'rgba(55, 65, 81, 0.3)', border: '1px solid #374151' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">Preference Cookies</h3>
                <button
                  onClick={() => handlePreferenceChange('preferences')}
                  className="relative focus:outline-none"
                >
                  <div 
                    className="w-12 h-6 rounded-full shadow-inner transition-colors duration-300 relative" 
                    style={{ backgroundColor: cookiePreferences.preferences ? '#25BDB0' : '#4B5563' }}
                  >
                    <div 
                      className="w-5 h-5 bg-white rounded-full shadow absolute top-0.5 transition-transform duration-300"
                      style={{ 
                        transform: cookiePreferences.preferences ? 'translateX(24px)' : 'translateX(2px)' 
                      }}
                    ></div>
                  </div>
                </button>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                These cookies enable the website to remember choices you make and provide enhanced, more personal features.
              </p>
              <p className="text-gray-500 text-xs">
                Examples: Language preferences, theme settings, user interface customizations
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-6 flex-shrink-0" style={{ borderColor: '#374151' }}>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={rejectAll}
              className="px-6 py-3 text-gray-300 hover:text-white border hover:border-gray-400 rounded-lg transition-all duration-200 font-medium"
              style={{ borderColor: '#4B5563', backgroundColor: '#1F2937' }}
            >
              Reject All
            </button>
            <button
              onClick={savePreferences}
              className="px-6 py-3 text-white rounded-lg transition-all duration-200 flex-1 font-medium hover:opacity-90"
              style={{ backgroundColor: '#25BDB0' }}
            >
              Save Preferences
            </button>
            <button
              onClick={acceptAll}
              className="px-6 py-3 text-white rounded-lg transition-all duration-200 flex-1 font-medium hover:opacity-90"
              style={{ backgroundColor: '#25BDB0' }}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferences;