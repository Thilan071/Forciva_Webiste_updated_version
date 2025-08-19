import React from 'react';

const Accessibility = () => {
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
            <h1 className="text-2xl font-bold text-white">Accessibility Statement</h1>
            <div></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-gray-300 space-y-6 leading-relaxed">
            <p className="text-lg">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Our Commitment to Accessibility</h2>
              <p>
                Forciva is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Accessibility Standards</h2>
              <p>
                Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines help make web content accessible to people with disabilities including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Visual impairments</li>
                <li>Hearing impairments</li>
                <li>Motor impairments</li>
                <li>Cognitive impairments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Accessibility Features</h2>
              <p>
                Our website includes the following accessibility features:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Keyboard Navigation:</strong> All interactive elements can be accessed using only the keyboard</li>
                <li><strong>Screen Reader Compatibility:</strong> Content is structured to work well with screen readers</li>
                <li><strong>Alt Text:</strong> Images include descriptive alternative text</li>
                <li><strong>Color Contrast:</strong> Sufficient color contrast ratios for text and backgrounds</li>
                <li><strong>Responsive Design:</strong> Content adapts to different screen sizes and zoom levels</li>
                <li><strong>Clear Navigation:</strong> Consistent and logical navigation structure</li>
                <li><strong>Descriptive Links:</strong> Link text clearly describes the destination or function</li>
                <li><strong>Form Labels:</strong> All form inputs have clear, descriptive labels</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Assistive Technologies</h2>
              <p>
                Our website is designed to be compatible with the following assistive technologies:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Screen readers (JAWS, NVDA, VoiceOver, etc.)</li>
                <li>Voice recognition software</li>
                <li>Screen magnification software</li>
                <li>Switch navigation devices</li>
                <li>Alternative keyboards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Known Limitations</h2>
              <p>
                Despite our efforts, there may be some limitations. Currently known issues include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Some third-party embedded content may not be fully accessible</li>
                <li>Certain complex interactive elements may require additional navigation steps</li>
                <li>Some PDF documents may not be fully screen reader compatible</li>
              </ul>
              <p className="mt-4">
                We are actively working to address these issues and improve accessibility across our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Accessibility Assistance</h2>
              <p>
                If you experience any accessibility barriers on our website, we want to help. Here are ways to get assistance:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Contact our accessibility team directly</li>
                <li>Request alternative formats for content</li>
                <li>Report accessibility issues you encounter</li>
                <li>Suggest improvements to our accessibility features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Browser and Device Compatibility</h2>
              <p>
                Our website is designed to work with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Modern web browsers (Chrome, Firefox, Safari, Edge)</li>
                <li>Mobile devices (iOS and Android)</li>
                <li>Tablets and desktop computers</li>
                <li>Various screen resolutions and zoom levels up to 200%</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Ongoing Efforts</h2>
              <p>
                Accessibility is an ongoing effort. We regularly:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Conduct accessibility audits and testing</li>
                <li>Train our development team on accessibility best practices</li>
                <li>Update our content and features to improve accessibility</li>
                <li>Gather feedback from users with disabilities</li>
                <li>Stay current with accessibility standards and guidelines</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                We welcome your feedback on the accessibility of our website. Please contact us using any of the following methods:
              </p>
              <div className="mt-2 space-y-1">
                <p><strong>Email:</strong> accessibility@forciva.com</p>
                <p><strong>Phone:</strong> [Your Phone Number]</p>
                <p><strong>Address:</strong> [Your Company Address]</p>
                <p><strong>Response Time:</strong> We aim to respond to accessibility feedback within 2 business days</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Alternative Access Methods</h2>
              <p>
                If you are unable to access any content or functionality on our website, please contact us for alternative access methods such as:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Phone support for information requests</li>
                <li>Email correspondence for detailed inquiries</li>
                <li>Alternative document formats (large print, audio, etc.)</li>
                <li>In-person assistance when possible</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
