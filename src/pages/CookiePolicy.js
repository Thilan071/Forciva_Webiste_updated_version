import React from 'react';

const CookiePolicy = () => {
  const goBack = () => {
    // Navigate to home page by reloading the page and clearing any state
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Header */}
      <div className="bg-primary-dark border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={goBack}
              className="text-primary-accent hover:text-secondary-accent transition-colors duration-200 bg-transparent border-none cursor-pointer"
            >
              ← Back to Home
            </button>
            <h1 className="text-2xl font-bold text-white">Cookie Policy</h1>
            <div></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-gray-300 space-y-6 leading-relaxed">
            <p className="text-lg">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Cookies</h2>
              <p>
                Forciva uses cookies to enhance your experience when visiting our software development website and to improve our services:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality and contact form submissions</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how potential clients interact with our portfolio and service pages</li>
                <li><strong>Preference Cookies:</strong> Remember your preferences for viewing our technical content and case studies</li>
                <li><strong>Performance Cookies:</strong> Monitor website performance to ensure optimal user experience for business visitors</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies</h3>
                  <p>These cookies are necessary for the website to function and cannot be switched off in our systems.</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Load balancing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Analytics Cookies</h3>
                  <p>These cookies help us understand how potential clients and visitors interact with our software development website by collecting and reporting information anonymously.</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Google Analytics for business website performance</li>
                    <li>Page view tracking for service and portfolio pages</li>
                    <li>User behavior analysis for improving client experience</li>
                    <li>Technical content engagement metrics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Preference Cookies</h3>
                  <p>These cookies allow our website to remember choices you make and provide enhanced, more personal features for business visitors.</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Contact form preferences and saved information</li>
                    <li>Technical documentation viewing preferences</li>
                    <li>Portfolio filter and sorting preferences</li>
                    <li>Cookie consent preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Performance Cookies</h3>
                  <p>These cookies help us monitor and improve website performance for business visitors seeking our software development services.</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Website loading speed optimization</li>
                    <li>Error tracking and resolution</li>
                    <li>Content delivery network performance</li>
                    <li>Mobile responsiveness monitoring</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Managing Your Cookie Preferences</h2>
              <p>
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings</li>
                <li><strong>Cookie Banner:</strong> Use our cookie consent banner to manage your preferences</li>
                <li><strong>Opt-out Links:</strong> Some third-party services provide direct opt-out mechanisms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Third-Party Services</h2>
              <p>
                Our software development website integrates with select third-party services that may set cookies:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Google Analytics:</strong> For website performance analysis and business insights</li>
                <li><strong>Contact Form Services:</strong> For secure handling of client inquiries and project requests</li>
                <li><strong>Professional Networks:</strong> For LinkedIn and other business platform integrations</li>
                <li><strong>Technical Documentation:</strong> For hosting and displaying our development case studies</li>
                <li><strong>Cloud Services:</strong> For content delivery and website hosting optimization</li>
              </ul>
              <p className="mt-4">
                These third-party services operate under their own privacy policies and cookie practices. We recommend reviewing their policies for complete information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Cookie Retention and Management</h2>
              <p>
                Different types of cookies have different retention periods and management options:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Session Cookies:</strong> Automatically deleted when you close your browser after visiting our website</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period to remember your preferences for future visits</li>
                <li><strong>Essential Cookies:</strong> Retained only as long as necessary for website functionality and security</li>
                <li><strong>Analytics Cookies:</strong> Typically retained for 24 months to provide meaningful business insights</li>
              </ul>
              <p className="mt-4">
                You can manage your cookie preferences at any time through your browser settings or our cookie consent banner.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about our Cookie Policy or how we handle cookies on our software development website, please contact us:
              </p>
              <div className="mt-2">
                <p>Email: privacy@forciva.com</p>
                <p>Business Inquiries: contact@forciva.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please check this page periodically for updates.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
