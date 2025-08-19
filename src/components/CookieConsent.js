import React, { useState, useEffect } from 'react';

const CookieConsent = ({ setCurrentPage }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    preferences: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const preferences = JSON.parse(consent);
      setCookiePreferences(preferences);
    }
  }, []);

  const acceptAll = () => {
    const preferences = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    setCookiePreferences(preferences);
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptEssential = () => {
    const preferences = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    setCookiePreferences(preferences);
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookiePreferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (type) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-4 shadow-lg z-50">
        <div className="container mx-auto">
          {!showSettings ? (
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-2">We use cookies to enhance your experience</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We use cookies to provide you with the best possible experience on our website. 
                  Some cookies are essential for the site to function, while others help us improve 
                  your experience by providing insights into how the site is being used. 
                  You can customize your cookie preferences or accept all cookies.
                </p>
                <div className="mt-2">
                  <button
                    onClick={() => setCurrentPage && setCurrentPage('cookie-policy')}
                    className="text-primary-accent hover:text-secondary-accent text-sm underline bg-transparent border-none cursor-pointer"
                  >
                    Learn more about our cookie policy
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-colors duration-200 whitespace-nowrap"
                >
                  Customize
                </button>
                <button
                  onClick={acceptEssential}
                  className="px-4 py-2 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-colors duration-200 whitespace-nowrap"
                >
                  Essential Only
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2 bg-primary-accent hover:bg-secondary-accent text-white rounded-lg transition-colors duration-200 whitespace-nowrap"
                  style={{ backgroundColor: '#25BDB0' }}
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">Cookie Preferences</h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Essential Cookies */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">Essential Cookies</h4>
                      <p className="text-gray-400 text-sm">Required for the website to function</p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled={true}
                        className="sr-only"
                      />
                      <div className="w-12 h-6 bg-primary-accent rounded-full shadow-inner" style={{ backgroundColor: '#25BDB0' }}>
                        <div className="w-4 h-4 bg-white rounded-full shadow transform translate-x-7 translate-y-1"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">Analytics Cookies</h4>
                      <p className="text-gray-400 text-sm">Help us understand website usage</p>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('analytics')}
                      className="relative"
                    >
                      <div className={`w-12 h-6 rounded-full shadow-inner transition-colors duration-200 ${
                        cookiePreferences.analytics ? 'bg-primary-accent' : 'bg-gray-600'
                      }`} style={{ backgroundColor: cookiePreferences.analytics ? '#25BDB0' : '' }}>
                        <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 translate-y-1 ${
                          cookiePreferences.analytics ? 'translate-x-7' : 'translate-x-1'
                        }`}></div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">Marketing Cookies</h4>
                      <p className="text-gray-400 text-sm">Used for personalized advertising</p>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('marketing')}
                      className="relative"
                    >
                      <div className={`w-12 h-6 rounded-full shadow-inner transition-colors duration-200 ${
                        cookiePreferences.marketing ? 'bg-primary-accent' : 'bg-gray-600'
                      }`} style={{ backgroundColor: cookiePreferences.marketing ? '#25BDB0' : '' }}>
                        <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 translate-y-1 ${
                          cookiePreferences.marketing ? 'translate-x-7' : 'translate-x-1'
                        }`}></div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Preference Cookies */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">Preference Cookies</h4>
                      <p className="text-gray-400 text-sm">Remember your settings and choices</p>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('preferences')}
                      className="relative"
                    >
                      <div className={`w-12 h-6 rounded-full shadow-inner transition-colors duration-200 ${
                        cookiePreferences.preferences ? 'bg-primary-accent' : 'bg-gray-600'
                      }`} style={{ backgroundColor: cookiePreferences.preferences ? '#25BDB0' : '' }}>
                        <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 translate-y-1 ${
                          cookiePreferences.preferences ? 'translate-x-7' : 'translate-x-1'
                        }`}></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={acceptEssential}
                  className="px-4 py-2 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-colors duration-200"
                >
                  Essential Only
                </button>
                <button
                  onClick={savePreferences}
                  className="px-6 py-2 bg-primary-accent hover:bg-secondary-accent text-white rounded-lg transition-colors duration-200"
                  style={{ backgroundColor: '#25BDB0' }}
                >
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2 bg-primary-accent hover:bg-secondary-accent text-white rounded-lg transition-colors duration-200"
                  style={{ backgroundColor: '#25BDB0' }}
                >
                  Accept All
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop for settings */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowSettings(false)}></div>
      )}
    </>
  );
};

export default CookieConsent;
