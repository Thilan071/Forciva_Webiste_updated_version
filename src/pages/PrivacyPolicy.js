import React from 'react';

const PrivacyPolicy = () => {
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
            <h1 className="text-2xl font-bold text-white">Privacy Policy</h1>
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
              <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
              <p>
                At Forciva, we collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Contact us through our website contact forms</li>
                <li>Request quotes for software development projects</li>
                <li>Subscribe to our newsletter or updates</li>
                <li>Participate in consultations or project discussions</li>
                <li>Provide feedback about our services</li>
              </ul>
              <p className="mt-4">
                <strong>Types of information we collect:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Contact information (name, email, phone number, company)</li>
                <li>Project requirements and specifications</li>
                <li>Business information relevant to potential projects</li>
                <li>Website usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide quotes and consultations for software development projects</li>
                <li>Communicate about project requirements and deliverables</li>
                <li>Deliver our custom software development, cloud, and UI/UX design services</li>
                <li>Send project updates and technical communications</li>
                <li>Improve our website and service offerings</li>
                <li>Comply with legal obligations and protect our business interests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Technical partners and subcontractors who assist in delivering software development projects (with signed confidentiality agreements)</li>
                <li>Cloud service providers who help us host and maintain our website and services</li>
                <li>Legal authorities when required by law</li>
                <li>Professional advisors (lawyers, accountants) bound by confidentiality obligations</li>
              </ul>
              <p className="mt-4">
                <strong>Note:</strong> Any project-specific information shared with technical partners is subject to strict confidentiality agreements to protect your business interests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Cookies and Tracking</h2>
              <p>
                Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences. For more details, see our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access your personal information we hold</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal obligations)</li>
                <li>Opt-out of marketing communications</li>
                <li>Request information about how your data is processed</li>
                <li>Object to processing of your personal data in certain circumstances</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-2">
                <p>Email: privacy@forciva.com</p>
                <p>Business Inquiries: info@forciva.com</p>
                <p>Website: www.forciva.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
